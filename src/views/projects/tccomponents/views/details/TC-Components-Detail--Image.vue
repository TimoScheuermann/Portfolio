<template>
  <div>
    <tc-headline title="Image" />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, quaerat
      officiis id et doloremque provident amet dicta corrupti quam sit possimus
      dolores. Vel repellat earum, cupiditate doloremque veritatis quas
      architecto.
    </p>
    <tc-headline title="Options" />
    <tc-grid>
      <portfolio-code-example>
        <tc-image :src="src"></tc-image>
      </portfolio-code-example>
    </tc-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCImage from "@/components/tc/image/TC-Image.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import PortfolioCodeExample from "@/components/projects/TCComponents/CodeExample.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-image": TCImage,
    "tc-grid": TCGrid,
    "portfolio-code-example": PortfolioCodeExample
  }
})
export default class TCComponentsDetailImage extends Vue {
  public src: string = "https://gradientjoy.com/400x300?id=44";
}
</script>
<style lang="scss" scoped></style>
