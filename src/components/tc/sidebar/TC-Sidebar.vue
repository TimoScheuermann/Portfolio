<template>
  <div class="tc-sidebar">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="spacer"></div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class TCSidebar extends Vue {}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.tc-sidebar {
  user-select: none;
  z-index: 1000;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  overflow: {
    x: hidden;
    y: auto;
  }
  max-width: 35px;
  min-width: 45px;
  border: {
    bottom-right-radius: #{2 * $border-radius};
    top-right-radius: #{2 * $border-radius};
  }
  background: $background;
  box-shadow: $shadow;

  transition: 0.2s ease-out;
  &:hover {
    transition: 0.4s cubic-bezier(0.87, 1.46, 0.52, 0.75);
    box-shadow: $shadow-hover;
    min-width: 200px;
    .content {
      /deep/ .tc-sidebar--group {
        .tc-sidebar--items.expanded {
          padding-left: 14px;
        }
      }
    }
  }
  // min-width: 200px;
  .content {
    padding-left: 10px;
  }

  .spacer {
    flex-grow: 1 !important;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
