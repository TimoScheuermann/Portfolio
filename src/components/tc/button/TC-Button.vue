<template>
  <router-link tag="button" :to="to">
    <span class="wrapper">
      <i v-if="icon" :class="'ti-' + icon"></i>
      <span class="name" v-if="name">{{ name }}</span>
    </span>
  </router-link>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class TCButton extends Vue {
  @Prop({ default: "_blank" }) to!: string | object;
  @Prop() name!: string;
  @Prop() icon!: string;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
button {
  outline: none;
  background: none;
  color: $primary;
  border: 1px solid $primary;
  box-shadow: none;
  padding: 5px 7px;
  border-radius: 5px;
  margin: 3px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  width: fit-content;

  .wrapper {
    display: flex;
    align-items: center;
    i,
    .name {
      margin: 0 3px;
    }
  }

  &:hover {
    background: $primary;
    color: #fff;
  }
}
</style>
