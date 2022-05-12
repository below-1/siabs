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
  getSession: () => getSession,
  handle: () => handle
});
module.exports = __toCommonJS(stdin_exports);
var import_cookie = __toESM(require("cookie"));
var import_uuid = require("@lukeed/uuid");
var import_db_244bffb8 = require("./db-244bffb8.js");
var import_client = require("@prisma/client");
const handle = async ({ event, resolve }) => {
  const cookies = import_cookie.default.parse(event.request.headers.get("cookie") || "");
  event.locals.userid = cookies.userid || (0, import_uuid.v4)();
  if (event.url.pathname.startsWith("/app")) {
    if (cookies && cookies.token) {
      const authSession = await import_db_244bffb8.d.login.findFirst({
        where: {
          token: cookies.token,
          expiredAt: {
            gt: new Date()
          }
        },
        include: {
          user: {
            include: {
              pegawai: true
            }
          }
        }
      });
      if (authSession) {
        event.locals.authSession = authSession;
      } else {
        return {
          status: 303,
          headers: {
            location: "/auth/signin"
          }
        };
      }
    } else {
      return {
        status: 303,
        headers: {
          location: "/auth/signin"
        }
      };
    }
  }
  const response = await resolve(event);
  if (!cookies.userid) {
    response.headers.set("set-cookie", import_cookie.default.serialize("userid", event.locals.userid, {
      path: "/",
      httpOnly: true
    }));
  }
  return response;
};
async function getSession(event) {
  return event.locals.authSession ? event.locals.authSession : {};
}
