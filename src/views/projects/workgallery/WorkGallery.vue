<template>
  <div content>
    <tc-header title="Work Gallery"></tc-header>
    <div class="gallery">
      <tc-card
        v-for="item in gallery"
        :key="item.fileName"
        :title="item.display"
      >
        <img
          slot="media"
          :src="'assets/projects/workgallery/designs/' + item.fileName"
        />
        <tc-button
          :disabled="!item.project"
          :to="{ name: constants.projectRoutes[item.project] }"
          :name="item.project || 'Not Specific'"
        ></tc-button>
      </tc-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import constants from "@/constants";
import workGalleryItems from "@/projects/workgallery";
import { WorkGalleryItem } from "../../../models/WorkGallery/WorkGalleryItem";
@Component({
  components: {
    "tc-header": TCHeader,
    "tc-card": TCCard,
    "tc-button": TCButton
  }
})
export default class WorkGallery extends Vue {
  public constants: object = constants;
  public gallery: WorkGalleryItem[] = workGalleryItems;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables.scss";

@media #{$isMobile} {
  .gallery {
    columns: 1;
  }
}
@media #{$isDesktop} {
  .gallery {
    columns: 3;
  }
}

.gallery {
  margin-top: 30px;
  column-gap: 30px;

  .tc-card {
    break-inside: avoid-column;
    &:not(:first-child) {
      margin-top: 30px;
    }
    .tc-button {
      margin: {
        top: 20px;
        bottom: -10px;
      }
    }
  }
}
</style>
