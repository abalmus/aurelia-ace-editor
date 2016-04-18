System.config({
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "ace": "github:ajaxorg/ace-builds@1.2.3",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.2",
    "npm:aurelia-polyfills@1.0.0-beta.1.1.2": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    }
  }
});
