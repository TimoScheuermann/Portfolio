<template>
  <div>
    <tc-headline title="Tooltips" />
    <div class="container">
      <tc-tooltip>
        <tc-tooltip position="bottom">
          <tc-tooltip position="left">
            <tc-tooltip position="right">
              <tc-card
                title="Tooltip"
                subtitle="(Hover me)"
                hover="true"
                rounded="true"
              />
            </tc-tooltip>
          </tc-tooltip>
        </tc-tooltip>
      </tc-tooltip>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCSpinner from "@/components/tc/spinner/TC-Spinner.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCTooltip from "@/components/tc/tooltip/TC-Tooltip.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-spinner": TCSpinner,
    "tc-card": TCCard,
    "tc-tooltip": TCTooltip
  }
})
export default class TCComponentsDetailTooltip extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  padding: 30px;
  max-width: 100%;
  .tc-card {
    width: 300px;
    max-width: 100%;
  }
  display: flex;
  justify-content: center;
}
</style>
