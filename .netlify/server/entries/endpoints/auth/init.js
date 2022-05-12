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
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
var import_db_244bffb8 = require("../../../chunks/db-244bffb8.js");
var import_client = require("@prisma/client");
async function get(event) {
  await import_db_244bffb8.d.pegawai.create({
    data: {
      nama: "admin zero",
      nip: "0987654321",
      nik: "0987654321",
      avatar: "https://picsum.photos/id/1037/200",
      user: {
        create: {
          username: "adminzero",
          password: "adminzero",
          isSuperAdmin: true
        }
      },
      unitKerja: {
        create: {
          nama: "First Unit Kerja",
          alamat: "Jl. Adisucipto, Penfui",
          avatar: "https://picsum.photos/id/1037/200"
        }
      }
    }
  });
  return {
    status: 303,
    headers: {
      location: "/auth/signin"
    }
  };
}
