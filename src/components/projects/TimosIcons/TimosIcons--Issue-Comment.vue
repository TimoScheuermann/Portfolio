<template>
  <tc-card rounded="true" :dark="isFromTimo(comment)" class="card--comments">
    <div class="head">
      <img class="avatar" :src="comment.avatar || comment.user_avatar" />
      <div class="info">
        <div class="author">{{ comment.author || comment.user_name }}</div>
        <div class="time">
          {{ timePrefix }} {{ formatDate(comment.created) }}
        </div>
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
    <div class="content" ref="body"></div>
    <div class="content slot" v-if="$slots.default">
      <slot />
    </div>
  </tc-card>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import TCCard from "@/components/tc/card/TC-Card.vue";
import { IconIssueComment } from "@/models/Icons/IconIssueComment.model";
import { IconIssue } from "@/models/Icons/IconIssue.model";
import { formatDate } from "@/utils/DateFormatter";
import * as MarkdownIt from "markdown-it";

@Component({
  components: {
    "tc-card": TCCard
  }
})
export default class TimosIconsIssueComment extends Vue {
  @Prop() comment!: IconIssueComment;
  @Prop() issue!: IconIssue;
  @Prop() timePrefix!: string;
  @Prop({ default: "" }) title!: string;

  @Watch("comment")
  commentChanged() {
    const md = new MarkdownIt();
    (this.$refs.body as HTMLElement).innerHTML = md.render(this.comment.body);
  }

  mounted() {
    this.commentChanged();
  }

  public isFromTimo(comment: IconIssueComment): boolean {
    return comment.association === "OWNER";
  }
  public hasOpenedIssue(comment: IconIssueComment) {
    return comment.author === this.issue!.user_name;
  }

  public formatDate(date: any) {
    return formatDate(date);
  }
}
</script>
<style lang="scss" scoped>
.card--comments {
  margin-top: 30px;

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
  .content {
    text-align: left;
    padding-top: 10px;
    margin-bottom: -20px;
    &.slot {
      padding: 20px;
    }
  }
}
</style>
