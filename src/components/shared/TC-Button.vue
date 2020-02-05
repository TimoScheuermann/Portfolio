<template>
  <button :class="{important: important}" @click="clicked">{{ navigation.name }}</button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Navigation } from "@/models/TCButton/Navigation.model";
@Component
export default class TCButton extends Vue {
  @Prop() readonly navigation!: Navigation;
  @Prop() readonly important: any;

  private clicked(): void {
    console.log(this.navigation);
    if (typeof this.navigation.destiny === "object") {
      this.$router.push(this.navigation.destiny);
    } else {
      window.open(this.navigation.destiny, "_blank");
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../scss/variables";
button {
  outline: none;
  background: none;
  color: $primary;
  border: 1px solid $primary;
  box-shadow: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover,
  &.important {
    background: $primary;
    color: #fff;
  }
  &.important {
    &:hover {
      filter: brightness(110%);
    }
  }
}
</style>
