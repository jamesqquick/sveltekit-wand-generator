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
  default: () => U5Bidu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62012ddc = require("../../../immutable/chunks/index-62012ddc.js");
var import_url_gen = require("@cloudinary/url-gen");
var import_WandDetails_2e22ece0 = require("../../../immutable/chunks/WandDetails-2e22ece0.js");
var import_source = require("@cloudinary/url-gen/qualifiers/source");
var import_overlay = require("@cloudinary/url-gen/actions/overlay");
var import_textStyle = require("@cloudinary/url-gen/qualifiers/textStyle");
var import_qualifiers = require("@cloudinary/url-gen/qualifiers");
var import_gravity = require("@cloudinary/url-gen/qualifiers/gravity");
async function load({ params: { id }, fetch }) {
  const response = await fetch(`/api/wands/${id}`);
  const { data: wand } = await response.json();
  return { props: { wand } };
}
const U5Bidu5D = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { wand } = $$props;
  const cloudinary = new import_url_gen.Cloudinary({
    cloud: { cloudName: import_WandDetails_2e22ece0.v.cloudinaryCloudName }
  });
  let imageUrl = cloudinary.image("sk-wand-generator/base.png").overlay((0, import_overlay.source)((0, import_source.text)(wand.core, new import_textStyle.TextStyle("Poppins", 26)).textColor("black")).position(new import_qualifiers.Position().gravity((0, import_gravity.compass)("west")).offsetY(-40).offsetX(370))).overlay((0, import_overlay.source)((0, import_source.text)(wand.wood, new import_textStyle.TextStyle("Poppins", 26)).textColor("black")).position(new import_qualifiers.Position().gravity((0, import_gravity.compass)("west")).offsetY(16).offsetX(370))).overlay((0, import_overlay.source)((0, import_source.text)(wand.flexibility, new import_textStyle.TextStyle("Poppins", 26)).textColor("black")).position(new import_qualifiers.Position().gravity((0, import_gravity.compass)("west")).offsetY(74).offsetX(370))).overlay((0, import_overlay.source)((0, import_source.text)(wand.length.toString(), new import_textStyle.TextStyle("Poppins", 32)).textColor("black")).position(new import_qualifiers.Position().gravity((0, import_gravity.compass)("west")).offsetY(130).offsetX(370))).overlay((0, import_overlay.source)((0, import_source.text)(wand.maker, new import_textStyle.TextStyle("Poppins", 26)).textColor("black")).position(new import_qualifiers.Position().gravity((0, import_gravity.compass)("west")).offsetY(186).offsetX(370))).toURL();
  console.log(imageUrl);
  if ($$props.wand === void 0 && $$bindings.wand && wand !== void 0)
    $$bindings.wand(wand);
  return `${$$result.head += `<meta property="${"og:title"}" content="${"My SvelteKit Wand"}" data-svelte="svelte-1l09hjo"><meta property="${"og:url"}"${(0, import_index_62012ddc.a)("content", `${import_WandDetails_2e22ece0.v.basePath}/wands/${wand.id}`, 0)} data-svelte="svelte-1l09hjo"><meta property="${"og:image"}"${(0, import_index_62012ddc.a)("content", imageUrl, 0)} data-svelte="svelte-1l09hjo"><meta name="${"twitter:image"}"${(0, import_index_62012ddc.a)("content", imageUrl, 0)} data-svelte="svelte-1l09hjo">`, ""}
    ${(0, import_index_62012ddc.v)(import_WandDetails_2e22ece0.W, "WandDetails").$$render($$result, { wand }, {}, {})}
    <h2 class="${"text-white text-4xl text-center underline"}"><a href="${"/"}">Generate your own wand!</a></h2>`;
});
