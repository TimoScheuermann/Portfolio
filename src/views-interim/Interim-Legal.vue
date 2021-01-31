<template>
  <div class="view-interim-legal">
    <PHeader
      :title="$route.meta.hero.title"
      rootRoute="home"
      backTitle="Home"
    />

    <tc-hero :dark="$store.getters.darkmode" :hasFixedHeader="false">
      <img src="assets/legal-hero.jpg" slot="background" alt="" />
      <tl-flow flow="column">
        <h1>{{ $route.meta.hero.title }}</h1>
        <p>
          <b>{{ $route.meta.hero.updated }}</b>
        </p>
      </tl-flow>
    </tc-hero>
    <PRouterView />
  </div>
</template>

<script lang="ts">
import PRouterView from '@/components/PRouter.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    PRouterView,
  },
})
export default class InterimLegal extends Vue {}
</script>

<style lang="scss" scoped>
.tc-hero {
  img {
    filter: blur(10px) brightness(70%);
  }
  h1,
  p {
    margin: 0;
    color: #fff;
  }
}
</style>
