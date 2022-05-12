var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  F: () => Fbutton
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("./index-f33ac00f.js");
const Fbutton = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "md" } = $$props;
  let { primary = false } = $$props;
  let { danger = false } = $$props;
  let { outline = false } = $$props;
  let { loading = false } = $$props;
  let { disabled = false } = $$props;
  let { path = null } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.danger === void 0 && $$bindings.danger && danger !== void 0)
    $$bindings.danger(danger);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  return `${path ? `<a${(0, import_index_f33ac00f.d)("href", path, 0)} class="${[
    "btn flex items-center justify-center",
    (primary ? "btn-primary" : "") + " " + (danger ? "btn-danger" : "") + " " + (outline ? "btn-outline" : "") + " " + (size == "lg" ? "btn-lg" : "") + " " + (size == "sm" ? "btn-sm" : "") + " " + (disabled || loading ? "opacity-50" : "")
  ].join(" ").trim()}" ${disabled || loading ? "disabled" : ""}>${slots.default ? slots.default({}) : ``}</a>` : `<button class="${[
    "btn flex items-center justify-center",
    (primary ? "btn-primary" : "") + " " + (danger ? "btn-danger" : "") + " " + (outline ? "btn-outline" : "") + " " + (size == "lg" ? "btn-lg" : "") + " " + (size == "sm" ? "btn-sm" : "") + " " + (disabled || loading ? "opacity-50" : "")
  ].join(" ").trim()}" ${disabled || loading ? "disabled" : ""}>${loading ? `<svg class="${[
    "animate-spin mr-1 h-5 w-5",
    (primary ? "text-white" : "") + " " + (outline ? "text-black" : "") + " " + (!primary || !outline ? "text-gray-500" : "")
  ].join(" ").trim()}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}"><circle class="${"opacity-25"}" cx="${"12"}" cy="${"12"}" r="${"10"}" stroke="${"currentColor"}" stroke-width="${"4"}"></circle><path class="${"opacity-75"}" fill="${"currentColor"}" d="${"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}"></path></svg>` : ``}
    ${slots.default ? slots.default({}) : ``}</button>`}`;
});
