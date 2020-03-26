<template>
  <div class="p-mobile-view">
    <div id="container" class="container">
      <div
        id="phone"
        class="phone"
        :style="{ width: scale * 1125 + 'px', height: scale * 2436 + 'px' }"
      >
        <tc-tabbar dark="true">
          <tc-tabbar-item />
          <tc-tabbar-item />
          <tc-tabbar-item />
          <tc-tabbar-item />
        </tc-tabbar>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCTabbar from "../../tc/tabbar/TC-Tabbar.vue";
import TCTabbarItem from "../../tc/tabbar/TC-Tabbar-Item.vue";
@Component({
  components: {
    "tc-tabbar": TCTabbar,
    "tc-tabbar-item": TCTabbarItem
  }
})
export default class PMobileView extends Vue {
  scale: number = 1;

  mounted() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  resize() {
    const container: HTMLElement | null = document.getElementById("container");
    const phone: HTMLElement | null = document.getElementById("phone");
    if (container && phone) {
      // console.log("resize");
      // console.log("CW", container!.clientWidth);
      // console.log("PW", phone!.clientWidth);
      this.scale = container!.clientWidth / 1125;
      // console.log("Scale", this.scale);
    }
  }
}
</script>
<style lang="scss" scoped>
.p-mobile-view {
  .container {
    max-width: 300px;
    overflow: visible;
    background: url("/assets/iPhone11Pro.png") {
      size: contain;
      position: center;
      repeat: no-repeat;
    }
    .phone {
      position: relative;
      .tc-tabbar {
        width: 100%;
        position: absolute;
      }
    }
  }
}
</style>
