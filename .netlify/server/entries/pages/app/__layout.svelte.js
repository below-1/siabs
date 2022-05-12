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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f33ac00f = require("../../../chunks/index-f33ac00f.js");
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const getStores = () => {
  const stores = (0, import_index_f33ac00f.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const throw_error = (verb) => {
  throw new Error(`Can only ${verb} session store in browser`);
};
const session = {
  subscribe(fn) {
    const store = getStores().session;
    return store.subscribe(fn);
  },
  set: () => throw_error("set"),
  update: () => throw_error("update")
};
var backdrop_svelte_svelte_type_style_lang = "";
const css = {
  code: ".backdrop.svelte-43mxjo{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(250, 250, 250, 0.5)}",
  map: null
};
const Backdrop = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css);
  return `${show ? `<div class="${"backdrop flex items-center justify-center md:p-4 svelte-43mxjo"}">${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
function _menus(sess, page2) {
  const current_path_pattern = "/" + page2.routeId;
  let result = [];
  if (sess.user.superUser) {
    result = [
      {
        path: "/app/unit-kerja",
        label: "unit kerja"
      },
      { path: "/app/pegawai", label: "pegawai" },
      { path: "/app/jadwal", label: "jadwal" },
      { path: "/app/tugas", label: "tugas" }
    ];
  } else if (sess.user.pegawai.isAdminUnitKerja) {
    result = [
      {
        path: "/app/unit-kerja",
        label: "unit kerja"
      },
      { path: "/app/pegawai", label: "pegawai" },
      { path: "/app/jadwal", label: "jadwal" },
      { path: "/app/tugas", label: "tugas" }
    ];
  } else {
    result = [
      { path: "/app/jadwal", label: "jadwal" },
      { path: "/app/tugas", label: "tugas" }
    ];
  }
  result = result.map((r) => {
    if (current_path_pattern.startsWith(r.path)) {
      return __spreadProps(__spreadValues({}, r), { active: true });
    }
    return r;
  });
  return result;
}
const _layout = (0, import_index_f33ac00f.c)(($$result, $$props, $$bindings, slots) => {
  let user;
  let menus;
  let $page, $$unsubscribe_page;
  let $session, $$unsubscribe_session;
  $$unsubscribe_page = (0, import_index_f33ac00f.a)(page, (value) => $page = value);
  $$unsubscribe_session = (0, import_index_f33ac00f.a)(session, (value) => $session = value);
  (0, import_index_f33ac00f.s)("currentUser", { getUser: () => user });
  let showAccountMenu = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    user = $session.user;
    menus = _menus($session, $page);
    $$rendered = `<div class="${"flex flex-col"}" style="${"min-height: 100vh;"}"><nav class="${"border-b-4 border-purple-900 bg-black text-white"}"><div class="${"container flex"}"><div class="${"px-4 md:px-none flex py-3"}" href="${"/app"}"><div class="${"h-10 w-10 rounded-full bg-gradient-to-r from-indigo-800 to-pink-600 mr-2"}"></div>

        <button type="${"button"}" class="${"flex items-center"}"><img src="${"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}" alt="${"logo"}" class="${"w-10 h-10 rounded-full mr-2"}">
          <div><div class="${"font-black text-lg"}" style="${"line-height: 1;"}">${(0, import_index_f33ac00f.e)($session.user.username)}</div>

            ${$session.user.superUser ? `<div class="${"text-sm"}">Super Admin</div>` : `<div class="${"text-sm text-gray-600"}">Pegawai</div>`}</div></button></div>

      <div class="${"flex-grow"}"></div>

      <div class="${"hidden md:flex gap-x-6 font-bold text-sm"}"><a target="${"_blank"}" href="${"/app"}" class="${"gap-x-2 flex items-center px-4 py-2"}"><ion-icon name="${"notifications-outline"}"></ion-icon>
          <span>Pesan
          </span></a>

        <a class="${"gap-x-2 flex items-center"}" href="${"/app"}"><ion-icon name="${"person-outline"}"></ion-icon>
          <span>Account</span></a></div>

      <div class="${"md:hidden flex items-center"}"><ion-icon class="${"w-8 h-8 px-4"}" name="${"menu-outline"}"></ion-icon></div></div>

    ${``}</nav>

  ${user.superUser ? `<nav class="${"border-b border-gray-200 bg-gray-50"}"><div class="${"container flex overflow-x-scroll md:overflow-hidden"}">${(0, import_index_f33ac00f.b)(menus, (menu, i) => {
      return `<a${(0, import_index_f33ac00f.d)("href", menu.path, 0)} class="${[
        "py-3 px-4 hover:bg-gray-50 border-black whitespace-nowrap",
        (menu.active ? "text-black" : "") + " " + (menu.active ? "font-black" : "") + " " + (menu.active ? "border-b-2" : "")
      ].join(" ").trim()}">${(0, import_index_f33ac00f.e)(menu.label)}
        </a>`;
    })}</div></nav>` : ``}

  <div class="${"flex-grow pb-12"}">${slots.default ? slots.default({}) : ``}</div>

  <footer class="${"border-t border-gray-200 flex justify-center items-center h-12 bg-gray-900"}"><div class="${"text-sm font-bold text-gray-200"}">Copyright Jordan Meta</div></footer></div>

${(0, import_index_f33ac00f.v)(Backdrop, "Backdrop").$$render($$result, { show: showAccountMenu }, {
      show: ($$value) => {
        showAccountMenu = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<div class="${"bg-white shadow-xl border rounded"}"><div class="${"flex flex-col"}"><div class="${"flex items-center gap-x-4 border-b p-4"}"><img src="${"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}" alt="${"logo"}" class="${"w-10 h-10 rounded-full mr-2"}">
        <div><div class="${"font-black text-lg"}" style="${"line-height: 1;"}">${(0, import_index_f33ac00f.e)($session.user.username)}</div>

          ${$session.user.superUser ? `<div class="${"text-sm"}">Super Admin</div>` : `<div class="${"text-sm text-gray-600"}">Pegawai</div>`}</div></div>
      <a href="${"/account/change-password"}" class="${"flex items-center p-2 border-b"}"><span>Ganti Password</span></a>
      <a href="${"/auth/logout"}" class="${"flex items-center p-2"}"><span>Logout</span></a></div></div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_session();
  return $$rendered;
});
