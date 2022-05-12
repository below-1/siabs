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
var import_index_f33ac00f = require("../../../../../chunks/index-f33ac00f.js");
var import_fbutton_9cb001c6 = require("../../../../../chunks/fbutton-9cb001c6.js");
var import_jadwal_452924c8 = require("../../../../../chunks/jadwal-452924c8.js");
var import_day_10db2cf8 = require("../../../../../chunks/day-10db2cf8.js");
var import_dayjs = require("dayjs");
var import_id = require("dayjs/locale/id");
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const Jadwal = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let formatted;
  const pegawai = (0, import_index_f33ac00f.g)("pegawai");
  let { items = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  formatted = items.map((it) => {
    return __spreadProps(__spreadValues({}, it), {
      jadwal: (0, import_jadwal_452924c8.d)(it.jadwal)
    });
  });
  return `<section class="${"section"}"><div class="${"container grid grid-cols-12 gap-y-4 px-4 py-6 md:px-none md:gap-x-8"}"><div class="${"col-span-12"}"><div class="${"flex flex-col md:flex-row justify-between mb-4 gap-y-2"}"><h1 class="${"text-xl font-bold text-gray-500 text-center md:text-left "}">Jadwal Pegawai ${(0, import_index_f33ac00f.e)(pegawai.nama)}</h1>
        ${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, {
    primary: true,
    path: `/app/pegawai/${pegawai.id}/create-jadwal`
  }, {}, {
    default: () => {
      return `Tambah Jadwal
        `;
    }
  })}</div>

      ${items.length == 0 ? `<div>Data Jadwal Masih Kosong
        </div>` : `<div>${(0, import_index_f33ac00f.b)(formatted, (item) => {
    return `<a${(0, import_index_f33ac00f.d)("href", `/app/absen/${item.id}/overview`, 0)} class="${"flex items-center gap-x-4 border-b py-2"}">${item.jadwal.status == "Draft" ? `<div class="${"rounded-full h-4 w-4 bg-yellow-400"}"></div>` : `${item.jadwal.status == "Published" ? `<div class="${"rounded-full h-4 w-4 bg-green-400"}"></div>` : ``}`}
              <div class="${"flex-grow"}"><div class="${"font-bold text-lg"}">${(0, import_index_f33ac00f.e)(item.jadwal.display.hari)}, ${(0, import_index_f33ac00f.e)(item.jadwal.display.waktu)}</div>
                <div class="${"flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold whitespace-nowrap text-gray-700"}"><span class="${"bg-gray-100 p-0.5 rounded"}">${(0, import_index_f33ac00f.e)(item.jadwal.unitKerja.nama)}</span>
                  <span class="${"bg-gray-100 p-0.5 rounded"}">Jadwal ${(0, import_index_f33ac00f.e)(item.jadwal.type)}</span>
                  <span class="${"bg-gray-100 p-0.5 rounded"}">Status: ${(0, import_index_f33ac00f.e)(item.workStatus)}</span>
                </div></div>
            </a>`;
  })}</div>`}</div></div></section>`;
});
