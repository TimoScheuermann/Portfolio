<template>
  <div content>
    <tc-header
      :title="icon.name"
      :backTo="{ name: constants.projectRoutes.timos_icons }"
      backName="Icons"
    />

    <div v-if="icon.css.length === 0" class="notFound">
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
          icon="arrow-left"
          name="Overview"
          :to="{ name: constants.projectRoutes.timos_icons }"
        ></tc-button>
      </div>
    </div>

    <div v-else>
      <tc-headline :title="icon.name"></tc-headline>
      <div class="gallery">
        <tc-card rounded="true" title="How to use">
          <div>
            <tc-divider name="HTML" icon="component"></tc-divider>
            <div class="codeContainer">
              <div class="code">&lt;i class="ti-{{ icon.name }}">&lt;/i></div>
            </div>
          </div>
          <div>
            <tc-divider name="CSS" icon="code"></tc-divider>
            <div class="codeContainer">
              <div class="code">
                ::before {<br /><span />content: '\{{
                  icon.css
                }}';<br /><span />font-family: 'Timos-Icons';<br />}
              </div>
            </div>
          </div>

          <div class="tc-card--title__prestyled">Get Started</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            voluptatum nam minus esse alias, molestias commodi blanditiis
            similique ea aliquam, veritatis molestiae quia aspernatur quas.
            Nulla minima fugiat iusto magni.
          </p>
          <tc-button name="Start using Timo's Icons"></tc-button>
        </tc-card>
        <tc-card rounded="true" title="Examples">
          <tc-divider name="Sizes"></tc-divider>
          <div class="innerGrid">
            <div
              class="innerGrid--item"
              v-for="(i, index) in Array(4)"
              :key="index"
            >
              <i
                :class="'ti-' + icon.name"
                :style="{ 'font-size': (index + 2) * 16 + 'px' }"
              ></i>
              <span>@{{ (index + 2) * 16 }}px</span>
            </div>
          </div>

          <tc-divider name="Colors"></tc-divider>
          <div class="innerGrid">
            <div
              class="innerGrid--item colors"
              v-for="(i, index) in Array(4)"
              :key="index"
            >
              <i :class="'ti-' + icon.name"></i>
            </div>
          </div>
        </tc-card>
      </div>
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

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-button": TCButton,
    "tc-card": TCCard,
    "tc-headline": TCHeadline,
    "tc-divider": TCDivider,
    "icon-slot-mashine": IconSlotMashine
  }
})
export default class TimosIconsDetail extends Vue {
  public icon: Icon = { name: "Not Found", css: "" };
  public constants: {} = constants;

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
  }
}
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

.innerGrid {
  margin: 10px 0;
  min-width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-auto-rows: 1fr;
  &::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  .innerGrid--item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    background: $background;
    border-radius: $border-radius;
    span {
      margin-top: 5px;
      color: $primary;
      font-weight: 500;
    }
    &.colors {
      font-size: 64px;
      color: #fff;
      &:nth-child(1) {
        color: $color;
      }
      &:nth-child(2) {
        background: $primary;
      }
      &:nth-child(3) {
        background: hsl(343, 83%, 56%);
      }
      &:nth-child(4) {
        background: $color;
      }
    }
  }
}

.gallery {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .codeContainer {
    margin: {
      top: 10px;
      bottom: 15px;
    }
    background: $background;
    display: flex;
    justify-content: center;
    padding: 5px;
    .code {
      text-align: left;
      border-radius: $border-radius;
      font-family: "Courier New", Courier, monospace;
      span {
        display: inline-block;
        width: 20px;
      }
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
