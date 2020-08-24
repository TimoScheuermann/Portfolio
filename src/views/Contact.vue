<template>
  <div class="contact">
    <tc-header title="Contact" variant="sticky" />
    <tc-hero :dark="true">
      <img src="assets/contact-hero.jpg" slot="background" alt="" />
      <h1>Contact</h1>
    </tc-hero>
    <div content="">
      <h1>Get In Touch</h1>
      <div class="contact-grid">
        <transition-group tag="div" class="contact-form" name="swap">
          <div class="form" key="form" v-if="!sending && status === 'unknown'">
            <tl-grid minWidth="200">
              <tc-input
                icon="user"
                v-model="message.name"
                title="Your name"
                placeholder="John Doe"
              />
              <tc-input
                icon="mail"
                v-model="message.email"
                title="How can I contact you?"
                placeholder="E-Mail, phone number, ..."
              />
            </tl-grid>
            <tc-textarea
              v-model="message.message"
              :rows="3"
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
          <tl-flow
            flow="column"
            key="sending"
            class="sending"
            v-else-if="sending"
          >
            <tc-spinner size="30" />
            <h2>Sending...</h2>
          </tl-flow>
          <tl-flow
            flow="column"
            key="error"
            class="error"
            v-else-if="status === 'error'"
          >
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
          <tl-flow flow="column" key="success" class="success" v-else>
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
        </transition-group>
        <div class="bar" />
        <tl-flow flow="column" class="details">
          <tl-flow flow="column">
            <tc-avatar src="assets/me.jpg" />
          </tl-flow>
          <tl-flow horizontal="space-around">
            <a href="mailto:timo.scheuermann@gmx.de">
              <i class="ti-mail" />
            </a>

            <a href="https://duckduckgo.com/?q=mannheim&ia=about&iaxm=maps">
              <i class="ti-pin" />
            </a>

            <a href="assets/contact/Timo Scheuermann.vcf">
              <i class="ti-user-card" />
            </a>

            <a href="https://t.me/timo_scheuermann">
              <i class="ti-telegram" />
            </a>
          </tl-flow>
        </tl-flow>
      </div>
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
.contact {
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 2px 300px;
    grid-gap: 20px;
    .bar {
      background: black;
      opacity: 0.1;
      border-radius: 2px;
      margin: 20px 0;
    }
    .details .tl-flow:nth-child(2) {
      margin-top: 20px;
      a {
        $scale: 50px;
        margin: 10px;
        background: $paragraph;
        width: $scale;
        height: $scale;
        border-radius: $scale;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $color;
        i {
          font-size: 20px;
        }
        transition: all 0.2s ease-in-out;
        &:hover {
          background: $primary;
          color: #fff;
          box-shadow: $shadow;
        }
      }
    }
  }
}

.swap-enter-active,
.swap-leave-active {
  transition: all 0.5s;
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
</style>
