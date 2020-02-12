<template>
  <div class="project">
    <div class="title">Work Gallery</div>
    <div class="projectContent">
      <div class="gallery">
        <div
          class="item"
          v-for="(file, index) in files"
          :key="index"
          :class="{ fullscreen: file.fullscreen }"
        >
          <div class="img">
            <img :src="'../img/workgallery/' + file.fileName" />
          </div>
          <div class="content">
            <div class="project" :class="{ undefinded: !file.project }">
              {{ file.project }}
            </div>
            <div class="display">{{ file.display }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      fullScreen: -1,
      files: [
        {
          fileName: "ams button - loading unschön.gif",
          project: "AMS Pro",
          display: "Auth Button (without hidden overflow)"
        },
        {
          fileName: "ams button - loading.gif",
          project: "AMS Pro",
          display: "Auth Button"
        },
        {
          fileName: "customTooltip.gif",
          display: "Custom Tooltip"
        },
        {
          fileName: "how2writeComments.gif",
          project: "DHBW Richie",
          display: "Comment Animation"
        },
        {
          fileName: "iconButton_new.gif",
          project: "DHBW Richie",
          display: "Redesigned Button Animation"
        },
        {
          fileName: "iconButton_old.gif",
          project: "DHBW Richie",
          display: "Old Button Animation"
        },
        {
          fileName: "input_new.gif",
          project: "DHBW Richie",
          display: "Redesigned Input Animation"
        },
        {
          fileName: "loading.gif",
          project: "DHBW Richie",
          display: "Simple Loading Animation"
        },
        {
          fileName: "login_new.gif",
          project: "DHBW Richie",
          display: "Redesigned Login"
        },
        {
          fileName: "new Hamburger Animation.gif",
          project: "DHBW Richie",
          display: "Additional Navigation Animation"
        },
        {
          fileName: "search.gif",
          project: "DHBW Richie",
          display: "Search Active Indicator"
        },
        {
          fileName: "custom checkbox.gif",
          project: "Portfolio",
          display: "Animated Checkbox"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../shared.scss";
@import "../../../scss/variables.scss";

@media #{$isMobile} {
  .gallery {
    columns: 1;
  }
}
@media #{$isDesktop} {
  .gallery {
    columns: 3;
  }
}

$spaceing: 40px;
.gallery {
  column-gap: $spaceing;
  margin-top: 30px;

  .item {
    background: var(--paragraph);
    margin-bottom: $spaceing;
    box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    overflow: hidden;
    break-inside: avoid-column;

    &.fullscreen {
      color: red;
    }

    .img {
      width: 100%;
      position: relative;
      cursor: pointer;
      overflow: hidden;
      img {
        width: inherit;
      }
    }
    .content {
      padding: 20px;
      text-align: center;
      .project {
        display: inline-block;
        color: $primary;
        text-align: center;
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid currentColor;
        margin-bottom: 10px;

        &.undefinded {
          color: var(--color);
          opacity: 0.5;
          &::before {
            content: "Not Specific";
          }
        }
      }
      .display {
        font-weight: 600;
      }
    }
  }
}
</style>
