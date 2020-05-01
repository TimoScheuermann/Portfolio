<template>
  <div
    class="tc-list-item"
    @click="clicked()"
    :class="{ 'tc-list-item__link': !isSwitch }"
  >
    <div class="tc-list-item--icon">
      <i :class="icon"></i>
    </div>
    <div class="tc-list-item--container">
      <div class="tc-list-item--title">
        <span>{{ title }}</span>
      </div>
      <div v-if="isSwitch" class="tc-list-item--switch">
        <tc-switch></tc-switch>
      </div>
      <div v-else class="tc-list-item--indicator">
        <i class="ti-arrow-right" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCSwitch from "../switch/TC-Switch.vue";
@Component({
  components: {
    "tc-switch": TCSwitch
  }
})
export default class TCListItem extends Vue {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() to!: any;
  @Prop() href!: string;
  @Prop({ default: false }) isSwitch!: boolean;

  public clicked(): void {
    if (!this.isSwitch) {
      if (this.to) {
        if (typeof this.to == "string") {
          this.$router.push({ name: this.to });
        } else {
          this.$router.push(this.to);
        }
      } else {
        window.open(this.href, "_blank");
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$size: 35px;

.tc-list-item {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: $size 1fr;
  grid-template-rows: $size;

  &.tc-list-item__link {
    cursor: pointer;
  }
  &:not(:last-child) {
    .tc-list-item--container {
      &::after {
        position: absolute;
        content: "";
        bottom: 0;
        right: 0;
        left: 0;
        height: 1px;
        background: currentColor;
        opacity: 0.2;
      }
    }
  }
  .tc-list-item--icon {
    text-align: center;
    line-height: $size;
    i {
    }
  }
  .tc-list-item--container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .tc-list-item--title {
      span {
        padding-right: 10px;
      }
    }
    .tc-list-item--switch,
    .tc-list-item--indicator {
      padding-right: 10px;
    }
    .tc-list-item--switch {
      display: flex;
    }
    .tc-list-item--indicator {
      i {
        opacity: 0.6;
        font-size: 10px;
      }
    }
  }
}
</style>
