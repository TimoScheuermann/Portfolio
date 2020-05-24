<template>
  <div content class="project-uno">
    <tc-modal :dark="true" v-model="modalOpened" title="Spieler hinzufügen">
      <div class="uno-modal-input">
        <tc-input
          :dark="true"
          title="Spielername"
          v-model="newUserName"
          icon="user"
        />
      </div>
      <div slot="buttons">
        <tc-button
          variant="filled"
          name="Hinzufügen"
          icon="plus"
          @click="addPlayer()"
        ></tc-button>
      </div>
    </tc-modal>

    <tc-header :dark="true" title="UNO">
      <tc-button
        variant="filled"
        icon="plus"
        @click="modalOpened = true"
      ></tc-button>
    </tc-header>

    <div class="players">
      <div class="player" v-for="(p, i) in players" :key="p.name">
        <div class="name" :class="{ w: p.name == getWinner().name }">
          {{ p.name }}
        </div>
        <div class="perc">{{ getWinPerc(p) || "0" }}</div>
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
        <b style="color: red">
          {{ (getPoints(getLooser()) - getPoints(getWinner())) / 100 }}€
        </b>
        zahlen
      </div>
    </div>

    <div class="options">
      <div class="head">
        <h2>Rundenergebnis</h2>
        <tc-button name="Speichern" @click="save()" />
      </div>
      <div v-if="players.length != 2">
        <div class="tit">Gewinner</div>
        <select v-model="player_winner" name="Gewinner" id="winnerSelect">
          <option v-for="p in players" :key="p.name + '_s'" :value="p">
            {{ p.name }}
          </option>
        </select>
      </div>

      <div>
        <div class="tit">Verlierer</div>
        <select v-model="player_looser" name="Verlierer" id="looserSelect">
          <option v-for="p in players" :key="p.name + '_s'" :value="p">
            {{ p.name }}
          </option>
        </select>
      </div>

      <tc-input
        title="Punktzahl"
        type="number"
        :dark="true"
        :buttons="true"
        v-model="newPoints"
      />
    </div>
    <tc-revealer icon="dots" :title="'Spiele ' + games.length">
      <div class="games">
        <table>
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
        </table>
      </div>
    </tc-revealer>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCModal from "@/components/tc/modal/TC-Modal.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
import TCInput from "@/components/tc/input/TC-Input.vue";
import { Player } from "./Player.model";
import { Game } from "./Game.model";
import TCRevealer from "@/components/tc/revealer/TC-Revealer.vue";
import TCDivider from "@/components/tc/divider/TC-Divider.vue";
import TCCard from "../../../components/tc/card/TC-Card.vue";

@Component({
  components: {
    "tc-header": TCHeader,
    "tc-modal": TCModal,
    "tc-button": TCButton,
    "tc-input": TCInput,
    "tc-revealer": TCRevealer,
    "tc-divider": TCDivider,
    "tc-card": TCCard
  }
})
export default class Uno extends Vue {
  modalOpened: boolean = false;
  newUserName: string = "";
  players: Player[] = [];
  games: Game[] = [];
  currentPlayer: number = 0;
  newPoints: number = 0;
  player_looser: Player = { name: "" };
  player_winner: Player = { name: "" };

  public addPlayer(): void {
    this.players.push({ name: this.newUserName } as Player);
    this.newUserName = "";
    this.modalOpened = false;
  }
  public getWinPerc(player: Player): number {
    return (
      Math.round(
        (this.games.filter(x => x.winner.name == player.name).length /
          this.games.length) *
          10000
      ) / 100
    );
  }
  public getPoints(player: Player): number {
    var points = 0;
    this.games
      .filter(x => x.looser.name == player.name)
      .forEach(x => (points += x.points));
    return points;
  }
  public getWins(player: Player): number {
    return this.games.filter(x => x.winner.name == player.name).length;
  }
  public getLoses(player: Player): number {
    return this.games.filter(x => x.looser.name == player.name).length;
  }
  public getWinner(): Player {
    return this.players
      .map(x => {
        x.total = this.getPoints(x);
        return x;
      })
      .sort((a, b) => a.total! - b.total!)[0];
  }
  public getLooser(): Player {
    return this.players
      .map(x => {
        x.total = this.getPoints(x);
        return x;
      })
      .sort((b, a) => a.total! - b.total!)[0];
  }
  public removeGame(index: number) {
    this.games = this.games.filter((x, i) => i != index);
  }
  public save() {
    this.games.push({
      looser: this.player_looser,
      points: +this.newPoints,
      winner:
        this.players.length != 2
          ? this.player_winner
          : this.players.filter(x => x.name != this.player_looser.name)[0]
    });
    this.currentPlayer++;
  }
}
</script>

<style lang="scss" scoped>
@import "../../../scss/variables.scss";
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
  .tc-input {
    width: 100%;
    /deep/ .tc-input--container {
      width: 100%;
    }
  }
  select {
    width: 100%;
    background: #444444;
    border-radius: $border-radius;
    margin: 3px;
    color: #fff;
    outline: none;
    padding: 5px;
    font: inherit;
    text-align: center;
    border: none;
  }
}

.games {
  table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    tr {
      td,
      th {
        padding: 5px 0;
      }
      td {
        border-top: 1px solid rgba(#fff, 0.5);
        &:first-child {
          color: #08f;
          font-weight: bold;
        }
        i {
          color: red;
        }
      }
    }
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
          content: "👑 ";
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
        content: "%";
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
