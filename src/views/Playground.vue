<template>
  <div class="playground">
    <div class="phone">
      <tc-navbar>
        <b slot="logo">TC Components</b>
      </tc-navbar>
      <div class="content">
        <tc-card title="Welcome" :rounded="true"> </tc-card>
        <tc-revealer title="Revealer"></tc-revealer>
        <tc-headline title="Navigation"></tc-headline>
        <tc-list>
          <tc-list-item icon="gears" title="Settings" routeName="d" />
          <tc-list-item icon="users" title="Friends" routeName="d" />
          <tc-list-item icon="chat-bubbles" title="Chats" routeName="d" />
        </tc-list>
        <br />
        <tl-flow>
          <tc-spinner size="20" />
        </tl-flow>
        <h1>Interactions</h1>
        <tc-button name="Like" icon="heart" tfbackground="error" />
        <tc-button name="Follow" icon="reply" tfbackground="success" />
        <br />
        <br />
        <tc-card title="Stacked on top" rounded="true">
          <tc-steps :current="1">
            <tc-step-item />
            <tc-step-item />
          </tc-steps>
        </tc-card>
      </div>
      <div class="grow"></div>
      <tc-tabbar>
        <tc-tabbar-item name="Home" icon="house" />
        <tc-tabbar-item name="Home" icon="house" />
        <tc-tabbar-item name="Home" icon="house" />
        <tc-tabbar-item name="Home" icon="house" />
      </tc-tabbar>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Playground extends Vue {
  public current = 1;
}
</script>
<style lang="scss" scoped>
.playground {
  height: 100vh;
  background: $error;
  display: grid;
  place-content: center;
}
.tc-navbar {
  position: static;
  min-height: 50px;
}
.tc-tabbar {
  position: absolute;
  bottom: 0px;
}
.phone {
  width: calc(1125px / 3.2);
  height: calc(2436px / 3.2);
  background: $background;
  display: flex;
  flex-direction: column;
  position: relative;

  .grow {
    flex-grow: 1;
  }
  .content {
    padding: 20px;
    z-index: 1;
  }

  &::before {
    top: -71px;
    left: -21px;
    right: -21px;
    bottom: -31px;
    position: absolute;
    z-index: 0;
    content: '';
    background-image: url('http://localhost:8080/assets/projects/workgallery/preview_mobile.png');
    background-size: cover;
    background-position: center;
    overflow: visible;
  }
}
</style>
