---
outline: deep
---

# Mentions

## 何时使用

用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

## 代码演示

### 基本使用

<demo vue="mentions/basic.vue"></demo>

### 形态变体

<demo vue="mentions/variant.vue" version="5.13.0"></demo>

### 异步加载

<demo vue="mentions/async.vue"></demo>

### 自定义触发字符

<demo vue="mentions/prefix.vue"></demo>

### 无效或只读

<demo vue="mentions/readonly.vue"></demo>

### 向上展开

<demo vue="mentions/placement.vue"></demo>

### 带移除图标

<demo vue="mentions/allowClear.vue"></demo>

### 自动大小

<demo vue="mentions/autoSize.vue"></demo>

### 自定义状态

<demo vue="mentions/status.vue"></demo>

## API

### Mentions

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 可以点击清除图标删除内容 | boolean \| `{ clearIcon?: VNode }` | false | 5.13.0 |
| autofocus | 自动获得焦点 | boolean | false |  |
| autoSize | 自适应内容高度，可设置为 true \| `false 或对象：{ minRows: 2, maxRows: 6 }` | boolean \| object | false |  |
| filterOption | 自定义过滤逻辑 | false \| (input: string, option: OptionProps) => boolean | - |  |
| getPopupContainer | 指定建议框挂载的 HTML 节点 | () => HTMLElement | - |  |
| notFoundContent | 当下拉列表为空时显示的内容 | VNode | `Not Found` |  |
| placement | 弹出层展示位置 | `top` \| `bottom` | `bottom` |  |
| prefix | 设置触发关键字 | string \| string\[] | `@` |  |
| split | 设置选中项前后分隔符 | string | ` ` |  |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| validateSearch | 自定义触发验证逻辑 | (text: string, props: MentionsProps) => void | - |  |
| value(v-model) | 设置值 | string | - |  |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| onBlur | 失去焦点时触发 | () => void | - |  |
| onChange | 值改变时触发 | (text: string) => void | - |  |
| onClear | 按下清除按钮的回调 | () => void | - | 5.20.0 |
| onFocus | 获得焦点时触发 | () => void | - |  |
| onResize | resize 回调 | function({ width, height }) | - |  |
| onSearch | 搜索时触发 | (text: string, prefix: string) => void | - |  |
| onSelect | 选择选项时触发 | (option: OptionProps, prefix: string) => void | - |  |
| onPopupScroll | 滚动时触发 | (event: Event) => void | - | 5.23.0 |
| options | 选项配置 | [Options](#option) | [] | 5.1.0 |

### Mentions 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### Option

| 参数      | 说明           | 类型                | 默认值 |
| --------- | -------------- | ------------------- | ------ |
| value     | 选择时填充的值 | string              | -      |
| label     | 选项的标题     | VNode         | -      |
| key       | 选项的 key 值  | string              | -      |
| disabled  | 是否可选       | boolean             | -      |
| class | css 类名       | string              | -      |
| style     | 选项样式       | CSSProperties | -      |
