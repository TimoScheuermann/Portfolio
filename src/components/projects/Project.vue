<template>
  <div class="project">
    <div class="title">{{ title }}</div>
    <div class="border"></div>
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Project extends Vue {
  @Prop() title!: string;
}
</script>
<style lang="scss" scoped>
@import "../../scss/variables";
@import "../../scss/mixins";

.project {
  margin-top: 50px;

  & > {
    .border,
    .title {
      position: fixed;
      width: 80%;
      z-index: 100;
    }
    .border {
      background: rgba($color, 0.25);
      height: 1px;
      left: 10%;
      top: 100px;
    }
    .title {
      @include backdrop-blur($background);
      font-weight: bold;
      font-size: 20px;
      padding: 10% {
        top: 15px;
        bottom: 5px;
      }
      line-height: 30px;
    }
  }
  .slot {
    padding: 20px 10% {
      top: 50px;
    }
    .section {
      .sectionHead {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        min-height: 50px;
        padding: 0 10px;
        border-bottom: 1px solid rgba($color, 0.25);
        margin-bottom: 10px;
        & > .title {
          font-weight: bold;
          font-size: 18px;
          opacity: 0.8;
        }
        & > .filter {
          display: flex;
          flex-wrap: wrap;
          div {
            &:not(:last-child) {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
