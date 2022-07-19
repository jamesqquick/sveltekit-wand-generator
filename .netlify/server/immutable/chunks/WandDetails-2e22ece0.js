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
  W: () => WandDetails,
  v: () => variables
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62012ddc = require("./index-62012ddc.js");
const variables = {
  basePath: "localhost:3000",
  cloudinaryCloudName: "jamesqquick"
};
const woods = [
  "Acacia",
  "Alder",
  "Apple",
  "Ash",
  "Aspen",
  "Beech",
  "Blackthorn",
  "Black Walnut",
  "Cedar",
  "Cherry",
  "Chestnut",
  "Cypress",
  "Dogwood",
  "Ebony",
  "English oak",
  "Elder",
  "Elm",
  "Fir",
  "Hawthorn",
  "Hazel",
  "Holly",
  "Hornbeam",
  "Larch",
  "Laurel",
  "Maple",
  "Pear",
  "Pine",
  "Poplar",
  "Red oak",
  "Redwood",
  "Reed",
  "Rosewood",
  "Rowan",
  "Silver lime",
  "Spruce",
  "Snakewood",
  "Sugar Maple",
  "Sycamore",
  "Tamarack",
  "Vine",
  "Walnut",
  "Willow",
  "Yew"
];
const cores = [
  "Unicorn hair",
  "Dragon heartstring",
  "Phoenix feather",
  "Veela hair",
  "Thestral tail hair",
  "Troll whisker",
  "Kelpie hair",
  "Thunderbird tail feather",
  "Wampus cat hair",
  "White River Monster spine",
  "Rougarou hair",
  "Kneazle whiskers",
  "Horned Serpent horn",
  "Snallygaster heartstring",
  "Jackalope antler",
  "Basilisk horn"
];
const makers = [
  "Cosme Acajor",
  "Violetta Beauvais",
  "Arturo Cephalopos",
  "Death",
  "Mykew Gregorovitch",
  "Johannes Jonker",
  "Jimmy Kiddell",
  "Antioch Peverell",
  "Geraint Ollivander",
  "Gerbold Ollivander",
  "Gervaise Ollivander",
  "Garrick Ollivander",
  "Thiago Quintana",
  "Shikoba Wolfe",
  "Isolt Sayre",
  "James Steward",
  "Salazar Slytherin"
];
const lengths = [
  10,
  10.25,
  10.5,
  10.75,
  11,
  11.25,
  11.5,
  11.75,
  11,
  11.25,
  11.5,
  11.75,
  12,
  12.25,
  12.5,
  12.75,
  13,
  13.25,
  13.5,
  13.75,
  14,
  14.25,
  14.5,
  14.75,
  15,
  15.25,
  15.5,
  15.75,
  16,
  16.25,
  16.5,
  16.75,
  17,
  17.25,
  17.5,
  17.75,
  18,
  18.25,
  18.5,
  18.75,
  19,
  19.25,
  19.5,
  19.75
];
const flexibilities = [
  "Very flexible",
  "Quite flexible",
  "Surprisingly swishy",
  "Swishy",
  "Quite bendy",
  "Fairly bendy",
  "Whippy",
  "Pliant",
  "Supple",
  "Reasonably supple",
  "Slightly springy",
  "Slightly yielding",
  "Solid",
  "Stiff",
  "Hard",
  "Rigid",
  "Unbending",
  "Unyielding",
  "Brittle"
];
const propertiesConfigArr = [
  { name: "core", dataArray: cores },
  { name: "wood", dataArray: woods },
  { name: "flexibility", dataArray: flexibilities },
  { name: "length", dataArray: lengths },
  { name: "maker", dataArray: makers }
];
const WandDetails = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { wand } = $$props;
  if ($$props.wand === void 0 && $$bindings.wand && wand !== void 0)
    $$bindings.wand(wand);
  return `<div class="${"flex flex-col gap-4 my-10 bg-gray-700 p-8 border-4 rounded-md border-yellow-500 "}">${(0, import_index_62012ddc.b)(propertiesConfigArr, (property) => {
    return `<div class="${"h-10 flex items-center gap-4"}"><span class="${"w-40 text-gray-400 text:lg md:text-xl"}">${(0, import_index_62012ddc.e)(property.name.toUpperCase())}: </span>
			<span class="${"font-bold h-10 w-full p-1 px-4 bg-blue-500 text-black text-xl md:text-2xl"}">${(0, import_index_62012ddc.e)(wand[property.name])}</span>
		</div>`;
  })}</div>`;
});
