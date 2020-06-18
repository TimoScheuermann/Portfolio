<template>
  <transition-group
    name="icon-list"
    tag="div"
    class="timos-icons--icon-scroller"
  >
    <i
      v-for="icon in icons"
      :key="icon.name"
      :class="'ti-' + icon.name"
      @click="goTo(icon)"
    />
  </transition-group>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import constants from "@/constants";
import icons from "@/icons";
import { Icon } from "@/models/Icons/Icon.model";
@Component
export default class IconScroller extends Vue {
  public timos_icons: string = constants.projectRoutes.timos_icons;
  public icons: Icon[] = icons;
  private timeout: any;

  mounted() {
    this.move();
  }
  destroyed() {
    clearTimeout(this.timeout);
  }

  goTo(icon: Icon): void {
    this.$router.push({
      name: constants.projectRoutes.timos_icons_detail,
      params: { icon: icon.name }
    });
  }

  move(): void {
    const icon: Icon = this.icons.shift() as Icon;
    this.timeout = setTimeout(() => {
      this.icons.push(icon);
      this.move();
    }, 2000);
  }
}
</script>
<style lang="scss" scoped>
.icon-list-enter,
.icon-list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.icon-list-leave-active {
  position: absolute;
}

.timos-icons--icon-scroller {
  @media #{$isDesktop} {
    margin-left: 45px;
  }

  background: #f0f0f0;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  &::after,
  &::before {
    top: 0;
    bottom: 0;
    width: 60px;
    position: absolute;
    content: "";
    z-index: 10;
  }
  &::after {
    right: 0;
    background: linear-gradient(to left, #f0f0f0, rgba(#f0f0f0, 0));
  }
  &::before {
    left: 0;
    background: linear-gradient(to right, #f0f0f0, rgba(#f0f0f0, 0));
  }
  i {
    transition: transform 1s, opacity 1s;
    display: inline-block;
    margin: 10px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      color: #08f;
    }
  }
}
</style>
