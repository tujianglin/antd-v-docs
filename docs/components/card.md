---
outline: deep
---

# Card 卡片

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 代码演示

### 典型卡片

<demo vue="card/basic.vue"></demo>

### 无边框

<demo vue="card/border-less.vue" background="grey"></demo>

### 简洁卡片

<demo vue="card/simple.vue"></demo>

### 更灵活的内容展示

<demo vue="card/flexible-content.vue"></demo>

### 栅格卡片

<demo vue="card/in-column.vue" background="grey"></demo>

### 预加载的卡片

<demo vue="card/loading.vue"></demo>

### 网格型内嵌卡片

<demo vue="card/grid-card.vue"></demo>

### 内部卡片

<demo vue="card/inner.vue"></demo>

### 带页签的卡片

<demo vue="card/tabs.vue"></demo>

### 支持更多内容配置

<demo vue="card/meta.vue"></demo>

## API

```jsx
<Card title="卡片标题">卡片内容</Card>
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| actions | 卡片操作组，位置在卡片底部 | Array&lt;VNode> | - |  |
| activeTabKey | 当前激活页签的 key | string | - |  |
| ~~bordered~~ | 是否有边框, 请使用 `variant` 替换 | boolean | true |  |
| variant | 形态变体 | `outlined` \| `borderless` \| | `outlined` | 5.24.0 |
| cover | 卡片封面 | VNode | - |  |
| defaultActiveTabKey | 初始化选中页签的 key，如果没有设置 activeTabKey | string | `第一个页签的 key` |  |
| extra | 卡片右上角的操作区域 | VNode | - |  |
| hoverable | 鼠标移过时可浮起 | boolean | false |  |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |  |
| size | card 的尺寸 | `default` \| `small` | `default` |  |
| tabBarExtraContent | tab bar 上额外的元素 | VNode | - |  |
| tabList | 页签标题列表 | [TabItemType](/components/tabs#tabitemtype)[] | - |  |
| tabProps | [Tabs](/components/tabs#tabs) | - | - |  |
| title | 卡片标题 | VNode | - |  |
| type | 卡片类型，可设置为 `inner` 或 不设置 | string | - |  |
| classNames | 配置卡片内置模块的 class | [Record<SemanticDOM, string>] | - | 5.14.0 |
| styles | 配置卡片内置模块的 style | [Record<SemanticDOM, CSSProperties>] | - | 5.14.0 |
| onTabChange | 页签切换的回调 | (key) => void | - |  |

### Card.Grid

| 参数      | 说明                   | 类型          | 默认值 | 版本 |
| --------- | ---------------------- | ------------- | ------ | ---- |
| class     | 网格容器类名           | string        | -      |      |
| hoverable | 鼠标移过时可浮起       | boolean       | true   |      |
| style     | 定义网格容器类名的样式 | CSSProperties | -      |      |

### Card.Meta

| 参数        | 说明               | 类型          | 默认值 | 版本 |
| ----------- | ------------------ | ------------- | ------ | ---- |
| avatar      | 头像/图标          | VNode         | -      |      |
| class       | 容器类名           | string        | -      |      |
| description | 描述内容           | VNode         | -      |      |
| style       | 定义容器类名的样式 | CSSProperties | -      |      |
| title       | 标题内容           | VNode         | -      |      |
