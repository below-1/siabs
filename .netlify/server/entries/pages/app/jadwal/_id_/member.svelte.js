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
  default: () => Member
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../../../chunks/index-f33ac00f.js");
var import_fbutton_9cb001c6 = require("../../../../../chunks/fbutton-9cb001c6.js");
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
function status(s) {
  switch (s) {
    case "WorkFromHome":
      return "WFH";
    case "WorkFromOffice":
      return "WFO";
    case "DinasLuar":
      return "Dinas Luar";
    default:
      return "";
  }
}
const Member = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let formatted;
  const jadwal = (0, import_index_f33ac00f.g)("jadwal");
  let { members } = $$props;
  let keyword = "";
  async function loadMembers(keyword2) {
    {
      return;
    }
  }
  if ($$props.members === void 0 && $$bindings.members && members !== void 0)
    $$bindings.members(members);
  formatted = members.map((it) => __spreadProps(__spreadValues({}, it), {
    display: { workStatus: status(it.workStatus) }
  }));
  {
    loadMembers();
  }
  return `<div class="${"container px-4 flex flex-col py-6"}"><div class="${"w-full"}"><div class="${"flex flex-col md:flex-row justify-center md:items-center mb-6 gap-x-2 gap-y-2"}"><h1 class="${"flex-grow text-xl font-bold text-gray-600"}">Daftar Pegawai</h1>
      <input class="${"rounded px-2 py-1 font-semibold text-gray-700 border-2 disabled:bg-gray-100 disabled:opacity-75"}" placeholder="${"keyword.."}"${(0, import_index_f33ac00f.d)("value", keyword, 0)}>
      ${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, {
    path: `/app/absen/create?jadwal=${jadwal.id}`,
    primary: true
  }, {}, {
    default: () => {
      return `Tambah Pegawai
      `;
    }
  })}</div>

    <ul>${(0, import_index_f33ac00f.b)(formatted, (member) => {
    return `<a class="${"flex items-center gap-x-3 border-b py-4"}"${(0, import_index_f33ac00f.d)("href", `/app/absen/${member.id}/overview`, 0)}><img${(0, import_index_f33ac00f.d)("src", `https://i.pravatar.cc/150?img=${member.pegawai.id}`, 0)} class="${"rounded border w-12 h-12"}">
          <div class="${"flex-grow"}"><div class="${"md:flex md:gap-x-3"}"><div class="${"font-bold"}">${(0, import_index_f33ac00f.e)(member.pegawai.nama)}</div>
              <div class="${"hidden md:block font-bold"}">${(0, import_index_f33ac00f.e)(member.pegawai.nip)}</div></div>
            <div class="${"text-xs uppercase"}">Status: ${(0, import_index_f33ac00f.e)(member.display.workStatus)}</div></div>
          <div class="${"flex items-center gap-x-2"}">${!member.waktu ? `<div class="${"rounded-full h-4 w-4 bg-yellow-500"}"></div>
              <div class="${"hidden md:block italic text-xs"}">Menunggu Login</div>` : `<div class="${"rounded-full h-4 w-4 bg-green-500"}"></div>
              <div class="${"hidden md:block italic text-xs"}">Telah Absen</div>`}</div>
        </a>`;
  })}</ul></div></div>`;
});
