<template>
  <router-link
    class="timosicons--icontile"
    :to="{ name: 'timosiconsdetail', params: { icon: icon.name } }"
  >
    <i :class="'icon ti-' + icon.name"></i>
    <div v-if="showName" class="name">{{ icon.name.split("-").join(" ") }}</div>
  </router-link>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Icon } from "@/models/Icons/Icon.model";
@Component
export default class IconTile extends Vue {
  @Prop() icon!: Icon;
  @Prop({ default: true }) showName!: boolean;
}
</script>

<style lang="scss" scoped>
@import "../../tc/_variables.scss";
@import "../../tc/_mixins.scss";

.timosicons--icontile {
  color: $color;
  padding: 20px;
  text-align: center;
  &:hover {
    .icon {
      color: $primary;
    }
    .name,
    .icon {
      opacity: 0.8;
    }
  }
  .icon,
  .name {
    transition: 0.2s ease-in-out;
  }
  .icon {
    opacity: 0.8;
    font-size: 35px;
  }
  .name {
    opacity: 0.4;
    margin-top: 5px;
    font-weight: bold;
    overflow-wrap: break-word;
  }
}
</style>
