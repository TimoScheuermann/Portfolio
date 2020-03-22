<template>
  <div content>
    <tc-header title="Contact"></tc-header>
    <h1>Contact</h1>
    <tc-button
      :icon="modal ? 'heart' : 'share'"
      name="Open modal"
      @click="modal = true"
    ></tc-button>
    <div>
      <b>{{ modal }}</b>
    </div>
    <tc-modal
      v-model="modal"
      title="Title djawidjwiadjioawjdij diawjda jidjwaid iawjdoa"
      subtitle="Subtitle"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro autem
      itaque sapiente et cum doloribus, ipsam sit voluptatem illo nulla
      exercitationem sint, non obcaecati nostrum laboriosam corporis ex quia
      iste.
      <tc-card class="cTCC" title="Hallo"></tc-card>
      <tc-card class="cTCC" title="Hallo"></tc-card>
      <tc-card class="cTCC" title="Hallo"></tc-card>
      <tc-card class="cTCC" title="Hallo"></tc-card>
      <tc-card class="cTCC" title="Hallo"></tc-card>
      <div slot="buttons">
        <tc-button variant="filled" icon="checkmark" name="Accept" />
        <tc-button variant="filled" disabled="true" name="Deny" />
      </div>
    </tc-modal>

    <h2>Grid Test</h2>
    <div class="grid-test">
      <div class="a">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellat
        cumque nobis ducimus tenetur deleniti saepe aliquam voluptas nam iure.
        Fugiat illum id inventore, minus corporis voluptas esse eaque quaerat!
      </div>
      <div class="b">
        <tc-button variant="filled" icon="checkmark" name="Accept" />
        <tc-button name="Deny" />
      </div>
    </div>

    <h2>Img test</h2>
    <div class="img-test">
      <img src="assets/card.png" />
    </div>

    <h2>Mobile View</h2>
    <tc-card>
      <p-mobile-view></p-mobile-view>
    </tc-card>
    <h2>Slider</h2>
    <tc-slider v-model="sliderVal"></tc-slider>
    {{ sliderVal }}
    <h2>Toggle</h2>
    <tc-switch v-model="switchOne" />
    {{ switchOne }}
    <h2>Checkbox</h2>
    <tc-checkbox v-model="checkbox" />
    <tc-checkbox title="Hallo" v-model="checkbox" />
    {{ checkbox }}
    <h2>Rainbow</h2>
    <div class="rainbow" :style="{ background: 'hsl(' + i + ', 216%, 56%)' }">
      <h2>Hallo</h2>
    </div>
    <!-- <p-slideshow :images="slides()"></p-slideshow> -->
    <tc-button
      :navigation="{ name: 'Google.com', destiny: 'https://google.com' }"
    ></tc-button>
    <tc-button
      :navigation="{ name: 'GitHub', destiny: { name: 'github' } }"
    ></tc-button>
    <tc-card
      title="Portfolio"
      subtitle="Fun Project about my work"
      :navigation="{ name: 'GitHub', destiny: { name: 'github' } }"
    >
      <img :src="'../img/projects/richie/preview3-richie.png'" />
    </tc-card>
    <tc-card
      title="Portfolio"
      subtitle="Fun Project about my work"
      :navigation="{ name: 'GitHub', destiny: { name: 'github' } }"
      mode="dark"
    ></tc-card>

    <div class="icons">
      <div class="icon" v-for="(icon, index) in icons()" :key="index">
        <div class="inde">{{ icon.css }}</div>
        <div class="i">
          <i :class="'ti-' + icon.name"></i>
        </div>
        <div class="name">{{ icon.name }}</div>
      </div>
    </div>
    <div class="filter">
      <tc-checkbox title="Hallo Welt"></tc-checkbox>
      <tc-direction title="Richtung"></tc-direction>
    </div>
    <tc-hero>
      <img
        slot="background"
        src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/05/Gradient-Roundup-Illustrator-02.jpg"
      />
    </tc-hero>
    <tc-link>Hallo Welt</tc-link>
    <tc-link><i class="ti-peace" /> Was geht ab</tc-link>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCButton from "@/components/tc/button/TC-Button.vue";
import icons from "@/icons";
import projects from "@/projects";
import { Icon } from "@/models/Icons/Icon.model";
import TCDirection from "@/components/shared/filter/TC-Direction.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import TCSwitch from "@/components/tc/switch/TC-Switch.vue";
import TCComponentHero from "@/components/projects/TCComponents/ComponentHero.vue";
import TCLink from "@/components/tc/link/TC-Link.vue";
import TCSlider from "@/components/tc/slider/TC-Slider.vue";
import TCCheckbox from "@/components/tc/checkbox/TC-Checkbox.vue";
import PMobileView from "@/components/shared/mobileView/P-MobileView.vue";
import TCModal from "@/components/tc/modal/TC-Modal.vue";

@Component({
  components: {
    "tc-button": TCButton,
    "tc-card": TCCard,
    "tc-checkbox": TCCheckbox,
    "tc-direction": TCDirection,
    "tc-header": TCHeader,
    "tc-hero": TCHero,
    "tc-switch": TCSwitch,
    "tc-link": TCLink,
    "tc-compHero": TCComponentHero,
    "tc-slider": TCSlider,
    "p-mobile-view": PMobileView,
    "tc-modal": TCModal
  }
})
export default class ContactView extends Vue {
  public icons(): Icon[] {
    return icons.sort((a, b) => a.name.localeCompare(b.name));
  }
  public slides(): string[] {
    return projects.map(x => x.images.background);
  }
  public i: number = 0;
  sliderVal: number = 33;
  switchOne: boolean = true;
  checkbox: boolean = false;
  modal: boolean = false;

  created() {
    this.l();
  }
  l() {
    this.i++;
    setTimeout(() => {
      this.l();
    }, 50);
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/variables";
h1 {
  color: $primary;
  &::after {
    color: $color;
    opacity: 0.8;
  }
}
@media #{$isMobile} {
  h1 {
    &::after {
      content: " isMobile";
    }
  }
}
@media #{$isDesktop} {
  h1 {
    &::after {
      content: " isDesktop";
    }
  }
}
.icon {
  display: flex;
  & > * {
    width: 100px;
    white-space: nowrap;
  }
}
.filter {
  display: flex;
  align-items: center;
}
.rainbow {
  text-align: center;
  padding: 20px;
  color: #fff;
}
.grid-test {
  background: red;
  width: 200px;
  display: grid;
  grid-template-rows: 1fr auto;
  max-height: 200px;
  .a {
    background: orange;
    max-height: 200px;
    overflow: auto;
  }
  .b {
    background: green;
    .tc-button {
      display: block;
    }
  }
}
.cTCC {
  margin: 10px 5px;
}

.img-test {
  // background: gray;
  img {
    transform-origin: 50% 100%;
    transform: perspective(350px) rotateX(25deg) translateY(0px);
    filter: drop-shadow(4px 8px 20px rgba(0, 0, 0, 0.19));
  }
}
</style>
