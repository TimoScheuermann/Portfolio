<template>
  <div>
    <tc-headline title="Buttons"></tc-headline>
    <tc-button name="Button"></tc-button>
    <tc-button icon="heart"></tc-button>
    <tc-button icon="share" name="Share"></tc-button>
    <tc-button name="Button"></tc-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-button": TCButton
  }
})
export default class TCComponentsDetailButton extends Vue {}
</script>
