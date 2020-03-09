<template>
  <div content>
    <tc-header>
      <div slot="title" class="tiicons--header">
        <router-link :to="{ name: constants.projectRoutes.timos_icons }">
          <i class="ti-arrow-left"></i>
          <span>Icons</span>
        </router-link>
        <div class="title">Versions</div>
      </div>
    </tc-header>

    <div v-for="version in getVersions()" :key="version">
      <tc-headline :title="version"></tc-headline>
      <tc-card
        :title="getVersionIcons(version).length + ' Icons added in this update'"
      >
        <ti-icontile
          v-for="icon in getVersionIcons(version)"
          :key="icon.css"
          :icon="icon"
        />
      </tc-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import icons from "@/icons";
import TCCard from "@/components/tc/card/TC-Card.vue";
import IconTile from "@/components/projects/TimosIcons/IconTile.vue";
import { Icon } from "@/models/Icons/Icon.model";
import constants from "@/constants";
@Component({
  components: {
    "tc-header": TCHeader,
    "tc-headline": TCHeadline,
    "tc-card": TCCard,
    "ti-icontile": IconTile
  }
})
export default class TimosIconsVersions extends Vue {
  public constants: {} = constants;
  public getVersions(): string[] {
    return [
      ...new Set(icons.map(x => (x.version ? x.version : "1.0")))
    ].sort((a, b) => b.localeCompare(a));
  }
  public getVersionIcons(version: string): Icon[] {
    return icons.filter(x =>
      x.version ? x.version === version : version === "1.0"
    );
  }
}
</script>
<style lang="scss" scoped>
@import "../../../../scss/variables";

.tiicons--header {
  flex-wrap: nowrap;
  display: flex;
  overflow: hidden;
  a {
    @media #{$isMobile} {
      margin-right: 20px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      margin-right: 5px;
    }
  }
}
.tc-card /deep/ .slot {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
}
</style>
