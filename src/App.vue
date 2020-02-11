<template lang="html">
  <div id="app">
    <tc-sidebar v-if="showSidebar()">
      <b slot="header">Title</b>

      <tc-sidebar-item icon="house" name="Home" :to="{ name: 'home' }" />

      <tc-sidebar-group icon="book-p" name="Projects">
        <tc-sidebar-item
          icon="book-p"
          name="Projects"
          :to="{ name: 'projects' }"
        /><tc-sidebar-item
          v-for="proj in projects"
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
      <tc-sidebar-item name="GitHub" :to="{ name: 'github' }" />

      <b slot="footer">Footer</b>
    </tc-sidebar>
    <p-navbar></p-navbar>
    <p-tabbar></p-tabbar>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PNavbar from "@/components/common/P-Navbar.vue";
import PTabbar from "@/components/common/P-Tabbar.vue";
import TCSidebar from "@/components/tc/sidebar/TC-Sidebar.vue";
import TCSidebarGroup from "@/components/tc/sidebar/TS-Sidebar-Group.vue";
import TCSidebarItem from "@/components/tc/sidebar/TC-Sidebar-Item.vue";
import projects from "@/projects";
import { Project } from "@/models/Projects/Project.model";

@Component({
  components: {
    "p-navbar": PNavbar,
    "p-tabbar": PTabbar,
    "tc-sidebar": TCSidebar,
    "tc-sidebar-group": TCSidebarGroup,
    "tc-sidebar-item": TCSidebarItem
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
</style>
