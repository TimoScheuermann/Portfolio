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
      <tc-headline title="Timos Icons" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        voluptatibus ratione, quae repudiandae reiciendis reprehenderit omnis
        dignissimos? Inventore eaque corporis fugiat voluptatem culpa, sint
        cumque maiores, reiciendis consectetur sit distinctio!
      </p>
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

@Component({
  components: {
    "icon-gallery": IconGallery,
    "tc-button": TCButton,
    "tc-header": TCHeader,
    "tc-hero": TCHero,
    "tc-headline": TCHeadline
  }
})
export default class TimosIcons extends Vue {
  public constants: object = constants;
}
</script>

<style lang="scss" scoped>
@import "../../../scss/variables.scss";
[content] {
  padding-top: 5px;
}
.tc-hero {
  .tc-hero-title--image {
    max-width: 300px;
  }
}
.tc-header--button {
  text-align: center;
}
</style>
