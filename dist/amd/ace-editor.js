define(['exports', 'aurelia-framework', 'ace', './dedent', './prop-converter'], function (exports, _aureliaFramework, _ace, _dedent, _propConverter) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AceEditor = undefined;

    var _ace2 = _interopRequireDefault(_ace);

    var _dedent2 = _interopRequireDefault(_dedent);

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

    var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2;

    var AceEditor = exports.AceEditor = (_dec = (0, _aureliaFramework.customElement)('ace'), _dec2 = (0, _aureliaFramework.processContent)(false), _dec3 = (0, _aureliaFramework.inject)(Element, _propConverter.PropConverter, _aureliaFramework.Loader), (0, _aureliaFramework.noView)(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function AceEditor(element, propConverter, loader) {
            _classCallCheck(this, AceEditor);

            _initDefineProp(this, 'content', _descriptor, this);

            _initDefineProp(this, 'options', _descriptor2, this);

            this.id = 'ace-editor-' + Math.floor((1 + Math.random()) * 0x10000);

            this.element = element;
            this.propConverter = propConverter;
            this.ace = _ace2.default;
            this.innerHTML = this.element.innerHTML;
            this.loader = loader;
        }

        AceEditor.prototype.setValue = function setValue() {
            var value = this.content || (0, _dedent2.default)(this.innerHTML);

            if (value) {
                this.editor.setValue(value, 1);
            }
        };

        AceEditor.prototype.contentChanged = function contentChanged() {
            if (this.editor) {
                this.editor.setValue(this.content, 1);
            }
        };

        AceEditor.prototype.getAceSrcPath = function getAceSrcPath(loader) {
            var packagePath = loader.normalizeSync('ace');
            return packagePath.substr(0, packagePath.length - 3);
        };

        AceEditor.prototype.replacer = function replacer(match) {
            return match.replace('-', '').toUpperCase();
        };

        AceEditor.prototype.parseConfigAttributes = function parseConfigAttributes() {
            var _this = this;

            var attributes = this.element.attributes;
            var config = {};

            [].forEach.call(attributes, function (attribute) {
                if (attribute.name.indexOf('config-') !== -1) {
                    var attributeName = attribute.name.replace('config-', '').replace(/-./g, _this.replacer);
                    config[attributeName] = _this.propConverter.convert(attributeName, attribute.value);
                }
            });

            return config;
        };

        AceEditor.prototype.getConfig = function getConfig() {
            return Object.assign(this.parseConfigAttributes(), this.options);
        };

        AceEditor.prototype.attached = function attached() {
            this.element.setAttribute('id', this.id);

            this.config = Object.assign(this.getConfig());
            this.ace.config.set('basePath', this.getAceSrcPath(this.loader || System));

            this.editor = this.ace.edit(this.id);
            this.editor.$blockScrolling = Infinity;
            this.editor.setOptions(this.config);

            this.setValue();
        };

        return AceEditor;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'content', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'options', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class) || _class) || _class) || _class);
});