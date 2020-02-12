<template>
  <div class="content">
    <tc-header title="DHBW Richie"></tc-header>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
@Component({
  components: {
    "tc-header": TCHeader
  }
})
export default class DHBWRichie extends Vue {}
</script>
<style lang="scss" scoped></style>
