<template>
  <div class="content">
    <tc-header title="Timos Icons">
      <tc-button icon="components" name="Examples"></tc-button>
      <tc-button icon="questionmark" name="Usage"></tc-button>
      <tc-button icon="download" name="Download"></tc-button>
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

    <tc-headline :title="'All ' + iconsSorted.length + ' Icons'">
      <!-- <tc-checkbox title="Additional Info"></tc-checkbox>
      <tc-direction
        title="Sort by name"
        @toggle="toggleDirection"
      ></tc-direction> -->
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
import TCCheckbox from "@/components/shared/filter/TC-Checkbox.vue";
import TCDirection from "@/components/shared/filter/TC-Direction.vue";
import Project from "@/components/projects/Project.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";

@Component({
  components: {
    "icon-tile": IconTile,
    "tc-card": TCCard,
    "tc-button": TCButton,
    "tc-checkbox": TCCheckbox,
    "tc-direction": TCDirection,
    "tc-header": TCHeader,
    "tc-headline": TCHeadline,
    project: Project
  }
})
export default class TimosIcons extends Vue {
  public sortDirection: number = 1;
  public extendedInformation: boolean = false;

  get iconsSorted() {
    return icons.sort(
      (a, b) => this.sortDirection * a.name.localeCompare(b.name)
    );
  }

  public toggleDirection() {
    this.sortDirection *= -1;
  }

  public toggleExtendedInfo(): void {
    this.extendedInformation = !this.extendedInformation;
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
  .logo {
    img {
      max-width: 100%;
    }
  }
}

.gallery {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>
