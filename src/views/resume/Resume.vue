<template>
  <div content class="view--repertoire">
    <tc-header title="Resume" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
@Component({
  components: {
    "tc-header": TCHeader,
  },
})
export default class Projects extends Vue {}
</script>
