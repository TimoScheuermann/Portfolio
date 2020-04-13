<template>
  <div>
    <tc-header title="Projects" />
    <div content>
      <tc-headline :title="projects.length + ' Projects'" />
      <tc-grid minWidth="400">
        <tc-card
          v-for="proj in projects"
          :key="proj.title"
          :title="proj.title"
          :subtitle="proj.description"
        >
          <tc-button :to="{ name: proj.routeName }" name="Read more" />
          <img slot="media" :src="proj.images.preview" />
        </tc-card>
      </tc-grid>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCCard from "@/components/tc/card/TC-Card.vue";
import projects from "@/projects";
import { Project } from "@/models/Projects/Project.model";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import PSlideshow from "@/components/shared/P-Slideshow/P-Slideshow.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import "swiper/css/swiper.css";
@Component({
  components: {
    "tc-card": TCCard,
    "tc-header": TCHeader,
    "tc-button": TCButton,
    "tc-grid": TCGrid,
    "tc-headline": TCHeadline
  }
})
export default class Projects extends Vue {
  public readonly projects: Project[] = projects;
}
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
</style>
