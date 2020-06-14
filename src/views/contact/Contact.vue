<template>
  <div class="contact-view">
    <tc-header title="Contact" :dark="true" />
    <tc-hero height="100" unit="vh" :hasFixedHeader="false">
      <!-- src="http://quotesideas.com/wp-content/uploads/2015/05/00482967dce2c1b3bf7fa0ce2e1d4a54.jpg" -->
      <img src="assets/contact/bg.PNG" slot="background" id="background" />
      <tc-card rounded="true" hover="true">
        <tc-button
          icon="user-card"
          name="Card"
          variant="opaque"
          href="assets/contact/Timo Scheuermann.vcf"
        />
        <div class="head">
          <img src="https://avatars0.githubusercontent.com/u/48986503" />
          <div class="fullname">Timo Scheuermann</div>
          <div class="description">UI / UX Designer</div>
        </div>
        <div class="footer">
          <div class="detail">
            <div class="icon">
              <i class="ti-mail" />
            </div>
            <div class="text">
              <tc-link href="mailto://timo.scheuermann@gmx.de">
                Write me<br />an email
              </tc-link>
            </div>
          </div>
          <div class="detail">
            <div class="icon">
              <i class="ti-chat-bubbles" />
            </div>
            <div class="text">
              <tc-link href="https://t.me/timo_scheuermann">
                Message me<br />via Telegram
              </tc-link>
            </div>
          </div>
          <div class="detail">
            <div class="icon">
              <i class="ti-pin" />
            </div>
            <div class="text">
              <tc-link
                href="https://duckduckgo.com/?q=mannheim&ia=about&iaxm=maps"
              >
                Mannheim/<br />Germany
              </tc-link>
            </div>
          </div>
        </div>
      </tc-card>
    </tc-hero>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCLink from "@/components/tc/link/TC-Link.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-hero": TCHero,
    "tc-card": TCCard,
    "tc-link": TCLink,
    "tc-button": TCButton
  }
})
export default class ContactView extends Vue {}
</script>
<style lang="scss" scoped>
/deep/ #background {
  filter: blur(20px) brightness(50%);
  padding: 80px;
  margin-left: -55px;
  margin-top: -55px;
}
.tc-button {
  position: absolute !important;
  top: 10px;
  right: 10px;
}
.tc-card {
  background: url("../../../public/assets/contact/world-map.png") #222 {
    size: cover;
    position: top center;
    repeat: no-repeat;
  }
  color: #fff;

  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      $size: 80px;
      height: $size;
      width: $size;
      border-radius: $size;
      margin-bottom: 20px;
    }
    .fullname {
      font-weight: bold;
    }
    .description {
      color: #08f;
    }
  }
  .footer {
    max-width: 80vw;
    width: 500px;
    margin: -30px {
      top: 30px;
    }
    color: #111;
    padding: 20px {
      top: 50px;
    }
    background: url("../../../public/assets/contact/v-card-footer.svg") {
      size: cover;
      position: top center;
      repeat: no-repeat;
    }

    display: flex;
    justify-content: space-around;
    align-items: center;
    .detail {
      .icon {
        font-size: 2.2em;
      }
    }
  }
}
</style>
