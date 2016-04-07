import {inject, bindable, noView, customElement, processContent} from 'aurelia-framework';
import ace from 'ace';
import dedent from './dedent';

@noView
@customElement('ace')
@processContent(false)
@inject(Element)
export class AceEditor {
    @bindable content;
    @bindable options;
    id = `ace-editor-${Math.floor((1 + Math.random()) * 0x10000)}`;

    constructor(element) {
        this.element = element;
        this.ace = ace;
        this.innerHTML = this.element.innerHTML;
    }

    setValue() {
        let value = this.content || dedent(this.innerHTML);

        if (value) {
            this.editor.setValue(value, 1);
        }
    }

    contentChanged() {
        if (this.editor) {
            this.editor.setValue(this.content, 1);
        }
    }

    getAceSrcPath() {
        return System.normalize('ace/').then((path) => {
            path = path.replace('/.js', '');
            path = `/${path.replace(System.baseURL, '')}/`;
            return path;
        });
    }

    parseConfigAttributes() {
        let attributes = this.element.attributes;
        let config = {};

        [].forEach.call(attributes, attribute => {
            if (attribute.name.indexOf('config-') !== -1) {
                config[attribute.name.replace('config-', '')] = attribute.value;
            }
        });

        return config;
    }

    getConfig() {
        return this.options || this.parseConfigAttributes() || {};
    }

    attached() {
        this.element.setAttribute('id', this.id);

        this.config = Object.assign({
            mode: 'ace/mode/javascript',
            theme: 'ace/theme/monokai'}, this.getConfig());

        this.getAceSrcPath().then(path => {
            this.ace.config.set('basePath', path);

            this.editor = this.ace.edit(this.id);
            this.editor.$blockScrolling = Infinity;
            this.editor.setOptions(this.config);

            this.setValue();
        });
    }
}
