<template>
  <div class="tc-toggle">
    <input type="checkbox" :id="'tc-toggle_' + uuid" v-model="toggled" />
    <label :for="'tc-toggle_' + uuid">
      <div class="container">
        <div class="ball"></div>
      </div>
    </label>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import uuidVue from "../uuid.vue";
@Component({
  mixins: [uuidVue]
})
export default class TCSwitch extends Vue {
  public toggled: boolean = true;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.tc-toggle {
  display: inline-block;
  margin: 3px;
  input {
    display: none;
  }
  input:checked + label {
    .container {
      background: $primary;
      .ball {
        transform: translate(calc(50% + 11px), -50%);
      }
    }
  }
  label {
    cursor: pointer;
    .container {
      width: 40px;
      height: 22px;
      border-radius: 22px;
      background: $paragraph;
      position: relative;
      transition: 0.2s ease-in;

      .ball {
        position: absolute;
        transition: 0.2s cubic-bezier(0.73, 1.64, 0.35, 0.65);
        left: 0;
        top: 50%;
        height: 18px;
        width: 18px;
        border-radius: inherit;
        background: #fff;
        transform: translate(calc(50% - 7px), -50%);
      }
    }
  }
}
</style>
