<template>
  <div
    class="tc-hero"
    :style="{ height: height + (hasFixedHeader ? 50 : 0) + unit }"
  >
    <div class="background">
      <slot name="background" />
    </div>
    <div class="hero" :class="{ fixedHeader: hasFixedHeader }">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
@Component
export default class TCHero extends Vue {
  @Prop({ default: 200, type: Number }) height!: number;
  @Prop({ default: "px", type: String }) unit!: string;
  @Prop({ default: true, type: Boolean }) hasFixedHeader!: boolean;
}
</script>
<style lang="scss" scoped>
.tc-hero {
  position: relative;
  max-width: 100vw;
  overflow: hidden;
  .background {
    height: inherit;
    img,
    video {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .hero {
    &.fixedHeader {
      margin-top: calc((50px + env(safe-area-inset-top)) / 2);
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
