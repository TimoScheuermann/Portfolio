<template>
  <div class="tc-checkbox tc-container">
    <input
      @input="updateVal()"
      v-model="checked"
      type="checkbox"
      name="check"
      :id="'tc-checkbox_' + uuid"
    />
    <label :for="'tc-checkbox_' + uuid">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <g id="border" fill="none" stroke="#000" stroke-width="10">
          <rect x="5" y="5" width="90" height="90" rx="10" fill="none" />
        </g>
        <path
          id="arrow"
          d="M1550,970.667l14.167,14.167L1601,948l-36.833,36.833Z"
          transform="translate(-1525 -915.917)"
          fill="none"
          :stroke="color ? color : '#08f'"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="10"
        />
      </svg>
      <span v-if="title">{{ title }}</span>
    </label>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import uuid from "../uuid.vue";
@Component({
  mixins: [uuid]
})
export default class TCCheckbox extends Vue {
  @Prop({ default: false }) value!: boolean;
  @Prop() title!: string;
  @Prop() color!: string;

  checked: boolean = this.value;
  updateVal() {
    this.$emit("input", !this.checked);
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
@import "../tc-container";
.tc-checkbox {
  input {
    display: none;
  }
  input:checked + label {
    span {
      opacity: 1;
    }
    svg {
      #arrow {
        stroke: {
          dasharray: 172px;
          dashoffset: 0px;
        }
      }
      #border {
        stroke: {
          dasharray: 343px;
          dashoffset: 343px;
        }
      }
    }
  }
  label {
    cursor: pointer;
    display: grid;
    grid-template-columns: 20px auto;
    grid-template-rows: 20px;
    svg {
      height: 100%;
      width: 100%;

      #arrow {
        stroke: {
          dasharray: 172px;
          dashoffset: 172px;
        }
        transition: all 0.5s ease-in-out;
      }
      #border {
        stroke: {
          dasharray: 343px;
          dashoffset: 0px;
        }
        transition: all 0.5s ease-in-out;
      }
    }
    span {
      padding: {
        left: 10px;
        right: 5px;
      }
      opacity: 0.8;
      font-weight: 500;
      line-height: 20px;
    }
  }
}
</style>
