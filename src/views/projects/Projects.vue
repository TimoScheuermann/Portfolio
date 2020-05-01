<template>
  <div>
    <tc-header title="Projects" />

    <div content>
      <h2>Available projects</h2>
      <tc-list>
        <tc-list-item
          v-for="(p, i) in projects"
          :key="p.title"
          :title="p.title"
          :icon="'ti-' + p.images.tiIcon"
          :to="p.routeName"
        />
      </tc-list>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import projects from "@/projects";
import { Project } from "../../models/Projects/Project.model";
import TCLink from "../../components/tc/link/TC-Link.vue";
import TCListItem from "../../components/tc/list/TC-List-Item.vue";
import TCList from "../../components/tc/list/TC-List.vue";
@Component({
  components: {
    "tc-header": TCHeader,
    "tc-link": TCLink,
    "tc-list": TCList,
    "tc-list-item": TCListItem
  }
})
export default class Projects extends Vue {
  public projects: Project[] = projects;
}
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";
[content] {
  h2 {
    margin-top: 30px;
    margin-bottom: 20px;
  }
}
</style>
