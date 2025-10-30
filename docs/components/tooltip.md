---
outline: deep
---

# Tooltip 文字提示

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 `title` 提示，提供一个 `按钮/文字/操作` 的文案解释。

## 代码演示

### 基本

<!-- <demo vue="tooltip/basic.vue"></demo> -->

### 位置

<demo vue="tooltip/placement.vue"></demo>

### 箭头展示

<demo vue="tooltip/arrow.vue"></demo>

### 多彩文字提示

<demo vue="tooltip/colorful.vue"></demo>

### 禁用

<demo vue="tooltip/disabled.vue"></demo>

### 自定义子组件

<demo vue="tooltip/wrap-custom-component.vue"></demo>

## API

| 参数  | 说明                                           | 类型                 | 默认值 | 版本   |
| ----- | ---------------------------------------------- | -------------------- | ------ | ------ |
| title | 提示文字                                       | VNode \| () => VNode | -      | -      |
| color | 设置背景颜色，使用该属性后内部文字颜色将自适应 | string               | -      | 5.27.0 |
