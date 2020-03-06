<template>
  <div>
    <tc-headline title="Divider"></tc-headline>
    <tc-divider />
    <tc-divider icon="heart" />
    <tc-divider name="Section" />
    <tc-divider icon="hockey-stick" name="Icehockey" />
    <tc-divider name="Left Align" position="left" />
    <tc-divider name="Center Align" />
    <tc-divider name="Right Align" position="right" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCDivider from "@/components/tc/divider/TC-Divider.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-divider": TCDivider
  }
})
export default class TCComponentsDetailDivider extends Vue {}
</script>
