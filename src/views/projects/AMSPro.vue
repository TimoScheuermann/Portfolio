<template>
  <div content class="projects--ams-pro">
    <portfolio-big-heading :title="project.type" :subtitle="project.title" />

    <tl-grid minWidth="250" class="ams-pro--icons">
      <tc-card rounded="true" class="ams-pro--icon" v-for="i in icons" :key="i">
        <tl-flow horizontal="space-between">
          <tc-avatar :src="getIconPath(i)" border="square" size="tiny" />
          <div class="name">{{ i }}</div>
        </tl-flow>
      </tc-card>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import ProjectView from './_ProjectView.mixin';

@Component
export default class AMSPro extends Mixins(ProjectView) {
  public icons: string[] = [
    'ams-1',
    'ams-2',
    'ams-3',
    'ams-4',
    'ams-5',
    'ams-6',
    'ams-6-2',
    'ams-7',
    'ams-8',
    'ams-9',
    'ams-10',
    'ams-11',
  ];

  getIconPath(icon: string) {
    return `ams-icons/${icon}.svg`;
  }
}
</script>
<style lang="scss" scoped>
.ams-pro--icons {
  margin-top: 40px;
  .ams-pro--icon {
    position: relative;

    i {
      font-size: 10em;
    }
    .name {
      font-weight: bold;
      margin-top: 10px;
      font-size: 18px;
    }
  }
}

.ams-icon {
  .ams-icon--title {
    font-size: 1.2em;
    font-weight: bold;
  }
  .ams-icon--variants {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    i {
      margin: 10px;
      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          font-size: #{(5 - ($i / 2)) * 20}px;
        }
      }
    }
  }
}
</style>
