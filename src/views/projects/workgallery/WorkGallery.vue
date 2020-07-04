<template>
  <div class="projects-workgallery">
    <tc-header
      variant="sticky"
      :title="project.title"
      backName="Projects"
      :backTo="{ name: constants.routes.projects }"
      :autoBackground="true"
    />
    <projects-default-hero
      :title="project.title"
      :src="project.assets.combined"
    />
    <div content>
      <div class="gallery">
        <div class="gallery-item" v-for="item in gallery" :key="item.fileName">
          <tc-card :title="item.display" rounded="true" hover="true">
            <tc-image
              slot="media"
              :src="'assets/projects/workgallery/designs/' + item.fileName"
            />
            <tc-button
              :icon="mapProjectIcon(item.project)"
              :disabled="!item.project"
              :to="{ name: constants.projectRoutes[item.project] }"
              :name="mapProjectName(item.project)"
            />
          </tc-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import constants from "@/constants";
import workGalleryItems from "@/projects/workgallery";
import { WorkGalleryItem } from "@/models/WorkGallery/WorkGalleryItem";
import projects from "@/projects";
import { Project } from "@/models/Projects/Project.model";
import ProjectsDefaultHero from "@/components/projects/common/Projects--Default-Hero.vue";
import { getProject } from "@/utils/ProjectUtils";

@Component({
  components: {
    "projects-default-hero": ProjectsDefaultHero,
  },
})
export default class WorkGallery extends Vue {
  public constants: Record<string, unknown> = constants;
  public projects: Project[] = projects;
  public gallery: WorkGalleryItem[] = workGalleryItems;

  get project(): Project {
    return getProject();
  }

  private getProject(routeName: string): Project {
    return this.projects.filter(
      (x: Project) =>
        x.routeName ===
        (constants.projectRoutes as Record<string, unknown>)[routeName]
    )[0];
  }

  public mapProjectName(name: string): string {
    const project: Project = this.getProject(name);
    if (project) return project.title;
    return "Not Specific";
  }

  public mapProjectIcon(name: string): string {
    const project: Project = this.getProject(name);
    if (project) return project.icon;
    return "";
  }
}
</script>
<style lang="scss" scoped>
[content] {
  padding-top: 40px;
}
.gallery-item {
  padding-bottom: 30px;
  break-inside: avoid-column;
}
.gallery {
  margin-top: 30px;
  column-gap: 30px;
  @for $i from 1 through 20 {
    @media only screen and(max-width: #{$i * 300}px) and(min-width: #{-1 + ($i - 1) * 300}px) {
      columns: $i;
    }
  }

  .tc-card {
    &:not(:first-child) {
      margin-top: 30px;
    }
    .tc-button {
      margin: {
        top: 20px;
        bottom: -10px;
      }
    }
  }
}
</style>
