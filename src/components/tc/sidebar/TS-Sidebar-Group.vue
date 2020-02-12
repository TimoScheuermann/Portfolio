<template>
  <div class="tc-sidebar--group">
    <div class="header">
      <input type="checkbox" :id="'groupExpand_' + uuid" v-model="expanded" />
      <label :for="'groupExpand_' + uuid">
        <div class="title"><i :class="'ti-' + icon"></i>{{ name }}</div>
        <div class="expander">
          <i class="ti-arrow-right"></i>
        </div>
      </label>
    </div>
    <div class="tc-sidebar--items" :class="{ expanded: expanded }">
      <slot></slot>
      <div class="divider"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import uuidVue from "../uuid.vue";
@Component({
  mixins: [uuidVue]
})
export default class TCSidebarGroup extends Vue {
  @Prop() name!: string;
  @Prop() icon!: string;

  public expanded: boolean = true;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.tc-sidebar--group {
  padding: 5px 0;
  .header {
    input {
      display: none;
    }
    input:checked + label {
      .expander {
        transform: rotate(90deg);
      }
    }
    label {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;

      opacity: 0.6;
      transition: 0.2s ease-in-out;
      &:hover {
        opacity: 1;
      }
      padding: {
        right: 10px;
      }
      .title {
        display: flex;
        align-items: center;
        padding-left: 5px;
        i {
          width: 30px;
        }
      }
      .expander {
        transition: 0.2s ease-in-out;
        i {
          color: inherit;
        }
      }
    }
  }

  .tc-sidebar--items {
    max-height: 0px;
    overflow: {
      x: hidden;
      y: auto;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    transition: 0.3s ease-in-out;

    &.expanded {
      max-height: 300px;
      margin-top: 5px;
    }

    .divider {
      height: 1px;
      background: $color;
      opacity: 0.3;
      margin: 5px 0;
    }
  }
}
</style>
