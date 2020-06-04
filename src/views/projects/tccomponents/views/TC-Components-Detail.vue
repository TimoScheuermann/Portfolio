<template>
  <div v-if="compFound">
    <tc-hero height="100">
      <img slot="background" src="assets/projects/tccomponents/hero.png" />
      <div class="title" v-if="tcComponent">
        {{ tcComponent.name }}
      </div>
    </tc-hero>
    <div content>
      <component :is="currentComponent" />
      <div v-if="tcComponent && tcComponent.api.length > 0">
        <tc-headline title="API" />
        <tc-table v-if="tcComponent">
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
  </div>
  <tc-components-not-found v-else />
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCSpinner from "@/components/tc/spinner/TC-Spinner.vue";
import TCComponentsNotFound from "./TC-Components-NotFound.vue";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCTable from "@/components/tc/table/TC-Table.vue";
import tcComponents from "@/components/tc";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import constants from "@/constants";
import { TCComponentGroup } from "@/models/TCComponents/TCComponentGroup.model";

@Component({
  components: {
    "tc-components-not-found": TCComponentsNotFound,
    "tc-headline": TCHeadline,
    "tc-table": TCTable,
    "tc-hero": TCHero
  }
})
export default class TCComponentsDetail extends Vue {
  public compFound: boolean = true;
  public tcComponents: TCComponentGroup[] = tcComponents;

  get component() {
    const comp = this.$route.params.comp;
    if (comp) {
      const name: string = comp.toLowerCase();
      if (name === "icons") {
        this.$router.replace({ name: constants.projectRoutes.timos_icons });
      }
      return name;
    }
    return "";
  }

  get tcComponent(): TCComponent | undefined {
    const everyComponent: TCComponent[] = [];
    this.tcComponents.forEach(x => everyComponent.push(...x.components));
    return everyComponent.filter(
      x => x.name.toLowerCase() === this.component
    )[0];
  }

  get currentComponent() {
    this.compFound = true;
    return () =>
      import(
        `@/views/projects/tccomponents/views/details/TC-Components-Detail--${this.tcComponent!.name.split(
          " "
        ).join("")}.vue`
      ).catch(() => {
        this.compFound = false;
      });
  }
}
</script>
<style lang="scss" scoped>
@import "../../../../scss/variables";

.tc-hero {
  .title {
    font-weight: bold;
    font-size: 1.5em;
    padding: 5px 10px;
    background: black;
    color: #fff;
  }
}

[content] {
  padding-top: 0px;
}
@media #{$isMobile} {
  /deep/ .portfolio--codeexample {
    margin: 0 -5vw;
  }
}
</style>
