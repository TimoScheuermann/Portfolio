<template>
  <div
    class="portfolio-section-item-normal"
    v-if="item"
    :dark="$store.getters.darkmode"
  >
    <div class="media" :style="background">
      <div class="asset" :style="asset" />
    </div>
    <div class="container">
      <div class="title">{{ item.title }}</div>
      <div class="description">{{ item.description }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { IProjectSectionItem } from '@/utils/interfaces';
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class PSectionItemNormal extends Vue {
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
.portfolio-section-item-normal {
  border-radius: $border-radius;
  background: $background;
  &[dark] {
    background: $background_dark;
  }

  .media {
    background-size: cover;
    height: 180px;
    padding: 10px 20px;

    .asset {
      background-size: contain;
      height: 100%;
    }

    &,
    .asset {
      background-position: center;
      background-repeat: no-repeat;
      border-radius: $border-radius $border-radius 0 0;
    }
  }
  .container {
    padding: 20px;
    text-align: left;
    .title {
      font-weight: bold;
      opacity: 0.5;
      margin-bottom: 10px;
    }
    .description {
      font-weight: 500;
    }
  }
}
</style>
