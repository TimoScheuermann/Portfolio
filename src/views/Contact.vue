<template>
  <div class="contact">
    <tc-hero height="400">
      <img src="assets/contact-hero.webp" slot="background" alt="" />
    </tc-hero>
    <div content>
      <tc-card :rounded="true" :frosted="true" :dark="true">
        <div class="contact-grid">
          <transition-group tag="div" class="contact-form" name="swap">
            <tl-flow flow="column" key="sending" v-if="sending">
              <tc-spinner :dark="true" variant="dots-wave" />
              <b>Sending</b>
            </tl-flow>

            <tl-flow e flow="column" key="error" v-if="status === 'error'">
              <i class="ti-cross-circle"></i>
              <h2>Oops. Something went wrong :(</h2>
              <p>
                Try sending a new message, or contact me by mail or telegram
              </p>
              <tc-button
                @click="reset(false)"
                variant="filled"
                tfbackground="error"
                icon="repeat"
                name="Retry sending"
              />
            </tl-flow>

            <tl-flow s flow="column" key="success" v-if="status === 'success'">
              <i class="ti-checkmark-circle"></i>
              <h2>Thank's for submitting your message :)</h2>
              <p>I'll answer your message a soon as possible.</p>
              <tc-button
                @click="reset"
                variant="filled"
                tfbackground="success"
                icon="pencil"
                name="New Message"
              />
            </tl-flow>

            <div key="form" v-if="!sending && status === 'unknown'">
              <h1>Lets talk</h1>
              <tl-grid minWidth="200">
                <tc-input
                  icon="user"
                  :frosted="true"
                  :dark="true"
                  v-model="message.name"
                  title="Your name"
                  placeholder="John Doe"
                />
                <tc-input
                  icon="mail"
                  :frosted="true"
                  :dark="true"
                  v-model="message.email"
                  title="How can I contact you?"
                  placeholder="E-Mail, phone number, ..."
                />
              </tl-grid>
              <tc-textarea
                :frosted="true"
                :dark="true"
                v-model="message.message"
                title="Message"
                placeholder="What do you want to say :)"
              />
              <tc-button
                name="Send Message"
                variant="filled"
                icon="reply"
                @click="send()"
              />
            </div>
          </transition-group>
          <tl-flow flow="column" class="contact-info">
            <tc-avatar src="assets/me.jpg" />
            <tl-flow horizontal="start">
              <i class="ti-mail" />
              <tc-link href="mailto:timo.scheuermann@gmx.de">
                Write me an E-Mail
              </tc-link>
            </tl-flow>
            <tl-flow horizontal="start">
              <i class="ti-pin" />
              <tc-link
                href="https://duckduckgo.com/?q=mannheim&ia=about&iaxm=maps"
              >
                Mannheim, Germany
              </tc-link>
            </tl-flow>
            <tl-flow horizontal="start">
              <i class="ti-user-card" />
              <tc-link href="assets/contact/Timo Scheuermann.vcf">
                Contact
              </tc-link>
            </tl-flow>
            <tl-flow horizontal="start">
              <i class="ti-telegram" />
              <tc-link href="https://t.me/timo_scheuermann">
                Telegram
              </tc-link>
            </tl-flow>
          </tl-flow>
        </div>
      </tc-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from '@/constants/axios';

@Component
export default class Contact extends Vue {
  public message = {
    message: '',
    email: '',
    name: '',
  };
  public sending = false;
  public status: 'error' | 'success' | 'unknown' = 'unknown';

  public reset(resetMessage = true) {
    if (resetMessage) {
      this.message.message = '';
      this.message.email = '';
      this.message.name = '';
    }
    this.status = 'unknown';
  }

  public async send() {
    this.sending = true;
    axios
      // .post('http://localhost:3000/contact', this.message)
      .post('https://api.timos.design/contact', this.message)
      .then(() => {
        this.status = 'success';
      })
      .catch(() => {
        this.status = 'error';
      })
      .finally(() => {
        this.sending = false;
      });
  }
}
</script>
<style lang="scss" scoped>
.tc-hero img {
  object-position: 50% -50px;
}
.tc-card {
  margin-top: -250px;
}

.swap-enter-active,
.swap-leave-active {
  transition: all 1s;
}
.swap-enter {
  opacity: 0;
  transform: translateY(30px);
}
.swap-leave-to {
  opacity: 0;
  transform: scale(0);
}
.swap-leave-active {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}

.contact-grid {
  display: grid;
  @media only screen and (min-width: 580px) {
    grid-template-columns: 1fr 200px;
  }
  grid-gap: 50px;
  .contact-form {
    position: relative;
    min-height: 350px;

    .tl-grid {
      grid-gap: 0 30px;
    }
    .tc-button {
      margin-top: 20px;
    }

    & > .tl-flow {
      min-height: 350px;
      &[s],
      &[e] {
        h2 {
          margin: 0;
        }
        i {
          margin-bottom: 20px;
          font-size: 4em;
          &.ti-checkmark-circle {
            color: $success;
          }
          &.ti-cross-circle {
            color: $error;
          }
        }
      }
    }
  }
  .contact-info {
    background: rgba($paragraph_dark, 0.5);
    margin: -30px;
    padding: 30px;

    .tc-link {
      color: inherit;
      &::after {
        background: currentColor;
      }
    }
    .tl-flow {
      margin-top: 20px;
      width: 100%;
      i {
        font-size: 1.5em;
        margin-right: 10px;
      }
    }
  }
}
</style>
