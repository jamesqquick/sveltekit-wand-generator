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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62012ddc = require("../../immutable/chunks/index-62012ddc.js");
var import_WandDetails_2e22ece0 = require("../../immutable/chunks/WandDetails-2e22ece0.js");
const TwitterShare_svelte_svelte_type_style_lang = "";
const css = {
  code: `a.svelte-1dtojzt{background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cpath fill='rgb(29, 161, 242)' class='cls-2' d='M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23'/%3E%3C/svg%3E")
			0 50% no-repeat;background-size:1.5em;color:rgb(29, 161, 242);font-weight:bold;padding:0.5em 0.3em 0.5em 1.5em;text-decoration:none}`,
  map: null
};
const TwitterShare = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let query;
  let href;
  let { text = "" } = $$props;
  let { url = "" } = $$props;
  let { hashtags = "" } = $$props;
  let { via = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.hashtags === void 0 && $$bindings.hashtags && hashtags !== void 0)
    $$bindings.hashtags(hashtags);
  if ($$props.via === void 0 && $$bindings.via && via !== void 0)
    $$bindings.via(via);
  $$result.css.add(css);
  query = [
    text && `text=${encodeURIComponent(text)}`,
    via && `via=${encodeURIComponent(via)}`,
    hashtags && `hashtags=${hashtags}`,
    url && `url=${encodeURIComponent(url)}`
  ].filter(Boolean).join("&");
  href = `https://twitter.com/intent/tweet?${query}`;
  return `<a target="${"_blank"}" rel="${"noreferrer"}"${(0, import_index_62012ddc.a)("href", href, 0)} class="${"svelte-1dtojzt"}">Share on Twitter</a>`;
});
const Congratulations = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div><p class="${"text-gray-300 text-center text-4xl mb-4"}">Congratulations on your new wand!
	</p>
    <div class="${"text-center"}">${(0, import_index_62012ddc.v)(TwitterShare, "TwitterShare").$$render($$result, {
    text: "I created my own magical wand with @planetscale @prisma @sveltekit @tailwindcss",
    url: `${import_WandDetails_2e22ece0.v.basePath}/wands/${id}`
  }, {}, {})}</div></div>`;
});
const WandGenerator = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  var WAND_STATE;
  (function(WAND_STATE2) {
    WAND_STATE2[WAND_STATE2["NOT_STARTED"] = 0] = "NOT_STARTED";
    WAND_STATE2[WAND_STATE2["GENERATING"] = 1] = "GENERATING";
    WAND_STATE2[WAND_STATE2["GENERATED"] = 2] = "GENERATED";
    WAND_STATE2[WAND_STATE2["SAVING"] = 3] = "SAVING";
    WAND_STATE2[WAND_STATE2["SAVED"] = 4] = "SAVED";
  })(WAND_STATE || (WAND_STATE = {}));
  const blankWand = {
    core: " ",
    wood: " ",
    length: " ",
    maker: " ",
    flexibility: " "
  };
  let myWand = { ...blankWand };
  let currentState = WAND_STATE.NOT_STARTED;
  let textSuffix = "";
  let wandId = "";
  return `${(0, import_index_62012ddc.v)(import_WandDetails_2e22ece0.W, "WandDetails").$$render($$result, { wand: myWand }, {}, {})}

<div class="${"mt-10 flex justify-center gap-4"}">${currentState === WAND_STATE.NOT_STARTED || currentState === WAND_STATE.GENERATED ? `<button type="${"button"}" class="${"px-4 py-2 relative text-2xl text-black before:block bg-blue-500 rounded-sm font-bold"}">Generate
		</button>` : `${currentState === WAND_STATE.GENERATING ? `<div class="${"text-gray-300 text-2xl w-42 flex gap-1"}"><span>Magic is happening </span>
			<span class="${"w-10"}">${(0, import_index_62012ddc.e)(textSuffix)}</span></div>` : `${currentState === WAND_STATE.SAVED ? `${(0, import_index_62012ddc.v)(Congratulations, "Congratulations").$$render($$result, { id: wandId }, {}, {})}` : ``}`}`}
	${currentState === WAND_STATE.GENERATED ? `<button type="${"button"}" class="${"px-4 py-2 relative text-2xl text-black before:block bg-blue-500 rounded-sm font-bold"}">Save Wand
		</button>` : ``}</div>`;
});
const Routes = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<meta name="${"twitter:title"}" content="${"SvelteKit Wand Generator"}" data-svelte="svelte-13qamzq"><meta property="${"og:image"}" content="${"https://res.cloudinary.com/jamesqquick/image/upload/v1657740252/sk-wand-generator/base.png"}" data-svelte="svelte-13qamzq"><meta property="${"og:url"}"${(0, import_index_62012ddc.a)("content", import_WandDetails_2e22ece0.v.basePath, 0)} data-svelte="svelte-13qamzq"><meta name="${"twitter:image"}" content="${"https://res.cloudinary.com/jamesqquick/image/upload/v1657740252/sk-wand-generator/base.png"}" data-svelte="svelte-13qamzq">`, ""}
${(0, import_index_62012ddc.v)(WandGenerator, "WandGenerator").$$render($$result, {}, {}, {})}`;
});
