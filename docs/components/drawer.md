---
outline: deep
---

# Drawer 抽屉

## 何时使用

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。

- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。

## 代码演示

### 基础抽屉

<demo vue="drawer/basic-right.vue"></demo>

### 自定义位置

<demo vue="drawer/placement.vue"></demo>

### 可调整大小

<demo vue="drawer/resizable.vue" version="6.0.0"></demo>

### 加载中

<demo vue="drawer/loading.vue" version="5.17.0"></demo>

### 额外操作

<demo vue="drawer/extra.vue"></demo>

### 渲染在当前 DOM

<demo vue="drawer/render-in-current.vue"></demo>

<!-- ### 抽屉表单 -->
<!-- <demo vue="drawer/form-in-drawer.vue"></demo> -->

### 多层抽屉

<demo vue="drawer/multi-level-drawer.vue"></demo>

### 遮罩

<demo vue="drawer/mask.vue"></demo>

<!-- ### 自定义内部样式 -->

<!-- <demo vue="drawer/classNames.vue"></demo> -->

### 关闭按钮位置

<demo vue="drawer/closable-placement.vue" version="5.28.0"></demo>

## API

<!-- prettier-ignore -->
:::warning{title=注意}
v5 使用 `rootClassName` 与 `rootStyle` 来配置最外层元素样式。原 v4 `className` 与 `style` 改至配置 Drawer 窗体样式以和 Modal 对齐。
:::

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autofocus | 抽屉展开后是否将焦点切换至其 DOM 节点 | boolean | true | 4.17.0 |
| afterOpenChange | 切换抽屉时动画结束后的回调 | function(open) | - |  |
| className | Drawer 容器外层 className 设置，如果需要设置最外层，请使用 rootClassName | string | - |  |
| classNames | 语义化结构 className | [Record<SemanticDOM, string>] | - | 5.10.0 |
| closeIcon | 自定义关闭图标。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | VNode | &lt;CloseOutlined /> |  |
| destroyOnHidden | 关闭时销毁 Drawer 里的子元素 | boolean | false | 5.25.0 |
| extra | 抽屉右上角的操作区域 | VNode | - | 4.17.0 |
| footer | 抽屉的页脚 | VNode | - |  |
| forceRender | 预渲染 Drawer 内元素 | boolean | false |  |
| getContainer | 指定 Drawer 挂载的节点，**并在容器内展现**，`false` 为挂载在当前位置 | HTMLElement \| () => HTMLElement \| Selectors \| false | body |  |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
| mask | 遮罩效果 | boolean \| `{ enabled?: boolean, blur?: boolean }` | true |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
| placement | 抽屉的方向 | `top` \| `right` \| `bottom` \| `left` | `right` |  |
| push | 用于设置多层 Drawer 的推动行为 | boolean \| `{ distance: string \| number }` | `{ distance: 180 }` | 4.5.0+ |
| resizable | 是否启用拖拽改变尺寸 | [ResizableConfig](#resizable-config) | - | 6.0.0 |
| rootStyle | 可用于设置 Drawer 最外层容器的样式，和 `style` 的区别是作用节点包括 `mask` | CSSProperties | - |  |
| size | 预设抽屉宽度（或高度），default `378px` 和 large `736px`，或自定义数字 | 'default' \| 'large' \| number | 'default' | 4.17.0 |
| style | 设计 Drawer 容器样式，如果你只需要设置内容部分请使用 `styles.body` | CSSProperties | - |  |
| styles | 语义化结构 style | [Record<SemanticDOM, CSSProperties>] | - | 5.10.0 |
| title | 标题 | VNode | - |  |
| loading | 显示骨架屏 | boolean | false | 5.17.0 |
| open | Drawer 是否可见 | boolean | - |
| zIndex | 设置 Drawer 的 `z-index` | number | 1000 |  |
| onClose | 点击遮罩层或左上角叉或取消按钮的回调 | function(e) | - |  |
| drawerRender | 自定义渲染抽屉 | (node: VNode) => VNode | - | 5.18.0 |

## ResizableConfig

| 参数          | 说明                     | 类型                   | 默认值 | 版本  |
| ------------- | ------------------------ | ---------------------- | ------ | ----- |
| onResizeStart | 开始拖拽调整大小时的回调 | () => void             | -      | 6.0.0 |
| onResize      | 拖拽调整大小时的回调     | (size: number) => void | -      | 6.0.0 |
| onResizeEnd   | 结束拖拽调整大小时的回调 | () => void             | -      | 6.0.0 |
