<template>
  <div class="tc-header" :style="getStyles()" :class="getClasses()">
    <div class="preStyledTitle">
      <div
        v-if="backTo || backHref"
        :id="'tc-header--back' + uuid"
        class="backButton"
        @click="clicked()"
      >
        <i class="ti-arrow-left"></i>
        <span>{{ backName || "back" }}</span>
      </div>
      <div class="title" v-if="title">{{ title }}</div>
      <div class="titleSlot" v-else>
        <slot name="title" />
      </div>
    </div>

    <div class="tc-header--items">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCComponent from "../tccomponent.vue";
import uuidVue from "../uuid.vue";
@Component({
  mixins: [TCComponent, uuidVue]
})
export default class TCHeader extends Vue {
  @Prop() title!: string;
  @Prop({ default: "fixed" }) variant!: "fixed" | "floating" | "sticky";
  @Prop({ default: "0" }) top!: string;
  @Prop() backTo!: any;
  @Prop() backHref!: string;
  @Prop() backName!: string;

  private dark!: boolean;
  private defaultStyle!: any;

  public clicked(): void {
    if (this.backTo) this.$router.push(this.backTo);
    else if (this.backHref) window.open(this.backHref, "_blank");
  }

  getClasses() {
    return {
      dark: this.dark,
      light: !this.dark,
      fixed: !(this.variant == "floating" || this.variant == "sticky"),
      sticky: this.variant == "sticky",
      floating: this.variant == "floating"
    };
  }
  getStyles() {
    var style = this.defaultStyle;
    style.top = (this.variant == "floating" ? 40 : 0) + +this.top + "px";
    return style;
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/mixins";
@import "../../../scss/variables";

.tc-header {
  &.dark {
    @include backdrop-blur($color);
    color: #fff;
  }
  &.light {
    @include backdrop-blur($background);
    color: $color;
  }
  &.sticky {
    position: sticky;
    padding: 0 5vw;
  }
  &.fixed {
    position: fixed;
    padding: 0 5vw {
      top: env(safe-area-inset-top);
    }
  }
  &.floating {
    position: fixed;
    margin: 0 10vw;
    padding: 0 20px;
    border-radius: $border-radius;
  }
  box-shadow: $shadow;
  right: 0;
  left: 0;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  .preStyledTitle {
    display: inherit;
    & > .backButton {
      @media #{$isMobile} {
        margin-right: 20px;
      }
      color: $primary;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        margin-right: 5px;
      }
    }

    & > .title {
      font-weight: bold;
      font-size: 18px;
    }
  }
  & > .tc-header--items {
    writing-mode: inherit;
  }
}
</style>
