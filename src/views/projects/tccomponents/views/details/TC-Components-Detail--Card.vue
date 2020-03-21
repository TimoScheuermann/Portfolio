<template>
  <div>
    <tc-headline title="Cards"></tc-headline>
    <tc-grid>
      <tc-card title="Only title" />
      <tc-card subtitle="Only subtitle" />
      <tc-card rounded="true">
        <img
          src="https://i.ytimg.com/vi/y47SO3UxN3s/maxresdefault.jpg"
          slot="media"
        />
      </tc-card>
      <tc-card>
        <span>only content</span>
      </tc-card>
      <tc-card title="Main" subtitle="Sub"></tc-card>
      <tc-card title="Main" rounded="true">
        <img
          src="https://i.ytimg.com/vi/y47SO3UxN3s/maxresdefault.jpg"
          slot="media"
        />
      </tc-card>

      <tc-card title="Main" subtitle="Sub">
        <img
          src="https://i.ytimg.com/vi/y47SO3UxN3s/maxresdefault.jpg"
          slot="media"
        />
      </tc-card>

      <tc-card title="Main" subtitle="Sub">
        Hallo Welt
      </tc-card>
      <tc-card title="Main" subtitle="Sub">
        <img
          src="https://i.ytimg.com/vi/y47SO3UxN3s/maxresdefault.jpg"
          slot="media"
        />
        Hallo Welt mit Bild
      </tc-card>
    </tc-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCCard from "@/components/tc/card/TC-Card.vue";
import TCGrid from "@/components/tc/_layout/grid/TC-Grid.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-card": TCCard,
    "tc-grid": TCGrid
  }
})
export default class TCComponentsDetailCard extends Vue {}
</script>
