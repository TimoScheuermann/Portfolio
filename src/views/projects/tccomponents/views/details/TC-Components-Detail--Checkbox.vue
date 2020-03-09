<template>
  <div>
    <tc-headline title="Checkbox"></tc-headline>
    <tc-checkbox />
    <div></div>
    <tc-checkbox color="green" title="Hello World" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCCheckbox from "@/components/tc/checkbox/TC-Checkbox.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-checkbox": TCCheckbox
  }
})
export default class TCComponentsDetailCheckbox extends Vue {
  //TC-Components-Detail--Button.vue
}
</script>
