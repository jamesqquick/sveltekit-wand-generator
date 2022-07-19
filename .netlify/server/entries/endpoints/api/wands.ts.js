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
  GET: () => GET,
  POST: () => POST
});
module.exports = __toCommonJS(stdin_exports);
var import_config = require("dotenv/config");
var import_client = require("@prisma/client");
const prisma = new import_client.PrismaClient();
async function GET() {
  const wands = await prisma.wand.findMany({});
  return {
    status: 200,
    body: { data: wands }
  };
}
const POST = async (event) => {
  const { id, wood, core, length, maker, flexibility } = await event.request.json();
  const newWand = await prisma.wand.create({
    data: { id, wood, core, length, maker, flexibility }
  });
  return {
    status: 200,
    body: { message: "Created successfully", data: newWand }
  };
};
