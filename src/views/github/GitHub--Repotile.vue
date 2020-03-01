<template>
  <tc-card :title="repo.name" :subtitle="repo.description">
    <tc-button name="View on GitHub" :href="repo.html_url" />
    <tc-divider name="Stats" icon="chart-line" />
    <div class="statistics">
      <div class="statistic" v-for="change in changes" :key="change.attr">
        <i :class="'ti-' + change.icon"></i>
        <div class="time">{{ convertDate(repo[change.attr]) }}</div>
        <div class="name">{{ change.title }}</div>
      </div>
    </div>

    <!-- <ul>
      <li>Size: {{ repo.size }}</li>
      <li>Lang: {{ repo.language }}</li>
      <li>CloneURLS...</li>
    </ul> -->
  </tc-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import TCDivider from "@/components/tc/divider/TC-Divider.vue";

@Component({
  components: {
    "tc-card": TCCard,
    "tc-button": TCButton,
    "tc-divider": TCDivider
  }
})
export default class GitHubRepoTile extends Vue {
  @Prop() repo!: any;
  public changes: any = [
    {
      icon: "gears",
      attr: "created_at",
      title: "Created"
    },
    {
      icon: "tools",
      attr: "updated_at",
      title: "Updated"
    },
    {
      icon: "share",
      attr: "pushed_at",
      title: "Pushed"
    }
  ];

  public convertDate(dateString: string): string {
    const date = new Date(dateString);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  }
}
</script>
<style lang="scss" scoped>
@import "../../scss/variables.scss";

.tc-divider {
  margin: {
    bottom: 15px;
    top: 20px;
  }
}
.statistics {
  display: flex;
  justify-content: space-around;
  .statistic {
    i {
      font-size: 2em;
    }
    .time {
      color: $primary;
      font-weight: bold;
      margin: 5px 0;
    }
    .name {
      opacity: 0.8;
    }
  }
}
</style>
