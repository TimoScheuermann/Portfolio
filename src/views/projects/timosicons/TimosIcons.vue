<template>
  <div>
    <tc-header title="Timos Icons">
      <div class="tc-header--button">
        <tc-button
          icon="save"
          name="Versions"
          :to="{ name: constants.projectRoutes.timos_icons_versions }"
        />
      </div>
      <div class="tc-header--button">
        <tc-button
          icon="download"
          name="Getting started"
          :to="{ name: constants.projectRoutes.timos_icons_getting_started }"
        />
      </div>
    </tc-header>

    <tc-hero>
      <img slot="background" src="assets/projects/icons/hero.png" />
      <img
        class="tc-hero-title--image"
        src="assets/projects/icons/hero_inner.png"
      />
    </tc-hero>

    <div content>
      <div class="hero-section" center>
        <div class="hero-tiles">
          <icon-slot-mashine />
          <icon-slot-mashine />
          <icon-slot-mashine />
          <icon-slot-mashine />
          <icon-slot-mashine />
        </div>

        <h1>Icon Library</h1>
        <p>
          A library of high-quality ready to use icons that will help you speed
          up your development workflow.
        </p>
        <tc-button variant="filled" icon="login" name="Getting started" />
      </div>

      <icon-gallery />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import constants from "@/constants";
import TCButton from "@/components/tc/button/TC-Button.vue";
import IconGallery from "@/components/projects/TimosIcons/IconGallery.vue";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import IconSlotMashine from "@/components/projects/TimosIcons/IconSlotMashine.vue";

@Component({
  components: {
    "icon-gallery": IconGallery,
    "tc-button": TCButton,
    "tc-header": TCHeader,
    "tc-hero": TCHero,
    "tc-headline": TCHeadline,
    "icon-slot-mashine": IconSlotMashine
  }
})
export default class TimosIcons extends Vue {
  public constants: object = constants;
}
</script>

<style lang="scss" scoped>
@import "../../../scss/variables.scss";

[center] {
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    max-width: 400px;
  }
}
.tc-hero {
  .tc-hero-title--image {
    max-width: 300px;
  }
}
.tc-header--button {
  text-align: center;
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
      5: "#e67e22"
    );
    @each $i, $color in $colors {
      /deep/ .icon-slot-mashine {
        &:nth-child(#{$i}) {
          i {
            color: #{$color};
          }
        }
      }
    }
  }
}
</style>
