<template>
  <div v-if="exists">
    <tc-hero height="200" background="#000">
      <div class="title" v-if="tcComponent">TC-{{ tcComponent.name }}</div>
      <i v-if="tcComponent" :class="'ti-' + tcComponent.icon" />
    </tc-hero>
    <div content tc-light-container>
      <!-- {{ tcComponent }} -->
      <component :is="currentComponent" :component="tcComponent" />
      <div v-if="tcComponent && tcComponent.api.length > 0">
        <tc-headline title="Properties" />
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
  public compFound = true;
  public tcComponents: TCComponentGroup[] = tcComponents;

  get exists() {
    return this.compFound && this.component.length > 0 && this.tcComponent;
  }

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
.tc-hero {
  color: #fff;
  @media #{$isDesktop} {
    padding-left: 45px;
  }
  .title {
    text-align: center;
    font-weight: bold;

    font-size: 4em;
  }
  i {
    opacity: 0.25;
    font-size: 20em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    text-align: center;
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
