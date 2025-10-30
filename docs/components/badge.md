---
outline: deep
---

# Badge 徽标数

## 何时使用

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 代码演示

### 基本

<demo vue="badge/basic.vue"></demo>

### 独立使用

<demo vue="badge/no-wrapper.vue"></demo>

### 封顶数字

<demo vue="badge/overflow.vue"></demo>

### 讨嫌的小红点

<demo vue="badge/dot.vue"></demo>

### 动态

<demo vue="badge/change.vue"></demo>

### 可点击

<demo vue="badge/link.vue"></demo>

### 自定义位置偏移

<demo vue="badge/offset.vue"></demo>

### 大小

<demo vue="badge/size.vue"></demo>

### 状态点

<demo vue="badge/status.vue"></demo>

### 多彩徽标

<demo vue="badge/colorful.vue"></demo>

### 缎带

<demo vue="badge/ribbon.vue"></demo>

## API

### Badge

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| color | 自定义小圆点的颜色 | string | - |  |
| count | 展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏 | VNode | - |  |
| classNames | 语义化结构 class | [Record<SemanticDOM, string>] | - | 5.7.0 |
| dot | 不展示数字，只有一个小红点 | boolean | false |  |
| offset | 设置状态点的位置偏移 | \[number, number] | - |  |
| overflowCount | 展示封顶的数字值 | number | 99 |  |
| showZero | 当数值为 0 时，是否展示 Badge | boolean | false |  |
| size | 在设置了 `count` 的前提下有效，设置小圆点的大小 | `default` \| `small` | - | - |
| status | 设置 Badge 为状态点 | `success` \| `processing` \| `default` \| `error` \| `warning` | - |  |
| styles | 语义化结构 style | [Record<SemanticDOM, CSSProperties>] | - | 5.7.0 |
| text | 在设置了 `status` 的前提下有效，设置状态点的文本 | VNode | - |  |
| title | 设置鼠标放在状态点上时显示的文字 | string | - |  |

### Badge.Ribbon

| 参数      | 说明                                                      | 类型             | 默认值 | 版本 |
| --------- | --------------------------------------------------------- | ---------------- | ------ | ---- |
| color     | 自定义缎带的颜色                                          | string           | -      |      |
| placement | 缎带的位置，`start` 和 `end` 随文字方向（RTL 或 LTR）变动 | `start` \| `end` | `end`  |      |
| text      | 缎带中填入的内容                                          | VNode            | -      |      |
