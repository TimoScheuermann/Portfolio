<template>
  <div class="portfolio-project-tools" v-if="project.tools">
    <portfolio-big-heading
      title="Tools used"
      :subtitle="'in ' + project.title"
    />

    <div class="tool-types" v-for="type in types" :key="type.type">
      <h1>{{ type.type }}</h1>
      <tl-grid minWidth="240">
        <div v-for="tool in type.tools" :key="tool.name">
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
import { Component, Mixins } from 'vue-property-decorator';
import ProjectView from '@/views/projects/_ProjectView.mixin';
import { getTools } from '@/utils';
import { Tool } from '@/models';

@Component
export default class PortfolioProjectTools extends Mixins(ProjectView) {
  public typeOrder: Tool['type'][] = ['design', 'framework', 'development'];

  get types(): { type: string; tools: Tool[] }[] {
    return this.typeOrder
      .map(x => {
        return {
          type: x,
          tools: getTools(x, this.project.tools),
        };
      })
      .filter(x => x.tools.length > 0);
  }
}
</script>

<style lang="scss" scoped>
.portfolio-project-tools {
  margin-top: 120px;
  .tool-types {
    margin: 40px 5vw {
      top: 60px;
    }
    h1 {
      text-transform: capitalize;
    }
    .tl-grid {
      .tc-card {
        .tool-header {
          margin: -20px;
          transform: scale(0.7);
          transform-origin: center center;
          display: flex;
          justify-content: center;
          align-content: center;
          h1,
          img {
            margin: 0 5px;
          }
          img {
            height: 40px !important;
            width: 40px !important;
          }
        }
      }
    }
  }
}
</style>
