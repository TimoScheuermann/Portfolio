<template>
  <div class="tc-card" :class="{ frosted: frosted }">
    <div v-if="title" class="title" :class="{ noSubtitle: !subtitle }">
      {{ title }}
    </div>
    <div v-else class="titleSlot">
      <slot name="header">
        <div tc-card-header-title-placeholder></div>
      </slot>
    </div>
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
  @Prop({ type: Boolean, default: false }) frosted!: boolean;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
@import "../../../scss/mixins";

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

  &.frosted {
    @include backdrop-blur($background);
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
  [tc-card-header-title-placeholder] {
    height: 30px;
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
    padding: 10px 0;
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
  z-index: 10;
  animation: slide-in-bck-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@keyframes slide-in-bck-center {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
