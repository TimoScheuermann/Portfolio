<template>
  <div class="portfolio-router-view">
    <transition :name="$store.getters.routeTransition">
      <router-view
        class="sub-view"
        :project="project"
        :class="{
          'sub-view__dark': $store.getters.darkmode,
          'sub-view__nested': nested,
        }"
      />
      <slot />
    </transition>
  </div>
</template>

<script lang="ts">
import { IProject } from '@/utils/interfaces';
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class PRouterView extends Vue {
  @Prop() project!: IProject;
  @Prop({ default: true }) nested!: boolean;
}
</script>

<style lang="scss" scoped>
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(60px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-60px, 0);
}
.slide-bottom-enter {
  opacity: 0;
  transform: translate(0, 100px);
}
.portfolio-router-view {
  position: relative;
  max-width: 100vw;
}
.sub-view {
  position: absolute;
  right: 0;

  left: 0;
  @media #{$isDesktop} {
    &:not(.sub-view__nested) {
      left: $sidebar-width;
    }
  }

  z-index: 10;
  transition: 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  transition-property: transform, opacity;

  background: $background;
  &.sub-view__dark {
    background: $background_dark;
  }
}
</style>
