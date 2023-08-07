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
    tokenColors: [
      {
        name: "comment",
        scope: ["comment", "string.quoted.docstring"],
        settings: {
          foreground: color.gray90
        }
      },
      //   {
      //     name: "comment.doc.tag",
      //     scope: ["comment"],
      //     settings: {
      //       // 569cd6
      //       foreground: color.cyan
      //     }
      //   },
      //   {
      //     name: "comment.doc.value",
      //     scope: ["comment"],
      //     settings: {
      //       // 9cdcfe
      //       foreground: color.gray120
      //     }
      //   },
      {
        name: "comments",
        scope: "comment",
        settings: {
          foreground: "#808080"
        }
      },
      {
        name: "block comments",
        scope: "comment.block",
        settings: {
          foreground: "#808080"
        }
      },
      {
        name: "doc comments",
        scope: "comment.block.documentation",
        settings: {
          foreground: "#629755",
          fontStyle: "italic"
        }
      },
      {
        name: "line comments",
        scope: "comment.line",
        settings: {
          foreground: "#808080"
        }
      },
      {
        name: "unison punctuation",
        scope:
          "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "haskell variable generic-type",
        scope: "variable.other.generic-type.haskell",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "haskell storage type",
        scope: "storage.type.haskell",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "support.variable.magic.python",
        scope: "support.variable.magic.python",
        settings: {
          foreground: "#B200B2"
        }
      },
      {
        name: "punctuation.separator.parameters.python",
        scope: "punctuation.separator.element.python",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "variable.parameter.function.language.special.self.python",
        scope: "variable.parameter.function.language.special.self.python",
        settings: {
          foreground: "#94558D"
        }
      },
      {
        name: "storage.modifier.lifetime.rust",
        scope: "storage.modifier.lifetime.rust",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "support.function.std.rust",
        scope: "support.function.std.rust",
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "entity.name.lifetime.rust",
        scope: "entity.name.lifetime.rust",
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "variable.language.rust",
        scope: "variable.language.rust",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "support.constant.edge",
        scope: "support.constant.edge",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "regexp constant character-class",
        scope: "constant.other.character-class.regexp",
        settings: {
          foreground: "#6897BB"
        }
      },
      {
        name: "regexp operator.quantifier",
        scope: "keyword.operator.quantifier.regexp",
        settings: {
          foreground: "#6897BB"
        }
      },
      {
        name: "punctuation.definition",
        scope: "punctuation.definition.string.begin,punctuation.definition.string.end",
        settings: {
          foreground: "#6A8759"
        }
      },
      {
        name: "Text",
        scope: "variable.parameter.function",
        settings: {
          foreground: "#bfbeab"
        }
      },
      {
        name: "Comment Markup Link",
        scope: "comment markup.link",
        settings: {
          foreground: "#5c6370"
        }
      },
      {
        name: "markup diff",
        scope: "markup.changed.diff",
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "diff",
        scope:
          "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "inserted.diff",
        scope: "markup.inserted.diff",
        settings: {
          foreground: "#6A8759"
        }
      },
      {
        name: "deleted.diff",
        scope: "markup.deleted.diff",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "c++ function",
        scope: "meta.function.c,meta.function.cpp",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "c++ block",
        scope:
          "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "js/ts punctuation separator key-value",
        scope: "punctuation.separator.key-value",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "js/ts import keyword",
        scope: "keyword.operator.expression.import",
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "math js/ts",
        scope: "support.constant.math",
        settings: {
          foreground: "#9876AA"
        }
      },
      {
        name: "math property js/ts",
        scope: "support.constant.property.math",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "js/ts variables",
        scope: "variable.other.constant,variable.other.readwrite,variable.object.property",
        settings: {
          foreground: "#9876AA"
        }
      },
      {
        name: "js",
        scope: "meta.definition.variable.js",
        settings: {
          foreground: "#9876AA"
        }
      },
      {
        name: "js Doc",
        scope: "storage.type.class.jsdoc",
        settings: {
          foreground: "#629755",
          fontStyle: "italic bold underline"
        }
      },
      {
        name: "js Doc",
        scope: "variable.other.jsdoc,entity.name.type.instance.jsdoc",
        settings: {
          foreground: "#8A653E",
          fontStyle: ""
        }
      },
      {
        name: "js/ts punctuation",
        scope:
          "punctuation.terminator.statement.js,punctuation.separator.parameter.js,punctuation.separator.comma.js",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "js meta.decorator.js",
        scope: "meta.decorator.js",
        settings: {
          foreground: "#BBB529"
        }
      },
      {
        name: "java type",
        scope: ["storage.type.annotation.java", "storage.type.object.array.java"],
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "java source",
        scope: "source.java",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "java modifier.import",
        scope:
          "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "java modifier.import",
        scope: "meta.method.java",
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "java modifier.import",
        scope: "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "java instanceof",
        scope: "keyword.operator.instanceof.java",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "java variable.name",
        scope: "meta.definition.variable.name.java",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "operator logical",
        scope: "keyword.operator.logical",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "operator bitwise",
        scope: "keyword.operator.bitwise",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "operator channel",
        scope: "keyword.operator.channel",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "support.constant.property-value.scss",
        scope: "support.constant.property-value.scss,support.constant.property-value.css",
        settings: {
          foreground: "#A5C261"
        }
      },
      {
        name: "CSS/SCSS/LESS Operators",
        scope: "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "css color standard name",
        scope:
          "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
        settings: {
          foreground: "#A5C261"
        }
      },
      {
        name: "css",
        scope: "constant.other.color.rgb-value.hex.css,punctuation.definition.constant.css",
        settings: {
          foreground: "#6897BB"
        }
      },
      {
        name: "css url",
        scope: "variable.parameter.url.css",
        settings: {
          foreground: "#287BDE"
        }
      },
      {
        name: "css unicode",
        scope: "constant.other.unicode-range.css",
        settings: {
          foreground: "#E8BF6A"
        }
      },
      {
        name: "css comma/punctuation",
        scope: "punctuation.separator.list.comma.css,punctuation.terminator.rule.css",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "css property-name",
        scope: "support.type.vendored.property-name.css",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "Attribute class",
        scope: "entity.other.attribute-name.class.css",
        settings: {
          foreground: "#E8BF6A"
        }
      },
      {
        name: "js/ts module",
        scope: "support.module.node,support.type.object.module,support.module.node",
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "entity.name.type.module",
        scope: "entity.name.type.module",
        settings: {
          foreground: "#A9B7C6"
        }
      },
      {
        name: "js variable readwrite",
        scope:
          "meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
        settings: {
          foreground: "#9876AA"
        }
      },
      {
        name: "js variable ",
        scope: "support.variable.property,variable.other.property",
        settings: {
          foreground: "#9876AA"
        }
      },
      {
        name: "js/ts json",
        scope: "support.constant.json",
        settings: {
          foreground: "#9876AA"
        }
      },
      {
        name: "js/ts Keyword",
        scope: [
          "keyword.operator.expression.instanceof",
          "keyword.operator.new",
          "keyword.operator.ternary",
          "keyword.operator.optional",
          "keyword.operator.expression.keyof"
        ],
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "js/ts console",
        scope: "support.type.object.console",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "js/ts support.variable.property.process",
        scope: "support.variable.property.process",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "js console function",
        scope: "entity.name.function,support.function.console",
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "js variable property",
        scope: "support.variable.property.js,variable.other.property.js",
        settings: {
          foreground: "#9876AA"
        }
      },
      {
        name: "keyword.operator.misc.rust",
        scope: "keyword.operator.misc.rust",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "keyword.operator.sigil.rust",
        scope: "keyword.operator.sigil.rust",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "operator",
        scope: "keyword.operator.delete",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "js dom",
        scope: "support.type.object.dom",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "js dom variable",
        scope: "support.variable.dom,support.variable.property.dom",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "keyword.operator",
        scope:
          "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
        settings: {
          //"foreground": "#8888C6"
        }
      },
      {
        name: "C operator assignment",
        scope:
          "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Punctuation",
        scope: "punctuation.separator.delimiter",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "Other punctuation .c",
        scope: "punctuation.separator.c,punctuation.separator.cpp",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "C type posix-reserved",
        scope: "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "keyword.operator.sizeof.c",
        scope: "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "CPP class name",
        scope:
          "entity.name.type.cpp, meta.qualified_type.cpp, meta.function.definition.cpp, source.cpp",
        settings: {
          foreground: "#c3c3e4"
        }
      },
      {
        name: "python parameter",
        scope: "variable.parameter.function.language.python",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "python parameter",
        scope: "variable.parameter.function-call.python",
        settings: {
          foreground: "#AA4926"
        }
      },
      {
        name: "python type",
        scope: "support.type.python",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "python logical",
        scope: "keyword.operator.logical.python",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "pyCs",
        scope: "variable.parameter.function.python",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "python block",
        scope:
          "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
        settings: {
          foreground: "#bfb2ab"
        }
      },
      {
        name: "python decorator",
        scope: "entity.name.function.decorator.python",
        settings: {
          foreground: "#BBB529"
        }
      },
      {
        name: "python quoted binary",
        scope: "string.quoted.binary.single.python",
        settings: {
          foreground: "#A5C261"
        }
      },
      {
        name: "python function-call.generic",
        scope: "meta.function-call.generic.python",
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "python placeholder reset to normal string",
        scope: "constant.character.format.placeholder.other.python",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Operators",
        scope: "keyword.operator",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "Compound Assignment Operators",
        scope: "keyword.operator.assignment.compound",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Compound Assignment Operators js/ts",
        scope: "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "Keywords",
        scope: "keyword",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Namespaces",
        scope: "entity.name.namespace",
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "Variables",
        scope: "variable",
        settings: {
          //"foreground": "#e06c75"
        }
      },
      {
        name: "Variables",
        scope: "variable.c",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "Language variables",
        scope: "variable.language",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Language variables",
        scope: "variable.language.special.self.python",
        settings: {
          foreground: "#94558D"
        }
      },
      {
        name: "Java Variables",
        scope: "token.variable.parameter.java",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "Java Imports",
        scope: "import.storage.java",
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "Packages",
        scope: "token.package.keyword",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Packages",
        scope: "token.package",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "Functions",
        scope: [
          "entity.name.function",
          "meta.require",
          "support.function.any-method",
          "variable.function"
        ],
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "Classes",
        scope: "entity.name.type.namespace",
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "Classes",
        scope: "support.class",
        settings: {
          foreground: "#9876AA"
        }
      },
      {
        name: "Classes",
        scope: "support.class.builtin",
        settings: {
          fontStyle: "italic bold",
          foreground: "#9876AA"
        }
      },
      {
        name: "Class name",
        scope: "entity.name.class.identifier.namespace.type",
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "Class name",
        scope: ["entity.name.class", "variable.other.class.js", "variable.other.class.ts"],
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "Class name php",
        scope: "variable.other.class.php",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "Type Name",
        scope: "entity.name.type",
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "Keyword Control",
        scope: "keyword.control",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Control Elements",
        scope: "control.elements, keyword.operator.less",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Methods",
        scope: "keyword.other.special-method",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Storage",
        scope: "storage",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Storage JS TS",
        scope: "token.storage",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Arrows JS TS",
        scope: "storage.type.function.arrow.js,",
        settings: {
          foreground: "#A9B7C6"
        }
      },
      {
        name: "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
        scope:
          "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Java Storage",
        scope: "token.storage.type.java",
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "Support",
        scope: "support.function,",
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        scope: "support.function.magic",
        settings: {
          foreground: "#B200B2"
        }
      },
      {
        scope: "support.function.builtin",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "Support type",
        scope: "support.type.property-name",
        settings: {
          foreground: "#BABABA"
        }
      },
      {
        name: "Support type",
        scope: "support.constant.property-value",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "Support type",
        scope: "support.constant.font-name",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Meta tag",
        scope: "meta.tag",
        settings: {
          foreground: "#E8BF6A"
        }
      },
      {
        name: "meta tag jsx",
        scope: "meta.jsx",
        settings: {
          foreground: "#A9B7C6"
        }
      },
      {
        name: "Strings",
        scope: "string",
        settings: {
          foreground: "#6A8759"
        }
      },
      {
        name: "Constant other symbol",
        scope: "constant.other.symbol",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "Integers",
        scope: "constant.numeric",
        settings: {
          foreground: "#6897BB"
        }
      },
      {
        name: "Constants",
        scope: "constant",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Constants python",
        scope: "constant.other.caps.python",
        settings: {
          foreground: "#A9B7C6"
        }
      },
      {
        name: "Constants",
        scope: "punctuation.definition.constant",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Tags",
        scope: "entity.name.tag",
        settings: {
          foreground: "#E8BF6A"
        }
      },
      {
        name: "Attributes",
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Attribute IDs",
        scope: "entity.other.attribute-name.id",
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "Selector",
        scope: "meta.selector",
        settings: {
          foreground: "#E8BF6A"
        }
      },
      {
        name: "Headings",
        scope: "markup.heading",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "Headings",
        scope: "markup.heading punctuation.definition.heading, entity.name.section",
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "Units",
        scope: "keyword.other.unit",
        settings: {
          foreground: "#A5C261"
        }
      },
      {
        name: "Bold",
        scope: "markup.bold,todo.bold",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Bold",
        scope: "punctuation.definition.bold",
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "markup Italic",
        scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "emphasis md",
        scope: "emphasis md",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "[VSCODE-CUSTOM] Markdown headings",
        scope: "entity.name.section.markdown",
        settings: {
          foreground: "#9876AA"
        }
      },
      {
        name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
        scope: "punctuation.definition.heading.markdown",
        settings: {
          foreground: "#9876AA"
        }
      },
      {
        name: "punctuation.definition.list.begin.markdown",
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "[VSCODE-CUSTOM] Markdown heading setext",
        scope: "markup.heading.setext",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
        scope: "punctuation.definition.bold.markdown",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Inline Raw",
        scope: "markup.inline.raw.markdown",
        settings: {
          foreground: "#6A8759"
        }
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Inline Raw",
        scope: "markup.inline.raw.string.markdown",
        settings: {
          foreground: "#808080"
        }
      },
      {
        name: "markup.fenced_code.block.markdown",
        scope: "markup.fenced_code.block.markdown",
        settings: {
          foreground: "#808080"
        }
      },
      {
        name: "markup.raw.block.markdown",
        scope: "markup.raw.block.markdown",
        settings: {
          foreground: "#808080"
        }
      },
      {
        name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
        scope: "punctuation.definition.list.markdown",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
        scope: [
          "punctuation.definition.string.begin.markdown",
          "punctuation.definition.string.end.markdown",
          "punctuation.definition.metadata.markdown"
        ],
        settings: {
          foreground: "#287BDE"
        }
      },
      {
        name: "string.other.link.description.title.markdown",
        scope: ["string.other.link.description.title.markdown"],
        settings: {
          foreground: "#808080"
        }
      },
      {
        name: "beginning.punctuation.definition.list.markdown",
        scope: ["beginning.punctuation.definition.list.markdown"],
        settings: {
          foreground: "#287BDE"
        }
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
        scope: "punctuation.definition.metadata.markdown",
        settings: {
          foreground: "#A9B7C6"
        }
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
        scope:
          "markup.underline.link.markdown,markup.underline.link.image.markdown,punctuation.definition.link.markdown",
        settings: {
          foreground: "#287BDE"
        }
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
        scope: "string.other.link.title.markdown,string.other.link.description.markdown",
        settings: {
          foreground: "#287BDE"
        }
      },
      {
        name: "Regular Expressions",
        scope: "string.regexp",
        settings: {
          foreground: "#6897BB"
        }
      },
      {
        name: "Escape Characters",
        scope: "constant.character.escape",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Embedded",
        scope: "punctuation.section.embedded, variable.interpolation",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "Embedded",
        scope: "punctuation.section.embedded.begin,punctuation.section.embedded.end",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "illegal",
        scope: "invalid.illegal",
        settings: {
          foreground: "#ffffff"
        }
      },
      {
        name: "illegal",
        scope: "invalid.illegal.bad-ampersand.html",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "Broken",
        scope: "invalid.broken",
        settings: {
          foreground: "#ffffff"
        }
      },
      {
        name: "Deprecated",
        scope: "invalid.deprecated",
        settings: {
          foreground: "#ffffff"
        }
      },
      {
        name: "Unimplemented",
        scope: "invalid.unimplemented",
        settings: {
          foreground: "#ffffff"
        }
      },
      {
        name: "DocString",
        scope: "string.quoted.docstring.multi.python",
        settings: {
          fontStyle: "italic",
          foreground: "#629755"
        }
      },
      {
        name: "Source Json Meta Structure Dictionary Json > String Quoted Json",
        scope: "source.json meta.structure.dictionary.json > string.quoted.json",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
        scope:
          "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
        scope:
          "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
        settings: {
          foreground: "#6A8759"
        }
      },
      {
        name: "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
        scope:
          "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "[VSCODE-CUSTOM] JSON Property Name",
        scope: "support.type.property-name.json",
        settings: {
          foreground: "#9876AA"
        }
      },
      {
        name: "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
        scope: "support.type.property-name.json punctuation",
        settings: {
          foreground: "#9876AA"
        }
      },
      {
        name: "laravel blade tag",
        scope:
          "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "laravel blade @",
        scope:
          "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "use statement for other classes",
        scope:
          "support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "error suppression",
        scope: "keyword.operator.error-control.php",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "php instanceof",
        scope: "keyword.operator.type.php",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "style double quoted array index normal begin",
        scope: "punctuation.section.array.begin.php",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "style double quoted array index normal end",
        scope: "punctuation.section.array.end.php",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "php illegal.non-null-typehinted",
        scope: "invalid.illegal.non-null-typehinted.php",
        settings: {
          foreground: "#f44747"
        }
      },
      {
        name: "php types",
        scope:
          "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "php call-function",
        scope: "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "php function-resets",
        scope:
          "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "support php constants",
        scope: "support.constant.core.rust",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "support php constants",
        scope:
          "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "php goto",
        scope: "entity.name.goto-label.php,support.other.php",
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "php logical/bitwise operator",
        scope:
          "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "php regexp operator",
        scope: "keyword.operator.regexp.php",
        settings: {
          foreground: "#6897BB"
        }
      },
      {
        name: "php comparison",
        scope: "keyword.operator.comparison.php",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "php heredoc/nowdoc",
        scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "python function decorator @",
        scope: "meta.function.decorator.python",
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "python function support",
        scope: "support.token.decorator.python,meta.function.decorator.identifier.python",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "parameter function js/ts",
        scope: "function.parameter",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "parameter function ruby cs",
        scope: "function.parameter.ruby, function.parameter.cs",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "constant.language.symbol.ruby",
        scope: "constant.language.symbol.ruby",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "rgb-value",
        scope: "rgb-value",
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "rgb value",
        scope: "inline-color-decoration rgb-value",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "rgb value less",
        scope: "less rgb-value",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "sass selector",
        scope: "selector.sass",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "ts primitive/builtin types",
        scope:
          "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "block scope",
        scope: "block.scope.end,block.scope.begin",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "cs storage type",
        scope: "storage.type.cs",
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "cs local variable",
        scope: "entity.name.variable.local.cs",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        scope: "token.info-token",
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        scope: "token.warn-token",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        scope: "token.error-token",
        settings: {
          foreground: "#f44747"
        }
      },
      {
        scope: "token.debug-token",
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "String interpolation",
        scope: [
          "punctuation.definition.template-expression.begin",
          "punctuation.definition.template-expression.end",
          "punctuation.section.embedded"
        ],
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "Reset JavaScript string interpolation expression",
        scope: ["meta.template.expression"],
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "Import module JS",
        scope: ["keyword.operator.module"],
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "js Flowtype",
        scope: ["support.type.type.flowtype"],
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "js Flow",
        scope: ["support.type.primitive"],
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "js class prop",
        scope: ["meta.property.object"],
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "js func parameter",
        scope: ["variable.parameter.function.js"],
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "js template literals begin",
        scope: ["keyword.other.template.begin"],
        settings: {
          foreground: "#6A8759"
        }
      },
      {
        name: "js template literals end",
        scope: ["keyword.other.template.end"],
        settings: {
          foreground: "#6A8759"
        }
      },
      {
        name: "js template literals variable braces begin",
        scope: ["keyword.other.substitution.begin"],
        settings: {
          foreground: "#6A8759"
        }
      },
      {
        name: "js template literals variable braces end",
        scope: ["keyword.other.substitution.end"],
        settings: {
          foreground: "#6A8759"
        }
      },
      {
        name: "js operator.assignment",
        scope: ["keyword.operator.assignment"],
        settings: {
          //"foreground": "#8888C6"
        }
      },
      {
        name: "go operator",
        scope: ["keyword.operator.assignment.go"],
        settings: {
          //"foreground": "#e5c07b"
        }
      },
      {
        name: "go operator",
        scope: ["keyword.operator.arithmetic.go", "keyword.operator.address.go"],
        settings: {
          //"foreground": "#CC7832"
        }
      },
      {
        name: "entity.name.type.go",
        scope: ["entity.name.type.go"],
        settings: {
          foreground: "#A9B7C6"
        }
      },
      {
        name: "Go package name and alias import",
        scope: ["entity.name.package.go", "entity.alias.import.go"],
        settings: {
          foreground: "#AFBF7E"
        }
      },
      {
        name: "support.function.go",
        scope: ["support.function.go"],
        settings: {
          foreground: "#B09D79"
        }
      },
      {
        name: "string",
        scope: ["string.quoted.rune.go", "constant.other.rune.go"],
        settings: {
          foreground: "#6A8759"
        }
      },
      {
        name: "punctuation and terminator",
        scope: ["punctuation.other.comma.go", "punctuation.terminator.go"],
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "support.function.builtin.go",
        scope: ["support.function.builtin.go"],
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "elm prelude",
        scope: ["support.type.prelude.elm"],
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "elm constant",
        scope: ["support.constant.elm"],
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "template literal",
        scope: ["punctuation.quasi.element"],
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "html/pug (jade) escaped characters and entities",
        scope: ["constant.character.entity"],
        settings: {
          foreground: "#6D9CBE"
        }
      },
      {
        name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
        scope: [
          "entity.other.attribute-name.pseudo-element",
          "entity.other.attribute-name.pseudo-class"
        ],
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "Clojure globals",
        scope: ["entity.global.clojure"],
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "Clojure symbols",
        scope: ["meta.symbol.clojure"],
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "Clojure constants",
        scope: ["constant.keyword.clojure"],
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "CoffeeScript Function Argument",
        scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "Ini Default Text",
        scope: ["source.ini"],
        settings: {
          foreground: "#6A8759"
        }
      },
      {
        name: "Makefile prerequisities",
        scope: ["meta.scope.prerequisites.makefile"],
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "Makefile text colour",
        scope: ["source.makefile"],
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "Groovy import names",
        scope: ["storage.modifier.import.groovy"],
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "Groovy Methods",
        scope: ["meta.method.groovy"],
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "Groovy Variables",
        scope: ["meta.definition.variable.name.groovy"],
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "Groovy Inheritance",
        scope: ["meta.definition.class.inherited.classes.groovy"],
        settings: {
          foreground: "#6A8759"
        }
      },
      {
        name: "HLSL Semantic",
        scope: ["support.variable.semantic.hlsl"],
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "HLSL Types",
        scope: [
          "support.type.texture.hlsl",
          "support.type.sampler.hlsl",
          "support.type.object.hlsl",
          "support.type.object.rw.hlsl",
          "support.type.fx.hlsl",
          "support.type.object.hlsl"
        ],
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "SQL Variables",
        scope: ["text.variable", "text.bracketed"],
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "types",
        scope: ["support.type.swift", "support.type.vb.asp"],
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "heading 1, keyword",
        scope: ["entity.name.function.xi"],
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "heading 2, callable",
        scope: ["entity.name.class.xi"],
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "heading 3, property",
        scope: ["constant.character.character-class.regexp.xi"],
        settings: {
          foreground: "#6897BB"
        }
      },
      {
        name: "heading 4, type, class, interface",
        scope: ["constant.regexp.xi"],
        settings: {
          foreground: "#6897BB"
        }
      },
      {
        name: "heading 5, enums, preprocessor, constant, decorator",
        scope: ["keyword.control.xi"],
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        name: "heading 6, number",
        scope: ["invalid.xi"],
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "string",
        scope: ["beginning.punctuation.definition.quote.markdown.xi"],
        settings: {
          foreground: "#6A8759"
        }
      },
      {
        name: "comments",
        scope: ["beginning.punctuation.definition.list.markdown.xi"],
        settings: {
          foreground: "#7f848e"
        }
      },
      {
        name: "link",
        scope: ["constant.character.xi"],
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "accent",
        scope: ["accent.xi"],
        settings: {
          foreground: "#FFC66D"
        }
      },
      {
        name: "wikiword",
        scope: ["wikiword.xi"],
        settings: {
          foreground: "#CC7832"
        }
      },
      {
        name: "language operators like '+', '-' etc",
        scope: ["constant.other.color.rgb-value.xi"],
        settings: {
          foreground: "#ffffff"
        }
      },
      {
        name: "elements to dim",
        scope: ["punctuation.definition.tag.xi"],
        settings: {
          foreground: "#5c6370"
        }
      },
      {
        name: "C++/C#",
        scope: [
          "entity.name.label.cs",
          "entity.name.scope-resolution.function.call",
          "entity.name.scope-resolution.function.definition"
        ],
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        name: "Markdown underscore-style headers",
        scope: [
          "entity.name.label.cs",
          "markup.heading.setext.1.markdown",
          "markup.heading.setext.2.markdown"
        ],
        settings: {
          foreground: "#9876AA"
        }
      },
      {
        name: "meta.separator.markdown",
        scope: ["meta.separator.markdown"],
        settings: {
          foreground: "#808080"
        }
      },
      {
        name: "[VSCODE-CUSTOM] Markdown Quote",
        scope: "markup.quote.markdown",
        settings: {
          foreground: "#6A8759"
        }
      },
      {
        name: "punctuation.definition.block.sequence.item.yaml",
        scope: "punctuation.definition.block.sequence.item.yaml",
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        scope: ["constant.language.symbol.elixir", "constant.language.symbol.double-quoted.elixir"],
        settings: {
          foreground: "#8888C6"
        }
      },
      {
        scope: ["entity.name.variable.parameter.cs"],
        settings: {
          foreground: "#e5c07b"
        }
      },
      {
        scope: ["entity.name.variable.field.cs"],
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "Deleted",
        scope: "markup.deleted",
        settings: {
          foreground: "#e06c75"
        }
      },
      {
        name: "Inserted",
        scope: "markup.inserted",
        settings: {
          foreground: "#6A8759"
        }
      },
      {
        name: "Underline",
        scope: "markup.underline",
        settings: {
          fontStyle: "underline"
        }
      },
      {
        name: "punctuation.section.embedded.begin.php",
        scope: ["punctuation.section.embedded.begin.php", "punctuation.section.embedded.end.php"],
        settings: {
          foreground: "#BE5046"
        }
      },
      {
        name: "support.other.namespace.php",
        scope: ["support.other.namespace.php"],
        settings: {
          foreground: "#abb2bf"
        }
      },
      {
        name: "variable.other.object",
        scope: ["variable.other.object"],
        settings: {
          fontStyle: "italic bold",
          foreground: "#9876AA"
        }
      },
      {
        name: "variable.other.constant.property",
        scope: ["variable.other.constant.property"],
        settings: {
          foreground: "#9876AA"
        }
      },
      {
        name: "entity.other.inherited-class",
        scope: ["entity.other.inherited-class"],
        settings: {
          foreground: "#e5c07b"
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
