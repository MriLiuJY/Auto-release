# FE auto release

前端自动化发布工具，依赖 `pm2` 自动化发布，监听 `git` 仓库 `webhook` 触发自动化发布。

## 准备

全局安装 `sudo npm install pm2 -g`

配置服务器**免密**登陆

## 使用

future: `npm install gt-auto-release`

future: `node ./node_modules/gt-auto-release/index.js`

根据提示在项目根目录中产生了 `scosystem.json` 之后

在项目根目录下执行 `pm2 startOrRestart ecosystem.json --env production setup`

## 发布

可以在git仓库下设置 `webhook` 触发的模式， 之后git仓库的提交便会自动化发布。

## Future

自动化发布node项目的时候解决 `webhook` 的接口的问题（如何将接口逻辑注入到项目中）。
