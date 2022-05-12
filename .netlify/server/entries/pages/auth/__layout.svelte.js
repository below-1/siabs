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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../chunks/index-f33ac00f.js");
const _layout = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  const menus = [
    { label: "login", path: "/auth/signin" },
    { label: "tentang kami", path: "/about" }
  ];
  return `<div class="${"h-screen w-screen bg-gray-50 flex flex-col"}"><nav class="${"border-b border-gray-200"}"><div class="${"h-12 container flex items-center gap-x-2"}"><div class="${"h-6 w-6 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500"}"></div>
      <p style="${"font-family: 'Bungee';"}" class="${"font-black text-gray-700 text-lg"}">SIABS</p>
      <div class="${"grow"}"></div>
      <div class="${"self-stretch flex"}">${(0, import_index_f33ac00f.b)(menus, (menu) => {
    return `<a class="${"text-sm flex items-center px-4 hover:bg-gray-100 font-semibold text-gray-500"}"${(0, import_index_f33ac00f.d)("href", menu.path, 0)}>${(0, import_index_f33ac00f.e)(menu.label)}</a>`;
  })}</div></div></nav>

  <div class="${"container self-stretch grid grid-cols-1"}"><div class="${"self-center justify-self-center"}">${slots.default ? slots.default({}) : ``}</div></div>

  <footer class="${"border-t"}"><div class="${"h-12 container flex items-center gap-x-2"}"><p class="${"flex-grow text-sm text-center font-bold text-gray-400"}">proudly presented by jordan meta</p></div></footer></div>`;
});
