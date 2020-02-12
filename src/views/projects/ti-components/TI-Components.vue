<template>
  <div class="container">
    <tc-sidebar>
      <b slot="header">Header</b>

      <tc-sidebar-item
        name="Other Projects"
        icon="book-p"
        :to="{ name: constants.routes.projects }"
      ></tc-sidebar-item>
      <tc-divider></tc-divider>
      <tc-sidebar-item
        name="Home"
        icon="heart"
        :to="{ name: constants.projectRoutes.timos_components }"
      />

      <tc-divider
        position="center"
        icon="components"
        name="Components"
      ></tc-divider>
      <tc-sidebar-item
        v-for="tcc in tcComponents"
        :key="tcc.name"
        :name="tcc.name"
        :icon="tcc.icon"
        :to="{
          name: constants.projectRoutes.timos_components_detail,
          params: { comp: tcc.name }
        }"
      />
    </tc-sidebar>
    <div class="content">
      <div v-if="isComponent()">
        <div v-if="!componentExists(getComponent())">
          Doesnt exists
        </div>
        <component v-else :is="getComponent()"></component>
      </div>
      <div v-else>
        Timos Components Home
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import TIInputs from "./groups/TI-Inputs.vue";
import TICards from "./groups/TI-Cards.vue";
import TCSidebar from "@/components/tc/sidebar/TC-Sidebar.vue";
import TCSidebarGroup from "@/components/tc/sidebar/TS-Sidebar-Group.vue";
import TCSidebarItem from "@/components/tc/sidebar/TC-Sidebar-Item.vue";
import TCDivider from "@/components/tc/divider/TC-Divider.vue";
import tcComponents from "@/components/tc";
import { TCComponent } from "../../../models/TCComponents/TCComponent.model";
import constants from "@/constants";

@Component({
  components: {
    "tc-sidebar": TCSidebar,
    "tc-sidebar-group": TCSidebarGroup,
    "tc-sidebar-item": TCSidebarItem,
    "tc-divider": TCDivider,
    "input--view": TIInputs,
    "card--view": TICards
  }
})
export default class TIComponents extends Vue {
  public tcComponents: TCComponent[] = tcComponents.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  public constants: {} = constants;

  isComponent(): boolean {
    return !!this.$route.params.comp;
  }
  getComponent() {
    return `${this.$route.params.comp.toLowerCase() || "unknown"}--view`;
  }

  loadedComponents() {
    var loaded = [];
    var components = this.$options.components;
    for (var key in components) {
      loaded.push(key);
    }
    return loaded;
  }
  componentExists(component: string) {
    var components = this.loadedComponents.call(this);
    if (components.indexOf(component) !== -1) {
      return true;
    }
    return false;
  }
}
</script>
<style lang="scss" scoped>
.content {
  padding-left: 45px;
}
</style>
