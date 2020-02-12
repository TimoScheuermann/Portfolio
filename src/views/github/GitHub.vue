<template>
  <div>
    <div class="landing">
      <div class="loading" v-if="!loaded">
        <div class="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="title">Fetching data</div>
      </div>
      <div class="loaded" v-if="loaded">
        <div class="profile">
          <div class="icon">
            <img :src="profile.avatar_url" />
          </div>
          <div class="informations">
            <div class="name">{{ profile.name }}</div>
            <div class="date">
              Member since
              <span>{{ creationDate }}</span>
            </div>
          </div>
          <a
            :href="profile.html_url"
            target="_blank"
            rel="noopener noreferrer"
            class="visit"
          ></a>
        </div>
      </div>
    </div>
    <div class="repositories" v-if="loaded">
      <tc-card
        v-for="(repo, index) in getRepos"
        :key="index"
        :title="repo.name"
        :subtitle="repo.description"
        :navigation="{
          name: 'View Repository on GitHub',
          destiny: repo.svn_url
        }"
      >
        <div v-if="index === 0" class="lastUpdated">latest updates</div>
        <div class="changes">
          <div class="change">
            <div class="time">{{ convertDate(repo.created_at) }}</div>
            <div class="name">Created</div>
          </div>
          <div class="change">
            <div class="time">{{ convertDate(repo.updated_at) }}</div>
            <div class="name">Updated</div>
          </div>
          <div class="change">
            <div class="time">{{ convertDate(repo.pushed_at) }}</div>
            <div class="name">Pushed</div>
          </div>
        </div>

        <ul>
          <li>Size: {{ repo.size }}</li>
          <li>Lang: {{ repo.language }}</li>
          <li>CloneURLS...</li>
        </ul>
      </tc-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCCard from "@/components/tc/card/TC-Card.vue";

@Component({
  components: {
    "tc-card": TCCard
  }
})
export default class GitHubView extends Vue {
  [x: string]: any;

  public loaded: boolean = false;
  public profile: any = {};
  public repositories: any[] = [];

  async mounted() {
    await this.loadRepos();
    await this.loadProfile();
    this.loaded = true;
  }

  get creationDate() {
    return this.convertDate(this.profile.created_at);
  }
  get getRepos() {
    return this.repositories.sort(
      (b, a) =>
        this.getLongFromDate(a.updated_at) - this.getLongFromDate(b.updated_at)
    );
  }

  public async loadRepos(): Promise<void> {
    if (!this.$store.state.repositories) {
      const { data } = await this.$axios.get(
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
      const { data } = await this.$axios.get(
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
@import "../../scss/variables.scss";

@media #{$isMobile} {
  .landing {
    flex-direction: column;
    .loading {
      margin-top: -10px;
      padding-bottom: 10px;
    }
    .loaded {
      .profile {
        padding: 15px 0px;
        flex-direction: column;
        .informations {
          margin: 10px 0px;
        }
      }
    }
  }
}

@media #{$isDesktop} {
  .landing {
    height: 150px;
  }
}

.landing {
  margin-top: -100px;
  padding-top: 100px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    position: absolute;
    content: "";
    margin-top: -100px;
    padding-top: 100px;
    left: -100px;
    top: -100px;
    bottom: -100px;
    right: -100px;
    filter: blur(20px);
    background: url("../../assets/landing.gif");
    background-position: center;
    background-size: cover;
    z-index: -1;
  }

  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      font-weight: 600;
      font-size: 1.2em;
      opacity: 0.8;
      color: #fff;
    }
    .spinner {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 60px;
    }
    .spinner div {
      position: absolute;
      top: 33px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #fff;
      opacity: 0.7;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    .spinner div:nth-child(1) {
      left: 8px;
      animation: spinner1 0.6s infinite;
    }
    .spinner div:nth-child(2) {
      left: 8px;
      animation: spinner2 0.6s infinite;
    }
    .spinner div:nth-child(3) {
      left: 32px;
      animation: spinner2 0.6s infinite;
    }
    .spinner div:nth-child(4) {
      left: 56px;
      animation: spinner3 0.6s infinite;
    }
    @keyframes spinner1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes spinner3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
    @keyframes spinner2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }
  }
  .loaded {
    .profile {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0px 10vw;
      width: 80vw;
      $size: 100px;
      color: #fff;
      .icon {
        width: $size;
        height: $size;
        border-radius: $size;
        img {
          border-radius: $size;
          max-height: 100%;
          max-width: 100%;
        }
      }
      .informations {
        display: flex;
        justify-content: center;
        flex-direction: column;
        .name {
          font-weight: bold;
          font-size: 1.25em;
        }
        .date {
          opacity: 0.8;
          span {
            font-weight: bold;
          }
        }
      }
      .visit {
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        color: inherit;
        backdrop-filter: blur(50px);
        background: rgba(255, 255, 255, 0.19);
        font-weight: bold;
        &::before {
          content: "View on GitHub";
        }
        transition: 0.2s ease-in-out;
        border: 1px solid transparent;
        &:hover {
          border: 1px solid currentColor;
        }
      }
    }
  }
}

@media #{$isMobile} {
  .repositories {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media #{$isDesktop} {
  .repositories {
    grid-template-columns: repeat(2, 1fr);
    .tc-card {
      &:first-child {
        grid-column: 1 / 3;
      }
    }
  }
}

.repositories {
  display: grid;
  grid-gap: 10px;
  margin: 10px 0px;
  .tc-card {
    position: relative;

    &:first-child {
      background: $color;
      color: $paragraph;
      .changes {
        border-top: 1px solid rgba($paragraph, 0.3);
        border-bottom: 1px solid rgba($paragraph, 0.3);
        .change {
          &:nth-child(2) {
            border-left: 2px solid rgba($paragraph, 0.3);
            border-right: 2px solid rgba($paragraph, 0.3);
          }
        }
      }
    }

    .lastUpdated {
      position: absolute;
      top: 5px;
      right: 5px;
      color: #f61d33;
      user-select: none;
      cursor: default;
      border: 2px solid currentColor;
      border-radius: 100px;
      padding: 5px 10px;
      font-weight: bold;
      transform-origin: right top;
      transform: scale(0.8);
    }

    .changes {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border-top: 1px solid rgba($color, 0.3);
      border-bottom: 1px solid rgba($color, 0.3);
      padding: 10px 0px;
      width: fit-content;
      text-align: center;

      .change {
        padding: 10px;
        &:nth-child(2) {
          border-left: 1px solid rgba($color, 0.3);
          border-right: 1px solid rgba($color, 0.3);
        }
        .time {
          font-weight: bold;
          opacity: 0.7;
        }
        .name {
          margin-top: 2px;
          color: $primary;
          font-weight: 500;
        }
      }
    }
    ul {
      display: none;
    }
  }
}
</style>
