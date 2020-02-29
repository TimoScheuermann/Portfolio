<template>
  <div class="tc-card">
    <div v-if="title" class="title" :class="{ noSubtitle: !subtitle }">
      {{ title }}
    </div>
    <div v-else class="titleSlot"><slot name="header" /></div>
    <div v-if="subtitle" class="subtitle">{{ subtitle }}</div>
    <div class="media"><slot name="media" /></div>
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
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.tc-card {
  background: $background;
  box-shadow: $shadow;
  border-radius: $border-radius;
  text-align: center;
  max-width: 100%;
  overflow: auto;
  padding: 30px {
    top: 0;
  }

  &[rounded="true"] {
    border-radius: $border-radius;
  }
  &[hover="true"] {
    transition: 0.2s ease-in-out;
    &:hover {
      box-shadow: $shadow-hover;
    }
  }

  .title {
    padding-top: 30px;
    font-size: 20px;
    font-weight: bold;
    &.noSubtitle {
      margin-bottom: 20px;
    }
  }
  .subtitle {
    line-height: 40px;
  }
  .media,
  .slot {
    img,
    video {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .media {
    margin: 0 -30px;
    img,
    video {
      width: 100%;
    }
  }
}
</style>
