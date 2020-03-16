import { TCComponentApi } from "./TCComponentApi.model";

export class TCComponent {
  name: string = "";
  icon: string = "";
  api: TCComponentApi[] = [];
  customAPI?: boolean;
}
