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
  get: () => get,
  post: () => post
});
module.exports = __toCommonJS(stdin_exports);
var import_db_244bffb8 = require("../../../../../chunks/db-244bffb8.js");
var import_dayjs = __toESM(require("dayjs"));
var import_customParseFormat = __toESM(require("dayjs/plugin/customParseFormat"));
var import_client = require("@prisma/client");
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
import_dayjs.default.extend(import_customParseFormat.default);
async function get(event) {
  let response = {
    status: 200,
    body: {}
  };
  const unitKerjaItems = await import_db_244bffb8.d.unitKerja.findMany();
  response.body.unitKerjaOptions = unitKerjaItems.map((it) => ({
    value: it.id,
    text: it.nama
  }));
  return response;
}
async function post(event) {
  const data = await event.request.formData();
  const user = event.locals.authSession.user;
  const status = data.get("status");
  const pegawaiId = parseInt(event.params.id);
  const hari = data.get("hari");
  const waktu = data.get("waktu");
  const t = (0, import_dayjs.default)(`${hari} ${waktu}`, "YYYY-MM-DD HH:mm").toDate();
  let payload = {
    hari: t,
    waktu: t,
    status: data.get("status"),
    createdBy: {
      connect: {
        id: user.id
      }
    },
    pegawai: {
      connect: {
        id: pegawaiId
      }
    }
  };
  if (status != "DinasLuar") {
    payload = __spreadProps(__spreadValues({}, payload), {
      unitKerja: {
        connect: {
          id: parseInt(data.get("unitKerjaId"))
        }
      }
    });
  } else {
    payload = __spreadProps(__spreadValues({}, payload), {
      dl_nama: data.get("dl_nama"),
      dl_latitude: data.get("dl_latitude"),
      dl_longitude: data.get("dl_longitude")
    });
  }
  await import_db_244bffb8.d.jadwal.create({
    data: payload
  });
  return {
    status: 303,
    headers: {
      location: `/app/pegawai/${event.params.id}/jadwal`
    }
  };
}
