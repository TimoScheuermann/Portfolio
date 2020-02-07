<template>
  <div>
    <h1>Slideshow</h1>
    <transition-group name="slide-trans" tag="div" class="slideShow">
      <div v-for="src in img" :key="src" class="slide">
        <img :src="src" />
      </div>
    </transition-group>
    <h1>Slideshow - Ende</h1>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class PSlideshow extends Vue {
  @Prop() images!: string[];

  public currentImage: number = 0;

  get img(): string[] {
    if (!this.images) return [];
    return this.images.filter((x, index) => index === this.currentImage);
  }

  public nextImage() {
    this.currentImage == ++this.currentImage % this.images.length;
  }

  created() {
    this.t();
  }
  public t() {
    setTimeout(() => {
      this.nextImage();
      this.t();
    }, 2000);
  }
}
</script>
<style lang="scss" scoped>
.slide-trans-move {
  transition: all 0.4s ease-in-out;
}
.slide-trans-enter-active,
.slide-trans-leave-active {
  transition: all 0.4s;
}
.slide-trans-enter {
  opacity: 0;
  transform: translateX(50px);
}
.slide-trans-leave-to {
  transition: all 0.3s ease-in-out;
  opacity: 0;
  filter: brightness(0);
  transform: scale(0);
}

.slideShow {
  height: 300px;
  overflow: hidden;
  width: 100vw;
  .slide {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
