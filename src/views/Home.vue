<template>
  <div class="home">
    <landing></landing>
    <projects-carousel id="test"></projects-carousel>
  </div>
</template>

<script>
import Landing from "@/components/Landing.vue";
import ProjectsCarousel from "@/components/ProjectsCarousel.vue";

export default {
  components: {
    landing: Landing,
    "projects-carousel": ProjectsCarousel
  }
};
</script>
