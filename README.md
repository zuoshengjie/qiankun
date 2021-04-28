# create-react-app 的qiankun微应用方案


## 安装依赖及启动

```bash
cd main && yarn && yarn start 

cd ../app1 && yarn && yarn start

cd ../app2 && yarn && yarn start
```

主应用main
open http://localhost:3000

app1
http://localhost:3001

app2
http://localhost:3002

## 打包

```bash
cd main && npm run build

cd ../app1 && npm run build

cd ../app2 && npm run build
```

## 因使用browser路由 打包后需要nginx配置解决刷新 404 的问题
