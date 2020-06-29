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
import constants from "@/constants";
import IconGallery from "@/components/projects/TimosIcons/IconGallery.vue";

@Component({
  components: {
    "icon-gallery": IconGallery,
  },
})
export default class TimosIconsDownload extends Vue {
  public constants: Record<string, unknown> = constants;
}
</script>
