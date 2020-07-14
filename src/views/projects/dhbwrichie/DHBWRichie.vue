<template>
  <div content class="projects--dhbwrichie">
    <portfolio-big-heading :title="project.type" :subtitle="project.title" />
  </div>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import ProjectView from '@/views/projects/ProjectView.mixin';

@Component
export default class DHBWRichie extends Mixins(ProjectView) {}
</script>
<style lang="scss" scoped></style>
