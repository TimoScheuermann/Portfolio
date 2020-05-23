<template>
  <div class="tc-components-designer">
    <tc-header
      :backTo="{ name: constants.projectRoutes.timos_components }"
      backName="Overview"
      title="Getting started"
    />
    <div content>
      <h1>Getting started</h1>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import constants from "@/constants";
@Component({
  components: {
    "tc-header": TCHeader
  }
})
export default class TCComponentsGettingStarted extends Vue {
  public constants: {} = constants;
}
</script>
