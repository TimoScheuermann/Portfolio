<template>
  <div>
    <tc-headline title="Divider" />
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ab quos
      similique nam vel fugiat quidem sit pariatur! Ut possimus, consequatur
      velit dicta optio at tempore atque veniam fugiat nisi.
    </p>

    <tc-headline title="Variants" />

    <tc-grid minWidth="350">
      <portfolio-code-example tag="tc-divider" title="Simple Line">
        <tc-divider />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-divider"
        title="With icon"
        :attr="{ color: 'red', icon: 'heart' }"
      >
        <tc-divider color="red" icon="heart" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-divider"
        title="With text"
        :attr="{ name: 'Section' }"
      >
        <tc-divider name="Section" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-divider"
        title="With Icon + Text"
        :attr="{ icon: 'hockey-stick', name: 'Icehockey' }"
      >
        <tc-divider icon="hockey-stick" name="Icehockey" />
      </portfolio-code-example>
    </tc-grid>

    <tc-headline title="Alignment" />

    <tc-grid minWidth="350">
      <portfolio-code-example
        tag="tc-divider"
        title="Left-Alignment"
        :attr="{ name: 'Left Align', position: 'left' }"
      >
        <tc-divider name="Left Align" position="left" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-divider"
        title="Center-Alignment"
        :attr="{ name: 'Center Align', position: 'center' }"
      >
        <tc-divider name="Center Align" position="center" />
      </portfolio-code-example>

      <portfolio-code-example
        tag="tc-divider"
        title="Right-Alignment"
        :attr="{ name: 'Right Align', position: 'right' }"
      >
        <tc-divider name="Right Align" position="right" />
      </portfolio-code-example>
    </tc-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCDivider from "@/components/tc/divider/TC-Divider.vue";
import PortfolioCodeExample from "@/components/projects/TCComponents/CodeExample.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
@Component({
  components: {
    "portfolio-code-example": PortfolioCodeExample,
    "tc-headline": TCHeadline,
    "tc-divider": TCDivider,
    "tc-grid": TCGrid
  }
})
export default class TCComponentsDetailDivider extends Vue {}
</script>
