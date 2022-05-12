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
const Overview = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  const jadwal = (0, import_index_f33ac00f.g)("jadwal");
  let { total_member = 0 } = $$props;
  if ($$props.total_member === void 0 && $$bindings.total_member && total_member !== void 0)
    $$bindings.total_member(total_member);
  return `<div class="${"container px-4 flex py-6"}"><div class="${"w-full md:w-1/3"}"><div class="${"flex flex-col border"}"><div class="${"text-base flex items-center justify-between p-3 border-b"}"><div>Hari Tanggal</div>
        <div>${(0, import_index_f33ac00f.e)(jadwal.display.hari)}</div></div>

      <div class="${"text-base flex items-center justify-between p-3 border-b"}"><div>Waktu</div>
        <div>${(0, import_index_f33ac00f.e)(jadwal.display.waktu)}</div></div>

      <div class="${"text-base flex items-center justify-between p-3 border-b"}"><div>Unit Kerja</div>
        <a${(0, import_index_f33ac00f.d)("href", `/app/unit-kerja/${jadwal.unitKerja.id}/detail`, 0)} class="${"link"}">${(0, import_index_f33ac00f.e)(jadwal.unitKerja.nama)}</a></div>

      <div class="${"text-base flex items-center justify-between p-3 border-b"}"><div>Status</div>
        <div>${(0, import_index_f33ac00f.e)(jadwal.status)}</div></div>

      <div class="${"text-base flex items-center justify-between p-3 border-b"}"><div>Tipe Jadwal</div>
        <div>Jadwal ${(0, import_index_f33ac00f.e)(jadwal.type)}</div></div>

      <div class="${"text-base flex items-center justify-between p-3 border-b"}"><div>Total Pegawai</div>
        <div>${(0, import_index_f33ac00f.e)(total_member)}</div></div></div></div></div>`;
});
