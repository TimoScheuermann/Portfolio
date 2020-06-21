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

    <tc-hero height="200" background="#000">
      <div class="title">Designer</div>
      <div class="icons">
        <i class="ti-color-fan" />
        <i class="ti-tools" />
        <i class="ti-component" />
      </div>
    </tc-hero>

    <div content>
      <tc-headline :dark="true" :title="selectedComponent && 'Properties'">
        <div>
          <span select v-if="!selectedComponent">
            <span>
              Select a component to get started
            </span>
            <i class="ti-arrow-right" />
          </span>
          <tc-button
            v-else
            name="Examples"
            icon="exchange"
            variant="opaque"
            tccolor="alarm"
            :to="{
              name: constants.projectRoutes.timos_components_detail,
              params: { comp: selectedComponent }
            }"
          />
          <tc-select
            :dark="true"
            placeholder="Component"
            v-model="selectedComponent"
            :values="componentList"
          />
        </div>
      </tc-headline>

      <transition-group
        name="options-trans"
        class="tc-properties"
        is="tc-grid"
        :minWidth="175"
      >
        <tc-icon-select
          v-for="api in iconAttributes"
          :key="api.name"
          :title="api.name"
          v-model="data[api.name]"
          :tooltip="api.description"
        />
        <tc-select
          v-for="api in selectAttributes"
          :dark="true"
          :title="api.name"
          :key="api.name"
          :placeholder="api.name"
          :values="api.selectValues"
          v-model="data[api.name]"
          :tooltip="api.description"
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
          :tooltip="api.description"
        />
      </transition-group>

      <div v-if="component && component.slots && component.slots.length > 0">
        <tc-headline :dark="true" title="Slots" />
        <tc-grid>
          <tc-textarea
            v-for="slot in component.slots"
            :key="slot.name"
            :title="slot.name"
            :tooltip="slot.description"
            v-model="slots[slot.name]"
            :dark="true"
          />
        </tc-grid>
      </div>

      <div v-if="component">
        <tc-headline title="Output" :dark="true">
          <tc-checkbox :dark="true" v-model="darkCanvas" title="Dark Canvas" />
          <tc-button
            :name="copyHTMLText"
            @click="copyHTML()"
            style="min-width: 141px"
          />
        </tc-headline>
        <div
          class="designer-canvas"
          :class="{ 'designer-canvas__dark': darkCanvas }"
        >
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
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
import TCTextarea from "@/components/tc/textarea/TC-Textarea.vue";
import TCSegments from "@/components/tc/segments/TC-Segments.vue";
import TCSidebar from "@/components/tc/sidebar/TC-Sidebar.vue";
import TCSlider from "@/components/tc/slider/TC-Slider.vue";
import TCSteps from "@/components/tc/steps/TC-Steps.vue";
import TCSwitch from "@/components/tc/switch/TC-Switch.vue";
import TCTabbar from "@/components/tc/tabbar/TC-Tabbar.vue";
import TCTable from "@/components/tc/table/TC-Table.vue";
import TCTooltip from "@/components/tc/tooltip/TC-Tooltip.vue";
import TCBadge from "@/components/tc/badge/TC-Badge.vue";

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-hero": TCHero,
    "tc-headline": TCHeadline,
    "tc-select": TCSelect,
    "tc-input": TCInput,
    "tc-button": TCButton,
    "tc-icon-select": TCIconSelect,
    "tc-checkbox": TCCheckbox,
    "tc-grid": TCGrid,
    "tc-textarea": TCTextarea
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
  public slots = {};
  public available: { [x: string]: string | any } = {
    Badge: TCBadge,
    Button: TCButton,
    Card: TCCard,
    Checkbox: TCCheckbox,
    Divider: TCDivider,
    Header: TCHeader,
    Headline: TCHeadline,
    Hero: TCHero,
    Image: TCImage,
    Input: TCInput,
    Link: TCLink,
    List: TCList,
    Modal: TCModal,
    Navbar: TCNavbar,
    Progress: TCProgress,
    Quote: TCQuote,
    Revealer: TCRevealer,
    "Scroll Up": TCScrollUp,
    Segments: TCSegments,
    Select: TCSelect,
    Sidebar: TCSidebar,
    Slider: TCSlider,
    Spinner: TCSpinner,
    Steps: TCSteps,
    Switch: TCSwitch,
    Tabbar: TCTabbar,
    Table: TCTable,
    Tooltip: TCTooltip
  };

  mounted() {
    let loadedComp: string = this.$store.getters.designerComponent;
    // loadedComp = "Button";
    if (loadedComp.length > 0) {
      this.selectedComponent = loadedComp;
      this.$store.commit("updateDesignerComponent", "");
      this.changed();
    }
  }

  get componentList() {
    return this.components
      .filter(x => x.api.length > 0)
      .map(x => x.name)
      .filter(x => Object.keys(this.available).includes(x))
      .sort((a, b) => a.localeCompare(b));
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
    this.slots = {};
    this.$nextTick(() => {
      this.changed();
    });
  }

  @Watch("darkCanvas", { deep: true })
  @Watch("data", { deep: true })
  @Watch("slots", { deep: true })
  public changed(): void {
    try {
      const ComponentClass = Vue.extend(this.available[this.selectedComponent]);
      const instance = new ComponentClass({
        propsData: { ...this.data, dark: this.darkCanvas },
        parent: this
      });
      for (const [key, value] of Object.entries(this.slots)) {
        (instance.$slots as any)[key] = [value];
      }

      instance.$mount();
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
  overflow-x: hidden;
  padding-top: 0px;
}

[color-fff] {
  color: #fff;
}

.designer-canvas {
  background: #fafafa;
  transition: all 0.2s ease-in-out;
  padding: 20px;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  max-width: 100%;

  &__dark {
    background: #000;
  }
  /deep/ .tc-header {
    position: relative !important;
  }
  /deep/ .tc-card {
    animation: none !important;
  }
}

.tc-hero {
  color: #fff;
  @media #{$isDesktop} {
    padding-left: 45px;
  }
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 4em;
  }
  .icons {
    opacity: 0.25;
    font-size: 11em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    text-align: center;
    padding-top: 50px;
    i {
      margin: 0 20px;
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
