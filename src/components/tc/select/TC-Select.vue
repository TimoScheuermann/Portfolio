<template>
  <div class="tc-select" :class="{ 'tc-select__dark': dark }">
    <label :for="'tc-select_' + uuid" class="tc-container">
      <i v-if="icon" :class="'ti-' + icon" />
      <span v-if="title">{{ title }}</span>
      <span v-else class="tc-select__placeholder">{{ placeholder }}</span>
    </label>
    <select :id="'tc-select_' + uuid" :multiple="multiple" v-model="innerValue">
      <option v-for="v in innerValues" :key="v" :value="v">
        {{ v }}
      </option>
    </select>
    <div class="tc-select--custom">
      <div
        v-for="v in innerValues"
        :key="v"
        class="tc-select--option"
        :class="{ 'tc-select--option__selected': isSelected(v) }"
        @click="toggle(v)"
      >
        <div class="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" />
            <path
              d="M1550,970.667l14.167,14.167L1601,948l-36.833,36.833Z"
              transform="translate(-1525 -915.917)"
              fill="none"
              :stroke="color ? color : '#08f'"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="10"
            />
          </svg>
        </div>
        <div class="text">{{ v }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import uuidVue from "../uuid.vue";
type TValues = string | number | boolean;

@Component({ mixins: [uuidVue] })
export default class TCSelect extends Vue {
  @Prop({ default: "list" }) icon!: string;
  @Prop({ default: false }) dark!: boolean;
  @Prop({ default: !true }) multiple!: boolean;
  @Prop({ default: "Placeholder" }) placeholder!: string;
  @Prop() value!: TValues | TValues[];
  @Prop() values!: TValues[];

  public innerValue: TValues | TValues[] = this.value
    ? this.value
    : this.multiple
    ? []
    : "";
  public innerValues: TValues[] = this.values
    ? this.values
    : ["A", "B", "C", 1, true];

  @Watch("innerValue")
  update(): void {
    this.$emit("input", this.innerValue);
  }

  public toggle(value: TValues): void {
    if (!this.multiple) {
      if (this.isSelected(value)) {
        this.innerValue = "";
      } else {
        this.innerValue = value;
      }
    } else {
      if (this.isSelected(value)) {
        const index = (this.innerValue as TValues[]).indexOf(value);
        if (index > -1) {
          (this.innerValue as TValues[]).splice(index, 1);
        }
      } else {
        (this.innerValue as TValues[]).push(value);
      }
    }
  }

  public isSelected(value: TValues) {
    if (this.multiple) {
      return (this.innerValue as TValues[]).includes(value);
    } else {
      return this.innerValue === value;
    }
  }

  get title() {
    return this.innerValue;
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
@import "../../../scss/mixins";
@import "../tc-container";
// @supports (-webkit-touch-callout: none) {
//   content: "ios";
// }

.tc-select {
  .tctype::before {
    @media (hover: hover) {
      content: "desktop";
    }
    @media (hover: none) {
      content: "mobile";
    }
  }

  display: inline-block;
  select {
    position: fixed;
    top: -200px;
  }
  &__dark {
    label {
      background: lighten($color, 20%);
      color: #fff;
      i {
        border-color: rgba(#fff, 0.5) !important;
      }
    }
  }

  .tc-select--custom {
    @include backdrop-blur($paragraph);
    border-radius: $border-radius;
    padding: 5px;
    &.tc-select--custom__expanded {
    }
    .tc-select--option {
      &.tc-select--option__selected {
        color: #08f;
        i {
          transform: scale(0.8);
        }
        circle {
          stroke-width: 0;
          fill: #000;
          stroke: #000;
          r: 0;
          opacity: 0;
        }
        path {
          stroke: {
            dashoffset: 0px;
          }
          opacity: 1;
          transition: all 0.5s ease-in-out;
        }
      }
      user-select: none;
      cursor: pointer;
      display: grid;
      padding-top: 2px;
      grid-template-columns: 20px auto;
      line-height: 25px;
      i {
        padding-top: 3px;
      }

      svg {
        // transform: scale(0.4);
        circle {
          stroke-width: 1;
          fill: #000;
          stroke: #000;
          r: 16;
          transition: all 0.5s ease-in-out;
        }
        path {
          stroke: {
            dasharray: 168px;
            dashoffset: 168px;
          }
          opacity: 0;
          transition: all 0.5s ease-in-out, opacity 0.5s ease-in-out 0.2s;
        }
      }

      width: 100%;
      &:not(:last-child) {
        .text {
          border-bottom: 1px solid rgba($color, 0.2);
        }
      }
    }
  }

  label {
    text-align: center;
    display: inline-flex;
    align-items: center;
    min-width: 80px;
    max-width: 100%;
    i {
      padding-right: 7.5px;
      margin-right: 7.5px;
      border-right: 1px solid rgba($color, 0.5);
    }
    .tc-select__placeholder {
      opacity: 0.6;
    }
  }

  //   @supports (-webkit-touch-callout: none) {
  //     /* CSS specific to iOS devices */
  //     .tc-select--custom {
  //       display: none;
  //     }
  //   }

  //   @supports not (-webkit-touch-callout: none) {
  //     /* CSS for other than iOS devices */
  //     select {
  //       display: none;
  //     }
  //   }
}
</style>
