// глобальные SCSS файлы без modules
declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// SCSS Modules
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
// SVG modules
declare module "*.svg" {
  import * as React from "react";

  const SVG: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  export default SVG;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";

declare const __IS_DEV__: boolean;
