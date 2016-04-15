export class App {
    aceEditor;

    attached() {
        this.aceEditor.setTheme('ace/theme/chrome');
        this.aceEditor.session.setMode(`ace/mode/javascript`);
    }
}
