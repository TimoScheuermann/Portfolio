<template>
  <div class="tc-header" :style="getStyles()" :class="getClasses()">
    <div class="tc-header--head">
      <div
        v-if="backTo || backHref"
        class="tc-header--backButton"
        @click="clicked($event)"
      >
        <i class="ti-arrow-left"></i>
        <span>{{ backName || "back" }}</span>
      </div>
      <div class="tc-header--title__prestyled" v-if="title">{{ title }}</div>
      <div class="tc-header--title" v-else>
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
@Component({
  mixins: [TCComponent]
})
export default class TCHeader extends Vue {
  @Prop() title!: string;
  @Prop({ default: "fixed" }) variant!: "fixed" | "floating" | "sticky";
  @Prop({ default: 0 }) top!: number;
  @Prop() backTo!: any;
  @Prop() backHref!: string;
  @Prop() backName!: string;

  private dark!: boolean;
  private defaultStyle!: any;

  public clicked(event: any): void {
    this.$emit("click", event);
    if (this.backTo) this.$router.push(this.backTo);
    else if (this.backHref) window.open(this.backHref, "_blank");
  }

  getClasses() {
    return {
      "tc-header__dark": this.dark,
      "tc-header__light": !this.dark,
      "tc-header__fixed": !(
        this.variant == "floating" || this.variant == "sticky"
      ),
      "tc-header__sticky": this.variant == "sticky",
      "tc-header__floating": this.variant == "floating"
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
  user-select: none;
  box-shadow: $shadow;
  right: 0;
  left: 0;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  &.tc-header__dark {
    @include backdrop-blur($color);
    color: #fff;
  }
  &.tc-header__light {
    @include backdrop-blur($background);
    color: $color;
  }
  &.tc-header__sticky {
    position: sticky;
    padding: 0 5vw;
  }
  &.tc-header__fixed {
    position: fixed;
    padding: 0 5vw {
      top: env(safe-area-inset-top);
    }
  }
  &.tc-header__floating {
    position: fixed;
    margin: 0 10vw;
    padding: 0 20px;
    border-radius: $border-radius;
  }

  .tc-header--head {
    display: inherit;

    .tc-header--backButton {
      cursor: pointer;
      margin-right: 20px;
      color: $primary;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        margin-right: 5px;
      }
    }

    .tc-header--title__prestyled {
      font-weight: bold;
      font-size: 18px;
    }
  }
}
</style>
