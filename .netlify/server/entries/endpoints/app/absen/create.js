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
  get: () => get,
  post: () => post
});
module.exports = __toCommonJS(stdin_exports);
var import_db_244bffb8 = require("../../../../chunks/db-244bffb8.js");
var import_dayjs = require("dayjs");
var import_client = require("@prisma/client");
async function get(event) {
  const jadwalId = parseInt(event.url.searchParams.get("jadwal"));
  const jadwal = await import_db_244bffb8.d.jadwal.findFirst({
    where: {
      id: jadwalId
    },
    include: {
      unitKerja: true
    }
  });
  return {
    body: {
      jadwal
    }
  };
}
async function post(event) {
  const jadwalId = parseInt(event.url.searchParams.get("jadwal"));
  const payload = await event.request.json();
  const absen = await import_db_244bffb8.d.Absen.create({
    data: {
      workStatus: payload.workStatus,
      jadwal: {
        connect: {
          id: jadwalId
        }
      },
      pegawai: {
        connect: {
          id: payload.pegawaiId
        }
      }
    }
  });
  return {
    status: 201,
    body: {
      absen
    }
  };
}
