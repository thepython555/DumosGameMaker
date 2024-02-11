/*! For license information please see index.js.LICENSE.txt */
!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t(require("blockly/core"));
  else if ("function" == typeof define && define.amd)
    define(["blockly/core"], t);
  else {
    var r =
      "object" == typeof exports ? t(require("blockly/core")) : t(e.Blockly);
    for (var o in r) ("object" == typeof exports ? exports : e)[o] = r[o];
  }
})(this, (e) =>
  (() => {
    "use strict";
    var t = {
        573: (t) => {
          t.exports = e;
        },
      },
      r = {};
    function o(e) {
      var s = r[e];
      if (void 0 !== s) return s.exports;
      var i = (r[e] = { exports: {} });
      return t[e](i, i.exports, o), i.exports;
    }
    o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    };
    var s = {};
    return (
      (() => {
        o.r(s);
        var e = o(573);
        class t {
          constructor() {
            (this.blockCreationWorkspace = new e.Workspace()),
              (this.trigramsToBlocks = new Map());
          }
          indexBlocks(t) {
            const r = new e.Workspace();
            t.forEach((e) => {
              const t = r.newBlock(e);
              this.indexBlockText(e.replaceAll("_", " "), e),
                t.inputList.forEach((t) => {
                  t.fieldRow.forEach((t) => {
                    this.indexDropdownOption(t, e),
                      this.indexBlockText(t.getText(), e);
                  });
                });
            });
          }
          indexDropdownOption(t, r) {
            t instanceof e.FieldDropdown &&
              t.getOptions(!0).forEach((e) => {
                "string" == typeof e[0]
                  ? this.indexBlockText(e[0], r)
                  : "alt" in e[0] && this.indexBlockText(e[0].alt, r);
              });
          }
          blockTypesMatching(e) {
            return [
              ...this.generateTrigrams(e)
                .map((e) => {
                  var t;
                  return null !== (t = this.trigramsToBlocks.get(e)) &&
                    void 0 !== t
                    ? t
                    : new Set();
                })
                .reduce((e, t) => this.getIntersection(e, t))
                .values(),
            ];
          }
          indexBlockText(e, t) {
            this.generateTrigrams(e).forEach((e) => {
              var r;
              const o =
                null !== (r = this.trigramsToBlocks.get(e)) && void 0 !== r
                  ? r
                  : new Set();
              o.add(t), this.trigramsToBlocks.set(e, o);
            });
          }
          generateTrigrams(e) {
            const t = e.toLowerCase();
            if (!t) return [];
            if (t.length <= 3) return [t];
            const r = [];
            for (let e = 0; e < t.length - 3; e++)
              r.push(t.substring(e, e + 3));
            return r;
          }
          getIntersection(e, t) {
            return new Set([...e].filter((e) => t.has(e)));
          }
        }
        class r extends e.ToolboxCategory {
          constructor(e, r, o) {
            super(e, r, o),
              (this.blockSearcher = new t()),
              this.initBlockSearcher(),
              this.registerShortcut();
          }
          createDom_() {
            var e;
            const t = super.createDom_();
            return (
              (this.searchField = document.createElement("input")),
              (this.searchField.type = "search"),
              (this.searchField.placeholder = "Search"),
              this.workspace_.RTL
                ? (this.searchField.style.marginRight = "8px")
                : (this.searchField.style.marginLeft = "8px"),
              this.searchField.addEventListener("keyup", (e) => {
                if ("Escape" === e.key)
                  return this.parentToolbox_.clearSelection(), !0;
                this.matchBlocks();
              }),
              null === (e = this.rowContents_) ||
                void 0 === e ||
                e.replaceChildren(this.searchField),
              t
            );
          }
          getPosition() {
            var e;
            const t =
              (null === (e = this.workspace_.options.languageTree) ||
              void 0 === e
                ? void 0
                : e.contents) || [];
            for (let e = 0; e < t.length; e++)
              if (t[e].kind === r.SEARCH_CATEGORY_KIND) return e;
            return -1;
          }
          registerShortcut() {
            const t = e.ShortcutRegistry.registry.createSerializedKey(
              e.utils.KeyCodes.B,
              [e.utils.KeyCodes.CTRL],
            );
            e.ShortcutRegistry.registry.register({
              name: r.START_SEARCH_SHORTCUT,
              callback: () => {
                const e = this.getPosition();
                return !(
                  e < 0 || (this.parentToolbox_.selectItemByPosition(e), 0)
                );
              },
              keyCodes: [t],
            });
          }
          getAvailableBlocks(e, t) {
            "contents" in e
              ? e.contents.forEach((e) => {
                  this.getAvailableBlocks(e, t);
                })
              : "block" === e.kind.toLowerCase() &&
                "type" in e &&
                e.type &&
                t.add(e.type);
          }
          initBlockSearcher() {
            var e, t;
            const r = new Set();
            null ===
              (t =
                null === (e = this.workspace_.options.languageTree) ||
                void 0 === e
                  ? void 0
                  : e.contents) ||
              void 0 === t ||
              t.forEach((e) => this.getAvailableBlocks(e, r)),
              this.blockSearcher.indexBlocks([...r]);
          }
          onClick(e) {
            super.onClick(e),
              e.preventDefault(),
              e.stopPropagation(),
              this.setSelected(this.parentToolbox_.getSelectedItem() === this);
          }
          setSelected(e) {
            super.setSelected(e),
              this.searchField &&
                (e
                  ? (this.searchField.focus(), this.matchBlocks())
                  : ((this.searchField.value = ""), this.searchField.blur()));
          }
          matchBlocks() {
            var e;
            const t =
              (null === (e = this.searchField) || void 0 === e
                ? void 0
                : e.value) || "";
            (this.flyoutItems_ = t
              ? this.blockSearcher
                  .blockTypesMatching(t)
                  .map((e) => ({ kind: "block", type: e }))
              : []),
              this.flyoutItems_.length ||
                this.flyoutItems_.push({
                  kind: "label",
                  text:
                    t.length < 3
                      ? "Type to search for blocks"
                      : "No matching blocks found",
                }),
              this.parentToolbox_.refreshSelection();
          }
          dispose() {
            super.dispose(),
              e.ShortcutRegistry.registry.unregister(r.START_SEARCH_SHORTCUT);
          }
        }
        (r.START_SEARCH_SHORTCUT = "startSearch"),
          (r.SEARCH_CATEGORY_KIND = "search"),
          e.registry.register(
            e.registry.Type.TOOLBOX_ITEM,
            r.SEARCH_CATEGORY_KIND,
            r,
          );
      })(),
      s
    );
  })(),
);
//# sourceMappingURL=index.js.map
