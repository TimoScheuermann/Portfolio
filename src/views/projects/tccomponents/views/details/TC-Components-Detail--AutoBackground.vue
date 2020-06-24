<template>
  <div>
    <tc-headline title="Auto Background" />

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
      reprehenderit quaerat beatae nemo ad ipsa? Natus, neque. Nihil suscipit
      aspernatur inventore, accusantium aperiam veniam iste quas quaerat velit?
      Quas, dignissimos!
    </p>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import PortfolioCodeExample from "@/components/projects/TCComponents/CodeExample.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
@Component({
  components: {
    "portfolio-code-example": PortfolioCodeExample,
    "tc-headline": TCHeadline,
    "tc-grid": TCGrid,
  },
})
export default class TCComponentsDetailList extends Vue {}
</script>
