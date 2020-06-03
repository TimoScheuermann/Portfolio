<template>
  <div content>
    <tc-header
      :title="iconName"
      :backTo="{ name: constants.projectRoutes.timos_icons }"
      backName="Icons"
    />

    <div v-if="icon.name === 'Not Found'" class="notFound">
      <div class="container">
        <div class="slot-mashine">
          <icon-slot-mashine />
          <icon-slot-mashine />
          <icon-slot-mashine />
          <icon-slot-mashine />
          <icon-slot-mashine />
        </div>
        <div class="title">
          <i class="ti-cross-circle"> </i>
          Icon not found
        </div>
        <p>
          The Icon you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <tc-button
          icon="chevron-left"
          name="Overview"
          :to="{ name: constants.projectRoutes.timos_icons }"
        ></tc-button>
      </div>
    </div>

    <div class="icons-detail-found" v-else>
      <tc-grid class="icons-detail--mainGrid">
        <tc-card rounded="true" hover="true">
          <div class="big">
            <i :class="'ti-' + icon.name"></i>
          </div>
        </tc-card>

        <tc-card title="Examples" rounded="true" hover="true">
          <tc-grid minWidth="100">
            <div
              class="backgroundExample"
              v-for="(a, i) in Array(4)"
              :key="i"
              :class="'bg-' + ++i"
            >
              <i :class="'ti-' + icon.name"></i>
            </div>
          </tc-grid>
        </tc-card>
      </tc-grid>

      <tc-grid class="icons-detail--mainGrid">
        <tc-card rounded="true" hover="true" title="HTML">
          <tc-button name="Copy HTML code" @click="copyHTML()" />
        </tc-card>
        <tc-card rounded="true" hover="true" title="SVG">
          <tc-button name="Copy SVG code" @click="copySVG()" />
        </tc-card>
      </tc-grid>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import icons from "@/icons";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import constants from "@/constants";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import { Icon } from "@/models/Icons/Icon.model";
import TCDivider from "@/components/tc/divider/TC-Divider.vue";
import IconSlotMashine from "@/components/projects/TimosIcons/IconSlotMashine.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-button": TCButton,
    "tc-card": TCCard,
    "tc-headline": TCHeadline,
    "tc-divider": TCDivider,
    "icon-slot-mashine": IconSlotMashine,
    "tc-grid": TCGrid
  }
})
export default class TimosIconsDetail extends Vue {
  public icon: Icon = { name: "Not Found" };
  public constants: {} = constants;
  public iconData: any[] = [];

  get iconName() {
    return this.icon.name.split("-").join(" ");
  }

  get html() {
    return `<i class="ti-${this.icon.name}"></i>`;
  }

  get svg() {
    const iconData = this.iconData.filter(
      x => x.properties.name === this.icon.name
    )[0];

    const pre = "<svg>";
    let content = "";
    for (let i = 0; i < iconData.icon.paths.length; i++) {
      content += `<path d="${iconData.icon.paths[i]}" ${
        iconData.icon.attrs[i].opacity
          ? `opacity="${iconData.icon.attrs[i].opacity}"`
          : ""
      }/>`;
    }
    const suff = "</svg>";
    return pre + content + suff;
  }

  created() {
    const name = this.$route.params.icon;
    if (name === "add") return;
    let foundIcons: Icon[] = icons.filter(x => name.includes(x.name));
    if (foundIcons.length === 1) {
      this.icon = foundIcons[0];
    } else {
      foundIcons = foundIcons.filter(x => name === x.name);
      if (foundIcons.length === 1) this.icon = foundIcons[0];
    }
    if (this.icon.name != "Not Found") {
      this.iconData = require("./resources/selection.json")["icons"];
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";
/deep/ .tc-header--title__prestyled {
  text-transform: capitalize;
}

.icons-detail--mainGrid {
  margin-top: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
}

.icons-detail-found {
  @media #{$isMobile} {
    h1,
    .big {
      text-align: center;
    }
  }
  h1 {
    text-transform: capitalize;
    margin-top: 40px;
  }
  h2 {
    margin-top: 20px;
  }
  .big {
    font-size: 12em;
  }

  .backgroundExample {
    height: 0;
    padding-top: 50%;
    padding-bottom: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4em;
    color: #fff;
    &.bg-1 {
      color: $color;
      background: #f0f0f0;
    }
    &.bg-2 {
      background: $primary;
    }
    &.bg-3 {
      background: hsl(343, 83%, 56%);
    }
    &.bg-4 {
      background: $color;
    }
  }
}

.notFound {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  .img,
  .content {
    width: 400px;
    max-width: 90vw;
  }
  .img {
    img {
      max-width: 100%;
    }
  }
  .container {
    .slot-mashine {
      margin: 30px 0;
    }
    text-align: center;
    .title {
      font-size: 2.2em;
      font-weight: 700;
      i {
        color: red;
      }
    }
    p {
      opacity: 0.8;
      max-width: 400px;
    }
  }
}
</style>
