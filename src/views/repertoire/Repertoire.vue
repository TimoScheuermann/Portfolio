<template>
  <div class="view--repertoire">
    <tc-header title="Repertoire" :autoBackground="true" />
    <tc-hero height="300" tc-dark-container>
      <img
        slot="background"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f1cb3694468795.5e7f96bd2de7b.jpg"
      />
    </tc-hero>
    <div content>
      <h1 center>The Tools</h1>
      <h3 center>
        I use a variety of programs that make design and development much
        easier.
      </h3>

      <br />
      <br />

      <project-title title="Creative Design" subtitle="Tools" />
      <tc-grid first arrangement="auto-fit">
        <div class="tool" v-for="(tool, index) in tools[0]" :key="'t_' + index">
          <tc-card rounded="true">
            <div class="tool-header">
              <img :src="tool.img" />
              <h1>{{ tool.name }}</h1>
            </div>
          </tc-card>
        </div>
      </tc-grid>
      <project-title title="Web Development" subtitle="Frameworks & more" />
      <tc-grid arrangement="auto-fit">
        <div class="tool" v-for="(tool, index) in tools[1]" :key="'t_' + index">
          <tc-card rounded="true">
            <div class="tool-header">
              <img :src="tool.img" />
              <h1>{{ tool.name }}</h1>
            </div>
          </tc-card>
        </div>
      </tc-grid>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import tools from "@/tools";
import { Tool } from "@/models/Tools/Tool";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import ProjectsTitle from "@/components/projects/common/Projects--Title.vue";

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-hero": TCHero,
    "tc-headline": TCHeadline,
    "tc-grid": TCGrid,
    "tc-card": TCCard,
    "project-title": ProjectsTitle,
  },
})
export default class Repertoire extends Vue {
  public tools: Tool[][] = tools;
}
</script>
<style lang="scss" scoped>
[content] {
  .tc-grid {
    margin: 30px 0;
    &[first] {
      margin-bottom: 160px;
    }
  }

  .tool-header {
    display: flex;
    justify-content: center;
    align-content: center;
    h1,
    img {
      margin: 0 5px;
    }
    img {
      height: 40px;
      width: 40px;
    }
  }
}
</style>
