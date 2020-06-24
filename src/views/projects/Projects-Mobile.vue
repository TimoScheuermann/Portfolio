<template>
  <div class="projects-mobile">
    <div class="project-changer" next @click="next()">
      <i class="ti-chevron-right" />
    </div>
    <div class="project-changer" prev @click="prev()">
      <i class="ti-chevron-left" />
    </div>

    <div class="head" :key="project.title">
      <div class="title">{{ project.title }}</div>
      <div class="description">{{ project.description }}</div>
    </div>
    <div class="project-preview">
      <img
        src="assets/projects/portfolio/preview_mobile.png"
        :class="{ odd: odd }"
      />
      <img
        :src="project.assets.mobile"
        id="phone"
        :class="{ odd: !odd }"
        @click="open()"
      />
    </div>
    <project-list />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import projects from "@/projects";
import { Project } from "@/models/Projects/Project.model";

import "./swipe-events.js";
import ProjectsProjectlist from "@/components/projects/ProjectsOverview/Projects-Projectlist.vue";
@Component({
  components: {
    "project-list": ProjectsProjectlist,
  },
})
export default class ProjectsMobile extends Vue {
  public projects: Project[] = projects;
  public currentProject = 0;
  public timeout!: number;

  get project(): Project {
    return this.projects[
      ((this.currentProject % projects.length) + projects.length) %
        this.projects.length
    ];
  }
  get odd(): boolean {
    return Math.abs(this.currentProject) % 2 == 0;
  }

  public open(): void {
    this.$router.push({ name: this.project.routeName });
  }

  public prev(): void {
    this.next(-1);
  }

  public next(amount = 1): void {
    this.currentProject += amount;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.next();
    }, 5000);
  }

  mounted(): void {
    this.next(0);
    const elem = document.getElementById("phone");
    if (elem) {
      elem.addEventListener("swiped-right", () => {
        this.next();
      });
      elem.addEventListener("swiped-left", () => {
        this.prev();
      });
    }
  }

  beforeDestroy(): void {
    clearTimeout(this.timeout);
  }
}
</script>

<style lang="scss" scoped>
@import "../../components/tc/_variables.scss";
@import "../../components/tc/_mixins.scss";

@keyframes title-appear {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes description-appear {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
}

.projects-mobile {
  @media #{$isDesktop} {
    display: none;
  }
  padding: 0 5vw {
    top: calc(70px + env(safe-area-inset-top));
    bottom: calc(70px + env(safe-area-inset-bottom));
  }
  height: calc(
    100vh - 140px - env(safe-area-inset-top) - env(safe-area-inset-bottom)
  );
  width: 90vw;
  @media only screen and(orientation: portrait) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media only screen and(orientation: landscape) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  .head {
    @media only screen and(orientation: landscape) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    text-align: center;
    .title {
      font-size: 2em;
      font-weight: bold;
      animation: title-appear 0.3s ease-in-out both;
    }
    .description {
      margin-top: 20px;
      width: 400px;

      @media only screen and(orientation: landscape) {
        max-width: 45vw;
      }
      @media only screen and(orientation: portrait) {
        max-width: 80vw;
      }
      height: 100px;
      animation: description-appear 0.3s ease-in-out both;
    }
  }
  .project-preview {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      transform: rotate(5deg);
      @media only screen and(orientation: portrait) {
        max-width: 80vw;
        max-height: 60vh;
      }
      @media only screen and(orientation: landscape) {
        max-width: 50vw;
        max-height: calc(
          100vh - 140px - env(safe-area-inset-top) - env(safe-area-inset-bottom)
        );
      }
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: contain;
      transition: 0.3s ease-in-out;
      &.odd {
        transform: rotate(-5deg);
      }
    }
  }
}

.project-changer {
  position: fixed;
  display: flex;
  @media only screen and(orientation: landscape) {
    display: none;
  }
  @media only screen and(max-width: 450px) {
    display: none;
  }
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  &[next] {
    right: 40px;
  }
  &[prev] {
    left: 40px;
  }
  transition: 0.2s ease-in-out;
  &:hover {
    background: $paragraph;
  }
}
</style>
