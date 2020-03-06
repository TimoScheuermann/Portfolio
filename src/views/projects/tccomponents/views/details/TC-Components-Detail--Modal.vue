<template>
  <div>
    <tc-headline title="Modal"></tc-headline>
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
export default class TCComponentsDetailModal extends Vue {}
</script>
