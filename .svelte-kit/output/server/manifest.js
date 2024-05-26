export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DDMjrjsP.js","app":"_app/immutable/entry/app.NKG2JmCs.js","imports":["_app/immutable/entry/start.DDMjrjsP.js","_app/immutable/chunks/entry.j7SDI27J.js","_app/immutable/chunks/scheduler.C-0YFhF0.js","_app/immutable/chunks/index.BqH4I7s2.js","_app/immutable/entry/app.NKG2JmCs.js","_app/immutable/chunks/scheduler.C-0YFhF0.js","_app/immutable/chunks/index.ola9ti-H.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
