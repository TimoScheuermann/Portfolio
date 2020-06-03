<template>
  <div>
    <tc-hero :hasFixedHeader="false">
      <img src="assets/home/hero.jpg" slot="background" />
      <div class="title">Timo Scheuermann</div>
      <div class="subtitle">UI / UX Designer from Mannheim, Germany</div>
    </tc-hero>
    <div content class="home">
      <tc-headline title="My Work">
        <tc-button :to="{ name: 'uno' }" icon="todo" name="All Projects" />
      </tc-headline>
      <div class="projects">
        <router-link
          tag="div"
          v-for="proj in projects"
          :key="proj.title"
          :to="{ name: proj.routeName }"
        >
          <home-project-card :project="proj" />
        </router-link>
      </div>
      <tc-headline title="Resume" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus
      deleniti ut vitae tempore nulla error aperiam quis pariatur omnis adipisci
      reprehenderit, optio deserunt, minima facilis corporis ipsum aspernatur
      temporibus!
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import projects from "@/projects";
import { Project } from "@/models/Projects/Project.model";
import TCPreview from "@/components/tc/preview/TC-Preview.vue";
import HomeProjectCard from "@/components/home/Home-ProjectCard.vue";
@Component({
  components: {
    "tc-hero": TCHero,
    "tc-header": TCHeader,
    "tc-headline": TCHeadline,
    "tc-button": TCButton,
    "tc-card": TCCard,
    "tc-preview": TCPreview,
    "home-project-card": HomeProjectCard
  }
})
export default class Home extends Vue {
  public projects: Project[] = projects;
}
</script>
<style lang="scss" scoped>
@import "../../scss/variables";

.tc-hero {
  @media #{$isDesktop} {
    text-align: center;
  }
  img {
    filter: brightness(70%);
  }
  color: #fff;
  .title {
    font-size: 1.5em;
    font-weight: bold;
  }
  .subtitle {
    color: $primary;
    white-space: nowrap;
  }
}

.home {
  padding-top: 5px;
  background: #000;
  color: #fff;
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    position: absolute !important;
    border-radius: 4px;
    transition: 0.2s ease;
  }

  ::-webkit-scrollbar:hover {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 4px;
    transition: 0.2s ease;
    &:hover {
      background: #888;
      transition: 0.2s ease;
      cursor: grabbing;
    }
  }
  .projects {
    display: flex;
    align-items: center;
    overflow: hidden {
      x: auto;
    }
    & > div {
      cursor: pointer;
    }
    padding-bottom: 10px;
    margin-bottom: 20px;
    /deep/ .tc-card {
      margin: 0 5px;
      .tc-card--subtitle__prestyled {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 78px;
      }

      @media #{$isMobile} {
        width: 80vw;
        min-width: 300px;
      }
      @media #{$isDesktop} {
        width: 400px;
      }
    }
  }
}
</style>
