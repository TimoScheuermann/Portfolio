<template>
  <router-link
    class="timosicons--icontile"
    :to="{ name: 'timosiconsdetail', params: { icon: icon.name } }"
  >
    <i :class="'ti-' + icon.name"></i>
    <div class="name">{{ icon.name }}</div>
  </router-link>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Icon } from "@/models/Icons/Icon.model";
@Component
export default class IconTile extends Vue {
  @Prop() icon!: Icon;
  @Prop() detailView!: boolean;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.timosicons--icontile {
  color: $color;
  padding: 20px;
  text-align: center;
  &:hover {
    i {
      color: $primary;
    }
    .name,
    i {
      opacity: 0.8;
    }
  }
  i,
  .name {
    transition: 0.2s ease-in-out;
  }
  i {
    opacity: 0.8;
    font-size: 35px;
  }
  .name {
    opacity: 0.4;
    margin-top: 5px;
    font-weight: bold;
  }
}
</style>
