<template>
  <div>
    <tc-headline title="Select" />
    <tc-select />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCSelect from "@/components/tc/select/TC-Select.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-select": TCSelect,
  },
})
export default class TCComponentsDetailSelect extends Vue {}
</script>
