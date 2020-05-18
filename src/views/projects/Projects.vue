<template>
  <div>
    <tc-header title="Projects" />
    <div content>
      <div class="projects-current-title">
        <h1>{{ currentProject.title }}</h1>
        <p>{{ currentProject.description }}</p>
      </div>
      <div class="project-containers" @click.prevent="goTo()">
        <div
          class="projects-current-container"
          bg
          :class="{ 'projects-current-container__odd': current % 2 == 1 }"
        ></div>
        <div
          id="projectsCurrentContainer"
          class="projects-current-container"
          :class="{ 'projects-current-container__odd': current % 2 == 1 }"
        >
          <div class="container-content">
            <component
              :is="'prev-' + currentProject.icon"
              :key="currentProject.name"
            />
          </div>
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

  goTo(): void {
    this.$router.push(this.currentProject.routeName);
  }

  mounted() {
    const elem = document.getElementById("projectsCurrentContainer")!;
    elem.addEventListener("swiped-right", e => {
      this.current--;
      if (this.current < 0) {
        this.current += this.projects.length;
      }
    });
    elem.addEventListener("swiped-left", e => {
      this.current++;
    });
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
@import "../../scss/mixins";

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
.projects-current-container {
  transform: translateX(-50%) rotate(5deg);
  &[bg] {
    background: darken($paragraph, 10%);
    transform: translateX(-50%) rotate(-5deg);
  }
  &.projects-current-container__odd {
    transform: translateX(-50%) rotate(-5deg);
    &[bg] {
      transform: translateX(-50%) rotate(5deg);
    }
  }
  .container-content {
    // margin-top: calc(-1 * env(safe-area-inset-top));
  }
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  background: $paragraph;
  box-shadow: $shadow;
  border-radius: 10px;

  position: absolute;
  left: 50%;
  @media #{$isDesktop} {
    left: calc(50% + 25px);
    top: 240px;
    bottom: 80px;
    width: 80vw;
  }
  @media #{$isMobile} {
    display: inline-block;
    width: 70vw;
    top: calc(230px + env(safe-area-inset-top));
    bottom: calc(105px + env(safe-area-inset-bottom));
  }
}
</style>
