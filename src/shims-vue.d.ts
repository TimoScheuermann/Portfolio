declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.txt" {
  const content: string;
  export default content;
}

declare module "markdown-it";
declare module "uuid";
