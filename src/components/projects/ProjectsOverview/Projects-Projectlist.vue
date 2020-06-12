<template>
  <div class="projects-list" :class="{ 'projects-list__opened': listOpened }">
    <div class="projects-list-container">
      <tc-list>
        <tc-list-item
          v-for="p in projects"
          :key="p.title"
          :title="p.title"
          :icon="'ti-' + p.icon"
          :to="p.routeName"
        />
      </tc-list>
    </div>
    <div class="projects-list-opener" @click="listOpened = !listOpened">
      <span>All Projects <i class="ti-chevron-up"/></span>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import projects from "@/projects";
import { Project } from "@/models/Projects/Project.model";
import TCList from "@/components/tc/list/TC-List.vue";
import TCListItem from "@/components/tc/list/TC-List-Item.vue";
@Component({
  components: {
    "tc-list": TCList,
    "tc-list-item": TCListItem
  }
})
export default class ProjectsProjectlist extends Vue {
  public projects: Project[] = projects;
  public listOpened: boolean = false;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables.scss";
@import "../../../scss/mixins";
.projects-list {
  position: fixed;
  @media #{$isDesktop} {
    bottom: calc(20px + env(safe-area-inset-bottom));
    left: calc(50% + 25px);
  }
  @media #{$isMobile} {
    bottom: calc(70px + env(safe-area-inset-bottom));
    left: calc(50%);
  }
  transform: translateX(-50%);
  text-align: center;
  transition: 0.2s ease-in-out;
  .projects-list-container {
    max-height: 0px;
    min-width: 0px;
    overflow: hidden;
    background: none;
    transition: 0.2s ease-in-out;
    /deep/ .tc-list {
      /deep/ .tc-list-item {
        .tc-list-item--container {
          .tc-list-item--title {
            white-space: nowrap;
          }
        }
      }
    }
  }
  &.projects-list__opened {
    background: $paragraph;
    border-radius: 10px;
    .projects-list-container {
      overflow: auto;
      margin: 10px {
        bottom: 20px;
      }
      @media #{$isMobile} {
        min-width: 80vw;
      }

      @media #{$isDesktop} {
        min-width: 400px;
      }
      max-height: calc(
        100vh - 210px - env(safe-area-inset-top) - env(safe-area-inset-bottom)
      );
    }
  }
  &:not(.projects-list__opened) {
    .projects-list-opener {
      &:hover {
        box-shadow: $shadow;
      }
    }
  }
  .projects-list-opener {
    background: $paragraph;
    color: #111;
    display: inline-block;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    span {
      i {
        margin-left: 0.7em;
        opacity: 0.6;
      }
    }
    transition: 0.2s ease-in-out;
  }
}
</style>
