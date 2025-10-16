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

    const openPanes = vscode.commands.registerCommand('edctools.openPanes', () => {

        // Close then Toggle Side Bar, to force it to be open
        vscode.commands.executeCommand('workbench.action.closeSidebar');
        vscode.commands.executeCommand('workbench.action.toggleSidebarVisibility');

        // Close then Toggle Panel (bottom), to force it to be open
        vscode.commands.executeCommand('workbench.action.closePanel');
        vscode.commands.executeCommand('workbench.action.togglePanel');

        // Close then Toggle Auxiliary Bar (right), to force it to be open
        // vscode.commands.executeCommand('workbench.action.closeAuxiliaryBar');
        // vscode.commands.executeCommand('workbench.action.toggleAuxiliaryBar');

    });

    const closePanes = vscode.commands.registerCommand('edctools.closePanes', () => {

        // Close Side Bar
        vscode.commands.executeCommand('workbench.action.closeSidebar');

        // Close Panel (bottom)
        vscode.commands.executeCommand('workbench.action.closePanel');

        // Close Auxiliary Bar (right)
        // vscode.commands.executeCommand('workbench.action.closeAuxiliaryBar');

    });

    context.subscriptions.push(setSQL, setPowerShell, openPanes, closePanes);
}


// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
