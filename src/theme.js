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
      "pickerGroup.border": color.gray60,
      "pickerGroup.foreground": color.white,
      "quickInput.background": color.gray20,
      "quickInput.foreground": color.gray110,
      "quickInputList.focusBackground": color.blue40,
      "quickInputList.focusForeground": color.gray110,
      "quickInputList.focusIconForeground": color.white,
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
        scope: ["meta.embedded", "source.groovy.embedded", "string meta.image.inline.markdown"],
        settings: {
          foreground: "#D4D4D4"
        }
      },
      {
        scope: "emphasis",
        settings: {
          fontStyle: "italic"
        }
      },
      {
        scope: "strong",
        settings: {
          fontStyle: "bold"
        }
      },
      {
        scope: "header",
        settings: {
          foreground: "#000080"
        }
      },
      {
        scope: "constant.language",
        settings: {
          foreground: "#569cd6"
        }
      },
      {
        scope: [
          "constant.numeric",
          "variable.other.enummember",
          "keyword.operator.plus.exponent",
          "keyword.operator.minus.exponent"
        ],
        settings: {
          foreground: "#b5cea8"
        }
      },
      {
        scope: "constant.regexp",
        settings: {
          foreground: "#646695"
        }
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: "#569cd6"
        }
      },
      {
        scope: "entity.name.tag.css",
        settings: {
          foreground: "#d7ba7d"
        }
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#9cdcfe"
        }
      },
      {
        scope: [
          "entity.other.attribute-name.class.css",
          "entity.other.attribute-name.class.mixin.css",
          "entity.other.attribute-name.id.css",
          "entity.other.attribute-name.parent-selector.css",
          "entity.other.attribute-name.pseudo-class.css",
          "entity.other.attribute-name.pseudo-element.css",
          "source.css.less entity.other.attribute-name.id",
          "entity.other.attribute-name.scss"
        ],
        settings: {
          foreground: "#d7ba7d"
        }
      },
      {
        scope: "invalid",
        settings: {
          foreground: "#f44747"
        }
      },
      {
        scope: "markup.underline",
        settings: {
          fontStyle: "underline"
        }
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: "#569cd6"
        }
      },
      {
        scope: "markup.heading",
        settings: {
          fontStyle: "bold",
          foreground: "#569cd6"
        }
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic"
        }
      },
      {
        scope: "markup.strikethrough",
        settings: {
          fontStyle: "strikethrough"
        }
      },
      {
        scope: "markup.inserted",
        settings: {
          foreground: "#b5cea8"
        }
      },
      {
        scope: "markup.deleted",
        settings: {
          foreground: "#ce9178"
        }
      },
      {
        scope: "markup.changed",
        settings: {
          foreground: "#569cd6"
        }
      },
      {
        scope: "punctuation.definition.quote.begin.markdown",
        settings: {
          foreground: "#6A9955"
        }
      },
      {
        scope: "punctuation.definition.list.begin.markdown",
        settings: {
          foreground: "#6796e6"
        }
      },
      {
        scope: "markup.inline.raw",
        settings: {
          foreground: "#ce9178"
        }
      },
      {
        name: "brackets of XML/HTML tags",
        scope: "punctuation.definition.tag",
        settings: {
          foreground: "#808080"
        }
      },
      {
        scope: ["meta.preprocessor", "entity.name.function.preprocessor"],
        settings: {
          foreground: "#569cd6"
        }
      },
      {
        scope: "meta.preprocessor.string",
        settings: {
          foreground: "#ce9178"
        }
      },
      {
        scope: "meta.preprocessor.numeric",
        settings: {
          foreground: "#b5cea8"
        }
      },
      {
        scope: "meta.structure.dictionary.key.python",
        settings: {
          foreground: "#9cdcfe"
        }
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: "#569cd6"
        }
      },
      {
        scope: "storage",
        settings: {
          foreground: "#569cd6"
        }
      },
      {
        scope: "storage.type",
        settings: {
          foreground: "#569cd6"
        }
      },
      {
        scope: ["storage.modifier", "keyword.operator.noexcept"],
        settings: {
          foreground: "#569cd6"
        }
      },
      {
        scope: ["string", "meta.embedded.assembly"],
        settings: {
          foreground: "#ce9178"
        }
      },
      {
        scope: "string.tag",
        settings: {
          foreground: "#ce9178"
        }
      },
      {
        scope: "string.value",
        settings: {
          foreground: "#ce9178"
        }
      },
      {
        scope: "string.regexp",
        settings: {
          foreground: "#d16969"
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
          foreground: "#569cd6"
        }
      },
      {
        name: "Reset JavaScript string interpolation expression",
        scope: ["meta.template.expression"],
        settings: {
          foreground: "#d4d4d4"
        }
      },
      {
        scope: [
          "support.type.vendored.property-name",
          "support.type.property-name",
          "variable.css",
          "variable.scss",
          "variable.other.less",
          "source.coffee.embedded"
        ],
        settings: {
          foreground: "#9cdcfe"
        }
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#569cd6"
        }
      },
      {
        scope: "keyword.control",
        settings: {
          foreground: "#569cd6"
        }
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#d4d4d4"
        }
      },
      {
        scope: [
          "keyword.operator.new",
          "keyword.operator.expression",
          "keyword.operator.cast",
          "keyword.operator.sizeof",
          "keyword.operator.alignof",
          "keyword.operator.typeid",
          "keyword.operator.alignas",
          "keyword.operator.instanceof",
          "keyword.operator.logical.python",
          "keyword.operator.wordlike"
        ],
        settings: {
          foreground: "#569cd6"
        }
      },
      {
        scope: "keyword.other.unit",
        settings: {
          foreground: "#b5cea8"
        }
      },
      {
        scope: ["punctuation.section.embedded.begin.php", "punctuation.section.embedded.end.php"],
        settings: {
          foreground: "#569cd6"
        }
      },
      {
        scope: "support.function.git-rebase",
        settings: {
          foreground: "#9cdcfe"
        }
      },
      {
        scope: "constant.sha.git-rebase",
        settings: {
          foreground: "#b5cea8"
        }
      },
      {
        name: "coloring of the Java import and package identifiers",
        scope: [
          "storage.modifier.import.java",
          "variable.language.wildcard.java",
          "storage.modifier.package.java"
        ],
        settings: {
          foreground: "#d4d4d4"
        }
      },
      {
        name: "this.self",
        scope: "variable.language",
        settings: {
          foreground: "#569cd6"
        }
      },
      // ---
      {
        name: "Function declarations",
        scope: [
          "entity.name.function",
          "support.function",
          "support.constant.handlebars",
          "source.powershell variable.other.member",
          "entity.name.operator.custom-literal"
        ],
        settings: {
          foreground: "#DCDCAA"
        }
      },
      {
        name: "Types declaration and references",
        scope: [
          "support.class",
          "support.type",
          "entity.name.type",
          "entity.name.namespace",
          "entity.other.attribute",
          "entity.name.scope-resolution",
          "entity.name.class",
          "storage.type.numeric.go",
          "storage.type.byte.go",
          "storage.type.boolean.go",
          "storage.type.string.go",
          "storage.type.uintptr.go",
          "storage.type.error.go",
          "storage.type.rune.go",
          "storage.type.cs",
          "storage.type.generic.cs",
          "storage.type.modifier.cs",
          "storage.type.variable.cs",
          "storage.type.annotation.java",
          "storage.type.generic.java",
          "storage.type.java",
          "storage.type.object.array.java",
          "storage.type.primitive.array.java",
          "storage.type.primitive.java",
          "storage.type.token.java",
          "storage.type.groovy",
          "storage.type.annotation.groovy",
          "storage.type.parameters.groovy",
          "storage.type.generic.groovy",
          "storage.type.object.array.groovy",
          "storage.type.primitive.array.groovy",
          "storage.type.primitive.groovy"
        ],
        settings: {
          foreground: "#4EC9B0"
        }
      },
      {
        name: "Types declaration and references, TS grammar specific",
        scope: [
          "meta.type.cast.expr",
          "meta.type.new.expr",
          "support.constant.math",
          "support.constant.dom",
          "support.constant.json",
          "entity.other.inherited-class"
        ],
        settings: {
          foreground: "#4EC9B0"
        }
      },
      {
        name: "Control flow / Special keywords",
        scope: [
          "keyword.control",
          "source.cpp keyword.operator.new",
          "keyword.operator.delete",
          "keyword.other.using",
          "keyword.other.operator",
          "entity.name.operator"
        ],
        settings: {
          foreground: "#C586C0"
        }
      },
      {
        name: "Variable and parameter name",
        scope: [
          "variable",
          "meta.definition.variable.name",
          "support.variable",
          "entity.name.variable",
          "constant.other.placeholder"
        ],
        settings: {
          foreground: "#9CDCFE"
        }
      },
      {
        name: "Constants and enums",
        scope: ["variable.other.constant", "variable.other.enummember"],
        settings: {
          foreground: "#4FC1FF"
        }
      },
      {
        name: "Object keys, TS grammar specific",
        scope: ["meta.object-literal.key"],
        settings: {
          foreground: "#9CDCFE"
        }
      },
      {
        name: "CSS property value",
        scope: [
          "support.constant.property-value",
          "support.constant.font-name",
          "support.constant.media-type",
          "support.constant.media",
          "constant.other.color.rgb-value",
          "constant.other.rgb-value",
          "support.constant.color"
        ],
        settings: {
          foreground: "#CE9178"
        }
      },
      {
        name: "Regular expression groups",
        scope: [
          "punctuation.definition.group.regexp",
          "punctuation.definition.group.assertion.regexp",
          "punctuation.definition.character-class.regexp",
          "punctuation.character.set.begin.regexp",
          "punctuation.character.set.end.regexp",
          "keyword.operator.negation.regexp",
          "support.other.parenthesis.regexp"
        ],
        settings: {
          foreground: "#CE9178"
        }
      },
      {
        scope: [
          "constant.character.character-class.regexp",
          "constant.other.character-class.set.regexp",
          "constant.other.character-class.regexp",
          "constant.character.set.regexp"
        ],
        settings: {
          foreground: "#d16969"
        }
      },
      {
        scope: ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"],
        settings: {
          foreground: "#DCDCAA"
        }
      },
      {
        scope: "keyword.operator.quantifier.regexp",
        settings: {
          foreground: "#d7ba7d"
        }
      },
      {
        scope: ["constant.character", "constant.other.option"],
        settings: {
          foreground: "#569cd6"
        }
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: "#d7ba7d"
        }
      },
      {
        scope: "entity.name.label",
        settings: {
          foreground: "#C8C8C8"
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
