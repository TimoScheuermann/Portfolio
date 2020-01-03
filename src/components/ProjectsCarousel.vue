<template>
  <div class="container" :class="{dark: projects[cP].dark}">
    <!-- <div class="headline">Projects</div> -->
    <img class="background" :src="projects[cP].images.background" />
    <div class="informations">
      <img class="icon" :src="projects[cP].images.icon" />
      <div class="content" :class="{ hidden: contentHidden }">
        <div class="title">{{ projects[cP].title }}</div>
        <div class="description">{{ projects[cP].description }}</div>
        <div class="readMore"></div>
      </div>
    </div>
    <div class="projectIndicators">
      <span
        v-for="index in projects.length"
        :key="index"
        :class="{ active: (--index === cP) }"
        @click="setToProject(index)"
      ></span>
      <router-link :to="{name: 'projects'}">View all Projects</router-link>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    cP: function() {
      // return 1;
      return this.currentlyActive % this.projects.length;
    }
  },
  data() {
    return {
      contentHidden: false,
      currentlyActive: 0,
      projects: [
        {
          dark: true,
          title: "DHBW Richie",
          description:
            "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
          images: {
            icon: "../img/projects/richie/icon-richie.png",
            background: "../img/projects/richie/preview3-richie.png"
          }
        },
        {
          dark: false,
          title: "Timo's Icons",
          description:
            "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
          images: {
            icon: "../img/projects/icons/icon-icons.png",
            background: "../img/projects/icons/preview2-icons.png"
          }
        },

        {
          dark: false,
          title: "NHL Stats",
          description:
            "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
          images: {
            icon: "../img/projects/cassy/icon-cassy.png",
            background: "../img/projects/cassy/preview-cassy.png"
          }
        },

        {
          dark: true,
          title: "AMS Pro",
          description:
            "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
          images: {
            icon: "../img/projects/richie/icon-richie.png",
            background: "../img/projects/richie/preview3-richie.png"
          }
        }
      ]
    };
  },
  methods: {
    checkForNextProject() {},
    setToProject: function(index) {
      this.currentlyActive = index;
    },
    nextProject: function() {
      this.contentHidden = true;
      setTimeout(() => {
        this.currentlyActive++;
        setTimeout(() => {
          this.contentHidden = false;
        }, 200);
      }, 200);

      setTimeout(() => {
        this.nextProject();
      }, 10000);
    }
  },
  mounted() {
    this.nextProject();
  }
};
</script>
<style lang="scss" scoped>
.container {
  transition: 0.5s ease-in-out;
  &.dark {
    background: var(--color);
    color: var(--paragraph);
    .informations {
      background: rgba(var(--color-rgb), 0.5);
    }
    .headline {
      background: var(--color);
    }
  }
  background: var(--paragraph);
  height: calc(100vh - 90px);
  position: relative;

  .headline {
    text-align: center;
    font-size: 40px;
    padding: 20px;
    font-weight: bold;
    z-index: 100;
    position: relative;
    background: var(--paragraph);
    width: fit-content;
    left: 50%;
    transform: translateX(-50%);
    transition: background 0.5s ease-in-out;
  }

  .informations,
  .background,
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .background {
    max-width: calc(100% - 40px);
    max-height: calc(100% - 40px);
  }

  .informations {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.19);
    background: rgba(var(--paragraph-rgb), 0.5);
    backdrop-filter: blur(50px);
    width: 400px;
    max-width: calc(100% - 40px);
    text-align: center;

    .content {
      position: relative;

      opacity: 1;
      transition: all 0.2s ease-in-out;
      max-height: 500px;
      &.hidden {
        opacity: 0;
        max-height: 0px;
      }
    }

    .icon {
      width: 70px;
      height: 70px;
      transform: translateX(-50%);
      top: -50px;
      border-radius: 15px;
    }
    .title {
      font-weight: bold;
      font-size: 1.5em;
      padding-top: 20px;
    }
    .description {
      margin: 10px 0px;

      text-align: left;
    }
    .readMore {
      color: #08f;
      border: 1px solid #08f;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 5px;
      transition: 0.2s ease-in-out;
      text-align: center;
      display: inline-block;
      &::before {
        content: "Read more";
      }
      &:hover {
        background: #08f;
        color: #fff;
      }
    }
  }
  .projectIndicators {
    position: absolute;
    bottom: 0;
    padding: 10px;
    width: calc(100% - 20px);
    text-align: center;
    $size: 18px;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: inline-block;
      &.active,
      &:hover {
        border: 14px double currentColor;
        width: 0;
        height: 0;
      }
      &.active {
        opacity: 1;
        color: #08f;
      }

      opacity: 0.5;
      border: 5px solid currentColor;
      width: $size;
      height: $size;
      transition: 0.2s ease-in-out;
      cursor: pointer;
      border-radius: 1000px;
      margin: 0px 10px;
    }
    a {
      color: #08f;
      margin-left: 10px;
      transition: 0.2s ease-in-out;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
