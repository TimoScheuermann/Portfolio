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

    <tc-sidebar :dark="darkTabbar" v-if="showSidebar">
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
          icon="stop"
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
    </tc-sidebar>
    <tc-tabbar
      :dark="darkTabbar"
      :key="'tb_' + $route.name"
      class="app--tabbar"
    >
      <tc-tabbar-item routeName="home" />
      <tc-tabbar-item title="Projects" icon="todo" routeName="projects" />
      <tc-tabbar-item title="Repertoire" icon="tools" routeName="repertoire" />
      <tc-tabbar-item title="Contact" icon="user-card" routeName="contact" />
      <tc-tabbar-item title="GitHub" icon="github" routeName="github" />
    </tc-tabbar>
    <div class="view">
      <md-transition>
        <router-view />
      </md-transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import projects from "@/projects";
import { Project } from "@/models/Projects/Project.model";
import constants from "./constants";
import { Route } from "vue-router";
import MaterialDesignTransition from "vue-router-md-transition";

@Component({
  components: {
    "md-transition": MaterialDesignTransition,
  },
})
export default class App extends Vue {
  public projects: Project[] = projects;
  public darkRoutes: string[] = [
    "home",
    "github",
    "contact",
    "uno",
    constants.projectRoutes.timos_components_designer,
  ];

  get showSidebar(): boolean {
    return !this.$route.meta.customSidebar;
  }

  get darkTabbar(): boolean {
    return this.darkRoutes.includes(this.$route.name as string);
  }

  @Watch("$route", { deep: true, immediate: true })
  changed(to: Route): void {
    this.updateTitle();
    window.scrollTo(0, 0);
    if (to.name && this.darkRoutes.includes(to.name)) {
      document.body.style.background = "#000";
      return;
    }
    document.body.style.background = "#fff";
  }

  private updateTitle(): void {
    const title = this.$route.meta.title;
    if (title) {
      const params = this.$route.params;
      const title = this.$route.meta.title;
      document.title = this.replaceTitlePlaceholder(params, title);
    } else {
      document.title = "Timo Scheuermann | Portfolio";
    }
    this.updateMeta("title", document.title);
  }

  private updateMeta(name: string, content: string): void {
    document.querySelectorAll(`meta[name=${name}]`).forEach((elem: Element) => {
      elem.remove();
    });
    document.head.innerHTML =
      `<meta name="${name}" content="${content}" />` + document.head.innerHTML;
  }

  private replaceTitlePlaceholder(
    params: Record<string, string>,
    title: string
  ): string {
    for (const [key, value] of Object.entries(params)) {
      title = title.split("%" + key + "%").join(value);
    }
    return title;
  }
}
</script>

<style lang="scss">
/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
  .bar {
    background: #08f;

    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }
  .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #29d, 0 0 5px #29d;
    opacity: 1;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }
  .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }
  .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: #29d;
    border-left-color: #29d;
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
  #nprogress {
    .spinner,
    .bar {
      position: absolute;
    }
  }
}

@-webkit-keyframes nprogress-spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

.pageloading {
  z-index: 1000000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: red;
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
