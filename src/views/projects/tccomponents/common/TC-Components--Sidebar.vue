<template>
  <tc-sidebar :dark="dark" class="tc-components--sidebar">
    <div slot="header" class="tc-sidebar--header">
      <div class="icon"><i class="ti-component"></i></div>
      <div class="title">Timo's Components</div>
    </div>

    <tc-sidebar-item
      name="Home"
      icon="house"
      :to="{ name: constants.projectRoutes.timos_components }"
    />
    <tc-sidebar-item
      name="Getting started"
      icon="download"
      :to="{ name: constants.projectRoutes.timos_components_getting_started }"
    />

    <tc-sidebar-item
      name="Designer"
      icon="tools"
      :to="{ name: constants.projectRoutes.timos_components_designer }"
    />
    <tc-divider />

    <tc-sidebar-group
      v-for="(group, i) in tcComponents"
      :key="group.group"
      :name="group.group"
      :icon="group.icon"
      :maxHeight="i === 1 ? '770px' : undefined"
    >
      <tc-sidebar-item
        v-for="comp in group.components"
        :key="comp.name"
        :name="comp.name"
        :icon="comp.icon"
        :to="{
          name: constants.projectRoutes.timos_components_detail,
          params: { comp: comp.name }
        }"
      ></tc-sidebar-item>
    </tc-sidebar-group>

    <tc-sidebar-item
      name="Other Projects"
      icon="book-p"
      :to="{ name: constants.routes.projects }"
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
import constants from "@/constants";
import { TCComponentGroup } from "@/models/TCComponents/TCComponentGroup.model";
import TCButton from "@/components/tc/button/TC-Button.vue";
import TCLink from "@/components/tc/link/TC-Link.vue";

@Component({
  components: {
    "tc-sidebar": TCSidebar,
    "tc-sidebar-group": TCSidebarGroup,
    "tc-sidebar-item": TCSidebarItem,
    "tc-divider": TCDivider,
    "tc-button": TCButton,
    "tc-link": TCLink
  }
})
export default class TCComponentsSidebar extends Vue {
  public constants: {} = constants;
  public tcComponents: TCComponentGroup[] = tcComponents;

  get dark() {
    return (
      this.$route.name == constants.projectRoutes.timos_components_designer
    );
  }
}
</script>
