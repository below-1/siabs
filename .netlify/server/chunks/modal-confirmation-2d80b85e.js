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
  M: () => Modal_confirmation
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("./index-f33ac00f.js");
var import_fbutton_9cb001c6 = require("./fbutton-9cb001c6.js");
var modalConfirmation_svelte_svelte_type_style_lang = "";
const css = {
  code: ".backdrop.svelte-dduyuq{position:fixed;background:rgba(250, 250, 250, 0.6);top:0;bottom:0;left:0;right:0;padding:12px}",
  map: null
};
const Modal_confirmation = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  let { title = "" } = $$props;
  let { message = "" } = $$props;
  let { onYes = null } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.onYes === void 0 && $$bindings.onYes && onYes !== void 0)
    $$bindings.onYes(onYes);
  $$result.css.add(css);
  return `${show ? `<div class="${"backdrop flex items-center justify-center svelte-dduyuq"}"><div class="${"rounded bg-white border-2 border-red-600 shadow-xl flex flex-col"}"><div class="${"border-b py-4 px-4"}"><h1 class="${"font-bold text-xl text-gray-700"}">${(0, import_index_f33ac00f.e)(title)}</h1></div>
    <div class="${"p-4 border-b"}"><h2 class="${"font-bold text-lg"}">${(0, import_index_f33ac00f.e)(message)}</h2></div>
    <div class="${"p-4 flex items-center gap-x-4"}">${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, { outline: true }, {}, {
    default: () => {
      return `Batal`;
    }
  })}
      ${onYes ? `${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, { danger: true }, {}, {
    default: () => {
      return `Lanjutkan
        `;
    }
  })}` : ``}</div></div></div>` : ``}`;
});
