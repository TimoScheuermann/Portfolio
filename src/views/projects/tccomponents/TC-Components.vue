<template>
  <div class="tc-components--view">
    <tc-components--sidebar />
    <tc-components--header />
    <tc-components-home v-if="!isComponent()" />
    <tc-components-detail :key="getComponent()" v-else />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import tcComponents from "@/components/tc";
import tcLayouts from "@/components/tc/_layout";
import constants from "@/constants";
import TCComponentsHeader from "./common/TC-Components--Header.vue";
import TCComponentsSidebar from "./common/TC-Components--Sidebar.vue";
import TCComponentsHome from "./views/TC-Components-Home.vue";
import TCComponentsNotFound from "./views/TC-Components-NotFound.vue";
import TCComponentsDetail from "./views/TC-Components-Detail.vue";

@Component({
  components: {
    "tc-components--sidebar": TCComponentsSidebar,
    "tc-components--header": TCComponentsHeader,
    "tc-components-home": TCComponentsHome,
    "tc-components-not-found": TCComponentsNotFound,
    "tc-components-detail": TCComponentsDetail
  }
})
export default class TCComponents extends Vue {
  getComponent(): string {
    const comp = this.$route.params.comp;
    if (comp) return comp;
    return "";
  }
  isComponent(): boolean {
    return this.getComponent().length > 0;
  }
}
</script>
