<template>
  <div class="view--repertoire">
    <tc-header variant="sticky" title="Repertoire" :autoBackground="true" />
    <tc-hero height="300" tc-dark-container>
      <img
        slot="background"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f1cb3694468795.5e7f96bd2de7b.jpg"
      />
    </tc-hero>
    <div content>
      <portfolio-big-heading title="Creative Design" subtitle="Tools" />
      <tl-grid first arrangement="auto-fit">
        <div class="tool" v-for="(tool, index) in tools[0]" :key="'t_' + index">
          <tc-card rounded="true">
            <div class="tool-header">
              <img :src="tool.img" />
              <h1>{{ tool.name }}</h1>
            </div>
          </tc-card>
        </div>
      </tl-grid>
      <portfolio-big-heading
        title="Web Development"
        subtitle="Frameworks & more"
      />
      <tl-grid arrangement="auto-fit">
        <div class="tool" v-for="(tool, index) in tools[1]" :key="'t_' + index">
          <tc-card rounded="true">
            <div class="tool-header">
              <img :src="tool.img" />
              <h1>{{ tool.name }}</h1>
            </div>
          </tc-card>
        </div>
      </tl-grid>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import tools from '@/tools';
import { Tool } from '@/models/Tool';
import PortfolioBigHeading from '@/components/Portfolio-BigHeading.vue';

@Component({
  components: {
    'portfolio-big-heading': PortfolioBigHeading,
  },
})
export default class Repertoire extends Vue {
  public tools: Tool[][] = tools;
}
</script>
<style lang="scss" scoped>
[content] {
  .tl-grid {
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
