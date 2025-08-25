export const MODULE = "chatedit-new";
export const CHATEDIT_CONST = {
  CHAT_MESSAGE_STYLES: {
    EMOTE: 3,
    IC: 2,
    OOC: 1,
    OTHER: 0
  }
};
export const SETTINGS = {
  EDIT: "allowEdit",
  EMOJI: "emoji",
  MARKDOWN: "markdown",
  SHOW: "showEdited"
};
export const localize = (key) => game.i18n.localize(key);
export function userAuthor() {
  return foundry.utils.isNewerVersion(12, game.version) ? "user" : "author";
}