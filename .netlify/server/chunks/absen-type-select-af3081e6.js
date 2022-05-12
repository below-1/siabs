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
  A: () => Absen_type_select
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("./index-f33ac00f.js");
var import_fselect_85c56a8b = require("./fselect-85c56a8b.js");
var import_options_66a90b28 = require("./options-66a90b28.js");
const Absen_type_select = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { selected = null } = $$props;
  let { error = null } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_f33ac00f.v)(import_fselect_85c56a8b.F, "FSelect").$$render($$result, {
      options: import_options_66a90b28.a,
      error,
      name,
      selected
    }, {
      selected: ($$value) => {
        selected = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  return $$rendered;
});
