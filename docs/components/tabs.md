---
outline: deep
---

# Tabs 标签页

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

Ant Design 依次提供了三级选项卡，分别用于不同的场景。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 既可用于容器顶部，也可用于容器内部，是最通用的 Tabs。
- [Radio.Button](/components/radio) 可作为更次级的页签来使用。

## 代码演示

### 基本

<demo vue="tabs/basic.vue"></demo>

### 禁用

<demo vue="tabs/disabled.vue"></demo>

### 居中

<demo vue="tabs/centered.vue"></demo>

### 图标

<demo vue="tabs/icon.vue"></demo>

### 指示条

<demo vue="tabs/custom-indicator.vue"></demo>

### 滑动

<demo vue="tabs/slide.vue"></demo>

### 附加内容

<demo vue="tabs/extra.vue"></demo>

### 大小

<demo vue="tabs/size.vue"></demo>

### 位置

<demo vue="tabs/placement.vue"></demo>

## API

### Tabs

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| activeKey | 当前激活 tab 面板的 key | string | - |  |
| addIcon | 自定义添加按钮，设置 `type="editable-card"` 时有效 | VNode | `<PlusOutlined />` | 4.4.0 |
| animated | 是否使用动画切换 Tabs | `boolean\| { inkBar: boolean, tabPane: boolean }` | `{ inkBar: true, tabPane: false }` |  |
| centered | 标签居中展示 | boolean | false | 4.4.0 |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string | `第一个面板的 key` |  |
| hideAdd | 是否隐藏加号图标，在 `type="editable-card"` 时有效 | boolean | false |  |
| indicator | 自定义指示条的长度和对齐方式 | `{ size?: number \| (origin: number) => number; align: `start`\|`center`\|`end`; }` | - | 5.13.0 |
| items | 配置选项卡内容 | [TabItemType](#tabitemtype) | [] | 4.23.0 |
| more | 自定义折叠菜单属性 | [MoreProps](#moreprops) | { icon: `<EllipsisOutlined />` , trigger: 'hover' } |  |
| removeIcon | 自定义删除按钮，设置 `type="editable-card"` 时有效 | VNode | `<CloseOutlined />` | 5.15.0 |
| renderTabBar | 替换 TabBar，用于二次封装标签头 | (props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement | - |  |
| size | 大小，提供 `large` `middle` 和 `small` 三种大小 | string | `middle` |  |
| tabBarExtraContent | tab bar 上额外的元素 | VNode \| `{left?: VNode, right?: VNode}` | - | object: 4.6.0 |
| tabBarGutter | tabs 之间的间隙 | number | - |  |
| tabBarStyle | tab bar 的样式对象 | CSSProperties | - |  |
| tabPlacement | 页签位置，可选值有 `top` `end` `bottom` `start` | string | `top` |  |
| destroyOnHidden | 被隐藏时是否销毁 DOM 结构 | boolean | false | 5.25.0 |
| type | 页签的基本样式，可选 `line`、`card` `editable-card` 类型 | string | `line` |  |
| onChange | 切换面板的回调 | (activeKey: string) => void | - |  |
| onEdit | 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (action === 'add' ? event : targetKey, action) => void | - |  |
| onTabClick | tab 被点击的回调 | (key: string, event: MouseEvent) => void | - |  |
| onTabScroll | tab 滚动时触发 | ({ direction: `left` \| `right` \| `top` \| `bottom` }) => void | - | 4.3.0 |

### TabItemType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closeIcon | 自定义关闭图标，在 `type="editable-card"` 时有效。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | VNode | - |  |
| destroyOnHidden | 被隐藏时是否销毁 DOM 结构 | boolean | false | 5.25.0 |
| disabled | 禁用某一项 | boolean | false |  |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean | false |  |
| key | 对应 activeKey | string | - |  |
| label | 选项卡头显示文字 | VNode | - |  |
| icon | 选项卡头显示图标 | VNode | - | 5.12.0 |
| children | 选项卡头显示内容 | VNode | - |  |
| closable | 是否显示选项卡的关闭按钮，在 `type="editable-card"` 时有效 | boolean | true |  |

### MoreProps

| 参数                                      | 说明           | 类型  | 默认值 | 版本 |
| ----------------------------------------- | -------------- | ----- | ------ | ---- |
| icon                                      | 自定义折叠图标 | VNode | -      |      |
| [DropdownProps](/components/dropdown#api) |                |       |        |      |
