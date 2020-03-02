<template>
  <tc-sidebar class="tc-components--sidebar">
    <div slot="header" class="tc-sidebar--header">
      <div class="icon"><i class="ti-component"></i></div>
      <div class="title">Timo's Components</div>
    </div>

    <tc-sidebar-item
      name="Other Projects"
      icon="book-p"
      :to="{ name: constants.routes.projects }"
    ></tc-sidebar-item>
    <tc-divider />
    <tc-sidebar-item
      name="Home"
      icon="house"
      :to="{ name: constants.projectRoutes.timos_components }"
    />

    <tc-divider icon="component" name="Components" />
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

    <tc-divider icon="chart-empty" name="Layout" />
    <tc-sidebar-item
      v-for="tcc in tcLayouts"
      :key="tcc.name"
      :name="tcc.name"
      :icon="tcc.icon"
      :to="{
        name: constants.projectRoutes.timos_components_detail,
        params: { comp: tcc.name }
      }"
    />
  </tc-sidebar>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import TCSidebar from "@/components/tc/sidebar/TC-Sidebar.vue";
import TCSidebarGroup from "@/components/tc/sidebar/TS-Sidebar-Group.vue";
import TCSidebarItem from "@/components/tc/sidebar/TC-Sidebar-Item.vue";
import TCDivider from "@/components/tc/divider/TC-Divider.vue";
import tcComponents from "@/components/tc";
import tcLayouts from "@/components/tc/layout";
import constants from "@/constants";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";

@Component({
  components: {
    "tc-sidebar": TCSidebar,
    "tc-sidebar-group": TCSidebarGroup,
    "tc-sidebar-item": TCSidebarItem,
    "tc-divider": TCDivider
  }
})
export default class TCComponentsSidebar extends Vue {
  public tcComponents: TCComponent[] = tcComponents.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  public tcLayouts: TCComponent[] = tcLayouts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  public constants: {} = constants;
}
</script>
