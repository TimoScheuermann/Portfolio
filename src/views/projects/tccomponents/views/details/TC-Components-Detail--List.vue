<template>
  <div>
    <tc-headline title="List" />

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
      reprehenderit quaerat beatae nemo ad ipsa? Natus, neque. Nihil suscipit
      aspernatur inventore, accusantium aperiam veniam iste quas quaerat velit?
      Quas, dignissimos!
    </p>

    <tc-grid minWidth="320">
      <tc-list title="Sample list">
        <tc-list-item title="Settings" icon="settings" />
        <tc-list-item title="Users" icon="users" />
        <tc-list-item title="Account" icon="heart" />
      </tc-list>
    </tc-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import PortfolioCodeExample from "@/components/projects/TCComponents/CodeExample.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import TCList from "@/components/tc/list/TC-List.vue";
import TCListItem from "@/components/tc/list/TC-List-Item.vue";
@Component({
  components: {
    "portfolio-code-example": PortfolioCodeExample,
    "tc-headline": TCHeadline,
    "tc-grid": TCGrid,
    "tc-list": TCList,
    "tc-list-item": TCListItem,
  },
})
export default class TCComponentsDetailList extends Vue {}
</script>
