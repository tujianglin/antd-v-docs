---
outline: deep
---

# Rate

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 代码演示

### 基本

<demo vue="rate/basic.vue"></demo>

### 半星

<demo vue="rate/half.vue"></demo>

### 文案展现

<demo vue="rate/text.vue"></demo>

### 只读

<demo vue="rate/disabled.vue"></demo>

### 清除

<demo vue="rate/clear.vue"></demo>

### 其他字符

<demo vue="rate/character.vue"></demo>

### 自定义字符

<demo vue="rate/character-function.vue"></demo>

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | boolean | true |  |
| allowHalf | 是否允许半选 | boolean | false |  |
| autofocus | 自动获取焦点 | boolean | false |  |
| character | 自定义字符 | VNode \| (RateProps) => VNode | &lt;StarFilled /> | function(): 4.4.0 |
| class | 自定义样式类名 | string | - |  |
| count | star 总数 | number | 5 |  |
| disabled | 只读，无法进行交互 | boolean | false |  |
| keyboard | 支持使用键盘操作 | boolean | true | 5.18.0 |
| style | 自定义样式对象 | CSSProperties | - |  |
| tooltips | 自定义每项的提示信息 | [] \| string\[] | - |  |
| value(v-model) | 当前数，受控值 | number | - |  |
| onBlur | 失去焦点时的回调 | function() | - |  |
| onChange | 选择时的回调 | function(value: number) | - |  |
| onFocus | 获取焦点时的回调 | function() | - |  |
| onHoverChange | 鼠标经过时数值变化的回调 | function(value: number) | - |  |
| onKeyDown | 按键回调 | function(event) | - |  |

## 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
