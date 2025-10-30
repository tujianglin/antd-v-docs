---
outline: deep
---

# Popover 气泡卡片

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 代码演示

### 基本

<demo vue="popover/basic.vue"></demo>

### 三种触发方式

<demo vue="popover/triggerType.vue"></demo>

### 位置

<demo vue="popover/placement.vue"></demo>

### 箭头展示

<demo vue="popover/arrow.vue"></demo>

### 贴边偏移

<demo vue="popover/shift.vue" iframe="300"></demo>

### 从浮层内关闭

<demo vue="popover/control.vue"></demo>

### 悬停点击弹出窗口

<demo vue="popover/hover-with-click.vue"></demo>

## API

| 参数    | 说明     | 类型                 | 默认值 | 版本 |
| ------- | -------- | -------------------- | ------ | ---- |
| content | 卡片内容 | VNode \| () => VNode | -      |      |
| title   | 卡片标题 | VNode \| () => VNode | -      |      |

<!-- 共同的 API -->

## 注意

请确保 `Popover` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
