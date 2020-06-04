<template lang="html">
  <div id="app">
    <tc-navbar v-if="false" :dark="darkTabbar">
      <b slot="logo">Logo</b>
      <tc-button slot="actions" name="Login" icon="login" />
      <tc-navbar-item name="Home" icon="house" :to="{ name: 'home' }" />
      <tc-navbar-item
        v-for="p in projects"
        :key="p.title"
        :name="p.title"
        :icon="p.icon"
        :to="{ name: p.routeName }"
      />
    </tc-navbar>

    <tc-sidebar :dark="darkTabbar" v-if="showSidebar()">
      <div slot="header" class="tc-sidebar--header">
        <div class="icon">
          <img src="https://avatars0.githubusercontent.com/u/48986503" />
        </div>
        <div class="title">
          Timo Scheuermann
          <br />
          <span>Portfolio</span>
        </div>
      </div>

      <tc-sidebar-item icon="house" name="Home" :to="{ name: 'home' }" />

      <tc-sidebar-group icon="book-p" name="Projects">
        <tc-sidebar-item
          name="All Projects"
          icon="todo"
          :to="{ name: 'projects' }"
        />
        <tc-sidebar-item
          v-for="p in projects"
          :key="p.title"
          :icon="p.icon"
          :name="p.title"
          :to="{ name: p.routeName }"
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
      <tc-sidebar-item icon="pin" name="Resume" :to="{ name: 'resume' }" />
      <div class="footer" slot="footer">v1.6.5</div>
    </tc-sidebar>
    <tc-tabbar :dark="darkTabbar" class="app--tabbar">
      <tc-tabbar-item />
      <tc-tabbar-item title="Projects" icon="todo" routeName="projects" />
      <tc-tabbar-item title="Repertoire" icon="tools" routeName="repertoire" />
      <tc-tabbar-item title="Contact" icon="user-card" routeName="contact" />
      <tc-tabbar-item title="GitHub" icon="github" routeName="github" />
    </tc-tabbar>
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import TCSidebar from "@/components/tc/sidebar/TC-Sidebar.vue";
import TCSidebarGroup from "@/components/tc/sidebar/TS-Sidebar-Group.vue";
import TCSidebarItem from "@/components/tc/sidebar/TC-Sidebar-Item.vue";
import projects from "@/projects";
import { Project } from "@/models/Projects/Project.model";
import TCTabbar from "./components/tc/tabbar/TC-Tabbar.vue";
import TCTabbarItem from "./components/tc/tabbar/TC-Tabbar-Item.vue";

import TCNavbar from "@/components/tc/navbar/TC-Navbar.vue";
import TCNavbarItem from "@/components/tc/navbar/TC-Navbar-Item.vue";
import TCButton from "./components/tc/button/TC-Button.vue";
import constants from "./constants";

@Component({
  components: {
    "tc-button": TCButton,
    "tc-navbar": TCNavbar,
    "tc-navbar-item": TCNavbarItem,
    "tc-sidebar": TCSidebar,
    "tc-sidebar-group": TCSidebarGroup,
    "tc-sidebar-item": TCSidebarItem,
    "tc-tabbar": TCTabbar,
    "tc-tabbar-item": TCTabbarItem
  }
})
export default class App extends Vue {
  public projects: Project[] = projects;
  public darkRoutes: string[] = [
    "home",
    "github",
    "uno",
    constants.projectRoutes.timos_components_designer
  ];

  showSidebar() {
    return !this.$route.meta.customSidebar;
  }
  get darkTabbar(): boolean {
    return this.darkRoutes.includes(this.$route.name as string);
  }

  @Watch("$route.name")
  changed(to: string, from: string) {
    this.updateTitle();
    if (this.darkRoutes.includes(to)) {
      document.body.style.background = "#000";
      return;
    }
    document.body.style.background = "#fff";
  }

  private updateTitle(): void {
    const title = this.$route.meta.title;
    if (title) {
      const params = this.$route.params;
      document.title = this.$route.meta.title
        .split("%comp%")
        .join(params.comp)
        .split("%icon%")
        .join(params.icon);
    } else {
      document.title = "Timo Scheuermann | Portfolio";
    }
  }
}
</script>

<style lang="scss">
@import "./scss/variables.scss";
@import "./scss/mixins";

html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

body {
  background: $background;
  color: $color;
  margin: 0;
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: $primary;
}

ul {
  li {
    text-align: left;
  }
}

@for $i from 1 through 6 {
  h#{$i} {
    margin: 0 {
      bottom: 10px;
    }
  }
}
h3 {
  opacity: 0.6;
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
    height: 160px;
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
        $scale: 80px;
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
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .title {
    opacity: 0;
    transition: inherit;
    white-space: nowrap;
    text-align: center;
    span {
      opacity: 0.5;
    }
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
[center] {
  text-align: center;
}
</style>
