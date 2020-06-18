<template>
  <div class="timos-icons--found">
    <icon-scroller />
    <div content>
      <h1><i :class="'ti-' + icon" /> {{ displayName }}</h1>
      <div grower />
      <tc-grid arrangement="auto-fit">
        <div>
          <h3>Need help?</h3>
          <p>
            You found the right icon, but have no idea how to use it on your
            website? Take a look at the <tc-link>getting started page</tc-link>.
          </p>
        </div>
        <div>
          <h3>Room for improvements?</h3>
          <p>
            There is something wrong with this icon or you want something to be
            changed, then
            <tc-link
              href="https://github.com/TimoScheuermann/Timos-Icons/issues/new?assignees=&labels=Problem&template=problem.md&title="
            >
              submit your idea here</tc-link
            >.
          </p>
        </div>
        <div>
          <h3>New icon idea?</h3>
          <p>
            You just can't find the right icon for your project? Simply open a
            <tc-link
              href="https://github.com/TimoScheuermann/Timos-Icons/issues/new?assignees=&labels=Icon+Request&template=icon-request.md&title="
            >
              new github issue
            </tc-link>
            and tell me about your idea.
          </p>
        </div>
      </tc-grid>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCButton from "@/components/tc/button/TC-Button.vue";
import constants from "@/constants";
import icons from "@/icons";
import { Icon } from "@/models/Icons/Icon.model";
import IconScroller from "@/components/projects/TimosIcons/IconScroller.vue";
import TCTabbar from "@/components/tc/tabbar/TC-Tabbar.vue";
import TCTabbarItem from "@/components/tc/tabbar/TC-Tabbar-Item.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import TCLink from "../../../components/tc/link/TC-Link.vue";
@Component({
  components: {
    "tc-button": TCButton,
    "icon-scroller": IconScroller,
    "tc-tabbar": TCTabbar,
    "tc-tabbar-item": TCTabbarItem,
    "tc-grid": TCGrid,
    "tc-link": TCLink
  }
})
export default class TimosIconsFound extends Vue {
  public timos_icons: string = constants.projectRoutes.timos_icons;
  public icons: Icon[] = icons;

  get icon() {
    return this.$route.params.icon;
  }
  get displayName() {
    return this.icon.split("-").join(" ");
  }
}
</script>
<style lang="scss" scoped>
.timos-icons--found {
  padding-top: calc(50px + env(safe-area-inset-top));

  [content] {
    padding: 30px 5vw;
    display: flex;
    flex-direction: column;
    @media #{$isDesktop} {
      min-height: calc(
        100vh - 150px - env(safe-area-inset-top) - env(safe-area-inset-bottom)
      );
    }
    @media #{$isMobile} {
      min-height: calc(
        100vh - 165px - env(safe-area-inset-top) - env(safe-area-inset-bottom)
      );
    }
    [grower] {
      flex-grow: 1;
    }
    h1 {
      text-transform: capitalize;
    }
  }
}
</style>
