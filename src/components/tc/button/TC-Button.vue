<template>
  <a
    v-if="href"
    class="tc-button"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i v-if="iconExists()" :class="'ti-' + icon"></i>
    <span class="name" v-if="name">{{ name }}</span>
  </a>
  <router-link v-else class="tc-button" tag="button" :to="to">
    <i v-if="iconExists()" :class="'ti-' + icon"></i>
    <span class="name" v-if="name">{{ name }}</span>
  </router-link>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import icons from "@/icon5";

@Component
export default class TCButton extends Vue {
  @Prop({
    default: () => {
      return { name: "home" };
    },
    type: Object
  })
  to!: object;
  @Prop() href!: string;
  @Prop() name!: string;
  @Prop() icon!: string;

  public iconExists(): boolean {
    return icons.filter(x => x.name == this.icon).length > 0;
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.tc-button {
  outline: none;
  background: none;
  color: $primary;
  border: 1px solid $primary;
  box-shadow: none;
  padding: 5px 7px;
  border-radius: 5px;
  margin: 3px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  i,
  .name {
    margin: 0 3px;
  }

  &:hover {
    background: $primary;
    color: #fff;
  }
}
</style>
