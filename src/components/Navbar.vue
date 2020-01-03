<template>
  <div class="nav">
    <router-link :to="{name: 'home'}" class="logo">
      <img src="../assets/logo.svg" />
    </router-link>
    <div class="routes">
      <router-link :to="{name: 'projects'}">Projects</router-link>
      <router-link :to="{name: 'repertoire'}">Repertoire</router-link>
      <router-link :to="{name: 'contact'}">Contact</router-link>
      <router-link :to="{name: 'github'}">GitHub</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.nav {
  position: sticky;
  user-select: none;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: rgba(var(--paragraph-rgb), 0.4);
  backdrop-filter: blur(30px);
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.19);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10vw;
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
    a {
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
</style>
