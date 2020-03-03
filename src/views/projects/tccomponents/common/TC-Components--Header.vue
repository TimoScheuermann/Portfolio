<template>
  <tc-header>
    <div slot="title" class="tcComponents--header">
      <router-link
        v-if="tcComponent"
        :to="{ name: constants.projectRoutes.timos_components }"
      >
        <i class="ti-arrow-left"></i>
        <span>Components</span>
      </router-link>
      <div class="title">{{ headerTitle }}</div>
    </div>
  </tc-header>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import constants from "@/constants";
import tcComponents from "@/components/tc";

@Component({
  components: {
    "tc-header": TCHeader
  }
})
export default class TCComponentsHeader extends Vue {
  public constants: object = constants;
  public tcComponents: TCComponent[] = tcComponents;

  get headerTitle(): string {
    return this.tcComponent ? this.tcComponent.name : "Timo's Components";
  }

  get component(): string {
    const comp = this.$route.params.comp;
    if (comp) return comp;
    return "";
  }

  get tcComponent(): TCComponent | undefined {
    return this.tcComponents.filter(x => x.name === this.component)[0];
  }
}
</script>
<style lang="scss" scoped>
@import "../../../../scss/variables";
.tcComponents--header {
  flex-wrap: nowrap;
  display: flex;
  overflow: hidden;
  .title {
    font-weight: bold;
    font-size: 18px;
  }
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
