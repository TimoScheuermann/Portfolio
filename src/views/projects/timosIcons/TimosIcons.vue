<template>
  <div class="project">
    <div class="title">Timo's Icons</div>
    <div class="projectContent">
      <div class="landing">
        <div class="logo">
          <img src="../../../assets/projects/timosicons/timosicons.svg" />
        </div>
        <div class="content">
          <div class="description">
            A Dali clock hung on the wall between the bookcases, its distorted
            face sagging to the Tank War, mouth touched with hot gold as a
            gliding cursor struck sparks from the wall between the bookcases,
            its distorted face sagging to the bare concrete floor. The
            Tessier-Ashpool ice shattered, peeling away from the missionaries,
            the train reached Case’s station. He woke and found her stretched
            beside him in the human system. Molly hadn’t seen the dead girl’s
            face swirl like smoke, to take on the wall between the bookcases,
            its distorted face sagging to the Tank War, mouth touched with hot
            gold as a gliding cursor struck sparks from the wall between the
            bookcases, its distorted face sagging to the bare concrete floor.
            Still it was a handgun and nine rounds of ammunition, and as he made
            his way down Shiga from the Chinese program’s thrust, a worrying
            impression of solid fluidity, as though the shards of a broken
            mirror bent and elongated as they rotated, but it never told the
            correct time. Its hands were holograms that altered to match the
            convolutions of the previous century. Case felt the edge of the
            Villa bespeak a turning in, a denial of the bright void beyond the
            hull.
          </div>
          <div class="buttons">
            <a gallery href="/projects/Timos-Icons#gallery">
              <span>View Gallery</span>
            </a>
            <a default href="#">
              <span>How to use</span>
            </a>
          </div>
        </div>
      </div>
      <!-- Ende Landing -->

      <div class="iconGallery" id="gallery">
        <div class="title">
          <div class="items">
            <div class="text">All {{ iconsSorted.length }} Icons</div>
            <div class="actions">
              <div class="checkbox">
                <input type="checkbox" name="check" id="check" />
                <label for="check" @click="toggleExtendedInfo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                  >
                    <g id="border" fill="none" stroke="#000" stroke-width="10">
                      <rect x="5" y="5" width="90" height="90" rx="10" fill="none" />
                    </g>
                    <path
                      id="arrow"
                      d="M1550,970.667l14.167,14.167L1601,948l-36.833,36.833Z"
                      transform="translate(-1525 -915.917)"
                      fill="none"
                      stroke="$primary"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="10"
                    />
                  </svg>
                  <span>Show Layer Count</span>
                </label>
              </div>
              <div class="action" @click="sortDirection *= -1">
                <div class="title">Sort by name</div>
                <div class="indicator" :class="{ alphabet: sortDirection == 1 }">
                  <i class="ti ti-arrow"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="bar"></div>
        </div>
        <transition-group name="icon-trans" tag="div" class="gallery">
          <icon-tile v-for="icon in iconsSorted" :key="icon.name" :icon="icon"></icon-tile>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import icons from "@/icon5";
import IconTile from "../../../components/projects/TimosIcons/IconTile.vue";
@Component({
  components: {
    "icon-tile": IconTile
  }
})
export default class TimosIcons extends Vue {
  public sortDirection: number = 1;
  public extendedInformation: boolean = false;

  get iconsSorted() {
    return icons.sort(
      (a, b) => this.sortDirection * a.name.localeCompare(b.name)
    );
  }
  public toggleExtendedInfo(): void {
    this.extendedInformation = !this.extendedInformation;
  }
}
</script>

<style lang="scss" scoped>
@import "../shared.scss";
// @import "../../../icons/style.css";

.icon-trans-move {
  transition: all 0.4s ease-in-out;
}
.icon-trans-enter-active,
.icon-trans-leave-active {
  transition: all 0.4s;
}
.icon-trans-enter {
  opacity: 0;
  transform: translateY(50px);
}
.icon-trans-leave-to {
  transition: all 0.3s ease-in-out;
  opacity: 0;
  filter: brightness(0);
  transform: scale(0);
}

.landing {
  margin: 10px 0px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  .logo {
    img {
      max-width: 100%;
    }
  }
  .content {
    background: var(--background);
    margin: 30px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 4px 8px 20px rgba(75, 29, 29, 0.19);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .description {
      margin-bottom: 20px;
    }
    .buttons {
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items: center;

      a {
        text-decoration: none;
        color: inherit;
        position: relative;
        padding: 3px;
        font-weight: 600;
        border-radius: 100px;
        z-index: 1;
        overflow: hidden;
        box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.19);
        &:hover {
          filter: brightness(110%);
        }

        &[default] {
          border: 1px solid transparent;
          transition: 0.2s ease-in-out;
          &:hover {
            border-color: currentColor;
          }
        }

        span {
          display: block;
          padding: 8px 38px;
          border-radius: inherit;
        }

        &[gallery] {
          span {
            color: #fff;
            background: $primary;
          }
          &::before {
            position: absolute;
            content: "";
            width: 300px;
            height: 300px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
            background: linear-gradient(to bottom right, $primary, #fff);
            animation: anim-loading 1s linear infinite both;
          }
        }
      }

      @keyframes anim-loading {
        to {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
    }
  }
}
.iconGallery {
  & > .title {
    padding: 10px;
    margin-bottom: 10px;
    position: sticky;
    top: calc(50px + var(--safe-area-inset-top));
    background: var(--background);
    z-index: 100;
    .items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        font-size: 2em;
        font-weight: 600;
      }
      .actions {
        display: flex;
        .action {
          background: var(--paragraph);
          padding: 5px 10px;
          border-radius: 5px;
          transition: 0.2s ease-in-out;
          border: 1px solid transparent;
          cursor: pointer;
          user-select: none;
          margin-left: 10px;

          &:hover {
            border-color: rgba(var(--color-rgb), 0.4);
          }

          .title,
          .indicator {
            display: inline-block;
          }
          .title {
            font-weight: bold;
            opacity: 0.8;
          }
          .indicator {
            transition: 0.5s ease-in-out;
            margin-left: 5px;
            color: $primary;
            transform: rotate(90deg) rotateY(180deg);
            &.alphabet {
              transform: rotate(90deg);
            }
          }
        }
      }
    }
    .bar {
      height: 1px;
      background: rgba(17, 17, 17, 0.5);
    }
  }
  .gallery {
    display: grid;
    grid: {
      template-columns: repeat(6, 1fr);
      gap: 20px;
    }
    max-width: 100%;
  }
}
</style>
