<template>
  <div>
    <tc-hero>
      <img slot="background" src="/assets/projects/ticomponents/landing.jpg" />
      <div class="hero">
        <div class="title">Timo's Components</div>
        <div class="subtitle">Custom Vue Components</div>
      </div>
    </tc-hero>
    <div content>
      <tc-headline title="Getting Started" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      iusto quaerat sed quam, adipisci deserunt fugiat ab! Itaque earum
      voluptates commodi consequatur aliquid modi explicabo nam quasi provident?
      Vero, iste?

      <tc-headline title="All Components" />
      <router-link
        :to="{
          name: constants.projectRoutes.timos_components_detail,
          params: { comp: comp.name }
        }"
        class="componentButton"
        v-for="comp in getComponents()"
        :key="comp.name"
      >
        <i :class="'ti-' + comp.icon"></i>
        <span>{{ comp.name }}</span>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import tcComps from "@/components/tc";
import constants from "@/constants";
import { Icon } from "@/models/Icons/Icon.model";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import TCButton from "@/components/tc/button/TC-Button.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-hero": TCHero,
    "tc-card": TCCard,
    "tc-button": TCButton
  }
})
export default class TIComponentsHome extends Vue {
  public constants: {} = constants;

  getComponents(): TCComponent[] {
    return tcComps.sort((a, b) => a.name.localeCompare(b.name));
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
[content] {
  @media #{$isDesktop} {
    padding-top: 10px;
  }
  @media #{$isMobile} {
    padding-top: 0px;
  }
}
.hero {
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
  font-weight: bold;
  .title {
    white-space: nowrap;
    font-size: 1.75em;
  }
  .subtitle {
    opacity: 0.87;
    font-size: 1.2em;
  }
}
.componentButton {
  padding: 20px;
  box-shadow: $shadow;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $color;
  i,
  span {
    display: block;
  }
  i {
    font-size: 30px;
    color: $primary;
    margin-bottom: 10px;
  }
  span {
    font-weight: bold;
    opacity: 0.8;
  }
}
</style>
