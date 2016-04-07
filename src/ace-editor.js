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

    attached() {
        this.element.setAttribute('id', this.id);

        this.getAceSrcPath().then(path => {
            this.ace.config.set("basePath", path);

            this.editor = this.ace.edit(this.id);
            this.editor.setOptions(Object.assign({
                blockScrolling: Infinity,
                mode: 'ace/mode/javascript',
                theme: 'ace/theme/monokai'}, this.options));

            this.setValue();
        });
    }
}
