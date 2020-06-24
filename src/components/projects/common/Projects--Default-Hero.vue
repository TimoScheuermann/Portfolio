<template>
  <tc-hero tc-dark-container :height="height">
    <div class="hero-container">
      <div class="hero--title">{{ title }}</div>
      <div class="img">
        <img :src="src" />
      </div>
    </div>
  </tc-hero>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
@Component({
  components: {
    "tc-hero": TCHero,
  },
})
export default class ProjectsDefaultHero extends Vue {
  @Prop() title!: string;
  @Prop() src!: string;
  @Prop({ default: 400 }) height!: number;
}
</script>
<style lang="scss" scoped>
@import "../../tc/_variables.scss";
@import "../../tc/_mixins.scss";

.tc-hero {
  background: $color;
}

.hero-container {
  color: $background;
  position: relative;
  .hero--title {
    top: -170px;
    font-size: 7em;
    opacity: 0.2;
    font-weight: 800;
    white-space: nowrap;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .img {
    position: absolute;
    width: 700px;
    max-width: 80vw;
    left: 50%;
    top: -70px;
    transform: translateX(-50%);
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
