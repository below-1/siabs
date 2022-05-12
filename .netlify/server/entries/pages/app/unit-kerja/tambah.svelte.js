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
  default: () => Tambah
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../../chunks/index-f33ac00f.js");
var import_validation_1a23c6af = require("../../../../chunks/validation-1a23c6af.js");
var import_fbutton_9cb001c6 = require("../../../../chunks/fbutton-9cb001c6.js");
var import_field_58046bd3 = require("../../../../chunks/field-58046bd3.js");
var import_finput_a5c50b35 = require("../../../../chunks/finput-a5c50b35.js");
var import_util_293fe1ef = require("../../../../chunks/util-293fe1ef.js");
var import_crypto = require("crypto");
const Tambah = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let payload;
  let verr;
  const cu = (0, import_index_f33ac00f.g)("currentUser");
  cu.getUser();
  let nama = "";
  let alamat = "";
  let latitude = null;
  let longitude = null;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    payload = { nama, alamat, latitude, longitude };
    verr = (0, import_validation_1a23c6af.u)({
      nama: [(0, import_validation_1a23c6af.r)("nama harus diisi")],
      alamat: [(0, import_validation_1a23c6af.r)("alamat harus diisi")]
    }, payload);
    $$rendered = `<section class="${"section border-b border-gray-200"}"><div class="${"container py-12 flex flex-col gap-y-4 px-4"}"><h1 class="${"font-black text-3xl"}">Tambah Unit Kerja</h1></div></section>

<section><div class="${"container px-4 py-12"}"><div class="${"w-full md:w-1/2"}"><form method="${"POST"}" enctype="${"multipart/form-data"}" class="${"flex flex-col gap-y-4"}">${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, {
      label: "Nama Unit kerja",
      error: verr.fields.nama
    }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_finput_a5c50b35.F, "Finput").$$render($$result, {
          name: "nama",
          error: verr.fields.nama,
          value: nama
        }, {
          value: ($$value) => {
            nama = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
        ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Alamat Unit kerja" }, {}, {
      default: () => {
        return `<textarea class="${"rounded px-2 py-1 font-semibold text-gray-700 border"}" rows="${"5"}" name="${"alamat"}">${""}</textarea>`;
      }
    })}
        ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Latitude" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_finput_a5c50b35.F, "Finput").$$render($$result, { name: "latitude", value: latitude }, {
          value: ($$value) => {
            latitude = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
        ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Longitude" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_finput_a5c50b35.F, "Finput").$$render($$result, { name: "longitude", value: longitude }, {
          value: ($$value) => {
            longitude = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
        ${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, {
      primary: true,
      disabled: !verr.valid,
      size: "lg"
    }, {}, {
      default: () => {
        return `simpan data
        `;
      }
    })}</form></div></div></section>`;
  } while (!$$settled);
  return $$rendered;
});
