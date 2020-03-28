<template>
  <div content>
    <tc-header title="Contact">
      <div class="header__project">Make window smaller to see</div>
      <div class="header__project">Timo's Icons</div>
      <div class="header__project">DHBW Richie</div>
      <div class="header__project">AMS Pro</div>
      <tc-switch class="header__project"></tc-switch>
      <div>
        <tc-button name="Hello" icon="heart"></tc-button>
      </div>
    </tc-header>
    <h1>Contact</h1>

    <div>
      <h2>new Input</h2>
      <tc-input placeholder="Hello World" title="Hello" icon="user" />

      <tc-input type="time" icon="alarm" />

      <tc-input type="number" :buttons="true" />

      <tc-input type="number" icon="heart" :buttons="true" />

      <tc-input type="number" icon="heart" />
    </div>

    <tc-button
      :icon="modal ? 'heart' : 'share'"
      name="Open modal"
      @click="modal = true"
    ></tc-button>
    <div>
      <b>{{ modal }}</b>
    </div>
    <tc-modal v-model="modal" title="Modal Title" subtitle="Subtitle">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        modi libero reprehenderit. Laudantium, harum earum est rerum sit labore
        eveniet exercitationem corporis culpa quae, doloremque dolor quam modi?
        Perspiciatis, omnis?
      </p>
      <tc-divider></tc-divider>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        explicabo consequuntur aperiam ea illum ut eaque sint vel quasi.
        Consectetur, minus doloribus. Iste delectus animi similique cum culpa
        deleniti sint?
      </p>
      <div slot="buttons">
        <tc-button variant="filled" icon="checkmark" name="Accept" />
        <tc-button variant="filled" name="Deny" />
      </div>
    </tc-modal>

    <h2>TC Preview</h2>
    <tc-preview></tc-preview>

    <h2>Grid Test</h2>
    <div class="grid-test">
      <div class="a">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellat
        cumque nobis ducimus tenetur deleniti saepe aliquam voluptas nam iure.
        Fugiat illum id inventore, minus corporis voluptas esse eaque quaerat!
      </div>
      <div class="b">
        <tc-button variant="filled" icon="checkmark" name="Accept" />
        <tc-button name="Deny" />
      </div>
    </div>

    <h2>Img test 2</h2>
    <div class="img-test2">
      <img src="assets/final_trans.png" />
    </div>
    <h2>Img test</h2>
    <div class="img-test">
      <img src="assets/final.png" />
    </div>

    <h2>Icon Test</h2>
    <comph />

    <h2>Mobile View</h2>
    <tc-card>
      <p-mobile-view></p-mobile-view>
    </tc-card>
    <h2>Slider</h2>
    <tc-slider v-model="sliderVal"></tc-slider>
    {{ sliderVal }}
    <h2>Toggle</h2>
    <tc-switch v-model="switchOne" />
    {{ switchOne }}
    <h2>Checkbox</h2>
    <tc-checkbox v-model="checkbox" />
    <tc-checkbox title="Hallo" v-model="checkbox" />
    {{ checkbox }}
    <h2>Rainbow</h2>
    <div class="rainbow" :style="{ background: 'hsl(' + i + ', 216%, 56%)' }">
      <h2>Hallo</h2>
    </div>
    <!-- <p-slideshow :images="slides()"></p-slideshow> -->
    <tc-button
      :navigation="{ name: 'Google.com', destiny: 'https://google.com' }"
    ></tc-button>
    <tc-button
      :navigation="{ name: 'GitHub', destiny: { name: 'github' } }"
    ></tc-button>
    <tc-card
      title="Portfolio"
      subtitle="Fun Project about my work"
      :navigation="{ name: 'GitHub', destiny: { name: 'github' } }"
    >
      <img :src="'../img/projects/richie/preview3-richie.png'" />
    </tc-card>
    <tc-card
      title="Portfolio"
      subtitle="Fun Project about my work"
      :navigation="{ name: 'GitHub', destiny: { name: 'github' } }"
      mode="dark"
    ></tc-card>

    <div class="icons">
      <div class="icon" v-for="(icon, index) in icons()" :key="index">
        <div class="inde">{{ icon.css }}</div>
        <div class="i">
          <i :class="'ti-' + icon.name"></i>
        </div>
        <div class="name">{{ icon.name }}</div>
      </div>
    </div>
    <div class="filter">
      <tc-checkbox title="Hallo Welt"></tc-checkbox>
      <tc-direction title="Richtung"></tc-direction>
    </div>
    <tc-hero>
      <img
        slot="background"
        src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/05/Gradient-Roundup-Illustrator-02.jpg"
      />
    </tc-hero>
    <tc-link>Hallo Welt</tc-link>
    <tc-link><i class="ti-peace" /> Was geht ab</tc-link>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCButton from "@/components/tc/button/TC-Button.vue";
