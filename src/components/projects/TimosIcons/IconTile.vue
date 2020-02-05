<template>
  <div class="iconTile">
    <div class="icon">
      <span :class="'ti-' + icon.name"></span>
    </div>
    <div class="name">{{ icon.name }}</div>
    <div class="css">
      <div class="text">\{{ icon.css }}</div>
      <div class="glyph">
        <span :class="'ti-' + icon.name"></span>
      </div>
    </div>
    <tc-button
      :navigation="{ name: 'More', destiny: {name: 'timosiconsdetail', params: { icon: icon.name } } }"
    ></tc-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCButton from "../../shared/TC-Button.vue";
import { Icon } from "../../../models/Icons/Icon.model";
@Component({
  components: {
    "tc-button": TCButton,
  }
})
export default class IconTile extends Vue {
  @Prop() icon!: Icon;
  @Prop() detailView!: boolean;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.iconTile {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $paragraph;
  border-radius: $border-radius;
  padding: 20px;
  transition: .2s ease-in-out;
  &:hover {
    box-shadow: 4px 8px 20px rgba(0,0,0,.19);
  }
  .icon {
    span {
      color: $primary;
      font-size: 35px;
    }
  }
  .name {
      margin: 5px 0;
      font-weight: bold;
      opacity: .8;
  }
  .css {

      width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
    padding: 5px 0;

    $border: 1px solid rgba($color, .4);
    border: {
        bottom: $border;
        top: $border;
    }
    .text {

    }
    .glyph {
      .span {
      }
    }
  }
}
</style>
