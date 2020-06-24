<template>
  <div>
    <tc-headline title="Steps" />

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
      reprehenderit quaerat beatae nemo ad ipsa? Natus, neque. Nihil suscipit
      aspernatur inventore, accusantium aperiam veniam iste quas quaerat velit?
      Quas, dignissimos!
    </p>

    <tc-steps></tc-steps>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import PortfolioCodeExample from "@/components/projects/TCComponents/CodeExample.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import TCSteps from "@/components/tc/steps/TC-Steps.vue";
@Component({
  components: {
    "portfolio-code-example": PortfolioCodeExample,
    "tc-headline": TCHeadline,
    "tc-grid": TCGrid,
    "tc-steps": TCSteps,
  },
})
export default class TCComponentsDetailSteps extends Vue {}
</script>
