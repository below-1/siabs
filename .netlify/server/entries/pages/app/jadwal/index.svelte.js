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
  default: () => Jadwal
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../../chunks/index-f33ac00f.js");
var import_page_header_33a94fef = require("../../../../chunks/page-header-33a94fef.js");
var import_fbutton_9cb001c6 = require("../../../../chunks/fbutton-9cb001c6.js");
var import_jadwal_452924c8 = require("../../../../chunks/jadwal-452924c8.js");
var import_day_10db2cf8 = require("../../../../chunks/day-10db2cf8.js");
var import_dayjs = require("dayjs");
var import_id = require("dayjs/locale/id");
const Jadwal = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let formatted_items;
  const cu = (0, import_index_f33ac00f.g)("currentUser");
  const user = cu.getUser();
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  formatted_items = items.map(import_jadwal_452924c8.d);
  return `${$$result.head += `${$$result.title = `<title>Jadwal -- SIABS</title>`, ""}`, ""}


${(0, import_index_f33ac00f.v)(import_page_header_33a94fef.P, "PageHeader").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"flex flex-col md:flex-row justify-between items-center gap-y-2"}"><h1 class="${"font-black text-3xl"}">Daftar Jadwal</h1>
    <div class="${"flex flex-wrap gap-x-4"}">${user.superUser ? `${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, {
        size: "lg",
        path: "/app/jadwal/create",
        primary: true
      }, {}, {
        default: () => {
          return `tambah jadwal
      `;
        }
      })}` : ``}</div></div>`;
    }
  })}

<section class="${"section"}"><div class="${"container py-6 px-4"}"><ul class="${"flex flex-col"}">${(0, import_index_f33ac00f.b)(formatted_items, (item) => {
    return `<li><a${(0, import_index_f33ac00f.d)("href", `/app/jadwal/${item.id}/overview`, 0)} class="${"flex items-center border-b py-4 gap-x-4"}">${item.status == "Draft" ? `<div class="${"rounded-full h-4 w-4 bg-yellow-400"}"></div>` : `${item.status == "Published" ? `<div class="${"rounded-full h-4 w-4 bg-green-400"}"></div>` : ``}`}
            <div class="${"flex-grow text-sm"}"><div class="${"font-bold text-lg"}">${(0, import_index_f33ac00f.e)(item.display.hari)}, ${(0, import_index_f33ac00f.e)(item.display.waktu)}</div>
              <div class="${"flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold whitespace-nowrap text-gray-700"}"><span class="${"bg-gray-100 p-0.5 rounded"}">${(0, import_index_f33ac00f.e)(item.unitKerja.nama)}</span>
                <span class="${"bg-gray-100 p-0.5 rounded"}">Jadwal ${(0, import_index_f33ac00f.e)(item.type)}</span>
              </div></div>
            <div class="${"px-4 hidden md:block"}">${(0, import_index_f33ac00f.e)(item._count.absen)} pegawai
            </div></a>
        </li>`;
  })}</ul></div></section>`;
});
