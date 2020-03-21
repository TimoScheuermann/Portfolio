<template>
  <div>
    <tc-headline title="Checkbox"></tc-headline>

    <portfolio-code-example tag="tc-checkbox" title="Simple Checkbox">
      <tc-checkbox />
    </portfolio-code-example>

    <portfolio-code-example
      tag="tc-checkbox"
      title="With Title"
      :attr="{ title: 'Hello World' }"
    >
      <tc-checkbox title="Hello World" />
    </portfolio-code-example>

    <portfolio-code-example
      tag="tc-checkbox"
      title="Custom Checkmark Color"
      :attr="{ color: 'red', title: 'I have a red checkmark' }"
    >
      <tc-checkbox color="red" title="I have a red checkmark" />
    </portfolio-code-example>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCCheckbox from "@/components/tc/checkbox/TC-Checkbox.vue";
import PortfolioCodeExample from "@/components/projects/TCComponents/CodeExample.vue";
@Component({
  components: {
    "portfolio-code-example": PortfolioCodeExample,
    "tc-headline": TCHeadline,
    "tc-checkbox": TCCheckbox
  }
})
export default class TCComponentsDetailCheckbox extends Vue {
  //TC-Components-Detail--Button.vue
}
</script>
