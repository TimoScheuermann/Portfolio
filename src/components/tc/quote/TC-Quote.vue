<template>
  <div class="tc-quote">
    <div class="content">
      <div v-if="title" class="title">{{ title }}</div>

      <slot v-else name="title" />
      <div class="text">
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCQuote extends Vue {
  @Prop() title!: string;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.tc-quote {
  background: $paragraph;
  border: {
    radius: 5px;
    left: 7px solid $primary;
  }
  padding: 15px;
  margin: 10px 0;
  .title {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .text {
    &::before,
    &::after {
      content: '"';
      font-weight: bold;
      color: $primary;
    }
  }
  .s {
    color: red;
  }
}
</style>
