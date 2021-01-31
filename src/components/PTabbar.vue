<template>
  <tc-tabbar :dark="$store.getters.darkmode">
    <tc-tabbar-item title="Home" icon="house" routeName="home" />
    <tc-tabbar-item title="Projects" icon="todo" routeName="projects" />
    <tc-tabbar-item title="Newsroom" icon="newspaper" routeName="newsroom" />
    <tc-tabbar-item title="Contact" icon="user-card" routeName="contact" />
    <tc-tabbar-item title="GitHub" icon="github" routeName="github" />
  </tc-tabbar>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PTabbar extends Vue {}
</script>
<style lang="scss" scoped>
.tc-tabbar {
  @media #{$isDesktop} {
    display: none;
  }
}
</style>
