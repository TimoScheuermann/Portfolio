<template>
  <tc-hero tc-dark-container :height="400">
    <div class="hero-container" v-if="project">
      <div class="hero--title" :key="project.title">
        <svg height="160" width="10000">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            {{ project.title }}
          </text>
        </svg>
      </div>
      <div class="img" :key="project.title">
        <tc-image :src="project.assets.combined" />
      </div>
    </div>
  </tc-hero>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Project } from '@/models/Project.model';
import { getProject } from '@/utils';

@Component
export default class PortfolioProjectHead extends Vue {
  get project(): Project {
    return getProject(this.$route.name);
  }
}
</script>
<style lang="scss" scoped>
.tc-hero {
  background: $background_dark;
}

.hero-container {
  position: relative;
  .hero--title {
    position: absolute;
    top: -170px;
    left: 50%;
    transform: translateX(-50%);
    svg {
      position: relative;
      font: inherit;
    }

    text {
      fill: none;
      stroke: $color_dark;
      stroke-linejoin: round;

      font-size: 7em;
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
          opacity: 0.6;
        }
      }
    }
  }
  .img {
    position: absolute;
    width: 700px;
    max-width: 80vw;
    left: 50%;
    top: -70px;
    animation: appear 0.8s ease-in-out both;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    @keyframes appear {
      from {
        opacity: 0;
        transform: translate(-50%, 50px);
      }
      to {
        opacity: 1;
        transform: translate(-50%, 0);
      }
    }
  }
}
</style>
