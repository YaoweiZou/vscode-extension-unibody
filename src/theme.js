const lightColors = require("./colors/palette-light.json");
const darkColors = require("./colors/palette-dark.json");

function getColors(theme) {
  switch (theme) {
    case "light":
      return lightColors;
    case "dark":
      return darkColors;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }
}

function getTheme({ theme, name }) {
  const color = getColors(theme);

  return {
    $schema: "vscode://schemas/color-theme",
    name: name,
    // https://code.visualstudio.com/api/references/theme-color
    colors: {
      /* Base colors */
      focusBorder: color.blue70,
      foreground: color.gray120,
      disabledForeground: color.gray70,
      // "widget.border": "",
      "widget.shadow": color.transparent,
      "selection.background": color.blue40,
      descriptionForeground: color.gray90,
      errorForeground: color.red50,
      "icon.foreground": color.gray120,
      "sash.hoverBorder": color.blue70,

      /* Window border */
      // "window.activeBorder": "",
      // "window.inactiveBorder": "",

      /* Text colors */
      // "textBlockQuote.background": "",
      // "textBlockQuote.border": "",
      // "textCodeBlock.background": "",
      // "textLink.activeForeground": "",
      "textLink.foreground": color.blue100,
      // "textPreformat.foreground": "",
      // "textSeparator.foreground": "",

      /* Action colors */
      "toolbar.hoverBackground": color.gray20,
      // "toolbar.hoverOutline": "",
      "toolbar.activeBackground": color.gray20,

      /* Button control */
      "button.background": color.blue50,
      "button.foreground": color.white,
      // "button.border": "",
      "button.separator": color.gray100,
      "button.hoverBackground": color.blue60,
      // "button.secondaryForeground": "",
      // "button.secondaryBackground": "",
      // "button.secondaryHoverBackground": "",
      "checkbox.background": color.gray20,
      "checkbox.foreground": color.white,
      "checkbox.border": color.gray70,
      // "checkbox.selectBackground": "",
      // "checkbox.selectBorder": "",

      /* Dropdown control */
      "dropdown.background": color.gray20,
      "dropdown.listBackground": color.gray20,
      // "dropdown.border": "",
      "dropdown.foreground": color.gray120,

      /* Input control */
      "input.background": color.gray20,
      // "input.border": "",
      "input.foreground": color.gray120,
      "input.placeholderForeground": color.gray80,
      // "inputOption.activeBackground": "",
      // "inputOption.activeBorder": "",
      // "inputOption.activeForeground": "",
      // "inputOption.hoverBackground": "",
      // "inputValidation.errorBackground": "",
      // "inputValidation.errorForeground": "",
      // "inputValidation.errorBorder": "",
      // "inputValidation.infoBackground": "",
      // "inputValidation.infoForeground": "",
      // "inputValidation.infoBorder": "",
      // "inputValidation.warningBackground": "",
      // "inputValidation.warningForeground": "",
      // "inputValidation.warningBorder": "",

      /* Scrollbar control */
      "scrollbar.shadow": color.transparent,
      // "scrollbarSlider.activeBackground": "",
      // "scrollbarSlider.background": "",
      // "scrollbarSlider.hoverBackground": "",

      /* Badge */
      // "badge.foreground": color.white,
      // "badge.background": color.blue70,

      /* Progress bar */
      // "progressBar.background": "",

      /* Lists and trees */
      "list.activeSelectionBackground": color.gray30,
      "list.activeSelectionForeground": color.gray120,
      // "list.activeSelectionIconForeground": "",
      // "list.dropBackground": "",
      // "list.focusBackground": "",
      // "list.focusForeground": "",
      // "list.focusHighlightForeground": "",
      "list.focusOutline": color.transparent,
      "list.focusAndSelectionOutline": color.transparent,
      // "list.highlightForeground": "",
      "list.hoverBackground": color.gray20,
      // "list.hoverForeground": "",
      // "list.inactiveSelectionBackground": "",
      // "list.inactiveSelectionForeground": "",
      // "list.inactiveSelectionIconForeground": "",
      // "list.inactiveFocusBackground": "",
      // "list.inactiveFocusOutline": "",
      // "list.invalidItemForeground": "",
      // "list.errorForeground": "",
      // "list.warningForeground": "",
      // "listFilterWidget.background": "",
      // "listFilterWidget.outline": "",
      // "listFilterWidget.noMatchesOutline": "",
      // "listFilterWidget.shadow": "",
      // "list.filterMatchBackground": "",
      // "list.filterMatchBorder": "",
      // "list.deemphasizedForeground": "",
      // "tree.indentGuidesStroke": "",
      // "tree.inactiveIndentGuidesStroke": "",
      // "tree.tableColumnsBorder": "",
      // "tree.tableOddRowsBackground": "",

      /* Activity Bar */
      "activityBar.background": color.gray10,
      // "activityBar.dropBorder": "",
      "activityBar.foreground": color.gray120,
      "activityBar.inactiveForeground": color.gray70,
      // "activityBar.border": "",
      "activityBarBadge.background": color.blue70,
      "activityBarBadge.foreground": color.white,
      "activityBar.activeBorder": color.gray10,
      // "activityBar.activeBackground": "",
      "activityBar.activeFocusBorder": color.gray10,

      /* Profiles */
      "profileBadge.background": "",
      "profileBadge.foreground": "",

      /* Side Bar */
      "sideBar.background": color.gray10,
      "sideBar.foreground": color.gray120,
      "sideBar.border": color.gray50,
      // "sideBar.dropBackground": "",
      "sideBarTitle.foreground": color.gray120,
      "sideBarSectionHeader.background": color.gray10,
      "sideBarSectionHeader.foreground": color.gray120,
      // "sideBarSectionHeader.border": "",

      /* Minimap */
      "minimap.findMatchHighlight": "#ffff00",
      "minimap.selectionHighlight": "#0a84fe",
      "minimap.errorHighlight": "#ff1212b3",
      "minimap.warningHighlight": "#bf8803",
      "minimap.background": color.gray10,
      "minimap.selectionOccurrenceHighlight": "#cccccc",
      "minimap.foregroundOpacity": "#000000",
      // "minimapSlider.background": "",
      // "minimapSlider.hoverBackground": "",
      // "minimapSlider.activeBackground": "",
      "minimapGutter.addedBackground": "#32d74b",
      "minimapGutter.modifiedBackground": "#5ac8f5",
      "minimapGutter.deletedBackground": "#ff453a",

      /* Editor Groups & Tabs */
      // "editorGroup.border": "",
      // "editorGroup.dropBackground": "",
      // "editorGroupHeader.noTabsBackground": "",
      "editorGroupHeader.tabsBackground": color.gray10,
      // "editorGroupHeader.tabsBorder": "",
      // "editorGroupHeader.border": "",
      // "editorGroup.emptyBackground": "",
      // "editorGroup.focusedEmptyBorder": "",
      // "editorGroup.dropIntoPromptForeground": "",
      // "editorGroup.dropIntoPromptBackground": "",
      // "editorGroup.dropIntoPromptBorder": "",
      "tab.activeBackground": color.gray30,
      // "tab.unfocusedActiveBackground": "",
      "tab.activeForeground": color.gray120,
      "tab.border": color.transparent,
      // "tab.activeBorder": "",
      // "tab.unfocusedActiveBorder": "",
      // "tab.activeBorderTop": "",
      // "tab.unfocusedActiveBorderTop": "",
      // "tab.lastPinnedBorder": "",
      "tab.inactiveBackground": color.gray10,
      // "tab.unfocusedInactiveBackground": "",
      "tab.inactiveForeground": color.gray120,
      // "tab.unfocusedActiveForeground": "",
      // "tab.unfocusedInactiveForeground": "",
      // "tab.hoverBackground": "",
      // "tab.unfocusedHoverBackground": "",
      // "tab.hoverForeground": "",
      // "tab.unfocusedHoverForeground": "",
      // "tab.hoverBorder": "",
      // "tab.unfocusedHoverBorder": "",
      // "tab.activeModifiedBorder": "",
      // "tab.inactiveModifiedBorder": "",
      // "tab.unfocusedActiveModifiedBorder": "",
      // "tab.unfocusedInactiveModifiedBorder": "",
      // "editorPane.background": "",
      // "sideBySideEditor.horizontalBorder": "",
      // "sideBySideEditor.verticalBorder": "",

      /* Editor colors */
      "editor.background": color.gray10,
      "editor.foreground": color.gray110,
      "editorLineNumber.foreground": color.gray70,
      "editorLineNumber.activeForeground": color.gray110,
      // "editorLineNumber.dimmedForeground": color.white,
      // "editorCursor.background": "",
      "editorCursor.foreground": color.white,
      // "editor.selectionBackground": color.blue30,
      // "editor.selectionForeground": color.gray110,
      // "editor.inactiveSelectionBackground": color.blue20,
      // "editor.selectionHighlightBackground": color.blue40,
      // "editor.selectionHighlightBorder": "",
      // "editor.wordHighlightBackground": "",
      // "editor.wordHighlightBorder": "",
      // "editor.wordHighlightStrongBackground": "",
      // "editor.wordHighlightStrongBorder": "",
      // "editor.wordHighlightTextBackground": "",
      // "editor.wordHighlightTextBorder": "",

      "editor.lineHighlightBackground": color.gray20,
      "editorWhitespace.foreground": color.gray60,

      /* Status Bar colors */
      "statusBar.background": color.gray10,
      "statusBar.foreground": color.gray120,
      // "statusBar.border": "",
      "statusBar.debuggingBackground": color.blue70,
      // "statusBar.debuggingForeground": color.white,
      // "statusBar.debuggingBorder": "",
      // "statusBar.noFolderForeground": "",
      "statusBar.noFolderBackground": color.gray20,
      // "statusBar.noFolderBorder": "",
      // "statusBarItem.activeBackground": "",
      // "statusBarItem.hoverBackground": "",
      // "statusBarItem.prominentForeground": "",
      // "statusBarItem.prominentBackground": "",
      // "statusBarItem.prominentHoverBackground": "",
      "statusBarItem.remoteBackground": color.blue70,
      "statusBarItem.remoteForeground": color.white,
      // "statusBarItem.errorBackground": "",
      // "statusBarItem.errorForeground": "",
      // "statusBarItem.warningBackground": "",
      // "statusBarItem.warningForeground": "",
      // "statusBarItem.compactHoverBackground": "",
      // "statusBarItem.focusBorder": "",
      "statusBar.focusBorder": color.blue70,
      // "statusBar.offlineBackground": "",
      // "statusBar.offlineForeground": "",

      /* Title Bar colors */
      "titleBar.activeBackground": color.gray10,
      "titleBar.activeForeground": color.gray100,
      "titleBar.inactiveBackground": color.gray10,
      "titleBar.inactiveForeground": color.gray80,
      // "titleBar.border": "",

      /* Menu Bar colors */
      "menubar.selectionForeground": color.gray110,
      "menubar.selectionBackground": color.gray20,
      // "menubar.selectionBorder": "",
      "menu.foreground": color.gray110,
      "menu.background": color.gray20,
      "menu.selectionForeground": color.gray110,
      "menu.selectionBackground": color.blue40,
      // "menu.selectionBorder": "",
      "menu.separatorBackground": color.gray60,
      "menu.border": color.gray50,

      /* Command Center colors */
      // "commandCenter.foreground": color.red60,
      // "commandCenter.activeForeground": color.white,
      // "commandCenter.background": color.red60,
      // "commandCenter.activeBackground": "",
      // "commandCenter.border": "",
      // "commandCenter.inactiveForeground": "",
      // "commandCenter.inactiveBorder": "",
      // "commandCenter.activeBorder": "",

      /* Quick picker colors */
      "pickerGroup.border": color.gray50,
      "pickerGroup.foreground": color.gray90,
      "quickInput.background": color.gray20,
      "quickInput.foreground": color.gray110,
      "quickInputList.focusBackground": color.blue40,
      "quickInputList.focusForeground": color.gray110,
      "quickInputList.focusIconForeground": color.gray110,
      "quickInputTitle.background": "",

      /* Git colors */
      "gitDecoration.addedResourceForeground": "#32d74b79", // 新增且暂存的文件，dark.green 62%
      "gitDecoration.modifiedResourceForeground": "#5ac8f5", // 修改的文件和存在问题的文件，dark.cyan，
      "gitDecoration.deletedResourceForeground": "#ff453a", // 已删除的文件，dark.red划线
      "gitDecoration.renamedResourceForeground": "#ff9f0a", // 重命名或复制的二进制文件，dark.orange
      "gitDecoration.stageModifiedResourceForeground": "#5ac8f579", // 修改且暂存的文件，dark.cyan 62%
      "gitDecoration.stageDeletedResourceForeground": "#ff453a", // 已删除且暂存的文件，dark.red划线
      "gitDecoration.untrackedResourceForeground": "#32d74b", // 新增的文件，dark.green
      "gitDecoration.ignoredResourceForeground": "#636366", // 忽略的文件，dark.gary2
      "gitDecoration.conflictingResourceForeground": "#ffd60a", // 存在冲突的文件，dark.yellow
      "gitDecoration.submoduleResourceForeground": "#ac8e68" // 子模块文件，dark.brown
    },
    // https://macromates.com/manual/en/language_grammars
    tokenColors: [
      {
        name: "comment",
        scope: [
          "comment",
          "comment.line",
          "comment.line.double-slash",
          "comment.line.double-dash",
          "comment.line.number-sign",
          "comment.line.percentage",
          "comment.line.character",
          "comment.block"
        ],
        settings: {
          foreground: color.gray90
        }
      },
      {
        name: "comment documentation",
        scope: ["comment.block.documentation"],
        settings: {
          foreground: color.green60,
          fontStyle: "italic"
        }
      },
      {
        name: "constant",
        scope: [
          "constant",
          "constant.numeric",
          "constant.character",
          "constant.character.escape",
          "constant.language",
          "constant.other"
        ],
        settings: {
          foreground: "#C77DBB"
        }
      },
      {
        scope: ["constant.numeric"],
        settings: {
          foreground: "#6897BB"
        }
      },
      {
        name: "转义",
        scope: ["constant.character.escape"],
        settings: {
          foreground: "#CF8E6D"
        }
      },
      {
        name: "entity",
        scope: [
          "entity",
          "entity.name",
          "entity.name.function",
          "entity.name.type",
          "entity.name.tag",
          "entity.name.section",
          "entity.other",
          "entity.other.inherited-class",
          "entity.other.attribute-name"
        ],
        settings: {
          // foreground: color.red60
        }
      },
      {
        name: "invalid",
        scope: ["invalid", "invalid.illegal", "invalid.deprecated"],
        settings: {
          foreground: color.red20
        }
      },
      {
        name: "弃用的内容",
        scope: ["invalid.deprecated"],
        settings: {
          foreground: color.red20,
          fontStyle: "strikethrough"
        }
      },
      {
        name: "keyword",
        scope: ["keyword", "keyword.control", "keyword.operator", "keyword.other"],
        settings: {
          foreground: "#CF8E6D"
        }
      },
      {
        name: "markup",
        scope: [
          "markup",
          "markup.underline",
          "markup.underline.link",
          "markup.bold",
          "markup.heading",
          "markup.italic",
          "markup.list",
          "markup.list.numbered",
          "markup.list.unnumbered",
          "markup.quote",
          "markup.raw",
          "markup.other"
        ],
        settings: {
          // foreground: ""
        }
      },
      {
        name: "meta",
        scope: ["meta"],
        settings: {
          foreground: color.lime
        }
      },
      {
        name: "storage",
        scope: ["storage", "storage.type", "storage.modifier"],
        settings: {
          foreground: "#CF8E6D",
          // foreground: color.orange
        }
      },
      {
        scope: ["storage.modifier"],
        settings: {
          foreground: color.blue110
        }
      },
      {
        name: "string",
        scope: [
          "string",
          "string.quoted",
          "string.quoted.single",
          "string.quoted.double",
          "string.quoted.triple",
          "string.quoted.other",
          "string.unquoted",
          "string.interpolated",
          "string.regexp",
          "string.other"
        ],
        settings: {
          foreground: color.green60
        }
      },
      {
        scope: ["string.regexp"],
        settings: {
          foreground: color.pink
        }
      },
      {
        name: "support",
        scope: [
          "support",
          "support.function",
          "support.class",
          "support.type",
          "support.constant",
          "support.variable",
          "support.other"
        ],
        settings: {
          foreground: ""
        }
      },
      {
        name: "variable",
        scope: ["variable", "variable.parameter", "variable.language", "variable.other"],
        settings: {
          foreground: "#BCBEC4"
        }
      },
      {
        name: "形参",
        scope: ["variable.parameter"],
        settings: {
          foreground: color.gray120
        }
      },
      {
        name: "保留的语言变量，如 this 、 super 、 self 等。",
        scope: ["variable.language"],
        settings: {
          foreground: color.purple10
        }
      },
      {
        name: "其他变量，如 $some_variables",
        scope: ["variable.other"],
        settings: {
          // foreground: ""
        }
      },
      // JavaScript
      {
        name: "文档注释标签",
        scope: ["storage.type.class.jsdoc"],
        settings: {
          foreground: color.cyandark
        }
      },
      {
        name: "文档注释标签值",
        scope: ["variable.other.jsdoc"],
        settings: {
          foreground: color.gray110,
          fontStyle: "bold"
        }
      }
    ],
    // https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide
    semanticHighlighting: true,
    semanticTokenColors: {
      newOperator: "#C586C0",
      stringLiteral: "#ce9178",
      customLiteral: "#DCDCAA",
      numberLiteral: "#b5cea8"
    }
  };
}

module.exports = getTheme;
