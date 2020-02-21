<template>
  <button class="tc-scrollup" :class="{ show: visible }" @click="scrollUp()">
    <i :class="'ti-' + icon"></i>
  </button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCScrollUp extends Vue {
  @Prop({ default: "arrow-up" }) icon!: string;
  public visible: boolean = false;

  created() {
    document.onscroll = () => {
      this.visible =
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
    };
  }

  scrollUp(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }
}
</script>
<style lang="scss" scoped>
$size: 50px;
.tc-scrollup {
  display: none;
  &.show {
    display: flex;
  }
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: $size;
  height: $size;
  line-height: $size;
  border-radius: $size;
  border: none;
  outline: none;
  cursor: pointer;
  background: #08f;
  color: #fff;
  font-size: 20px;

  transition: 0.2s ease-in-out;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
}
</style>
