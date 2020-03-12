<template>
  <div class="tc-input">
    <div class="title">{{ title }}</div>
    <div
      class="tc-container"
      :class="{ 'tc-container--buttons': buttonsVisible() }"
    >
      <div v-if="buttonsVisible()" class="numberButton" @click="changeVal(-1)">
        <span>-</span>
      </div>
      <label v-if="iconExists() && !buttonsVisible()" :for="'tc-input_' + uuid">
        <i :class="'ti-' + icon" />
      </label>
      <input
        v-model="innerValue"
        :type="type"
        :id="'tc-input_' + uuid"
        :placeholder="placeholder"
        :class="{ hideArrows: !arrowsVisible() }"
        @input="update()"
      />
      <div v-if="buttonsVisible()" class="numberButton" @click="changeVal(1)">
        <span>+</span>
      </div>
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
  @Prop() buttons!: boolean;
  @Prop() arrows!: boolean;

  innerValue: any = this.value || this.type === "number" ? 0 : "";

  arrowsVisible(): boolean {
    return !this.buttonsVisible() && this.arrows;
  }

  buttonsVisible(): boolean {
    return this.buttons && this.type === "number";
  }

  iconExists(): boolean {
    return icons.filter(x => x.name == this.icon).length > 0;
  }

  changeVal(amount: number): void {
    this.innerValue += amount;
    this.update();
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

  .tc-container {
    .numberButton {
      background: $primary;
      text-align: center;
      color: #fff;
      border-radius: 3.4px;
      line-height: 29px;
      height: 29px;
      width: 29px;
      margin: -5px;
      span {
        font-size: 20px;
      }
    }

    background: $paragraph;
    display: flex;
    align-items: center;
    border-radius: 5px;
    .numberButton + input {
      max-width: calc(100% - 58.5px);
      text-align: center;
    }
    label + input {
      max-width: calc(100% - 45px);
    }
    .hideArrows::-webkit-outer-spin-button,
    .hideArrows::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .hideArrows {
      -moz-appearance: textfield;
    }
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
