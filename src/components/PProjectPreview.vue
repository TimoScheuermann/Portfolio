<template>
  <router-link
    :to="{ name: 'project', params: { project: project.title } }"
    class="portfolio-project-preview"
    :style="style"
    v-if="project"
  >
    <div class="container">
      <div class="title">
        <i :class="'ti-' + project.icon" />
        <span>{{ project.title }}</span>
      </div>
      <div class="description">{{ project.description }}</div>
    </div>
  </router-link>
</template>
<script lang="ts">
import { IProject } from '@/utils/interfaces';
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class PProjectPreview extends Vue {
  @Prop() project!: IProject;

  get style(): string {
    if (!this.project) return '';
    return `background-image: url(${this.project.thumbnail})`;
  }
}
</script>
<style lang="scss" scoped>
.portfolio-project-preview {
  height: 200px;

  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;
  border-radius: $border-radius;
  overflow: hidden;

  .container {
    padding: 20px 20px 20px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
    color: $color_dark;
    .title {
      font-size: 20px;
      font-weight: 600;
      i {
        margin-right: 10px;
      }
    }
    .description {
      margin-top: 5px;

      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
  }
}
</style>
