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

    const openPanes = vscode.commands.registerCommand('edctools.openPanes', async () => {

        // Close then Toggle Side Bar, to force it to be open
        await vscode.commands.executeCommand('workbench.action.closeSidebar');
        await vscode.commands.executeCommand('workbench.action.toggleSidebarVisibility');

        // Close then Toggle Panel (bottom), to force it to be open
        await vscode.commands.executeCommand('workbench.action.closePanel');
        await vscode.commands.executeCommand('workbench.action.togglePanel');

        // Refocus the active editor group
        setTimeout(() => {
            vscode.commands.executeCommand('workbench.action.focusActiveEditorGroup');
        }, 100);

    });

    const closePanes = vscode.commands.registerCommand('edctools.closePanes', () => {

        // Close Side Bar
        vscode.commands.executeCommand('workbench.action.closeSidebar');

        // Close Panel (bottom)
        vscode.commands.executeCommand('workbench.action.closePanel');

    });

    const moveTabFirst = vscode.commands.registerCommand('edctools.moveTabFirst', () => {

        // move tab to first posistion
        vscode.commands.executeCommand('moveActiveEditor', { to: 'first' });

    });

    const moveTabLast = vscode.commands.registerCommand('edctools.moveTabLast', () => {

        // move tab to last posistion
        vscode.commands.executeCommand('moveActiveEditor', { to: 'last' });

    });

    context.subscriptions.push(setSQL, setPowerShell, openPanes, closePanes, moveTabFirst, moveTabLast);
}


// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
