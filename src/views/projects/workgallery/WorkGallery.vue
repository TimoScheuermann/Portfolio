<template>
  <div class="projects-workgallery">
    <tc-header
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
        <div
          class="gallery-item"
          v-for="item in gallery"
          :key="item.fileName"
          appear
        >
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
  // .map(x => [
  //   x,
  //   { ...x, fileName: x.fileName + "2" },
  //   { ...x, fileName: x.fileName + "1" },
  //   { ...x, fileName: x.fileName + "3" }
  // ])
  // .flat();

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

  private isScrolledIntoView(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    // Only completely visible elements return true:
    let isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  mounted(): void {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }

  beforeDestroy(): void {
    window.removeEventListener("scroll", this.handleScroll);
  }

  private handleScroll(): void {
    [...document.querySelectorAll("[appear]")]
      .filter((x: Element) => this.isScrolledIntoView(x as HTMLElement))
      .forEach((x: Element) => {
        x.removeAttribute("appear");
      });
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
  // position: relative;
  transform: scale(1);
  transition: 0.2s ease-in-out;
  opacity: 1;
  &[appear] {
    opacity: 0.1;
    transform: scale(0.2);
  }
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
