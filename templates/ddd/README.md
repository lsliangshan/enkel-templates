# $$PROJECT_NAME$$

#### $$PROJECT_NAME$$ 用函数调用的方式请求接口

> Happy Business 

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
/**
 * DOMAIN_NAME: 领域名称
 * METHOD_NAME: 领域中的方法名
 */
import { METHOD_NAME } from '$$PROJECT_NAME$$/lib/domains/DOMAIN_NAME/service'
```

### 3. 调用方法
```
METHOD_NAME()
```