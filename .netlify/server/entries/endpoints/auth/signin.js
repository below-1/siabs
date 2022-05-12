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
  post: () => post
});
module.exports = __toCommonJS(stdin_exports);
var import_db_244bffb8 = require("../../../chunks/db-244bffb8.js");
var import_util_293fe1ef = require("../../../chunks/util-293fe1ef.js");
var import_dayjs = __toESM(require("dayjs"));
var import_client = require("@prisma/client");
var import_crypto = require("crypto");
async function post(event) {
  const data = await event.request.formData();
  const username = data.get("username");
  const password = data.get("password");
  const user = await import_db_244bffb8.d.user.findFirst({
    where: {
      username
    },
    include: {
      pegawai: true
    }
  });
  if (!user) {
    return {
      body: {
        errors: {
          username: `Tidak dapat menemukan user dengan nama ${username}`
        }
      }
    };
  }
  if (password != user.password) {
    return {
      body: {
        errors: {
          password: `Password tidak cocok`
        }
      }
    };
  }
  let currentLogin = await import_db_244bffb8.d.login.findFirst({
    where: {
      userId: user.id,
      createdAt: {
        gt: new Date()
      }
    }
  });
  if (!currentLogin) {
    currentLogin = await import_db_244bffb8.d.login.create({
      data: {
        token: (0, import_util_293fe1ef.r)(12),
        expiredAt: (0, import_dayjs.default)().add(1, "day").toDate(),
        user: {
          connect: {
            id: user.id
          }
        }
      }
    });
  }
  let cookies = [];
  cookies.push(`token=${currentLogin.token}; Path=/`);
  return {
    status: 302,
    headers: {
      location: "/app",
      "Set-Cookie": cookies
    }
  };
}
