<template>
  <tc-hero height="300">
    <tc-grid slot="background" minWidth="30" class="tc-component-hero">
      <div v-for="(a, b) in Array(610)" :key="b" class="tile">
        <i :class="getRandomIcon(b)"></i>
      </div>
    </tc-grid>
  </tc-hero>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import TCHero from "../../tc/hero/TC-Hero.vue";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import icons from "@/icons";
import { Icon } from "../../../models/Icons/Icon.model";
@Component({
  components: {
    "tc-grid": TCGrid,
    "tc-hero": TCHero
  }
})
export default class ComponentHero extends Vue {
  icons: Icon[] = icons;

  getRandomIcon(index: number, multi: number = 99): string {
    const n = "ti-" + this.icons[(index * 99) % icons.length].name;
    if (n.endsWith("bucket") || n.endsWith("scale")) return "ti-camera";
    return n;
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.tc-hero {
  border: 3px solid red;
  .title {
    font-weight: bold;
    font-size: 1.5em;
    background: $paragraph;
    padding: 5px;
  }
  background: $paragraph;
  padding-bottom: 10px;
  .tc-grid {
    width: 150vw;
  }
}
.tc-component-hero {
  grid-template-rows: repeat(auto-fill, minmax(30px, 1fr));
  transform-origin: 25% 100%;
  transform: perspective(350px) rotateX(25deg) translateY(-370px)
    translateX(-420px);
  height: 100%;
  .tile {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
    font-size: 30px;
    i {
      color: #111;

      text-shadow: 4px 8px 10px rgba(0, 0, 0, 0.3);
      // filter: drop-shadow(4px 8px 20px rgba(0, 0, 0, 0.1));
    }
  }
}
</style>
