<template>
  <div content>
    <tc-header
      title="Getting started"
      backName="Timo's Icons"
      :backTo="{ name: constants.projectRoutes.timos_icons }"
    />
    <icon-gallery :selectAble="true" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import constants from "@/constants";
import IconGallery from "@/components/projects/TimosIcons/IconGallery.vue";

@Component({
  components: {
    "tc-header": TCHeader,
    "icon-gallery": IconGallery
  }
})
export default class TimosIconsDownload extends Vue {
  public constants: {} = constants;
}
</script>
<style lang="scss" scoped></style>
