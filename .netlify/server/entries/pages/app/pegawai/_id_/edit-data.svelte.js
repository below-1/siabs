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
  default: () => Edit_data
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../../../chunks/index-f33ac00f.js");
var import_field_58046bd3 = require("../../../../../chunks/field-58046bd3.js");
var import_finput_a5c50b35 = require("../../../../../chunks/finput-a5c50b35.js");
var import_ffile_255892b2 = require("../../../../../chunks/ffile-255892b2.js");
var import_fbutton_9cb001c6 = require("../../../../../chunks/fbutton-9cb001c6.js");
const Edit_data = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  const pegawai = (0, import_index_f33ac00f.g)("pegawai");
  let payload = {
    nama: pegawai.nama,
    nip: pegawai.nip,
    nik: pegawai.nik
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"border-b py-12"}"><div class="${"container px-4"}"><h1 class="${"text-2xl font-bold"}">Edit Data ${(0, import_index_f33ac00f.e)(pegawai.nama)}</h1></div></div>

<div class="${"container px-4 py-4"}"><form method="${"POST"}" enctype="${"multipart/form-data"}" class="${"w-full md:w-1/2 flex flex-col gap-y-3"}">${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Nama" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_finput_a5c50b35.F, "Finput").$$render($$result, { name: "nama", value: payload.nama }, {
          value: ($$value) => {
            payload.nama = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
    ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "NIP" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_finput_a5c50b35.F, "Finput").$$render($$result, { name: "nip", value: payload.nip }, {
          value: ($$value) => {
            payload.nip = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
    ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "NIK" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_finput_a5c50b35.F, "Finput").$$render($$result, { name: "nik", value: payload.nik }, {
          value: ($$value) => {
            payload.nik = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
    ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Avatar" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_ffile_255892b2.F, "Ffile").$$render($$result, { name: "avatar" }, {}, {})}`;
      }
    })}
    ${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, { primary: true }, {}, {
      default: () => {
        return `Simpan`;
      }
    })}</form></div>`;
  } while (!$$settled);
  return $$rendered;
});
