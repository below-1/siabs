const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["Bungee-Regular.ttf","favicon.png","logo.svg","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".ttf":"font/ttf",".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-e3dc51a8.js","js":["start-e3dc51a8.js","chunks/index-40a3236e.js","chunks/preload-helper-e4860ae8.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/31.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/11.js')),
			() => Promise.resolve().then(() => require('../server/nodes/32.js')),
			() => Promise.resolve().then(() => require('../server/nodes/16.js')),
			() => Promise.resolve().then(() => require('../server/nodes/17.js')),
			() => Promise.resolve().then(() => require('../server/nodes/24.js')),
			() => Promise.resolve().then(() => require('../server/nodes/27.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/29.js')),
			() => Promise.resolve().then(() => require('../server/nodes/30.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js')),
			() => Promise.resolve().then(() => require('../server/nodes/15.js')),
			() => Promise.resolve().then(() => require('../server/nodes/23.js')),
			() => Promise.resolve().then(() => require('../server/nodes/28.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/12.js')),
			() => Promise.resolve().then(() => require('../server/nodes/13.js')),
			() => Promise.resolve().then(() => require('../server/nodes/14.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/18.js')),
			() => Promise.resolve().then(() => require('../server/nodes/19.js')),
			() => Promise.resolve().then(() => require('../server/nodes/20.js')),
			() => Promise.resolve().then(() => require('../server/nodes/21.js')),
			() => Promise.resolve().then(() => require('../server/nodes/22.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/25.js')),
			() => Promise.resolve().then(() => require('../server/nodes/26.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "dev",
				pattern: /^\/dev\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/dev.js'))
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "app",
				pattern: /^\/app\/?$/,
				names: [],
				types: [],
				path: "/app",
				shadow: null,
				a: [0,4,5],
				b: [1]
			},
			{
				type: 'page',
				id: "todos",
				pattern: /^\/todos\/?$/,
				names: [],
				types: [],
				path: "/todos",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/todos/index.js')),
				a: [0,6],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "auth/logout",
				pattern: /^\/auth\/logout\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/logout.js'))
			},
			{
				type: 'endpoint',
				id: "auth/init",
				pattern: /^\/auth\/init\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/init.js'))
			},
			{
				type: 'endpoint',
				id: "api/pegawai",
				pattern: /^\/api\/pegawai\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/pegawai.js'))
			},
			{
				type: 'endpoint',
				id: "api/auth",
				pattern: /^\/api\/auth\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/auth.js'))
			},
			{
				type: 'page',
				id: "app/jadwal",
				pattern: /^\/app\/jadwal\/?$/,
				names: [],
				types: [],
				path: "/app/jadwal",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/jadwal/index.js')),
				a: [0,4,7],
				b: [1]
			},
			{
				type: 'page',
				id: "app/me",
				pattern: /^\/app\/me\/?$/,
				names: [],
				types: [],
				path: "/app/me",
				shadow: null,
				a: [0,4,8],
				b: [1]
			},
			{
				type: 'page',
				id: "app/pegawai",
				pattern: /^\/app\/pegawai\/?$/,
				names: [],
				types: [],
				path: "/app/pegawai",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/pegawai/index.js')),
				a: [0,4,9],
				b: [1]
			},
			{
				type: 'page',
				id: "app/unit-kerja",
				pattern: /^\/app\/unit-kerja\/?$/,
				names: [],
				types: [],
				path: "/app/unit-kerja",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/unit-kerja/index.js')),
				a: [0,4,10],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/signin",
				pattern: /^\/auth\/signin\/?$/,
				names: [],
				types: [],
				path: "/auth/signin",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/signin.js')),
				a: [0,11,12],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/signup",
				pattern: /^\/auth\/signup\/?$/,
				names: [],
				types: [],
				path: "/auth/signup",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/signup.js')),
				a: [0,11,13],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "app/jadwal/checkout-latest",
				pattern: /^\/app\/jadwal\/checkout-latest\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/jadwal/checkout-latest.js'))
			},
			{
				type: 'endpoint',
				id: "app/absen/free-pegawai",
				pattern: /^\/app\/absen\/free-pegawai\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/absen/free-pegawai.js'))
			},
			{
				type: 'page',
				id: "app/absen/create",
				pattern: /^\/app\/absen\/create\/?$/,
				names: [],
				types: [],
				path: "/app/absen/create",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/absen/create.js')),
				a: [0,4,14],
				b: [1]
			},
			{
				type: 'page',
				id: "app/jadwal/create",
				pattern: /^\/app\/jadwal\/create\/?$/,
				names: [],
				types: [],
				path: "/app/jadwal/create",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/jadwal/create.js')),
				a: [0,4,15],
				b: [1]
			},
			{
				type: 'page',
				id: "app/pegawai/create",
				pattern: /^\/app\/pegawai\/create\/?$/,
				names: [],
				types: [],
				path: "/app/pegawai/create",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/pegawai/create.js')),
				a: [0,4,16],
				b: [1]
			},
			{
				type: 'page',
				id: "app/unit-kerja/tambah",
				pattern: /^\/app\/unit-kerja\/tambah\/?$/,
				names: [],
				types: [],
				path: "/app/unit-kerja/tambah",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/unit-kerja/tambah.js')),
				a: [0,4,17],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "app/unit-kerja/[id]/layout-data",
				pattern: /^\/app\/unit-kerja\/([^/]+?)\/layout-data\/?$/,
				names: ["id"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/unit-kerja/_id_/layout-data.js'))
			},
			{
				type: 'endpoint',
				id: "app/unit-kerja/[id]/change-avatar",
				pattern: /^\/app\/unit-kerja\/([^/]+?)\/change-avatar\/?$/,
				names: ["id"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/unit-kerja/_id_/change-avatar.js'))
			},
			{
				type: 'endpoint',
				id: "app/pegawai/[id]/layout-data",
				pattern: /^\/app\/pegawai\/([^/]+?)\/layout-data\/?$/,
				names: ["id"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/pegawai/_id_/layout-data.js'))
			},
			{
				type: 'endpoint',
				id: "app/jadwal/[id]/publish",
				pattern: /^\/app\/jadwal\/([^/]+?)\/publish\/?$/,
				names: ["id"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/jadwal/_id_/publish.js'))
			},
			{
				type: 'endpoint',
				id: "app/jadwal/[id]/layout-data",
				pattern: /^\/app\/jadwal\/([^/]+?)\/layout-data\/?$/,
				names: ["id"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/jadwal/_id_/layout-data.js'))
			},
			{
				type: 'endpoint',
				id: "app/absen/[id]/layout-data",
				pattern: /^\/app\/absen\/([^/]+?)\/layout-data\/?$/,
				names: ["id"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/absen/_id_/layout-data.js'))
			},
			{
				type: 'endpoint',
				id: "app/absen/[id]/delete",
				pattern: /^\/app\/absen\/([^/]+?)\/delete\/?$/,
				names: ["id"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/absen/_id_/delete.js'))
			},
			{
				type: 'page',
				id: "app/absen/[id]/overview",
				pattern: /^\/app\/absen\/([^/]+?)\/overview\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,4,18,19],
				b: [1]
			},
			{
				type: 'page',
				id: "app/jadwal/[id]/edit",
				pattern: /^\/app\/jadwal\/([^/]+?)\/edit\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/jadwal/_id_/edit.js')),
				a: [0,4,20,21],
				b: [1]
			},
			{
				type: 'page',
				id: "app/jadwal/[id]/member",
				pattern: /^\/app\/jadwal\/([^/]+?)\/member\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/jadwal/_id_/member.js')),
				a: [0,4,20,22],
				b: [1]
			},
			{
				type: 'page',
				id: "app/jadwal/[id]/overview",
				pattern: /^\/app\/jadwal\/([^/]+?)\/overview\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/jadwal/_id_/overview.js')),
				a: [0,4,20,23],
				b: [1]
			},
			{
				type: 'page',
				id: "app/pegawai/[id]/create-jadwal",
				pattern: /^\/app\/pegawai\/([^/]+?)\/create-jadwal\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/pegawai/_id_/create-jadwal.js')),
				a: [0,4,24,25],
				b: [1]
			},
			{
				type: 'page',
				id: "app/pegawai/[id]/edit-data",
				pattern: /^\/app\/pegawai\/([^/]+?)\/edit-data\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/pegawai/_id_/edit-data.js')),
				a: [0,4,24,26],
				b: [1]
			},
			{
				type: 'page',
				id: "app/pegawai/[id]/jadwal",
				pattern: /^\/app\/pegawai\/([^/]+?)\/jadwal\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/pegawai/_id_/jadwal.js')),
				a: [0,4,24,27],
				b: [1]
			},
			{
				type: 'page',
				id: "app/pegawai/[id]/overview-chart",
				pattern: /^\/app\/pegawai\/([^/]+?)\/overview-chart\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,4,24,28],
				b: [1]
			},
			{
				type: 'page',
				id: "app/pegawai/[id]/overview",
				pattern: /^\/app\/pegawai\/([^/]+?)\/overview\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,4,24,29],
				b: [1]
			},
			{
				type: 'page',
				id: "app/unit-kerja/[id]/jadwal",
				pattern: /^\/app\/unit-kerja\/([^/]+?)\/jadwal\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/unit-kerja/_id_/jadwal.js')),
				a: [0,4,30,31],
				b: [1]
			},
			{
				type: 'page',
				id: "app/unit-kerja/[id]/overview",
				pattern: /^\/app\/unit-kerja\/([^/]+?)\/overview\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/app/unit-kerja/_id_/overview.js')),
				a: [0,4,30,32],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
