<template>
  <div class="projects">
    <project
      v-for="(proj, index) in projects"
      :key="index"
      :img="proj.images.background"
      :title="proj.title"
      :desc="proj.description"
      :dark="proj.dark"
      :route="proj.routeName"
    ></project>
  </div>
</template>
<script>
import Project from "@/components/Project";

export default {
  components: {
    project: Project
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../variables.scss";
@media only screen and(max-width: $mobile) {
  .projects {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and(min-width: $desktop) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}

.projects {
  display: grid;
  grid-gap: 10px;
  margin: 10px 0px;
}
</style>
