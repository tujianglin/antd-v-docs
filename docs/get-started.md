---
outline: deep
search: false
next:
  link: /components/button
  text: Button 按钮
---

# 最新 Vue3 + TS 高仿 Antd 打造自己的组件库

- 主题之类的和官网一致

## 安装

```bash
pnpm add antd-v
```

## 多语言

```ts
import zhCN from 'antd-v/locale/zh_CN'
```

## 未开发组件
- 除了以下三个组件, 其他的组件都已开发完成, 可以直接在antd-v引入, 文档编写稍微慢.

### Form
- 可以基于以下两个Form校验库, 封装自己的 JSON Schema 表单组件
[TanStack-Form](https://tanstack.com/form/latest/docs/overview)
[VeeValidate](https://vee-validate.logaretm.com/v4/guide/overview/)

### Table
- 就目前我开发这么久,大部分组件库表格功能或多或少都有缺失,自己扩展相对麻烦,但是下面的还行,就是迭代版本bug过多不稳定,使用时记得固定版本
- 它支持替换 SearchForm 查询区域的组件, 比如你 Form 封装完可以替换它的查询
[vxe-table](https://vxetable.cn/#/demo/list)

- 这个自己写就相对复杂但是可控性大
[TanStack-Table](https://tanstack.com/table/latest/docs/introduction)

- 项目里我有使用过, 性能没话说,就是调整 ui 相对麻烦, 因为他是 canvas 渲染的, 
[VTable](https://visactor.io/vtable/example)

### Carousel
- 没啥好说的, 更新稳定, 功能强大.
[Swiper-Vue](https://swiper.js.cn/vue)

## 群
:::info
大家有兴趣，欢迎加群交流. 因为原作者貌似不维护了,没办法,喜欢这个风格,自己就用下班时间1:1同步了.
后续完善好, 会开源
:::
<img src="/qrcode.jpg" width="200" />

