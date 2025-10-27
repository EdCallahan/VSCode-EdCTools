const { moveTabFirst, moveTabLast } = require('./commands/manipulateTabs');
const { openPanes, closePanes } = require('./commands/manipulatePanes');
const { setPowerShell, setSQL} = require('./commands/setLanguage')


function activate(context) {

    context.subscriptions.push(setSQL, setPowerShell, openPanes, closePanes, moveTabFirst, moveTabLast);

}


function deactivate() {}

module.exports = { activate, deactivate }
