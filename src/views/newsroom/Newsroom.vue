<template>
  <div class="newsroom">
    <tc-header variant="sticky" title="Newsroom" :autoBackground="true" />
    <tc-hero tc-dark-container background="#f1c40f">
      <img
        slot="background"
        src="https://newsroom.timos.design/assets/hero.jpg"
        alt=""
      />
      <tl-flow flow="column">
        <img src="https://newsroom.timos.design/pwa/maskIcon.svg" alt="" />
        <h1>Timo's Newsroom</h1>
      </tl-flow>
    </tc-hero>
    <div content>
      <tl-grid minWidth="200">
        <div class="grid-image">
          <img ex src="assets/newsroom-thumbnail.png" alt="" />
        </div>
        <tl-flow flow="column" class="grid-info">
          <h1>
            Timo's Newsroom is the source for news about all of my projects.
          </h1>
          <p>
            Read annoucements, get updates and learn new features.{{
              news.length
            }}
          </p>
          <tc-button
            href="https://newsroom.timos.design/"
            icon="newspaper"
            name="Timo's Newsroom"
            variant="filled"
          />
        </tl-flow>
      </tl-grid>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PortfolioProjectAppIcon from '@/components/project/Portfolio-ProjectAppIcon.vue';
import axios from '@/constants/axios';

@Component({
  components: {
    'portfolio-project-appicon': PortfolioProjectAppIcon,
  },
})
export default class Newsroom extends Vue {
  public news = [];
  async mounted() {
    const { data } = await axios.get(
      'https://timos-newsroom.herokuapp.com/news'
    );
    this.news = data;
  }
}
</script>

<style lang="scss" scoped>
.grid-image {
  img {
    height: 75%;
    width: 75%;
    object-fit: contain;
  }
}
.grid-info {
  h1 {
    margin: 0;
    text-align: center;
  }
}

.tc-hero .tl-flow {
  img {
    width: 120px;
    height: 120px;
  }
  h1 {
    margin: 0;
    color: #fff;
  }
}
</style>
