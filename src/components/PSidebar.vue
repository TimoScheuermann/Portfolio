<template>
  <div class="portfolio-sidebar" :style="sidebarBackground">
    <div class="container">
      <div class="logo">
        <img src="assets/logo.svg" alt="" />
        <div class="name">Timo Scheuermann</div>
      </div>

      <!--  -->
      <PSidebarItem icon="house" title="Home" routeName="home" />
      <PSidebarItem icon="todo" title="Projects" routeName="projects" />
      <PSidebarItem icon="user-card" title="Contact" routeName="contact" />
      <PSidebarItem icon="newspaper" title="Newsroom" routeName="newsroom" />
      <PSidebarItem icon="github" title="GitHub" routeName="github" />

      <tc-divider :dark="true" />

      <tl-flow class="project-header" horizontal="space-between">
        <h3>Projects</h3>
        <tc-link routeName="projects" color="#ececec">view all</tc-link>
      </tl-flow>

      <template v-if="$store.getters.projects">
        <PSidebarItem
          v-for="p in $store.getters.projects"
          :key="p.id"
          :icon="p.icon"
          :title="p.title"
          :to="{ name: 'project', params: { project: p.title } }"
        />
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PSidebarItem from './PSidebarItem.vue';

@Component({
  components: {
    PSidebarItem,
  },
})
export default class PSidebar extends Vue {
  get sidebarBackground(): string {
    return `background-image: url(assets/sidebar.webp)`;
  }
}
</script>
<style lang="scss" scoped>
.portfolio-sidebar {
  display: none;
  @media #{$isDesktop} {
    display: block;
  }
  position: fixed;
  width: $sidebar-width;
  height: 100vh;

  overflow-y: auto;
  @include custom-scrollbar__light();

  background-repeat: no-repeat;
  background-size: cover;

  .container {
    padding: 20px;
    color: #fff;
    .logo {
      margin: 0 auto 20px;
      max-width: 80%;
      width: fit-content;
      text-align: center;
      img {
        max-width: 100%;
        max-height: 120px;
        filter: invert(100%);
      }
      .name {
        font-weight: bold;
        margin-top: 5px;
      }
    }

    .project-header {
      margin-bottom: 10px;
      h3 {
        margin: 0;
      }
    }
  }
}
</style>
