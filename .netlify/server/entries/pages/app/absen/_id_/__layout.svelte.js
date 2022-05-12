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
  default: () => _layout,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../../../chunks/index-f33ac00f.js");
var import_page_header_33a94fef = require("../../../../../chunks/page-header-33a94fef.js");
var import_fbutton_9cb001c6 = require("../../../../../chunks/fbutton-9cb001c6.js");
var import_modal_confirmation_2d80b85e = require("../../../../../chunks/modal-confirmation-2d80b85e.js");
async function load({ params, session, fetch }) {
  const response = await fetch(`/app/absen/${params.id}/layout-data`, {
    headers: {
      accept: "application/json",
      "content-type": "application/json"
    }
  });
  const data = await response.json();
  return { status: 200, props: data };
}
const _layout = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let deleteMessage;
  let { absen } = $$props;
  (0, import_index_f33ac00f.s)("absen", absen);
  let deleteModal = false;
  async function onDelete() {
    window.location = `/app/absen/${absen.id}/delete`;
  }
  if ($$props.absen === void 0 && $$bindings.absen && absen !== void 0)
    $$bindings.absen(absen);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    deleteMessage = `Apakah anda menghapus data absen #${absen ? absen.id : ""}`;
    $$rendered = `${(0, import_index_f33ac00f.v)(import_page_header_33a94fef.P, "PageHeader").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="${"flex flex-col md:flex-row items-center justify-between"}"><h1 class="${"text-2xl font-bold flex-grow"}">Detail Absensi #${(0, import_index_f33ac00f.e)(absen.id)}</h1>
    ${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, { danger: true }, {}, {
          default: () => {
            return `Hapus Absen`;
          }
        })}</div>`;
      }
    })}

<div class="${"container px-4"}">${slots.default ? slots.default({}) : ``}</div>

${(0, import_index_f33ac00f.v)(import_modal_confirmation_2d80b85e.M, "ModalConfirmation").$$render($$result, {
      message: deleteMessage,
      title: "Konfirmasi Hapus Absen",
      onYes: onDelete,
      show: deleteModal
    }, {
      show: ($$value) => {
        deleteModal = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  return $$rendered;
});
