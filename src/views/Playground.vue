<template>
  <div class="playground">
    <tc-badge :value="10" tfcolor="primary">
      <tc-button background="#fff" :disabled="true" name="Simple Badge" />
    </tc-badge>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Playground extends Vue {
  public current = 1;
}
</script>
<style lang="scss" scoped>
.playground {
  height: 100vh;
  background: $error;
  display: grid;
  place-content: center;
}
.tc-tabbar {
  position: static;
}
</style>
