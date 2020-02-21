<template>
  <div class="tc-preview">
    <input type="checkbox" :id="'tc-preview_' + uuid" />
    <label :for="'tc-preview_' + uuid" class="preview">
      <div class="header" :style="{ 'background-image': 'url(' + img + ')' }">
        <div class="title">Timo's Icons {{ uuid }}</div>
      </div>
    </label>
    <div class="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quos
        eveniet magni! Ipsam est eos alias saepe nostrum pariatur delectus nam
        in veritatis ex neque temporibus voluptatum provident, praesentium
        minus.
      </p>
      <tc-headline title="Hallo" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, ut
        laboriosam temporibus illum modi asperiores ab ratione dolore
        voluptates, quibusdam eos tempore nostrum tenetur consectetur assumenda
        atque natus earum eveniet! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Quo, harum assumenda doloribus mollitia iusto velit
        delectus voluptatem. Voluptate excepturi itaque ipsam asperiores quos
        officiis nostrum, assumenda, hic ex inventore laboriosam?
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCButton from "../button/TC-Button.vue";
import projects from "@/projects";
import TCHeadline from "../headline/TC-Headline.vue";
import uuid from "../uuid.vue";
@Component({
  components: {
    "tc-button": TCButton,
    "tc-headline": TCHeadline
  },
  mixins: [uuid]
})
export default class TCPreview extends Vue {
  img: string = projects[0].images.icon;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.tc-preview {
  overflow: hidden;
  & > input {
    display: none;
    &:checked ~ {
      .preview {
        position: fixed;
        top: 0;
        right: 0;
        left: 45px;
        padding-top: 50px;
      }
      .content {
        z-index: 100;
        background: $background;
        max-height: calc(100vh - 390px);
        position: fixed;
        top: 350px;
        padding: 20px;
        right: 0;
        left: 45px;
        bottom: 0;
      }
    }
  }
  & > .preview {
    border-radius: $border-radius;
    transition: 0.2s ease-in;
    display: block;
    height: 300px;
    background: rgb(53, 196, 231);
    .header {
      height: 100%;
      background: {
        position: center;
        size: contain;
        repeat: no-repeat;
      }
      .title {
        margin: 20px;
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }

  & > .content {
    max-height: 0;
    min-height: 0;
    transition: 0.2s ease-in-out;
  }
}
</style>
