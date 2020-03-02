<template>
  <div>
    {{ getComponent() }}
    <div>{{ r() }}</div>
    <component :is="comp">
      Hallo
    </component>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCComponentHelper from "../common/TC-Components.helper.vue";
import TCSpinner from "@/components/tc/spinner/TC-Spinner.vue";
import TCComponentsNotFound from "./TC-Components-NotFound.vue";

@Component({
  mixins: [TCComponentHelper]
})
export default class TCComponentsDetail extends Vue {
  // Zum testen: TC-Components-Detail--Button.vue
  // Fallback soll sein: TCComponentsNotFound
  // Loading: TCSpinner
  [x: string]: any;
  public comp: any = "";

  r(): string {
    return `@/views/projects/tccomponents/views/details/TC-Components-Detail--${this.getComponent()}.vue`;
  }

  //   Troy
  created() {
    try {
      const test = import(
        `@/views/projects/tccomponents/views/details/TC-Components-Detail--${this.getComponent()}.vue`
      );
      console.log("Comp", this.getComponent());
      console.log(this.r());
      console.log(test);
      console.log(!!test);
      console.log(typeof test);
      this.comp = test;
    } catch (error) {
      console.log("Error");
    }
  }
  // Troy
}
</script>
