<template>
  <div
    class="portfolio-footer"
    :class="{
      dark: !!$route.meta.dark,
      isProjectView: $route.name === 'projects',
    }"
  >
    <div class="footer-sitemap">
      <template v-for="g in sitemap">
        <div class="sitemap-title" :key="'sm_' + g.group">{{ g.group }}</div>
        <div class="sitemap-item" v-for="i in g.items" :key="g.group + i.name">
          <tc-link :href="i.href" :to="i.to">{{ i.name }}</tc-link>
        </div>
      </template>
    </div>
    <tc-divider />
    <div class="footer-items">
      <div class="footer-item">
        © Timo Scheuermann {{ new Date().getFullYear() }}
      </div>
      <div class="footer-grow" />
      <tc-link class="footer-item" :to="{ name: routes.privacy }">
        Privacy Policy
      </tc-link>
      <tc-link class="footer-item" :to="{ name: routes.termsofuse }">
        Terms of Use
      </tc-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import sitemap from '@/constants/sitemap';
import routes from '@/constants/routes';

@Component
export default class PortfolioFooter extends Vue {
  public sitemap = sitemap;
  public routes = routes;
}
</script>
<style lang="scss" scoped>
.portfolio-footer {
  background: darken($paragraph, 7.5%);
  color: $color;
  padding-bottom: env(safe-area-inset-bottom);
  @media #{$isMobile} {
    padding-bottom: calc(50px + env(safe-area-inset-bottom));
  }
  &.dark {
    background: lighten($paragraph_dark, 5%);
    color: $color_dark;
  }
  &.isProjectView {
    @media #{$isMobile} {
      display: none;
    }
  }
  font-size: 14px;
  .footer-items {
    padding: 10px calc(5vw - 5px) {
      top: 0px;
    }
    display: flex;
    .footer-item {
      margin: 0 5px;
      color: inherit;
    }
    .footer-grow {
      flex-grow: 1;
    }
  }
  .footer-sitemap {
    column-gap: 20px;
    padding: 15px 5vw {
      bottom: 0;
    }
    @for $i from 1 through 20 {
      @media only screen and(max-width: #{$i * 300}px) and(min-width: #{-1 + ($i - 1) * 300}px) {
        columns: $i;
      }
    }

    .sitemap-title,
    .sitemap-item {
      break-inside: avoid-column;
      padding-bottom: 3px;
    }
    .sitemap-title {
      padding-top: 3px;
      font-weight: bold;
      user-select: none;
    }
    .tc-link {
      color: inherit;
      &::after {
        background: currentColor;
      }
    }
  }
}
</style>
