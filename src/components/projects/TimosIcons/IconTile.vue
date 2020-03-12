<template>
  <router-link
    v-if="!selectAble"
    class="timosicons--icontile"
    :to="{ name: 'timosiconsdetail', params: { icon: icon.name } }"
  >
    <i :class="'icon ti-' + icon.name"></i>
    <div class="name">{{ icon.name.split("-").join(" ") }}</div>
  </router-link>
  <div v-else class="timosicons--icontile timosicons--selectable">
    <input type="checkbox" :id="'timosicons--icontile-cb-' + uuid" />
    <label :for="'timosicons--icontile-cb-' + uuid">
      <div class="indicator">
        <i class="ti-checkmark" />
      </div>
      <i :class="'icon ti-' + icon.name"></i>
      <div class="name">{{ icon.name.split("-").join(" ") }}</div>
    </label>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Icon } from "@/models/Icons/Icon.model";
import uuidVue from "../../tc/uuid.vue";
@Component({
  mixins: [uuidVue]
})
export default class IconTile extends Vue {
  @Prop() icon!: Icon;
  @Prop() detailView!: boolean;
  @Prop() selectAble!: boolean;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.timosicons--selectable {
  label {
    cursor: pointer;
    position: relative;
    .indicator {
      transform: scale(0);
      transition: 0.2s ease-in-out;
      color: #fff;
      background: $primary;
      position: absolute;
      top: -30px;
      right: -30px;
      $scale: 20px;
      width: $scale;
      height: $scale;
      border-radius: $scale;
      text-align: center;
      i {
        font-size: 12px;
        line-height: $scale;
      }
    }
  }
  input {
    display: none;
  }
  input:checked + label {
    .icon {
      color: $primary;
    }
    .indicator {
      transform: scale(1);
    }
  }
}
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
  }
}
</style>
