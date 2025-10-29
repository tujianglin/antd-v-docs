---
outline: deep
---

## 何时使用

- 需要一个输入框而不是选择器。
- 需要输入建议/辅助提示。

和 Select 的区别是：

- AutoComplete 是一个带提示的文本输入框，用户可以自由输入，关键词是辅助**输入**。
- Select 是在限定的可选项中进行选择，关键词是**选择**。

## 代码演示

### 基本使用

<demo vue="auto-complete/basic.vue"></demo>

### 自定义选项

<demo vue="auto-complete/options.vue"></demo>

### 自定义输入组件

<demo vue="auto-complete/custom.vue"></demo>

### 不区分大小写

<demo vue="auto-complete/non-case-sensitive.vue"></demo>

### 查询模式 - 确定类目

<demo vue="auto-complete/certain-category.vue"></demo>

### 查询模式 - 不确定类目

<demo vue="auto-complete/uncertain-category.vue"></demo>

### 自定义状态

<demo vue="auto-complete/status.vue"></demo>

### 多种形态

<demo vue="auto-complete/variant.vue" version="5.13.0"></demo>

### 自定义清除按钮

<demo vue="auto-complete/allowClear.vue"></demo>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 支持清除 | boolean \| `{ clearIcon?: VNode }` | false | 5.8.0: 支持对象形式 |
| autofocus | 自动获取焦点 | boolean | false |  |
| backfill | 使用键盘选择选项的时候把选中项回填到输入框中 | boolean | false |  |
| classNames | 语义化结构 class | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.25.0 |
| defaultActiveFirstOption | 是否默认高亮第一个选项 | boolean | true |  |
| disabled | 是否禁用 | boolean | false |  |
| popupRender | 自定义下拉框内容 | (originNode: VNode) => VNode | - |  |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 | boolean \| number | true |  |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0) | function(triggerNode) | () => document.body |  |
| notFoundContent | 当下拉列表为空时显示的内容 | VNode | - |  |
| open | 是否展开下拉菜单 | boolean | - |  |
| options | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 | { label, value }\[] | - |  |
| placeholder | 输入框提示 | string | - |  |
| showSearch | 搜索配置 | true \| [Object](#showsearch) | true |  |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| size | 控件大小 | `large` \| `middle` \| `small` | - |  |
| styles | 语义化结构 style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.25.0 |
| value(v-model) | 指定当前选中的条目 | string | - |  |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true | 4.1.0 |
| onBlur | 失去焦点时的回调 | function() | - |  |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function(value) | - |  |
| onOpenChange | 展开下拉菜单的回调 | (open: boolean) => void | - |  |
| onFocus | 获得焦点时的回调 | function() | - |  |
| onSelect | 被选中时调用，参数为选中项的 value 值 | function(value, option) | - |  |
| onClear | 清除内容时的回调 | function | - | 4.6.0 |
| onInputKeyDown | 按键按下时回调 | (event: KeyboardEvent) => void | - |  |
| onPopupScroll | 下拉列表滚动时的回调 | (event: UIEvent) => void | - |  |

### showSearch

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false | boolean \| function(inputValue, option) | true |  |
| onSearch | 搜索补全项的时候调用 | function(value) | - |  |

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |
