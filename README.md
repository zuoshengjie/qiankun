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

主应用main（默认打开）

open http://localhost:3000

app1
http://localhost:3001

app2
http://localhost:3002

## 打包

```bash
npm run build
```

> 打包后微应用及主应用文件在根目录build文件夹 直接使用即可

## 因使用history路由 打包后需要nginx配置解决刷新 404 的问题 具体配置见nginx.conf
