<template>
  <div class="github">
    <tc-header variant="sticky" :autoBackground="true" title="GitHub">
      <tc-button
        v-if="loaded"
        name="View on GitHub"
        icon="github"
        :href="profile.html_url"
        variant="filled"
      />
    </tc-header>
    <tc-hero tc-dark-container height="300">
      <img slot="background" src="assets/github-hero.jpg" />

      <tc-spinner v-if="!loaded" variant="dots-wave" />

      <tl-grid head v-else minWidth="100">
        <tl-flow>
          <tc-avatar :src="profile.avatar_url" />
        </tl-flow>
        <tc-card :rounded="true" :dark="true" :frosted="true">
          <div huge>{{ repos.length }}</div>
          <div title>public repos</div>
        </tc-card>

        <tc-card :rounded="true" :dark="true" :frosted="true">
          <div huge>{{ yearsActive() }}</div>
          <div title>years active</div>
        </tc-card>

        <tc-card :rounded="true" :dark="true" :frosted="true">
          <div huge>3</div>
          <div title>private repos</div>
        </tc-card>
      </tl-grid>
    </tc-hero>

    <div content v-if="loaded">
      <portfolio-big-heading title="Repositories" subtitle="Most Recent" />
      <tl-grid minWidth="330" v-if="!true">
        <portfolio-repository
          v-for="(repo, index) in getRepos"
          :dark="index === 0 || true"
          :repo="repo"
          :index="index"
          :key="repo.id"
        />
      </tl-grid>

      <tl-grid repos>
        <tc-card
          v-for="repo in repos"
          :key="repo.id"
          :rounded="true"
          :dark="isArchive(repo)"
          :title="repo.name"
          :subtitle="repo.description"
        >
          <div class="archived" v-if="isArchive(repo)">Archived</div>
          <!-- <tc-badge value="Archvie" /> -->
          <!-- <tc-headline :dark="isArchive(repo)" slot="header" :title="repo.name">
            </tc-badge> -->
          <!-- </tc-headline> -->
          <!-- <div>{{ repo.description }}</div> -->
          <!-- convertDate(repo.created_at),
              convertDate(repo.updated_at),
              repo.language,
            ]" -->
          <tl-flow horizontal="space-around">
            <tl-flow flow="column" info>
              <i class="ti-calendar-alt" />
              <span>created</span>
              <div>{{ convertDate(repo.created_at) }}</div>
            </tl-flow>
            <tl-flow flow="column" info>
              <i class="ti-gears" />
              <span>updated</span>
              <div>{{ formatDate(repo.updated_at) }}</div>
            </tl-flow>
          </tl-flow>
          <!-- <p>{{ formatDate(repo.updated_at) }}</p> -->
          <tc-link :href="repo.html_url">View on GitHub</tc-link>
          <!-- <p>{{ repo }}</p> -->
        </tc-card>
      </tl-grid>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import axios from '@/constants/axios';
import PortfolioRepository from '@/components/Portfolio-Repository.vue';
import PortfolioBigHeading from '@/components/Portfolio-BigHeading.vue';
import { formatDate } from '../../utils';

@Component({
  components: {
    'portfolio-repository': PortfolioRepository,
    'portfolio-big-heading': PortfolioBigHeading,
  },
})
export default class GitHubView extends Vue {
  public loaded = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public profile!: any;

  mounted() {
    this.loadRepos();
    this.loadProfile();
  }

  get creationDate(): string {
    return this.convertDate(this.profile.created_at);
  }

  get repos() {
    return this.$store.getters.repos;
  }

  isArchive(repo) {
    return JSON.stringify(repo).includes(
      'https://github.com/TimoScheuermannArchive'
    );
  }

  yearsActive(): number {
    const ageDifMs = Date.now() - new Date('2014-07-19T05:51:55Z').getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  public loadRepos(): void {
    if (this.$store.getters.repos.length <= 0) {
      axios
        .get('https://api.github.com/users/timoscheuermann/repos')
        .then(res => {
          this.$store.commit('addRepositories', res.data);
        });
      axios
        .get('https://api.github.com/users/timoscheuermannarchive/repos')
        .then(res => {
          this.$store.commit('addRepositories', res.data);
        });
    }
  }

  public async loadProfile(): Promise<void> {
    if (!this.$store.state.profile) {
      const { data } = await axios.get(
        'https://api.github.com/users/timoscheuermann'
      );

      this.profile = data;
      this.$store.state.profile = data;
      this.loaded = true;
    } else {
      this.profile = this.$store.state.profile;
      this.loaded = true;
    }
  }

  public convertDate(dateString: string): string {
    const date = new Date(dateString);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  }

  public formatDate(date): string {
    return formatDate(date);
  }
}
</script>
<style lang="scss" scoped>
.tl-grid {
  &[head] {
    @media #{$isDesktop} {
      width: calc(90vw - 212px);
    }
    @media #{$isMobile} {
      width: 90vw;
    }
  }
  &[repos] {
    margin-top: 30px;
    .tc-card:first-child {
      grid-column: 1 / 3;
    }
    .tc-card {
      overflow: visible;
    }
    .archived {
      position: absolute;
      user-select: none;
      top: -10px;
      right: -10px;
      box-shadow: $shadow;
      background: $error;
      color: #fff;
      font-size: 12px;
      $scale: 20px;
      height: $scale;
      padding: 0px #{$scale / 3};
      min-width: #{$scale / 3};
      border-radius: $scale;
      line-height: $scale;
    }
  }
}
.tc-card [huge] {
  color: $primary;
  font-size: 2em;
  font-weight: 800;
}
.tl-flow[info] {
  margin: 10px 0;
  position: relative;
  i {
    font-size: 1.6em;
    $scale: 60px;
    width: $scale;
    height: $scale;
    line-height: $scale;
    text-align: center;
    border-radius: $scale;
    background: $background_dark;
    color: $color_dark;
  }
  span {
    margin: 5px 0;
    font-weight: bold;
  }
  div {
    margin-bottom: 5px;
    font-weight: 500;
  }
}
</style>
