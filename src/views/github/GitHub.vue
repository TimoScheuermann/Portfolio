<template>
  <div class="github">
    <tc-header :dark="true" title="GitHub" />
    <tc-hero>
      <img
        slot="background"
        src="https://www.hd-freewallpapers.com/earth-wallpaper/desktop-pictures-of-the-earth-from-space-wallpaper.jpg"
      />
      <div v-if="!loaded" class="loading">
        <tc-spinner size="35" />
        <div class="title">Fetching data</div>
      </div>
      <div v-else class="loaded">
        <div
          class="icon"
          :style="{ background: 'url(' + profile.avatar_url + ')' }"
        ></div>
        <div class="informations">
          <div class="name">{{ profile.name }}</div>
          <div class="date">
            Member since
            <span>{{ creationDate }}</span>
          </div>
          <a :href="profile.html_url" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <a :href="profile.html_url" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </tc-hero>

    <div content v-if="loaded">
      <project-title title="Repositories" subtitle="Most Recent" />
      <!-- <h1>Repositories</h1> -->
      <tc-grid minWidth="330" class="__repositories">
        <github-repo-tile
          v-for="(repo, index) in getRepos"
          :dark="index === 0 || true"
          :repo="repo"
          :index="index"
          :key="repo.id"
        />
      </tc-grid>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import GitHubRepoTile from "./GitHub--Repotile.vue";
import axios from "@/axios";
import ProjectsTitle from "@/components/projects/common/Projects--Title.vue";
import IGitHubProfile from "@/models/GitHub/IGitHubProfile";
import IGitHubRepo from "@/models/GitHub/IGitHubRepo";

@Component({
  components: {
    "github-repo-tile": GitHubRepoTile,
    "project-title": ProjectsTitle,
  },
})
export default class GitHubView extends Vue {
  public loaded = false;
  public profile!: IGitHubProfile;
  public repositories: IGitHubRepo[] = [];

  async mounted(): Promise<void> {
    await this.loadRepos();
    await this.loadProfile();
    this.loaded = true;
  }

  get creationDate(): string {
    return this.convertDate(this.profile.created_at);
  }
  get getRepos(): IGitHubRepo[] {
    return this.repositories.sort(
      (b, a) =>
        this.getLongFromDate(a.updated_at) - this.getLongFromDate(b.updated_at)
    );
  }

  public async loadRepos(): Promise<void> {
    if (!this.$store.state.repositories) {
      const { data } = await axios.get(
        "https://api.github.com/users/timoscheuermann/repos"
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
        "https://api.github.com/users/timoscheuermann"
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
.github {
  background: #000;
}
[content] {
  color: #fff;
}
.loading,
.loaded {
  height: 150px;
  // background: linear-gradient(
  //   rgba(0, 0, 0, 0),
  //   rgba(0, 0, 0, 0.5),
  //   rgba(0, 0, 0, 0)
  // );
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media #{$isDesktop} {
    margin-left: 45px;
  }
}
.loading {
  flex-direction: column;
  .title {
    font-weight: bold;
    font-size: 1.5em;
  }
}

.loaded {
  justify-content: space-between;
  width: 80vw;

  @media #{$isMobile} {
    & > a {
      display: none;
    }
  }
  flex-direction: row;

  .icon {
    $size: 100px;
    width: $size;
    height: $size;
    border-radius: $size;
    background: {
      size: cover !important;
    }
  }
  .informations {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .name,
    .date span {
      font-weight: bold;
    }
    .name {
      font-size: 1.25em;
    }
    .date {
      opacity: 0.8;
    }
    a {
      @media #{$isDesktop} {
        display: none;
      }
      margin-top: 10px;
      width: fit-content;
      display: block;
    }
  }
  a {
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    color: inherit;
    @include backdrop-blur(#666);
    font-weight: bold;
    transition: 0.2s ease-in-out;
    border: 1px solid transparent;
    &:hover {
      border: 1px solid currentColor;
    }
  }
}
.tc-grid {
  margin-top: 20px;
  .tc-card:nth-child(1) {
    @media only screen and (min-width: 780px) {
      grid-column: 1 / 3;
    }
  }
}
</style>
