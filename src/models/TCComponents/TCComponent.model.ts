import { TCComponentApi } from "./TCComponentApi.model";
import { TCComponentSlots } from "./TCComponentSlots.model";

export class TCComponent {
  name: string = "";
  icon: string = "";
  api: TCComponentApi[] = [];
  slots: TCComponentSlots[] = [];
  customAPI?: boolean;
}
