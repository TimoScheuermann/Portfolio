<template>
  <div content>
    <!-- <tc-color-picker /> -->
    <!-- <tc-expander title="Reveal me"></tc-expander>
    <tc-test-component></tc-test-component> -->
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import TCColorPicker from "@/components/tc/color-picker/TC-Color-Picker.vue";
import TCTestComponent from "@/components/tc/Test-Component.vue";
import TCExpander from "@/components/TC-Expander.vue";

@Component({
  components: {
    "tc-color-picker": TCColorPicker,
    "tc-test-component": TCTestComponent,
    "tc-expander": TCExpander,
  },
})
export default class Playground extends Vue {}
</script>

<style lang="scss" scoped>
@import "../../components/tc/_variables.scss";
@import "../../components/tc/_mixins.scss";
</style>
