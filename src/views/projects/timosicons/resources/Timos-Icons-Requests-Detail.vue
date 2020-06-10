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

      <div class="section section--status">
        <h1>#{{ issue.number }} {{ issue.title }}</h1>
        <div class="head">
          <img class="avatar" :src="issue.user_avatar" />
          <div class="info">
            <div class="author">{{ issue.user_name }}</div>
            <div class="time">
              reported this issue {{ formatDate(issue.created) }}
            </div>
          </div>
        </div>
        <div class="status">
          <h2>Status</h2>
          <div class="indicator">
            {{ issue.state }}
          </div>
        </div>
        <tc-button
          :href="issue.url"
          variant="filled"
          name="View on GitHub"
          iconPosition="right"
          icon="github"
        />
      </div>
      <div class="section section--comments">
        <h1>Comments</h1>
        <div class="comments">
          <tc-card
            v-for="comment in comments"
            :key="comment.created"
            rounded="true"
            :dark="isFromTimo(comment)"
            class="card--comments"
          >
            <div class="head">
              <img class="avatar" :src="comment.avatar" />
              <div class="info">
                <div class="author">{{ comment.author }}</div>
                <div class="time">{{ formatDate(comment.created) }}</div>
              </div>
              <div
                class="association owner"
                v-if="isFromTimo(comment) && !hasOpenedIssue(comment)"
              >
                Owner
              </div>
              <div class="association author" v-if="hasOpenedIssue(comment)">
                Author
              </div>
            </div>
            <div class="content">
              {{ comment.body }}
            </div>
          </tc-card>
        </div>
      </div>
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

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-grid": TCGrid,
    "tc-hero": TCHero,
    "tc-spinner": TCSpinner,
    "tc-card": TCCard,
    "tc-button": TCButton
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

  isFromTimo(comment: IconIssueComment): boolean {
    return comment.association === "OWNER";
  }
  hasOpenedIssue(comment: IconIssueComment) {
    return comment.author === this.issue!.user_name;
  }

  async created() {
    this.loadComments();
    this.loadIssue();
  }

  public formatDate(time: any) {
    switch (typeof time) {
      case "number":
        break;
      case "string":
        time = +new Date(time);
        break;
      case "object":
        if (time.constructor === Date) time = time.getTime();
        break;
      default:
        time = +new Date();
    }
    var time_formats = [
      [60, "seconds", 1], // 60
      [120, "1 minute ago", "1 minute from now"], // 60*2
      [3600, "minutes", 60], // 60*60, 60
      [7200, "1 hour ago", "1 hour from now"], // 60*60*2
      [86400, "hours", 3600], // 60*60*24, 60*60
      [172800, "Yesterday", "Tomorrow"], // 60*60*24*2
      [604800, "days", 86400], // 60*60*24*7, 60*60*24
      [1209600, "Last week", "Next week"], // 60*60*24*7*4*2
      [2419200, "weeks", 604800], // 60*60*24*7*4, 60*60*24*7
      [4838400, "Last month", "Next month"], // 60*60*24*7*4*2
      [29030400, "months", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
      [58060800, "Last year", "Next year"], // 60*60*24*7*4*12*2
      [2903040000, "years", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
      [5806080000, "Last century", "Next century"], // 60*60*24*7*4*12*100*2
      [58060800000, "centuries", 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    var seconds = (+new Date() - time) / 1000,
      token = "ago",
      list_choice = 1;

    if (seconds == 0) {
      return "Just now";
    }
    if (seconds < 0) {
      seconds = Math.abs(seconds);
      token = "from now";
      list_choice = 2;
    }
    var i = 0,
      format;
    while ((format = time_formats[i++]))
      if (seconds < format[0]) {
        if (typeof format[2] == "string") return format[list_choice];
        else
          return (
            Math.floor(seconds / +format[2]) + " " + format[1] + " " + token
          );
      }
    return time;
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

.section--status {
  h1 {
    margin: 10px;
  }
  .head {
    margin: 10px;
  }
  .status {
    // width: fit-content;
    margin: 10px;
    .indicator {
      // background: orange;
      color: #fff;
      padding: 5px 20px;
      width: fit-content;
      border-radius: $border-radius;
      text-transform: capitalize;
      margin: 10px 0;
      background: $success;
    }
  }
  .tc-button {
    width: fit-content;
  }
}
.section--status {
  display: flex;
  flex-direction: column;
}
@media #{$isDesktop} {
  .section--status {
    z-index: 100;
    position: sticky;
    top: 80px;
    margin-left: 55vw;
    width: 30vw;
  }
  .section--comments {
    margin-top: -250px;
    max-width: calc(55vw - 30px);
  }
}
@media #{$isMobile} {
  .section--status {
    h1 {
      display: none;
    }
    .status {
      display: flex;
      justify-content: center;
      align-items: center;
      h2 {
        margin: 0 {
          right: 10px;
        }
      }
    }
    .tc-button,
    .head {
      width: fit-content;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
    margin-bottom: 20px;
  }
}
.grid--status {
  background: red;
}
.grid--comments {
  background: orange;
}
.tc-grid {
  background: magenta;
}
@media #{$isDesktop} {
  .grid--status {
    grid-column: 2;
  }
  .grid--comments {
    grid-column: 1;
  }
}
.comments {
  .card--comments {
    margin-top: 30px;
    .content {
      text-align: left;
      padding-top: 20px;
    }
  }
}
.head {
  width: 100%;
  display: flex;
  align-items: center;
  img.avatar {
    $size: 50px;
    margin-right: 20px;
    width: $size;
    height: $size;
    border-radius: $size;
  }
  .info {
    text-align: left;
    .author {
      font-size: 18px;
      font-weight: bold;
      opacity: 0.7;
    }
    .time {
      opacity: 0.4;
      font-size: 13px;
      margin-top: 3px;
    }
  }
  position: relative;
  .association {
    position: absolute;
    top: -10px;
    right: -10px;
    &.author {
      color: $success;
    }
    &.owner {
      color: $error;
    }
  }
}

.timos-icons-requests--detail {
  [content] {
    padding-top: 20px;
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
