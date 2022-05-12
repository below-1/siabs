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
var import_day_10db2cf8 = require("../../../../../chunks/day-10db2cf8.js");
var import_page_header_33a94fef = require("../../../../../chunks/page-header-33a94fef.js");
var import_fbutton_9cb001c6 = require("../../../../../chunks/fbutton-9cb001c6.js");
var import_jadwal_452924c8 = require("../../../../../chunks/jadwal-452924c8.js");
var import_dayjs = require("dayjs");
var import_id = require("dayjs/locale/id");
async function load({ params, session, fetch }) {
  const response = await fetch(`/app/jadwal/${params.id}/layout-data`, {
    headers: {
      accept: "application/json",
      "content-type": "application/json"
    }
  });
  const data = await response.json();
  return { status: 200, props: data };
}
const _layout = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let jadwal_infos;
  let { jadwal } = $$props;
  const formatted_jadwal = (0, import_jadwal_452924c8.d)(jadwal);
  (0, import_index_f33ac00f.s)("jadwal", formatted_jadwal);
  const menus = [
    {
      label: "overview",
      path: `/app/jadwal/${jadwal.id}/overview`
    },
    {
      label: "edit",
      path: `/app/jadwal/${jadwal.id}/edit`
    },
    {
      label: "member",
      path: `/app/jadwal/${jadwal.id}/member`
    },
    {
      label: "hapus",
      path: `/app/jadwal/${jadwal.id}/hapus`
    }
  ];
  if ($$props.jadwal === void 0 && $$bindings.jadwal && jadwal !== void 0)
    $$bindings.jadwal(jadwal);
  jadwal_infos = [
    {
      label: "Status Jadwal",
      value: jadwal.status
    },
    { label: "Total Pegawai", value: 13 },
    {
      label: "Unit Kerja",
      value: jadwal.unitKerja.nama
    }
  ];
  return `${(0, import_index_f33ac00f.v)(import_page_header_33a94fef.P, "PageHeader").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"md:flex md:items-center md:justify-between"}"><div class="${"mb-4 md:mb-0 md:flex md:items-center md:gap-x-4"}"><h1 class="${"text-2xl font-bold"}">${(0, import_index_f33ac00f.e)(formatted_jadwal.display.hari)}</h1>
      <h1 class="${"text-2xl font-bold"}">${(0, import_index_f33ac00f.e)(formatted_jadwal.display.waktu)}</h1></div>
    ${jadwal.status == "Draft" ? `${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, {
        path: `/app/jadwal/${jadwal.id}/publish`,
        primary: true
      }, {}, {
        default: () => {
          return `Publis Jadwal`;
        }
      })}` : `<div class="${"bg-green-500 text-white text-lg font-bold rounded px-8 py-1"}">Telah Dipublikasi</div>`}</div>

  <div class="${"flex flex-wrap gap-y-3 gap-x-1"}">${(0, import_index_f33ac00f.b)(jadwal_infos, (ji) => {
        return `<div class="${"whitespace-nowrap flex items-center bg-gray-100 text-gray-600 rounded text-sm"}"><span class="${"flex-grow px-2 py-1"}">${(0, import_index_f33ac00f.e)(ji.label)}:
        </span>
        <span class="${"px-2 font-bold"}">${(0, import_index_f33ac00f.e)(ji.value)}</span>
      </div>`;
      })}</div>`;
    }
  })}

<div class="${"bg-gray-50 border-b"}"><div class="${"container flex items-center justify-start md:gap-x-4 whitespace-nowrap"}">${(0, import_index_f33ac00f.b)(menus, (menu) => {
    return `<a${(0, import_index_f33ac00f.d)("href", menu.path, 0)} class="${"text-gray-600 px-4 py-2 hover:bg-gray-50 hover:bg-gray-200 rounded flex-grow md:flex-grow-0"}">${(0, import_index_f33ac00f.e)(menu.label)}
      </a>`;
  })}</div></div>

${slots.default ? slots.default({}) : ``}`;
});
