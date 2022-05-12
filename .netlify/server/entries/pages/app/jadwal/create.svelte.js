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
var import_fbutton_9cb001c6 = require("../../../../chunks/fbutton-9cb001c6.js");
var import_field_58046bd3 = require("../../../../chunks/field-58046bd3.js");
var import_ftime_5a7b8497 = require("../../../../chunks/ftime-5a7b8497.js");
var import_fselect_85c56a8b = require("../../../../chunks/fselect-85c56a8b.js");
var import_absen_type_select_af3081e6 = require("../../../../chunks/absen-type-select-af3081e6.js");
var import_options_66a90b28 = require("../../../../chunks/options-66a90b28.js");
const Create = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let unitKerjaOptions;
  const cu = (0, import_index_f33ac00f.g)("currentUser");
  cu.getUser();
  let { unitKerjaList = [] } = $$props;
  let hari = "";
  let waktu = "";
  if ($$props.unitKerjaList === void 0 && $$bindings.unitKerjaList && unitKerjaList !== void 0)
    $$bindings.unitKerjaList(unitKerjaList);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    unitKerjaOptions = unitKerjaList.map((uk) => ({ text: uk.nama, value: uk.id }));
    $$rendered = `<section class="${"section border-b border-gray-200"}"><div class="${"container py-12 flex flex-col gap-y-4 px-4"}"><h1 class="${"font-black text-3xl"}">Tambah Jadwal</h1></div></section>

<section><div class="${"container px-4 py-12"}"><div class="${"w-full md:w-1/2"}"><form class="${"flex flex-col gap-y-4"}" method="${"post"}" enctype="${"multipart/form-data"}">${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Tanggal" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_ftime_5a7b8497.F, "FDate").$$render($$result, { name: "hari", value: hari }, {
          value: ($$value) => {
            hari = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
        ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Waktu" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_ftime_5a7b8497.a, "FTime").$$render($$result, { name: "waktu", value: waktu }, {
          value: ($$value) => {
            waktu = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
        ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Pilih Unit Kerja" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_fselect_85c56a8b.F, "FSelect").$$render($$result, {
          name: "unitKerja",
          options: unitKerjaOptions
        }, {}, {})}`;
      }
    })}
        ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Pilih Tipe Absen" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_absen_type_select_af3081e6.A, "AbsenTypeSelect").$$render($$result, { name: "type" }, {}, {})}`;
      }
    })}
        ${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, { primary: true, size: "lg" }, {}, {
      default: () => {
        return `simpan data
        `;
      }
    })}</form></div></div></section>`;
  } while (!$$settled);
  return $$rendered;
});
