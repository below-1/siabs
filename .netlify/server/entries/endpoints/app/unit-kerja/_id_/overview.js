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
var import_db_244bffb8 = require("../../../../../chunks/db-244bffb8.js");
var import_upload_704c61d0 = require("../../../../../chunks/upload-704c61d0.js");
var import_client = require("@prisma/client");
var import_imagekit = require("imagekit");
async function getUnitKerja(id) {
  try {
    const unitKerja = await import_db_244bffb8.d.unitKerja.findFirst({
      where: {
        id
      }
    });
    return unitKerja;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function get(event) {
  const unitKerja = await getUnitKerja(parseInt(event.params.id));
  let response = {};
  response.status = 200;
  response.body = {};
  response.body.item = unitKerja;
  return response;
}
async function post(event) {
  const fd = await event.request.formData();
  const id = parseInt(event.params.id);
  const avatarFile = fd.get("avatar");
  let avatar = null;
  if (avatarFile) {
    const content = await avatarFile.arrayBuffer();
    const buff = Buffer.from(new Uint8Array(content));
    const uploadResponse = await import_upload_704c61d0.i.upload({
      file: buff,
      fileName: avatarFile.name
    });
    avatar = uploadResponse.url;
  }
  let data = {
    nama: fd.get("nama"),
    alamat: fd.get("alamat")
  };
  if (avatar) {
    data.avatar = avatar;
  }
  if (fd.get("latitude")) {
    data.latitude = fd.get("latitude");
  }
  if (fd.get("longitude")) {
    data.longitude = fd.get("longitude");
  }
  await import_db_244bffb8.d.unitKerja.update({
    where: {
      id
    },
    data
  });
  let response = {};
  response.status = 200;
  response.body = {};
  return response;
}
