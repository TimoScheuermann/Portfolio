<template>
  <tc-card
    rounded="true"
    :shadow="false"
    :title="repo.name"
    :subtitle="repo.description"
  >
    <div v-if="index == 0" class="indicator latest">
      Latest changes
    </div>
    <div class="indicator" v-if="repo.language" :class="repo.language">
      {{ repo.language }}
    </div>

    <tc-button name="View on GitHub" :href="repo.html_url" />
    <tc-divider name="Stats" icon="chart-line" />
    <div class="statistics">
      <div class="statistic" v-for="change in changes" :key="change.attr">
        <i :class="'ti-' + change.icon"></i>
        <div class="time">{{ convertDate(repo[change.attr]) }}</div>
        <div class="name">{{ change.title }}</div>
      </div>
    </div>
  </tc-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class PortfolioRepository extends Vue {
  @Prop() repo!: Record<string, unknown>;
  @Prop() index!: number;

  public changes: { icon: string; attr: string; title: string }[] = [
    {
      icon: 'gears',
      attr: 'created_at',
      title: 'Created',
    },
    {
      icon: 'tools',
      attr: 'updated_at',
      title: 'Updated',
    },
  ];

  public convertDate(dateString: string): string {
    const date = new Date(dateString);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  }
}
</script>
<style lang="scss" scoped>
.indicator {
  $pad: 5px;
  user-select: none;
  position: absolute;
  top: $pad;
  border: 1px solid white;
  border-radius: 10px;
  padding: 5px 10px;
  transform: scale(0.8);
  &:not(.latest) {
    transform-origin: top left;
    left: $pad;
  }
  &.latest {
    transform-origin: top right;
    right: $pad;
    color: #e74c3c;
    border-color: #e74c3c;
  }

  $lang: (
    latest: #e74c3c,
    Vue: #2ecc71,
    CSS: #3498db,
    Java: #f1c40f,
    HTML: #e67e22,
    TypeScript: #2980b9,
  );

  @each $l, $c in $lang {
    &.#{$l} {
      color: $c;
      border-color: $c;
    }
  }
}

.tc-divider {
  margin: {
    bottom: 15px;
    top: 20px;
  }
}
.statistics {
  display: flex;
  justify-content: space-around;
  .statistic {
    i {
      font-size: 2em;
    }
    .time {
      color: $primary;
      font-weight: bold;
      margin: 5px 0;
    }
    .name {
      opacity: 0.8;
    }
  }
}
</style>
