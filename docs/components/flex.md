---
outline: deep
---

# Flex

## 何时使用

- 适合设置元素之间的间距。
- 适合设置各种水平、垂直对齐方式。

### 与 Space 组件的区别

- Space 为内联元素提供间距，其本身会为每一个子元素添加包裹元素用于内联对齐。适用于行、列中多个子元素的等距排列。
- Flex 为块级元素提供间距，其本身不会添加包裹元素。适用于垂直或水平方向上的子元素布局，并提供了更多的灵活性和控制能力。

## 代码演示

### 基本布局

<demo vue="flex/basic.vue"></demo>

### 对齐方式

<demo vue="flex/align.vue"></demo>

### 设置间隙

<demo vue="flex/gap.vue"></demo>

### 自动换行

<demo vue="flex/wrap.vue"></demo>

### 组合使用

<demo vue="flex/combination.vue"></demo>

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| vertical | flex 主轴的方向是否垂直，使用 `flex-direction: column` | boolean | `false` |
| wrap | 设置元素单行显示还是多行显示 | [flex-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap) \| boolean | nowrap | boolean: 5.17.0 |
| justify | 设置元素在主轴方向上的对齐方式 | [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) | normal |  |
| align | 设置元素在交叉轴方向上的对齐方式 | [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items) | normal |  |
| flex | flex CSS 简写属性 | [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) | normal |  |
| gap | 设置网格之间的间隙 | `small` \| `middle` \| `large` \| string \| number | - |  |
| component | 自定义元素类型 | Dom | `div` |  |
| orientation | 主轴的方向类型 | `horizontal` \| `vertical` | `horizontal` | - |
