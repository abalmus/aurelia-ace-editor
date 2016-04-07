define(['module'], function (module) {
    'use strict';

    function dedent(strings) {
        var raw = void 0;

        if (typeof strings === 'string') {
            raw = [strings];
        } else {
            raw = strings.raw;
        }

        var result = '';
        for (var i = 0; i < raw.length; i++) {
            result += raw[i].replace(/\\\n[ \t]*/g, '').replace(/\\`/g, '`');

            if (i < arguments.length - 1) {
                result += arguments.length <= i + 1 ? undefined : arguments[i + 1];
            }
        }

        result = result.trim();

        var lines = result.split('\n');
        var mindent = null;

        lines.forEach(function (l) {
            var m = l.match(/^ +/);

            if (m) {
                var indent = m[0].length;

                if (!mindent) {
                    mindent = indent;
                } else {
                    mindent = Math.min(mindent, indent);
                }
            }
        });

        if (mindent !== null) {
            result = lines.map(function (l) {
                return l[0] === ' ' ? l.slice(mindent) : l;
            }).join('\n');
        }

        return result.replace(/\\n/g, '\n');
    }

    if (typeof module !== 'undefined') {
        module.exports = dedent;
    }
});