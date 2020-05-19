<template>
  <div class="projects">
    <tc-header title="Projects" />

    <div class="changeProj left" @click="prev()">
      <i class="ti-arrow-left" />
    </div>
    <div class="changeProj right" @click="next()">
      <i class="ti-arrow-right" />
    </div>

    <div content class="projects-display">
      <div class="projects-current-title">
        <h1>{{ currentProject.title }}</h1>
        <p>{{ currentProject.description }}</p>
      </div>

      <div class="project-containers" @click.prevent="goTo()">
        <div class="proj-content" id="bg" :class="{ 'proj-content__odd': odd }">
          <img id="m" src="assets/projects/background_mobile.png" />
          <img id="d" src="assets/projects/background.png" />
        </div>
        <div id="fg" class="proj-content" :class="{ 'proj-content__odd': odd }">
          <img id="m" :src="currentProject.thumbnail_mobile" />
          <img id="d" :src="currentProject.thumbnail" />
        </div>
      </div>

      <projects-projectlist />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import projects from "@/projects";
import { Project } from "@/models/Projects/Project.model";
import ProjectsProjectlist from "@/components/projects/ProjectsOverview/Projects-Projectlist.vue";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import DHBWRichie from "./dhbwrichie/DHBWRichie.vue";
import InvestingCollectors from "./investingcollectors/InvestingCollectors.vue";
import AMSPro from "./amspro/AMSPro.vue";
import TCComponents from "./tccomponents/TC-Components.vue";
import TimosIcons from "./timosicons/TimosIcons.vue";
import WorkGallery from "./workgallery/WorkGallery.vue";
import NHLStats from "./nhlstats/NHLStats.vue";

import "./swipe-events.js";

@Component({
  components: {
    "projects-projectlist": ProjectsProjectlist,
    "tc-header": TCHeader,
    "prev-book": DHBWRichie,
    "prev-vehicle-front": InvestingCollectors,
    "prev-amspro": AMSPro,
    "prev-component": TCComponents,
    "prev-heart": TimosIcons,
    "prev-painting": WorkGallery,
    "prev-hockey-stick": NHLStats
  }
})
export default class Projects extends Vue {
  public projects: Project[] = projects;
  public current: number = 3;

  get currentProject(): Project {
    return projects[this.current % this.projects.length];
  }

  get odd(): boolean {
    return this.current % 2 == 1;
  }

  goTo(): void {
    this.$router.push(this.currentProject.routeName);
  }

  next(): void {
    this.current++;
  }
  prev(): void {
    this.current += 2 * this.projects.length - 1;
  }

  mounted() {
    const elem = document.getElementById("fg")!;
    elem.addEventListener("swiped-right", e => {
      this.next();
    });
    elem.addEventListener("swiped-left", e => {
      this.prev();
    });
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
@import "../../scss/mixins";

.changeProj {
  @media #{$isMobile} {
    display: none;
  }
  $padd: 30;
  $size: 50px;
  position: fixed;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: $size;
  width: $size;
  border-radius: $size;
  @include backdrop-blur($paragraph);
  transition: 0.2s ease-in-out;
  &:hover {
    @include backdrop-blur(darken($paragraph, 10%));
  }

  &.right {
    right: #{$padd}px;
  }
  &.left {
    left: #{$padd + 50}px;
  }
  transform: translateY(-50%);
}

.projects-display {
  @media #{$isMobile} and (orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: calc(
      100vh - 117px - env(safe-area-inset-bottom) - env(safe-area-inset-top)
    );
  }
  @media #{$isMobile} and (orientation: portrait) {
    display: grid;
    grid-template-rows: auto 1fr;
    height: calc(
      100vh - 112px - env(safe-area-inset-bottom) - env(safe-area-inset-top)
    );
  }
}

.projects-current-title {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
    max-width: 400px;
  }
}

.project-containers {
  position: relative;

  .proj-content {
    cursor: pointer;
    overflow: visible;
    transition: transform 0.2s ease-in-out;
    position: absolute;
    @media #{$isDesktop} {
      top: 30px;
      #m {
        display: none;
      }
      img {
        max-height: 65vh;
      }
    }

    @media #{$isMobile} {
      #d {
        display: none;
      }
    }
    @media #{$isMobile} and (orientation: portrait) {
      img {
        max-height: 55vh;
      }
    }
    @media #{$isMobile} and (orientation: landscape) {
      img {
        max-height: 60vh;
      }
    }

    &#fg {
      transform: rotate(5deg);
    }
    &#bg {
      transform: rotate(-5deg);
    }
    &__odd {
      &#fg {
        transform: rotate(-5deg);
      }
      &#bg {
        transform: rotate(5deg);
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: drop-shadow(4px 8px 20px rgba(0, 0, 0, 0.1));
    }
  }
}
</style>
