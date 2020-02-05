<template>
  <div class="container" :class="{ dark: projects[cP].dark }">
    <!-- <div class="headline">Projects</div> -->
    <img class="background" :class="{ animated: animated }" :src="projects[cP].images.background" />
    <div class="informations" :class="{ hidden: contentHidden }">
      <img class="icon" :src="projects[cP].images.icon" />
      <div class="content">
        <div class="title">{{ projects[cP].title }}</div>
        <div class="description">{{ projects[cP].description }}</div>
        <div class="readMore"></div>
      </div>
    </div>
    <div class="projectIndicators">
      <span
        v-for="index in projects.length"
        :key="index"
        :class="{ active: --index === cP }"
        @click="setToProject(index)"
      ></span>
      <router-link :to="{ name: 'projects' }">View all Projects</router-link>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    cP: function() {
      // return 1;
      return this.currentlyActive % this.projects.length;
    },
    projects() {
      return this.$store.state.projects;
    }
  },
  data() {
    return {
      contentHidden: false,
      animated: false,
      currentlyActive: 0
    };
  },
  methods: {
    checkForNextProject() {},
    setToProject: function(index) {
      this.currentlyActive = index;
    },
    nextProject: function() {
      this.contentHidden = true;
      this.animated = false;
      setTimeout(() => {
        this.animated = true;
      }, 10);
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
@import "../scss/variables.scss";
@media #{$isMobile} {
  .container {
    height: calc(
      100vh - 90px - 50px - var(--safe-area-inset-bottom) -
        var(--safe-area-inset-top)
    );
  }
}
@media #{$isDesktop} {
  .container {
    height: calc(100vh - 90px);
  }
}

.container {
  transition: 0.5s ease-in-out;
  &.dark {
    color: var(--paragraph);
    &::before {
      // transform: scale(1);
      opacity: 1;
    }
    .informations {
      background: rgba(var(--color-rgb), 0.5);
    }
    .headline {
      background: var(--color);
    }
  }

  &::before {
    position: absolute;
    content: "";
    border-radius: calc(100vw + 100vh);
    top: -100vh;
    left: -100vw;
    right: -100vw;
    bottom: -100vh;
    background: var(--color);
    transition: 1s ease-in-out;
    // transform: scaleX(0.5) scaleY(0);
    opacity: 0;
  }

  background: var(--paragraph);
  overflow: hidden;
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
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .background {
    position: absolute;
    max-width: calc(100% - 40px);
    max-height: calc(100% - 40px);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 0.2s ease-in-out;
    &.animated {
      opacity: 1;
      animation: bgAnim 10s ease-in-out both;
    }
  }

  @keyframes bgAnim {
    0% {
      top: -100vh;
      transform: translate(-50%, -50%) scale(0.5);
    }
    20%,
    90% {
      top: 50%;
      transform: translate(-50%, -50%) scale(0.5);
    }
    25%,
    85% {
      top: 50%;
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      top: 100vh;
      transform: translate(-50%, -50%) scale(0.5);
    }
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
    transition: transform 0.2s ease-in-out;
    &.hidden {
      transform: translate(-50%, -50%) rotateX(90deg);
    }

    .content {
      position: relative;
      opacity: 1;
      transition: max-height 0.2s ease-in-out;
      max-height: 500px;
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
      color: $primary;
      border: 1px solid $primary;
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
        background: $primary;
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
        color: $primary;
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
      color: $primary;
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
