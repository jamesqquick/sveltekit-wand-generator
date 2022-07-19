const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"immutable/start-0ed84aff.js","imports":["immutable/start-0ed84aff.js","immutable/chunks/index-3bb2f083.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js'))
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
				id: "api/wands",
				pattern: /^\/api\/wands\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/wands.ts.js'))
			},
			{
				type: 'endpoint',
				id: "api/wands/[id]",
				pattern: /^\/api\/wands\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/wands/_id_.ts.js'))
			},
			{
				type: 'page',
				id: "wands/[id]",
				pattern: /^\/wands\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
