<template>
  <div>
    <tc-headline title="Scroll Up"></tc-headline>
    <tc-scroll-up class="tc-scrollup--special" />
    <tc-scroll-up icon="double-arrow-up" class="tc-scrollup--special" />
    <tc-scroll-up icon="house" class="tc-scrollup--special" />
    <tc-scroll-up icon="heart" class="tc-scrollup--special" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCScrollUp from "@/components/tc/scrollup/TC-Scroll-Up.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-scroll-up": TCScrollUp
  }
})
export default class TCComponentsDetailScrollUp extends Vue {}
</script>
