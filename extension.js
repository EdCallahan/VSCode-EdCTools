const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed



function activate(context) {
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

    context.subscriptions.push(setSQL, setPowerShell);
}


// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
