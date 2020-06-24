<template>
  <div>
    <tc-headline title="Table"></tc-headline>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
  },
})
export default class TCComponentsDetailTable extends Vue {}
</script>
