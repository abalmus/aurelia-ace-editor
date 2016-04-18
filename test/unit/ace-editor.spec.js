  import {AceEditor} from '../../src/ace-editor';

  describe('the AceEditor module', () => {
    var sut;
    var mockedRouter;

    beforeEach(() => {
        editor = new AceEditor();
    });

    it('contains a setValue method', () => {
        expect(editor.setValue).toBeDefined();
    });
  });