import icons from "@/icons";
import projects from "@/projects";
import { Icon } from "@/models/Icons/Icon.model";
import TCDirection from "@/components/shared/filter/TC-Direction.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import TCSwitch from "@/components/tc/switch/TC-Switch.vue";
import TCComponentHero from "@/components/projects/TCComponents/ComponentHero.vue";
import TCLink from "@/components/tc/link/TC-Link.vue";
import TCSlider from "@/components/tc/slider/TC-Slider.vue";
import TCCheckbox from "@/components/tc/checkbox/TC-Checkbox.vue";
import PMobileView from "@/components/shared/mobileView/P-MobileView.vue";
import TCModal from "@/components/tc/modal/TC-Modal.vue";
import TCDivider from "@/components/tc/divider/TC-Divider.vue";
import TCInput from "@/components/tc/input/TC-Input.vue";
import TCNavbar from "@/components/tc/navbar/TC-Navbar.vue";
import TCNavbarItem from "@/components/tc/navbar/TC-Navbar-Item.vue";
import ComponentHero from "@/components/projects/TCComponents/ComponentHero.vue";
import TCPreview from "../../components/tc/preview/TC-Preview.vue";

@Component({
  components: {
    "tc-navbar": TCNavbar,
    "tc-navbar-item": TCNavbarItem,
    "tc-button": TCButton,
    "tc-card": TCCard,
    "tc-checkbox": TCCheckbox,
    "tc-direction": TCDirection,
    "tc-header": TCHeader,
    "tc-hero": TCHero,
    "tc-switch": TCSwitch,
    "tc-link": TCLink,
    "tc-compHero": TCComponentHero,
    "tc-slider": TCSlider,
    "p-mobile-view": PMobileView,
    "tc-modal": TCModal,
    "tc-divider": TCDivider,
    "tc-input": TCInput,
    comph: ComponentHero,
    "tc-preview": TCPreview
  }
})
export default class ContactView extends Vue {
  public icons(): Icon[] {
    return icons.sort((a, b) => a.name.localeCompare(b.name));
  }
  public slides(): string[] {
    return [""];
    // return projects.map(x => x.images.background);
  }
  public i: number = 0;
  sliderVal: number = 33;
  switchOne: boolean = true;
  checkbox: boolean = false;
  modal: boolean = false;
  colVal: any = "";

  inputTypes: string[] = [
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week"
  ];

  created() {
    this.l();
  }
  l() {
    this.i++;
    setTimeout(() => {
      this.l();
    }, 50);
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/variables";
h1 {
  color: $primary;
  &::after {
    color: $color;
    opacity: 0.8;
  }
}
@media #{$isMobile} {
  h1 {
    &::after {
      content: " isMobile";
    }
  }
}
@media #{$isDesktop} {
  h1 {
    &::after {
      content: " isDesktop";
    }
  }
}
.icon {
  display: flex;
  & > * {
    width: 100px;
    white-space: nowrap;
  }
}
.filter {
  display: flex;
  align-items: center;
}
.rainbow {
  text-align: center;
  padding: 20px;
  color: #fff;
}
.grid-test {
  background: red;
  width: 200px;
  display: grid;
  grid-template-rows: 1fr auto;
  max-height: 200px;
  .a {
    background: orange;
    max-height: 200px;
    overflow: auto;
  }
  .b {
    background: green;
    .tc-button {
      display: block;
    }
  }
}
.cTCC {
  margin: 10px 5px;
}
.img-test2 {
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.img-test {
  // background: gray;
  // overflow: hidden;
  // max-height: 300px;
  img {
    width: 100%;
    height: 100%;
    // max-height: 600px;
    object-fit: contain;
    transform-origin: 50% 100%;
    transform: perspective(350px) rotateX(25deg) translateY(0px) rotateZ(-10deg);

    filter: drop-shadow(4px 8px 20px rgba(0, 0, 0, 0.19));
  }
}
.header__project {
  white-space: nowrap;
  margin: 0 5px;
  font-weight: 500;
  padding: 10px {
    right: 0px;
  }
}
.header__example {
  margin: 30px 0;
  .tc-header {
    position: relative;
  }
}
.tc-preview {
  max-width: 400px;
}
</style>
