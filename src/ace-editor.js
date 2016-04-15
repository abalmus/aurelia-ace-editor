import {inject, bindable, noView, customElement, processContent, Loader} from 'aurelia-framework';
import ace from 'ace';
import dedent from './dedent';
import {PropConverter} from './prop-converter';

@noView
@customElement('ace')
@processContent(false)
@inject(Element, PropConverter, Loader)
export class AceEditor {
    @bindable content;
    @bindable options;
    @bindable editor;
    id = `ace-editor-${Math.floor((1 + Math.random()) * 0x10000)}`;

    constructor(element, propConverter, loader) {
        this.element = element;
        this.propConverter = propConverter;
        this.ace = ace;
        this.innerHTML = this.element.innerHTML;
        this.loader = loader;
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

    getAceSrcPath(loader) {
        let packagePath = loader.normalizeSync('ace');
        return packagePath.substr(0, packagePath.length - 3);
    }

    replacer(match) {
        return match.replace('-', '').toUpperCase();
    }

    parseConfigAttributes() {
        let attributes = this.element.attributes;
        let config = {};

        [].forEach.call(attributes, attribute => {
            if (attribute.name.indexOf('config-') !== -1) {
                let attributeName = attribute.name.replace('config-', '')
                        .replace( /-./g, this.replacer);
                config[attributeName] = this.propConverter.convert(attributeName, attribute.value);
            }
        });

        return config;
    }

    getConfig() {
        return   Object.assign(this.parseConfigAttributes(), this.options);
    }

    bind() {
        this.element.setAttribute('id', this.id);

        this.config = Object.assign(this.getConfig());
        this.ace.config.set('basePath', this.getAceSrcPath(this.loader || System));

        this.editor = this.ace.edit(this.element);
        this.editor.$blockScrolling = Infinity;
        this.editor.setOptions(this.config);

        this.setValue();
    }

    detached() {
        this.editor.destroy();
    }
}
