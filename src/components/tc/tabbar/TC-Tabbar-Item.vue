<template>
  <router-link :to="{ name: routeName }" class="tc-tabbar--item">
    <i :class="'ti-' + icon"></i>
    <span>{{ title }}</span>
  </router-link>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCTabbarItem extends Vue {
  @Prop({ default: "house", type: String }) icon!: string;
  @Prop({ default: "Home", type: String }) title!: string;
  @Prop({ default: "home", type: String }) routeName!: string;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.tc-tabbar--item {
  flex: 1 1 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $color;
  margin: 0 2.5px;
  i,
  span {
    height: 20px;
    line-height: 20px;
    // background: green;
  }
  span {
    // background: orange;
  }
  &.router-link-exact-active {
    color: $primary;
  }
}
</style>
