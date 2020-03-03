<template>
  <div v-if="compFound">
    <component-hero :component="tcComponent" />
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
        <tr v-for="api in tcComponent.api" :key="api.name">
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
import TCSpinner from "@/components/tc/spinner/TC-Spinner.vue";
import TCComponentsNotFound from "./TC-Components-NotFound.vue";
import ComponentHero from "@/components/projects/TIComponents/ComponentHero.vue";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCTable from "@/components/tc/table/TC-Table.vue";
import tcComponents from "@/components/tc";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";

@Component({
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
  public tcComponents: TCComponent[] = tcComponents;

  get component() {
    const comp = this.$route.params.comp;
    if (comp) return comp;
    return "";
  }

  get tcComponent() {
    return this.tcComponents.filter(
      x => x.name.toLowerCase() === this.component.toLowerCase()
    )[0];
  }

  get currentComponent() {
    this.compFound = true;
    return () =>
      import(
        `@/views/projects/tccomponents/views/details/TC-Components-Detail--${this.component}.vue`
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
