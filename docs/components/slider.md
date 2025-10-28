---
outline: deep
---

# Slider

## 何时使用

当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。

## 代码演示

### 基本

<Code src="slider/basic.vue">基本</Code>

### 带输入框的滑块

<Code src="slider/input-number.vue">带输入框的滑块</Code>

### 带 icon 的滑块

<Code src="slider/icon-slider.vue">带 icon 的滑块</Code>

### 自定义提示

<Code src="slider/tip-formatter.vue">自定义提示</Code>

### 事件

<Code src="slider/event.vue">事件</Code>

### 带标签的滑块

<Code src="slider/mark.vue">带标签的滑块</Code>

### 垂直

<Code src="slider/vertical.vue">垂直</Code>

### 控制 ToolTip 的显示

<Code src="slider/show-tooltip.vue">控制 ToolTip 的显示</Code>

### 反向

<Code src="slider/reverse.vue">反向</Code>

### 范围可拖拽

<Code src="slider/draggableTrack.vue">范围可拖拽</Code>

### 多点组合

<Code src="slider/multiple.vue">多点组合</Code>

### 动态增减节点

<Code src="slider/editable.vue" version="5.20.0">动态增减节点</Code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autofocus | 自动获取焦点 | boolean | false |  |
| classNames | 语义化结构 className | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.10.0 |
| disabled | 值为 true 时，滑块为禁用状态 | boolean | false |  |
| keyboard | 支持使用键盘操作 handler | boolean | true | 5.2.0+ |
| dots | 是否只能拖拽到刻度上 | boolean | false |  |
| included | `marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列 | boolean | true |  |
| marks | 刻度标记，key 的类型必须为 `number` 且取值在闭区间 \[min, max] 内，每个标签可以单独设置样式 | object | `{ number: VNode } or { number: { style: CSSProperties, label: VNode } }` |  |
| max | 最大值 | number | 100 |  |
| min | 最小值 | number | 0 |  |
| orientation | 排列方向 | `horizontal` \| `vertical` | `horizontal` |  |
| range | 双滑块模式 | boolean \| [range](#range) | false |  |
| reverse | 反向坐标轴 | boolean | false |  |
| step | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 null，此时 Slider 的可选值仅有 `marks`、`min` 和 `max` | number \| null | 1 |  |
| styles | 语义化结构 styles | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.10.0 |
| tooltip | 设置 Tooltip 相关属性 | [tooltip](#tooltip) | - | 4.23.0 |
| value(v-model) | 设置当前取值。当 `range` 为 false 时，使用 number，否则用 \[number, number] | number \| \[number, number] | - |  |
| vertical | 值为 true 时，Slider 为垂直方向。与 `orientation` 同时存在，以 `orientation` 优先 | boolean | false |  |
| onChangeComplete | 与 `mouseup` 和 `keyup` 触发时机一致，把当前值作为参数传入 | (value) => void | - |  |
| onChange | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入 | (value) => void | - |  |

### range

| 参数           | 说明                                               | 类型    | 默认值 | 版本   |
| -------------- | -------------------------------------------------- | ------- | ------ | ------ |
| draggableTrack | 范围刻度是否可被拖拽                               | boolean | false  |        |
| editable       | 启动动态增减节点，不能和 `draggableTrack` 一同使用 | boolean | false  | 5.20.0 |
| minCount       | 配置 `editable` 时，最小节点数量                   | number  | 0      | 5.20.0 |
| maxCount       | 配置 `editable` 时，最大节点数量                   | number  | -      | 5.20.0 |

### tooltip

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoAdjustOverflow | 是否自动调整弹出位置 | boolean | true | 5.8.0 |
| open | 值为 true 时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时 | boolean | - | 4.23.0 |
| placement | 设置 Tooltip 展示位置。参考 [Tooltip](/components/tooltip-cn) | string | - | 4.23.0 |
| getPopupContainer | Tooltip 渲染父节点，默认渲染到 body 上 | (triggerNode) => HTMLElement | () => document.body | 4.23.0 |
| formatter | Slider 会把当前值传给 `formatter`，并在 Tooltip 中显示 `formatter` 的返回值，若为 null，则隐藏 Tooltip | value => VNode \| null | IDENTITY | 4.23.0 |

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |
