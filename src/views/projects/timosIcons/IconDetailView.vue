<template>
  <div>
    <div class="project" v-if="icon">
      <div class="title">
        <span>Timo's Icons</span>
        <span class="iconName">{{ icon.name }}</span>
        <span class="back" @click="$router.push({ name: 'timosicons' })">
          Overview
          <i class="ti ti-arrow"></i>
        </span>
      </div>

      <div class="display">
        <div class="actions">
          <div class="html tile">
            <div class="title">HTML</div>
            <div class="htmlCode">
              <div class="code">
                <span>&lt;i class="{{ iconName }}"></span>
                <div class="code">
                  <span
                    v-for="(i, index) in paths"
                    :key="index"
                  >&lt;span class="path{{ ++index }}">&lt;/span></span>
                </div>
                <span>&lt;/i></span>
              </div>
            </div>
            <div class="copy">
              <i class="ti ti-add">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>Click to copy
            </div>
          </div>
          <!-- End HTML Code -->
          <div class="startUsing tile">
            <div class="img">
              <img src="img/projects/icons/preview2-icons.png" />
            </div>
            <div class="title">Get Started</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              voluptatum nam minus esse alias, molestias commodi blanditiis
              similique ea aliquam, veritatis molestiae quia aspernatur quas.
              Nulla minima fugiat iusto magni.
            </p>
            <div class="button">Start using Timo's Icons</div>
          </div>
          <!-- End Start Using -->
        </div>
        <!-- End Actions -->
        <div class="examples">
          <div class="sizes tile">
            <i :class="iconName" v-for="(i, index) in Array(5)" :key="index">
              <span v-for="(i, index) in paths" :key="index" :class="'path' + ++index"></span>
            </i>
          </div>
          <!-- End Sizes -->
          <div class="backgrounds">
            <div class="border tile" v-for="(i, index) in Array(4)" :key="index">
              <i :class="iconName">
                <span v-for="(i, index) in paths" :key="index" :class="'path' + ++index"></span>
              </i>
            </div>
          </div>
          <!-- End Backgrounds -->
          <div class="phone tile">
            <div class="title">On Mobile</div>
            <div class="img">
              <img src="../../../assets/projects/timosicons/phone-preview.png" />
              <div class="icon">
                <i class="ti ti-users">
                  <span v-for="(i, index) in paths" :key="index" :class="'path' + ++index"></span>
                </i>
                <span>{{ icon }}</span>
              </div>
            </div>
          </div>
          <!-- End Phone -->
        </div>
        <!-- End Examples -->
      </div>
      <!-- End Display -->
    </div>
    <!-- End Icon Exists -->
    <div class="project" v-else>
      <div class="title">
        <span>Timo's Icons</span>
        <span class="iconName">Not Found :/</span>
        <span class="back" @click="$router.push({ name: 'timosicons' })">
          Overview
          <i class="ti ti-arrow"></i>
        </span>
      </div>
      <div class="notFound">
        <div class="img">
          <img src="../../../assets/projects/timosicons/timosicons.svg" />
        </div>
        <div class="content">
          <div class="title">
            <i class="ti ti-error">
              <span class="path1"></span>
              <span class="path2"></span>
              <span class="path3"></span>
              <span class="path4"></span>
            </i>
            Icon not found
          </div>
          <p>
            The Icon you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          <div class="button" @click="$router.push({ name: 'timosicons' })">Icon Overview</div>
        </div>
      </div>
    </div>
    <!-- End Icon Not Found -->
  </div>
</template>
<script>
export default {
  computed: {
    iconName() {
      return this.icon.iconName;
    },
    paths() {
      return Array(this.icon.paths);
    }
  },
  data: () => {
    return {
      icon: undefined,
      test: `<span style="color: red">Hallo</span>`
    };
  },
  mounted() {
    const name = this.$route.params.icon;
    const icon = this.$store.state.icons.filter(
      x => x.iconName == name || x.name == name
    );
    this.icon = icon[0];
  }
};
</script>

