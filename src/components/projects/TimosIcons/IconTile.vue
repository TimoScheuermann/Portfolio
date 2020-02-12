<template>
  <tc-card rounded="true" :hover="true" :title="icon.name" class="iconTile">
    <div class="icon">
      <i :class="'ti-' + icon.name"></i>
    </div>
    <div class="css">
      <div class="text">\{{ icon.css }}</div>
      <i :class="'ti-' + icon.name"></i>
    </div>
    <div class="spacer"></div>
    <tc-button
      name="More"
      :to="{ name: 'timosiconsdetail', params: { icon: icon.name } }"
    ></tc-button>
  </tc-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Icon } from "@/models/Icons/Icon.model";
import TCButton from "@/components/tc/button/TC-Button.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
@Component({
  components: {
    "tc-button": TCButton,
    "tc-card": TCCard
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
  /deep/ .slot {
    height: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .spacer {
    flex-grow: 1 !important;
  }
  .icon {
    i {
      color: $primary;
      font-size: 35px;
    }
  }
  .css {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
    padding: 5px 0;

    $border: 1px solid rgba($color, 0.4);
    border: {
      bottom: $border;
      top: $border;
    }
  }
}
</style>
