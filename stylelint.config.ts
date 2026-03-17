import type { Config } from 'stylelint';

const config: Config = {
    extends: ["stylelint-config-standard-scss"],
    rules: {
        "selector-class-pattern": null,
    },
};

export default config;