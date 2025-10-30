---
outline: deep
---

# Collapse 折叠面板

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- `手风琴` 是一种特殊的折叠面板，只允许单个内容区域展开。

## 代码演示

### 折叠面板

<demo vue="collapse/basic.vue"></demo>

### 面板尺寸

<demo vue="collapse/size.vue"></demo>

### 手风琴

<demo vue="collapse/accordion.vue"></demo>

### 面板嵌套

<demo vue="collapse/mix.vue"></demo>

### 简洁风格

<demo vue="collapse/borderless.vue"></demo>

### 自定义面板

<demo vue="collapse/custom.vue"></demo>

### 隐藏箭头

<demo vue="collapse/noarrow.vue"></demo>

### 额外节点

<demo vue="collapse/extra.vue"></demo>

### 幽灵折叠面板

<demo vue="collapse/ghost.vue"></demo>

### 可折叠触发区域

<demo vue="collapse/collapsible.vue"></demo>

## API

### Collapse

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| accordion | 手风琴模式 | boolean | false |  |
| activeKey | 当前激活 tab 面板的 key | string\[] \| string <br/> number\[] \| number | [手风琴模式](#collapse-demo-accordion)下默认第一个元素 |  |
| bordered | 带边框风格的折叠面板 | boolean | true |  |
| collapsible | 所有子面板是否可折叠或指定可折叠触发区域 | `header` \| `icon` \| `disabled` | - | 4.9.0 |
| defaultActiveKey | 初始化选中面板的 key | string\[] \| string<br/> number\[] \| number | - |  |
| destroyOnHidden | 销毁折叠隐藏的面板 | boolean | false | 5.25.0 |
| expandIcon | 自定义切换图标 | (panelProps) => VNode | - |  |
| expandIconPlacement | 设置图标位置 | `start` \| `end` | `start` | - |
| ghost | 使折叠面板透明且无边框 | boolean | false | 4.4.0 |
| size | 设置折叠面板大小 | `large` \| `middle` \| `small` | `middle` | 5.2.0 |
| onChange | 切换面板的回调 | function | - |  |
| items | 折叠项目内容 | [ItemType](#itemtype) | - | 5.6.0 |

### ItemType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classNames | 语义化结构 class | [`Record<header \| body, string>`] | - | 5.21.0 |
| collapsible | 是否可折叠或指定可折叠触发区域 | `header` \| `icon` \| `disabled` | - |  |
| children | body 区域内容 | VNode | - |  |
| extra | 自定义渲染每个面板右上角的内容 | VNode | - |  |
| forceRender | 被隐藏时是否渲染 body 区域 DOM 结构 | boolean | false |  |
| key | 对应 activeKey | string \| number | - |  |
| label | 面板标题 | VNode | - | - |
| showArrow | 是否展示当前面板上的箭头（为 false 时，collapsible 不能设为 icon） | boolean | true |  |
| styles | 语义化结构 style | [`Record<header \| body, CSSProperties>`] | - | 5.21.0 |

### Collapse.Panel

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| collapsible | 是否可折叠或指定可折叠触发区域 | `header` \| `icon` \| `disabled` | - | 4.9.0 (icon: 4.24.0) |
| extra | 自定义渲染每个面板右上角的内容 | VNode | - |  |
| forceRender | 被隐藏时是否渲染 body 区域 DOM 结构 | boolean | false |  |
| header | 面板标题 | VNode | - |  |
| key | 对应 activeKey | string \| number | - |  |
| showArrow | 是否展示当前面板上的箭头（为 false 时，collapsible 不能设为 icon） | boolean | true |  |
