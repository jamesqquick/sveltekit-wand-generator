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
var import_index_62012ddc = require("../../immutable/chunks/index-62012ddc.js");
const app = "";
const _layout = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<meta property="${"og:title"}" content="${"SvelteKit Wand Generator"}" data-svelte="svelte-1a08lq7"><meta property="${"og:site_name"}" content="${"SvelteKit Wand Generator"}" data-svelte="svelte-1a08lq7"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-1a08lq7"><meta property="${"og:locale"}" content="${"en_US"}" data-svelte="svelte-1a08lq7"><meta property="${"og:description"}" content="${"A SvelteKit app for generating random wands."}" data-svelte="svelte-1a08lq7"><meta name="${"twitter:creator"}" content="${"@jamesqquick"}" data-svelte="svelte-1a08lq7"><meta name="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-1a08lq7"><meta name="${"twitter:site"}" content="${"@jamesqquick"}" data-svelte="svelte-1a08lq7"><meta name="${"twitter:description"}" content="${"A SvelteKit app for generating random wands."}" data-svelte="svelte-1a08lq7">`, ""}
<div class="${"bg-gray-900 h-screen w-screen px-4 py-10 flex justify-center"}"><div class="${"md:min-w-[600px]"}"><header class="${"mb-10"}"><a href="${"/"}"><h1 class="${"text-center text-gray-100 text-6xl font-bold mb-4"}"><span class="${"mx-1 before:block before:absolute before:-inset-[4px] before:-skew-y-3 before:bg-blue-500 relative inline-block"}"><a href="${"/"}" class="${"relative hover:cursor-pointer text-black font-bold"}">Wand</a></span>
                Generator</h1></a>
            <p class="${"text-center text-xl text-gray-400 italic"}">Create your 
                    <span class="${"text-white font-bold underline underline-offset-2 decoration-purple-500"}">wand</span>
                and watch the <span class="${"text-white font-bold underline underline-offset-2 decoration-purple-500"}">magic</span> unfold!
            </p></header>
        ${slots.default ? slots.default({}) : ``}</div></div>`;
});
