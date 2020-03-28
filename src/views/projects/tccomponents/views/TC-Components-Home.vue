<template>
  <div>
    <tc-hero>
      <img slot="background" src="assets/projects/tccomponents/hero.png" />
    </tc-hero>
    <div content>
      <tc-headline title="Getting Started" />

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea deserunt in
        minima quidem consequatur maiores sed provident, voluptatem voluptate!
        Ipsum molestias excepturi minus officiis possimus. Explicabo magnam a ut
        atque.
      </p>

      <div class="themeSection">
        <tc-headline title="Theme" />
        <tc-grid minWidth="150">
          <router-link
            :to="{
              name: constants.projectRoutes.timos_components_detail,
              params: { comp: 'Colors' }
            }"
          >
            <tc-card>
              <i class="ti-dot"></i>
              <span>Colors</span>
            </tc-card>
          </router-link>
          <router-link :to="{ name: constants.projectRoutes.timos_icons }">
            <tc-card>
              <i class="ti-heart"></i>
              <span>Icons</span>
            </tc-card>
          </router-link>
        </tc-grid>
      </div>

      <div v-for="s in sections" :key="s.name">
        <tc-headline :title="s.name" />
        <tc-grid class="tc-components-home--sections" minWidth="200">
          <router-link
            v-for="comp in s.items()"
            :key="comp.name"
            :to="{
              name: constants.projectRoutes.timos_components_detail,
              params: { comp: comp.name }
            }"
          >
            <div class="sections--list-item">
              <div>
                <i :class="'ti-' + comp.icon"></i>
                <span>{{ comp.name }}</span>
              </div>
              <i class="ti-arrow-right"></i>
            </div>
            <tc-card>
              <i :class="'ti-' + comp.icon"></i>
              <span>{{ comp.name }}</span>
            </tc-card>
          </router-link>
        </tc-grid>
      </div>
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
  public sections: { name: string; items: Function }[] = [
    {
      name: "All " + tcComps.length + " Components",
      items(): TCComponent[] {
        return tcComps.sort((a, b) => a.name.localeCompare(b.name));
      }
    },
    {
      name: "Layout",
      items(): TCComponent[] {
        return tcLayouts.sort((a, b) => a.name.localeCompare(b.name));
      }
    }
  ];
}
</script>
<style lang="scss" scoped>
@import "../../../../scss/variables";
[content] {
  @media #{$isDesktop} {
    padding-top: 10px;
    .themeSection {
      display: none;
    }
  }
  @media #{$isMobile} {
    padding-top: 0px;
  }
}
.tc-components-home--sections {
  @media only screen and(max-width: 496px) {
    .tc-card {
      display: none;
    }
    .sections--list-item {
      display: flex !important;
    }
    grid-gap: 10px;
    grid-template-columns: 1fr !important;
  }

  .sections--list-item {
    display: none;
    &,
    div {
      justify-content: space-between;
      align-items: center;
    }
    color: $color;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      background: $color;
      bottom: -3px;
      opacity: 0.1;
      left: 30px;
      right: 0;
      height: 1px;
    }

    div {
      display: flex;
      i {
        font-size: 20px;
        width: 40px;
      }
      span {
        font-weight: 500;
      }
    }
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
