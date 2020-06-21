<template>
  <div class="tc-components--view">
    <tc-components--sidebar />
    <tc-components--header v-if="isHome || isDetails" />
    <transition-group name="swap">
      <tc-components-designer key="designer" v-if="isDesigner" />
      <tc-components-getting-started key="gs" v-else-if="isGettingStarted" />
      <tc-components-home key="home" v-else-if="isHome" />
      <tc-components-detail v-for="com in getComponent()" :key="com" />
    </transition-group>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import tcComponents from "@/components/tc";
import constants from "@/constants";
import TCComponentsHeader from "./common/TC-Components--Header.vue";
import TCComponentsSidebar from "./common/TC-Components--Sidebar.vue";
import TCComponentsHome from "./views/TC-Components-Home.vue";
import TCComponentsNotFound from "./views/TC-Components-NotFound.vue";
import TCComponentsDetail from "./views/TC-Components-Detail.vue";
import TCComponentsDesigner from "./views/TC-Components-Designer.vue";
import TCComponentsGettingStarted from "./views/TC-Components-GettingStarted.vue";

@Component({
  components: {
    "tc-components--sidebar": TCComponentsSidebar,
    "tc-components--header": TCComponentsHeader,
    "tc-components-home": TCComponentsHome,
    "tc-components-not-found": TCComponentsNotFound,
    "tc-components-detail": TCComponentsDetail,
    "tc-components-designer": TCComponentsDesigner,
    "tc-components-getting-started": TCComponentsGettingStarted
  }
})
export default class TCComponents extends Vue {
  public constants: {} = constants;

  get route() {
    return this.$route.name;
  }
  get isDesigner() {
    return this.route == constants.projectRoutes.timos_components_designer;
  }
  get isDetails() {
    return this.route == constants.projectRoutes.timos_components_detail;
  }
  get isHome() {
    return this.route == constants.projectRoutes.timos_components;
  }
  get isGettingStarted() {
    return (
      this.route == constants.projectRoutes.timos_components_getting_started
    );
  }

  getComponent(): string[] {
    const comp = this.$route.params.comp;
    if (comp) return [comp];
    return [];
  }
}
</script>
<style lang="scss" scoped>
p {
  padding-left: 200px;
}
.swap-enter-active,
.swap-leave-active {
  transition: all 1s;
  min-height: 100vh;
  min-width: 100vw;
}
.swap-enter {
  opacity: 0;
  transform: translateY(30px);
}
.swap-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.swap-leave-active {
  position: absolute;
}
</style>
