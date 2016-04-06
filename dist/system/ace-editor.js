'use strict';

System.register(['aurelia-framework', 'ace'], function (_export, _context) {
    var inject, bindable, noView, customElement, processContent, ace, _dec, _dec2, _dec3, _class, AceEditor;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            bindable = _aureliaFramework.bindable;
            noView = _aureliaFramework.noView;
            customElement = _aureliaFramework.customElement;
            processContent = _aureliaFramework.processContent;
        }, function (_ace) {
            ace = _ace.default;
        }],
        execute: function () {
            _export('AceEditor', AceEditor = (_dec = customElement('ace'), _dec2 = processContent(false), _dec3 = inject(DOM.Element), noView(_class = _dec(_class = _dec2(_class = _dec3(_class = function () {
                function AceEditor(element) {
                    _classCallCheck(this, AceEditor);

                    this.id = Math.floor((1 + Math.random()) * 0x10000);

                    this.element = element;
                }

                AceEditor.prototype.attached = function attached() {
                    this.element.setAttribute("id", this.id);
                };

                return AceEditor;
            }()) || _class) || _class) || _class) || _class));

            _export('AceEditor', AceEditor);
        }
    };
});