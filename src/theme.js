const lightColors = require("./colors/light.json");
const darkColors = require("./colors/dark.json");

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
  console.log(color.white);

  return {
    name: name,
    colors: {
      focusBorder: color.blue70,
      foreground: color.gray120,
      descriptionForeground: color.gray80,
      errorForeground: color.red50,

      // "textLink.foreground": "",
      // "textLink.activeForeground": "",
      // "textBlockQuote.background": "",
      // "textBlockQuote.border": "",
      // "textCodeBlock.background": "",
      // "textPreformat.foreground": "",
      // "textSeparator.foreground": "",

      // "icon.foreground": "",
      // "keybindingLabel.foreground": "",

      // "button.background": "",
      // "button.foreground": "",
      // "button.hoverBackground": "",

      // "button.secondaryBackground": "",
      // "button.secondaryForeground": "",
      // "button.secondaryHoverBackground": "",

      // "checkbox.background": "",
      // "checkbox.border": "",

      // "dropdown.background": "",
      // "dropdown.border": "",
      // "dropdown.foreground": "",
      // "dropdown.listBackground": "",

      // "input.background": "",
      // "input.border": "",
      // "input.foreground": "",
      // "input.placeholderForeground": "",

      // "badge.foreground": "",
      // "badge.background": "",

      // "progressBar.background": "",

      // "titleBar.activeForeground": "",
      // "titleBar.activeBackground": "",
      // "titleBar.inactiveForeground": "",
      // "titleBar.inactiveBackground": "",
      // "titleBar.border": "",

      // "activityBar.foreground": "",
      // "activityBar.inactiveForeground": "",
      // "activityBar.background": "",
      // "activityBarBadge.foreground": "",
      // "activityBarBadge.background": "",
      // "activityBar.activeBorder": "",
      // "activityBar.border": "",

      // "sideBar.foreground": "",
      // "sideBar.background": "",
      // "sideBar.border": "",
      // "sideBarTitle.foreground": "",
      // "sideBarSectionHeader.foreground": "",
      // "sideBarSectionHeader.background": "",
      // "sideBarSectionHeader.border": "",

      // "list.hoverForeground": "",
      // "list.inactiveSelectionForeground": "",
      // "list.activeSelectionForeground": "",
      // "list.hoverBackground": "",
      // "list.inactiveSelectionBackground": "",
      // "list.activeSelectionBackground": "",
      // "list.focusForeground": "",
      // "list.focusBackground": "",
      // "list.inactiveFocusBackground": "",
      // "list.highlightForeground": "",

      // "tree.indentGuidesStroke": "",

      // "notificationCenterHeader.foreground": "",
      // "notificationCenterHeader.background": "",
      // "notifications.foreground": "",
      // "notifications.background": "",
      // "notifications.border": "",
      // "notificationsErrorIcon.foreground": "",
      // "notificationsWarningIcon.foreground": "",
      // "notificationsInfoIcon.foreground": "",

      // "pickerGroup.border": "",
      // "pickerGroup.foreground": "",
      // "quickInput.background": "",
      // "quickInput.foreground": "",

      // "statusBar.foreground": "",
      // "statusBar.background": "",
      // "statusBar.border": "",
      // "statusBar.focusBorder": "",
      // "statusBar.noFolderBackground": "",
      // "statusBar.debuggingForeground": "",
      // "statusBar.debuggingBackground": "",
      // "statusBarItem.prominentBackground": "",
      // "statusBarItem.remoteForeground": "",
      // "statusBarItem.remoteBackground": "",
      // "statusBarItem.hoverBackground": "",
      // "statusBarItem.activeBackground": "",
      // "statusBarItem.focusBorder": "",

      // "editorGroupHeader.tabsBackground": "",
      // "editorGroupHeader.tabsBorder": "",
      // "editorGroup.border": "",

      // "tab.activeForeground": "",
      // "tab.inactiveForeground": "",
      // "tab.inactiveBackground": "",
      // "tab.activeBackground": "",
      // "tab.hoverBackground": "",
      // "tab.unfocusedHoverBackground": "",
      // "tab.border": "",
      // "tab.unfocusedActiveBorderTop": "",
      // "tab.activeBorder": "",
      // "tab.unfocusedActiveBorder": "",
      // "tab.activeBorderTop": "",

      // "breadcrumb.foreground": "",
      // "breadcrumb.focusForeground": "",
      // "breadcrumb.activeSelectionForeground": "",
      // "breadcrumbPicker.background": "",

      // "editor.foreground": "",
      // "editor.background": "",
      // "editorWidget.background": "",
      // "editor.foldBackground": "",
      // "editor.lineHighlightBackground": "",
      // "editor.lineHighlightBorder": "",
      // "editorLineNumber.foreground": "",
      // "editorLineNumber.activeForeground": "",
      // "editorIndentGuide.background": "",
      // "editorIndentGuide.activeBackground": "",
      // "editorWhitespace.foreground": "",
      // "editorCursor.foreground": "",

      // "editor.findMatchBackground": "",
      // "editor.findMatchHighlightBackground": "",
      // "editor.linkedEditingBackground": "",
      // "editor.inactiveSelectionBackground": "",
      // "editor.selectionBackground": "",
      // "editor.selectionForeground": "",
      // "editor.selectionHighlightBackground": "",
      // "editor.wordHighlightBackground": "",
      // "editor.wordHighlightBorder": "",
      // "editor.wordHighlightStrongBackground": "",
      // "editor.wordHighlightStrongBorder": "",
      // "editorBracketMatch.background": "",
      // "editorBracketMatch.border": "",

      // "editorInlayHint.background": "",
      // "editorInlayHint.foreground": "",
      // "editorInlayHint.typeBackground": "",
      // "editorInlayHint.typeForeground": "",
      // "editorInlayHint.paramBackground": "",
      // "editorInlayHint.paramForeground": "",

      // "editorGutter.modifiedBackground": "",
      // "editorGutter.addedBackground": "",
      // "editorGutter.deletedBackground": "",

      // "diffEditor.insertedLineBackground": "",
      // "diffEditor.insertedTextBackground": "",
      // "diffEditor.removedLineBackground": "",
      // "diffEditor.removedTextBackground": "",

      // "scrollbar.shadow": "",
      // "scrollbarSlider.background": "",
      // "scrollbarSlider.hoverBackground": "",
      // "scrollbarSlider.activeBackground": "",
      // "editorOverviewRuler.border": "",

      // "minimapSlider.background": "",
      // "minimapSlider.hoverBackground": "",
      // "minimapSlider.activeBackground": "",

      // "panel.background": "",
      // "panel.border": "",
      // "panelTitle.activeBorder": "",
      // "panelTitle.activeForeground": "",
      // "panelTitle.inactiveForeground": "",
      // "panelInput.border": "",

      // "debugIcon.breakpointForeground": "",

      // "debugConsole.infoForeground": "",
      // "debugConsole.warningForeground": "",
      // "debugConsole.errorForeground": "",
      // "debugConsole.sourceForeground": "",
      // "debugConsoleInputIcon.foreground": "",

      // "debugTokenExpression.name": "",
      // "debugTokenExpression.value": "",
      // "debugTokenExpression.string": "",
      // "debugTokenExpression.boolean": "",
      // "debugTokenExpression.number": "",
      // "debugTokenExpression.error": "",

      // "symbolIcon.arrayForeground": "",
      // "symbolIcon.booleanForeground": "",
      // "symbolIcon.classForeground": "",
      // "symbolIcon.colorForeground": "",
      // "symbolIcon.constructorForeground": "",
      // "symbolIcon.enumeratorForeground": "",
      // "symbolIcon.enumeratorMemberForeground": "",
      // "symbolIcon.eventForeground": "",
      // "symbolIcon.fieldForeground": "",
      // "symbolIcon.fileForeground": "",
      // "symbolIcon.folderForeground": "",
      // "symbolIcon.functionForeground": "",
      // "symbolIcon.interfaceForeground": "",
      // "symbolIcon.keyForeground": "",
      // "symbolIcon.keywordForeground": "",
      // "symbolIcon.methodForeground": "",
      // "symbolIcon.moduleForeground": "",
      // "symbolIcon.namespaceForeground": "",
      // "symbolIcon.nullForeground": "",
      // "symbolIcon.numberForeground": "",
      // "symbolIcon.objectForeground": "",
      // "symbolIcon.operatorForeground": "",
      // "symbolIcon.packageForeground": "",
      // "symbolIcon.propertyForeground": "",
      // "symbolIcon.referenceForeground": "",
      // "symbolIcon.snippetForeground": "",
      // "symbolIcon.stringForeground": "",
      // "symbolIcon.structForeground": "",
      // "symbolIcon.textForeground": "",
      // "symbolIcon.typeParameterForeground": "",
      // "symbolIcon.unitForeground": "",
      // "symbolIcon.variableForeground": "",
      // "symbolIcon.constantForeground": "",

      // "terminal.foreground": "",
      // "terminal.ansiBlack": "",
      // "terminal.ansiRed": "",
      // "terminal.ansiGreen": "",
      // "terminal.ansiYellow": "",
      // "terminal.ansiBlue": "",
      // "terminal.ansiMagenta": "",
      // "terminal.ansiCyan": "",
      // "terminal.ansiWhite": "",
      // "terminal.ansiBrightBlack": "",
      // "terminal.ansiBrightRed": "",
      // "terminal.ansiBrightGreen": "",
      // "terminal.ansiBrightYellow": "",
      // "terminal.ansiBrightBlue": "",
      // "terminal.ansiBrightMagenta": "",
      // "terminal.ansiBrightCyan": "",
      // "terminal.ansiBrightWhite": "",

      // "editorBracketHighlight.foreground1": "",
      // "editorBracketHighlight.foreground2": "",
      // "editorBracketHighlight.foreground3": "",
      // "editorBracketHighlight.foreground4": "",
      // "editorBracketHighlight.foreground5": "",
      // "editorBracketHighlight.foreground6": "",
      // "editorBracketHighlight.unexpectedBracket.foreground": "", // gray

      // "gitDecoration.addedResourceForeground": "",
      // "gitDecoration.modifiedResourceForeground": "",
      // "gitDecoration.deletedResourceForeground": "",
      // "gitDecoration.untrackedResourceForeground": "",
      // "gitDecoration.ignoredResourceForeground": "",
      // "gitDecoration.conflictingResourceForeground": "",
      // "gitDecoration.submoduleResourceForeground": "",

      // "debugToolBar.background": "",
      // "editor.stackFrameHighlightBackground": "",
      // "editor.focusedStackFrameHighlightBackground": "",

      // "peekViewEditor.matchHighlightBackground": "",
      // "peekViewResult.matchHighlightBackground": "",
      // "peekViewEditor.background": "",
      // "peekViewResult.background": "",

      // "settings.headerForeground": "",
      // "settings.modifiedItemIndicator": "",
      // "welcomePage.buttonBackground": "",
      // "welcomePage.buttonHoverBackground": ""
    },
    semanticHighlighting: true,
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
