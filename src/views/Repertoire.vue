<template>
  <div class="view--repertoire">
    <tc-header variant="sticky" title="Repertoire" :autoBackground="true" />
    <tc-hero height="300" tc-dark-container>
      <img slot="background" src="assets/repertoire-hero.jpg" />
    </tc-hero>
    <div content>
      <portfolio-big-heading title="Creative Design" subtitle="Applications" />
      <tl-grid>
        <div v-for="tool in design" :key="tool.name">
          <tc-card rounded="true">
            <div class="tool-header">
              <img :src="tool.img" />
              <h1>{{ tool.name }}</h1>
            </div>
          </tc-card>
        </div>
      </tl-grid>

      <portfolio-big-heading title="Web Development" subtitle="Frameworks" />
      <tl-grid>
        <div v-for="tool in framework" :key="tool.name">
          <tc-card rounded="true">
            <div class="tool-header">
              <img :src="tool.img" />
              <h1>{{ tool.name }}</h1>
            </div>
          </tc-card>
        </div>
      </tl-grid>

      <portfolio-big-heading title="Web Technologies" subtitle="Tools & more" />
      <tl-grid>
        <div v-for="tool in development" :key="tool.name">
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

import { Tool } from '@/models';
import PortfolioBigHeading from '@/components/Portfolio-BigHeading.vue';
import { getTools } from '@/utils';

@Component({
  components: {
    'portfolio-big-heading': PortfolioBigHeading,
  },
})
export default class Repertoire extends Vue {
  get development(): Tool[] {
    return getTools('development');
  }
  get design(): Tool[] {
    return getTools('design');
  }
  get framework(): Tool[] {
    return getTools('framework');
  }
}
</script>
<style lang="scss" scoped>
[content] {
  .tl-grid {
    margin: 30px 0 {
      bottom: 160px;
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
