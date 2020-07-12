<template>
  <div>
    <tc-header variant="sticky" title="Projects" />

    <div class="projects--notfound">
      <h1><i class="ti-cross-circle" /> Project not found</h1>
      <p>
        The project you are looking for has either been removed, had its title
        changed or has not yet been started.
      </p>

      <h2>Available projects</h2>
      <div class="projects-available">
        <li v-for="p in projects" :key="p.title">
          <tc-link :to="p.routeName">
            <i :class="'ti-' + p.icon" />
            {{ p.title }}
          </tc-link>
        </li>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import projects from '@/projects';
import { Project } from '@/models/Project.model';

@Component
export default class ProjectsNotFound extends Vue {
  public projects: Project[] = projects;
}
</script>

<style lang="scss" scoped>
.projects--notfound {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(
    100vh - 140px - env(safe-area-inset-bottom) - env(safe-area-inset-top)
  );
  padding-top: calc(70px + env(safe-area-inset-top));
  padding-bottom: calc(70px + env(safe-area-inset-bottom));
  width: 100vw;

  h1 {
    text-align: center;
    i {
      color: red;
    }
  }

  p {
    text-align: center;
    max-width: 300px;
  }

  h2 {
    margin-top: 20px;
  }
  li {
    margin-top: 10px;
  }
  .tc-link {
    color: #111;
    &:hover {
      color: #08f;
    }
  }
}
</style>
