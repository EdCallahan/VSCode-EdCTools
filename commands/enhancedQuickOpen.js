const vscode = require('vscode');
const path = require('path');

const enhancedQuickOpen = vscode.commands.registerCommand('edctools.enhancedQuickOpen', () => {

    const quickPick = vscode.window.createQuickPick();
    quickPick.canSelectMany = true;
    quickPick.placeholder = 'Type to search files (like Ctrl+P)';

    let timeout;

    async function updateItems(query) {

        if (!query || query.length < 2) {
            quickPick.items = [];
            return;
        }

        const glob = `**/*${query.replace(/\s+/g, '*')}*`;
        const uris = await vscode.workspace.findFiles(glob, "{**/node_modules/**,**/.git/**,**/dist/**}", 50);

        quickPick.items = uris.map(uri => ({
            label: path.basename(uri.fsPath),
            description: vscode.workspace.asRelativePath(path.dirname(uri.fsPath)),
            uri
        }));

    }

    quickPick.onDidChangeValue(value => {
        clearTimeout(timeout);
        timeout = setTimeout(() => updateItems(value), 250);
    });

    quickPick.onDidAccept(async () => {
        const selected = quickPick.selectedItems;
        for (const item of selected) {
            const doc = await vscode.workspace.openTextDocument(item.uri);
            await vscode.window.showTextDocument(doc, { preview: false });
        }
        quickPick.hide();
    });

    quickPick.onDidHide(() => quickPick.dispose());
    quickPick.show();
});

module.exports = { enhancedQuickOpen };
