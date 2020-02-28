<template>
  <div content>
    <tc-header>
      <div slot="title" class="tiicons--header">
        <router-link :to="{ name: constants.projectRoutes.timos_icons }">
          <i class="ti-arrow-left"></i>
          <span>Icons</span>
        </router-link>
        <div class="title">Download Icons</div>
      </div>
    </tc-header>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import constants from "@/constants";
@Component({
  components: {
    "tc-header": TCHeader
  }
})
export default class TimosIconsDownload extends Vue {
  public constants: {} = constants;
}
</script>
<style lang="scss" scoped>
@import "../../../../scss/variables";

.tiicons--header {
  flex-wrap: nowrap;
  display: flex;
  overflow: hidden;
  a {
    @media #{$isMobile} {
      margin-right: 20px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      margin-right: 5px;
    }
  }
}
</style>
