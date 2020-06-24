<template>
  <div>
    <tc-headline title="Grid" />
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
export default class TCComponentsDetailGrid extends Vue {}
</script>
