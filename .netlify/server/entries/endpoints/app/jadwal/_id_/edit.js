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
var import_client = require("@prisma/client");
async function get(event) {
  const unitKerjaList = await import_db_244bffb8.d.unitKerja.findMany({});
  return {
    body: {
      unitKerjaList
    }
  };
}
async function post(event) {
  const id = parseInt(event.params.id);
  const data = await event.request.formData();
  const ds = data.get("hari") + " " + data.get("waktu");
  const d = (0, import_dayjs.default)(ds, "YYYY-MM-DD HH:mm");
  let jadwal_data = {
    hari: d.toDate(),
    waktu: d.toDate(),
    type: data.get("type"),
    unitKerja: {
      connect: {
        id: parseInt(data.get("unitKerja"))
      }
    },
    createdBy: {
      connect: {
        id: event.locals.authSession.user.id
      }
    }
  };
  await import_db_244bffb8.d.jadwal.update({
    where: {
      id
    },
    data: jadwal_data
  });
  return {
    status: 303,
    headers: {
      location: `/app/jadwal/${id}/overview`
    }
  };
}
