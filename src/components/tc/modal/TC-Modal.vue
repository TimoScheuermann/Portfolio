<template>
  <div class="tc-modal" :class="{ 'tc-modal--opened': opened }">
    <div class="background" @click="close()"></div>
    <div class="container">
      <div class="close" @click="close()">
        <i class="ti-cross" />
      </div>
      <div class="head" :id="id">
        <div v-if="title" class="title">
          {{ title }}
        </div>
        <div v-else class="titleSlot">
          <slot name="header" />
        </div>
        <div v-if="subtitle" class="subtitle">{{ subtitle }}</div>
      </div>
      <div class="content">
        <slot />
      </div>
      <div class="buttons">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import "./swipe-events.js";
import uuidVue from "../uuid.vue";

@Component({
  mixins: [uuidVue]
})
export default class TCModal extends Vue {
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() value!: boolean;

  public bodyOverflowBefore: string | null = document.body.style.overflow;
  public uuid!: string;
  public opened: boolean = this.value;
  public id: string = "modal_" + this.uuid + "_head";

  @Watch("value")
  changed(updated: any, old: any) {
    this.opened = updated;
    document.body.style.overflow = this.opened
      ? "hidden"
      : this.bodyOverflowBefore!;
    if (this.opened) {
      document.getElementById(this.id)!.focus();
    }
  }

  mounted() {
    document.getElementById(this.id)!.addEventListener("swiped-down", e => {
      this.close();
    });
  }

  close() {
    this.opened = false;
    this.update();
  }
  update() {
    this.$emit("input", this.opened);
  }
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.tc-modal {
  position: fixed;
  z-index: 1000;
  visibility: hidden;
  &.tc-modal--opened {
    visibility: visible;
  }

  @media #{$isMobile} {
    .container {
      transition: transform 0.3s ease-in-out;
      transform: translateY(100%);
      max-height: calc(
        100vh - 60px - env(safe-area-inset-top) - env(safe-area-inset-bottom)
      );
    }
    &.tc-modal--opened {
      bottom: 0;
      left: 0;
      right: 0;

      .container {
        transform: translateY(0%);
        border-top: {
          left-radius: 10px;
          right-radius: 10px;
        }
        .buttons {
          .tc-button {
            display: block;
            margin: 10px 3px;
          }
        }
      }
    }
  }

  @media #{$isDesktop} {
    .container {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 0.2s ease-in-out;
    }
    &.tc-modal--opened {
      .container {
        transform: translate(-50%, -50%) scale(1);
        max-height: 60vh;
        max-width: 60vw;
        border-radius: $border-radius;
        .buttons {
          .tc-button {
            margin-top: 15px;
          }
        }
      }
    }
  }
  &.tc-modal--opened {
    .background {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.84);
    }
  }
  .container {
    .close {
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: 10px;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
      @media #{$isMobile} {
        // display: none;
      }
    }

    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
    z-index: 1001;
    background: $background;

    padding: {
      top: 10px;
      right: calc(15px + env(safe-area-inset-right));
      left: calc(15px + env(safe-area-inset-left));
      bottom: calc(15px + env(safe-area-inset-bottom));
    }
    .head {
      margin: 0 14px;
      .title,
      .subtitle {
        text-align: center;
        font-weight: bold;
      }
      .title {
        font-size: 1.5em;
      }
      .subtitle {
        opacity: 0.7;
        margin: 5px 0;
      }
    }
    .content {
      padding: 20px 0;
      overflow: {
        y: auto;
        x: visible;
      }
      &::-webkit-scrollbar {
        display: none;
      }
      img,
      video {
        max-width: 100%;
      }
    }
    .buttons {
      text-align: center;
    }
  }
}
</style>
