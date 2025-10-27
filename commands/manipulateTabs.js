const vscode = require('vscode');

const moveTabFirst = vscode.commands.registerCommand('edctools.moveTabFirst', () => {

    // move tab to first posistion
    vscode.commands.executeCommand('moveActiveEditor', { to: 'first' });

});

const moveTabLast = vscode.commands.registerCommand('edctools.moveTabLast', () => {

    // move tab to last posistion
    vscode.commands.executeCommand('moveActiveEditor', { to: 'last' });

});

module.exports = { moveTabFirst,  moveTabLast };