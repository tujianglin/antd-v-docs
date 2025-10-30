---
outline: deep
---

# Breadcrumb

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## 代码演示

### 基本

<demo vue="breadcrumb/basic.vue"></demo>

### 带有图标的

<demo vue="breadcrumb/withIcon.vue"></demo>

### 带有参数的

<demo vue="breadcrumb/withParams.vue"></demo>

### 分隔符

<demo vue="breadcrumb/separator.vue"></demo>

### 带下拉菜单的面包屑

<demo vue="breadcrumb/overlay.vue"></demo>

### 独立的分隔符

<demo vue="breadcrumb/separator-component.vue"></demo>

### 自定义语义结构样式

<demo vue="breadcrumb/style-class.vue"></demo>

## API

### Breadcrumb

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classNames | 为组件内部各语义结构自定义类名，支持对象或函数 | [Record<SemanticDOM, string> \| (info: { props }) => Record<SemanticDOM, string>](#semantic-dom) | - |  |
| itemRender | 自定义链接函数，和 vue-router 配置使用 | (route, params, routes, paths) => VNode | - |  |
| params | 路由的参数 | object | - |  |
| items | 路由栈信息 | [items\[\]](#itemtype) | - | 5.3.0 |
| separator | 分隔符自定义 | VNode | `/` |  |
| styles | 为组件内部各语义结构自定义内联样式，支持对象或函数 | [Record<SemanticDOM, CSSProperties> \| (info: { props }) => Record<SemanticDOM, CSSProperties>](#semantic-dom) | - |  |

### ItemType

> type ItemType = Omit<[RouteItemType](#routeitemtype), 'title' | 'path'> | [SeparatorType](#separatortype)

### RouteItemType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 自定义类名 | string | - |  |
| dropdownProps | 弹出下拉菜单的自定义配置 | [Dropdown](/components/dropdown-cn) | - |  |
| href | 链接的目的地，不能和 `path` 共用 | string | - |  |
| path | 拼接路径，每一层都会拼接前一个 `path` 信息。不能和 `href` 共用 | string | - |  |
| menu | 菜单配置项 | [MenuProps](/components/menu-cn/#api) | - | 4.24.0 |
| onClick | 单击事件 | (e:MouseEvent) => void | - |  |
| title | 名称 | VNode | - | 5.3.0 |

### SeparatorType

```ts
const item = {
  type: 'separator', // Must have
  separator: '/',
};
```

| 参数      | 说明           | 类型        | 默认值 | 版本  |
| --------- | -------------- | ----------- | ------ | ----- |
| type      | 标记为分隔符   | `separator` |        | 5.3.0 |
| separator | 要显示的分隔符 | VNode   | `/`    | 5.3.0 |
