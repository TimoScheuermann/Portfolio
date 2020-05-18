<template>
  <div
    class="tc-list"
    :class="{ 'tc-list__dark': dark, 'tc-list__light': !dark }"
  >
    <slot />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCList extends Vue {
  @Prop({ default: false }) dark!: boolean;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
@import "../../../scss/mixins";

.tc-list {
  padding: 5px {
    right: 0;
  }
  border-radius: $border-radius;
  &.tc-list__dark {
    @include backdrop-blur($color);
    color: #fff;
  }
  &.tc-list__light {
    @include backdrop-blur($background);
  }
}
</style>
