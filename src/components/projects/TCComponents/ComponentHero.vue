<template>
  <tc-hero height="100">
    <img slot="background" src="assets/final_trans.png" />
    <div class="title">
      {{ component.name }}
    </div>
  </tc-hero>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import TCHero from "../../tc/hero/TC-Hero.vue";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
@Component({
  components: {
    "tc-grid": TCGrid,
    "tc-hero": TCHero
  }
})
export default class ComponentHero extends Vue {
  @Prop() component!: TCComponent;
  showTile(): boolean {
    return Math.random() > 0.5;
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.tc-hero {
  .title {
    font-weight: bold;
    font-size: 1.5em;
    // color: $primary;
    // background: $paragraph;
    // backdrop-filter: blur(5px);
    padding: 5px;
  }
}

// .tc-hero {
//   .title {
//     font-weight: bold;
//     font-size: 1.5em;
//     background: $paragraph;
//     padding: 5px;
//   }
//   background: $paragraph;
//   padding-bottom: 10px;
// }
// .tc-component-hero {
//   grid-template-rows: repeat(auto-fill, minmax(30px, 1fr));
//   transform-origin: 50% 100%;
//   transform: perspective(350px) rotateX(25deg) translateY(0px);
//   height: 100%;
//   .tile {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     opacity: 0.6;
//     font-size: 30px;
//     &.hidden {
//       visibility: hidden;
//     }
//   }
// }
</style>
