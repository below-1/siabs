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
  default: () => _layout,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../../../chunks/index-f33ac00f.js");
var import_page_header_33a94fef = require("../../../../../chunks/page-header-33a94fef.js");
var import_fbutton_9cb001c6 = require("../../../../../chunks/fbutton-9cb001c6.js");
const Submenus = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let { menus = [] } = $$props;
  if ($$props.menus === void 0 && $$bindings.menus && menus !== void 0)
    $$bindings.menus(menus);
  return `<div class="${"bg-gray-50 border-b"}"><div class="${"container flex items-center justify-start md:gap-x-4 whitespace-nowrap"}">${(0, import_index_f33ac00f.b)(menus, (menu) => {
    return `<a${(0, import_index_f33ac00f.d)("href", menu.path, 0)} class="${"text-gray-600 px-4 py-2 hover:bg-gray-50 hover:bg-gray-200 rounded flex-grow md:flex-grow-0"}">${(0, import_index_f33ac00f.e)(menu.label)}
      </a>`;
  })}</div></div>`;
});
async function load({ params, session, fetch }) {
  const response = await fetch(`/app/unit-kerja/${params.id}/layout-data`, {
    headers: {
      accept: "application/json",
      "content-type": "application/json"
    }
  });
  const data = await response.json();
  return { status: 200, props: data };
}
const _layout = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let { unitKerja = {} } = $$props;
  (0, import_index_f33ac00f.s)("unitKerja", unitKerja);
  const submenus = [
    {
      label: "overview",
      path: `/app/unit-kerja/${unitKerja.id}/overview`
    },
    {
      label: "jadwal",
      path: `/app/unit-kerja/${unitKerja.id}/jadwal`
    }
  ];
  if ($$props.unitKerja === void 0 && $$bindings.unitKerja && unitKerja !== void 0)
    $$bindings.unitKerja(unitKerja);
  return `${(0, import_index_f33ac00f.v)(import_page_header_33a94fef.P, "PageHeader").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"flex flex-col md:flex-row items-center gap-y-2 gap-x-4"}"><img class="${"hidden md:block h-20 rounded"}"${(0, import_index_f33ac00f.d)("src", unitKerja.avatar, 0)}>
    <div class="${"flex-grow"}"><h1 class="${"font-black text-3xl"}">${(0, import_index_f33ac00f.e)(unitKerja.nama)}</h1>
      <h2 class="${"text-sm"}">${(0, import_index_f33ac00f.e)(unitKerja.alamat)}</h2></div>
    ${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, { path: "/app/unit-kerja/", danger: true }, {}, {
        default: () => {
          return `Hapus Data
    `;
        }
      })}</div>`;
    }
  })}

${(0, import_index_f33ac00f.v)(Submenus, "Submenus").$$render($$result, { menus: submenus }, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
