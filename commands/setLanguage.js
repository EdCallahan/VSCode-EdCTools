const vscode = require('vscode');

// set langauge mode to SQL
const setSQL = vscode.commands.registerCommand('edctools.setSQLLanguage', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        vscode.languages.setTextDocumentLanguage(editor.document, 'sql');
    }
});

// set language mode to Powershell
const setPowerShell = vscode.commands.registerCommand('edctools.setPowerShellLanguage', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        vscode.languages.setTextDocumentLanguage(editor.document, 'powershell');
    }
});

module.exports = { setSQL, setPowerShell };
