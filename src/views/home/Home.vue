<template>
  <div class="home">
    <tc-hero height="200">
      <img src="assets/home-hero.jpg" slot="background" id="bg" />
      <div class="hero-container">
        <tc-avatar src="assets/me.jpg"></tc-avatar>

        <div class="info">
          <div class="title">Timo Scheuermann</div>
          <div class="subtitle">UI / UX Designer from Mannheim, Germany</div>
        </div>
      </div>
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

      <portfolio-big-heading
        title="Newsroom"
        subtitle="Always stay up to date"
      />

      <section id="newsroom">
        <img src="https://newsroom.timos.design/pwa/maskIcon.svg" alt="" />
        <div>
          <p>
            Timo's Newsroom is the source for news about all of my projects.
            Read annoucements, get updates and learn new features.
          </p>
          <tc-button
            name="Newsroom"
            icon="newspaper"
            :to="{ name: 'newsroom' }"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import projects from '@/constants/projects';
import { Project } from '@/models';
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
    img#bg {
      filter: brightness(60%);
    }
    color: #fff;
    .hero-container {
      display: flex;
      justify-content: center;
      align-items: center;
      .info,
      .me {
        margin: 0 20px;
      }

      $scale: 115px;
      @media #{$isMobile} {
        $scale: 90px;
        margin-top: -55px;
        flex-direction: column;
        text-align: center;
        .tc-avatar {
          margin-bottom: 20px;
        }
      }
      .info {
        .title {
          font-weight: bold;
          margin-bottom: 5px;
          font-size: 1.5em;
          animation: title-appear 0.6s ease-in-out 0.5s both;
        }
        .subtitle {
          color: $alarm;
          font-weight: 500;
          white-space: nowrap;
          animation: description-appear 0.6s ease-in-out 0.5s both;
        }
      }
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
      justify-self: stretch;
      cursor: pointer;
      height: 100%;
      max-height: 100%;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
    padding-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 130px;
    overflow: hidden {
      x: auto;
    }
    display: grid;
    grid-gap: 20px;

    @media #{$isDesktop} {
      grid-template-areas:
        'tc tc ic wg dh dh ns ga'
        'ti ti ic wg am am ta ta';
      grid-template-columns: repeat(8, minmax(300px, 60vw));
      grid-template-rows: repeat(2, minmax(300px, 25vw));
    }
    @media #{$isMobile} {
      grid-template-areas: 'tc ti ic wg dh ns am ta ga';
      grid-template-columns: repeat(9, minmax(300px, 30vw));
      grid-template-rows: 250px;
    }
  }
}

section#newsroom {
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  @media only screen and(max-width: 480px) {
    flex-direction: column;
    div {
      text-align: center;
    }
  }
  background: $paragraph_dark;
  border-radius: $border-radius;
  margin-top: 20px;
  img,
  p {
    font-weight: 500;
  }
  p {
    margin: 3px {
      bottom: 7px;
    }
  }
}
</style>
