<template>
  <div class="portfolio-footer" content>
    <tc-divider :dark="$store.getters.darkmode" />

    <tl-flow horizontal="space-between">
      <div>© Timo Scheuermann {{ new Date().getFullYear() }}</div>
      <tl-flow>
        <tc-link
          :color="$store.getters.darkmode ? '#fff' : '#111'"
          routeName="privacy"
        >
          Privacy Policy
        </tc-link>
        <tc-link
          :color="$store.getters.darkmode ? '#fff' : '#111'"
          routeName="terms"
        >
          Terms of Use
        </tc-link>
        <tc-link
          :color="$store.getters.darkmode ? '#fff' : '#111'"
          routeName="contact"
        >
          Contact
        </tc-link>
      </tl-flow>
    </tl-flow>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class PFooter extends Vue {}
</script>
<style lang="scss" scoped>
.portfolio-footer {
  background: rgba(0, 0, 0, 0.1);

  .tc-link {
    margin: 0 3px;
  }
}
</style>
