<template>
  <transition-group name="mode-switch" mode="out-in">
    <div
      key="d"
      v-if="$store.getters.darkmode"
      @click="set(false)"
      class="switch-container"
      dark
    >
      <i class="ti-moon" />
    </div>
    <div key="l" v-else class="switch-container" @click="set(true)">
      <i class="ti-sun" />
    </div>
  </transition-group>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class PDarkLightMode extends Vue {
  public set(to: boolean) {
    this.$store.commit('darkmode', to);
  }
}
</script>
<style lang="scss" scoped>
.switch-container {
  position: fixed;
  z-index: 200;
  @media #{$isDesktop} {
    right: 40px;
    bottom: calc(40px + env(safe-area-inset-bottom));
  }
  @media #{$isMobile} {
    right: 20px;
    bottom: calc(70px + env(safe-area-inset-bottom));
  }
  cursor: pointer;
  display: grid;
  place-content: center;

  $scale: 40px;
  height: $scale;
  width: $scale;
  border-radius: $scale;

  @include backdrop-blur(goldenrod);
  color: #111;

  &[dark] {
    @include backdrop-blur($container_dark);
    color: #fff;
  }
}

.mode-switch-enter-active,
.mode-switch-leave-active {
  transition: all 0.5s;
}
.mode-switch-enter, .mode-switch-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(300px);
}
</style>
