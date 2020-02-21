<template>
  <div content class="repertoire">
    <tc-header title="Repertoire"></tc-header>

    <div class="tools">
      <div class="tool" v-for="(tool, index) in tools" :key="index">
        <div
          class="background"
          :style="{ 'background-image': `url(${tool.img})` }"
        >
          <!-- <img :src="tool.img" /> -->
        </div>
        <div class="content">
          <div class="logo">
            <img :src="tool.img" />
          </div>
          <div class="title">{{ tool.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TCHeader from "@/components/tc/header/TC-Header.vue";
export default {
  components: {
    "tc-header": TCHeader
  },
  data() {
    return {
      tools: [
        {
          name: "Adobe XD",
          img: "../img/tools/adobexd.png"
        },
        {
          name: "VS Code",
          img: "../img/tools/vscode.png"
        },
        {
          name: "Photoshop",
          img: "../img/tools/photoshop.svg"
        },
        {
          name: "CSS 3",
          img: "../img/tools/css.png"
        },
        {
          name: "HTML 5",
          img: "../img/tools/html.png"
        },
        {
          name: "JavaScript",
          img: "../img/tools/js.png"
        },
        {
          name: "TypeScript",
          img: "../img/tools/ts.png"
        },
        {
          name: "Vue.js",
          img: "../img/tools/vuejs.png"
        },
        {
          name: "Angular",
          img: "../img/tools/angular.png"
        },
        {
          name: "Nest.js",
          img: "../img/tools/nest.svg"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../scss/variables.scss";

@media #{$isMobile} {
  .tools {
    grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
  }
}
@media #{$isDesktop} {
  .tools {
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  }
}

.tools {
  max-width: 100%;
  display: grid;
  grid-auto-rows: 1fr;
  grid-gap: 20px;
  margin: 20px;
  &::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  .tool {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.19);
    background: var(--paragraph);
    .background,
    .content {
      width: 100%;
      height: 100%;
    }
    .background {
      position: absolute;
      background: var(--paragraph);
      background-size: cover;
      background-position: center;
      transform: scale(2);
      filter: blur(20px);
    }
    .content {
      position: relative;
      // backdrop-filter: blur(50px);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .logo {
        $size: 45px;
        img {
          filter: drop-shadow(0 0 0.75rem #000000aa);
          max-width: $size;
          max-height: $size;
        }
      }
      .title {
        font-weight: 600;
        margin-top: 10px;
        color: #fff;
      }
    }
  }
}
</style>
