<template>
  <div>
    <tc-hero>
      <img slot="background" src="assets/projects/tccomponents/hero.png" />
    </tc-hero>
    <div content>
      <div class="hero-section" center>
        <div class="hero-tiles">
          <span>
            <i class="ti-card" />
          </span>
          <span>
            <i class="ti-button" />
          </span>
          <span>
            <i class="ti-list" />
          </span>
          <span>
            <i class="ti-painting" />
          </span>
        </div>

        <h1>Component Library</h1>
        <p>
          A library of high-quality ready to use components that will help you
          speed up your development workflow.
        </p>
        <div>
          <tc-button
            :to="{
              name: constants.projectRoutes.timos_components_getting_started,
            }"
            variant="filled"
            icon="login"
            name="Getting started"
          />
          <tc-button
            :to="{ name: constants.projectRoutes.timos_components_designer }"
            icon="tools"
            name="Component Designer"
          />
        </div>
      </div>

      <div
        v-for="group in tcComponents"
        :key="group.group"
        class="group-show-real"
        :id="'show-real_' + group.group"
      >
        <tc-list class="tc-components-home--list" :title="group.group">
          <tc-list-item
            v-for="comp in group.components"
            :key="comp.name"
            :to="{
              name: constants.projectRoutes.timos_components_detail,
              params: { comp: comp.name },
            }"
            :title="comp.name"
            :icon="comp.icon"
          />
        </tc-list>
        <tc-grid class="tc-components-home--grid" minWidth="200">
          <router-link
            v-for="comp in group.components"
            :key="comp.name"
            :to="{
              name: constants.projectRoutes.timos_components_detail,
              params: { comp: comp.name },
            }"
          >
            <tc-card rounded="true">
              <i :class="'ti-' + comp.icon" />
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
import tcComponents from "@/components/tc";
import constants from "@/constants";
import TCButton from "@/components/tc/button/TC-Button.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import TCList from "@/components/tc/list/TC-List.vue";
import TCListItem from "@/components/tc/list/TC-List-Item.vue";
import { TCComponentGroup } from "@/models/TCComponents/TCComponentGroup.model";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-hero": TCHero,
    "tc-card": TCCard,
    "tc-button": TCButton,
    "tc-grid": TCGrid,
    "tc-list": TCList,
    "tc-list-item": TCListItem,
  },
})
export default class TCComponentsHome extends Vue {
  public constants: Record<string, unknown> = constants;
  public tcComponents: TCComponentGroup[] = tcComponents;
}
</script>
<style lang="scss" scoped>
@import "../../../../components/tc/_variables.scss";
@import "../../../../components/tc/_mixins.scss";

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

.group-show-real {
  .tc-list {
    margin-bottom: 20px;
  }
  @media only screen and(min-width: 497px) {
    &#show-real_Fundementals {
      display: none;
    }
  }
}

.tc-components-home--list {
  @media only screen and(min-width: 497px) {
    display: none;
  }
}
.tc-components-home--grid {
  @media only screen and(max-width: 496px) {
    display: none;
  }
  margin-bottom: 40px;
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
    font-weight: bold;
    opacity: 0.8;
  }
}

[center] {
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    max-width: 400px;
  }
}
.hero-section {
  margin-bottom: 30px;

  .hero-tiles {
    margin: 20px 0 {
      top: 40px;
    }
    $colors: (
      1: "#eb3b5a",
      2: "#45aaf2",
      3: "#26de81",
      4: "#2bcbba",
    );
    span {
      @each $i, $color in $colors {
        &:nth-child(#{$i}) {
          background: #{$color};
        }
      }

      display: inline-grid;
      width: 50px;
      height: 50px;
      place-items: center;

      border-radius: 5px;
      margin: 5px;
      font-size: 25px;

      i {
        opacity: 0.8;
        color: #fff;
      }
    }
  }
}
</style>
