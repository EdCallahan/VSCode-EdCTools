const vscode = require('vscode');

// move current tab to first position
const moveTabFirst = vscode.commands.registerCommand('edctools.moveTabFirst', () => {

    // move tab to first posistion
    vscode.commands.executeCommand('moveActiveEditor', { to: 'first' });

});

// move current tab to last position
const moveTabLast = vscode.commands.registerCommand('edctools.moveTabLast', () => {

    // move tab to last posistion
    vscode.commands.executeCommand('moveActiveEditor', { to: 'last' });

});

module.exports = { moveTabFirst,  moveTabLast };