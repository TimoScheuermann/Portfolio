<template>
  <div class="github">
    <PHeader
      title="GitHub"
      rootRoute="github"
      backTitle="GitHub"
      :trigger="100"
    />

    <tc-hero :hasFixedHeader="false" height="200" :dark="true">
      <img slot="background" src="assets/github-hero.webp" />

      <tc-spinner v-if="!profile" :dark="true" variant="dots-wave" />
      <tl-flow v-else>
        <tc-avatar :src="profile.avatar_url" />
        <div class="spacer" />
        <tl-flow flow="column">
          <div class="number">{{ yearsActive }}</div>
          <div class="desc">years active</div>
        </tl-flow>
        <template v-if="repos">
          <div class="spacer" />
          <tl-flow flow="column">
            <div class="number">{{ repos.length }}</div>
            <div class="desc">repositories</div>
          </tl-flow>
        </template>
      </tl-flow>
    </tc-hero>

    <div content v-if="repos">
      <PHeading title="Repositories" subtitle="Most Recent" />
      <br />
      <br />
      <div class="repo-grid" max-width>
        <div
          class="repository"
          v-for="r in repos"
          :key="r.id"
          :dark="$store.getters.darkmode"
        >
          <h2 center>{{ r.name }}</h2>
          <tl-flow class="repo-stats">
            <tl-flow flow="column">
              <div class="type">updated</div>
              <i class="ti-repeat" />
              <div class="desc">{{ formatDate(r.updated_at) }}</div>
            </tl-flow>
            <div class="spacer" />
            <tl-flow flow="column">
              <div class="type">created</div>
              <i class="ti-calendar-alt" />
              <div class="desc">{{ convertDate(r.created_at) }}</div>
            </tl-flow>
            <div class="spacer" />
            <tl-flow flow="column">
              <div class="type">Repository</div>
              <i class="ti-github" />
              <tc-link :href="getHTMLUrl(r)">GitHub</tc-link>
            </tl-flow>
          </tl-flow>
          <div class="project-info" v-if="getProjectOf(r)">
            <tl-flow>
              <tc-avatar border="rounded" :src="getProjectOf(r).thumbnail" />
            </tl-flow>
            <tc-table :dark="$store.getters.darkmode">
              <tc-tr key="p">
                <tc-td>Project</tc-td>
                <tc-td>
                  <tc-link
                    :to="{
                      name: 'project',
                      params: { project: getProjectOf(r).title },
                    }"
                  >
                    {{ getProjectOf(r).title }}
                  </tc-link>
                </tc-td>
              </tc-tr>
              <tc-tr key="w" v-if="getProjectOf(r).website">
                <tc-td>Website</tc-td>
                <tc-td>
                  <tc-link :href="getProjectOf(r).website">
                    {{ getProjectOf(r).website }}
                  </tc-link>
                </tc-td>
              </tc-tr>
              <tc-tr key="n">
                <tc-td>Newsroom</tc-td>
                <tc-td>
                  <tc-link
                    :href="
                      'https://newsroom.timos.design/project/' +
                        getProjectOf(r).title
                    "
                  >
                    https://newsroom.timos.design/
                  </tc-link>
                </tc-td>
              </tc-tr>
              <tc-tr key="npm" v-if="getProjectOf(r).npmjs">
                <tc-td>NPM.js</tc-td>
                <tc-td>
                  <tc-link :href="getProjectOf(r).npmjs">
                    {{ getProjectOf(r).npmjs }}
                  </tc-link>
                </tc-td>
              </tc-tr>
            </tc-table>
          </div>
        </div>
      </div>
    </div>

    <PFooter />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { IProject } from '@/utils/interfaces';
import { formatDate } from '@/utils/functions';

@Component
export default class GitHubView extends Vue {
  mounted() {
    if (!this.profile) {
      fetch('https://api.github.com/users/timoscheuermann')
        .then(res => res.json())
        .then(res => this.$store.commit('ghProfile', res));
    }
    if (!this.reposInventory) {
      fetch('https://api.github.com/users/timoscheuermann/repos')
        .then(res => res.json())
        .then(res => this.$store.commit('ghRepos', res));
    }
    if (!this.reposArchive) {
      fetch('https://api.github.com/users/timoscheuermannarchive/repos')
        .then(res => res.json())
        .then(res => this.$store.commit('ghReposArchive', res));
    }
  }

  get loaded(): boolean {
    return !!this.repos && !!this.profile;
  }

  get profile(): null | Record<string, string> {
    return this.$store.getters.ghProfile;
  }

  get reposInventory(): null | Record<string, string>[] {
    return this.$store.getters.ghRepos;
  }

  get reposArchive(): null | Record<string, string>[] {
    return this.$store.getters.ghReposArchive;
  }

  get repos(): null | Record<string, string>[] {
    if (!this.reposInventory || !this.reposArchive) return null;
    return [...this.reposInventory, ...this.reposArchive].sort(
      (a, b) => this.getTSUpdate(b) - this.getTSUpdate(a)
    );
  }

  get yearsActive(): number {
    const ageDifMs = Date.now() - new Date('2014-07-19T05:51:55Z').getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getTSUpdate(repo: Record<string, string>): number {
    return new Date(repo.updated_at).getTime();
  }

  getTSCreated(repo: Record<string, string>): number {
    return new Date(repo.created_at).getTime();
  }

  getHTMLUrl(repo: Record<string, string>): string {
    return repo.html_url;
  }

  getProjectOf(repo: Record<string, string>): IProject | null {
    const projects: IProject[] | null = this.$store.getters.projects;
    if (!projects) return null;
    return projects.filter(x => x.github && x.github === repo.html_url)[0];
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
.github {
  .spacer {
    width: 5vw;
    max-width: 40px;
  }

  .repo-grid {
    display: grid;
    grid-gap: 0 20px;
    @media only screen and(min-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }
    .repository {
      border-bottom: 1px solid rgba($color, 0.25);
      padding-bottom: 20px;
      &[dark] {
        border-color: rgba($color_dark, 0.25);
      }
    }
  }

  .tc-hero {
    img {
      filter: blur(5px);
    }
    .tl-flow {
      .number {
        font-weight: bolder;
        font-size: 24px;
        margin: 5px 0;
      }
      .desc {
        font-weight: 500;
        opacity: 0.75;
        font-size: 14px;
        text-transform: uppercase;
      }
    }
  }
  .project-info {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 20px;
    .tc-table-2 {
      height: fit-content;
      margin: auto 0;
    }
  }
  .repo-stats {
    margin-bottom: 10px;
    i {
      font-size: 24px;
      margin: 10px 0;
    }
    .type,
    .desc,
    .tc-link {
      opacity: 0.75;
      font-weight: bolder;
      font-size: 14px;
    }
    .type {
      font-weight: 500;
      text-transform: uppercase;
    }
  }
}
</style>
