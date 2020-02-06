<template>
  <div class="tc-direction" @click="clicked($event)">
    <div class="title">{{ title }}</div>
    <div class="indicator" :class="{ descend: descend }">
      <span class="ti-arrow-down"></span>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCDirection extends Vue {
  @Prop() title!: string;
  @Prop() descend!: boolean;

  public clicked(event: MouseEvent): void {
    this.descend = !this.descend;
    this.$emit("toggle", event);
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
@import "common";

.tc-direction {
  @include select;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    font-weight: 500;
    opacity: 0.8;
    line-height: 20px;
  }
  .indicator {
    transition: 0.5s ease-in-out;
    margin-left: 5px;
    color: $primary;
    height: 1em;
    &.descend {
      transform: rotateX(180deg);
    }
  }
}
</style>
