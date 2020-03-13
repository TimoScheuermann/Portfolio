<template>
  <div class="container">
    <div class="times">
      <div v-for="(i, index) in Array(25)" :key="index" class="time">
        <div :class="{ full: index % 2 === 0, half: index % 2 === 1 }">
          <span>{{ Math.round(index / 2 + 8.5) }}</span>
          <span v-if="index % 2 === 1">:30</span>
        </div>
        <span v-if="index % 2 === 0">{{ index < 6 ? "AM" : "PM" }}</span>
      </div>
    </div>
    <div class="events">
      <event
        v-for="(e, index) in events"
        :key="'E_' + index"
        :start="e.start"
        :end="e.end"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Event from "./Event";
import EventVue from "./Event.vue";
@Component({
  components: {
    event: EventVue
  }
})
export default class CodingChallenge extends Vue {
  public events: Event[] = [
    { start: 30, end: 150 },
    { start: 540, end: 600 },
    { start: 560, end: 620 },
    { start: 610, end: 670 }
  ];
}
</script>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 100px auto;
  .times,
  .events {
    display: grid;
  }
  .times {
    grid-template-rows: repeat(25, 1fr);
    .time {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 5px;
      & > span {
        margin-left: 5px;
        font-size: 10px;
      }
      .full {
        font-weight: bold;
      }
      .half {
        font-size: 12px;
      }
    }
  }
  .events {
    grid-template-rows: repeat(150, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    background: #f0f0f0;
    margin: 13px 0;
    height: 720px;
    width: 600px;
    padding: 0 10px;
  }
}
</style>
