<template>
  <div class="timos-icons-requests--detail">
    <tc-header
      :title="!!issue && issue.title"
      backName="Icon Requests"
      :autoBackground="true"
      :backTo="{ name: constants.projectRoutes.timos_icons_requests }"
    />

    <tc-hero tc-dark-container>
      <img
        slot="background"
        src="assets/projects/timosicons/banner_request.jpg"
      />
      <transition-group tag="div" class="hero-content" name="swap">
        <div class="error" v-if="error" :key="0">Error</div>
        <div class="loaded" v-else-if="loaded" :key="1">
          <div class="type" :style="{ color: '#' + issue.labels[0].color }">
            {{ issue.labels[0].name }}
          </div>
          <h1>{{ issue.title }}</h1>
          <div class="hero--sub">
            <div class="indicator" :class="issue.state">
              {{ issue.state }}
            </div>
            <tc-button
              :href="issue.html_url"
              variant="filled"
              name="View on GitHub"
              iconPosition="right"
              icon="github"
            />
          </div>
        </div>
        <div class="loading" v-else :key="2">
          <tc-spinner />
          <div class="info">Loading</div>
        </div>
      </transition-group>
    </tc-hero>

    <div content v-if="loaded">
      <!-- <p>{{ issue }}</p> -->
      <!-- <p>{{ comments[0] }}</p> -->
      <tc-grid arrangement="auto-fit">
        <section>
          <h1>#{{ number }} {{ issue.title }}</h1>
          <timosicons-issue-comment
            :comment="issue"
            :issue="issue"
            timePrefix="reported this issue"
            :title="issue.title"
          />
        </section>

        <section v-if="comments.length > 0">
          <h1>Comments</h1>
          <timosicons-issue-comment
            v-for="comment in comments"
            :key="comment.created"
            :comment="comment"
            :issue="issue"
          />
        </section>
      </tc-grid>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import axios from "@/axios";
import constants from "@/constants";
import TimosIconsIssueComment from "@/components/projects/TimosIcons/TimosIcons--Issue-Comment.vue";
import { formatDate } from "@/utils/DateFormatter";
import IGitHubIssueComment from "@/models/GitHub/IGutHubIssueComment";
import IGitHubIssue from "@/models/GitHub/IGitHubIssue";

@Component({
  components: {
    "timosicons-issue-comment": TimosIconsIssueComment,
  },
})
export default class TimosIconsRequestsDetail extends Vue {
  public constants: Record<string, unknown> = constants;
  public error = false;
  public comments: IGitHubIssueComment[] | null = null;
  public issue: IGitHubIssue | null = null;

  get loaded(): boolean {
    return !!this.comments && !!this.issue;
  }

  get number(): string {
    return this.$route.params.issue;
  }

  public formatDate(date: Record<string, unknown>): string {
    return formatDate(date);
  }

  async created(): Promise<void> {
    this.loadComments();
    this.loadIssue();
  }

  async loadComments(): Promise<void> {
    const { data } = await axios.get(
      `https://api.github.com/repos/TimoScheuermann/Timos-Icons/issues/${this.number}/comments`
    );
    if (data) {
      this.comments = data;
    } else {
      this.error = true;
    }
  }
  async loadIssue(): Promise<void> {
    const { data } = await axios.get(
      `https://api.github.com/repos/TimoScheuermann/Timos-Icons/issues/${this.number}`
    );
    if (data) {
      this.issue = data;
    } else {
      this.error = true;
    }
  }
}
</script>
<style lang="scss" scoped>
.swap-enter-active,
.swap-leave-active {
  transition: all 1s;
}
.swap-enter {
  opacity: 0;
  transform: translateY(30px);
}
.swap-leave-to {
  opacity: 0;
  transform: scale(0);
}
.swap-leave-active {
  position: absolute;
}

section {
  @media only screen and (min-width: 710px) {
    max-height: calc(
      100vh - 370px - env(safe-area-inset-top) - env(safe-area-inset-bottom)
    );
    padding: 20px {
      top: 0;
    }
    h1 {
      margin: 0 -20px {
        bottom: -10px;
      }
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: auto {
    x: visible;
  }
  h1 {
    z-index: 10;
    padding-top: 20px;
    text-align: center;
    position: sticky;
    top: 0;
  }
}

.hero--sub {
  display: flex;
  justify-content: center;
  align-items: center;
  .tc-button,
  .indicator {
    margin: 3px 10px;
    padding: 5px 10px;
  }
  .indicator {
    color: #fff;
    border-radius: $border-radius;
    text-transform: capitalize;
    &.open {
      background: $success;
    }
    &.closed {
      background: $error;
    }
  }
}

.timos-icons-requests--detail {
  [content] {
    padding-top: 30px;
    position: relative;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    @media #{$isDesktop} {
      margin-left: 45px;
    }
    .error {
      color: $error;
      padding: 5px 25px;
      font-size: 20px;
      background: rgba(#000, 0.2);
      border: 1px solid currentColor;
      border-radius: $border-radius;
    }
    .loading {
      text-align: center;
      .info {
        opacity: 0.8;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
      }
    }
    .loaded {
      display: flex;
      flex-direction: column;
      align-items: center;
      .type {
        padding: 5px 25px;
        background: rgba(#000, 0.2);
        border: 1px solid currentColor;
        width: fit-content;
        border-radius: $border-radius;
      }
      h1 {
        width: 80vw;
        margin-top: 5px;
        white-space: nowrap;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  background: radial-gradient(
      circle at 13% 47%,
      rgba(140, 140, 140, 0.03) 0%,
      rgba(140, 140, 140, 0.03) 25%,
      transparent 25%,
      transparent 100%
    ),
    radial-gradient(
      circle at 28% 63%,
      rgba(143, 143, 143, 0.03) 0%,
      rgba(143, 143, 143, 0.03) 16%,
      transparent 16%,
      transparent 100%
    ),
    radial-gradient(
      circle at 81% 56%,
      rgba(65, 65, 65, 0.03) 0%,
      rgba(65, 65, 65, 0.03) 12%,
      transparent 12%,
      transparent 100%
    ),
    radial-gradient(
      circle at 26% 48%,
      rgba(60, 60, 60, 0.03) 0%,
      rgba(60, 60, 60, 0.03) 6%,
      transparent 6%,
      transparent 100%
    ),
    radial-gradient(
      circle at 97% 17%,
      rgba(150, 150, 150, 0.03) 0%,
      rgba(150, 150, 150, 0.03) 56%,
      transparent 56%,
      transparent 100%
    ),
    radial-gradient(
      circle at 50% 100%,
      rgba(25, 25, 25, 0.03) 0%,
      rgba(25, 25, 25, 0.03) 36%,
      transparent 36%,
      transparent 100%
    ),
    radial-gradient(
      circle at 55% 52%,
      rgba(69, 69, 69, 0.03) 0%,
      rgba(69, 69, 69, 0.03) 6%,
      transparent 6%,
      transparent 100%
    ),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
}
</style>
