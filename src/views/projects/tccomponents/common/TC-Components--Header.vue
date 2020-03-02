<template>
  <tc-header :titles="getHeaderTitle()">
    <div slot="title" class="tcComponents--header">
      <router-link
        v-if="isComponent()"
        :to="{ name: constants.projectRoutes.timos_components }"
      >
        <i class="ti-arrow-left"></i>
        <span>Components</span>
      </router-link>
      <div class="title">{{ getHeaderTitle() }}</div>
    </div>
  </tc-header>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import TCComponentHelper from "./TC-Components.helper.vue";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import constants from "@/constants";

@Component({
  mixins: [TCComponentHelper],
  components: {
    "tc-header": TCHeader
  }
})
export default class TCComponentsHeader extends Vue {
  public constants: object = constants;
}
</script>
<style lang="scss" scoped>
@import "../../../../scss/variables";
.tcComponents--header {
  flex-wrap: nowrap;
  display: flex;
  overflow: hidden;
  a {
    @media #{$isDesktop} {
      display: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    i {
      margin-right: 5px;
    }
  }
}
</style>
