<template>
  <div class="projects">
    <PHeader
      title="Projects"
      rootRoute="projects"
      backTitle="Projects"
      :trigger="100"
    />

    <div content>
      <PHeading title="All Projects" subtitle="I've done since May 2019" />
      <div max-width class="projects-wrapper" v-if="$store.getters.projects">
        <PProjectPreview
          v-for="p in $store.getters.projects"
          :key="p.id"
          :project="p"
        />
      </div>

      <h2 max-width>... and more to come</h2>
    </div>

    <PFooter />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PProjectPreview from '@/components/PProjectPreview.vue';

@Component({
  components: {
    PProjectPreview,
  },
})
export default class Projects extends Vue {}
</script>
<style lang="scss" scoped>
.projects {
  .projects-wrapper {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .portfolio-project-preview {
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
    }
  }
}
</style>
