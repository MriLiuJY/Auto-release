const fs = require('fs');
const readline = require('readline');
const cp = require("child_process");
const { resolve } = require("path");

var scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(title, cb) {
    function ask() {
        scanner.question(title + ':\n', text => cb(text, ask))
    }
    ask();
}
var config = {};
prompt('project的入口文件地址', (script, ask) => {
  if (!script) { return ask() }
  config.script = script;

  prompt('请输入project在server运行任务名称', (name, ask) => {
    if (!name) { return ask() }
    config.name = name;

    prompt('请输入project在server的地址', (path, ask) => {
      if (!path) { return ask() }
      config.path = path;

      prompt('请输入服务器IP', (host, ask) => {
        if (!host) { return ask() }
        config.host = host;

        prompt('git仓库地址', (repo, ask) => {
          if (!repo) { return ask() }
          config.repo = repo;

          prompt('需发布的git分支', (ref, ask) => {
            if (!ref) { return ask() }
            config.ref = ref;
            fs.writeFile('./config.json', JSON.stringify(config), e => {
              console.info('配置已保存');

              ;(async () => {
                const script = resolve(__dirname, "./src/index");
                const child = cp.fork(script, []);

                child.on("message", data => {
                  if (data.status === "success") {
                    process.exit(0);
                  }
                })
              })();
              
            })
          });
        });
      });
    });
  });
});
