<template>
  <div>
    <tc-headline title="Colors" />
    <tc-grid minWidth="150">
      <tc-card
        v-for="(c, index) in colors"
        :key="c.name"
        rounded="true"
        hover="true"
        :background="c.code"
        :color="(index > 2 || index === 0) && '#fff'"
      >
        <b>{{ c.name }}</b>
      </tc-card>
    </tc-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-card": TCCard,
    "tc-grid": TCGrid
  }
})
export default class TCComponentsDetailColors extends Vue {
  public colors: { name: string; code: string }[] = [
    { name: "color", code: "#111" },
    { name: "background", code: "#fff" },
    { name: "paragraph", code: "#f0f0f0" },
    { name: "primary", code: "#0088ff" },
    { name: "error", code: "#e61553" },
    { name: "success", code: "#25ca49" },
    { name: "error_", code: "#fc5c65" }
  ];
}
</script>
<style lang="scss" scoped>
@import "../../../../../components/tc/colors";
</style>
