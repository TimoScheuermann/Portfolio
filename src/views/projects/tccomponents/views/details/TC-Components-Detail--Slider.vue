<template>
  <div>
    <tc-headline title="Slider"></tc-headline>
    <tc-slider />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCSlider from "@/components/tc/slider/TC-Slider.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-slider": TCSlider,
  },
})
export default class TCComponentsDetailSlider extends Vue {}
</script>
