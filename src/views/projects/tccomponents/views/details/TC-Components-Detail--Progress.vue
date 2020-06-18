<template>
  <div>
    <tc-headline title="Progress" />
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, dolorum
      tempora facere reiciendis enim earum, aliquam, nesciunt laboriosam commodi
      quaerat hic? Enim molestias pariatur corrupti architecto eaque magni
      officiis veniam.
    </p>
    <tc-headline title="Variants" />

    <tc-grid minWidth="350">
      <portfolio-code-example
        title="Progress-Ring"
        tag="tc-progress"
        :attr="{ percent: 33, type: 'ring' }"
      >
        <tc-progress percent="33" type="ring" />
      </portfolio-code-example>

      <portfolio-code-example
        title="Progress-Bar"
        tag="tc-progress"
        :attr="{ percent: 33 }"
      >
        <tc-progress percent="33" />
      </portfolio-code-example>

      <tc-card title="Animated" :subtitle="percent + '%'" :shadow="false">
        <tc-progress :percent="percent" type="ring" />
        <tc-progress :percent="percent" />
      </tc-card>
    </tc-grid>

    <tc-headline title="Different Colors" />
    <tc-grid minWidth="300">
      <portfolio-code-example
        tag="tc-progress"
        :attr="{ percent: 75, type: 'ring', color: 'red' }"
      >
        <tc-progress percent="75" type="ring" color="red" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-progress"
        :attr="{ percent: 35, type: 'ring', color: 'orange' }"
      >
        <tc-progress percent="35" type="ring" color="orange" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-progress"
        :attr="{ percent: 33, type: 'bar', color: 'magenta' }"
      >
        <tc-progress percent="33" type="bar" color="magenta" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-progress"
        :attr="{ percent: 54, type: 'bar', color: 'aqua' }"
      >
        <tc-progress percent="54" type="bar" color="aqua" />
      </portfolio-code-example>
    </tc-grid>

    <tc-headline title="Changeing ringSize/Width" />
    <tc-grid minWidth="350">
      <portfolio-code-example
        title="ringWidth"
        tag="tc-progress"
        :attr="{ percent: 33, type: 'ring', ringWidth: 20 }"
      >
        <tc-progress percent="33" ringWidth="20" type="ring" />
      </portfolio-code-example>
      <portfolio-code-example
        title="ringSize"
        tag="tc-progress"
        :attr="{ percent: 33, type: 'ring', ringSize: 100 }"
      >
        <tc-progress percent="33" ringSize="100" type="ring" />
      </portfolio-code-example>
      <portfolio-code-example
        title="ringWidth & ringSize"
        tag="tc-progress"
        :attr="{ percent: 33, type: 'ring', ringWidth: 20, ringSize: 100 }"
      >
        <tc-progress percent="33" ringWidth="20" ringSize="100" type="ring" />
      </portfolio-code-example>
    </tc-grid>

    <tc-headline title="Different barHeight" />
    <tc-grid minWidth="350">
      <portfolio-code-example
        title="10"
        tag="tc-progress"
        :attr="{ percent: 33, type: 'bar', barHeight: 10 }"
      >
        <tc-progress percent="33" barHeight="10" type="bar" />
      </portfolio-code-example>
      <portfolio-code-example
        title="15"
        tag="tc-progress"
        :attr="{ percent: 33, type: 'bar', barHeight: 15 }"
      >
        <tc-progress percent="33" barHeight="15" type="bar" />
      </portfolio-code-example>
    </tc-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCProgress from "@/components/tc/progress/TC-Progress.vue";
import PortfolioCodeExample from "@/components/projects/TCComponents/CodeExample.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-progress": TCProgress,
    "portfolio-code-example": PortfolioCodeExample,
    "tc-grid": TCGrid,
    "tc-card": TCCard
  }
})
export default class TCComponentsDetailProgress extends Vue {
  percent = 0;
  created() {
    this.increment();
  }
  increment() {
    this.percent++;
    if (this.percent > 100) this.percent = 0;
    setTimeout(
      () => {
        this.increment();
      },
      this.percent === 0 ? 1000 : 50
    );
  }
}
</script>
<style lang="scss" scoped>
.tc-progress__bar {
  margin-top: 30px !important;
}
</style>
