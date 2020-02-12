<template>
  <div class="tc-card">
    <div v-if="title" class="title">{{ title }}</div>
    <div v-if="subtitle" class="subtitle">{{ subtitle }}</div>
    <tc-button v-if="to" :to="to" name="Read more"></tc-button>
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCButton from "../button/TC-Button.vue";

@Component({
  components: {
    "tc-button": TCButton
  }
})
export default class TCCard extends Vue {
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() to!: string | object;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.tc-card {
  background: $paragraph;
  padding: 30px;
  text-align: center;

  &[rounded] {
    border-radius: $border-radius;
  }
  &[hover] {
    transition: 0.2s ease-in-out;
    &:hover {
      box-shadow: $shadow;
    }
  }

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
