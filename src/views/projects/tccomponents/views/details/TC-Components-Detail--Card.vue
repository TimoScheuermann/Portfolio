<template>
  <div>
    <tc-headline title="Cards"></tc-headline>
    <tc-card subtitle="Subtitle"></tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-card": TCCard
  }
})
export default class TCComponentsDetailCard extends Vue {}
</script>
