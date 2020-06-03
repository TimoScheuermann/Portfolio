<template>
  <tc-card :title="project.title" dark="true" rounded="true">
    <img :src="project.preview" />
    <div class="project-description">
      <div class="text">
        {{ project.description }}
      </div>
    </div>
  </tc-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCCard from "../tc/card/TC-Card.vue";
import { Project } from "@/models/Projects/Project.model";
@Component({
  components: {
    "tc-card": TCCard
  }
})
export default class HomeProjectCard extends Vue {
  @Prop() project!: Project;
}
</script>
<style lang="scss" scoped>
.tc-card {
  &:hover {
    /deep/ .project-description {
      bottom: 0px;
    }
  }
  /deep/ .project-description {
    transition: bottom 0.4s;
    position: absolute;
    bottom: -100%;
    // bottom: 0px;
    padding: 10px;
    border-top: 1px solid rgba(#fff, 0.4);
    background: rgba(lighten(#111, 20%), 0.5);
    backdrop-filter: blur(20px);
    // margin: 0 -40px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    .text {
      padding: 0 10px;
    }
  }
}
</style>
