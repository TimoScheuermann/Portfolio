<template>
  <tc-card dark="true" rounded="true">
    <div v-if="false" class="project-content">
      <div class="preview">
        <img :src="project.preview" />
      </div>
      <div class="text">
        <div class="title">{{ project.title }}</div>
        <div class="description">
          <span>{{ project.description }}</span>
          <tc-button
            variant="filled"
            name="Read more"
            icon="chevron-right"
            iconPosition="right"
          />
        </div>
      </div>
    </div>

    <img :src="project.preview" alt="" />
    <div class="project-description">
      <div class="text">
        {{ project.description }}
      </div>
      <div class="text readmore">Read more<i class="ti-chevron-right" /></div>
    </div>
  </tc-card>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TCCard from "../tc/card/TC-Card.vue";
import { Project } from "@/models/Projects/Project.model";
import TCButton from "../tc/button/TC-Button.vue";
@Component({
  components: {
    "tc-card": TCCard,
    "tc-button": TCButton
  }
})
export default class HomeProjectCard extends Vue {
  @Prop() project!: Project;
}
</script>
<style lang="scss" scoped>
.project-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;

  &:hover {
    .text .description {
      max-height: 200px;
      // padding-bottom: 30px;
    }
  }

  .preview {
    flex-grow: 1;
    max-height: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .text {
    margin-top: 10px;
    .title {
      font-weight: bold;
      font-size: 18px;
    }
    .description {
      overflow: hidden;
      max-height: 0px;
      transition: all 0.3s ease-in-out;

      span {
        opacity: 0.8;
        display: block;
      }
      .tc-button {
        margin-top: 10px;
      }
    }
  }
}

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
    // bottom: 0;
    padding: 10px;
    width: calc(100%);
    border-top: 1px solid rgba(#fff, 0.4);
    background: rgba(lighten(#111, 20%), 0.5);
    backdrop-filter: blur(20px);
    left: 50%;
    transform: translateX(-50%);
    .text {
      padding: 0 10px;
      &.readmore {
        margin-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #08f;
        i {
          font-size: 12px;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
