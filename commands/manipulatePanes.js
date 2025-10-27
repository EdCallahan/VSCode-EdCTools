const vscode = require('vscode');

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

module.exports = { openPanes, closePanes };