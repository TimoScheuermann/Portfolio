<template>
  <div>
    <tc-header variant="sticky" title="Projects" />
    <div content>
      <portfolio-big-heading title="404" subtitle="Project Not Found" />
      <br />
      <tl-flow flow="column">
        <tc-quote tfcolor="error">
          The project you are looking for has either been removed, had its title
          changed or has not yet been started.
        </tc-quote>
        <!-- Desktop only -->
        <h2>Available Projects</h2>
      </tl-flow>
      <!-- Desktop -->
      <tl-grid>
        <router-link
          v-for="p in projects"
          :key="p.title"
          :to="{ name: p.routeName }"
        >
          <tc-badge :value="p.badge" position="corner">
            <tc-card :rounded="true" :shadow="false" :hover="true">
              <tl-flow horizontal="space-between">
                <i :class="'ti-' + p.icon" />
                <span>{{ p.title }}</span>
              </tl-flow>
            </tc-card>
          </tc-badge>
        </router-link>
      </tl-grid>

      <!-- Mobile -->
      <tc-list title="Available Projects">
        <tc-list-item
          v-for="p in projects"
          :key="p.title"
          :icon="p.icon"
          :routeName="p.routeName"
          :title="p.title"
        />
      </tc-list>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import projects from '@/constants/projects';
import { Project } from '@/models';
import PortfolioBigHeading from '@/components/Portfolio-BigHeading.vue';

@Component({
  components: {
    'portfolio-big-heading': PortfolioBigHeading,
  },
})
export default class ProjectsNotFound extends Vue {
  public projects: Project[] = projects;
}
</script>

<style lang="scss" scoped>
.tc-list {
  margin-top: 20px;
  @media only screen and(min-width: 497px) {
    display: none;
  }
}

@media only screen and(max-width: 496px) {
  .tl-grid,
  h2 {
    display: none;
  }
  [content] {
    padding-bottom: 5vw;
  }
}

.tl-grid {
  span {
    font-weight: bold;
  }
  i {
    color: $error;
    font-size: 20px;
  }
}
</style>
