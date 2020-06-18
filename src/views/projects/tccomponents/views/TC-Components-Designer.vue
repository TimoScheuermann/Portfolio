<template>
  <div class="tc-components-designer">
    <tc-header
      :dark="true"
      :backTo="{ name: constants.projectRoutes.timos_components }"
      backName="Overview"
      title="Component Designer"
    >
      <tc-button
        @click="downloadFile"
        name="Save Configuration"
        icon="download"
        variant="filled"
      />
      <tc-input
        accept=".tccomponent"
        type="file"
        icon="component"
        filePlaceholder="Load Configuration"
        @fileLoaded="fileLoaded"
        :dark="true"
      />
    </tc-header>

    <div content>
      <section hero color-fff>
        <div>
          <i class="ti-color-fan"></i>
          <i class="ti-tools"></i>
          <i class="ti-component"></i>
        </div>
        <h1>omponent Designer</h1>
      </section>

      <tc-headline color-fff :dark="true" title="Toolbar">
        <div>
          <span select v-if="!selectedComponent">
            <span>
              Select a component to get started
            </span>
            <i class="ti-arrow-right" />
          </span>
          <tc-select
            :dark="true"
            placeholder="Component"
            v-model="selectedComponent"
            :values="componentList"
          />
        </div>
      </tc-headline>

      <transition-group name="options-trans" tag="div" class="tc-options">
        <tc-icon-select
          v-for="api in iconAttributes"
          :key="api.name"
          :title="api.name"
          v-model="data[api.name]"
        />
        <tc-select
          v-for="api in selectAttributes"
          :dark="true"
          :title="api.name"
          :key="api.name"
          :placeholder="api.name"
          :values="api.selectValues"
          v-model="data[api.name]"
        />
        <tc-input
          v-for="api in inputAttributes"
          :dark="true"
          :title="api.name"
          :type="api.type === 'number' ? 'number' : 'text'"
          :buttons="api.type === 'number'"
          :key="api.name"
          :placeholder="api.name"
          v-model="data[api.name]"
        />
      </transition-group>

      <!-- <h2 style="color: #fff">Slots</h2> -->

      <!-- <p color-fff>{{ data }}</p>
      <p color-fff>{{ html }}</p>
      <p color-fff>{{ $store.getters.designerComponent }}</p> -->

      <div
        class="designer-canvas"
        :class="{ 'designer-canvas__dark': darkCanvas }"
      >
        <div v-if="component" class="designer-canvas--header">
          <div>
            <h1>{{ selectedComponent }}</h1>
          </div>
          <div>
            <tc-checkbox
              :dark="darkCanvas"
              v-model="darkCanvas"
              title="Dark Canvas"
            />
            <tc-button :name="copyHTMLText" @click="copyHTML()" />
          </div>
        </div>
        <div class="designer-canvas--element">
          <div ref="container"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import constants from "@/constants";
import tcComponents from "@/components/tc";
import TCHero from "@/components/tc/hero/TC-Hero.vue";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCSelect from "@/components/tc/select/TC-Select.vue";
import { TCComponent } from "@/models/TCComponents/TCComponent.model";
import TCInput from "@/components/tc/input/TC-Input.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCCheckbox from "@/components/tc/checkbox/TC-Checkbox.vue";
import TCDivider from "@/components/tc/divider/TC-Divider.vue";
import TCImage from "@/components/tc/image/TC-Image.vue";
import TCLink from "@/components/tc/link/TC-Link.vue";
import TCList from "@/components/tc/list/TC-List.vue";
import TCModal from "@/components/tc/modal/TC-Modal.vue";
import TCNavbar from "@/components/tc/navbar/TC-Navbar.vue";
import TCProgress from "@/components/tc/progress/TC-Progress.vue";
import TCRevealer from "@/components/tc/revealer/TC-Revealer.vue";
import TCScrollUp from "@/components/tc/scrollup/TC-Scroll-Up.vue";
import TCQuote from "@/components/tc/quote/TC-Quote.vue";
import TCIconSelect from "@/components/projects/TCComponents/IconSelect.vue";
import { TCComponentApi } from "@/models/TCComponents/TCComponentApi.model";
import TCSpinner from "@/components/tc/spinner/TC-Spinner.vue";

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-hero": TCHero,
    "tc-headline": TCHeadline,
    "tc-select": TCSelect,
    "tc-input": TCInput,
    "tc-button": TCButton,
    "tc-icon-select": TCIconSelect,
    "tc-checkbox": TCCheckbox
  }
})
export default class TCComponentsDesigner extends Vue {
  public constants: {} = constants;
  public components: TCComponent[] = tcComponents.filter(
    x => x.group === "Components"
  )[0].components;
  public selectedComponent: string = "";
  public copyHTMLText: string = "Copy HTML Markup";
  public darkCanvas = true;
  public data: {} = {};
  public available: { [x: string]: string | any } = {
    Button: TCButton,
    Input: TCInput,
    Card: TCCard,
    Checkbox: TCCheckbox,
    Divider: TCDivider,
    Progress: TCProgress,
    Select: TCSelect,
    Spinner: TCSpinner,
    Quote: TCQuote,
    Header: TCHeader,
    Headline: TCHeadline,
    Hero: TCHero,
    Image: TCImage
  };

