function dedent(strings, ...values) {
    let raw;

    if (typeof strings === 'string') {
        raw = [strings];
    } else {
        raw = strings.raw;
    }

    let result = '';
    for (let i = 0; i < raw.length; i++) {
        result += raw[i].replace(/\\\n[ \t]*/g, '').replace(/\\`/g, '`');

        if (i < values.length) {
            result += values[i];
        }
    }

    result = result.trim();

    const lines = result.split('\n');
    let mindent = null;

    lines.forEach(l => {
        let m = l.match(/^ +/);

        if (m) {
            let indent = m[0].length;

            if (!mindent) {
                mindent = indent;
            } else {
                mindent = Math.min(mindent, indent);
            }
        }
    });

    if (mindent !== null) {
        result = lines.map(l => l[0] === ' ' ? l.slice(mindent) : l).join('\n');
    }

    return result.replace(/\\n/g, '\n');
}

if (typeof module !== 'undefined') {
    module.exports = dedent;
}
