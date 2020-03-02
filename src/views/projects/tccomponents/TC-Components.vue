<template>
  <div class="container">
    <tc-components--sidebar />
    <tc-components--header />
    <div style="padding: 100px">
      <div><b>Is: </b>{{ isComponent() }}</div>
      <div><b>Exis: </b>{{ componentExists() }}</div>
      <div><b>Comp: </b>{{ getComponent() }}</div>
    </div>
    <tc-components-home v-if="!isComponent()" />
    <tc-components-not-found v-else-if="!componentExists()" />
    <tc-components-detail v-else />

    <div v-if="false">
      <div v-if="isComponent()">
        <div v-if="!componentExists()">
          <ti-compononents-notfound />
        </div>
        <div v-else class="appear">
          <component-hero :component="getTCComponent()" />
          <div content>
            <component
              class="appear"
              :tcComponent="getTCComponent()"
              :is="getComponent()"
            ></component>
            <tc-headline title="API" />
            <tc-table>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Parameters</th>
                <th>Description</th>
                <th>Default</th>
              </tr>
              <tr v-for="api in getTCComponent().api" :key="api.name">
                <td>{{ api.name }}</td>
                <td>{{ api.type }}</td>
                <td>{{ api.parameters }}</td>
                <td>{{ api.description }}</td>
                <td>{{ api.default }}</td>
              </tr>
            </tc-table>
          </div>
        </div>
      </div>
      <div v-else>
        <ti-compononents-home />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import tcComponents from "@/components/tc";
import tcLayouts from "@/components/tc/layout";
import constants from "@/constants";
import TCComponentHelper from "./common/TC-Components.helper.vue";
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
  },
  mixins: [TCComponentHelper]
})
export default class TCComponents extends Vue {}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

[content] {
  padding-top: 0;
}
</style>
