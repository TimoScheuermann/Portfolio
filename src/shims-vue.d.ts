declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.txt" {
  const content: string;
  export default content;
}

declare module "tccomponent_vue";
declare module "markdown-it";
declare module "uuid";
declare module "modernizr";
declare module "nprogress";
declare module "vue-router-md-transition";
