<template>
  <div class="github">
    <tc-header variant="sticky" title="GitHub">
      <tc-button
        v-if="loaded"
        name="View on GitHub"
        icon="github"
        :href="profile.html_url"
        variant="filled"
      />
    </tc-header>
    <tc-hero height="200">
      <img
        slot="background"
        src="https://images.unsplash.com/photo-1561211974-8a2737b4dcac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      />

      <tc-spinner v-if="!loaded" variant="dots-wave" />
      <tc-card v-else :rounded="true" :frosted="true">
        <tl-flow horizontal="space-around">
          <div class="tile">
            <div>{{ repos.length }}</div>
            <div>public repos</div>
          </div>
          <div class="tile">
            <div>{{ yearsActive() }}</div>
            <div>years active</div>
          </div>
          <div class="tile">
            <div>3</div>
            <div>private repos</div>
          </div>
        </tl-flow>
      </tc-card>
    </tc-hero>

    <div content v-if="loaded">
      <portfolio-big-heading title="Repositories" subtitle="Most Recent" />

      <tc-table :striped="true" :border="false" @sort="s => (sort = s)">
        <tc-table-search slot="search" v-model="query" />
        <template slot="head">
          <tc-th attribute="name">Repository</tc-th>
          <tc-th attribute="project">Project</tc-th>
          <tc-th attribute="created">Created</tc-th>
          <tc-th attribute="updated">Updated</tc-th>
          <tc-th>GitHub</tc-th>
        </template>
        <tc-tr v-for="r in repos" :key="r.id">
          <tc-td :tfcolor="isArchive(r) ? 'error' : undefined">
            {{ r.name }}
          </tc-td>
          <tc-td :tfcolor="isArchive(r) ? 'error' : undefined">
            <template v-if="isArchive(r)">
              archived
            </template>
            <template v-else-if="getProject(r)">
              <tc-link :routeName="getProject(r).routeName">
                {{ getProject(r).title }}
              </tc-link>
            </template>
          </tc-td>
          <!-- <tc-td>{{ r.description }}</tc-td> -->
          <tc-td>{{ convertDate(r.created_at) }}</tc-td>
          <tc-td>{{ formatDate(r.updated_at) }}</tc-td>
          <tc-td><tc-link :href="r.html_url">GitHub</tc-link></tc-td>
          <!-- <template slot="expander">
            <p>{{ r.description }}</p>
          </template> -->
        </tc-tr>
      </tc-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import axios from '@/constants/axios';
import PortfolioRepository from '@/components/Portfolio-Repository.vue';
import PortfolioBigHeading from '@/components/Portfolio-BigHeading.vue';
import { formatDate } from '../utils';
import { Project } from '@/models';
import projects from '@/constants/projects';

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
  public query = '';
  public sort: { attribute: string; direction: number } = {
    attribute: 'updated',
    direction: -1,
  };

  async mounted() {
    this.loadRepos();
    this.loadProfile();
  }

  get creationDate(): string {
    return this.convertDate(this.profile.created_at);
  }

  get repos() {
    return this.$store.getters.repos
      .filter(x => {
        if (this.query.length > 0) {
          return JSON.stringify(x)
            .toLowerCase()
            .includes(this.query.toLowerCase());
        }
        return true;
      })
      .sort((a, b) => {
        let compared = 0;
        if (this.sort.attribute === 'name') {
          compared = a.name.localeCompare(b.name);
        } else if (this.sort.attribute === 'project') {
          compared = this.getProjectName(a).localeCompare(
            this.getProjectName(b)
          );
        } else if (this.sort.attribute === 'created') {
          compared = a.created_at.localeCompare(b.created_at);
        } else if (this.sort.attribute === 'updated') {
          compared = a.updated_at.localeCompare(b.updated_at);
        }

        return this.sort.direction * compared;
      });
  }

  public getProject(repo): Project {
    return projects.filter(x => x.github === repo.html_url)[0];
  }
  public getProjectName(repo): string {
    const project = this.getProject(repo);
    if (project) {
      return project.title;
    }
    return 'ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ';
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
.tc-card {
  @media #{$isDesktop} {
    width: calc(90vw - 212px);
  }
  @media #{$isMobile} {
    width: 90vw;
  }
}
.tl-flow .tile div:first-child {
  color: $primary;
  font-size: 2em;
  font-weight: 800;
}
.tc-table-2 {
  margin-top: 20px;
}
.tc-td {
  padding: 10px;
}
</style>
