<template>
  <div style="margin-left: 200px">
    <component :is="currentComponent" />
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
  get currentComponent() {
    return () =>
      import(
        `@/views/projects/tccomponents/views/details/TC-Components-Detail--${this.$route.params.comp}.vue`
      ).catch(() =>
        import("@/views/projects/tccomponents/views/TC-Components-NotFound.vue")
      );
  }
}
</script>
