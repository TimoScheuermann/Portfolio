<template>
  <div class="newsroom">
    <tc-header variant="sticky" title="Newsroom" :autoBackground="true" />
    <tc-hero tc-dark-container background="#f1c40f">
      <img
        slot="background"
        src="https://images.unsplash.com/photo-1567852384292-ab6358906959?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2132&q=80"
        alt=""
      />
      <div class="hero-content">
        <img src="https://newsroom.timos.design/pwa/maskIcon.svg" alt="" />
        <h1>Timo's Newsroom</h1>
      </div>
    </tc-hero>
    <div content>
      <h1>Timo's Newsroom is the source for news about all of my projects.</h1>
      <p>Read annoucements, get updates and learn new features.</p>
      <tc-button
        href="https://newsroom.timos.design/"
        icon="newspaper"
        name="Timo's Newsroom"
        variant="filled"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PortfolioProjectAppIcon from '@/components/project/Portfolio-ProjectAppIcon.vue';

@Component({
  components: {
    'portfolio-project-appicon': PortfolioProjectAppIcon,
  },
})
export default class Newsroom extends Vue {}
</script>

<style lang="scss" scoped>
.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 120px;
    height: 120px;
  }
  h1 {
    margin: 0;
    color: #fff;
  }
}
h1 {
  margin: 0;
}
</style>