<style lang="scss" scoped>
@import "../shared.scss";
@import "../../../icons/style.css";

img {
  user-select: none;
  -webkit-user-drag: none;
}

.notFound {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  .img,
  .content {
    width: 400px;
  }
  .img {
    img {
      max-width: 100%;
    }
  }
  .content {
    text-align: center;
    margin-top: 20px;
    .title {
      font-size: 2.2em;
      font-weight: 700;
      i {
        color: red;
      }
    }
    p {
      opacity: 0.8;
    }
    .button {
      border: 1px solid $primary;
      padding: 5px 10px;
      border-radius: 5px;
      color: $primary;
      display: inline-block;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
        color: #fff;
        background: $primary;
      }
    }
  }
}

.tile {
  border-radius: 5px;
  padding: 10px;
  background: var(--background);
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.19);
}

.title {
  .iconName {
    color: $primary;
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid rgba(var(--color-rgb), 0.5);
  }
  .back {
    float: right;
    opacity: 0.7;
    transition: 0.2s ease-in-out;
    i {
      transition: 0.2s ease-in-out;
    }
    cursor: pointer;
    &:hover {
      opacity: 1;
      i {
        color: $primary;
      }
    }
  }
}

.display {
  margin: 20px 10%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  .actions {
    .startUsing {
      margin-top: 30px;
      border-radius: 5px;
      padding: 20px;
      text-align: center;
      .img {
        img {
          max-width: 100%;
        }
      }
      .title {
        margin-top: 10px;
        font-size: 20px;
        font-weight: 600;
      }
      p {
        text-align: left;
      }
      .button {
        user-select: none;
        display: inline-block;
        margin-top: 10px;
        color: #fff;
        background: $primary;
        border: 1px solid $primary;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        &:hover {
          filter: brightness(110%);
        }
      }
    }
    .html {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .copy {
        user-select: none;
        margin-top: 10px;
        color: $primary;
        border: 1px solid $primary;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        &:hover {
          color: #fff;
          background: $primary;
        }
        i {
          margin-right: 10px;
        }
      }
      .htmlCode {
        overflow: hidden;
        background: var(--paragraph);
        border-radius: 5px;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 10px 0;
        .code {
          margin: 0 15px;
          width: fit-content;
          text-align: left;
          font-family: "Courier New", Courier, monospace;
          span {
            display: block;
          }
        }
      }
    }
  }
  .examples {
    padding: 0 10px;

    .phone {
      margin-top: 30px;
      .title {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 15px;
      }
      .img {
        position: relative;
        img {
          max-width: 100%;
        }
        .icon {
          position: absolute;
          background: red;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          left: calc(50% + 100px);
          transform: translateX(-50%);
          bottom: 100px;
          i {
            font-size: 20px;
          }
          span {
            font-size: 14px;
          }
          display: none;
        }
      }
    }

    .sizes,
    .backgrounds {
      display: grid;
    }
    .sizes {
      margin-bottom: 30px;
      grid-template-columns: repeat(5, 1fr);
      justify-content: center;
      align-items: center;
      i {
        opacity: 0.6;
        transition: 0.2s ease-in-out;

        &:nth-child(1) {
          font-size: 3em;
        }
        &:nth-child(2) {
          font-size: 4em;
        }
        &:nth-child(3) {
          font-size: 5em;
        }
        &:nth-child(4) {
          font-size: 6em;
        }
        &:nth-child(5) {
          font-size: 7em;
        }

        &:hover {
          opacity: 1;
        }
      }
    }
    .backgrounds {
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
      .border {
        i {
          border-radius: 5px;
          display: block;
          text-align: center;
          padding: 15px 0;
          font-size: 4em;
        }
        &:nth-child(2) {
          i {
            color: rgba(var(--color-rgb), 0.9);
            background: var(--paragraph);
          }
        }
        &:nth-child(3) {
          i {
            color: #fff;
            background: $primary;
          }
        }
        &:nth-child(4) {
          i {
            color: #fff;
            background: #111;
          }
        }
      }
    }
  }
}
</style>
