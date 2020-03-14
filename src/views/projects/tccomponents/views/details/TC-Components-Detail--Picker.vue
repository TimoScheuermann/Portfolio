<template>
  <div>
    <tc-headline title="Picker" />
    <tc-picker />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCPicker from "@/components/tc/picker/TC-Picker.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-picker": TCPicker
  }
})
export default class TCComponentsDetailPicker extends Vue {}
</script>
