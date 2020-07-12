<template>
  <div content class="project-uno">
    <tc-modal :dark="true" v-model="modalOpened" title="Spieler hinzufügen">
      <tc-input
        :dark="true"
        title="Spielername"
        v-model="newUserName"
        icon="user"
      />
      <div slot="footer">
        <tc-button
          variant="filled"
          name="Hinzufügen"
          icon="plus"
          @click="addPlayer()"
        />
      </div>
    </tc-modal>

    <tc-header variant="sticky" :dark="true" title="UNO">
      <tc-button variant="filled" icon="plus" @click="modalOpened = true" />
    </tc-header>

    <div class="players">
      <div class="player" v-for="(p, i) in players" :key="p.name">
        <div class="name" :class="{ w: p.name == getWinner().name }">
          {{ p.name }}
        </div>
        <div class="perc">{{ getWinPerc(p) || '0' }}</div>
        <div class="points">{{ getPoints(p) }}</div>
        <div class="kd">{{ getWins(p) }}/{{ getLoses(p) }}</div>
        <div class="myTurn" v-if="games.length % players.length == i">
          <i class="ti-circle"></i>
        </div>
      </div>
    </div>

    <div v-if="players.length == 2">
      <div class="options">
        Aktuell muss <b>{{ getLooser().name }}</b>
        <b style="color: #08f;">
          {{ (getPoints(getLooser()) - getPoints(getWinner())) / 100 }}€
        </b>
        zahlen
      </div>
    </div>

    <div class="options">
      <div class="head">
        <h2>Rundenergebnis #{{ games.length + 1 }}</h2>
        <tc-button name="Speichern" @click="save()" />
      </div>
      <div v-if="players.length != 2">
        <tc-select
          v-model="player_winner"
          :values="playerNames"
          placeholder="Gewinner"
          title="Gewinner"
          :dark="true"
        />
      </div>

      <tc-select
        v-model="player_looser"
        :values="playerNames"
        placeholder="Verlierer"
        title="Verlierer"
        :dark="true"
      />

      <tc-input
        title="Punktzahl"
        type="number"
        :dark="true"
        :buttons="true"
        v-model="newPoints"
      />
    </div>

    <div class="options">
      <h2>Graph</h2>
      <apexchart
        height="400"
        ref="chart"
        type="line"
        :options="options"
        :series="series"
      />
    </div>

    <div class="options">
      <h2>Spiele</h2>
      <tc-table :dark="true">
        <tr>
          <th>Spiel #</th>
          <th>Gewinner</th>
          <th>Verlierer</th>
          <th>Punkte</th>
          <th></th>
        </tr>
        <tr v-for="(g, index) in games" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ g.winner.name }}</td>
          <td>{{ g.looser.name }}</td>
          <td>{{ g.points }}</td>
          <td @click="removeGame(index)"><i class="ti-cross"></i></td>
        </tr>
      </tc-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

import { Player } from './Player.model';
import { Game } from './Game.model';
import VueApexCharts from 'vue-apexcharts';

interface UpdateFunction {
  (series: { name: string; data: number[] }[]): void;
}
interface ChartElement extends HTMLElement {
  updateSeries: UpdateFunction;
}

@Component({
  components: {
    apexchart: VueApexCharts,
  },
})
export default class Uno extends Vue {
  modalOpened = false;
  newUserName = '';
  players: Player[] = [];
  games: Game[] = [];
  currentPlayer = 0;
  newPoints = 0;
  player_looser = '';
  player_winner = '';
  public options = {
    chart: {
      id: 'uno-point-chart',
      background: '#252525',
    },
    theme: { mode: 'dark' },
    xaxis: {
      categories: [],
    },
  };
  public series: { name: string; data: number[] }[] = [];

  @Watch('players')
  @Watch('games')
  @Watch('series')
  public changed(): void {
    this.$store.state.uno.players = this.players;
    this.$store.state.uno.games = this.games;
    this.$store.state.uno.series = this.series;
  }

