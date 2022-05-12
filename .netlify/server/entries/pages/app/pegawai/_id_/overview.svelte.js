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
  default: () => Overview
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../../../chunks/index-f33ac00f.js");
const Kehadiran_chart = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  return `<div id="${"kehadiran-chart"}" style="${"width:100%; height:150px;"}"></div>`;
});
const Ketepatan_waktu_chart = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  return `<div id="${"ketepatan-waktu-chart"}" style="${"width:100%; height:200px;"}"></div>`;
});
const Overview = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  const pegawaiInfos = [
    {
      label: "Jadwal Terkini",
      value: "6 jam lagi",
      path: `/app/absen/${13}`
    },
    { label: "Total Absen", value: 15 },
    { label: "Hadir", value: 15 },
    { label: "Tidak Hadir", value: 15 },
    { label: "Tepat Waktu", value: 15 },
    { label: "Terlambat", value: 15 },
    { label: "Sangat Terlambat", value: 15 }
  ];
  return `<div class="${"container grid grid-cols-12 py-6 md:px-4 md:gap-x-8 gap-y-8"}"><div class="${"md:col-span-4 col-span-12 flex flex-col gap-y-4"}"><div class="${"text-xl font-black text-left px-4"}">Jadwal Terkini</div>
    <ul>${(0, import_index_f33ac00f.b)(pegawaiInfos, (pi) => {
    return `<li class="${"border-b border-gray-200 px-4 md:px-2 py-3 flex items-center justify-between text-sm font-bold text-gray-600 hover:bg-gray-100"}"><div>${(0, import_index_f33ac00f.e)(pi.label)}</div>
          <div>${(0, import_index_f33ac00f.e)(pi.value)}</div>
        </li>`;
  })}</ul></div>

  <div class="${"md:col-span-8 col-span-12 flex flex-col gap-y-2"}"><div class="${"text-xl font-black text-center"}">Presentasi Kehadiran</div>
    ${(0, import_index_f33ac00f.v)(Kehadiran_chart, "KehadiranChart").$$render($$result, {}, {}, {})}
    <div class="${"text-xl font-black text-center"}">Ketepatan Waktu</div>
    ${(0, import_index_f33ac00f.v)(Ketepatan_waktu_chart, "KetepatanWaktuChart").$$render($$result, {}, {}, {})}</div></div>`;
});
