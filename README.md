## 基础环境
 - [前置环境（Nodejs）](https://www.yuque.com/react-lxgph/gvf5oy/gaenz1u1xoe1e0g0?singleDoc#%20《Npm镜像管理与设置》)
- [Nest 官方文档](https://docs.nestjs.com/)       **<font style="color:#DF2A3F;">Chrome 插件进行翻译无障碍阅读</font>**

![](https://cdn.nlark.com/yuque/0/2025/png/23174374/1753003227326-cd803881-502b-49f5-9439-b9018463f4d8.png)  

## 项目创建
```javascript
// 全局安装 cli
npm i -g @nestjs/cli

// 创建项目
nest new project-name
```

## 目录结构介绍
```javascript
├── dist // 打包资源目录
├── node_modules  // 依赖
├── package.json  // 依赖版本及启动构建命令文件
├── pnpm-lock.yaml  // 依赖锁定 让其他开发者能够顺利运行
├── README.md // 介绍
├── src // 源码文件
│   ├── app.controller.ts  // 根控制文件，处理路由的请求和路由处理器
│   ├── app.module.ts   // 根模块文件 Nest 应用主要入口
│   ├── app.service.ts  // 根服务文件 处理控制器中的业务逻辑
│   └── main.ts  // 入口文件
├── test  // test 相关
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json
└── .prettierrc
└── .eslintrc  // eslint 配置文件
└── .gitignore  // git 忽略文件


app.controller.spec.ts  // 具有单个路由的基本控制器。
app.controller.ts // 控制器的单元测试
app.module.ts // 应用程序的根模块
app.service.ts // 具有单一方法的基本服务
main.ts // 使用核心函数 NestFactory 创建 Nest 应用程序实例的应用程序的入口文件
```

## main.ts
要创建 Nest 应用程序实例，我们使用核心 **NestFactory** 类。**NestFactory** 公开了一些允许创建应用程序实例的静态方法。create（） 方法返回一个应用程序对象，该对象满足 **INestApplication** 接口。此对象提供了一组方法，这些方法将在接下来的章节中介绍。在上面 main.ts 示例中，我们只需启动 HTTP 侦听器，即可让应用程序等待入站 HTTP 请求

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // 全局路由前缀
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

## tsconfig.json
```json
{
  "compilerOptions": {
    // 指定生成的模块系统代码格式， commonjs 是 Node.js 默认的模块规范，使用 require() 和 module.exports 进行模块导入导出。
    "module": "commonjs",
    
    // 启用后，编译器会为每个 .ts 文件生成对应的 .d.ts 类型声明文件，方便其他项目引用时获得类型提示。
    "declaration": true,

    // 编译时移除所有注释，减少输出文件体积，保持代码整洁
    "removeComments": true,

    // 为装饰器发射元数据，需与 experimentalDecorators 配合使用，常用于依赖注入（如 NestJS）
    "emitDecoratorMetadata": true,

    // 启用实验性的装饰器特性，允许使用 @Decorator 语法（NestJS 的核心特性之一）
    "experimentalDecorators": true,

    // 允许从没有显式默认导出的模块中使用默认导入（如 import React from 'react' ）
    "allowSyntheticDefaultImports": true,

    // 指定编译后的 JavaScript 代码兼容的 ECMAScript 版本，这里 targeting ES2021 特性
    "target": "ES2021",

    // 生成 source map 文件，映射编译后的 JS 代码到原始 TS 代码，便于调试。
    "sourceMap": true,

    // 指定编译输出目录，所有编译后的文件会放在 dist 文件夹中
    "outDir": "./dist",

    // 设置模块解析的基准目录，非相对路径的模块会基于此目录查找。
    "baseUrl": "./",

    // 启用增量编译，只重新编译修改过的文件，大幅提升编译速度
    "incremental": true,  
    
    // 跳过对库文件（如 node_modules 中的 .d.ts ）的类型检查，加快编译速度
    "skipLibCheck": true,  

    // 关闭严格空值检查，允许 null / undefined 赋值给任何类型（关闭严格模式）
    "strictNullChecks": false,

    // 允许变量隐式推断为 any 类型，不强制显式类型声明（关闭严格模式）。
    "noImplicitAny": false,

    // 关闭对 bind / call / apply 方法参数的严格类型检查（关闭严格模式）。
    "strictBindCallApply": false,

    // 不强制文件名大小写一致，允许导入时大小写不敏感（可能导致跨平台问题）。
    "forceConsistentCasingInFileNames": false,

    // 允许 switch 语句中 case 分支穿透（不强制每个 case 必须有 break ）
    "noFallthroughCasesInSwitch": false
  }
}

```



## 常用命令
```bash
# 生成 module
nest generate module user

# 生成 controller
nest generate controller user

# 生成 service
nest generate service user


# 同时生成以上三种  以及额外的 dto  entities
nest generate resource user
```

## Nest 控制器
### @Request()
- 请求参数
```javascript
import { Controller, Get, Request, Query } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello(@Request() request) {
    console.log(request.query, '==前端传递过来的参数从request.query中获取==');
    return {
      code: 0,
      msg: 'success',
      data: {
        name: 'hello nest',
      },
    };
  }
}
```

### @Response()
- 响应参数

### @Query()
- `**Get**` 请求直接获取参数

```javascript
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(@Query() request) {
    console.log(request.keyword, '==直接通过获取query==');
    return {
      code: 0,
      msg: 'success',
      data: {
        name: 'hello nest',
      },
    };
  }
}
```

### @Body()
- `**Post**` 请求直接获取参数

```javascript
import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // Post请求在 body 中获取  Request 和 Body 都可以获取到
  @Post()
  postHello(@Body() request) {
    return {
      code: 0,
      msg: 'success',
      data: {
        name: 'ceshi',
      },
    };
  }
}

```

### @Param()
- 动态路由获取参数

```javascript
import { Body, Controller, Get, Post, Request, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  // getParams(@Param('id') id) { // 1. 直接获取对应的参数
  getParams(@Param() params) { 
    // console.log(id, '==id==');
    console.log(params.id, '==params.id==');
    return {
      code: 0,
      msg: 'success',
      data: {
        name: 'hello nest',
      },
    };
  }
}
```

### @Headers()
- 获取 `**header**` 信息

```javascript
import { Controller, Get, Param, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get(':id')
  getParams(@Param() id, @Headers() headers) {
    console.log(id, '==id==');
    console.log(headers, '==headers==');
    return {
      code: 0,
      msg: 'success',
      data: {
        name: 'hello nest',
      },
    };
  }
}

```

### @HttpCode()
- 控制器返回的状态码

```javascript
import {
  Body,
  Controller,
  Get,
  Param,
  Headers,
  HttpCode,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get(':id')
  @HttpCode(200)
  getParams(@Param() id, @Headers() headers) {
    console.log(id, '==id==');
    console.log(headers, '==headers==');
    return {
      code: 0,
      msg: 'success',
      data: {
        name: 'hello nest',
      },
    };
  }
}

```

### @Next()
- 继续处理下一个`**中间件**`或`**路由**`

