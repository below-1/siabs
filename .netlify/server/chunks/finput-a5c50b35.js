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
  F: () => Finput
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("./index-f33ac00f.js");
const Finput = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let { name = "" } = $$props;
  let { error = null } = $$props;
  let { placeholder = "" } = $$props;
  let { readonly = false } = $$props;
  let { disabled = false } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  return `<input class="${[
    "w-full rounded px-2 py-1 font-semibold text-gray-700 border disabled:bg-gray-100 disabled:opacity-75",
    (error ? "border-red-600" : "") + " " + (error ? "border-2" : "")
  ].join(" ").trim()}"${(0, import_index_f33ac00f.d)("name", name, 0)} ${readonly ? "readonly" : ""} ${disabled ? "disabled" : ""}${(0, import_index_f33ac00f.d)("placeholder", placeholder, 0)}${(0, import_index_f33ac00f.d)("value", value, 0)}>
${error ? `<div class="${"text-xs text-red-500 font-semibold"}">${(0, import_index_f33ac00f.e)(error)}</div>` : ``}`;
});
