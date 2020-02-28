<template>
  <div>
    <tc-headline title="Progress Bar" />
    <tc-progress-bar percent="100" />
    <tc-progress-bar percent="50" />
    <tc-progress-bar percent="33" height="10" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCProgressBar from "@/components/tc/progressbar/TC-Progress-Bar.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-progress-bar": TCProgressBar
  }
})
export default class TCProgressBars extends Vue {}
</script>
<style lang="scss" scoped></style>
