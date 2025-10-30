---
outline: deep
---

# Masonry

瀑布流布局组件，用于展示不同高度的内容。

## 何时使用

- 展示不规则高度的图片或卡片时
- 需要按照列数均匀分布内容时
- 需要响应式调整列数时

## 代码演示

### 基础用法

<demo vue="masonry/basic.vue"></demo>

### 响应式

<demo vue="masonry/responsive.vue"></demo>

### 图片

<demo vue="masonry/image.vue"></demo>

### 动态更新

<demo vue="masonry/dynamic.vue"></demo>

### 自定义各种语义结构的样式和类

<demo vue="masonry/style-class.vue"></demo>

## API

通用属性参考：[通用属性](/docs/react/common-props)

### Masonry

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM], string> \| (info: { props })=> Record<[SemanticDOM], string> | - |  |
| columns | 列数，可以是固定值或响应式配置 | `number \| { xs?: number; sm?: number; md?: number }` | `3` |
| fresh | 是否持续监听子项尺寸变化 | `boolean` | `false` |
| gutter | 间距，可以是固定值、响应式配置或水平垂直间距配置 | [Gap](#gap) \| \[[Gap](#gap), [Gap](#gap)\] | `0` |
| items | 瀑布流项 | [MasonryItem](#masonryitem)[] | - |
| itemRender | 自定义项渲染 | `(item: MasonryItem) => React.ReactNode` | - |
| styles | 语义化结构 style，支持对象和函数形式 | Record<[SemanticDOM], CSSProperties> \| ((info: { props }) => Record<[SemanticDOM], CSSProperties>) | - |  |
| onLayoutChange | 列排序回调 | `({ key: React.Key; column: number }[]) => void` | - |

### MasonryItem

| 参数     | 说明                                             | 类型                 | 默认值 |
| -------- | ------------------------------------------------ | -------------------- | ------ |
| children | 自定义展示内容，相对 `itemRender` 具有更高优先级 | `React.ReactNode`    | -      |
| column   | 自定义所在列                                     | `number`             | -      |
| data     | 自定义存储数据                                   | `T`                  | -      |
| height   | 高度                                             | `number`             | -      |
| key      | 唯一标识                                         | `string` \| `number` | -      |

### Gap

Gap 是项之间的间距，可以是固定值，也可以是响应式配置。

```ts
type Gap = undefined | number | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', number>>;
```
