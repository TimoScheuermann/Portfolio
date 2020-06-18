<template>
  <div class="tc-component--notfound" tc-light-container>
    <h1>Component not found</h1>
    <p>
      This page does not exist at the moment. If you're coming from an external
      website or entered the URL manually, it's possible, that this component
      does no longer exist, had its name changed or is temporaly unavailable.
    </p>
    <tc-button
      variant="filled"
      icon="chevron-left"
      name="Components"
      :to="{ name: timos_components }"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCButton from "@/components/tc/button/TC-Button.vue";
import constants from "@/constants";
@Component({
  components: {
    "tc-button": TCButton
  }
})
export default class TCComponentsNotFound extends Vue {
  public timos_components: string = constants.projectRoutes.timos_components;
}
</script>
<style lang="scss" scoped>
.tc-component--notfound {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    margin-bottom: -5px;
  }
  p {
    width: 400px;
    max-width: 80vw;
    text-align: center;
  }
  background-image: radial-gradient(
      circle at 13% 47%,
      rgba(140, 140, 140, 0.03) 0%,
      rgba(140, 140, 140, 0.03) 25%,
      transparent 25%,
      transparent 100%
    ),
    radial-gradient(
      circle at 28% 63%,
      rgba(143, 143, 143, 0.03) 0%,
      rgba(143, 143, 143, 0.03) 16%,
      transparent 16%,
      transparent 100%
    ),
    radial-gradient(
      circle at 81% 56%,
      rgba(65, 65, 65, 0.03) 0%,
      rgba(65, 65, 65, 0.03) 12%,
      transparent 12%,
      transparent 100%
    ),
    radial-gradient(
      circle at 26% 48%,
      rgba(60, 60, 60, 0.03) 0%,
      rgba(60, 60, 60, 0.03) 6%,
      transparent 6%,
      transparent 100%
    ),
    radial-gradient(
      circle at 97% 17%,
      rgba(150, 150, 150, 0.03) 0%,
      rgba(150, 150, 150, 0.03) 56%,
      transparent 56%,
      transparent 100%
    ),
    radial-gradient(
      circle at 50% 100%,
      rgba(25, 25, 25, 0.03) 0%,
      rgba(25, 25, 25, 0.03) 36%,
      transparent 36%,
      transparent 100%
    ),
    radial-gradient(
      circle at 55% 52%,
      rgba(69, 69, 69, 0.03) 0%,
      rgba(69, 69, 69, 0.03) 6%,
      transparent 6%,
      transparent 100%
    ),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
}
</style>
