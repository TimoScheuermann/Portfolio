<template>
  <div class="portfolio-section-item-large" v-if="item" :style="background">
    <tl-grid minWidth="150">
      <div class="asset" :style="asset" />
      <tl-flow flow="column" class="container" vertical="start">
        <div class="title">{{ item.title }}</div>
        <div class="description">{{ item.description }}</div>
      </tl-flow>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { IProjectSectionItem } from '@/utils/interfaces';
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class PSectionItemLarge extends Vue {
  @Prop() item!: IProjectSectionItem;

  get background(): string {
    if (!this.item) return '';
    const bg = this.item.background;
    if (bg.startsWith('https')) return `background-image: url(${bg})`;
    if (bg.startsWith('background-image:')) return bg;
    if (bg.startsWith('background-color:')) return bg;
    return `background: ${bg}`;
  }

  get asset(): string {
    if (!this.item) return '';
    return `background-image: url(${this.item.asset})`;
  }
}
</script>
<style lang="scss" scoped>
.portfolio-section-item-large {
  grid-column: 1 / -1;
  border-radius: $border-radius;
  padding: 20px;

  background-size: cover;
  &,
  .asset {
    background-position: center;
    background-repeat: no-repeat;
  }
  .asset {
    height: 100%;
    min-height: 250px;
    background-size: contain;
  }

  .container {
    color: #fff;
    text-align: left;
    .title {
      font-weight: bold;
      font-size: 24px;
      margin-bottom: 10px;
    }
    .description {
      font-weight: 500;
    }
  }
}
</style>
