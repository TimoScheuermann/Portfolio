<template>
  <div class="timos-icons-requests--detail">
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
              :href="issue.url"
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

    <tc-header
      :title="!!issue && issue.title"
      backName="Icon Requests"
      :autoColor="!true"
      :backTo="{ name: constants.projectRoutes.timos_icons_requests }"
    />

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
import TCTable from "@/components/tc/table/TC-Table.vue";
import TCHeader from "@/components/tc/header/TC-Header.vue";

import axios from "@/axios";
import constants from "@/constants";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCSelect from "@/components/tc/select/TC-Select.vue";
import TCInput from "@/components/tc/input/TC-Input.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import { IconIssueComment } from "@/models/Icons/IconIssueComment.model";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import { IconIssue } from "@/models/Icons/IconIssue.model";
import TCSpinner from "@/components/tc/spinner/TC-Spinner.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TimosIconsIssueComment from "@/components/projects/TimosIcons/TimosIcons--Issue-Comment.vue";
import { formatDate } from "@/utils/DateFormatter";

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-grid": TCGrid,
    "tc-hero": TCHero,
    "tc-spinner": TCSpinner,
    "tc-card": TCCard,
    "tc-button": TCButton,
    "timosicons-issue-comment": TimosIconsIssueComment
  }
})
export default class TimosIconsRequestsDetail extends Vue {
  public constants: {} = constants;
  public error: boolean = false;
  public comments: IconIssueComment[] | null = null;
  public issue: IconIssue | null = null;

  get loaded(): boolean {
    return !!this.comments && !!this.issue;
  }

  get number() {
    return this.$route.params.issue;
  }

  public formatDate(date: any) {
    return formatDate(date);
  }

  async created() {
    this.loadComments();
    this.loadIssue();
  }

  async loadComments() {
    const { data } = await axios.get(
      `https://api.github.com/repos/TimoScheuermann/Timos-Icons/issues/${this.number}/comments`
    );
    if (data) {
      const dataMapped = data.map((x: any) => new IconIssueComment(x));
      this.comments = dataMapped;
    } else {
      this.error = true;
      return;
    }
  }
  async loadIssue() {
    const { data } = await axios.get(
      `https://api.github.com/repos/TimoScheuermann/Timos-Icons/issues/${this.number}`
    );
    if (data) {
      this.issue = new IconIssue(data);
    } else {
      this.error = true;
      return;
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../../scss/variables";

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
    background: #fff;
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
}
</style>
