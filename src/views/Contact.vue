<template>
  <div class="contact">
    <PHeader title="Contact" rootRoute="contact" backTitle="Contact" />

    <tc-hero :hasFixedHeader="false" :dark="$store.getters.darkmode">
      <img src="assets/contact-hero.webp" slot="background" alt="" />
    </tc-hero>

    <div class="section-grid">
      <div class="section-form" content>
        <div max-width>
          <h1>Get In Touch</h1>
          <form @submit.prevent="sendForm">
            <div class="form-element">
              <input
                id="name"
                required
                placeholder=" "
                type="text"
                v-model="form.name"
              />
              <label for="name">Name</label>
            </div>

            <div class="form-element">
              <input
                id="email"
                required
                placeholder=" "
                type="email"
                v-model="form.email"
              />
              <label for="email">Email</label>
            </div>

            <div class="form-element">
              <textarea
                id="message"
                required
                placeholder=" "
                v-model="form.message"
                :rows="numberOfLineBreaks + 1"
              />
              <label for="message">Message</label>
            </div>

            <tl-flow horizontal="start">
              <label for="submit">
                <tc-button
                  :disabled="buttonDisabled"
                  name="Send Message"
                  variant="filled"
                  icon="reply"
                />
              </label>
              <tc-spinner
                v-if="sending"
                :dark="$store.getters.darkmode"
                size="20"
              />
            </tl-flow>
            <input id="submit" type="submit" />
          </form>

          <transition-group name="swap">
            <div key="s" v-if="status === 'success'">
              Thank you for submitting your message. I will answer your message
              as soon as possible
            </div>
            <div key="e" v-if="status === 'error'" error>
              Something went wrong. Try send a new message, or contact me by
              mail or telegram
            </div>
          </transition-group>
        </div>
      </div>

      <div :dark="$store.getters.darkmode" class="section-about" content>
        <div max-width>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions. You can also contact me if you have any questions, business
            proposition, or you want a Website.
          </p>

          <div class="information">
            <a
              target="_blank"
              rel="noopener noreferrer"
              :href="information.location"
            >
              <i class="ti-pin" />Mannheim, Germany
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              :href="information.mail"
            >
              <i class="ti-mail" />contact@timos.design
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              :href="information.vcf"
            >
              <i class="ti-user-card" />Virtual Contact Card (VCF)
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              :href="information.telegram"
            >
              <i class="ti-telegram" />@timo_scheuermann
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import backend from '@/utils/backend';

type FormStatus = 'error' | 'success' | '';

@Component
export default class Contact extends Vue {
  public information = {
    location: 'https://duckduckgo.com/?q=mannheim&ia=about&iaxm=maps',
    mail: 'mailto:contact@timos.design',
    telegram: 'https://t.me/timo_scheuermann',
    vcf: 'assets/contact/Timo Scheuermann.vcf',
  };

  public form = {
    name: '',
    email: '',
    message: '',
  };

  public sending = false;
  public status: FormStatus = '';
  public timer = 0;

  beforeDestroy() {
    clearTimeout(this.timer);
  }

  get numberOfLineBreaks(): number {
    const amount = this.form.message.match(/\n/g || [])?.length || 0;
    if (amount < 3) return 3;
    return amount;
  }

  get buttonDisabled(): boolean {
    const { name, email, message } = this.form;
    return (
      this.sending ||
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0
    );
  }

  public sendForm(): void {
    if (this.sending) return;
    this.sending = true;

    backend
      .post('https://api.timos.design/contact', this.form)
      .then(() => this.setStatus('success'))
      .catch(() => this.setStatus('error'))
      .finally(() => {
        this.sending = false;
        this.form = {
          name: '',
          email: '',
          message: '',
        };
      });
  }

  public setStatus(status: FormStatus): void {
    this.status = status;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.status = '';
    }, 8000);
  }
}
</script>
<style lang="scss" scoped>
.contact {
  [max-width] {
    max-width: 500px;
  }
  .section-grid {
    .section-form,
    .section-about {
      padding-bottom: 20px;
      h1,
      p {
        margin: 0;
      }
    }
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0;
    @media only screen and(min-width: 950px) {
      grid-template-columns: 1fr 1fr;
      min-height: calc(100vh - 200px - env(safe-area-inset-bottom));
      .section-about p {
        margin-top: 80px;
      }
    }
  }
  .section-form {
    form {
      margin-top: 10px;
      .form-element {
        position: relative;
        $space-top: 35px;
        input,
        textarea {
          font: inherit;
          color: inherit;
          background: none;
          outline: none;
          border: none;
          border-radius: $border-radius;
          background: $container_dark;
          margin-top: $space-top;
          padding: 10px;
          width: calc(100% - 20px);

          &:not(:placeholder-shown) ~ label {
            top: #{$space-top - 25px};
            font-weight: 600;
            opacity: 1;
          }
        }

        textarea {
          resize: none;
          height: auto;
          @include custom-scrollbar__dark();
        }

        label {
          transition: all 0.2s ease-out;
          cursor: text;
          position: absolute;
          top: #{$space-top + 10px};
          left: 10px;
          opacity: 0.4;
        }
      }
      .tl-flow {
        margin-top: 20px;
      }
      label[for='submit'] {
        margin-left: -3px;
      }
      input[type='submit'] {
        transform: scale(0);
        opacity: 0;
      }

      .tc-spinner {
        margin-left: 10px;
      }
    }
  }
  .section-about {
    background: $paragraph;
    &[dark] {
      background: $paragraph_dark;
    }

    .information {
      margin-top: 30px;
      @media #{$isMobile} {
        padding-bottom: calc(70px + env(safe-area-inset-bottom));
      }
      a {
        color: inherit;
        text-decoration: none;
        display: block;
        width: fit-content;
        margin-top: 15px;
        font-weight: 500;
        font-size: 16px;
        i {
          margin-right: 20px;
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
