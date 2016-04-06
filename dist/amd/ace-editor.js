define(['exports', 'aurelia-framework', 'ace'], function (exports, _aureliaFramework, _ace) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AceEditor = undefined;

    var _ace2 = _interopRequireDefault(_ace);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _dec3, _class;

    var AceEditor = exports.AceEditor = (_dec = (0, _aureliaFramework.customElement)('ace'), _dec2 = (0, _aureliaFramework.processContent)(false), _dec3 = (0, _aureliaFramework.inject)(DOM.Element), (0, _aureliaFramework.noView)(_class = _dec(_class = _dec2(_class = _dec3(_class = function () {
        function AceEditor(element) {
            _classCallCheck(this, AceEditor);

            this.id = Math.floor((1 + Math.random()) * 0x10000);

            this.element = element;
        }

        AceEditor.prototype.attached = function attached() {
            this.element.setAttribute("id", this.id);
        };

        return AceEditor;
    }()) || _class) || _class) || _class) || _class);
});