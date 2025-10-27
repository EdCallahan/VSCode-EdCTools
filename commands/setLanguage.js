const vscode = require('vscode');

const setSQL = vscode.commands.registerCommand('edctools.setSQLLanguage', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        vscode.languages.setTextDocumentLanguage(editor.document, 'sql');
    }
});

const setPowerShell = vscode.commands.registerCommand('edctools.setPowerShellLanguage', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        vscode.languages.setTextDocumentLanguage(editor.document, 'powershell');
    }
});

module.exports = { setSQL, setPowerShell };
