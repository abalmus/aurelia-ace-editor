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

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

    var AceEditor = exports.AceEditor = (_dec = (0, _aureliaFramework.customElement)('ace'), _dec2 = (0, _aureliaFramework.processContent)(false), _dec3 = (0, _aureliaFramework.inject)(Element), (0, _aureliaFramework.noView)(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function AceEditor(element) {
            _classCallCheck(this, AceEditor);

            _initDefineProp(this, 'content', _descriptor, this);

            this.id = Math.floor((1 + Math.random()) * 0x10000);

            this.element = element;
            this.ace = _ace2.default;
        }

        AceEditor.prototype.attached = function attached() {
            this.element.setAttribute('id', this.id);
        };

        return AceEditor;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'content', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class) || _class) || _class) || _class);
});