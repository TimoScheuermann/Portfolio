<template>
  <div
    class="tc-button"
    :style="defaultStyle"
    :class="getClasses()"
    @click="clicked($event)"
  >
    <div v-if="iconExists()" class="icon">
      <i :class="'ti-' + icon" />
    </div>
    <div class="name" v-if="name">
      {{ name }}
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import icons from "@/icons";
import TCComponent from "../tccomponent.vue";

@Component({
  mixins: [TCComponent]
})
export default class TCButton extends Vue {
  @Prop() to!: object;
  @Prop() href!: string;
  @Prop() name!: string;
  @Prop() icon!: string;
  @Prop() disabled!: boolean;
  @Prop() variant!: string;

  public variants: string[] = ["opaque", "border", "filled"];

  public iconExists(): boolean {
    return icons.filter(x => x.name == this.icon).length > 0;
  }

  public getClasses(): any {
    var classes: any = {
      "tc-button--only-icon": this.icon && !name,
      "tc-button--disabled": this.disabled
    };
    if (!this.variants.includes(this.variant)) {
      classes["tc-button--border"] = true;
    } else {
      classes["tc-button--" + this.variant] = true;
    }

    return classes;
  }

  public clicked(event: Event): void {
    if (!this.disabled) {
      this.$emit("click", event);
      if (this.to) {
        this.$router.push(this.to);
      } else if (this.href) {
        window.open(this.href, "_blank");
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.tc-button {
  display: inline-block;
  text-align: center;
  margin: 3px;
  height: 20px;
  line-height: 20px;
  padding: 5px 9px;
  border-radius: $border-radius;
  user-select: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &.tc-button--only-icon {
    padding: 5px 4px;
  }
  .name,
  .icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    padding: 0 1px;
  }
  .icon {
    width: 20px;
    position: relative;
    i {
      transform: scale(1.3);
      font-size: 12px;
    }
  }
  &.tc-button--opaque {
    color: $primary;
    border: 1px solid $primary;
    position: relative;
    &::before {
      transition: inherit;
      content: "";
      border-radius: 2px;
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: $primary;
      opacity: 0.25;
    }
  }
  &.tc-button--filled {
    color: #fff;
    border: 1px solid $primary;
    background: $primary;
  }
  &.tc-button--border {
    color: $primary;
    border: 1px solid $primary;
  }
  &.tc-button--disabled {
    color: $color;
    border-color: $color;
    opacity: 0.6;
    cursor: default;
    &.tc-button--opaque {
      &::before {
        background: $color;
      }
    }
    &.tc-button--filled {
      color: #fff;
      border-color: $color;
      background: $color;
    }
  }

  &:not(.tc-button--disabled) {
    &:active {
      filter: brightness(120%);
    }
    &:hover {
      &.tc-button--filled {
        box-shadow: 2px 4px 8px rgba($primary, 0.3);
      }
      &.tc-button--border {
        background: $primary;
        color: #fff;
      }
      &.tc-button--opaque {
        color: #fff;
        &::before {
          opacity: 1;
        }
      }
    }
  }
}
</style>
