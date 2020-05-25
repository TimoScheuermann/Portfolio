<template>
  <div class="tc-components-designer">
    <tc-header
      :dark="true"
      :backTo="{ name: constants.projectRoutes.timos_components }"
      backName="Overview"
      title="Component Designer"
    />

    <div content>
      <section hero>
        <div>
          <i class="ti-color-fan"></i>
          <i class="ti-tools"></i>
          <i class="ti-component"></i>
        </div>
        <h1>Component Designer</h1>
      </section>

      <tc-headline :dark="true" title="Toolbar">
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
          <tc-icon-select
            v-for="api in iconAttributes"
            :key="api.name"
            v-model="data[api.name]"
          />
          <tc-select
            :dark="true"
            v-for="api in attributesWithFixedValues"
            :key="api.name"
            :placeholder="api.name"
            :values="api.parameters.split(', ')"
            v-model="data[api.name]"
          />
          <tc-input
            :dark="true"
            v-for="api in attributes"
            :key="api.name"
            :placeholder="api.name"
            v-model="data[api.name]"
          />
        </div>
      </tc-headline>
      <h1>{{ selectedComponent }}</h1>
      <!-- <p>{{ component }}</p>
      <p>Data: {{ data }}</p> -->

      <div ref="container"></div>
      <!-- <component :is="'tc-' + selectedComponent.toLowerCase()" /> -->
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import constants from "@/constants";
import components from "@/components/tc";
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

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-hero": TCHero,
    "tc-headline": TCHeadline,
    "tc-select": TCSelect,
    "tc-input": TCInput,
    "tc-button": TCButton,
    "tc-icon-select": TCIconSelect,
    TCCard,
    TCCheckbox,
    TCDivider,
    TCHeader,
    TCHeadline,
    TCHero,
    TCImage,
    TCLink,
    TCList,
    TCModal,
    TCNavbar,
    TCProgress,
    TCQuote,
    TCRevealer,
    TCScrollUp
  }
})
export default class TCComponentsDesigner extends Vue {
  public constants: {} = constants;
  public components: TCComponent[] = components;
  public selectedComponent: string = "";
  public data: {} = {};
  public available: { [x: string]: any } = {
    Button: TCButton,
    Input: TCInput,
    Card: TCCard,
    Checkbox: TCCheckbox,
    Divider: TCDivider,
    Progress: TCProgress
  };

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

  get iconAttributes() {
    if (this.selectedComponent)
      return this.component!.api.filter(x => x.parameters).filter(
        x => x.parameters == "Timo's Icons"
      );
  }

  get attributes() {
    if (this.selectedComponent)
      return this.component!.api.filter(x => !x.parameters);
  }
  get attributesWithFixedValues() {
    if (this.selectedComponent)
      return this.component!.api.filter(x => x.parameters).filter(
        x => x.parameters !== "Timo's Icons"
      );
  }

  @Watch("selectedComponent")
  public switch(): void {
    this.data = {};
  }

  @Watch("data", { deep: true })
  public changed(): void {
    console.log("changed");
    var ComponentClass = Vue.extend(this.available[this.selectedComponent]);
    var instance = new ComponentClass({
      propsData: { ...this.data, dark: true },
      parent: this
    });
    // instance.$slots.default = ["Click me!"];
    instance.$mount(); // pass nothing
    // appendChild(instance.$el);
    const element: HTMLElement = this.$refs.container as HTMLElement;
    element.innerHTML = "";
    element.appendChild(instance.$el);
  }
}
</script>

<style lang="scss" scoped>
[content] {
  background: #000;
  color: #fff;
  min-height: calc(
    100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 100px
  );
}

section[hero] {
  padding-top: 20px;
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
