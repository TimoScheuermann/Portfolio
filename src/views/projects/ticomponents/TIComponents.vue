<template>
  <div class="container">
    <tc-sidebar>
      <div slot="header" class="tc-sidebar--header">
        <div class="icon"><i class="ti-component"></i></div>
        <div class="title">Timo's Components</div>
      </div>

      <tc-sidebar-item
        name="Other Projects"
        icon="book-p"
        :to="{ name: constants.routes.projects }"
      ></tc-sidebar-item>
      <tc-divider></tc-divider>
      <tc-sidebar-item
        name="Home"
        icon="house"
        :to="{ name: constants.projectRoutes.timos_components }"
      />

      <tc-divider
        position="center"
        icon="component"
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

    <div>
      <tc-header :titles="getHeaderTitle()">
        <div slot="title" class="ticomponents--header">
          <router-link
            v-if="isComponent()"
            :to="{ name: constants.projectRoutes.timos_components }"
          >
            <i class="ti-arrow-left"></i>
            <span>Components</span>
          </router-link>
          <div class="title">{{ getHeaderTitle() }}</div>
        </div>
      </tc-header>

      <div v-if="isComponent()">
        <div v-if="!componentExists()">
          <ti-compononents-notfound />
        </div>
        <div v-else content class="appear">
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
      <div v-else>
        <ti-compononents-home />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import TCInputs from "./groups/TCInputs.vue";
import TCCards from "./groups/TCCards.vue";
import TCSidebar from "@/components/tc/sidebar/TC-Sidebar.vue";
import TCSidebarGroup from "@/components/tc/sidebar/TS-Sidebar-Group.vue";
import TCSidebarItem from "@/components/tc/sidebar/TC-Sidebar-Item.vue";
import TCDivider from "@/components/tc/divider/TC-Divider.vue";
import tcComponents from "@/components/tc";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import constants from "@/constants";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCTable from "@/components/tc/table/TC-Table.vue";
import TCHeros from "./groups/TCHero.vue";
import TCSpinners from "./groups/TCSpinners.vue";
import TCCheckboxs from "./groups/TCCheckboxs.vue";
import TCButtons from "./groups/TCButtons.vue";
import TCDividers from "./groups/TCDividers.vue";
import TCLinks from "./groups/TCLinks.vue";
import TCModals from "./groups/TCModals.vue";
import TCPreviews from "./groups/TCPreviews.vue";
import TCScrollUps from "./groups/TCScrollUps.vue";
import TCSelects from "./groups/TCSelects.vue";
import TCSidebars from "./groups/TCSidebars.vue";
import TCSwitchs from "./groups/TCSwitchs.vue";
import TCTabbars from "./groups/TCTabbbars.vue";
import TCTables from "./groups/TCTables.vue";
import TCRevealers from "./groups/TCRevealers.vue";
import TCProgressBars from "./groups/TCProgressBars.vue";
import TCQuotes from "./groups/TCQuotes.vue";
import TIComponentsHome from "./TIComponents-Home.vue";
import TIComponentsNotFound from "./TIComponents-NotFound.vue";

@Component({
  components: {
    "ti-compononents-home": TIComponentsHome,
    "ti-compononents-notfound": TIComponentsNotFound,
    "tc-sidebar": TCSidebar,
    "tc-sidebar-group": TCSidebarGroup,
    "tc-sidebar-item": TCSidebarItem,
    "tc-header": TCHeader,
    "tc-divider": TCDivider,
    "tc-headline": TCHeadline,
    "tc-table": TCTable,
    "input--view": TCInputs,
    "card--view": TCCards,
    "hero--view": TCHeros,
    "spinner--view": TCSpinners,
    "button--view": TCButtons,
    "checkbox--view": TCCheckboxs,
    "divider--view": TCDividers,
    "link--view": TCLinks,
    "modal--view": TCModals,
    "preview--view": TCPreviews,
    "scroll-up--view": TCScrollUps,
    "select--view": TCSelects,
    "sidebar--view": TCSidebars,
    "switch--view": TCSwitchs,
    "tabbar--view": TCTabbars,
    "table--view": TCTables,
    "revealer--view": TCRevealers,
    "progress--view": TCProgressBars,
    "quote--view": TCQuotes
  }
})
export default class TIComponents extends Vue {
  public tcComponents: TCComponent[] = tcComponents.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  public constants: {} = constants;

  get compQuery() {
    const comp = this.$route.params.comp;
    if (comp) return comp.toLowerCase();
    return undefined;
  }

  getTCComponent(): TCComponent {
    return this.tcComponents.filter(x =>
      this.compQuery!.startsWith(x.name.toLowerCase())
    )[0];
  }

  getHeaderTitle(): string {
    if (!this.isComponent()) return "Timo's Components";
    if (!this.componentExists()) return "Not Found";
    const name = this.$route.params.comp.toLowerCase();
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  isComponent(): boolean {
    return !!this.compQuery;
  }

  getComponent(): string {
    return `${this.compQuery!.split(" ").join("-") || "unknown"}--view`;
  }

  loadedComponents() {
    var loaded = [];
    var components = this.$options.components;
    for (var key in components) {
      loaded.push(key);
    }
    return loaded;
  }
  componentExists() {
    var components = this.loadedComponents.call(this);
    if (components.indexOf(this.getComponent()) !== -1) {
      return true;
    }
    return false;
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.appear {
  animation: appear 1s ease-in-out;
}
@keyframes appear {
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
  }
}

.ticomponents--header {
  flex-wrap: nowrap;
  display: flex;
  overflow: hidden;
  a {
    @media #{$isDesktop} {
      display: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    i {
      margin-right: 5px;
    }
  }
}
</style>
