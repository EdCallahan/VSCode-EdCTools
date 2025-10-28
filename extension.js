const { moveTabFirst, moveTabLast } = require('./commands/manipulateTabs');
const { openPanes, closePanes } = require('./commands/manipulatePanes');
const { setPowerShell, setSQL } = require('./commands/setLanguage')
const { enhancedQuickOpen } = require('./commands/enhancedQuickOpen')

function activate(context) {

    context.subscriptions.push(setSQL, setPowerShell, openPanes, closePanes, moveTabFirst, moveTabLast, enhancedQuickOpen);

}

function deactivate() {}

module.exports = { activate, deactivate }
