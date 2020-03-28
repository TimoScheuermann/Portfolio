<template>
  <div class="icon-slot-mashine">
    <transition name="fade">
      <i v-if="icon.length > 0" :class="'ti-' + icon" />
    </transition>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import icons from "@/icons";

@Component
export default class IconSlotMashine extends Vue {
  @Prop({ default: 3 }) amount!: number;
  public icon: string = "";

  mounted() {
    setTimeout(() => {
      this.run();
    }, Math.random() * 1000);
  }

  run(): void {
    this.icon = "";
    setTimeout(() => {
      this.icon = this.getRandomIcon();
      setTimeout(() => {
        this.run();
      }, 2200);
    }, 500);
  }

  getRandomIcon(): string {
    return icons[Math.floor(Math.random() * icons.length)].name;
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.icon-slot-mashine {
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  i {
    position: absolute;
    font-size: 30px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(4px 8px 12px rgba(#111, 0.6));
  }

  .fade-enter-active,
  .fade-leave-active {
    position: absolute;
    transition: 0.5s ease-in-out;
  }
  .fade-enter {
    top: 0%;
  }
  .fade-leave-to {
    top: 100%;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translate(-50%, -50%) rotateX(180deg);
  }
}
</style>
