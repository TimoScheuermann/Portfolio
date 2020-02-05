<template>
  <div class="navbar">
    <div class="container">
      <router-link :to="{name: 'home'}" class="title">Timo Scheuermann</router-link>
    </div>
    <div class="container routes">
      <router-link :to="{name: 'projects'}">Projects</router-link>
      <router-link :to="{name: 'repertoire'}">Reportoire</router-link>
      <router-link :to="{name: 'contact'}">Contact</router-link>
      <router-link :to="{name: 'github'}">GitHub</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class PNavbar extends Vue {}
</script>
<style lang="scss" scoped>
@import "../../scss/mixins";
@import "../../scss/variables";

.navbar {
  @include backdrop-blur($background);

  display: flex;
  position: sticky;
  top: 0;
  padding: 0 10%;
  height: 50px;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.19);
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  .container {
    color: $color;

    @media #{$isMobile} {
      .title::after {
        opacity: 0.7;
        content: "Portfolio";
      }
      &.routes {
        display: none;
      }
    }

    .title {
      font-weight: bold;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    &.routes {
      a {
        &:not(:last-child) {
          margin-right: 20px;
        }
        opacity: 0.8;
        transition: 0.2s ease-in-out;
        border: 1px solid rgba(0, 0, 0, 0);
        padding: 5px 10px;
        border-radius: 5px;
        &:hover {
          opacity: 1;
          border: 1px solid rgba($color, 0.3);
        }
        &.router-link-exact-active {
          font-weight: bold;
          border: 1px solid rgba(0, 0, 0, 1);
          span {
          }
        }
      }
    }
  }
}
</style>
