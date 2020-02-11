<template>
  <div class="container">
    <tc-sidebar>
      <b slot="header">Header</b>

      <tc-sidebar-item
        name="Other Projects"
        icon="book-p"
        :to="{ name: 'projects' }"
      ></tc-sidebar-item>
      <tc-divider></tc-divider>
      <tc-sidebar-item
        name="Home"
        icon="house"
        :to="{ name: 'ticomponents' }"
      />

      <tc-divider position="center" icon="save" name="Components"></tc-divider>
      <tc-sidebar-item
        name="Input"
        icon="list-check"
        :to="{ name: 'ticomponentsDetail', params: { comp: 'Input' } }"
      />
      <tc-sidebar-item
        name="Card"
        icon="user-card"
        :to="{ name: 'ticomponentsDetail', params: { comp: 'Card' } }"
      />
      <tc-sidebar-item
        name="Button"
        icon="lens"
        :to="{ name: 'ticomponentsDetail', params: { comp: 'Button' } }"
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
@Component({
  components: {
    "tc-sidebar": TCSidebar,
    "tc-sidebar-group": TCSidebarGroup,
    "tc-sidebar-item": TCSidebarItem,
    "tc-divider": TCDivider,
    "TI-Input--view": TIInputs,
    "TI-Card--view": TICards
  }
})
export default class TIComponents extends Vue {
  isComponent(): boolean {
    return !!this.$route.params.comp;
  }
  getComponent() {
    return `TI-${this.$route.params.comp || "unknown"}--view`;
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
