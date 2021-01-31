<template>
  <div class="newsroom">
    <PHeader title="Newsroom" rootRoute="newsroom" backTitle="Newsroom" />

    <tc-hero :dark="$store.getters.darkmode" :hasFixedHeader="false">
      <img
        slot="background"
        src="https://newsroom.timos.design/assets/hero.jpg"
        alt=""
      />
      <img logo :src="$newsIcon" alt="" />
    </tc-hero>

    <div content>
      <div max-width>
        <tl-grid class="explanation" minWidth="200">
          <!-- <div class="grid-image">
          </div> -->
          <img ex src="assets/newsroom-thumbnail.png" alt="" />
          <tl-flow flow="column">
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

        <a
          v-for="(n, i) in news"
          :key="n._id"
          target="_blank"
          rel="noopener noreferrer"
          :href="'https://newsroom.timos.design/news/' + n._id"
        >
          <tc-divider :dark="$store.getters.darkmode" v-if="i !== 0" />
          <div class="news-container">
            <tl-flow flow="column">
              <tc-avatar border="rounded" :src="n.thumbnail" />
              <span>{{ formatDate(n.timestamp) }}</span>
            </tl-flow>
            <div class="news-info">
              <h3>{{ n.title }}</h3>
              <p>{{ n.content }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <PFooter />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import backend from '@/utils/backend';
import { formatDate } from '@/utils/functions';

@Component
export default class Newsroom extends Vue {
  public news = [];

  async mounted() {
    const { data } = await backend.get('newsroom?limit=5');
    this.news = data;
  }

  public formatDate(n: number): string {
    return formatDate(n);
  }
}
</script>

<style lang="scss" scoped>
.newsroom {
  .tc-hero {
    img:not([logo]) {
      filter: blur(10px);
    }
    img[logo] {
      width: 110px;
      height: 110px;
    }
  }
  .explanation {
    img {
      @media only screen and (max-width: 650px) {
        display: none;
      }
      height: 75%;
      width: 75%;
      object-fit: contain;
      object-position: center;
    }
    .tl-flow {
      h1 {
        margin: 0;
      }
      h1,
      p {
        text-align: center;
      }
    }
  }
  .tc-divider {
    margin: 20px 0;
  }
}

a {
  color: inherit;
  text-decoration: none;
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
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
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
}
</style>
