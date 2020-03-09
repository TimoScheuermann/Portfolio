<template>
  <div class="tc-input">
    <div class="title">{{ title }}</div>
    <div class="input tc-container">
      <label v-if="iconExists()" :for="'tc-input_' + uuid">
        <i :class="'ti-' + icon"></i>
      </label>
      <input
        v-model="innerValue"
        :type="type"
        :id="'tc-input_' + uuid"
        :placeholder="placeholder"
        @input="update()"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import uuid from "../uuid.vue";
import icons from "@/icons";
@Component({
  mixins: [uuid]
})
export default class TCInput extends Vue {
  @Prop() icon!: string;
  @Prop() placeholder!: string;
  @Prop() title!: string;
  @Prop({ default: "text" }) type!: string;
  @Prop() value!: any;

  innerValue: any = this.value;

  iconExists(): boolean {
    return icons.filter(x => x.name == this.icon).length > 0;
  }

  update() {
    this.$emit("input", this.innerValue);
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
@import "../tc-container";
.tc-input {
  .title {
    font-weight: 500;
    opacity: 0.8;
  }

  .input {
    background: $paragraph;
    display: flex;
    align-items: center;
    border-radius: 5px;
    input {
      background: none;
      outline: none;
      font: inherit;
      font-size: 16px;
      &::placeholder {
        font-size: 14px;
      }
      border: none {
        radius: 5px;
      }
      margin: 5px;
      padding: 0 5px;
    }
    label {
      padding: 0 5px;
      margin: 5px 0;
      border-right: 1px solid rgba($color, 0.3);
    }
  }
}
</style>
