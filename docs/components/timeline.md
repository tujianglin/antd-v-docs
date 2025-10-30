---
outline: deep
---

# Timeline 时间轴

## 何时使用

- 当有一系列信息需按时间排列时，可正序和倒序。
- 需要有一条时间轴进行视觉上的串联时。

## 代码演示

### 基本用法

<demo vue="timeline/basic.vue"></demo>

### 变体样式

<demo vue="timeline/variant.vue"></demo>

### 等待及排序

<demo vue="timeline/pending.vue"></demo>

### 交替展现

<demo vue="timeline/alternate.vue"></demo>

### 水平布局

<demo vue="timeline/horizontal.vue"></demo>

### 自定义时间轴点

<demo vue="timeline/custom.vue"></demo>

### 另一侧时间轴点

<demo vue="timeline/end.vue"></demo>

### 标题

<demo vue="timeline/title.vue"></demo>

### 标题占比

<demo vue="timeline/title-span.vue"></demo>

### 语义化自定义

<demo vue="timeline/semantic.vue"></demo>

## API

### Timeline

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| items | 选项配置 | [Items](#Items)[] | - |  |
| mode | 通过设置 `mode` 可以改变时间轴和内容的相对位置 | `start` \| `alternate` \| `end` | `start` |  |
| orientation | 设置时间轴的方向 | `vertical` \| `horizontal` | `vertical` |  |
| reverse | 节点排序 | boolean | false |  |
| titleSpan | 设置标题占比空间，为到 dot 中心点距离 `<InlinePopover previewURL="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*1NJISa7bpqgAAAAAR5AAAAgAerJ8AQ/original"></InlinePopover> ` | number \| string | 12 |  |
| variant | 设置样式变体 | `filled` \| `outlined` | `outlined` |  |

### Items

时间轴的每一个节点。

| 参数      | 说明                                                        | 类型             | 默认值 |
| --------- | ----------------------------------------------------------- | ---------------- | ------ |
| color     | 指定圆圈颜色 `blue`、`red`、`green`、`gray`，或自定义的色值 | string           | `blue` |
| content   | 设置内容                                                    | VNode            | -      |
| icon      | 自定义节点图标                                              | VNode            | -      |
| loading   | 设置加载状态                                                | boolean          | false  |
| placement | 自定义节点位置                                              | `start` \| `end` | -      |
| title     | 设置标题                                                    | VNode            | -      |
