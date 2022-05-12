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
  default: () => Signup
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../chunks/index-f33ac00f.js");
const Base_signup_form = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let { error = false } = $$props;
  let { on_next = () => {
  } } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.on_next === void 0 && $$bindings.on_next && on_next !== void 0)
    $$bindings.on_next(on_next);
  return `<form class="${"card"}"><div class="${"card-header"}"><p class="${"card-header-title"}"><span>Form Pendaftaran -- </span>
      ${slots.title ? slots.title({}) : ``}</p></div>
  <div class="${"card-content"}">${slots.content ? slots.content({}) : ``}</div>
  <div class="${"card-footer"}"><p class="${"card-footer-item"}"><button class="${"button is-primary"}" ${error ? "disabled" : ""} type="${"submit"}">selanjutnya
      </button></p>
    <p class="${"card-footer-item"}"><span>Sudah punya akun? <a href="${"/auth/signin"}">masuk</a></span></p></div></form>`;
});
let username = "";
const User_form = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let password_match;
  const dispatch = (0, import_index_f33ac00f.f)();
  let password = "";
  let password_repeat = "";
  function on_next() {
    dispatch("next", { username, password, password_repeat });
    console.log("next");
  }
  password_match = password == password_repeat;
  return `${(0, import_index_f33ac00f.v)(Base_signup_form, "BaseSignupForm").$$render($$result, { error: !password_match, on_next }, {}, {
    content: () => {
      return `<div slot="${"content"}" class="${"has-text-left"}"><div class="${"field"}"><label class="${"label"}">Username</label>
      <div class="${"control"}"><input class="${"input"}" type="${"text"}" required name="${"username"}"></div></div>
    <div class="${"field"}"><label class="${"label"}">Password</label>
      <div class="${"control"}"><input class="${["input", !password_match ? "is-danger" : ""].join(" ").trim()}" type="${"password"}" required name="${"password"}"${(0, import_index_f33ac00f.d)("value", password, 0)}></div></div>
    <div class="${"field"}"><label class="${"label"}">Ulangi Password</label>
      <div class="${"control"}"><input class="${["input", !password_match ? "is-danger" : ""].join(" ").trim()}" type="${"password"}" required${(0, import_index_f33ac00f.d)("value", password_repeat, 0)}></div></div></div>`;
    },
    title: () => {
      return `<span slot="${"title"}">Data User</span>`;
    }
  })}`;
});
const Signup = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>AbsensiAPP -- Signup</title>`, ""}`, ""}



${`${(0, import_index_f33ac00f.v)(User_form, "UserForm").$$render($$result, {}, {}, {})}`}`;
});
