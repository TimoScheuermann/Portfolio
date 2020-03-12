<template>
  <div>
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
        :selectAble="selectAble"
      ></icon-tile>
    </transition-group>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import IconTile from "./IconTile.vue";
import { Icon } from "@/models/Icons/Icon.model";
import icons from "@/icons";
import constants from "@/constants";
import TCHeadline from "../../tc/headline/TC-Headline.vue";
import TCInput from "../../tc/input/TC-Input.vue";
@Component({
  components: {
    "icon-tile": IconTile,
    "tc-headline": TCHeadline,
    "tc-input": TCInput
  }
})
export default class IconGallery extends Vue {
  @Prop() selectAble!: boolean;

  public constants: {} = constants;
  public searchQuery: string = "";

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
@import "../../../scss/variables";

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

.gallery {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>
