<template>
  <div class="landing">
    <div class="container" :class="{ blur: blur, fullscreen: fullscreen }">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class PLanding extends Vue {
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() blur!: boolean;
  @Prop() fullscreen!: boolean;
}
</script>
<style lang="scss" scoped>
@import "../../scss/variables";
.landing {
  background: url("../../assets/landing/background.jpg") {
    position: center;
    size: cover;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10% {
      top: calc(80px + var(--sa-top));
      bottom: calc(30px + var(--sa-bottom));
    }
    @media #{$isMobile} {
      padding-bottom: calc(80px + var(--sa-bottom));
    }

    &.blur {
      backdrop-filter: blur(10px);
    }
    &.fullscreen {
      $height: "100vh - var(--sa-top) - var(--sa-bottom) - 110px";
      min-height: calc(#{$height});
      @media #{$isMobile} {
        min-height: calc(#{$height} - 50px);
        padding-bottom: calc(80px + var(--sa-bottom));
      }

      background: linear-gradient(transparent 92%, #000 100%);

      $scale: 1.6;
      .title {
        font-size: #{20 * $scale}px;
      }
      .subtitle {
        font-size: #{16 * $scale}px;
      }
    }
  }

  @mixin text {
    color: #fff;
    font-weight: bold;
    text-align: center;
  }

  .title {
    @include text;
    font-size: 20px;
  }
  .subtitle {
    @include text;
    opacity: 0.8;
  }
}
</style>