  mounted() {
    const loadedComp: string = this.$store.getters.designerComponent;
    if (loadedComp.length > 0) {
      this.selectedComponent = loadedComp;
      this.$store.commit("updateDesignerComponent", "");
    }
  }

  get componentList() {
    return this.components
      .map(x => x.name)
      .filter(x => Object.keys(this.available).includes(x));
  }
  get component(): TCComponent | undefined {
    if (this.selectedComponent)
      return this.components.filter(x => x.name === this.selectedComponent)[0];
    return undefined;
  }

  get html(): string {
    if (!this.component) return "";
    let html = "<tc-" + this.component.name.toLowerCase();
    Object.keys(this.data).forEach((x, i) => {
      const val = Object.values(this.data)[i];
      if (val)
        html += ` ${x}="${x === "icon" ? "ti-" : ""}${
          Object.values(this.data)[i]
        }"`;
    });
    return html + " />";
  }

  get allAttributes(): TCComponentApi[] {
    if (this.selectedComponent) return this.component!.api;
    return [];
  }

  get iconAttributes(): TCComponentApi[] {
    return this.allAttributes.filter(
      x => x.parameters && x.parameters === "Timo's Icons"
    );
  }
  get inputAttributes(): TCComponentApi[] {
    return this.allAttributes.filter(
      x => !(x.parameters || x.type === "boolean")
    );
  }
  get selectAttributes(): TCComponentApi[] {
    return this.allAttributes
      .filter(
        x =>
          ((x.parameters && x.parameters !== "Timo's Icons") ||
            x.type === "boolean") &&
          x.name !== "dark"
      )
      .map(x => {
        x.selectValues = x.parameters
          ? x.parameters.split(", ")
          : [true, false];
        return x;
      });
  }

  @Watch("selectedComponent")
  public switch(): void {
    this.data = {};
  }

  @Watch("darkCanvas", { deep: true })
  @Watch("data", { deep: true })
  public changed(): void {
    try {
      const ComponentClass = Vue.extend(this.available[this.selectedComponent]);
      const instance = new ComponentClass({
        propsData: { ...this.data, dark: this.darkCanvas },
        parent: this
      });
      // instance.$slots.default = ["Click me!"];
      instance.$mount(); // pass nothing
      // appendChild(instance.$el);
      const element: HTMLElement = this.$refs.container as HTMLElement;
      element.innerHTML = "";
      element.appendChild(instance.$el);
    } catch (error) {
      //
    }
  }

  public copyHTML(): void {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = this.html;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    this.copyHTMLText = "Copied!";
    setTimeout(() => {
      this.copyHTMLText = "Copy HTML Markup";
    }, 1500);
  }

  public downloadFile(): void {
    const str = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify({
        ...this.data,
        component: this.selectedComponent,
        dark: this.darkCanvas
      })
    )}`;
    const anchor = window.document.createElement("a");
    anchor.setAttribute("href", str);
    anchor.setAttribute("download", `${this.selectedComponent}.tccomponent`);
    anchor.click();
  }
  public fileLoaded(content: string) {
    const data = JSON.parse(content);
    if (data && data.component) {
      this.selectedComponent = data.component;
      this.darkCanvas = data.dark;
      delete data.component;
      delete data.dark;
      setTimeout(() => {
        this.data = data;
      }, 10);
    }
  }
}
</script>

<style lang="scss" scoped>
[content] {
  background: #000;
  min-height: calc(
    100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 100px
  );
}

[color-fff] {
  color: #fff;
}

/deep/ .tc-card {
  animation: none !important;
}

.tc-options {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  min-height: 100px;
}

.designer-canvas {
  background: #fafafa;
  transition: all 0.2s ease-in-out;
  padding: 20px;
  border-radius: 5px;
  overflow: hidden;

  &__dark {
    background: #000;
    .designer-canvas--header h1 {
      color: #fff;
    }
  }
  &--header div,
  &--header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  &--header {
    justify-content: space-between;
    .tc-button {
      min-width: 141.292px;
    }
  }
  &--element {
    text-align: center;
    padding-top: 20px;
    max-width: 100%;
    & > div {
      max-width: 100%;
    }
    /deep/ .tc-header {
      position: relative !important;
    }
  }
}

section[hero] {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    i {
      font-size: 3em;
      margin: 0 20px;
      opacity: 0.7;
    }
  }
  h1 {
    font-size: 3em;
    padding-left: 0.8em;
    &::before {
      margin-left: -0.8em;
      opacity: 0.8;
      content: "C";
      position: absolute;
      transform: rotate(-35deg);
    }
  }
}
span[select] {
  color: #08f;
  position: relative;
  span {
    padding-right: 25px;
  }
  i {
    top: 50%;
    position: absolute;
    margin-left: -20px;
    animation: move 0.8s ease-in-out infinite alternate-reverse;
  }
  @keyframes move {
    from {
      transform: translate(-3px, -50%);
    }
    to {
      transform: translate(3px, -50%);
    }
  }
}
</style>
