<template>
  <tc-header
    v-if="component.length > 0"
    :title="headerTitle"
    backName="Overview"
    :backTo="{ name: constants.projectRoutes.timos_components }"
  />
  <tc-header v-else :title="headerTitle" />
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import constants from "@/constants";
import tcComponents from "@/components/tc";

@Component({
  components: {
    "tc-header": TCHeader
  }
})
export default class TCComponentsHeader extends Vue {
  public constants: object = constants;
  public tcComponents: TCComponent[] = tcComponents;

  get headerTitle(): string {
    return "Timo's Components";
    // return this.tcComponent ? this.tcComponent.name : "Timo's Components";
  }

  get component(): string {
    const comp = this.$route.params.comp;
    if (comp) return comp;
    return "";
  }

  get tcComponent(): TCComponent | undefined {
    return this.tcComponents.filter(x => x.name === this.component)[0];
  }
}
</script>
<style lang="scss" scoped>
@import "../../../../scss/variables";
</style>
