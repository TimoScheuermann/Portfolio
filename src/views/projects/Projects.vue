<template>
  <div class="projects">
    <tc-header title="Projects" />

    <div class="changeProj left" @click="prev()">
      <i class="ti-chevron-left" />
    </div>
    <div class="changeProj right" @click="next()">
      <i class="ti-chevron-right" />
    </div>

    <div class="projects-gallery">
      <transition name="fade">
        <div class="projects-gallery--current" :key="currentProject.title">
          <div class="header">
            <div class="title">{{ currentProject.title }}</div>
            <div class="subtitle">{{ currentProject.description }}</div>
            <tc-button
              name="Find out more"
              icon="chevron-right"
              iconPosition="right"
              variant="filled"
            />
          </div>
          <div class="image">
            <img :src="currentProject.preview" />
          </div>
        </div>
      </transition>
      <!-- <div v-for="p in projects" :key="p.name" class="projects-gallery--item">
        <div class="pItem--half">
          <h1>{{ p.title }}</h1>
          <p>{{ p.description }}</p>
          <tc-button
            :to="{ name: p.routeName }"
            icon="chevron-right"
            name="Go to project"
          ></tc-button>
        </div>
        <div class="pItem--half">
          <img :src="p.preview" />
        </div>
      </div> -->
    </div>

    <div content class="projects-display">
      <div class="projects-current-title">
        <h1>{{ currentProject.title }}</h1>
        <p>{{ currentProject.description }}</p>
      </div>

      <div class="project-containers" @click.prevent="goTo()">
        <div class="proj-content" id="bg" :class="{ 'proj-content__odd': odd }">
          <img id="m" src="assets/projects/portfolio/preview_mobile.png" />
          <!-- <img id="d" src="assets/projects/portfolio/preview.png" /> -->
        </div>
        <div id="fg" class="proj-content" :class="{ 'proj-content__odd': odd }">
          <img id="m" :src="currentProject.preview_mobile" />
          <!-- <img id="d" :src="currentProject.preview" /> -->
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
import TCButton from "@/components/tc/button/TC-Button.vue";

import "./swipe-events.js";

@Component({
  components: {
    "projects-projectlist": ProjectsProjectlist,
    "tc-header": TCHeader,
    "tc-button": TCButton
  }
})
export default class Projects extends Vue {
  public projects: Project[] = projects;
  public current: number = 3;
  public odd = false;
  public timestamp: number = 0;

  get currentProject(): Project {
    return projects[this.current % this.projects.length];
  }

  goTo(): void {
    this.$router.push(this.currentProject.routeName);
  }

  tick(): void {
    const ts = new Date().getTime();
    this.timestamp = ts;
    setTimeout(() => {
      if (ts === this.timestamp) {
        this.next();
      }
    }, 5000);
  }

  next(): void {
    this.current++;
    this.odd = !this.odd;
    this.tick();
  }
  prev(): void {
    this.current += 2 * this.projects.length - 1;
    this.odd = !this.odd;
    this.tick();
  }

  mounted() {
    const elem = document.getElementById("fg")!;
    elem.addEventListener("swiped-right", e => {
      this.next();
    });
    elem.addEventListener("swiped-left", e => {
      this.prev();
    });
    this.next();
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
@import "../../scss/mixins";

.projects {
  overflow: hidden;
  // background: linear-gradient(to right, #dde2e6, #eef2f3);
  background-image: radial-gradient(
      circle at 13% 47%,
      rgba(140, 140, 140, 0.03) 0%,
      rgba(140, 140, 140, 0.03) 25%,
      transparent 25%,
      transparent 100%
    ),
    radial-gradient(
      circle at 28% 63%,
      rgba(143, 143, 143, 0.03) 0%,
      rgba(143, 143, 143, 0.03) 16%,
      transparent 16%,
      transparent 100%
    ),
    radial-gradient(
      circle at 81% 56%,
      rgba(65, 65, 65, 0.03) 0%,
      rgba(65, 65, 65, 0.03) 12%,
      transparent 12%,
      transparent 100%
    ),
    radial-gradient(
      circle at 26% 48%,
      rgba(60, 60, 60, 0.03) 0%,
      rgba(60, 60, 60, 0.03) 6%,
      transparent 6%,
      transparent 100%
    ),
    radial-gradient(
      circle at 97% 17%,
      rgba(150, 150, 150, 0.03) 0%,
      rgba(150, 150, 150, 0.03) 56%,
      transparent 56%,
      transparent 100%
    ),
    radial-gradient(
      circle at 50% 100%,
      rgba(25, 25, 25, 0.03) 0%,
      rgba(25, 25, 25, 0.03) 36%,
      transparent 36%,
      transparent 100%
    ),
    radial-gradient(
      circle at 55% 52%,
      rgba(69, 69, 69, 0.03) 0%,
      rgba(69, 69, 69, 0.03) 6%,
      transparent 6%,
      transparent 100%
    ),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
  height: 100vh;
  max-width: 100vw;
}

.changeProj {
  position: fixed;
  top: 50%;
  &.right {
    right: 30px;
  }
  &.left {
    left: 120px;
  }
  transform: translate(-50%, -50%);
  $scale: 50px;
  border-radius: $scale;
  height: $scale;
  width: $scale;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background: #f0f0f0;
  }
  @media #{$isMobile} {
    display: none;
  }
}

.fade-enter-active {
  transition-delay: 0.5s;
  .header {
    transition-delay: 0s;
  }
}
.fade-leave-active {
  transition-delay: 0s;
  .header {
    transition-delay: 0.5s;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
  .header {
    transition: inherit;
  }
  position: fixed;
}
.fade-enter {
  transform: translateX(100%);
  transform-origin: -100% center;
  .header {
    transform: translateX(1000px) scale(0);
  }
}
.fade-leave-to {
  transform: translateX(-100%);
  transform-origin: -100% center;
  .header {
    transform: translateX(-1000px) scale(0);
  }
}

.projects-gallery--current {
  height: calc(
    100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 140px
  );
  padding: 70px 5vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .header {
    text-align: center;
    margin-bottom: 20px;
    .title {
      font-weight: bold;
      font-size: 2em;
    }
    .subtitle {
      margin: 20px 0;
      max-width: 400px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .image {
    max-height: 500px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

.projects-gallery {
  @media #{$isMobile} {
    display: none;
  }

  overflow: hidden;
  max-width: 100vw;
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
  @media #{$isDesktop} {
    display: none;
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

      margin-top: 30px;
      object-fit: contain;
      filter: drop-shadow(4px 8px 20px rgba(0, 0, 0, 0.1));
    }
  }
}
</style>
