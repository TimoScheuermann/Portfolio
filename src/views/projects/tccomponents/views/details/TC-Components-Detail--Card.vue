<template>
  <div>
    <tc-headline title="Card" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis unde
      adipisci at et porro voluptatum deserunt consectetur, nostrum maiores
      doloremque error temporibus dolore voluptatibus molestiae perspiciatis
      iusto aspernatur magnam blanditiis.
    </p>

    <tc-headline title="Slots" />
    <h3>Header</h3>
    <h3>Media</h3>
    <h3>Default</h3>

    <tc-headline title="Options" />

    <tc-grid minWidth="350">
      <portfolio-code-example
        title="Simple Card"
        tag="tc-card"
        :attr="{ title: 'Card Title', subtitle: 'Subtitle' }"
        inner="Hello World!"
      >
        <tc-card
          class="tc-card__example"
          title="Card Title"
          subtitle="Subtitle"
        >
          Hello World!
        </tc-card>
      </portfolio-code-example>

      <portfolio-code-example
        title="Example of Media Slot"
        tag="tc-card"
        :attr="{ title: 'Card Title', subtitle: 'Subtitle' }"
        :inner="`<img slot='media' src='${src}' />Hello World!`"
      >
        <tc-card
          class="tc-card__example"
          title="Card Title"
          subtitle="Subtitle"
        >
          <img slot="media" :src="src" />
          Hello World!
        </tc-card>
      </portfolio-code-example>

      <portfolio-code-example
        title="Example of Media Slot (dark) & rounded"
        tag="tc-card"
        :attr="{
          title: 'Card Title',
          subtitle: 'Subtitle',
          dark: 'true',
          rounded: 'true'
        }"
        :inner="`<img slot='media' src='${src}' />Hello World!`"
      >
        <tc-card
          class="tc-card__example"
          dark="true"
          rounded="true"
          title="Card Title"
          subtitle="Subtitle"
        >
          <img slot="media" :src="src" />
          Hello World!
        </tc-card>
      </portfolio-code-example>
    </tc-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import PortfolioCodeExample from "@/components/projects/TCComponents/CodeExample.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
@Component({
  components: {
    "portfolio-code-example": PortfolioCodeExample,
    "tc-headline": TCHeadline,
    "tc-card": TCCard,
    "tc-grid": TCGrid
  }
})
export default class TCComponentsDetailCard extends Vue {
  public src: string = "https://gradientjoy.com/400x300?id=44";
}
</script>
<style lang="scss" scoped>
.tc-card__example {
  // max-width: 350px;
}
</style>
