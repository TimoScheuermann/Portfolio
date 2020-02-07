<template>
  <div>
    <p-landing title="Contact" blur="true"></p-landing>
    <h1>Contact</h1>
    <p-slideshow :images="slides()"></p-slideshow>
    <tc-button :navigation="{ name: 'Google.com', destiny: 'https://google.com' }"></tc-button>
    <tc-button :navigation="{ name: 'GitHub', destiny: { name: 'github' } }"></tc-button>
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
        <div class="inde">{{ index }}</div>
        <div class="i">
          <span :class="'ti-' + icon.name"></span>
        </div>
        <div class="name">{{ icon.name }}</div>
      </div>
    </div>
    <div class="filter">
      <tc-checkbox title="Hallo Welt"></tc-checkbox>
      <tc-direction title="Richtung"></tc-direction>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCButton from "../components/shared/TC-Button.vue";
import TCCard from "../components/shared/TC-Card.vue";
import PNavbar from "../components/common/P-Navbar.vue";
import PLanding from "../components/common/P-Landing.vue";
import icons from "@/icon5";
import projects from "@/projects";
import { Icon } from "../models/Icons/Icon.model";
import TCCheckbox from "../components/shared/filter/TC-Checkbox.vue";
import TCDirection from "../components/shared/filter/TC-Direction.vue";
import PSlideshow from "../components/home/P-Slideshow.vue";
@Component({
  components: {
    "tc-button": TCButton,
    "tc-card": TCCard,
    "tc-checkbox": TCCheckbox,
    "tc-direction": TCDirection,
    "p-landing": PLanding,
    "p-slideshow": PSlideshow
  }
})
export default class ContactView extends Vue {
  public icons(): Icon[] {
    return icons;
  }
  public slides(): string[] {
    return projects.map(x => x.images.background);
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/variables";
// @import "../icons/style.css";
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
</style>
