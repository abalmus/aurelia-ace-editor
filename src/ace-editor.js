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
    }

    setValue() {
        let value = this.content || dedent(this.element.innerHTML);

        if (value) {
            this.editor.setValue(value, 1);
        }
    }

    contentChanged() {
        if (this.editor) {
            this.editor.setValue(this.content, 1);
        }
    }

    attached() {
        this.element.setAttribute('id', this.id);
        this.editor = this.ace.edit(this.id);
        this.editor.setOptions(Object.assign({
            blockScrolling: Infinity,
            mode: 'ace/mode/javascript',
            theme: 'ace/theme/monokai'}, this.options));
        this.setValue();
    }
}
