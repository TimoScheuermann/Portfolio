<template>
  <div content class="repertoire">
    <tc-header title="Repertoire" />
    <tc-hero>
      <img
        slot="background"
        src="http://10012.com.s154554.gridserver.com/wp-content/uploads/2018/09/07a.png"
      />
    </tc-hero>

    <tc-headline title="I am working with" />
    <tc-grid minWidth="150">
      <div class="tool" v-for="(tool, index) in tools" :key="index">
        <div
          class="background"
          :style="{ 'background-image': `url(${tool.img})` }"
        ></div>
        <div class="content">
          <div class="logo">
            <img :src="tool.img" />
          </div>
          <div class="title">{{ tool.name }}</div>
        </div>
      </div>
    </tc-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import tools from "@/tools";
import { Tool } from "@/models/Tools/Tool";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCGrid from "@/components/tc/layout/grid/TC-Grid.vue";

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

.tc-grid {
  grid-auto-rows: 1fr;
  &::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  .tool {
    position: relative;
    border-radius: 10px;
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
      .title {
        font-weight: 600;
        margin-top: 10px;
        color: #fff;
      }
    }
  }
}
</style>
