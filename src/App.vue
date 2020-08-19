<template lang="html">
  <div id="timos-portfolio" :class="{ dark: !!$route.meta.dark }">
    <tl-sidebar sidebarBackgroundImage="assets/sidebar.jpg" :blurred="true">
      <portfolio-sidebar-head slot="sidebar-header" v-if="sidebarVisible" />
      <template v-if="sidebarVisible" slot="sidebar-content">
        <tc-sidebar-item icon="house" name="Home" routeName="home" />
        <tc-sidebar-item name="Projects" icon="todo" routeName="projects" />
        <tc-sidebar-item
          icon="tools"
          name="Reportoire"
          routeName="repertoire"
        />
        <tc-sidebar-item icon="user-card" name="Contact" routeName="contact" />
        <tc-sidebar-item
          icon="newspaper"
          name="Newsroom"
          routeName="newsroom"
        />
        <tc-sidebar-item icon="github" name="GitHub" routeName="github" />
        <tc-sidebar-item icon="pin" name="Resume" routeName="resume" />
        <tc-divider :dark="true" />
        <tc-sidebar-group icon="book-p" name="Projects">
          <tc-sidebar-item
            v-for="p in projects.filter(x => !x.hideInSidebar)"
            :key="p.title"
            :icon="p.icon"
            :name="p.title"
            :routeName="p.routeName"
          />
        </tc-sidebar-group>
      </template>

      <div class="router-view">
        <router-view />
        <div class="router-view__grower" />
        <portfolio-footer />
      </div>
    </tl-sidebar>

    <portfolio-tabbar />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import projects from '@/constants/projects';
import { Project } from '@/models';
import PortfolioTabbar from '@/components/global/Portfolio-Tabbar.vue';
import PortfolioSidebarHead from '@/components/global/Portfolio-SidebarHead.vue';
import PortfolioFooter from '@/components/global/Portfolio-Footer.vue';

@Component({
  components: {
    'portfolio-tabbar': PortfolioTabbar,
    'portfolio-sidebar-head': PortfolioSidebarHead,
    'portfolio-footer': PortfolioFooter,
  },
})
export default class App extends Vue {
  public projects: Project[] = projects;
  public sidebarVisible = window.matchMedia('(min-width: 851px)').matches;

  mounted() {
    window.matchMedia('(min-width: 851px)').addEventListener('change', e => {
      this.sidebarVisible = e.matches;
    });
  }
}
</script>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Inter,
    Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 0;
}
.router-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .router-view__grower {
    flex-grow: 1;
  }
}

#timos-portfolio {
  background: $background;
  color: $color;
  &.dark {
    background: $background_dark;
    color: $color_dark;
  }
}
a {
  text-decoration: none;
}

[content] {
  padding: 50px 5vw {
    top: calc(50px + env(safe-area-inset-top));
    bottom: calc(50px + env(safe-area-inset-bottom));
  }
  @media #{$isMobile} {
    padding-bottom: calc(70px + env(safe-area-inset-bottom));
  }
}

.tc-hero {
  @media #{$isDesktop} {
    margin-top: -50px;
  }
}

.tc-header {
  @media #{$isMobile} {
    position: fixed !important;
    right: 0 !important;
    left: 0 !important;
    padding: 0 5vw !important;
    padding-top: env(safe-area-inset-top) !important;
  }
}
</style>
