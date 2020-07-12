<template>
  <div class="home">
    <div class="me">
      <img src="assets/home/me.webp" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Home2 extends Vue {}
</script>
<style lang="scss" scoped>
.home {
  color: #fff;
  img {
    width: 400px;
    max-width: 70vw;
  }
  .me {
    position: relative;
    width: fit-content;
    &::before {
      height: 40px;
      width: 40px;
      max-height: 70vw;
      max-width: 70vw;
      content: '';
      background: radial-gradient(
        circle,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%,
        at center center
      );
      position: absolute;
    }
  }
}
</style>
