<template>
  <div>
    <tc-headline title="Badge" />

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
      reprehenderit quaerat beatae nemo ad ipsa? Natus, neque. Nihil suscipit
      aspernatur inventore, accusantium aperiam veniam iste quas quaerat velit?
      Quas, dignissimos!
    </p>

    <tc-badge :value="10" tccolor="error">
      <tc-button name="Badge on Button"></tc-button>
    </tc-badge>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import PortfolioCodeExample from "@/components/projects/TCComponents/CodeExample.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import TCBadge from "@/components/tc/badge/TC-Badge.vue";

@Component({
  components: {
    "portfolio-code-example": PortfolioCodeExample,
    "tc-headline": TCHeadline,
    "tc-button": TCButton,
    "tc-grid": TCGrid,
    "tc-badge": TCBadge,
  },
})
export default class TCComponentsDetailBadge extends Vue {
  public colors: string[] = ["primary", "error", "success", "alarm"];
}
</script>
