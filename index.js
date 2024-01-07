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
app.get("/1621180-gas-stop-at-vaughn-nm", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>WNT</title>
    <meta property="al:android:app_name" content="Motorcyclist Map" />
    <meta property="al:android:package" content="com.map.motorcyclistmap.com" />
    <meta property="al:android:url" content="motorcyclistmap://1621180-gas-stop-at-vaughn-nm" />
    <meta property="al:ios:app_name" content="Motorcyclist Map" />
    <meta property="al:ios:app_store_id" content="1618783783" />
    <meta property="al:ios:url" content="motorcyclistmap://1621180-gas-stop-at-vaughn-nm" />
    <meta property="og:title" content="1621180-gas-stop-at-vaughn-nm" />
    <meta property="og:url" content="https://motorcyclistmap.com/1621180-gas-stop-at-vaughn-nm" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://scontent.fprg4-1.fna.fbcdn.net/v/t39.30808-6/356064505_238107928975203_836527478567241382_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=TKWXCToAxqkAX91R71S&_nc_ht=scontent.fprg4-1.fna&oh=00_AfC1xNfcPOP9XSxNKFORYpLu75T-Q6miV8lJCpPuF6zy9g&oe=659FBA15" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:site_name" content="Motorcyclist Map" />
    <meta property="og:description" content="Find out the best place to do moto things and stuff wroom wroom" />
  </head>
  <body>
    <h1>I serve well-knows files and applinks in head/</h1>
    <br />
    try opening in app:
    <a href="motorcyclistmap://1621180-gas-stop-at-vaughn-nm">open place 1621180 in app for free</a>

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
