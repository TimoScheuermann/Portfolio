<template>
  <div class="view-interim-project">
    <PHeader
      v-if="project"
      :title="project.title"
      rootRoute="projects"
      backTitle="Projects"
    />

    <tc-hero :dark="true">
      <tl-flow flow="column" v-if="!project">
        <tc-spinner :dark="$store.getters.darkmode" size="30" />
        <p>Loading project</p>
      </tl-flow>
      <template v-else>
        <img :src="project.hero" slot="background" alt="" />
        <svg height="160" :key="project._id">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            {{ project.title }}
          </text>
        </svg>
      </template>
    </tc-hero>
    <PRouterView :project="project" />
  </div>
</template>

<script lang="ts">
import PRouterView from '@/components/PRouter.vue';
import { IProject } from '@/utils/interfaces';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    PRouterView,
  },
})
export default class InterimProject extends Vue {
  get projects(): IProject[] | null {
    return this.$store.getters.projects;
  }

  get project(): IProject | null {
    if (!this.projects) return null;
    const param = this.$route.params.project.toLowerCase();
    const project = this.projects.filter(
      x =>
        x.title.toLowerCase().includes(param) || x._id.toLowerCase() === param
    )[0];
    if (!project) {
      this.$router.push({ name: 'projects' });
    }
    return project;
  }
}
</script>

<style lang="scss" scoped>
img {
  filter: brightness(40%);
}

svg {
  font: inherit;
  width: 100vw;
  @media #{$isDesktop} {
    width: calc(100vw - #{$sidebar-width});
  }
}

text {
  fill: none;
  stroke: $color_dark;
  stroke-linejoin: round;

  font-size: 6.5em;
  font-weight: 800;
  white-space: nowrap;

  animation: 1s pulsate ease-in-out both;
  @keyframes pulsate {
    from {
      stroke-width: 0px;
      opacity: 0;
      letter-spacing: -20px;
    }
    to {
      stroke-width: 1.5px;
      opacity: 0.8;
    }
  }
}
</style>
