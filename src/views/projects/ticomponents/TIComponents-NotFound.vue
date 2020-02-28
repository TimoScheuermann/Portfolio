<template>
  <div>
    <tc-hero height="100" unit="vh">
      <img id="hero" slot="background" />
      <div class="hero">
        <div class="title">Timo's Components</div>
        <div class="subtitle">Custom Vue Components</div>
        <tc-card title="Not Found"></tc-card>
      </div>
    </tc-hero>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-hero": TCHero,
    "tc-card": TCCard
  }
})
export default class TIComponentsNotFound extends Vue {
  public src: string = "/assets/projects/ticomponents/landing.jpg";

  created() {
    const image = this.asyncImageLoader(this.src);
    image.then(res => {
      let img: HTMLImageElement = res as HTMLImageElement;
      console.log(img.src);
      document.querySelectorAll("#hero")[0].setAttribute("src", img.src);
    });
  }

  asyncImageLoader(url: string) {
    return new Promise((resolve, reject) => {
      var image = new Image();
      image.src = url;
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("could not load image"));
    });
  }
}
</script>
<style lang="scss" scoped>
[content] {
  padding-top: 10px;
}
.hero {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  padding-top: 50px;
  .title {
    color: #fff;
    white-space: nowrap;
    font-size: 1.75em;
  }
  .subtitle {
    color: #fff;
    opacity: 0.87;
    font-size: 1.2em;
  }
}
</style>
