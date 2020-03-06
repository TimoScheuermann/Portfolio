<template>
  <div>
    <tc-headline title="Links"></tc-headline>
    <tc-link>Hello</tc-link>
    <div></div>
    <tc-link><i class="ti-sun"></i> Weather</tc-link>
    <div></div>
    <tc-link><i class="ti-house"></i></tc-link>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCLink from "@/components/tc/link/TC-Link.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-link": TCLink
  }
})
export default class TCComponentsDetailLink extends Vue {}
</script>
