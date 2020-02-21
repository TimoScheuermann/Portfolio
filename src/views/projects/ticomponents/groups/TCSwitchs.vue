<template>
  <div>
    <tc-headline title="Switch"></tc-headline>
    <tc-switch></tc-switch>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCSwitch from "../../../../components/tc/switch/TC-Switch.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-switch": TCSwitch
  }
})
export default class TCSwitchs extends Vue {}
</script>
<style lang="scss" scoped></style>
