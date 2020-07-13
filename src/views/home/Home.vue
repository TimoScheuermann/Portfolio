<template>
  <div class="home">
    <tc-hero>
      <img
        src="https://images.unsplash.com/photo-1541362254971-29e9b6af8d05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=400&q=100"
        slot="background"
      />
      <div class="title">Timo Scheuermann</div>
      <div class="subtitle">UI / UX Designer from Mannheim, Germany</div>
    </tc-hero>
    <div content>
      <portfolio-big-heading title="Projects" subtitle="I've worked on" />

      <div class="projects">
        <router-link
          v-for="p in projects"
          :key="p.title"
          :style="{ gridArea: p.shortName }"
          :to="{ name: p.routeName }"
          tag="div"
        >
          <tc-card
            :dark="true"
            rounded="true"
            :title="p.title"
            :subtitle="p.description"
          >
            <portfolio-project-appicon :src="p.assets.appIcon" />
            <img :src="p.assets[p.displayAs]" alt="" />
          </tc-card>
        </router-link>
      </div>
      <tc-headline :dark="true" title="Resume">
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
import { Vue, Component } from 'vue-property-decorator';

import projects from '@/projects';
import { Project } from '@/models/Project.model';
import PortfolioBigHeading from '@/components/Portfolio-BigHeading.vue';
import PortfolioProjectAppIcon from '@/components/project/Portfolio-ProjectAppIcon.vue';

@Component({
  components: {
    'portfolio-big-heading': PortfolioBigHeading,
    'portfolio-project-appicon': PortfolioProjectAppIcon,
  },
})
export default class Home extends Vue {
  public projects: Project[] = projects;
}
</script>
<style lang="scss" scoped>
.home {
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

  .tc-hero {
    @media #{$isDesktop} {
      text-align: center;
    }
    @media #{$isMobile} {
      margin-top: -50px;
    }
    img {
      filter: brightness(70%);
    }
    color: #fff;
    .title {
      font-size: 1.5em;
      font-weight: bold;
      animation: title-appear 0.6s ease-in-out 0.5s both;
    }
    .subtitle {
      color: $primary;
      white-space: nowrap;
      animation: description-appear 0.6s ease-in-out 0.5s both;
    }
  }

  .projects {
    @include custom-scrollbar__dark();

    .portfolio-project-appicon {
      position: absolute;
      top: 0;
      left: 0;
      transform: scale(0.2);
      transform-origin: top left;
    }

    .tc-card {
      cursor: pointer;
      height: 100%;
      max-height: 100%;
    }
    padding-bottom: 10px;
    margin-top: 20px;
    overflow: hidden {
      x: auto;
    }
    display: grid;
    grid-gap: 20px;

    @media #{$isDesktop} {
      grid-template-areas:
        'tc tc ic wg dh ns'
        'ti ti ic wg am am';
      grid-template-columns: repeat(6, minmax(300px, 60vw));
      grid-template-rows: repeat(2, minmax(250px, 20vw));
    }
    @media #{$isMobile} {
      grid-template-areas: 'tc ti ic wg dh ns am';
      grid-template-columns: repeat(7, minmax(300px, 30vw));
      grid-template-rows: 250px;
    }
  }
}
</style>
