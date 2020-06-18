<template>
  <div>
    <tc-headline title="Modal" />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, dicta. Ipsa
      reprehenderit, ab impedit nostrum magni, itaque dicta dolores dignissimos
      ut iusto facere officiis dolorem. Suscipit odit odio ea. Illum.
    </p>
    <tc-headline title="Slots" />
    <h3>default</h3>
    <h3>header</h3>
    <h3>buttons</h3>
    <tc-headline title="Example" />

    <tc-grid minWidth="350">
      <portfolio-code-example
        title="Modal Demo with used button slot"
        :attr="{
          'v-model': 'modalOpened',
          title: 'Modal Demo',
          subtitle: 'Very Simple'
        }"
        tag="tc-modal"
        inner="Open Dev-Tools for a mobile demo**<tc-button**slot='buttons'**variant='filled'**@click='modalOpened = false'**name='I like it'**icon='heart'**/>"
      >
        <tc-button icon="share" name="Open Modal" @click="modalOpened = true" />
      </portfolio-code-example>
    </tc-grid>

    <tc-modal v-model="modalOpened" title="Modal Demo" subtitle="Very Simple">
      Open Dev-Tools for a mobile demo
      <tc-button
        slot="buttons"
        variant="filled"
        @click="modalOpened = false"
        name="I like it"
        icon="heart"
      />
    </tc-modal>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import PortfolioCodeExample from "@/components/projects/TCComponents/CodeExample.vue";
import TCModal from "@/components/tc/modal/TC-Modal.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "portfolio-code-example": PortfolioCodeExample,
    "tc-modal": TCModal,
    "tc-button": TCButton,
    "tc-grid": TCGrid
  }
})
export default class TCComponentsDetailModal extends Vue {
  public modalOpened = false;
}
</script>
