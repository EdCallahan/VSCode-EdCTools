# 🧩 VS Code Extension — EdC Personal Tools

Miscellaneous productivity commands for my personal use.

---

## Features

- Single keystroke to change language mode to SQL
- Single keystroke to change language mode to Powershell
- Toggle visibility of left and bottom panels with single keystroke
- Move current tab to first or last position

---

## Commands

| Command | Description | Key Binding |
|----------|-------------|-------------|
| `edctools.setSQLLanguage` | Set editor language mode to SQL | Ctrl-Alt-S |
| `edctools.setPowershellLanguage` | Set editor language mode to Powershell | Ctrl-Alt-P |
| `edctools.openPanes` | Open left and bottom panels | Ctrl-B when panels are closed |
| `edctools.closePanes` | Close left and bottom panels | Ctrl-B when panels are open |
| `edctools.moveTabFirst` | Move tab to the first position | Alt-LeftArrow |
| `edctools.moveTabLast` | Move tab to the last position | Alt-RightArrow |


You can access these from the Command Palette or assign keybindings via **Preferences → Keyboard Shortcuts**.

---

## Screenshot

![Screenshot](images/screenshot.png)

---

## Development

Clone the repo and open it in VS Code:

```bash
git clone https://github.com/EdCallahan/VSCode-EdCTools
cd VSCode-EdCTools
code .
