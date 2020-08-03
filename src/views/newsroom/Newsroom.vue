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
            Read annoucements, get updates and learn new features.
          </p>
          <tc-button
            href="https://newsroom.timos.design/"
            icon="newspaper"
            name="Timo's Newsroom"
            variant="filled"
          />
        </tl-flow>
      </tl-grid>

      <h2>Latest news</h2>

      <div v-for="(n, i) in news" :key="n._id">
        <tc-divider v-if="i !== 0" />
        <div class="news-container">
          <tl-flow flow="column">
            <tc-avatar
              border="rounded"
              :src="'https://newsroom.timos.design/' + n.thumbnail"
            />

            <span>{{ formatDate(n.date) }}</span>
          </tl-flow>
          <div class="news-info">
            <h3>{{ n.title }}</h3>
            <p>{{ n.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PortfolioProjectAppIcon from '@/components/project/Portfolio-ProjectAppIcon.vue';
import axios from '@/constants/axios';
import { formatDate } from '@/utils';

@Component({
  components: {
    'portfolio-project-appicon': PortfolioProjectAppIcon,
  },
})
export default class Newsroom extends Vue {
  public news = [];
  async mounted() {
    const { data } = await axios.get(
      'https://api.timos.design/newsroom/latest'
    );
    this.news = data;
  }
  public formatDate(n: number): string {
    return formatDate(n);
  }
}
</script>

<style lang="scss" scoped>
.grid-info {
  h1 {
    margin: 0;
  }
  h1,
  p {
    text-align: center;
  }
}
.grid-image {
  @media only screen and (max-width: 650px) {
    display: none;
  }
  img {
    height: 75%;
    width: 75%;
    object-fit: contain;
  }
}
.tc-divider {
  margin: 20px 0;
}
.news-container {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  .tl-flow {
    span {
      margin-top: 10px;
      font-weight: 500;
      opacity: 0.7;
    }
  }
  .news-info {
    h3 {
      margin: 0;
    }
    p {
      margin-bottom: 0;
    }
    div {
      text-align: right;
      span {
        opacity: 0.7;
        font-weight: 500;
      }
    }
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
