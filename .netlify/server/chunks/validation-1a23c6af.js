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
  m: () => min_length,
  r: () => required,
  u: () => useValidation
});
module.exports = __toCommonJS(stdin_exports);
var import_util_293fe1ef = require("./util-293fe1ef.js");
function required(msg) {
  return (v) => {
    if (v === null || v === void 0 || v === "") {
      return msg;
    }
  };
}
function min_length(n, msg) {
  return (v) => {
    if (!v)
      return;
    if (v.length < n) {
      return msg;
    }
  };
}
function useValidation(rules, obj) {
  let result = {};
  for (let k of Object.keys(rules)) {
    const field_rules = rules[k];
    for (let r of field_rules) {
      const vr = r(obj[k]);
      if (vr) {
        result[k] = vr;
        break;
      }
    }
  }
  return {
    fields: result,
    valid: (0, import_util_293fe1ef.i)(result)
  };
}
