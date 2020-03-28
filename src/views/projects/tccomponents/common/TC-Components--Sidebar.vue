<template>
  <tc-sidebar class="tc-components--sidebar">
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
      :to="{ name: constants.projectRoutes.timos_components }"
    />
    <tc-divider />

    <tc-sidebar-group
      v-for="g in sidebarGroups"
      :key="g.title"
      :icon="g.icon"
      :name="g.title"
      :maxHeight="g.title === 'Components' ? '770px' : undefined"
    >
      <tc-sidebar-item
        v-for="i in g.items()"
        :key="i.name"
        :name="i.name"
        :icon="i.icon"
        :to="{
          name: constants.projectRoutes.timos_components_detail,
          params: { comp: i.name }
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
import tcLayouts from "@/components/tc/_layout";
import constants from "@/constants";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
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
  public sidebarGroups: {
    title: string;
    icon: string;
    items: Function;
  }[] = [
    {
      title: "Fundamentals",
      icon: "dot",
      items(): TCComponent[] {
        return [
          {
            name: "Default Tags",
            icon: "component",
            api: []
          },
          {
            name: "Colors",
            icon: "dot",
            api: []
          },
          {
            name: "Icons",
            icon: "heart",
            api: []
          }
        ];
      }
    },
    {
      title: "Layout",
      icon: "chart-empty",
      items(): TCComponent[] {
        return tcLayouts.sort((a, b) => a.name.localeCompare(b.name));
      }
    },
    {
      title: "Components",
      icon: "component",
      items(): TCComponent[] {
        return tcComponents.sort((a, b) => a.name.localeCompare(b.name));
      }
    }
  ];
  public constants: {} = constants;
}
</script>
