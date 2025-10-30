---
outline: deep
---

# Divider 分割线

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 代码演示

### 水平分割线

<demo vue="divider/horizontal.vue"></demo>

### 带文字的分割线

<demo vue="divider/with-text.vue"></demo>

### 设置分割线的间距大小

<demo vue="divider/size.vue" version="5.25.0"></demo>

### 分割文字使用正文样式

<demo vue="divider/plain.vue"></demo>

### 垂直分割线

<demo vue="divider/vertical.vue"></demo>

### 变体

<demo vue="divider/variant.vue"></demo>

### 自定义语义结构样式

<demo vue="divider/style-class.vue" version="6.0.0"></demo>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| children | 嵌套的标题 | ReactNode | - |  |
| class | 分割线样式类 | string | - |  |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM], string> \| (info: { props })=> Record<[SemanticDOM], string> | - |  |
| dashed | 是否虚线 | boolean | false |  |
| orientation | 水平或垂直类型 | `horizontal` \| `vertical` | `horizontal` | - |
| plain | 文字是否显示为普通正文样式 | boolean | false | 4.2.0 |
| style | 分割线样式对象 | CSSProperties | - |  |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM], CSSProperties> \| (info: { props })=> Record<[SemanticDOM], CSSProperties> | - | 5.4.0 |
| size | 间距大小，仅对水平布局有效 | `small` \| `middle` \| `large` | - | 5.25.0 |
| titlePlacement | 分割线标题的位置 | `start` \| `end` \| `center` | `center` | - |
| variant | 分割线是虚线、点线还是实线 | `dashed` \| `dotted` \| `solid` | solid | 5.20.0 |
| vertical | 是否垂直，和 orientation 同时配置以 orientation 优先 | boolean | false | - |
