<template>
  <router-link :to="routeLink" class="portfolio-sidebar-item">
    <i :class="'ti-' + icon" />
    <span>{{ title }}</span>
  </router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { RawLocation } from 'vue-router';

@Component
export default class PSidebarItem extends Vue {
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop() routeName!: string;
  @Prop() to!: RawLocation;

  get routeLink(): RawLocation {
    if (this.routeName) return { name: this.routeName };
    else return this.to;
  }
}
</script>
<style lang="scss" scoped>
.portfolio-sidebar-item {
  color: #fff;
  margin-top: 5px;
  border-radius: $border-radius;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  padding: 5px;
  text-decoration: none;

  i {
    margin-left: 5px;
  }
  span {
    margin-left: 10px;
    font-weight: 500;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  transition: background 0.2s ease-in-out;
  &.router-link-exact-active,
  &:hover {
    background: hsla(0, 0%, 100%, 0.2);
  }
}
</style>
