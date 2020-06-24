<template>
  <tc-header
    v-if="component.length > 0"
    :title="headerTitle"
    backName="Overview"
    :backTo="{ name: constants.projectRoutes.timos_components }"
    :autoBackground="true"
    :dark="true"
    :key="headerTitle"
  >
    <tc-button
      v-if="tcComponent && tcComponent.api.length > 0"
      name="Open in Designer"
      variant="filled"
      icon="tools"
      @click="openDesigner()"
    />
  </tc-header>
  <tc-header v-else :title="headerTitle" />
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import constants from "@/constants";
import tcComponents from "@/components/tc";
import { TCComponentGroup } from "@/models/TCComponents/TCComponentGroup.model";
import TCButton from "@/components/tc/button/TC-Button.vue";

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-button": TCButton,
  },
})
export default class TCComponentsHeader extends Vue {
  public constants: Record<string, unknown> = constants;
  public tcComponents: TCComponentGroup[] = tcComponents;

  get headerTitle(): string {
    return this.tcComponent ? this.tcComponent.name : "Timo's Components";
  }

  get component(): string {
    const comp = this.$route.params.comp;
    if (comp) return comp.toLowerCase();
    return "";
  }

  get tcComponent(): TCComponent | undefined {
    const everyComponent: TCComponent[] = [];
    this.tcComponents.forEach((x) => everyComponent.push(...x.components));
    return everyComponent.filter(
      (x) => x.name.toLowerCase() === this.component
    )[0];
  }

  public openDesigner(): void {
    const comp = this.tcComponent;
    if (comp) this.$store.commit("updateDesignerComponent", comp.name);
    this.$router.push({
      name: constants.projectRoutes.timos_components_designer,
    });
  }
}
</script>
