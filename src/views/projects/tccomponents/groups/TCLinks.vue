<template>
  <div>
    <tc-headline title="Link"></tc-headline>
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
export default class TCLinks extends Vue {}
</script>
<style lang="scss" scoped></style>
