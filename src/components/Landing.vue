<template>
  <div class="landing">
    <div class="title">Timo Scheuermann</div>
    <div class="subtitle">Fullstack Webdeveloper</div>
  </div>
</template>
<style lang="scss" scoped>
@import "../scss/variables.scss";
@media #{$isDesktop} {
  .landing {
    height: 300px;
  }
}
@media #{$isMobile} {
  .landing {
    height: 150px;
  }
}

.landing {
  margin-top: -100px;
  padding-top: 100px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &::before {
    position: absolute;
    content: "";
    margin-top: -100px;
    padding-top: 100px;
    left: -100px;
    top: -100px;
    bottom: -100px;
    right: -100px;
    filter: blur(20px);
    background: url("../assets/landing.gif");
    background-position: center;
    background-size: cover;
    // animation: landingBackground-Anim 5s ease-in-out 0s infinite alternate both;
    z-index: -1;
  }

  .title,
  .subtitle {
    color: #fff;
    font-weight: 600;
  }
  .title {
    font-size: 2.1em;
  }
  .subtitle {
    opacity: 0.8;
    font-size: 1.2em;
  }
}
</style>
