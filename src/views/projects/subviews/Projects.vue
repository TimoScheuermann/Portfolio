<template>
  <div class="projects">
    <tc-header variant="sticky" title="Projects" />
    <div content>
      <portfolio-big-heading
        title="All Projects"
        subtitle="I've done since May 2019"
      />
      <div class="projects-wrapper">
        <tc-magic-card
          v-for="p in projects"
          :key="p.title"
          :title="p.title"
          :subtitle="p.type"
          :src="p.assets.thumbnail"
          :class="{ darkThumbnail: !p.brightThumbnail }"
        >
          <div class="card-content">
            <h1>{{ p.title }}</h1>

            <p>{{ p.description }}</p>
            <tc-button
              name="Find out more"
              variant="filled"
              :icon="p.icon"
              :routeName="p.routeName"
            />
          </div>
        </tc-magic-card>
      </div>

      <h2>... and more to come</h2>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PortfolioBigHeading from '@/components/Portfolio-BigHeading.vue';
import projects from '@/constants/projects';
import { Project } from '@/models';

@Component({
  components: {
    'portfolio-big-heading': PortfolioBigHeading,
  },
})
export default class Projects extends Vue {
  public projects: Project[] = projects;
}
</script>
<style lang="scss" scoped>
.projects {
  .projects-wrapper {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .tc-magic-card {
      $space: 20px;
      margin-bottom: $space;

      @media only screen and(min-width: 600px) {
        flex: 0 0 calc(60%);
        &:nth-child(4n + 1),
        &:nth-child(4n + 4) {
          flex: 0 0 calc(40% - 20px);
        }
        &:nth-child(4n + 1) {
          margin-right: 20px;
        }
        &:nth-child(4n + 4) {
          margin-left: 20px;
        }
      }

      .card-content {
        margin: 20px {
          left: 17px;
        }
        h1 {
          margin: 0 3px;
        }
        p {
          margin-left: 3px;
        }
      }
    }
  }
}
.tc-magic-card.darkThumbnail /deep/ .tc-magic-card--thumbnail {
  color: #fff !important;
}
</style>
