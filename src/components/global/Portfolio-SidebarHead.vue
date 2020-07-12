<template>
  <div class="sidebar-head">
    <div class="icon">
      <img src="assets/logo.svg" alt="" />
    </div>
    <div class="title">Timo Scheuermann</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PortfolioSidebarHead extends Vue {}
</script>

<style lang="scss" scoped>
.sidebar-head {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  transition: 0.4s ease-in-out;

  .icon {
    $scale: 80px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: $scale;
    color: #fff;

    img {
      filter: invert(100%);
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .title {
    color: #fff;
    margin-top: 10px;
    transition: inherit;
    white-space: nowrap;
    text-align: center;
  }
}
</style>
