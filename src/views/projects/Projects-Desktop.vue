<template>
  <div content class="projects-desktop">
    <project-title title="Most Recent" subtitle="Projects" />

    <tc-grid minWidth="100" arrangement="auto-fit" class="project-grid">
      <router-link
        tsg="div"
        class="project-item"
        v-for="p in projects"
        :key="p.title"
        :to="{ name: p.routeName }"
        :class="{
          'span-c': p.displayAs == 'combined',
          'span-r': p.displayAs == 'mobile',
          'span-c2': p.displayAs == 'desktop'
        }"
      >
        <tc-card
          :title="p.title"
          :subtitle="p.description"
          :rounded="true"
          hover="true"
        >
          <img :src="p.assets[p.displayAs]" />
        </tc-card>
      </router-link>
    </tc-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import projects from "@/projects";
import { Project } from "@/models/Projects/Project.model";
import ProjectsTitle from "@/components/projects/common/Projects--Title.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import ProjectsDefaultHero from "@/components/projects/common/Projects--Default-Hero.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";

@Component({
  components: {
    "project-title": ProjectsTitle,
    "tc-card": TCCard,
    "project-default-hero": ProjectsDefaultHero,
    "tc-grid": TCGrid
  }
})
export default class ProjectsDesktop extends Vue {
  public projects: Project[] = projects;
}
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
@import "../../scss/mixins";

.projects-desktop {
  @media #{$isMobile} {
    display: none;
  }
  .project-grid {
    margin-top: 30px;
    grid-auto-flow: dense;
    .project-item {
      &.span-c {
        grid-column: span 4;
      }
      &.span-r {
        grid-column: span 2;
        grid-row: span 3;
      }
      &.span-c2 {
        grid-column: span 3;
      }
    }
  }
}
</style>
