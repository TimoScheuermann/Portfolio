export class RouteOptions {
  name: string = "home";
  path: string = "";
  component: string = "WorkGallery";
  subPages?: RouteOptions[] = [];
  meta: any = {};
}
