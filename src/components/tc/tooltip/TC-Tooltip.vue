<template>
  <div
    class="tc-tooltip"
    onTouchstart="() => { touched = true; }"
    onTouchend="() => { touched = false; }"
    :class="classes"
  >
    <div
      class="tc-tooltip--tooltip"
      :class="'tc-tooltip--tooltip__' + getPosition()"
    >
      <div class="tooltip--content">{{ text }}</div>
      <div class="tooltip--arrow"></div>
    </div>
    <div class="tc-tooltip--content">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCTooltip extends Vue {
  @Prop() position!: string;
  @Prop() text!: string;
  @Prop({ default: true }) dark!: boolean;

  touched: boolean = false;

  get classes() {
    return {
      "tc-tooltip__touched": this.touched,
      "tc-tooltip__dark": this.dark,
      "tc-tooltip__light": !this.dark
    };
  }

  getPosition(): string {
    return ["top", "bottom", "left", "right"].includes(this.position)
      ? this.position
      : "top";
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.tc-tooltip {
  position: relative;

  @keyframes anim {
    from {
      opacity: 0;
      letter-spacing: -10px;
    }
    to {
    }
  }

  &:hover,
  &.tc-tooltip_touched {
    .tooltip {
      visibility: visible;
      animation: anim 0.3s ease-in-out 0.3s both;
    }
  }

  &--tooltip__top {
    left: 50%;
    transform: translate(-50%, calc(-100% - 10px));
    .tooltip--arrow {
      left: 50%;
      bottom: -8px;
      transform: translateX(-50%);
    }
  }
  &--tooltip__bottom {
    left: 50%;
    bottom: 0;
    transform: translate(-50%, calc(100% + 10px));
    .tooltip--arrow {
      left: 50%;
      top: -8px;
      transform: translateX(-50%) rotate(180deg);
    }
  }
  &--tooltip__right {
    right: 0;
    top: 50%;
    transform: translate(calc(100% + 8px), -50%);
    .tooltip--arrow {
      top: 50%;
      left: -11px;
      transform: translateY(-50%) rotate(90deg);
    }
  }
  &--tooltip__left {
    left: 0;
    top: 50%;
    transform: translate(calc(-100% - 8px), -50%);
    .tooltip--arrow {
      top: 50%;
      right: -11px;
      transform: translateY(-50%) rotate(-90deg);
    }
  }
  &--tooltip {
    visibility: hidden;
    z-index: 10;
    position: absolute;

    .tooltip--arrow {
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid $primary;
      position: absolute;
    }
    .tooltip--content {
      background: $primary;
      width: fit-content;
      padding: 0 12px;
      height: 24px;
      line-height: 24px;
      border-radius: $border-radius;
      color: #fff;
    }
  }
  .tc-tooltip--content {
  }
}
</style>
