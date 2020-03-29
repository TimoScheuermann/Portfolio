<template>
  <div content>
    <tc-header title="AMS Pro"></tc-header>
    <tc-card
      dark="true"
      rounded="true"
      title="AMS Pro"
      subtitle="Visit AMS Pro's official site for more informations"
    >
      <tc-button
        icon="amspro"
        name="AMS Pro"
        to="https://www.ams-pro.de/"
      ></tc-button>
    </tc-card>
    <tc-headline title="Icons" />

    <div class="ams-icon" v-for="i in icons" :key="i">
      <div class="ams-icon--title">{{ i }}</div>
      <div class="ams-icon--variants">
        <i :class="i" />
        <i :class="i" />
        <i :class="i" />
        <i :class="i" />
        <i :class="i" />
        <i :class="i" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
@Component({
  components: {
    "tc-header": TCHeader,
    "tc-card": TCCard,
    "tc-button": TCButton,
    "tc-headline": TCHeadline
  }
})
export default class AMSPro extends Vue {
  // created() {
  //   window.open("https://www.ams-pro.de/");
  // }
  public icons: string[] = [
    "ams-1",
    "ams-2",
    "ams-3",
    "ams-4",
    "ams-5",
    "ams-6",
    "ams-6-2",
    "ams-7",
    "ams-8",
    "ams-9",
    "ams-10",
    "ams-11"
  ];
}
</script>
<style lang="scss" scoped>
[content] {
  .tc-card {
    margin-top: 20px;
    width: fit-content;
  }
}

.ams-icon {
  .ams-icon--title {
    font-size: 1.2em;
    font-weight: bold;
  }
  .ams-icon--variants {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    i {
      margin: 10px;
      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          font-size: #{(5 - ($i / 2)) * 20}px;
        }
      }
    }
  }
}

$icomoon-font-family: "ams-pro-icons" !default;
$icomoon-font-path: "fonts" !default;

$ams-1-path1: "\e900";
$ams-1-path2: "\e901";
$ams-2-path1: "\e902";
$ams-2-path2: "\e903";
$ams-3-path1: "\e904";
$ams-3-path2: "\e905";
$ams-4-path1: "\e906";
$ams-4-path2: "\e907";
$ams-5-path1: "\e908";
$ams-5-path2: "\e909";
$ams-6-path1: "\e90a";
$ams-6-path2: "\e90b";
$ams-6-2-path1: "\e90c";
$ams-6-2-path2: "\e90d";
$ams-7-path1: "\e90e";
$ams-7-path2: "\e90f";
$ams-8: "\e910";
$ams-9-path1: "\e911";
$ams-9-path2: "\e912";
$ams-10: "\e913";
$ams-11-path1: "\e914";
$ams-11-path2: "\e915";

@font-face {
  font-family: "#{$icomoon-font-family}";
  src: url("#{$icomoon-font-path}/#{$icomoon-font-family}.eot?7r1q3x");
  src: url("#{$icomoon-font-path}/#{$icomoon-font-family}.eot?7r1q3x#iefix")
      format("embedded-opentype"),
    url("#{$icomoon-font-path}/#{$icomoon-font-family}.ttf?7r1q3x")
      format("truetype"),
    url("#{$icomoon-font-path}/#{$icomoon-font-family}.woff?7r1q3x")
      format("woff"),
    url("#{$icomoon-font-path}/#{$icomoon-font-family}.svg?7r1q3x##{$icomoon-font-family}")
      format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

i {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "#{$icomoon-font-family}" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ams-1 {
  &:before {
    content: $ams-1-path1;
  }
  &::after {
    content: $ams-1-path2;
    margin-left: -1em;
    opacity: 0.5;
  }
}
.ams-2 {
  &:before {
    content: $ams-2-path1;
  }
  &::after {
    content: $ams-2-path2;
    margin-left: -1em;
    opacity: 0.5;
  }
}
.ams-3 {
  &:before {
    content: $ams-3-path1;
    opacity: 0.5;
  }
  &::after {
    content: $ams-3-path2;
    margin-left: -1em;
  }
}
.ams-4 {
  &:before {
    content: $ams-4-path1;
    opacity: 0.5;
  }
  &::after {
    content: $ams-4-path2;
    margin-left: -1em;
  }
}
.ams-5 {
  &:before {
    content: $ams-5-path1;
    opacity: 0.33;
  }
  &::after {
    content: $ams-5-path2;
    margin-left: -1em;
  }
}
.ams-6 {
  &:before {
    content: $ams-6-path1;
    opacity: 0.33;
  }
  &::after {
    content: $ams-6-path2;
    margin-left: -1em;
  }
}
.ams-6-2 {
  &:before {
    content: $ams-6-2-path1;
  }
  &::after {
    content: $ams-6-2-path2;
    margin-left: -1em;
    opacity: 0.5;
  }
}
.ams-7 {
  &:before {
    content: $ams-7-path1;
  }
  &::after {
    content: $ams-7-path2;
    margin-left: -1em;
    opacity: 0.33;
  }
}
.ams-8 {
  &:before {
    content: $ams-8;
  }
}
.ams-9 {
  &:before {
    content: $ams-9-path1;
  }
  &::after {
    content: $ams-9-path2;
    margin-left: -1em;
    opacity: 0.5;
  }
}
.ams-10 {
  &:before {
    content: $ams-10;
  }
}
.ams-11 {
  &:before {
    content: $ams-11-path1;
  }
  &::after {
    content: $ams-11-path2;
    margin-left: -1em;
    opacity: 0.5;
  }
}
</style>
