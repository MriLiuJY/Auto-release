const express = require('express');
const process = require('child_process');
const app = express();

// webhook 做自动化发布
app.get("", () => {
  process.exec('pm2 deploy ecosystem.json servers', function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))