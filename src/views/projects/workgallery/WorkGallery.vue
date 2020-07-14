<template>
  <div content class="projects--workgallery">
    <div class="gallery">
      <div class="gallery-item" v-for="item in gallery" :key="item.fileName">
        <tc-card :title="item.display" rounded="true">
          <tc-image
            slot="media"
            :src="'assets/projects/workgallery/designs/' + item.fileName"
          />
          <tc-button
            :icon="mapProjectIcon(item.project)"
            :disabled="!item.project"
            :to="{ name: routes[item.project] }"
            :name="mapProjectName(item.project)"
          />
        </tc-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import routes from '@/constants/routes';
import workGalleryItems from '@/constants/workgalleryItems';
import { WorkGalleryItem } from '@/models';
import projects from '@/constants/projects';
import { Project } from '@/models';

import { getProject } from '@/utils';

import ProjectView from '@/views/projects/ProjectView.mixin';

@Component
export default class TimosIcons extends Mixins(ProjectView) {
  public routes: Record<string, unknown> = routes;
  public projects: Project[] = projects;
  public gallery: WorkGalleryItem[] = workGalleryItems;

  private getProject(
    routeName: string | null = this.$route.name + ''
  ): Project {
    return getProject(routeName);
  }

  public mapProjectName(name: string): string {
    const project: Project = this.getProject(name);
    if (project) return project.title;
    return 'Not Specific';
  }

  public mapProjectIcon(name: string): string {
    const project: Project = this.getProject(name);
    if (project) return project.icon;
    return '';
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
    @media only screen and(max-width: #{$i * 400}px) and(min-width: #{-1 + ($i - 1) * 400}px) {
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
