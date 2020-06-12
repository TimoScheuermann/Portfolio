<template>
  <div class="projects--nhl-stats">
    <tc-header
      title="NHL Stats"
      backName="Projects"
      :backTo="{ name: constants.routes.projects }"
      :autoColor="true"
    />

    <projects-default-hero
      title="NHL Stats"
      src="assets/projects/nhlstats/preview.png"
    />
    <div content>
      <project-title title="Website" subtitle="NHL Stats" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import constants from "@/constants";
import ProjectsDefaultHero from "@/components/projects/common/Projects--Default-Hero.vue";
import ProjectsTitle from "@/components/projects/common/Projects--Title.vue";
@Component({
  components: {
    "tc-header": TCHeader,
    "projects-default-hero": ProjectsDefaultHero,
    "project-title": ProjectsTitle
  }
})
export default class NHLStats extends Vue {
  public constants: {} = constants;
}
</script>
<style lang="scss" scoped></style>
