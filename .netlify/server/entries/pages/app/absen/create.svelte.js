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
  default: () => Create
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../../chunks/index-f33ac00f.js");
var import_page_header_33a94fef = require("../../../../chunks/page-header-33a94fef.js");
var import_field_58046bd3 = require("../../../../chunks/field-58046bd3.js");
var import_finput_a5c50b35 = require("../../../../chunks/finput-a5c50b35.js");
var import_fbutton_9cb001c6 = require("../../../../chunks/fbutton-9cb001c6.js");
var import_fselect_85c56a8b = require("../../../../chunks/fselect-85c56a8b.js");
var import_options_66a90b28 = require("../../../../chunks/options-66a90b28.js");
var import_jadwal_452924c8 = require("../../../../chunks/jadwal-452924c8.js");
var import_validation_1a23c6af = require("../../../../chunks/validation-1a23c6af.js");
var import_day_10db2cf8 = require("../../../../chunks/day-10db2cf8.js");
var import_dayjs = require("dayjs");
var import_id = require("dayjs/locale/id");
var import_util_293fe1ef = require("../../../../chunks/util-293fe1ef.js");
var import_crypto = require("crypto");
const Work_status_select = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { selected = null } = $$props;
  let { error = null } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_f33ac00f.v)(import_fselect_85c56a8b.F, "FSelect").$$render($$result, {
      options: import_options_66a90b28.w,
      error,
      name,
      selected
    }, {
      selected: ($$value) => {
        selected = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  return $$rendered;
});
let type = null;
const Create = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let payload;
  let verr;
  let formatted;
  let ftstamp;
  let { jadwal } = $$props;
  let workStatus = null;
  async function searchPegawai(keyword) {
    {
      return;
    }
  }
  if ($$props.jadwal === void 0 && $$bindings.jadwal && jadwal !== void 0)
    $$bindings.jadwal(jadwal);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    payload = {
      pegawaiId: null,
      jadwalId: jadwal.id,
      type,
      workStatus
    };
    verr = (0, import_validation_1a23c6af.u)({
      pegawaiId: [(0, import_validation_1a23c6af.r)("pegawai harus diisi")],
      workStatus: [(0, import_validation_1a23c6af.r)("Status Kerja harus diisi")]
    }, payload);
    formatted = (0, import_jadwal_452924c8.d)(jadwal).display;
    ftstamp = `${formatted.hari} ${formatted.waktu}`;
    {
      searchPegawai();
    }
    $$rendered = `${(0, import_index_f33ac00f.v)(import_page_header_33a94fef.P, "PageHeader").$$render($$result, {}, {}, {
      default: () => {
        return `<h1 class="${"font-black text-3xl"}">Input Data Absen</h1>`;
      }
    })}

<div class="${"container px-4 py-6"}"><div class="${"w-full md:w-1/2"}"><form class="${"flex flex-col gap-y-4"}">${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "FField").$$render($$result, { label: "Jadwal" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_finput_a5c50b35.F, "FInput").$$render($$result, { disabled: true, value: ftstamp }, {}, {})}`;
      }
    })}

      ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "FField").$$render($$result, { label: "Unit Kerja" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_finput_a5c50b35.F, "FInput").$$render($$result, {
          disabled: true,
          value: jadwal.unitKerja.nama
        }, {}, {})}`;
      }
    })}

      ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "FField").$$render($$result, { label: "Pegawai" }, {}, {
      default: () => {
        return `${!payload.pegawaiId ? `<div class="${"text-red-500 text-sm"}">${(0, import_index_f33ac00f.e)(verr.fields.pegawaiId)}</div>` : ``}
        ${`<div class="${"flex border p-2 gap-x-4 rounded"}">${`<span class="${"flex-grow px-4 py-1 bg-gray-100 text-gray-600 font-bold"}">Belum ada pegawai
              </span>`}
            ${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, { outline: true }, {}, {
          default: () => {
            return `Ganti Pegawai
            `;
          }
        })}</div>`}`;
      }
    })}

      ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "FField").$$render($$result, { label: "Status" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(Work_status_select, "WorkStatusSelect").$$render($$result, {
          name: "workStatus",
          error: verr.fields.workStatus,
          selected: workStatus
        }, {
          selected: ($$value) => {
            workStatus = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
      ${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, { disabled: !verr.valid, primary: true }, {}, {
      default: () => {
        return `Simpan`;
      }
    })}</form></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
