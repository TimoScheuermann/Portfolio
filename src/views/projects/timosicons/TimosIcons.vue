<template>
  <div content>
    <tc-header title="Timos Icons" />

    <div class="hero">
      <div class="logo">
        <img src="../../../assets/projects/timosicons/timosicons.svg" />
      </div>

      <tc-card rounded="true" title="Timo's Icons">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          quos ratione porro commodi quo fuga, numquam nostrum eos repellendus
          illo corrupti recusandae nobis possimus. Temporibus deleniti eligendi
          ex rem fuga.
        </div>
        <!-- <img slot="media" src="img/projects/icons/preview2-icons.png" /> -->

        <tc-button
          icon="save"
          name="Versions"
          :to="{ name: constants.projectRoutes.timos_icons_versions }"
        ></tc-button>
        <tc-button
          icon="download"
          name="Getting started"
          :to="{ name: constants.projectRoutes.timos_icons_getting_started }"
        ></tc-button>
      </tc-card>
    </div>
    <icon-gallery />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import constants from "@/constants";
import TCButton from "@/components/tc/button/TC-Button.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import IconGallery from "@/components/projects/TimosIcons/IconGallery.vue";
import TCHeader from "@/components/tc/header/TC-Header.vue";

@Component({
  components: {
    "icon-gallery": IconGallery,
    "tc-card": TCCard,
    "tc-button": TCButton,
    "tc-header": TCHeader
  }
})
export default class TimosIcons extends Vue {
  public constants: object = constants;
}
</script>

<style lang="scss" scoped>
@import "../../../scss/variables.scss";

.hero {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: 30px;
  grid-gap: 20px;

  @media #{$isMobile} {
    grid-template-columns: 1fr;
    .logo {
      display: none;
    }
  }
  .logo {
    img {
      max-width: 100%;
    }
  }
}
</style>
