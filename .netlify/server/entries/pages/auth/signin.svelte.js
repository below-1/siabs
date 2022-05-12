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
  default: () => Signin
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../chunks/index-f33ac00f.js");
var import_util_293fe1ef = require("../../../chunks/util-293fe1ef.js");
var import_field_58046bd3 = require("../../../chunks/field-58046bd3.js");
var import_fbutton_9cb001c6 = require("../../../chunks/fbutton-9cb001c6.js");
var import_crypto = require("crypto");
const Signin = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let valid;
  let { errors = {} } = $$props;
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  valid = !(0, import_util_293fe1ef.i)(errors);
  return `${$$result.head += `${$$result.title = `<title>SIABS -- Signin</title>`, ""}`, ""}



<form method="${"POST"}" enctype="${"multipart/form-data"}" class="${"bg-white border rounded"}"><div class="${[
    "p-4 text-lg",
    (!valid ? "bg-red-500" : "") + " " + (!valid ? "text-white" : "")
  ].join(" ").trim()}"><p class="${["card-header-title", !valid ? "has-text-white" : ""].join(" ").trim()}">Login ke dalam sistem
    </p></div>

  <div class="${"flex flex-col gap-y-4 p-4"}">${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "FField").$$render($$result, { label: "Username" }, {}, {
    default: () => {
      return `<input class="${["border p-2 rounded", errors.username ? "is-danger" : ""].join(" ").trim()}" type="${"text"}" required name="${"username"}">
      ${errors.username ? `<p class="${"help is-danger"}">${(0, import_index_f33ac00f.e)(errors.username)}</p>` : ``}`;
    }
  })}
    ${(0, import_index_f33ac00f.v)(import_field_58046bd3.F, "FField").$$render($$result, { label: "Password" }, {}, {
    default: () => {
      return `<input class="${["border p-2 rounded", errors.password ? "is-danger" : ""].join(" ").trim()}" type="${"password"}" required name="${"password"}">
      ${errors.password ? `<p class="${"help is-danger"}">${(0, import_index_f33ac00f.e)(errors.password)}</p>` : ``}`;
    }
  })}

    ${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, { primary: true }, {}, {
    default: () => {
      return `masuk
    `;
    }
  })}</div></form>`;
});
