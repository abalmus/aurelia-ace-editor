import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('abalmus/aurelia-ace-editor');

  aurelia.start().then(() => aurelia.setRoot('src/app'));
}
