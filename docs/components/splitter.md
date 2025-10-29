---
outline: deep
---

# Splitter

## 何时使用

- 可以水平或垂直地分隔区域。
- 当需要自由拖拽调整各区域大小。
- 当需要指定区域的最大最小宽高时。

## 代码演示

### 基本用法

<demo vue="splitter/size.vue"></demo>

### 受控模式

<demo vue="splitter/control.vue"></demo>

### 垂直方向

<demo vue="splitter/vertical.vue"></demo>

### 可折叠

<demo vue="splitter/collapsible.vue"></demo>

### 可折叠图标显示

<demo vue="splitter/collapsibleIcon.vue" version="5.27.0"></demo>

### 多面板

<demo vue="splitter/multiple.vue"></demo>

### 复杂组合

<demo vue="splitter/group.vue"></demo>

### 延迟渲染模式

<demo vue="splitter/lazy.vue" version="5.23.0"></demo>

## API

> Splitter 组件需要通过子元素计算面板大小，因而其子元素仅支持 `Splitter.Panel`。

### Splitter

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classNames | 语义化结构 class | [Record<SemanticDOM, string>](#semantic-dom) | - | 6.0.0 |
| collapsibleIcon | 折叠图标 | `{start?: VNode; end?: VNode}` | - | 6.0.0 |
| draggerIcon | 拖拽图标 | `VNode` | - | 6.0.0 |
| lazy | 延迟渲染模式 | `boolean` | `false` | 5.23.0 |
| orientation | 布局方向 | `horizontal` \| `vertical` | `horizontal` | - |
| styles | 语义化结构 style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 6.0.0 |
| vertical | 排列方向，与 `orientation` 同时存在，以 `orientation` 优先 | boolean | `false` |  |
| onResize | 面板大小变化回调 | `(sizes: number[]) => void` | - | - |
| onResizeEnd | 拖拽结束回调 | `(sizes: number[]) => void` | - | - |
| onResizeStart | 开始拖拽之前回调 | `(sizes: number[]) => void` | - | - |

### Panel

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| collapsible | 快速折叠 | `boolean \| { start?: boolean; end?: boolean; showCollapsibleIcon?: boolean \| 'auto' }` | `false` | showCollapsibleIcon: 5.27.0 |
| defaultSize | 初始面板大小，支持数字 px 或者文字 '百分比%' 类型 | `number \| string` | - | - |
| max | 最大阈值，支持数字 px 或者文字 '百分比%' 类型 | `number \| string` | - | - |
| min | 最小阈值，支持数字 px 或者文字 '百分比%' 类型 | `number \| string` | - | - |
| resizable | 是否开启拖拽伸缩 | `boolean` | `true` | - |
| size | 受控面板大小，支持数字 px 或者文字 '百分比%' 类型 | `number \| string` | - | - |
