<template>
  <tc-hero tc-dark-container :height="400">
    <div class="hero-container" v-if="project">
      <div class="hero--title">
        <svg height="160" width="10000">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
            {{ project.title }}
          </text>
        </svg>
      </div>
      <div class="img">
        <tc-image :src="project.assets.combined" />
        <!-- <img :src="project.assets.combined" /> -->
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
    return getProject();
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
    svg {
      position: relative;
      font: inherit;
      // height: 100px;
      // width: 100vw;
    }

    text {
      fill: none;
      stroke: #fff;
      stroke-linejoin: round;
      animation: 1s pulsate ease-in;
      @keyframes pulsate {
        from {
          stroke-width: 0px;
        }
        to {
          stroke-width: 1px;
        }
      }
    }
    color: $color_dark;
    top: -170px;
    font-size: 7em;
    // opacity: 0.2;
    font-weight: 800;
    white-space: nowrap;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .img {
    position: absolute;
    width: 700px;
    max-width: 80vw;
    left: 50%;
    top: -70px;
    transform: translateX(-50%);
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
