import {inject, bindable, noView, customElement, processContent} from 'aurelia-framework';
import ace from 'ace';

@noView
@customElement('ace')
@processContent(false)
@inject(DOM.Element)
export class AceEditor {
    id = Math.floor((1 + Math.random()) * 0x10000);

    constructor(element) {
        this.element = element;
    }

    attached() {
        this.element.setAttribute("id", this.id);
    }
}
