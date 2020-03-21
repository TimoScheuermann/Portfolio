<template>
  <div class="portfolio-tool-image">
    <div class="background">
      <img :src="src" />
    </div>
    <div class="logo">
      <img :src="src" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class PortfolioToolImage extends Vue {
  @Prop() src!: string;
}
</script>
<style lang="scss" scoped>
$size: 100px;
.portfolio-tool-image {
  height: 100%;
  min-height: $size;
  overflow: hidden;
  border-radius: 5px;
  &,
  .background,
  .logo {
    // width: $size;
    // height: $size;
  }
  position: relative;
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(30px);
    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
    }
  }
  .logo {
    background: rgba(0, 0, 0, 0.2);
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      transform: scale(0.55);
      max-height: $size;
      max-width: $size;
    }
  }
}
</style>
