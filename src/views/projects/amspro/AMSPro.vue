<template>
  <div content>
    <tc-header title="AMS Pro"></tc-header>
    <tc-card
      title="AMS Pro"
      subtitle="Visit AMS Pro's official site for more informations"
    >
      <tc-button
        icon="amspro"
        name="AMS Pro"
        to="https://www.ams-pro.de/"
      ></tc-button>
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
@Component({
  components: {
    "tc-header": TCHeader,
    "tc-card": TCCard,
    "tc-button": TCButton
  }
})
export default class AMSPro extends Vue {
  created() {
    window.open("https://www.ams-pro.de/");
  }
}
</script>
<style lang="scss" scoped>
[content] {
  display: flex;
  justify-content: center;
  .tc-card {
    margin-top: 20px;
    width: fit-content;
  }
}
</style>
