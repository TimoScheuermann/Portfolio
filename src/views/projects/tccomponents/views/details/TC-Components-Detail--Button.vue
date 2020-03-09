<template>
  <div>
    <tc-headline title="Buttons"></tc-headline>
    <tc-button disabled="true" name="Button" />
    <tc-button icon="heart" />
    <tc-button icon="share" variant="filled" name="Share" />
    <tc-button name="Button" variant="filled" disabled="true" />
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
