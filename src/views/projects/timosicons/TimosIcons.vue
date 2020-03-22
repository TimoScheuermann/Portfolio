<template>
  <div content>
    <tc-header title="Timos Icons" />

    <div class="hero">
      <div class="logo">
        <img src="../../../assets/projects/timosicons/timosicons.svg" />
      </div>

      <tc-card rounded="true" title="Timo's Icons" class="card">
        <img class="card-image" src="assets/icons.png" />
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          quos ratione porro commodi quo fuga, numquam nostrum eos repellendus
          illo corrupti recusandae nobis possimus. Temporibus deleniti eligendi
          ex rem fuga.
        </div>
        <br />

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
.card {
  max-width: 600px;
  .card-image {
    filter: drop-shadow(4px 8px 20px rgba(0, 0, 0, 0.19));
  }
}
.hero {
  // display: grid;
  // grid-template-columns: 1fr 2fr;
  // grid-gap: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  .logo {
    max-width: 400px;
  }

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
