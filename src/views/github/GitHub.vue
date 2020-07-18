<template>
  <div class="github">
    <tc-header variant="sticky" :autoBackground="true" title="GitHub" />
    <tc-hero tc-dark-container height="300">
      <img slot="background" src="assets/github-hero.jpg" />
    </tc-hero>
    <tc-card
      profile
      :title="loaded ? profile.name : 'Fetching data'"
      :frosted="true"
      :dark="!true"
      :rounded="true"
    >
      <tl-flow flow="column">
        <tc-spinner v-if="!loaded" variant="dots-wave" />
        <template v-else>
          <tc-avatar :src="profile.avatar_url" />
          <tc-button
            name="View on GitHub"
            icon="github"
            :href="profile.html_url"
            variant="filled"
          />
        </template>
      </tl-flow>
    </tc-card>

    <div content v-if="loaded">
      <portfolio-big-heading title="Repositories" subtitle="Most Recent" />
      <tl-grid minWidth="330">
        <portfolio-repository
          v-for="(repo, index) in getRepos"
          :dark="index === 0 || true"
          :repo="repo"
          :index="index"
          :key="repo.id"
        />
      </tl-grid>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import axios from '@/constants/axios';
import PortfolioRepository from '@/components/Portfolio-Repository.vue';
import PortfolioBigHeading from '@/components/Portfolio-BigHeading.vue';

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public repositories: any[] = [];

  async mounted(): Promise<void> {
    await this.loadRepos();
    await this.loadProfile();
    this.loaded = true;
  }

  get creationDate(): string {
    return this.convertDate(this.profile.created_at);
  }
  get getRepos(): Record<string, unknown>[] {
    return this.repositories.sort(
      (b, a) =>
        this.getLongFromDate(a.updated_at) - this.getLongFromDate(b.updated_at)
    );
  }

  public async loadRepos(): Promise<void> {
    if (!this.$store.state.repositories) {
      const { data } = await axios.get(
        'https://api.github.com/users/timoscheuermann/repos'
      );
      this.repositories = data;
      this.$store.state.repositories = data;
    } else {
      this.repositories = this.$store.state.repositories;
    }
  }

  public async loadProfile(): Promise<void> {
    if (!this.$store.state.profile) {
      const { data } = await axios.get(
        'https://api.github.com/users/timoscheuermann'
      );
      this.profile = data;
      this.$store.state.profile = data;
    } else {
      this.profile = this.$store.state.profile;
    }
  }
  public convertDate(dateString: string): string {
    const date = new Date(dateString);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  }
  public getLongFromDate(dateString: string): number {
    return new Date(dateString).getTime();
  }
}
</script>
<style lang="scss" scoped>
.tc-card[profile] {
  width: 300px;
  position: relative;
  left: calc(50% - 150px);
  margin-top: -200px;
  .tc-button {
    margin-top: 20px;
  }
}
.tl-grid {
  margin-top: 30px;
  .tc-card:nth-child(1) {
    @media only screen and (min-width: 780px) {
      grid-column: 1 / 3;
    }
  }
}
</style>
