<template lang="html">
  <div id="app">
    <tc-sidebar v-if="showSidebar()">
      <div slot="header" class="tc-sidebar--header">
        <div class="icon">P</div>
        <div class="title">Portfolio</div>
      </div>

      <tc-sidebar-item icon="house" name="Home" :to="{ name: 'home' }" />

      <tc-sidebar-group icon="book-p" name="Projects">
        <tc-sidebar-item
          icon="book-p"
          name="All Projects"
          :to="{ name: 'projects' }"
        /><tc-sidebar-item
          v-for="proj in projects"
          :key="proj.title"
          :icon="proj.images.tiIcon"
          :name="proj.title"
          :to="{ name: proj.routeName }"
        />
      </tc-sidebar-group>

      <tc-sidebar-item
        icon="tools"
        name="Reportoire"
        :to="{ name: 'repertoire' }"
      />
      <tc-sidebar-item
        icon="user-card"
        name="Contact"
        :to="{ name: 'contact' }"
      />
      <tc-sidebar-item icon="github" name="GitHub" :to="{ name: 'github' }" />
      <div class="footer" slot="footer">v0.1.4</div>
    </tc-sidebar>
    <tc-tabbar class="app--tabbar">
      <tc-tabbar-item />
      <tc-tabbar-item title="Projects" icon="book-p" routeName="projects" />
      <tc-tabbar-item title="Repertoire" icon="tools" routeName="repertoire" />
      <tc-tabbar-item title="Contact" icon="user-card" routeName="contact" />
      <tc-tabbar-item title="GitHub" icon="github" routeName="github" />
    </tc-tabbar>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCSidebar from "@/components/tc/sidebar/TC-Sidebar.vue";
import TCSidebarGroup from "@/components/tc/sidebar/TS-Sidebar-Group.vue";
import TCSidebarItem from "@/components/tc/sidebar/TC-Sidebar-Item.vue";
import projects from "@/projects";
import { Project } from "@/models/Projects/Project.model";
import TCTabbar from "./components/tc/tabbar/TC-Tabbar.vue";
import TCTabbarItem from "./components/tc/tabbar/TC-Tabbar-Item.vue";

@Component({
  components: {
    "tc-sidebar": TCSidebar,
    "tc-sidebar-group": TCSidebarGroup,
    "tc-sidebar-item": TCSidebarItem,
    "tc-tabbar": TCTabbar,
    "tc-tabbar-item": TCTabbarItem
  }
})
export default class App extends Vue {
  public projects: Project[] = projects;

  showSidebar() {
    return !this.$route.meta.customSidebar;
  }
}
</script>

<style lang="scss">
@import "./scss/variables.scss";

html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

body {
  background-color: $background;
  color: $color;
  margin: 0;
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: $primary;
}

@media #{$isMobile} {
  .tc-sidebar {
    display: none !important;
  }
}
@media #{$isDesktop} {
  .app--tabbar {
    display: none !important;
  }
  .tc-header .title {
    padding-left: 5vw;
  }
}

.tc-sidebar {
  & > .header {
    height: 120px;
  }
  & > .footer {
    font-weight: bold;
    opacity: 0;
    padding: 10px;
    transition: 0.2s ease-in-out;
  }
  &:hover {
    & > .footer {
      opacity: 0.5;
    }
    .tc-sidebar--header {
      padding: 20px 10px;
      .title {
        opacity: 1;
      }
      .icon {
        $scale: 50px;
        width: $scale;
        height: $scale;
        border-radius: $scale;
        font-size: 25px;
        margin-bottom: 10px;
      }
    }
  }
}
.tc-sidebar--header {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  transition: 0.4s ease-in-out;

  .icon {
    $scale: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #08f;
    width: $scale;
    height: $scale;
    border-radius: $scale;
    color: #fff;
    transition: inherit;
  }
  .title {
    opacity: 0;
    transition: inherit;
    white-space: nowrap;
  }
}

[content] {
  padding: 50px 5vw {
    top: calc(50px + env(safe-area-inset-top));
    bottom: calc(50px + env(safe-area-inset-bottom));
  }
  @media #{$isDesktop} {
    padding-left: calc(5vw + 45px);
  }
  @media #{$isMobile} {
    padding-bottom: calc(70px + env(safe-area-inset-bottom));
  }
}
</style>
