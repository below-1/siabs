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
  default: () => Me
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../chunks/index-f33ac00f.js");
var import_page_header_33a94fef = require("../../../chunks/page-header-33a94fef.js");
const Me = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  const cu = (0, import_index_f33ac00f.g)("currentUser");
  cu.getUser();
  return `${(0, import_index_f33ac00f.v)(import_page_header_33a94fef.P, "PageHeader").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="${"text-2xl font-bold"}">${`Checking Absensi...`}</h1>`;
    }
  })}

<section class="${"container"}"><div class="${"w-full py-6 flex flex-col justify-center items-center gap-y-4"}">${`<div class="${"h-32 w-32 bg-purple-500 rounded-full animate-pulse"}"></div>`}</div></section>`;
});
