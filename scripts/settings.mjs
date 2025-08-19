
import { MODULE, SETTINGS } from "./const.mjs";

export class ModuleSettings {

  static init() {
    ModuleSettings._editing();
    ModuleSettings._markdown();
  }

  // Register the settings
  static _editing() {
    game.settings.register(MODULE, SETTINGS.EDIT, {
      name: "CHATEDIT.SETTINGS.AllowEdit.Name",
      hint: "CHATEDIT.SETTINGS.AllowEdit.Hint",
      scope: "world",
      type: Boolean,
      config: true,
      default: true,
      requiresReload: true
    });

    game.settings.register(MODULE, SETTINGS.SHOW, {
      name: "CHATEDIT.SETTINGS.ShowEdited.Name",
      hint: "CHATEDIT.SETTINGS.ShowEdited.Hint",
      scope: "world",
      type: Number,
      config: true,
      default: 2,
      requiresReload: true,
      choices: {
        0: "CHATEDIT.SETTINGS.ShowEdited.None",
        1: "CHATEDIT.SETTINGS.ShowEdited.Message",
        2: "CHATEDIT.SETTINGS.ShowEdited.Icon"
      },
      onChange: false
    });
  }

  static _markdown() {
    game.settings.register(MODULE, SETTINGS.MARKDOWN, {
      name: "CHATEDIT.SETTINGS.Markdown.Name",
      hint: "CHATEDIT.SETTINGS.Markdown.Hint",
      scope: "client",
      type: Boolean,
      config: true,
      default: true,
      requiresReload: true,
      onChange: false
    });

    game.settings.register(MODULE, SETTINGS.EMOJI, {
      name: "CHATEDIT.SETTINGS.Emoji.Name",
      hint: "CHATEDIT.SETTINGS.Emoji.Hint",
      scope: "world",
      type: Boolean,
      config: true,
      default: false,
      requiresReload: true
    });
  }
}