var _dec, _dec2, _dec3, _class;

import { inject, bindable, noView, customElement, processContent } from 'aurelia-framework';
import ace from 'ace';

export let AceEditor = (_dec = customElement('ace'), _dec2 = processContent(false), _dec3 = inject(DOM.Element), noView(_class = _dec(_class = _dec2(_class = _dec3(_class = class AceEditor {

    constructor(element) {
        this.id = Math.floor((1 + Math.random()) * 0x10000);

        this.element = element;
    }

    attached() {
        this.element.setAttribute("id", this.id);
    }
}) || _class) || _class) || _class) || _class);