---
outline: deep
---

# Alert 警告提示

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 代码演示

### 基本

<demo vue="alert/basic.vue"></demo>

### 四种样式

<demo vue="alert/style.vue"></demo>

### 可关闭的警告提示

<demo vue="alert/closable.vue"></demo>

### 含有辅助性文字介绍

<demo vue="alert/description.vue"></demo>

### 图标

<demo vue="alert/icon.vue"></demo>

### 顶部公告

<demo vue="alert/banner.vue" iframe="250"></demo>

### 平滑地卸载

<demo vue="alert/smooth-closed.vue"></demo>

### 操作

<demo vue="alert/action.vue"></demo>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| action | 自定义操作项 | VNode | - | 4.9.0 |
| banner | 是否用作顶部公告 | boolean | false |  |
| closable | 可关闭配置，>=5.15.0: 支持 `aria-*` | boolean \| [ClosableType](#closabletype) & AriaAttributes | `false` |  |
| description | 警告提示的辅助性文字介绍 | VNode | - |  |
| icon | 自定义图标，`showIcon` 为 true 时有效 | VNode | - |  |
| title | 警告提示内容 | VNode | - |  |
| showIcon | 是否显示辅助图标 | boolean | false，`banner` 模式下默认值为 true |  |
| type | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error` | string | `info`，`banner` 模式下默认值为 `warning` |  |

### ClosableType

| 参数       | 说明                         | 类型                    | 默认值 | 版本 |
| ---------- | ---------------------------- | ----------------------- | ------ | ---- |
| afterClose | 关闭动画结束后触发的回调函数 | function                | -      | -    |
| closeIcon  | 自定义关闭图标               | VNode                   | -      | -    |
| onClose    | 关闭时触发的回调函数         | (e: MouseEvent) => void | -      | -    |

### Alert.ErrorBoundary

| 参数        | 说明                                         | 类型  | 默认值 | 版本 |
| ----------- | -------------------------------------------- | ----- | ------ | ---- |
| description | 自定义错误内容，如果未指定会展示报错堆栈     | VNode |        |      |
| title       | 自定义错误标题，如果未指定会展示原生报错信息 | VNode |        |      |
