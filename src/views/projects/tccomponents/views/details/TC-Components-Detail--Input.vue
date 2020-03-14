<template>
  <div>
    <tc-headline title="Inputs"></tc-headline>
    <tc-input />
    <tc-input placeholder="placeholder" />
    <tc-input icon="user-circle" placeholder="Username" />
    <tc-input icon="save" />
    <tc-input title="Username" icon="user" />
    <tc-input type="number" />
    <tc-input type="number" buttons="true" />

    <label for="cars">Choose a car:</label>

    <select id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>

    <tc-input
      title="Date"
      type="date"
      icon="calendar"
      placeholder="Hallo"
      v-model="dateInput"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCInput from "@/components/tc/input/TC-Input.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-input": TCInput
  }
})
export default class TCComponentsDetailInput extends Vue {
  dateInput: string = "2000-04-17";
}
</script>
<style lang="scss" scoped>
.tc-input {
  max-width: 200px;
}
</style>
