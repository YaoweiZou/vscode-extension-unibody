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

// https://code.visualstudio.com/api/references/theme-color
function getTheme({ theme, name }) {
  const color = getColors(theme);

  return {
    name: name,
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
      // "minimap.findMatchHighlight": "",
      "minimap.selectionHighlight": "",
      // "minimap.errorHighlight": "",
      // "minimap.warningHighlight": "",
      "minimap.background": color.gray10,
      // "minimap.selectionOccurrenceHighlight": "",
      // "minimap.foregroundOpacity": "",
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
    semanticHighlighting: true
    /*
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: lightDark(scale.gray[5], scale.gray[3])
        }
      },
      {
        scope: ["constant.other.placeholder", "constant.character"],
        settings: {
          foreground: lightDark(scale.red[5], scale.red[3])
        }
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.other.enummember",
          "variable.language",
          "entity"
        ],
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        }
      },
      {
        scope: ["entity.name", "meta.export.default", "meta.definition.variable"],
        settings: {
          foreground: lightDark(scale.orange[6], scale.orange[2])
        }
      },
      {
        scope: [
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression"
        ],
        settings: {
          foreground: color.fg.default
        }
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: lightDark(scale.purple[5], scale.purple[2])
        }
      },
      {
        scope: ["entity.name.tag", "support.class.component"],
        settings: {
          foreground: lightDark(scale.green[6], scale.green[1])
        }
      },
      {
        scope: "keyword",
        settings: {
          foreground: lightDark(scale.red[5], scale.red[3])
        }
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: lightDark(scale.red[5], scale.red[3])
        }
      },
      {
        scope: ["storage.modifier.package", "storage.modifier.import", "storage.type.java"],
        settings: {
          foreground: color.fg.default
        }
      },
      {
        scope: ["string", "string punctuation.section.embedded source"],
        settings: {
          foreground: lightDark(scale.blue[8], scale.blue[1])
        }
      },
      {
        scope: "support",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        }
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        }
      },
      {
        scope: "variable",
        settings: {
          foreground: lightDark(scale.orange[6], scale.orange[2])
        }
      },
      {
        scope: "variable.other",
        settings: {
          foreground: color.fg.default
        }
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: lightDark(scale.red[7], scale.red[2])
        }
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: lightDark(scale.red[7], scale.red[2])
        }
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: lightDark(scale.red[7], scale.red[2])
        }
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: lightDark(scale.red[7], scale.red[2])
        }
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: lightDark(scale.red[5], scale.red[3]),
          foreground: lightDark(scale.gray[0], scale.gray[0]),
          content: "^M"
        }
      },
      {
        scope: "message.error",
        settings: {
          foreground: lightDark(scale.red[7], scale.red[2])
        }
      },
      {
        scope: "string variable",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        }
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: lightDark(scale.blue[8], scale.blue[1])
        }
      },
      {
        scope: [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition"
        ],
        settings: {
          foreground: lightDark(scale.blue[8], scale.blue[1])
        }
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: lightDark(scale.green[6], scale.green[1])
        }
      },
      {
        scope: "support.constant",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        }
      },
      {
        scope: "support.variable",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        }
      },
      {
        scope: "support.type.property-name.json",
        settings: {
          foreground: lightDark(scale.green[6], scale.green[1])
        }
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        }
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: lightDark(scale.orange[6], scale.orange[2])
        }
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: lightDark(scale.blue[6], scale.blue[2])
        }
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: lightDark(scale.green[6], scale.green[1])
        }
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: color.fg.default
        }
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: color.fg.default
        }
      },
      {
        scope: ["markup.underline"],
        settings: {
          fontStyle: "underline"
        }
      },
      {
        scope: ["markup.strikethrough"],
        settings: {
          fontStyle: "strikethrough"
        }
      },
      {
        scope: "markup.inline.raw",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        }
      },
      {
        scope: ["markup.deleted", "meta.diff.header.from-file", "punctuation.definition.deleted"],
        settings: {
          background: lightDark(scale.red[0], scale.red[9]),
          foreground: lightDark(scale.red[7], scale.red[2])
        }
      },
      {
        scope: ["punctuation.section.embedded"],
        settings: {
          foreground: lightDark(scale.red[5], scale.red[3])
        }
      },
      {
        scope: ["markup.inserted", "meta.diff.header.to-file", "punctuation.definition.inserted"],
        settings: {
          background: lightDark(scale.green[0], scale.green[9]),
          foreground: lightDark(scale.green[6], scale.green[1])
        }
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: lightDark(scale.orange[1], scale.orange[8]),
          foreground: lightDark(scale.orange[6], scale.orange[2])
        }
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: lightDark(scale.gray[1], scale.gray[8]),
          background: lightDark(scale.blue[6], scale.blue[2])
        }
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: lightDark(scale.purple[5], scale.purple[2]),
          fontStyle: "bold"
        }
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        }
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: lightDark(scale.blue[6], scale.blue[2])
        }
      },
      {
        scope: "meta.output",
        settings: {
          foreground: lightDark(scale.blue[6], scale.blue[2])
        }
      },
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote"
        ],
        settings: {
          foreground: lightDark(scale.gray[6], scale.gray[3])
        }
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: lightDark(scale.red[7], scale.red[2])
        }
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: lightDark(scale.blue[8], scale.blue[1])
        }
      }
    ]
    */
  };
}

module.exports = getTheme;
