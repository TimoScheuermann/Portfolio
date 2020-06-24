<template>
  <router-link :to="to" class="tc-sidebar--item" :class="{ active: active }">
    <div class="icon"><i v-if="icon" :class="'ti-' + icon"></i></div>
    <div class="name">{{ name }}</div>
  </router-link>
</template>
<script lang="ts">
import { Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "../TC-Component.mixin";

@Component
export default class TCSidebarItem extends Mixins(TCComponent) {
  @Prop({ default: "_blank" }) to!: string | Record<string, unknown>;
  @Prop() name!: string;
  @Prop() icon!: string;
  @Prop() active!: boolean;
}
</script>
<style lang="scss" scoped>
@import "../_variables.scss";
@import "../_mixins.scss";

.tc-sidebar--item {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  color: inherit;
  opacity: 0.6;
  transition: 0.2s ease-in-out;
  padding: 5px {
    right: 0;
  }

  cursor: pointer;
  &:hover,
  &:focus {
    color: $primary;
    outline: none;
  }

  &.active,
  &.router-link-exact-active {
    // width: calc(100% - 8px);
    opacity: 1;
    color: $primary;
    border-right: 4px solid $primary;
  }
  .icon {
    min-width: 30px;
  }
  .name {
    flex-grow: 1;
    white-space: nowrap;
  }
}
</style>
