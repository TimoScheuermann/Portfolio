<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class TCAutoBackgroundMixin extends Vue {
  [x: string]: any;

  public lightContainer: HTMLElement[] = [];
  public darkContainer: HTMLElement[] = [];
  public mainContainer!: HTMLElement;
  public isDark = this.dark;

  public _mounted(): void {
    if (this.autoColor) {
      this.mainContainer = document.getElementById(this.id)!;
      window.addEventListener("scroll", this.handleScroll);
      this.updateContainerList();
      this.handleScroll();
      console.log("scroll mounted for auto color");
    }
  }
  public _destroyed(): void {
    window.removeEventListener("scroll", this.handleScroll);
  }

  public _routeChanged(): void {
    if (this.autoColor) {
      this.updateContainerList();
    }
  }

  public handleScroll() {
    if (this.darkContainer.length > 0 || this.lightContainer.length > 0) {
      // console.log("scroll");
      if (
        this.darkContainer.filter(x => this.collide(x, this.mainContainer))
          .length > 0
      ) {
        this.isDark = true;
        // console.log("Over dark", this.isDark);
        return;
      }
      if (
        this.lightContainer.filter(x => this.collide(x, this.mainContainer))
          .length > 0
      ) {
        // console.log("Over light");
        this.isDark = false;
        return;
      }
    }

    // console.log("Over nothing");
    this.isDark = this.dark;
  }

  public updateContainerList(): void {
    this.$nextTick(() => {
      for (let t of ["dark", "light"]) {
        this[t + "Container"] = [];
        document.querySelectorAll("[tc-" + t + "-container]").forEach(x => {
          this[t + "Container"].push(x as HTMLElement);
          // console.log("Found ", x);
        });
      }
    });
  }

  public collide(el1: HTMLElement, el2: HTMLElement): boolean {
    var rect1 = el1.getBoundingClientRect();
    var rect2 = el2.getBoundingClientRect();

    return !(
      rect1.top > rect2.bottom ||
      rect1.right < rect2.left ||
      rect1.bottom < rect2.top ||
      rect1.left > rect2.right
    );
  }
}
</script>
