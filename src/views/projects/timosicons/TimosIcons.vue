<template>
  <div content>
    <tc-header title="Timos Icons">
      <tc-button
        icon="save"
        name="Versions"
        :to="{ name: constants.projectRoutes.timos_icons_versions }"
      ></tc-button>
      <tc-button
        icon="download"
        name="Download"
        :to="{ name: constants.projectRoutes.timos_icons_download }"
      ></tc-button>
    </tc-header>

    <div class="hero">
      <div class="logo">
        <img src="../../../assets/projects/timosicons/timosicons.svg" />
      </div>

      <tc-card rounded="true" title="Timo's Icons">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          quos ratione porro commodi quo fuga, numquam nostrum eos repellendus
          illo corrupti recusandae nobis possimus. Temporibus deleniti eligendi
          ex rem fuga.
        </p>
        <img src="img/projects/icons/preview2-icons.png" />

        <tc-button to="#gallery" name="View Gallery"></tc-button>
        <tc-button to="#" name="How to use"></tc-button>
      </tc-card>
    </div>

    <tc-headline
      :title="'Showing ' + iconsSorted.length + '/' + totalIcons() + ' Icons'"
    >
      <tc-input
        v-model="searchQuery"
        type="text"
        placeholder="Icon"
        icon="lens"
      ></tc-input>
    </tc-headline>

    <transition-group name="icon-trans" tag="div" class="gallery">
      <icon-tile
        v-for="icon in iconsSorted"
        :key="icon.name"
        :icon="icon"
      ></icon-tile>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import icons from "@/icon5";
import IconTile from "@/components/projects/TimosIcons/IconTile.vue";
import TCDirection from "@/components/shared/filter/TC-Direction.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCInput from "@/components/tc/input/TC-Input.vue";
import { Icon } from "@/models/Icons/Icon.model";
import constants from "@/constants";

@Component({
  components: {
    "icon-tile": IconTile,
    "tc-card": TCCard,
    "tc-button": TCButton,
    "tc-direction": TCDirection,
    "tc-header": TCHeader,
    "tc-headline": TCHeadline,
    "tc-input": TCInput
  }
})
export default class TimosIcons extends Vue {
  public searchQuery: string = "";
  public constants: object = constants;

  get iconsSorted(): Icon[] {
    return icons
      .filter(x => x.name.includes(this.searchQuery.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
  }
  public totalIcons(): number {
    return icons.length;
  }
}
</script>

<style lang="scss" scoped>
@import "../shared.scss";

.icon-trans-move {
  transition: all 0.4s ease-in-out;
}
.icon-trans-enter-active,
.icon-trans-leave-active {
  transition: all 0.4s;
}
.icon-trans-enter {
  opacity: 0;
  transform: translateY(50px);
}
.icon-trans-leave-to {
  transition: all 0.3s ease-in-out;
  opacity: 0;
  filter: brightness(0);
  transform: scale(0);
}

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

.gallery {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>
