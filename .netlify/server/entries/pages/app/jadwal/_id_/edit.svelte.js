var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Edit
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../../../chunks/index-f33ac00f.js");
var import_day_10db2cf8 = require("../../../../../chunks/day-10db2cf8.js");
var import_fbutton_9cb001c6 = require("../../../../../chunks/fbutton-9cb001c6.js");
var import_field_58046bd3 = require("../../../../../chunks/field-58046bd3.js");
var import_ftime_5a7b8497 = require("../../../../../chunks/ftime-5a7b8497.js");
var import_fselect_85c56a8b = require("../../../../../chunks/fselect-85c56a8b.js");
var import_absen_type_select_af3081e6 = require("../../../../../chunks/absen-type-select-af3081e6.js");
var import_dayjs = __toESM(require("dayjs"));
var import_id = require("dayjs/locale/id");
var import_options_66a90b28 = require("../../../../../chunks/options-66a90b28.js");
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
const Edit = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let unitKerjaOptions;
  let jadwal = (0, import_index_f33ac00f.g)("jadwal");
  let { unitKerjaList = [] } = $$props;
  let payload = __spreadProps(__spreadValues({}, jadwal), {
    hari: (0, import_dayjs.default)(jadwal.hari).format("YYYY-MM-DD"),
    waktu: (0, import_dayjs.default)(jadwal.waktu).format("HH:mm")
  });
  if ($$props.unitKerjaList === void 0 && $$bindings.unitKerjaList && unitKerjaList !== void 0)
    $$bindings.unitKerjaList(unitKerjaList);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    unitKerjaOptions = unitKerjaList.map((uk) => ({ text: uk.nama, value: uk.id }));
    $$rendered = `<div class="${"container px-4 flex py-6"}"><div class="${"w-full md:w-1/2"}"><form class="${"flex flex-col gap-y-4"}" method="${"post"}" enctype="${"multipart/form-data"}">${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Tanggal" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_ftime_5a7b8497.F, "FDate").$$render($$result, { name: "hari", value: payload.hari }, {
          value: ($$value) => {
            payload.hari = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
      ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Waktu" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_ftime_5a7b8497.a, "FTime").$$render($$result, { name: "waktu", value: payload.waktu }, {
          value: ($$value) => {
            payload.waktu = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
      ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Pilih Unit Kerja" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_fselect_85c56a8b.F, "FSelect").$$render($$result, {
          name: "unitKerja",
          options: unitKerjaOptions,
          selected: payload.unitKerja.id
        }, {
          selected: ($$value) => {
            payload.unitKerja.id = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
      ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "Field").$$render($$result, { label: "Pilih Tipe Absen" }, {}, {
      default: () => {
        return `${(0, import_index_f33ac00f.v)(import_absen_type_select_af3081e6.A, "AbsenTypeSelect").$$render($$result, { name: "type", selected: jadwal.type }, {
          selected: ($$value) => {
            jadwal.type = $$value;
            $$settled = false;
          }
        }, {})}`;
      }
    })}
      ${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, { primary: true, size: "lg" }, {}, {
      default: () => {
        return `simpan data
      `;
      }
    })}</form></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
