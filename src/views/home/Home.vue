<template>
  <div class="home">
    <p-landing
      title="Timo Scheuermann"
      subtitle="Fullstack Webdeveloper"
      fullscreen="true"
    ></p-landing>
    <div class="projects">
      <h1>Projects</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PLanding from "@/components/common/P-Landing.vue";
@Component({
  components: {
    "p-landing": PLanding
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
@import "../../scss/variables";

.home {
  background: #000;
  color: $paragraph;
  text-align: center;
  .projects {
    height: 200px;
  }
}
</style>
