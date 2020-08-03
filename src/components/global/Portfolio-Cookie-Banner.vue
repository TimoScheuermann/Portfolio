<template>
  <tc-modal title="Cookies" v-model="modalOpened" :dark="dark">
    This website uses cookies to ensure you get the best experience on our
    website.<br />
    <tc-link :to="{ name: routes.cookies }">Learn more</tc-link>

    <tl-grid minWidth="200" gap="0" slot="footer">
      <tc-button variant="filled" name="Deny" @click="denyCookies()" />
      <tc-button variant="filled" name="Accept" @click="allowCookies()" />
    </tl-grid>
  </tc-modal>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import routes from '@/constants/routes';
import { getCookie, setCookie } from '@/utils';

@Component
export default class PortfolioCookieBanner extends Vue {
  public modalOpened = false;
  public routes = routes;

  mounted() {
    setTimeout(() => {
      this.modalOpened = !getCookie('timos-designs-cookies');
    }, 500);
  }

  get dark(): boolean {
    return !!this.$route.meta.dark;
  }

  public denyCookies() {
    this.modalOpened = false;
  }

  public allowCookies() {
    this.denyCookies();
    setCookie('timos-designs-cookies', true);
  }
}
</script>
