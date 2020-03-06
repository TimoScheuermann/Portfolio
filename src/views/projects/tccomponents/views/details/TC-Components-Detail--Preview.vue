<template>
  <div>
    <tc-headline title="Preview"></tc-headline>

    <tc-headline title="1" />
    <tc-preview />
    <tc-headline title="2" />
    <div class="grid"><tc-preview /><tc-preview /></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCPreview from "@/components/tc/preview/TC-Preview.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-preview": TCPreview
  }
})
export default class TCComponentsDetailPreview extends Vue {}
</script>
<style lang="scss" scoped>
.grid {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
}
</style>
