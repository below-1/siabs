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
  default: () => Create_jadwal
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../../../chunks/index-f33ac00f.js");
var import_fbutton_9cb001c6 = require("../../../../../chunks/fbutton-9cb001c6.js");
var import_field_58046bd3 = require("../../../../../chunks/field-58046bd3.js");
var import_finput_a5c50b35 = require("../../../../../chunks/finput-a5c50b35.js");
var import_ftime_5a7b8497 = require("../../../../../chunks/ftime-5a7b8497.js");
var import_fselect_85c56a8b = require("../../../../../chunks/fselect-85c56a8b.js");
const Create_jadwal = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let status_dinas_luar;
  let { unitKerjaOptions = [] } = $$props;
  const pegawai = (0, import_index_f33ac00f.g)("pegawai");
  let status = "WFO";
  if ($$props.unitKerjaOptions === void 0 && $$bindings.unitKerjaOptions && unitKerjaOptions !== void 0)
    $$bindings.unitKerjaOptions(unitKerjaOptions);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    status_dinas_luar = status == "DINAS_LUAR";
    {
      {
        console.log(status);
      }
    }
    $$rendered = `<section class="${"section"}"><div class="${"container grid grid-cols-12 gap-y-4 px-4 py-6 md:px-none md:gap-x-8"}"><div class="${"col-span-12 md:col-span-5 flex flex-col"}"><h1 class="${"text-2xl font-bold text-gray-500 mb-8"}">Tambah Jadwal ${(0, import_index_f33ac00f.e)(pegawai.nama)}</h1>
      <form method="${"post"}" enctype="${"multipart/form-data"}" class="${"flex flex-col gap-y-4"}">${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Hari" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_ftime_5a7b8497.F, "FDate").$$render($$result, { name: "hari" }, {}, {})}`;
      }
    })}
        ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Waktu" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_ftime_5a7b8497.a, "FTime").$$render($$result, { name: "waktu" }, {}, {})}`;
      }
    })}
        ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Status Kerja" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_fselect_85c56a8b.F, "FSelect").$$render($$result, {
          name: "status",
          options: [
            {
              text: "Work From Office",
              value: "WorkFromHome"
            },
            {
              text: "Work From Home",
              value: "WorkFromOffice"
            },
            { text: "Dinas Luar", value: "DinasLuar" }
          ],
          selected: status
        }, {
          selected: ($$value) => {
            status = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}

        ${status_dinas_luar ? `${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Nama Lokasi Dinas Luar" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_finput_a5c50b35.F, "FInput").$$render($$result, { name: "dl_nama" }, {}, {})}`;
      }
    })}
          ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Latitude Lokasi" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_finput_a5c50b35.F, "FInput").$$render($$result, { name: "latitude" }, {}, {})}`;
      }
    })}
          ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Longitude Lokasi" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_finput_a5c50b35.F, "FInput").$$render($$result, { name: "longitude" }, {}, {})}`;
      }
    })}` : `${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Unit Kerja" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_fselect_85c56a8b.F, "FSelect").$$render($$result, {
          name: "unitKerjaId",
          options: unitKerjaOptions
        }, {}, {})}`;
      }
    })}`}

        ${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, { primary: true }, {}, {
      default: () => {
        return `simpan data`;
      }
    })}</form></div></div></section>`;
  } while (!$$settled);
  return $$rendered;
});
