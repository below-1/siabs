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
var import_field_58046bd3 = require("../../../../../chunks/field-58046bd3.js");
var import_finput_a5c50b35 = require("../../../../../chunks/finput-a5c50b35.js");
var import_ffile_255892b2 = require("../../../../../chunks/ffile-255892b2.js");
var import_fbutton_9cb001c6 = require("../../../../../chunks/fbutton-9cb001c6.js");
var import_validation_1a23c6af = require("../../../../../chunks/validation-1a23c6af.js");
var import_util_293fe1ef = require("../../../../../chunks/util-293fe1ef.js");
var import_crypto = require("crypto");
const Overview = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let verr;
  const cu = (0, import_index_f33ac00f.g)("currentUser");
  const user = cu.getUser();
  let { item = {} } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    verr = (0, import_validation_1a23c6af.u)({
      nama: [(0, import_validation_1a23c6af.r)("nama harus diisi")],
      alamat: [(0, import_validation_1a23c6af.r)("alamat harus diisi")]
    }, item);
    $$rendered = `<section class="${"pb-12"}"><div class="${"container py-12 px-4 flex"}">${user.superUser ? `<div class="${"w-full md:w-1/2"}"><h1 class="${"text-2xl font-black mb-8"}">Edit Data Unit Kerja</h1>
      <form method="${"post"}" enctype="${"multipart/form-data"}" class="${"flex flex-col gap-y-4"}">${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, {
      label: "Nama Unit kerja",
      error: verr.fields.nama
    }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_finput_a5c50b35.F, "Finput").$$render($$result, {
          name: "nama",
          error: verr.fields.nama,
          value: item.nama
        }, {
          value: ($$value) => {
            item.nama = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
        ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Alamat Unit kerja" }, {}, {
      default: () => {
        return `<textarea class="${"rounded px-2 py-1 font-semibold text-gray-700 border"}" rows="${"5"}" name="${"alamat"}">${item.alamat || ""}</textarea>`;
      }
    })}
        ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Latitude" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_finput_a5c50b35.F, "Finput").$$render($$result, { name: "latitude", value: item.latitude }, {
          value: ($$value) => {
            item.latitude = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
        ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Longitude" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_finput_a5c50b35.F, "Finput").$$render($$result, { name: "longitude", value: item.longitude }, {
          value: ($$value) => {
            item.longitude = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
        ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Avatar" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_ffile_255892b2.F, "FFile").$$render($$result, { name: "avatar" }, {}, {})}`;
      }
    })}
        ${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, { primary: true, size: "lg" }, {}, {
      default: () => {
        return `simpan data
        `;
      }
    })}</form></div>` : ``}</div></section>`;
  } while (!$$settled);
  return $$rendered;
});
