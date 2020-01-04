<template>
  <div class="nav">
    <router-link :to="{name: 'home'}" class="logo">
      <img src="../assets/logo.svg" />
    </router-link>
    <div class="routes">
      <router-link :to="{name: 'home'}">
        <span class="icon"></span>
        <span class="title">Home</span>
      </router-link>
      <router-link :to="{name: 'projects'}">
        <span class="icon"></span>
        <span class="title">Projects</span>
      </router-link>
      <router-link :to="{name: 'repertoire'}">
        <span class="icon"></span>
        <span class="title">Repertoire</span>
      </router-link>
      <router-link :to="{name: 'contact'}">
        <span class="icon"></span>
        <span class="title">Contact</span>
      </router-link>
      <router-link :to="{name: 'github'}">
        <span class="icon"></span>
        <span class="title">GitHub</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media only screen and (max-width: 700px) {
  .nav {
    position: fixed;
    bottom: 0;
    justify-content: space-evenly;
    padding-bottom: var(--safe-area-inset-bottom);
    .logo {
      display: none;
    }
    .routes {
      display: flex;
      justify-content: space-around;
      width: 100%;
      align-items: center;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--color);
        text-decoration: none;
        &.router-link-exact-active {
          color: #08f;
        }

        &:nth-child(1) {
          .icon {
            mask-image: url("../assets/nav/projects.svg");
          }
        }
        &:nth-child(2) {
          .icon {
            mask-image: url("../assets/nav/projects.svg");
          }
        }
        &:nth-child(3) {
          .icon {
            mask-image: url("../assets/nav/code.svg");
          }
        }
        &:nth-child(4) {
          .icon {
            mask-image: url("../assets/nav/contact.svg");
          }
        }
        &:nth-child(5) {
          .icon {
            mask-image: url("../assets/nav/github.svg");
          }
        }

        $size: 20px;
        .icon {
          width: $size;
          height: $size;
          background: currentColor;
          mask-size: contain;
          mask-position: center;
          mask-repeat: no-repeat;
        }

        .title {
          font-size: 14px;
          font-weight: normal;
        }
      }
    }
  }
}

@media only screen and (min-width: 701px) {
  .nav {
    top: 0;
    position: sticky;
    padding: 20px 10vw;
    justify-content: space-between;
    padding-top: calc(20px + var(--safe-area-inset-top));
    .logo {
      height: 100%;
      background: var(--color);
      mask-image: url("../assets/logo.svg");
      mask-size: contain;
      img {
        opacity: 0;
        max-height: 100%;
      }
    }
    .routes {
      display: block;

      .icon {
        display: none;
      }
      a {
        &:nth-child(1) {
          display: none;
        }
        &:not(:first-child) {
          margin-left: 40px;
        }
        position: relative;
        font-size: 1.2em;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        font-weight: 600;
        &:hover,
        &.router-link-exact-active {
          &::after {
            width: 100%;
          }
        }
        &.router-link-exact-active {
          &::after {
            height: 3px;
            bottom: -3px;
            opacity: 1;
          }
        }

        &::after {
          transition: 0.2s ease-in-out;
          position: absolute;
          content: "";
          background: currentColor;
          width: 0%;
          height: 1px;
          left: 0;
          bottom: 0;
          opacity: 0.5;
        }
      }
    }
  }
}

.nav {
  user-select: none;
  z-index: 1000;
  left: 0;
  right: 0;
  height: 50px;
  background: rgba(var(--paragraph-rgb), 0.4);
  backdrop-filter: blur(30px);
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.19);
  display: flex;
  align-items: center;
}
</style>
