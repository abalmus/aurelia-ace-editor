'use strict';

System.register([], function (_export, _context) {
    var PropTypes, PropConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            PropTypes = {
                bool: function bool(value) {
                    return value === 'true';
                },
                string: function string(value) {
                    return String(value);
                },
                number: function number(value) {
                    return Number(value);
                }
            };

            _export('PropConverter', PropConverter = function () {
                function PropConverter(types) {
                    _classCallCheck(this, PropConverter);

                    this.converterTypes = {
                        mode: PropTypes.string,
                        theme: PropTypes.string,
                        name: PropTypes.string,
                        className: PropTypes.string,
                        height: PropTypes.string,
                        width: PropTypes.string,
                        highlightActiveLine: PropTypes.bool,
                        fontSize: PropTypes.number,
                        showGutter: PropTypes.bool,
                        value: PropTypes.string,
                        minLines: PropTypes.number,
                        maxLines: PropTypes.number,
                        readOnly: PropTypes.bool,
                        tabSize: PropTypes.number,
                        showPrintMargin: PropTypes.bool,
                        cursorStart: PropTypes.number,
                        keyboardHandler: PropTypes.string,
                        wrapEnabled: PropTypes.bool
                    };

                    this.types = types || this.converterTypes;
                }

                PropConverter.prototype.convert = function convert(prop, value) {
                    return this.types.hasOwnProperty(prop) ? this.types[prop](value) : value;
                };

                return PropConverter;
            }());

            _export('PropConverter', PropConverter);
        }
    };
});