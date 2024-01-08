const fs = require("fs");
const path = require("path");
const PLACE_PATH = "/1621180-gas-stop-at-vaughn-nm";
const ASSETLINKS_ROUTE = "/.well-known/assetlinks.json";
const APPLE_LINKS_ROUTE = "/.well-known/apple-app-site-association";
const PLACE_HTML = fs.readFileSync(
  path.join(__dirname, "/pages/place_page.html"),
  "utf8"
);
const MAIN_HTML = fs.readFileSync(
  path.join(__dirname, "/pages/main_page.html"),
  "utf8"
);
const ASSETLINKS_MOTO = fs.readFileSync(
  path.join(__dirname, "/.well-known/assetlinks_moto.json"),
  "utf8"
);
const APPLE_FILE_MOTO = fs.readFileSync(
  path.join(__dirname, "/.well-known/apple-app-site-moto"),
  "utf8"
);
const APPLE_FILE_ADRESAR = fs.readFileSync(
  path.join(__dirname, "/.well-known/apple-app-site-adresar"),
  "utf8"
);
module.exports = {
  MAIN_HTML,
  PLACE_HTML,
  ASSETLINKS_MOTO,
  APPLE_FILE_MOTO,
  APPLE_FILE_ADRESAR,
  APPLE_LINKS_ROUTE,
  ASSETLINKS_ROUTE,
  PLACE_PATH,
};
