<template>
  <div>
    <tc-header
      :title="iconName"
      :backTo="{ name: constants.projectRoutes.timos_icons }"
      backName="Icons"
    />
    <timos-icons-found v-if="icon" :icon="icon" />
    <timos-icons-notfound v-else />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TimosIconsNotFound from "./Timos-Icons--NotFound.vue";
import TimosIconsFound from "./Timos-Icons--Found.vue";
import { Icon } from "@/models/Icons/Icon.model";
import icons from "@/icons";
import constants from "@/constants";

@Component({
  components: {
    "timos-icons-notfound": TimosIconsNotFound,
    "timos-icons-found": TimosIconsFound,
  },
})
export default class TimosIconsDetail extends Vue {
  public constants: Record<string, unknown> = constants;

  get iconName(): string {
    if (this.icon) return this.icon.name;
    return "Not Found";
  }

  get icon(): Icon {
    return icons.filter(
      (x: Icon) =>
        x.name.toLowerCase() === this.$route.params.icon.toLowerCase()
    )[0];
  }
}
</script>
