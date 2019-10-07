# $$PROJECT_NAME$$

## 安装依赖
```
yarn install
```

## 运行单元测试
```
yarn run test
```

## 使用

### 1. 初始化
```
import { INIG } from '$$PROJECT_NAME$$'

INIG({
  options: {
    // 公共参数
  },
  isServer: false, // 是否为服务端渲染环境
  isTest: false // 是否为测试环境
})
```

### 2. 按需导入方法
```
import { METHOD_NAME } from '$$PROJECT_NAME$$'
```

### 3. 调用方法
```
METHOD_NAME()
```