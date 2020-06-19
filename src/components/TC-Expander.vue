<template>
  <tc-card class="tc-revealer" :dark="dark">
    <div class="tc-revealer--head" slot="header">
      <div class="tc-card--title__prestyled">{{ title }}{{ reveal }}</div>
      <div
        class="tc-revealer--indicator"
        :class="{ spin: reveal }"
        @click="toggle()"
      >
        <i class="ti-chevron-right" />
      </div>
    </div>
    <div class="tc-revealer--content" v-if="reveal">
      <slot />
    </div>
  </tc-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Mixins } from "vue-property-decorator";
import TCComponent from "./tc/TC-Component.mixin";
import TCCard from "./tc/card/TC-Card.vue";

@Component({
  components: {
    "tc-card": TCCard
  }
})
export default class TCExpander extends Mixins(TCComponent) {
  @Prop() title!: string;
  public reveal: boolean = false;

  public toggle() {
    this.reveal = !this.reveal;
  }
}
</script>
<style lang="scss" scoped>
.tc-revealer--head {
  position: relative;
  .tc-revealer--indicator {
    position: absolute;
    top: 50%;
    right: 0;
    $scale: 30px;
    transform: translate(50%, -50%);
    width: $scale;
    height: $scale;
    border-radius: $scale;
    background: $error;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    transition: transform 0.2s ease-in-out;
    &.spin {
      transform: translate(50%, -50%) rotate(90deg);
    }
  }
}
.tc-revealer {
  overflow: visible;
  position: relative;
  &__revealed {
  }
  .tc-revealer--content {
  }
}
</style>
