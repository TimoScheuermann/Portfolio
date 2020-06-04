<template>
  <div
    class="tc-tabbar"
    :id="id"
    :style="defaultStyle"
    :class="{ dark: isDark, light: !isDark }"
  >
    <div class="items">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import TCComponent from "../tccomponent.vue";
import TCAutoBackgroundMixin from "../TCAutoBackground.mixin.vue";
import uuidVue from "../uuid.vue";
@Component({
  mixins: [TCComponent, TCAutoBackgroundMixin, uuidVue]
})
export default class TCTabbar extends Vue {
  @Prop() autoColor!: boolean;
  _mounted!: any;
  _destroyed!: any;
  _routeChanged!: any;
  uuid!: any;
  id = "tc-tabbar_" + this.uuid;

  mounted() {
    this._mounted();
  }
  destroyed() {
    this._destroyed();
  }

  @Watch("$route.name")
  routeChanged(): void {
    this._routeChanged();
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/mixins";
@import "../../../scss/variables";

.tc-tabbar {
  transition: color 0.1s ease-in-out, background 0.3s ease-in-out;
  &.dark {
    @include backdrop-blur($color);
    color: #fff;
  }
  &.light {
    @include backdrop-blur($background);
    color: $color;
  }
  position: fixed;
  box-shadow: $shadow;
  bottom: 0;
  right: 0;
  left: 0px;
  z-index: 999;
  padding: 0 2.5px {
    bottom: env(safe-area-inset-bottom);
  }
  .items {
    color: inherit;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
