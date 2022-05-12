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
  default: () => Pegawai
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../../chunks/index-f33ac00f.js");
var import_page_header_33a94fef = require("../../../../chunks/page-header-33a94fef.js");
var import_fbutton_9cb001c6 = require("../../../../chunks/fbutton-9cb001c6.js");
var import_finput_a5c50b35 = require("../../../../chunks/finput-a5c50b35.js");
const Pegawai = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  const cu = (0, import_index_f33ac00f.g)("currentUser");
  const user = cu.getUser();
  let keyword = "";
  let { items = [] } = $$props;
  async function searcItems(keyword2) {
    {
      return;
    }
  }
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      searcItems();
    }
    $$rendered = `${(0, import_index_f33ac00f.v)(import_page_header_33a94fef.P, "PageHeader").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="${"flex flex-col md:flex-row justify-between items-center gap-y-2"}"><h1 class="${"font-black text-3xl"}">Daftar Pegawai</h1>
    ${user.superUser ? `${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, {
          size: "lg",
          path: "/app/pegawai/create",
          primary: true
        }, {}, {
          default: () => {
            return `tambah pegawai
    `;
          }
        })}` : ``}</div>`;
      }
    })}

<section class="${"container"}"><div class="${"w-full py-6 flex flex-col gap-y-4"}"><div class="${"px-4 w-full md:w-1/3"}">${(0, import_index_f33ac00f.v)(import_finput_a5c50b35.F, "FInput").$$render($$result, {
      name: "keyword",
      placeholder: "Keyword...",
      value: keyword
    }, {
      value: ($$value) => {
        keyword = $$value;
        $$settled = false;
      }
    }, {})}</div>
    ${(0, import_index_f33ac00f.b)(items, (item) => {
      return `<a${(0, import_index_f33ac00f.d)("href", `/app/pegawai/${item.id}/overview`, 0)} class="${"px-4 border-b border-gray-200 py-4 flex items-center gap-x-4"}"><img class="${"w-12 h-12 rounded"}"${(0, import_index_f33ac00f.d)("src", `https://i.pravatar.cc/150?img=${item.id}`, 0)}>
        <div><div class="${"text-lg font-bold"}">${(0, import_index_f33ac00f.e)(item.nama)}</div>
          <div class="${"text-sm"}">${(0, import_index_f33ac00f.e)(item.nip)}, ${(0, import_index_f33ac00f.e)(item.nik)}</div></div>
        <div class="${"flex-grow"}"></div>
      </a>`;
    })}</div></section>`;
  } while (!$$settled);
  return $$rendered;
});
