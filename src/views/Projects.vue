<template>
  <div class="projects">
    <project
      v-for="(proj, index) in projects"
      :key="index"
      :img="proj.images.background"
      :title="proj.title"
      :desc="proj.description"
      :dark="proj.dark"
    ></project>
  </div>
</template>
<script>
import Project from "@/components/Project";

export default {
  components: {
    project: Project
  },
  data() {
    return {
      projects: [
        {
          dark: true,
          title: "DHBW Richie",
          description:
            "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
          images: {
            icon: "../img/projects/richie/icon-richie.png",
            background: "../img/projects/richie/preview3-richie.png"
          }
        },
        {
          dark: false,
          title: "Timo's Icons",
          description:
            "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
          images: {
            icon: "../img/projects/icons/icon-icons.png",
            background: "../img/projects/icons/preview2-icons.png"
          }
        },

        {
          dark: false,
          title: "NHL Stats",
          description:
            "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
          images: {
            icon: "../img/projects/cassy/icon-cassy.png",
            background: "../img/projects/cassy/preview-cassy.png"
          }
        },

        {
          dark: true,
          title: "AMS Pro",
          description:
            "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
          images: {
            icon: "../img/projects/richie/icon-richie.png",
            background: "../img/projects/richie/preview3-richie.png"
          }
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.projects {
  display: grid;
  grid-gap: 10px;
  margin: 10px 0px;
  grid-template-columns: repeat(2, 1fr);
}
</style>