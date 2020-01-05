<template>
  <div class="header">Portfolio</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../variables.scss";
@media only screen and(min-width: $desktop) {
  .header {
    display: none;
  }
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding-top: var(--safe-area-inset-top);
  line-height: 50px;
  font-size: 1.2em;
  text-align: center;
  font-weight: 600;
  z-index: 1000;
  background: rgba(var(--paragraph-rgb), 0.4);
  backdrop-filter: blur(30px);
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.19);
}
</style>