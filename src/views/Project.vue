<template>
  <div class="view-project">
    <div content v-if="project" :key="project._id">
      <div max-width>
        <h3 center>{{ project.description }}</h3>

        <section :dark="$store.getters.darkmode">
          <div class="title">Useful Links</div>
          <a
            v-if="project.website"
            :href="project.website"
            target="_blank"
            rel="noopener noreferrer"
            :dark="$store.getters.darkmode"
          >
            Website
          </a>
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            :dark="$store.getters.darkmode"
          >
            GitHub
          </a>
          <a
            v-if="project.npmjs"
            :href="project.npmjs"
            target="_blank"
            rel="noopener noreferrer"
            :dark="$store.getters.darkmode"
          >
            NPM.js
          </a>
          <div class="spacer-small" />
        </section>

        <section
          v-for="s in sections"
          :key="s.title"
          :dark="$store.getters.darkmode"
        >
          <div class="title">{{ s.title }}</div>
          <div class="subtitle">{{ s.subtitle }}</div>
          <tl-grid minWidth="250">
            <template v-for="i in s.items">
              <PSectionItemLarge
                v-if="i.size === 'large'"
                :key="i.title"
                :item="i"
              />
              <PSectionItemNormal
                v-else-if="i.size === 'normal'"
                :key="i.title"
                :item="i"
              />
            </template>
          </tl-grid>
          <div class="spacer" />
        </section>

        <section :dark="$store.getters.darkmode">
          <div class="title">Release Notes</div>
          <div class="subtitle">
            Learn about changes and updates to {{ project.title }}
          </div>
          <a
            :href="'https://newsroom.timos.design/project/' + project.title"
            target="_blank"
            rel="noopener noreferrer"
            class="newsroom-button"
            :dark="$store.getters.darkmode"
          >
            <tl-flow>
              <img :src="$newsIcon" alt="" />
              <div>{{ project.title }} @ Newsroom</div>
            </tl-flow>
          </a>
          <div class="spacer" />
        </section>

        <section :dark="$store.getters.darkmode">
          <div class="title">Tools used</div>
          <div class="subtitle">in {{ project.title }}</div>
          <tl-grid minWidth="200">
            <PSectionItemNormal v-if="designTools" :item="designTools" />
            <PSectionItemNormal v-if="frameworks" :item="frameworks" />
            <PSectionItemNormal v-if="development" :item="development" />
          </tl-grid>
          <div class="spacer" />
        </section>
      </div>
    </div>
    <PFooter />
  </div>
</template>
<script lang="ts">
import PSectionItemLarge from '@/components/PSectionItemLarge.vue';
import PSectionItemNormal from '@/components/PSectionItemNormal.vue';
import {
  IProject,
  IProjectSection,
  IProjectSectionItem,
} from '@/utils/interfaces';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  components: {
    PSectionItemNormal,
    PSectionItemLarge,
  },
})
export default class Project extends Vue {
  @Prop() project!: IProject;

  get designTools(): IProjectSectionItem | null {
    if (
      this.project &&
      this.project.designTools &&
      this.project.designTools.length > 0
    ) {
      return {
        background: '',
        size: 'normal',
        asset: './assets/project-details/software.svg',
        title: 'Design',
        description: this.project.designTools.join(', '),
      } as IProjectSectionItem;
    }
    return null;
  }

  get frameworks(): IProjectSectionItem | null {
    if (
      this.project &&
      this.project.frameworks &&
      this.project.frameworks.length > 0
    ) {
      return {
        background: '',
        size: 'normal',
        asset: './assets/project-details/layers.svg',
        title: 'Frameworks',
        description: this.project.frameworks.join(', '),
      } as IProjectSectionItem;
    }
    return null;
  }

  get development(): IProjectSectionItem | null {
    if (
      this.project &&
      this.project.development &&
      this.project.development.length > 0
    ) {
      return {
        background: '',
        size: 'normal',
        asset: './assets/project-details/coding.svg',
        title: 'Development',
        description: this.project.development.join(', '),
      } as IProjectSectionItem;
    }
    return null;
  }

  get sections(): IProjectSection[] {
    if (!this.project || !this.project.sections) return [];
    return this.project.sections;
  }
}
</script>

<style lang="scss" scoped>
.view-project {
  a {
    padding: 10px 20px;
    margin: 0 5px;
    width: fit-content;
    display: inline-block;
    color: inherit;
    text-decoration: none;
    border-radius: 100px;
    cursor: pointer;

    transition: border-color 0.2s ease-in-out;
    border: 2px solid rgba(#111, 0.5);
    &[dark] {
      border-color: rgba(#fff, 0.5);
    }
    &:hover {
      border-color: #111;
      &[dark] {
        border-color: #fff;
      }
    }

    img {
      $scale: 20px;
      height: $scale;
      width: $scale;
    }
    div {
      margin-left: 10px;
      font-weight: bold;
    }
  }

  @keyframes move-up {
    from {
      transform: translateY(40px) scale(0.99);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
  }

  section {
    animation: move-up 0.4s ease-in-out 0.3s both;
    background: $paragraph;
    &[dark] {
      background: $paragraph_dark;
    }
    text-align: center;
    border-radius: $border-radius;
    margin: 30px -5vw;
    padding: 20px 5vw 0;

    .spacer {
      height: 5vw;
      max-height: 60px;
    }

    .spacer-small {
      height: 30px;
    }

    .title,
    .subtitle {
      text-align: center;
    }
    .title {
      font-weight: bold;
      font-size: 30px;
      margin: 10px 0;
    }
    .subtitle {
      font-weight: 500;
      font-size: 20px;
      margin-bottom: 30px;
    }
  }
}
</style>
