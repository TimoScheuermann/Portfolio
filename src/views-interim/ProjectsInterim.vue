<template>
  <div class="projects-interim" v-if="!$route.meta.customHero">
    <portfolio-project-header />
    <portfolio-project-hero />

    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <div :key="$route.name">
        <router-view />
        <portfolio-project-tools />
      </div>
    </transition>
  </div>
  <router-view v-else />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PortfolioProjectHeader from '@/components/project/Portfolio-ProjectHeader.vue';
import PortfolioProjectHero from '@/components/project/Portfolio-ProjectHero.vue';
import PortfolioProjectTools from '@/components/project/Portfolio-ProjectTools.vue';

@Component({
  components: {
    'portfolio-project-header': PortfolioProjectHeader,
    'portfolio-project-hero': PortfolioProjectHero,
    'portfolio-project-tools': PortfolioProjectTools,
  },
})
export default class ProjectsInterim extends Vue {
  public prevHeight = '0';

  public beforeLeave(element: HTMLElement): void {
    this.prevHeight = getComputedStyle(element).height;
  }

  public enter(element: HTMLElement): void {
    const { height } = getComputedStyle(element);
    element.style.height = this.prevHeight;
    this.$nextTick(() => {
      element.style.height = height;
    });
  }

  public afterEnter(element: HTMLElement): void {
    element.style.height = 'auto';
  }
}
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(30px);
}
</style>
