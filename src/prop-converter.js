let PropTypes = {
    bool: function(value) {
        return value === 'true';
    },
    string: function(value) {
        return String(value);
    },
    number: function(value) {
        return Number(value);
    }
};

export class PropConverter {
    converterTypes = {
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

    constructor(types) {
        this.types = types || this.converterTypes;
    }

    convert(prop, value) {
        return (this.types.hasOwnProperty(prop) ? this.types[prop](value) : value);
    }
}
