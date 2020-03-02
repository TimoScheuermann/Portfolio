<template>
  <div>
    <tc-headline title="Input"></tc-headline>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
@Component({
  components: {
    "tc-headline": TCHeadline
  }
})
export default class TCInputs extends Vue {}
</script>
<style lang="scss" scoped></style>
