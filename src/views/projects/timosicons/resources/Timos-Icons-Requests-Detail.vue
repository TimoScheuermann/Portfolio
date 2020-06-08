<template>
  <div class="timos-icons-requests--detail">
    <tc-hero tc-dark-container>
      <img
        slot="background"
        src="assets/projects/timosicons/banner_request.jpg"
      />
      <div class="hero-content">
        <h1>{{ issue.title }}</h1>
      </div>
    </tc-hero>

    <tc-header
      :title="issue.title"
      backName="Icon Requests"
      :autoColor="true"
      :backTo="{ name: constants.projectRoutes.timos_icons_requests }"
    />

    <div content>
      <div class="header" center>
        <h1>ID: {{ number }}</h1>
        <p>
          Find the most requested icon, the icons I am working on and much more
        </p>
      </div>
      <p>Error: {{ error }}</p>
      <p>{{ issue }}</p>
      <p>{{ comments }}</p>
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
import { IconRequest } from "@/models/Icons/IconRequest.model";
import { IconRequestLabel } from "@/models/Icons/IconRequestLabel.model";
import TCButton from "@/components/tc/button/TC-Button.vue";
import { IconIssueComment } from "@/models/Icons/IconIssueComment.model";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import { IconIssue } from "../../../../models/Icons/IconIssue.model";

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-grid": TCGrid,
    "tc-hero": TCHero
  }
})
export default class TimosIconsRequestsDetail extends Vue {
  public constants: {} = constants;
  public error: boolean = false;
  public comments: IconIssueComment[] = [];
  public issue: IconIssue = {} as IconIssue;

  get number() {
    return this.$route.params.issue;
  }

  async mounted() {
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

.timos-icons-requests--detail {
  [content] {
    padding-top: 20px;
  }
  .hero-content {
    color: #fff;
  }
}
</style>
