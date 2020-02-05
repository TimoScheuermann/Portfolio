<template>
  <div class="tc-card" :class="{ dark: isDarkmode() }">
    <div class="title">{{ title }}</div>
    <div class="subtitle">{{ subtitle }}</div>
    <tc-button :navigation="navigation"></tc-button>
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCButton from "./TC-Button.vue";
import { Navigation } from "@/models/TCButton/Navigation.model";

@Component({
  components: {
    "tc-button": TCButton
  }
})
export default class TCCard extends Vue {
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() navigation!: Navigation;
  @Prop() mode!: string;

  private isDarkmode(): boolean | "" {
    return this.mode && this.mode === "dark";
  }
}
</script>
<style lang="scss" scoped>
@import "../../scss/variables";

.tc-card {
  background: $paragraph;
  &.dark {
    background: $color;
    color: $paragraph;
  }
  padding: 30px;
  text-align: center;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .subtitle {
    margin: 10px 0;
  }
  .slot {
    margin-top: 20px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
