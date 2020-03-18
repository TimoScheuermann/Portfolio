<template>
  <div class="view--repertoire">
    <tc-header dark="true" title="Repertoire" />
    <tc-hero>
      <img
        slot="background"
        src="https://www.swri.org/sites/default/files/styles/client_services_banner/public/industries/AdobeStock_111975726.jpeg"
      />
    </tc-hero>
    <div content>
      <h2>WIP</h2>
      <tc-headline title="I am working with" />
      <div class="toolSection" v-for="(tool, index) in tools" :key="index">
        <div class="tool">
          <div
            class="background"
            :style="{ 'background-image': `url(${tool.img})` }"
          ></div>
          <div class="content">
            <div class="logo">
              <img :src="tool.img" />
            </div>
          </div>
        </div>
        <div class="toolContent">
          <div class="title">{{ tool.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import tools from "@/tools";
import { Tool } from "@/models/Tools/Tool";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-hero": TCHero,
    "tc-headline": TCHeadline,
    "tc-grid": TCGrid
  }
})
export default class TCCard extends Vue {
  public tools: Tool[] = tools;
}
</script>
<style lang="scss" scoped>
@import "../../scss/variables.scss";
.view--repertoire {
  color: #fff;
}
.toolSection {
  display: grid;
  grid-gap: 20px;
  margin-top: 50px;
  grid-template-columns: 100px auto;
  &:nth-child(ODD) {
    grid-template-columns: auto 100px;
    background: $color;
    .tool {
      grid-column: 2 / 3;
    }
    .toolContent {
      grid-column: 0 / 1;
    }
  }

  .toolContent {
    .title {
      font-weight: bold;
      font-size: 1.2em;
      opacity: 0.8;
    }
  }

  .tool {
    position: relative;
    border-radius: 10px;
    height: 50px;
    overflow: hidden;
    box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.19);
    background: var(--paragraph);
    .background,
    .content {
      width: 100%;
      height: 100%;
    }
    .background {
      position: absolute;
      background: var(--paragraph);
      background-size: cover;
      background-position: center;
      transform: scale(2);
      filter: blur(20px);
    }
    .content {
      position: relative;
      // backdrop-filter: blur(50px);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .logo {
        $size: 45px;
        img {
          filter: drop-shadow(0 0 0.75rem #000000aa);
          max-width: $size;
          max-height: $size;
        }
      }
    }
  }
}
</style>
