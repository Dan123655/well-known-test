const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
// const httpsOptions = {
//   key: fs.readFileSync("./security/cert.key"),
//   cert: fs.readFileSync("./security/cert.pem"),
// };
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
  res.json({
    applinks: {
      details: [
        {
          appIDs: ["9NPC6A3L6R.com.map.motorcyclistmap.com"],
          components: [
            {
              "/": "*",
              comment: "Matches any URL.",
            },
          ],
        },
      ],
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`);
});
