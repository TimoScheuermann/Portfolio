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
      <img slot="background" src="assets/projects/timosicons/hero.png" />
      <img
        class="tc-hero-title--image"
        src="assets/projects/timosicons/hero_inner.png"
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
        <div>
          <tc-button
            variant="filled"
            icon="login"
            name="Getting started"
            :to="{ name: constants.projectRoutes.timos_icons_getting_started }"
          />
          <tc-button
            variant="filled"
            tccolor="success"
            icon="tools"
            name="Requests"
            :to="{ name: constants.projectRoutes.timos_icons_requests }"
          />
        </div>
      </div>

      <tc-card :dark="true" rounded="true">
        <div class="xd-header" slot="header">
          <img class="xd-logo" src="assets/repertoire/adobexd.png" />
          <h1>Adobe XD Plug-in</h1>
        </div>
        <div class="xd-indicator">coming soon</div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
          dolorum rem placeat incidunt voluptatum, non sunt quo iste laboriosam
          quisquam consequuntur. Nesciunt, facilis! Inventore, fugiat earum
          harum quia laborum quas!
        </div>
        <br />
        <tc-tooltip tooltip="soon available">
          <tc-button
            name="Download"
            tccolor="error"
            icon="download"
            disabled="true"
          />
        </tc-tooltip>
      </tc-card>

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
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCTooltip from "@/components/tc/tooltip/TC-Tooltip.vue";

@Component({
  components: {
    "icon-gallery": IconGallery,
    "tc-button": TCButton,
    "tc-header": TCHeader,
    "tc-hero": TCHero,
    "tc-headline": TCHeadline,
    "tc-grid": TCGrid,
    "tc-card": TCCard,
    "icon-slot-mashine": IconSlotMashine,
    "tc-tooltip": TCTooltip
  }
})
export default class TimosIcons extends Vue {
  public constants: object = constants;
}
</script>

<style lang="scss" scoped>
@import "../../../scss/variables.scss";

.xd-indicator {
  color: $error;
  @media only screen and (min-width: 630px) {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  @media only screen and (max-width: 629px) {
    width: fit-content;
    margin-top: -20px;
    margin-bottom: 10px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  border: 1px solid currentColor;
  border-radius: $border-radius;
  padding: 2px 5px;
}
.xd-header {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  h1,
  img {
    margin: 0 5px;
  }
  img {
    height: 40px;
    width: 40px;
  }
}

[center] {
  margin-top: -50px;
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
