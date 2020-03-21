<template>
  <div>
    <tc-headline title="Buttons" />

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
      reprehenderit quaerat beatae nemo ad ipsa? Natus, neque. Nihil suscipit
      aspernatur inventore, accusantium aperiam veniam iste quas quaerat velit?
      Quas, dignissimos!
    </p>

    <tc-headline title="Variants" />

    <portfolio-code-example
      v-for="variant in variants"
      :title="variant"
      :key="variant"
      tag="tc-button"
      :attr="{
        variant: variant.split(' ')[0].toLowerCase(),
        name: 'Default | \'\'',
        icon: 'heart | \'\'',
        disabled: 'true | false'
      }"
    >
      <tc-button :variant="variant" name="Default" icon="" disabled="" />
      <tc-button :variant="variant" icon="heart" disabled="" />
      <tc-button :variant="variant" name="Default" icon="heart" disabled="" />
      <tc-button :variant="variant" name="Default" icon="" disabled="true" />
    </portfolio-code-example>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import PortfolioCodeExample from "@/components/projects/TCComponents/CodeExample.vue";
@Component({
  components: {
    "portfolio-code-example": PortfolioCodeExample,
    "tc-headline": TCHeadline,
    "tc-button": TCButton
  }
})
export default class TCComponentsDetailButton extends Vue {
  public variants: string[] = ["Border (default)", "Filled", "Opaque"];
}
</script>
