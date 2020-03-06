<template>
  <div>
    <tc-headline title="Quote"></tc-headline>
    <tc-quote title="Hallo Welt">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in
      commodi corrupti id distinctio sequi temporibus tempore, architecto
      quibusdam! Quisquam velit quia fuga a voluptatibus nam temporibus suscipit
      totam blanditiis?
    </tc-quote>
    <tc-quote>
      <h2 slot="title">Hallo h2</h2>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae
      nulla eum, explicabo est neque adipisci reprehenderit amet porro accusamus
      asperiores sapiente harum tenetur velit. Nisi obcaecati distinctio
      laudantium assumenda.
    </tc-quote>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeadline from "@/components/tc/headline/TC-Headline.vue";
import TCQuote from "@/components/tc/quote/TC-Quote.vue";
@Component({
  components: {
    "tc-headline": TCHeadline,
    "tc-quote": TCQuote
  }
})
export default class TCComponentsDetailQuote extends Vue {}
</script>
