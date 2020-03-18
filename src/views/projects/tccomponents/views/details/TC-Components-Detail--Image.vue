<template>
  <div>
    <tc-headline title="Image" />
    <div class="imgContainer">
      <tc-image />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCImage from "@/components/tc/image/TC-Image.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-image": TCImage
  }
})
export default class TCComponentsDetailImage extends Vue {}
</script>
<style lang="scss" scoped>
.imgContainer {
  max-width: 200px;
}
</style>
