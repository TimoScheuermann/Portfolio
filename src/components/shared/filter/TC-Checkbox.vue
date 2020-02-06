<template>
  <div class="tc-checkbox">
    <input type="checkbox" name="check" id="check" />
    <label for="check" @click="clicked($event)">
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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="10"
        />
      </svg>
      <span>{{ title }}</span>
    </label>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TCCheckbox extends Vue {
  @Prop() title!: string;

  public clicked(event: MouseEvent): void {
    this.$emit("toggle", event);
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
@import "common";

.tc-checkbox {
  @include select;

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
    padding: 5px;
    cursor: pointer;
    display: grid;
    grid-template-columns: 20px auto;
    grid-template-rows: 20px;
    grid-gap: 10px;
    svg {
      height: 100%;
      width: 100%;

      #arrow {
        stroke: $primary {
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
      padding-right: 5px;
      opacity: 0.8;
      font-weight: 500;
      line-height: 20px;
    }
  }
}
</style>
