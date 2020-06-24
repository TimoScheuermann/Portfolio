<template>
  <div>
    <tc-headline title="Hero" />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque hic ab
      laudantium voluptas. Maxime magnam, architecto corrupti dolores
      perferendis inventore assumenda. Sapiente, culpa id. Accusamus quibusdam
      recusandae dolore laudantium eaque!
    </p>

    <tc-headline title="Slots" />
    <h3>background</h3>
    <h3>default</h3>

    <tc-headline title="Options" />

    <portfolio-code-example
      title="Simple Hero Section without Image"
      tag="tc-hero"
      :attr="{ hasFixedHeader: false, height: 100, background: '#6e6e6e' }"
      inner="<b>Hero Title</b>"
    >
      <tc-hero background="#6e6e6e" :hasFixedHeader="false" height="100">
        <b>Hero Title</b>
      </tc-hero>
    </portfolio-code-example>

    <portfolio-code-example
      title="Simple Hero Section with Background Slot"
      tag="tc-hero"
      :attr="{ hasFixedHeader: false }"
      :inner="`<img src='${src}' slot='background' />**Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio mollitia eaque velit accusantium iusto veritatis tenetur possimus, aut placeat vitae aspernatur reprehenderit quas, cupiditate minima facilis. Expedita repudiandae vitae voluptatum.`"
    >
      <tc-hero :hasFixedHeader="false">
        <img :src="src" slot="background" />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
        mollitia eaque velit accusantium iusto veritatis tenetur possimus, aut
        placeat vitae aspernatur reprehenderit quas, cupiditate minima facilis.
        Expedita repudiandae vitae voluptatum.
      </tc-hero>
    </portfolio-code-example>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import PortfolioCodeExample from "@/components/projects/TCComponents/CodeExample.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-hero": TCHero,
    "tc-grid": TCGrid,
    "portfolio-code-example": PortfolioCodeExample,
  },
})
export default class TCComponentsHero extends Vue {
  public src = "https://gradientjoy.com/400x300?id=44";
}
</script>
<style lang="scss" scoped>
/deep/ .tc-hero {
  color: #fff;
}
</style>
