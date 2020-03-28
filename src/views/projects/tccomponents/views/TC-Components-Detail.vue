<template>
  <div v-if="compFound">
    <tc-hero height="100">
      <img slot="background" src="assets/projects/tccomponents/hero.png" />
      <div class="title" v-if="getTCComponent()">
        {{ getTCComponent().name }}
      </div>
    </tc-hero>
    <div content>
      <component :is="currentComponent" />
      <div v-if="getTCComponent() && !getTCComponent().customAPI">
        <tc-headline title="API" />
        <tc-table v-if="getTCComponent()">
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
  <tc-components-not-found v-else />
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCSpinner from "@/components/tc/spinner/TC-Spinner.vue";
import TCComponentsNotFound from "./TC-Components-NotFound.vue";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCTable from "@/components/tc/table/TC-Table.vue";
import tcComponents from "@/components/tc";
import tcLayouts from "@/components/tc/_layout";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import constants from "@/constants";

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
  public tcComponents: TCComponent[] = tcComponents;
  public tcLayouts: TCComponent[] = tcLayouts;

  getComponent() {
    const comp = this.$route.params.comp;
    if (comp) return comp;
    return "";
  }
  getTCComponent(): TCComponent {
    let component!: TCComponent;

    if (this.getComponent().toLowerCase() === "colors") {
      return {
        customAPI: true,
        name: "Colors",
        icon: "dot",
        api: []
      };
    }
    if (this.getComponent().toLowerCase() === "default tags") {
      return {
        customAPI: true,
        name: "Default Tags",
        icon: "component",
        api: []
      };
    }
    if (this.getComponent().toLowerCase() === "icons") {
      this.$router.replace({ name: constants.projectRoutes.timos_icons });
    }
    component = this.tcComponents.filter(
      x => x.name.toLowerCase() === this.getComponent().toLowerCase()
    )[0];
    if (!component) {
      component = this.tcLayouts.filter(
        x => x.name.toLowerCase() === this.getComponent().toLowerCase()
      )[0];
    }
    return component;
  }

  get currentComponent() {
    this.compFound = true;
    return () =>
      import(
        `@/views/projects/tccomponents/views/details/TC-Components-Detail--${this.getComponent()
          .split(" ")
          .join("")}.vue`
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
    padding: 5px;
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
