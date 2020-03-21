<template>
  <div class="view--repertoire">
    <tc-header title="Repertoire" />
    <tc-hero>
      <img
        slot="background"
        src="https://www.swri.org/sites/default/files/styles/client_services_banner/public/industries/AdobeStock_111975726.jpeg"
      />
    </tc-hero>
    <div content>
      <tc-headline title="I am working with" />
      <tc-grid>
        <tc-card v-for="(tool, index) in tools" :key="'t_' + index">
          <portfolio-tool-image slot="media" :src="tool.img" />
          <b>{{ tool.name }}</b>
        </tc-card>
      </tc-grid>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import tools from "@/tools";
import { Tool } from "@/models/Tools/Tool";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import PortfolioToolImage from "@/components/repertoire/ToolImage.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-hero": TCHero,
    "tc-headline": TCHeadline,
    "tc-grid": TCGrid,
    "portfolio-tool-image": PortfolioToolImage,
    "tc-card": TCCard
  }
})
export default class Repertoire extends Vue {
  public tools: Tool[] = tools;
}
</script>
<style lang="scss" scoped>
@import "../../scss/variables.scss";
</style>
