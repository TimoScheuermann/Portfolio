<template>
  <div>
    <h1>Contact</h1>
    <tc-button :navigation="{name: 'Google.com', destiny: 'https://google.com'}"></tc-button>
    <tc-button :navigation="{name: 'GitHub', destiny: { name: 'github' }}"></tc-button>
    <tc-card
      title="Portfolio"
      subtitle="Fun Project about my work"
      :navigation="{name: 'GitHub', destiny: { name: 'github' }}"
    >
      <img :src="'../img/projects/richie/preview3-richie.png'" />
    </tc-card>
    <tc-card
      title="Portfolio"
      subtitle="Fun Project about my work"
      :navigation="{name: 'GitHub', destiny: { name: 'github' }}"
      mode="dark"
    ></tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCButton from "../components/shared/TC-Button.vue";
import TCCard from "../components/shared/TC-Card.vue";
import PNavbar from "../components/common/P-Navbar.vue";
@Component({
  components: {
    "tc-button": TCButton,
    "tc-card": TCCard
  }
})
export default class ContactView extends Vue {}
</script>

<style lang="scss" scoped>
@import "../scss/variables";
h1 {
  color: $primary;
}
@media #{$isMobile} {
  h1 {
    &::before {
      content: "isMobile";
    }
  }
}
@media #{$isDesktop} {
  h1 {
    &::before {
      content: "isDesktop";
    }
  }
}
</style>
