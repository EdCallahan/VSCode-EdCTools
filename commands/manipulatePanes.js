const vscode = require('vscode');

// open bottom and left panes
//
// we force them closed and then toggle them open. This way we don't need to guess 
// if they are already open or closed
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

// closes bottom and left panes
const closePanes = vscode.commands.registerCommand('edctools.closePanes', () => {

    // Close Side Bar
    vscode.commands.executeCommand('workbench.action.closeSidebar');

    // Close Panel (bottom)
    vscode.commands.executeCommand('workbench.action.closePanel');

});

module.exports = { openPanes, closePanes };