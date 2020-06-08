<template>
  <div class="timos-icons-requests">
    <tc-header
      title="Requests"
      backName="Timo's Icons"
      :backTo="{ name: constants.projectRoutes.timos_icons }"
    />

    <div content>
      <div class="header" center>
        <h1>The Icon Leaderboard</h1>
        <p>
          Find the most requested icon, the icons I am working on and much more
        </p>
      </div>

      <p>{{ $store.getters.iconIssues }}</p>

      <tc-headline title="Filter">
        <tc-select
          :values="['Problem', 'Icon Request']"
          :multiple="true"
          icon="type"
          v-model="filterOptions.type"
        />
        <tc-input
          placeholder="Sample Title"
          icon="lens"
          v-model="filterOptions.title"
        />
        <tc-select
          :values="['Open', 'Being worked on']"
          :multiple="true"
          icon="status"
          v-model="filterOptions.status"
        />
      </tc-headline>
      <tc-table>
        <tr>
          <th></th>
          <th>Type</th>
          <th>Title</th>
          <th>Status</th>
          <th>Comments</th>
          <th></th>
        </tr>
        <tr v-for="issue in issues" :key="issue.id" @click="open(issue.number)">
          <td class="img"><img :src="issue.user_avatar" /></td>
          <td>{{ issue.labels[0].name }}</td>
          <td>{{ issue.title }}</td>
          <td>{{ issue.state }}</td>
          <td><i class="ti-chat-bubbles" />{{ issue.comments }}</td>
          <td>
            <tc-button
              :href="issue.url"
              icon="github"
              variant="filled"
              @click.stop.prevent
            />
          </td>
        </tr>
      </tc-table>
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
import { IconIssue } from "@/models/Icons/IconIssue.model";
import { IconIssueLabel } from "@/models/Icons/IconIssueLabel.model";
import TCButton from "@/components/tc/button/TC-Button.vue";

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-table": TCTable,
    "tc-headline": TCHeadline,
    "tc-select": TCSelect,
    "tc-input": TCInput,
    "tc-button": TCButton
  }
})
export default class TimosIconsRequests extends Vue {
  public constants: {} = constants;
  public filterOptions: {} = {
    type: ["Problem", "Icon Request"],
    title: "",
    status: ["Open", "Being worked on"]
  };

  public issues: [] = [];

  async mounted() {
    if (!this.$store.getters.hasIconRequests) {
      const { data } = await axios.get(
        "https://api.github.com/repos/TimoScheuermann/Timos-Icons/issues"
      );
      this.$store.commit(
        "updateIconIssues",
        data.map((x: any) => new IconIssue(x))
      );
    }
    this.issues = this.$store.getters.iconIssues;
  }

  public open(number: string): void {
    this.$router.push({
      name: constants.projectRoutes.timos_icons_requests_detail,
      params: { issue: number }
    });
  }
}
</script>
<style lang="scss" scoped>
.timos-icons-requests {
  [content] {
    padding-top: 90px;
  }

  td.img {
    display: inline-flex;
    img {
      $scale: 30px;
      height: $scale;
      width: $scale;
      border-radius: $scale;
    }
  }

  $filter: ("type", "status");
  @each $f in $filter {
    /deep/ i.ti-#{$f} {
      &::before {
        content: "#{$f}";
        text-transform: capitalize;
        font-weight: bold;
        font-size: 15px;
        opacity: 0.6;
      }
    }
  }
  //   /deep/ i.ti-status {
  //     &::before {
  //       content: "Status";
  //       font-weight: bold;
  //       font-size: 15px;
  //     }
  //     // transform: scale(0.8);
  //   }
  .header {
    text-align: center;
    p {
      margin: 0;
      display: inline-block;
      max-width: 300px;
    }
  }
}
</style>
