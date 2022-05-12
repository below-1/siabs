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
  const response = await fetch(`/app/pegawai/${params.id}/layout-data`, {
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
  let { pegawai } = $$props;
  (0, import_index_f33ac00f.s)("pegawai", pegawai);
  const { getUser } = (0, import_index_f33ac00f.g)("currentUser");
  getUser();
  const menus = [
    {
      label: "overview",
      path: `/app/pegawai/${pegawai.id}/overview`,
      icon: '<ion-icon name="apps-outline"></ion-icon>'
    },
    {
      label: "jadwal",
      path: `/app/pegawai/${pegawai.id}/jadwal`
    },
    {
      label: "edit data",
      path: `/app/pegawai/${pegawai.id}/edit-data`
    },
    {
      label: "hapus",
      path: `/app/pegawai/${pegawai.id}/hapus`
    }
  ];
  let deleteModal = false;
  async function onDelete() {
    window.location = `/app/pegawai/${pegawai.id}/delete`;
  }
  if ($$props.pegawai === void 0 && $$bindings.pegawai && pegawai !== void 0)
    $$bindings.pegawai(pegawai);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    deleteMessage = `Apakah anda menghapus data pegawai #${pegawai ? pegawai.id : ""}`;
    $$rendered = `${(0, import_index_f33ac00f.v)(import_page_header_33a94fef.P, "PageHeader").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="${"container grid grid-cols-12"}"><img class="${"hidden md:block h-20 rounded"}" src="${"https://i.pravatar.cc/150?img=$" + (0, import_index_f33ac00f.e)(pegawai.id)}">
    <div class="${"col-span-12 md:col-span-6 flex flex-col items-center md:items-start justify-center text-gray-500 mb-4"}"><img class="${"h-32 md:hidden rounded-full"}" src="${"https://i.pravatar.cc/150?img=$" + (0, import_index_f33ac00f.e)(pegawai.id)}">
      <div class="${"font-black text-lg md:text-xl text-black"}">${(0, import_index_f33ac00f.e)(pegawai.nama)}</div>
      <div class="${"font-black text-lg text-black"}">${(0, import_index_f33ac00f.e)(pegawai.user.username)}</div>
      <div class="${"text-sm font-semibold"}">NIP: ${(0, import_index_f33ac00f.e)(pegawai.nip)}, NIK: ${(0, import_index_f33ac00f.e)(pegawai.nik)}</div>
      <div class="${"text-sm flex flex-wrap gap-x-4"}"></div></div>
    <div class="${"col-span-12 md:col-span-4 flex items-center justify-center md:justify-end"}">${(0, import_index_f33ac00f.v)(import_fbutton_9cb001c6.F, "FButton").$$render($$result, { size: "sm", danger: true }, {}, {
          default: () => {
            return `hapus pegawai`;
          }
        })}</div></div>`;
      }
    })}

<section class="${"section border-b border-gray-200"}"><div class="${"bg-gray-50 border-b"}"><div class="${"container flex items-center justify-start md:gap-x-4 whitespace-nowrap"}">${(0, import_index_f33ac00f.b)(menus, (menu) => {
      return `<a${(0, import_index_f33ac00f.d)("href", menu.path, 0)} class="${"text-gray-600 px-4 py-2 hover:bg-gray-50 hover:bg-gray-200 rounded flex-grow md:flex-grow-0"}">${(0, import_index_f33ac00f.e)(menu.label)}
        </a>`;
    })}</div></div></section>

${slots.default ? slots.default({}) : `
`}

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
