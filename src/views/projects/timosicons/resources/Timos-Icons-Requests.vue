<template>
  <div class="timos-icons-requests">
    <tc-header
      title="Requests"
      backName="Timo's Icons"
      :backTo="{ name: constants.projectRoutes.timos_icons }"
      :autoColor="true"
    />

    <tc-hero tc-dark-container>
      <img
        slot="background"
        src="assets/projects/timosicons/banner_request.jpg"
        alt=""
      />
      <div class="hero" center>
        <img src="assets/projects/timosicons/icon-request-concept.svg" />
        <h1>The Icon Leaderboard</h1>
        <p>
          Find the most requested icon, the icons I am working on and much more
        </p>
      </div>
    </tc-hero>

    <div content>
      <section>
        <tc-grid arrangement="auto-fit">
          <div>
            <h1>Submit your own request</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A placeat
              autem tenetur, dicta porro veniam mollitia odio omnis obcaecati
              aliquid nihil, culpa consequatur, magni velit laboriosam error.
              Rerum, rem laborum?
            </p>
            <tc-button
              name="Submit"
              icon="github"
              tccolor="success"
              variant="filled"
              href="https://github.com/TimoScheuermann/Timos-Icons/issues/new/choose"
            />
          </div>
          <div class="submit-grid-item-2">
            <i class="ti-mail"></i>
          </div>
        </tc-grid>
      </section>
      <tc-card rounded="true">
        <h1>Requests</h1>
        <tc-table>
          <tr>
            <th></th>
            <th>Type</th>
            <th>Title</th>
            <th>Status</th>
            <th>Comments</th>
            <th></th>
          </tr>
          <tr
            v-for="issue in issues"
            :key="issue.id"
            @click="open(issue.number)"
          >
            <td class="img"><img :src="issue.user_avatar" /></td>
            <td class="type" :style="{ color: '#' + issue.labels[0].color }">
              <span>{{ issue.labels[0].name }}</span>
            </td>
            <td>{{ issue.title }}</td>
            <td>{{ issue.state }}</td>
            <td class="comments">
              <i class="ti-chat-bubbles" />{{ issue.comments }}
            </td>
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
      </tc-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import axios from "@/axios";
import constants from "@/constants";

import { IconIssue } from "@/models/Icons/IconIssue.model";
import { IconIssueLabel } from "@/models/Icons/IconIssueLabel.model";

import TCTable from "@/components/tc/table/TC-Table.vue";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-table": TCTable,
    "tc-hero": TCHero,
    "tc-card": TCCard,
    "tc-button": TCButton,
    "tc-grid": TCGrid
  }
})
export default class TimosIconsRequests extends Vue {
  public constants: {} = constants;
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
@import "../../../../scss/variables";

.timos-icons-requests {
  .hero {
    text-align: center;
    color: #fff;
    h1,
    p {
      opacity: 0.8;
    }
    p {
      margin: 0;
      display: inline-block;
      max-width: 400px;
    }
  }

  [content] {
    padding-top: 50px;
  }

  section {
    margin-bottom: 30px;
  }
  .submit-grid-item-2 {
    @media #{$isMobile} {
      display: none;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 140px;
    opacity: 0.2;
  }

  td {
    cursor: pointer;
  }
  td.img {
    img {
      $scale: 30px;
      height: $scale;
      width: $scale;
      border-radius: $scale;
    }
  }
  .comments {
    i {
      color: $primary !important;
      margin-right: 10px;
    }
  }
  .type {
    span {
      border: 1px solid currentColor;
      border-radius: $border-radius;
      padding: 2px 5px;
      font-size: 14px;
    }
  }
}
</style>
