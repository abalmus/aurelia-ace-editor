# aurelia-ace-editor

> Note: This plugin is still in development.

The `aurelia-ace-editor` is a custom element for Aurelia application. Which allows you easily embed an `ace` editor to your application.

## How to use

### Installation

Install the package into your project using JSPM.

```
jspm install github:abalmus/aurelia-ace-editor
```

Register it as a plugin with aurelia.

```
aurelia.use.plugin('abalmus/aurelia-ace-editor')
```

### Usage
```
<style>
    .ace_editor {
        display: block;
        border: 1px solid lightgray;
        margin: auto;
        height: 300px;
        width: 100%;
    }
  </style>
```

With binding behaviour
```
<ace content.bind="aceContent" options.bind="aceOptions"></ace>
```

Static config and content
```
<ace config-theme="ace/theme/eclipse"
     config-mode="ace/mode/json">
    {
        "menu": {
            "id": "file",
            "value": "File",
            "popup": {
                "menuitem": [
                    {"value": "New", "onclick": "CreateNewDoc()"},
                    {"value": "Open", "onclick": "OpenDoc()"},
                    {"value": "Close", "onclick": "CloseDoc()"}
                ]
            }
        }
    }
</ace>
```

### Setting options dynamically 
You could also dynamically  change some options by getting the current instance of the `ace editor`. 
You have two options for that:

1. Using reference to the ace element and `au` property:
  
  view:
  ```
  <ace ref="aceEditor" content.bind="aceContent"></ace>
  ```
  
  model:
  ```
  let editor = this.aceEditor.au.ace.viewModel.editor;
  editor.getSession().setMode('ace/mode/javascript');
  ```

2. Using bindable property:
  
  view:
  ```
  <ace editor.bind="aceEditor" content.bind="aceContent"></ace>
  ```
  
  model:
  ```
  this.aceEditor.getSession().setMode('ace/mode/javascript');
  ```

## To run demo locally 

1. From  the `demo` folder execute the following commands:
```
npm install
jspm install
```
2. From the project folder run `gulp demo`

```
gulp demo
```

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```

4. You can now run the tests with this command:

  ```shell
  karma start
  ```
