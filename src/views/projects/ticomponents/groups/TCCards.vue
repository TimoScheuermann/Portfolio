<template>
  <div>
    <div v-if="tcComponent">
      <tc-headline title="API" />
      <tc-table>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Parameters</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
        <tr v-for="api in tcComponent.api" :key="api.name">
          <td>{{ api.name }}</td>
          <td>{{ api.type }}</td>
          <td>{{ api.parameters }}</td>
          <td>{{ api.description }}</td>
          <td>{{ api.default }}</td>
        </tr>
      </tc-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCTable from "../../../../components/tc/table/TC-Table.vue";
import { TCComponent } from "../../../../models/TCComponents/TCComponent.model";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-table": TCTable
  }
})
export default class TICards extends Vue {
  @Prop() tcComponent!: TCComponent;
}
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
