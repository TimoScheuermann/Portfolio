<template>
  <div content class="projects--tccomponents">
    <portfolio-big-heading :title="project.type" :subtitle="project.title" />
  </div>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import ProjectView from './_ProjectView.mixin';

@Component
export default class TCComponents extends Mixins(ProjectView) {}
</script>
