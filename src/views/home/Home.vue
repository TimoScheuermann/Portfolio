<template>
  <div class="home">
    <tc-hero :hasFixedHeader="false">
      <img src="assets/home/hero.jpg" slot="background" />
      <div class="title">Timo Scheuermann</div>
      <div class="subtitle">UI / UX Designer from Mannheim, Germany</div>
    </tc-hero>
    <div content>
      <project-title title="Projects" subtitle="I've worked on" />
      <div class="projects">
        <tc-card
          v-for="p in projects"
          :key="p.title"
          :style="{ gridArea: p.shortName }"
          :dark="true"
          rounded="true"
          :title="p.title"
          :subtitle="p.description"
        >
          <img :src="p.assets[p.displayAs]" alt="" />
        </tc-card>
      </div>
      <tc-headline title="Resume">
        <tc-button :to="{ name: 'uno' }" icon="photos" name="Uno" />
      </tc-headline>
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
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import projects from "@/projects";
import { Project } from "@/models/Projects/Project.model";
import ProjectsTitle from "@/components/projects/common/Projects--Title.vue";

@Component({
  components: {
    "tc-hero": TCHero,
    "tc-headline": TCHeadline,
    "tc-button": TCButton,
    "tc-card": TCCard,
    "project-title": ProjectsTitle
  }
})
export default class Home extends Vue {
  public projects: Project[] = projects;
}
</script>
<style lang="scss" scoped>
@import "../../scss/variables";

.home {
  background: #000;
  color: #fff;

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

  .projects {
    .tc-card {
      cursor: pointer;
    }
    padding-bottom: 10px;
    margin-top: 20px;
    overflow: hidden {
      x: auto;
    }
    display: grid;
    grid-gap: 20px;
    grid-template-areas:
      "tc tc ic wg dh ns"
      "ti ti ic wg am am";
    grid-template-columns: repeat(6, minmax(300px, 60vw));
    grid-template-rows: repeat(2, minmax(250px, 20vw));
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    position: absolute !important;
    border-radius: 4px;
    transition: 0.2s ease;
  }

  ::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 4px;
    transition: 0.2s ease;
    &:hover {
      background: #888;
      transition: 0.2s ease;
    }
  }
}
</style>
