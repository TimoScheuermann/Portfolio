<template>
  <div class="tc-icons--notfound">
    <div>
      <icon-slot-mashine />
      <icon-slot-mashine />
      <icon-slot-mashine />
      <icon-slot-mashine />
      <icon-slot-mashine />
    </div>
    <h1>Icon not found</h1>
    <p>
      This icon does not exist at the moment. If your coming from an external
      website or entered the URL manually, its possible, that this icon does no
      longer exist, had it's name changed or is temporaly unavailable.
    </p>
    <tc-button
      variant="filled"
      icon="chevron-left"
      name="Icons"
      :to="{ name: timos_icons }"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCButton from "@/components/tc/button/TC-Button.vue";
import constants from "@/constants";
import IconSlotMashine from "@/components/projects/TimosIcons/IconSlotMashine.vue";
@Component({
  components: {
    "tc-button": TCButton,
    "icon-slot-mashine": IconSlotMashine
  }
})
export default class TimosIconsNotFound extends Vue {
  public timos_icons: string = constants.projectRoutes.timos_icons;
}
</script>
<style lang="scss" scoped>
@import "../../../scss/variables.scss";

.tc-icons--notfound {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  $colors: (
    1: "#eb3b5a",
    2: "#45aaf2",
    3: "#26de81",
    4: "#2bcbba",
    5: "#e67e22"
  );
  @each $i, $color in $colors {
    /deep/ .icon-slot-mashine {
      &:nth-child(#{$i}) {
        i {
          color: #{$color};
        }
      }
    }
  }

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
