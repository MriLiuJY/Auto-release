const normal = require("./ecosystem.config");
const user = require("../config.json");

const fs = require('fs');

// 设置name
normal.apps[0].name = user.name;
delete user['name'];
normal.apps[0].script = user.script;
delete user['script'];

// 设置deploy
Object.assign(normal.deploy.production, user);

const path = __dirname + "ecosystem.json"

fs.writeFile(path, JSON.stringify(normal), err => {
  console.log(normal);
  const data = {
    status: "success"
  };
  process.send(data);
});
