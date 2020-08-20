<template>
  <div class="home">
    <tc-hero height="200" :dark="true">
      <img src="assets/home-hero.jpg" slot="background" id="bg" />
      <div class="hero-container">
        <tc-avatar src="assets/me.jpg" />
        <div class="info">
          <div class="title">Timo Scheuermann</div>
          <div class="subtitle">UI / UX Designer from Mannheim, Germany</div>
        </div>
      </div>
    </tc-hero>

    <div content>
      <portfolio-big-heading
        title="Featured Projects"
        subtitle="I've worked on"
      />

      <div class="featured-projects">
        <tc-magic-card
          v-for="p in projects.filter(x => x.showOnHome)"
          :key="p.title"
          :src="p.assets.thumbnail"
          :title="p.title"
          :subtitle="p.type"
          :dark="true"
        >
          <div class="featured-container">
            <h1>{{ p.title }}</h1>
            <p>{{ p.description }}</p>
            <tc-button
              name="Find out more"
              :icon="p.icon"
              variant="filled"
              :routeName="p.routeName"
            />
          </div>
        </tc-magic-card>
      </div>

      <tl-flow>
        <tc-button
          large
          background="#fff"
          color="#000"
          name="All projects"
          icon="chevron-right"
          iconPosition="right"
          variant="opaque"
          routeName="projects"
        />
      </tl-flow>

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
            tfbackground="alarm"
            name="Newsroom"
            icon="newspaper"
            variant="opaque"
            routeName="newsroom"
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
  .tc-button[large] {
    padding: 10px 30px;
    margin-bottom: 70px;
  }
  .featured-projects {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .tc-magic-card {
      $space: 20px;
      margin-bottom: $space;

      @media only screen and(min-width: 600px) {
        flex: 0 0 calc(60%);
        &:nth-child(4n + 1),
        &:nth-child(4n + 4) {
          flex: 0 0 calc(40% - 20px);
        }
        &:nth-child(4n + 1) {
          margin-right: 20px;
        }
        &:nth-child(4n + 4) {
          margin-left: 20px;
        }
      }

      .featured-container {
        margin: 20px {
          left: 17px;
        }
        h1 {
          margin: 0 3px;
        }
        p {
          margin-left: 3px;
        }
      }
    }
  }

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
