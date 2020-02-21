<template>
  <div class="tc-spinner">
    <div v-for="(i, index) in Array(10)" :key="'s_' + index" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class TCSpinner extends Vue {}
</script>
<style lang="scss" scoped>
.tc-spinner {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  div {
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 10px;
      background: #111;
    }

    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        transform: rotate(#{36 * $i}deg);
        animation: tc-spinner--anim 1s ease-in-out #{$i / 10}s infinite;
      }
    }
  }
  @keyframes tc-spinner--anim {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
}
</style>