  created(): void {
    if (this.$store.state.uno.players.length > 0) {
      this.players = this.$store.state.uno.players;
      this.games = this.$store.state.uno.games;
      this.series = this.$store.state.uno.series;
    }
    // this.addPlayer("Timo");
    // this.addPlayer("Petra");
  }

  get playerNames(): string[] {
    return this.players.map((x: Player) => x.name);
  }

  public addPlayer(name = ''): void {
    if (name.length == 0) name = this.newUserName;
    this.players.push({ name: name } as Player);
    this.newUserName = '';
    this.modalOpened = false;
    this.series.push({ name: name, data: [] });
  }
  public getWinPerc(player: Player): number {
    return (
      Math.round(
        (this.games.filter((x: Game) => x.winner.name == player.name).length /
          this.games.length) *
          10000
      ) / 100
    );
  }
  public getPoints(player: Player): number {
    let points = 0;
    this.games
      .filter((x: Game) => x.looser.name == player.name)
      .forEach((x: Game) => (points += x.points));
    return points;
  }
  public getWins(player: Player): number {
    return this.games.filter((x: Game) => x.winner.name == player.name).length;
  }
  public getLoses(player: Player): number {
    return this.games.filter((x: Game) => x.looser.name == player.name).length;
  }
  public getWinner(): Player {
    return this.players
      .map((x: Player) => {
        x.total = this.getPoints(x);
        return x;
      })
      .sort((a, b) => (a.total || 0) - (b.total || 0))[0];
  }
  public getLooser(): Player {
    return this.players
      .map((x: Player) => {
        x.total = this.getPoints(x);
        return x;
      })
      .sort((b, a) => (a.total || 0) - (b.total || 0))[0];
  }
  public removeGame(index: number): void {
    this.games = this.games.filter((x, i) => i != index);
    this.series.map(
      (x, a) => (x.data = x.data.filter((x, i) => i != index && a == a))
    );
    (this.$refs.chart as ChartElement).updateSeries(this.series);
  }
  public getPlayer(name: string): Player {
    return this.players.filter((x: Player) => x.name === name)[0];
  }
  public save(): void {
    if (this.player_looser) {
      const winner: Player =
        this.players.length != 2
          ? this.getPlayer(this.player_winner)
          : this.players.filter((x: Player) => x.name != this.player_looser)[0];

      this.games.push({
        looser: this.getPlayer(this.player_looser),
        points: +this.newPoints,
        winner: winner,
      });
      this.currentPlayer++;
      this.series.map((x, i) => {
        const old = x.data[x.data.length - 1] || 0 || i;
        if (x.name === this.player_looser) {
          x.data = [...x.data, +this.newPoints + old];
        } else {
          x.data = [...x.data, old];
        }
      });

      (this.$refs.chart as ChartElement).updateSeries(this.series);
    }
  }
}
</script>
<style lang="scss">
.tc-input,
.tc-select {
  margin-top: 40px !important;
}
td i {
  color: $error;
}
</style>
<style lang="scss" scoped>
[content] {
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-bottom: calc(60px + env(safe-area-inset-bottom));
}
.uno-modal-input {
  display: flex;
  justify-content: center;
}
.filler {
  flex-grow: 1;
}
h2 {
  margin: 0 {
    bottom: 10px;
  }
}
.options {
  background: lighten($color, 8%);
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tit {
    font-weight: bold;
    margin-bottom: 3px;
    opacity: 0.8;
  }
}

.players {
  margin-top: 20px;
  .player {
    margin-top: 10px;
    background: lighten($color, 8%);
    padding: 20px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 100px repeat(3, 1fr) 20px;
    .name {
      font-weight: bold;
      &.w {
        color: goldenrod;
        &::before {
          content: '👑 ';
        }
      }
    }
    .perc,
    .points,
    .kd {
      text-align: center;
    }
    .perc {
      &::after {
        content: '%';
      }
    }
    .points {
      font-weight: bold;
    }
    .myTurn {
      text-align: right;
      color: $primary;
      font-weight: bold;
    }
  }
}
</style>
