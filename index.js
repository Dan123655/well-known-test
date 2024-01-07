const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");
// const httpsOptions = {
//   key: fs.readFileSync("./security/cert.key"),
//   cert: fs.readFileSync("./security/cert.pem"),
// };
app.get("/", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>WNT</title>
    <meta property="al:android:app_name" content="Motorcyclist Map" />
    <meta property="al:android:package" content="com.map.motorcyclistmap.com" />
    <meta property="al:android:url" content="motorcyclistmap://" />
    <meta property="al:ios:app_name" content="Motorcyclist Map" />
    <meta property="al:ios:app_store_id" content="1618783783" />
    <meta property="al:ios:url" content="motorcyclistmap://" />
    <meta property="al:web:should_fallback" content="false">
    <!-- Additional OG tags as needed -->
  </head>
  <body>
    <h1>I serve well-knows files and applinks in head/</h1>
  </body>
  </html>
`);
});
// app.get("/.well-known/assetlinks.json", (req, res) => {
//   console.log("assetlinks.json");
//   res.json([
//     {
//       relation: ["delegate_permission/common.handle_all_urls"],
//       target: {
//         namespace: "android_app",
//         package_name: "com.mapotic.adresarfarmaru",
//         sha256_cert_fingerprints: [
//           "0C:42:66:F3:D8:0B:BE:F3:E2:0C:8C:4F:B5:2C:0E:34:C9:6C:04:8A:A2:34:99:5E:45:E9:AD:44:BA:06:E1:6C",
//         ],
//       },
//     },
//   ]);
// });
app.get("/.well-known/assetlinks.json", (req, res) => {
  console.log("assetlinks.json");
  res.json([
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.map.motorcyclistmap.com",
        sha256_cert_fingerprints: [
          "7B:6A:92:33:27:FE:F6:E8:14:E0:D9:66:73:9F:C9:04:6B:75:30:77:94:13:84:13:5F:96:77:7B:BF:30:B4:94",
          "48:4F:E8:58:F4:3F:4F:3B:A2:FA:0D:82:55:8B:F9:7A:86:1B:A6:8A:C5:AD:00:6E:DF:29:B1:FC:20:3E:CB:5F",
        ],
      },
    },
  ]);
});

app.get("/.well-known/apple-app-site-association", (req, res) => {
  // Set content type to application/json
  res.setHeader("Content-Type", "application/json");

  // Read the file and send it as the response
  const aasaFilePath = path.join(
    __dirname,
    "./.well-known/apple-app-site-association"
  );
  const aasaFileContent = fs.readFileSync(aasaFilePath, "utf8");
  res.status(200).send(aasaFileContent);
});

app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`);
});
