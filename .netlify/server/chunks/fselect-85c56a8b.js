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
  F: () => Fselect
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("./index-f33ac00f.js");
const Fselect = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { selected = null } = $$props;
  let { options = [] } = $$props;
  let { error = null } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  return `<select class="${[
    "rounded px-2 py-1 font-semibold text-gray-700 border",
    (error ? "border-red-600" : "") + " " + (error ? "border-2" : "")
  ].join(" ").trim()}"${(0, import_index_f33ac00f.d)("name", name, 0)}>${(0, import_index_f33ac00f.b)(options, (option) => {
    return `<option${(0, import_index_f33ac00f.d)("value", option.value, 0)}>${(0, import_index_f33ac00f.e)(option.text)}</option>`;
  })}</select>
${error ? `<div class="${"text-xs text-red-500 font-semibold"}">${(0, import_index_f33ac00f.e)(error)}</div>` : ``}`;
});
