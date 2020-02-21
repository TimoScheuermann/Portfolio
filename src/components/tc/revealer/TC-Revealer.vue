<template>
  <div class="tc-revealer">
    <input type="checkbox" :id="'tc-revealer_' + uuid" />
    <label :for="'tc-revealer_' + uuid">
      <tc-headline title="Reveal text inside me">
        <div class="iconWrapper">
          <div class="icon">
            <i class="ti-cross"></i>
          </div>
        </div>
      </tc-headline>
    </label>
    <div class="content">
      <slot>
        <div data-not-set-inside-revealer>Nothing available to reveal</div>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import TCHeadline from "../headline/TC-Headline.vue";
import uuid from "../uuid.vue";
@Component({
  components: {
    "tc-headline": TCHeadline
  },
  mixins: [uuid]
})
export default class TCRevealer extends Vue {}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.tc-revealer {
  & > input {
    display: none;
    &:checked ~ {
      label {
        .iconWrapper {
          .icon {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }
      }
      .content {
        max-height: 600px;
      }
    }
  }
  & > label {
    cursor: pointer;
    display: block;
    .iconWrapper {
      position: relative;
      .icon {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        position: absolute;
        transition: 0.4s ease-in-out;
      }
    }
  }
  & > .content {
    transition: 0.4s ease-in-out;
    max-height: 0px;
    overflow: auto;
    [data-not-set-inside-revealer] {
      text-align: center;
      opacity: 0.6;
      font-weight: bold;
    }
  }
}
</style>
