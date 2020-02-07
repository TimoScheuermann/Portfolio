<template>
  <project title="Timo's Icons">
    <div class="hero">
      <div class="logo">
        <img src="../../../assets/projects/timosicons/timosicons.svg" />
      </div>

      <tc-card title="Timo's Icons">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quos ratione porro commodi quo fuga, numquam nostrum eos repellendus illo corrupti recusandae nobis possimus. Temporibus deleniti eligendi ex rem fuga.</p>
        <div class="buttons">
          <tc-button important="true" :navigation="{name: 'View Gallery', destiny: '#gallery'}"></tc-button>
          <tc-button :navigation="{name: 'How to use', destiny: '#'}"></tc-button>
        </div>
      </tc-card>
    </div>

    <div class="section">
      <div class="sectionHead">
        <div class="title">All {{ iconsSorted.length }} Icons</div>
        <div class="filter">
          <tc-checkbox title="Additional Info"></tc-checkbox>
          <tc-direction title="Sort by name" @toggle="toggleDirection"></tc-direction>
        </div>
      </div>
      <transition-group name="icon-trans" tag="div" class="gallery">
        <icon-tile v-for="icon in iconsSorted" :key="icon.name" :icon="icon"></icon-tile>
      </transition-group>
    </div>
  </project>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import icons from "@/icon5";
import IconTile from "../../../components/projects/TimosIcons/IconTile.vue";
import TCCard from "../../../components/shared/TC-Card.vue";
import TCButton from "../../../components/shared/TC-Button.vue";
import TCCheckbox from "../../../components/shared/filter/TC-Checkbox.vue";
import TCDirection from "../../../components/shared/filter/TC-Direction.vue";
import Project from "../../../components/projects/Project.vue";
@Component({
  components: {
    "icon-tile": IconTile,
    "tc-card": TCCard,
    "tc-button": TCButton,
    "tc-checkbox": TCCheckbox,
    "tc-direction": TCDirection,
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    margin-right: 20px;
    img {
      max-width: 30vw;
    }
  }
  .tc-card {
    border-radius: $border-radius;
    .buttons {
      button {
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }
  }
}

.gallery {
  display: grid;
  grid: {
    template-columns: repeat(6, 1fr);
    gap: 20px;
  }
  max-width: 100%;
}
</style>
