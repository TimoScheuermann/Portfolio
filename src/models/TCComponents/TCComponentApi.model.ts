export class TCComponentApi {
  name: string = "";
  type: string = "";
  parameters?: string;
  description: string = "";
  default?: string | boolean;
  selectValues?: (string | boolean)[];
}
