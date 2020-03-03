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
      <tc-grid minWidth="250">
        <router-link
          v-for="comp in getComponents()"
          :key="comp.name"
          :to="{
            name: constants.projectRoutes.timos_components_detail,
            params: { comp: comp.name }
          }"
        >
          <tc-card>
            <i :class="'ti-' + comp.icon"></i>
            <span>{{ comp.name }}</span>
          </tc-card>
        </router-link>
      </tc-grid>

      <tc-headline title="Layout" />
      <tc-grid minWidth="250">
        <router-link
          v-for="layout in getLayouts()"
          :key="layout.name"
          :to="{
            name: constants.projectRoutes.timos_components_detail,
            params: { comp: layout.name }
          }"
        >
          <tc-card>
            <i :class="'ti-' + layout.icon"></i>
            <span>{{ layout.name }}</span>
          </tc-card>
        </router-link>
      </tc-grid>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import tcComps from "@/components/tc";
import tcLayouts from "@/components/tc/_layout";
import constants from "@/constants";
import { Icon } from "@/models/Icons/Icon.model";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import TCButton from "@/components/tc/button/TC-Button.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-hero": TCHero,
    "tc-card": TCCard,
    "tc-button": TCButton,
    "tc-grid": TCGrid
  }
})
export default class TCComponentsHome extends Vue {
  public constants: {} = constants;

  getComponents(): TCComponent[] {
    return tcComps.sort((a, b) => a.name.localeCompare(b.name));
  }
  getLayouts(): TCComponent[] {
    return tcLayouts.sort((a, b) => a.name.localeCompare(b.name));
  }
}
</script>
<style lang="scss" scoped>
@import "../../../../scss/variables";
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
.tc-card {
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
    color: $color;
    font-weight: bold;
    opacity: 0.8;
  }
}
</style>
