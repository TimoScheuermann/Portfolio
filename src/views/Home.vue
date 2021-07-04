<template>
  <div class="home">
    <PHeader title="Timo Scheuermann" rootRoute="home" backTitle="Home" />

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
      <PHeading title="Featured Projects" subtitle="I've worked on" />
      <div max-width class="featured-projects">
        <PProjectPreview v-for="p in projects" :key="p.id" :project="p" />
      </div>

      <tl-flow>
        <tc-button
          large
          :background="$store.getters.darkmode ? '#fff' : '#111'"
          :color="$store.getters.darkmode ? '#111' : '#fff'"
          name="All projects"
          icon="chevron-right"
          iconPosition="right"
          variant="opaque"
          routeName="projects"
        />
      </tl-flow>

      <PHeading title="Newsroom" subtitle="Always stay up to date" />

      <section id="newsroom" max-width :dark="$store.getters.darkmode">
        <tl-flow>
          <img :src="$newsIcon" alt="" />
        </tl-flow>
        <tl-flow flow="column" vertical="start">
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
        </tl-flow>
      </section>
    </div>

    <PFooter />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PProjectPreview from '@/components/PProjectPreview.vue';
import { IProject } from '@/utils/interfaces';

@Component({
  components: {
    PProjectPreview,
  },
})
export default class Home extends Vue {
  get projects(): IProject[] | null {
    const projects: IProject[] | null = this.$store.getters.projects;
    if (!projects) return null;
    return projects.filter(x => x.displayOnHome);
  }
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
    .portfolio-project-preview {
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
.tc-magic-card.brightThumbnail /deep/ .tc-magic-card--thumbnail {
  color: #111 !important;
}

section#newsroom {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  padding: 10px;

  background: $paragraph;
  &[dark] {
    background: $paragraph_dark;
  }
  border-radius: $border-radius;
  margin-top: 20px;
  img {
    max-height: 100px;
    border-radius: $border-radius;
  }
  p {
    font-weight: 500;
    margin: 3px {
      bottom: 7px;
    }
  }
}
</style>
