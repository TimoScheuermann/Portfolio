<template>
  <div>
    <div>Buttons</div>
    <tc-button></tc-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCButton from "@/components/tc/button/TC-Button.vue";
@Component({
  components: {
    "tc-button": TCButton
  }
})
export default class TCComponentsDetailButton extends Vue {
  //TC-Components-Detail--Button.vue
}
</script>
