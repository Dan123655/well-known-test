const {
  MAIN_HTML,
  PLACE_HTML,
  ASSETLINKS_MOTO,
  APPLE_LINKS,
  PLACE_PATH,
  ASSETLINKS_ROUTE,
  APPLE_LINKS_ROUTE,
  APPLE_FILE_MOTO,
} = require("./consts.js");
const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.type("html").status(200).send(MAIN_HTML);
});

//place page
app.get(PLACE_PATH, (req, res) => {
  res.type("html").status(200).send(PLACE_HTML);
});

//adnroid well knowns
app.get(ASSETLINKS_ROUTE, (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(ASSETLINKS_MOTO);
});

//apple well knowns
app.get(APPLE_LINKS_ROUTE, (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(APPLE_FILE_MOTO);
});

app.listen(port, () => {
  console.log(`IT'S OVER ${port} !!!`);
});
