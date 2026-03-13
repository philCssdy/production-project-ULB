declare module "*.svg" {
  import * as React from "react";
  const SvgModule: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SvgModule;
}


declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}


declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}


declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";

declare const __IS_DEV__: boolean;