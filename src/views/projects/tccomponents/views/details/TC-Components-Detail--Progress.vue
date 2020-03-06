<template>
  <div>
    <tc-headline title="Progress"></tc-headline>
    <tc-progress percent="100" />
    <tc-progress percent="50" />
    <tc-progress percent="33" barHeight="10" />

    <tc-progress :percent="percent" />
    <tc-progress :percent="percent" type="ring" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCProgress from "@/components/tc/progress/TC-Progress.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-progress": TCProgress
  }
})
export default class TCComponentsDetailProgress extends Vue {
  percent: number = 0;
  created() {
    this.inc();
  }
  inc() {
    this.percent = (this.percent + Math.random() * 30) % 100;
    setTimeout(() => {
      this.inc();
    }, 500);
  }
}
</script>
