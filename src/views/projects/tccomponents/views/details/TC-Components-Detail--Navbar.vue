<template>
  <div>
    <tc-headline title="Navbar" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt at
      quisquam ipsam a quae ducimus eum, perferendis aliquid laudantium quo,
      fugiat soluta provident. Eos vitae laboriosam molestias modi iure!
    </p>
    <tc-headline title="Slots" />
    <h3>default</h3>
    <h3>logo</h3>
    <h3>actions</h3>
    <tc-headline title="Examples" />

    <tc-grid>
      <portfolio-code-example
        title="Logo Slot"
        tag="tc-navbar"
        inner='<b slot="logo">Logo</b>'
      >
        <tc-navbar class="tc-navbar__example">
          <b slot="logo">Logo</b>
        </tc-navbar>
      </portfolio-code-example>

      <portfolio-code-example
        title="Navbar Item"
        tag="tc-navbar"
        inner='
          <tc-navbar-item icon="house" name="Home" to="./Navbar" />'
      >
        <tc-navbar class="tc-navbar__example">
          <tc-navbar-item icon="house" name="Home" to="./Navbar" />
        </tc-navbar>
      </portfolio-code-example>
    </tc-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import PortfolioCodeExample from "@/components/projects/TCComponents/CodeExample.vue";
import TCNavbar from "@/components/tc/navbar/TC-Navbar.vue";
import TCNavbarItem from "@/components/tc/navbar/TC-Navbar-Item.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
@Component({
  components: {
    "portfolio-code-example": PortfolioCodeExample,
    "tc-headline": TCHeadline,
    "tc-navbar": TCNavbar,
    "tc-navbar-item": TCNavbarItem,
    "tc-grid": TCGrid
  }
})
export default class TCComponentsDetailNavbar extends Vue {}
</script>

<style lang="scss" scoped>
.tc-navbar__example {
  position: static !important;
  margin-bottom: 20px;
  backdrop-filter: none !important;
}
</style>
