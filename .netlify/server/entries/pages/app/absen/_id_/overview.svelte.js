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
  const absen = (0, import_index_f33ac00f.g)("absen");
  return `<div class="${"flex flex-col gap-y-4"}"><div class="${"hidden md:flex border-b-2 py-4 items-center"}"><div class="${"w-1/3 font-bold text-2xl"}">Pegawai</div>
    <div class="${"w-1/3 font-bold text-2xl"}">Jadwal</div>
    <div class="${"w-1/3 font-bold text-2xl"}">Absen</div></div>

  <div class="${"flex flex-wrap gap-y-8 py-4"}"><div class="${"w-full md:w-1/3 flex flex-col gap-y-4"}"><div class="${"flex items-center gap-x-4"}"><img${(0, import_index_f33ac00f.d)("src", `https://i.pravatar.cc/150?img=${absen.pegawai.id}`, 0)} class="${"rounded border w-12 h-12"}" alt="${"gambar"}">
        <div><a${(0, import_index_f33ac00f.d)("href", `/app/pegawai/${absen.jadwal.unitKerja.id}/overview`, 0)} class="${"text-xl font-bold link"}">${(0, import_index_f33ac00f.e)(absen.pegawai.nama)}</a>
          <div class="${"font-bold text-gray-600"}">${(0, import_index_f33ac00f.e)(absen.pegawai.nip)}</div></div></div>
      <div class="${"flex items-center gap-x-4"}"><img${(0, import_index_f33ac00f.d)("src", `https://i.pravatar.cc/150?img=${absen.jadwal.unitKerja.id + 10}`, 0)} class="${"rounded border w-12 h-12"}" alt="${"gambar"}">
        <div><a${(0, import_index_f33ac00f.d)("href", `/app/unit-kerja/${absen.jadwal.unitKerja.id}/detail`, 0)} class="${"text-xl font-bold link"}">${(0, import_index_f33ac00f.e)(absen.jadwal.unitKerja.nama)}</a>
          <div class="${"font-bold text-gray-600"}">${(0, import_index_f33ac00f.e)(absen.jadwal.unitKerja.alamat)}</div></div></div></div>

    <div class="${"w-full md:w-1/3 flex flex-col gap-y-4"}"><div><div class="${"text-sm"}">Hari Tanggal</div>
        <div class="${"font-bold text-xl"}">23 Maret 2022</div></div>

      <div><div class="${"text-sm"}">Waktu</div>
        <div class="${"font-bold text-xl"}">Pukul 22:00 WIB</div></div>

      <div><div class="${"text-sm"}">Tipe Jadwal</div>
        <div class="${"font-bold text-xl"}">Jadwal ${(0, import_index_f33ac00f.e)(absen.jadwal.type)}</div></div>

      <div><div class="${"text-sm"}">ID Jadwal</div>
        <a${(0, import_index_f33ac00f.d)("href", `/app/jadwal/${absen.jadwal.id}/overview`, 0)} class="${"font-bold text-xl link"}">#${(0, import_index_f33ac00f.e)(absen.jadwal.id)}</a></div></div>
    <div class="${"w-full md:w-1/3"}">${`<div class="${"flex flex-col gap-y-4"}"><div><div class="${"text-sm"}">Waktu Login</div>
            <div class="${"font-bold text-xl"}">Pukul 22:00 WIB</div></div>
          <div><div class="${"text-sm"}">Latitude</div>
            <div class="${"font-bold text-xl"}">2.039923029302</div></div>
          <div><div class="${"text-sm"}">Longitude</div>
            <div class="${"font-bold text-xl"}">2.039923029302</div></div>

          <div><div class="${"text-sm"}">Status</div>
            <div class="${"font-bold text-xl"}">${(0, import_index_f33ac00f.e)(absen.workStatus)}</div></div></div>`}</div></div></div>`;
});
