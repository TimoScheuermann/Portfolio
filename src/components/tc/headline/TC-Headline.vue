<template>
  <div class="tc-headline">
    <div class="title" v-if="title">{{ title }}</div>
    <div v-else>
      <slot name="title" />
    </div>
    <div class="tc-headline--items">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCHeadline extends Vue {
  @Prop() title!: string;
  @Prop({ default: 1 }) size!: number;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.tc-headline {
  height: 30px;
  display: flex;
  padding: 0 20px;
  margin: 20px 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba($color, 0.3);
  .title {
    font-weight: bold;
    font-size: 18px;
    opacity: 0.8;
  }
  &:hover {
    .title {
      opacity: 1;
    }
  }
  .tc-headline--items {
    writing-mode: inherit;
  }
}
</style>
