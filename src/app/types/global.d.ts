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
