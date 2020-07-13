<template>
  <div class="portfolio-project-appicon" v-if="src">
    <img :src="src" alt="appicon" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class PortfolioProjectAppIcon extends Vue {
  @Prop() src!: string;
}
</script>
<style lang="scss" scoped>
.portfolio-project-appicon {
  width: 180px;
  height: 180px;
  border-radius: 30px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
  }
}
</style>
