# create-react-app 的qiankun微应用方案


## 安装依赖

```bash
cd main && yarn

cd ../app1 && yarn

cd ../app2 && yarn
```
## 启动
```bash
npm run start
```

主应用main(默认启动)

open http://localhost:3000

app1
http://localhost:3001

app2
http://localhost:3002

## 打包

```bash
npm run build
```
> 此部署方案为应用单独部署
> 主应用需nginx代理 具体见nginx.conf
> 微应用则直接使用即可

## 因使用browser路由 打包后需要nginx配置解决刷新 404 的问题
