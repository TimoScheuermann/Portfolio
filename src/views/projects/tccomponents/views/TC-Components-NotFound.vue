<template>
  <tc-hero height="100" unit="vh" :hasFixedHeader="false">
    <img :src="src" slot="background" />
    <tc-card
      frosted="true"
      title="Component Not Found"
      subtitle="The Component you are looking for might have been removed, had its name changed or is temporarily unavailable."
    ></tc-card>
  </tc-hero>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-hero": TCHero,
    "tc-card": TCCard
  }
})
export default class TCComponentsNotFound extends Vue {
  public src: string = "/assets/projects/tccomponents/hero.png";
}
</script>
