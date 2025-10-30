---
outline: deep
---

# Anchor 锚点

## 何时使用

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## 代码演示

### 基本

<demo vue="anchor/basic.vue" ></demo>

### 横向 Anchor

<demo vue="anchor/horizontal.vue" ></demo>

### 静态位置

<demo vue="anchor/static.vue"></demo>

### 自定义 onClick 事件

<demo vue="anchor/onClick.vue"></demo>

### 自定义锚点高亮

<demo vue="anchor/customizeHighlight.vue"></demo>

### 设置锚点滚动偏移量

<demo vue="anchor/targetOffset.vue" ></demo>

### 监听锚点链接改变

<demo vue="anchor/onChange.vue"></demo>

### 替换历史中的 href

<demo vue="anchor/replace.vue"></demo>

### 自定义各种语义结构的样式和类

<demo vue="anchor/style-class.vue"  version="6.0.0"></demo>

## API

### Anchor Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| affix | 固定模式 | boolean \| Omit<AffixProps, 'offsetTop' \| 'target' \| 'children'> | true | object: 5.19.0 |
| bounds | 锚点区域边界 | number | 5 |  |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM], string> \| (info: { props })=> Record<[SemanticDOM], string> | - |  |
| getContainer | 指定滚动的容器 | () => HTMLElement | () => window |  |
| getCurrentAnchor | 自定义高亮的锚点 | (activeLink: string) => string | - |  |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number |  |  |
| showInkInFixed | `affix={false}` 时是否显示小方块 | boolean | false |  |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM], CSSProperties> \| (info: { props })=> Record<[SemanticDOM], CSSProperties> | - |  |
| targetOffset | 锚点滚动偏移量，默认与 offsetTop 相同，[例子](#anchor-demo-targetoffset) | number | - |  |
| onChange | 监听锚点链接改变 | (currentActiveLink: string) => void | - |  |
| onClick | `click` 事件的 handler | (e: MouseEvent, link: object) => void | - |  |
| items | 数据化配置选项内容，支持通过 children 嵌套 | { key, href, title, target, children }\[] [具体见](#anchoritem) | - | 5.1.0 |
| direction | 设置导航方向 | `vertical` \| `horizontal` | `vertical` | 5.2.0 |
| replace | 替换浏览器历史记录中项目的 href 而不是推送它 | boolean | false | 5.7.0 |

### AnchorItem

| 参数     | 说明                                             | 类型                         | 默认值 | 版本  |
| -------- | ------------------------------------------------ | ---------------------------- | ------ | ----- |
| key      | 唯一标志                                         | string \| number             | -      |       |
| href     | 锚点链接                                         | string                       | -      |       |
| target   | 该属性指定在何处显示链接的资源                   | string                       | -      |       |
| title    | 文字内容                                         | ReactNode                    | -      |       |
| children | 嵌套的 Anchor Link，`注意：水平方向该属性不支持` | [AnchorItem](#anchoritem)\[] | -      |       |
| replace  | 替换浏览器历史记录中的项目 href 而不是推送它     | boolean                      | false  | 5.7.0 |

### Link Props

建议使用 items 形式。

| 参数   | 说明                           | 类型      | 默认值 | 版本 |
| ------ | ------------------------------ | --------- | ------ | ---- |
| href   | 锚点链接                       | string    | -      |      |
| target | 该属性指定在何处显示链接的资源 | string    | -      |      |
| title  | 文字内容                       | ReactNode | -      |      |
