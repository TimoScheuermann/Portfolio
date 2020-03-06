<template>
  <router-link tag="a" class="tc-link" v-if="to" :to="to"><slot /></router-link>
  <a v-else class="tc-link" :href="href"><slot /></a>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCLink extends Vue {
  @Prop() to!: any;
  @Prop({ default: "#" }) href!: string;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.tc-link {
  color: $primary;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  position: relative;
  margin: 0 2px;
  &::after {
    transition: 0.2s ease-in-out;
    position: absolute;
    content: "";
    bottom: 0;
    width: 0%;
    height: 1px;
    background: $primary;
    left: 50%;
    transform: translateX(-50%);
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
}
</style>
