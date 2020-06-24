import * as uuid from "uuid";
import { Component, Prop, Vue } from "vue-property-decorator";

const usedUUIDs: string[] = [];
@Component
export default class TCComponent extends Vue {
  @Prop({ default: false }) dark!: boolean;
  @Prop({ default: "primary" }) tccolor!: string;
  @Prop() tcbackground!: string;
  @Prop() color!: string;
  @Prop() background!: string;

  public uuid = "";
  public colors: string[] = ["primary", "error", "alarm", "success"];

  beforeCreate(): void {
    let u = uuid.v4();
    while (usedUUIDs.includes(u)) {
      console.log("Already exists:", u);
      u = uuid.v4();
    }
    this.uuid = u;
  }

  get uuid_(): string {
    return this.uuid;
  }

  get tccolor_(): string {
    if (this.color) return this.color;
    if (!this.tccolor || !this.colors.includes(this.tccolor.toLowerCase()))
      return this.colors[0];
    return this.tccolor.toLowerCase();
  }
}
