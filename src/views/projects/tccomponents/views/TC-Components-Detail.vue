<template>
  <div v-if="compFound">
    <component-hero :component="getTCComponent()" />
    <div content>
      <component :is="currentComponent" />
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
  <tc-components-not-found v-else />
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import TCComponentHelper from "../common/TC-Components.helper.vue";
import TCSpinner from "@/components/tc/spinner/TC-Spinner.vue";
import TCComponentsNotFound from "./TC-Components-NotFound.vue";
import ComponentHero from "@/components/projects/TIComponents/ComponentHero.vue";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCTable from "@/components/tc/table/TC-Table.vue";

@Component({
  mixins: [TCComponentHelper],
  components: {
    "component-hero": ComponentHero,
    "tc-components-not-found": TCComponentsNotFound,
    "tc-headline": TCHeadline,
    "tc-table": TCTable
  }
})
export default class TCComponentsDetail extends Vue {
  [x: string]: any;
  public compFound: boolean = true;

  @Watch("this.$route.params.comp")
  public changed(oldVal: any, newVal: any) {
    this.compFound = true;
    this.currentComponent();
  }
  get currentComponent() {
    return () =>
      import(
        `@/views/projects/tccomponents/views/details/TC-Components-Detail--${this.getComponent()}.vue`
      ).catch(() => {
        this.compFound = false;
      });
  }
}
</script>
<style lang="scss" scoped>
[content] {
  padding-top: 0px;
}
</style>
