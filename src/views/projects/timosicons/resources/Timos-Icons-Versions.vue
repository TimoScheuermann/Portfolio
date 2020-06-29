<template>
  <div content>
    <tc-header
      title="Versions"
      backName="Timo's Icons"
      :backTo="{ name: constants.projectRoutes.timos_icons }"
    />
    <div v-for="version in getVersions()" :key="version">
      <tc-headline :title="version"></tc-headline>
      <tc-card
        :title="getVersionIcons(version).length + ' Icons added in this update'"
      >
        <tc-tooltip
          v-for="icon in getVersionIcons(version)"
          :tooltip="icon.name"
          :key="icon.name"
        >
          <ti-icontile :icon="icon" :showName="false" />
        </tc-tooltip>
      </tc-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import icons from "@/icons";
import IconTile from "@/components/projects/TimosIcons/IconTile.vue";
import { Icon } from "@/models/Icons/Icon.model";
import constants from "@/constants";

@Component({
  components: {
    "ti-icontile": IconTile,
  },
})
export default class TimosIconsVersions extends Vue {
  public constants: Record<string, unknown> = constants;
  public getVersions(): string[] {
    return [
      ...new Set(icons.map((x: Icon) => (x.version ? x.version : "1.0"))),
    ].sort((a, b) => this.versionToNumber(b) - this.versionToNumber(a));
  }

  private versionToNumber(v: string): number {
    return +v.split(".").join("");
  }

  public getVersionIcons(version: string): Icon[] {
    return icons
      .filter((x: Icon) =>
        x.version ? x.version === version : version === "1.0"
      )
      .sort((a, b) => b.name.localeCompare(a.name));
  }
}
</script>
<style lang="scss" scoped>
.tc-card {
  overflow: visible;
}
.tc-card /deep/ .tc-card--content {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
}
</style>
