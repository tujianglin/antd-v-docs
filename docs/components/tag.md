---
outline: deep
---

# Tag 标签

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 代码演示

### 基本

<demo vue="tag/basic.vue"></demo>

### 多彩标签

<demo vue="tag/colorful.vue"></demo>

### 动态添加和删除

<demo vue="tag/control.vue"></demo>

### 可选择标签

<demo vue="tag/checkable.vue"></demo>

### 图标按钮

<demo vue="tag/icon.vue"></demo>

### 预设状态的标签

<demo vue="tag/status.vue"></demo>

## API

### Tag

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classNames | 语义化结构 class | [Record<SemanticDOM, string>] | - |  |
| closeIcon | 自定义关闭按钮。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | ReactNode | false | 4.4.0 |
| color | 标签色 | string | - |  |
| variant | 标签变体 | `'filled' \| 'solid' \| 'outlined'` | `'filled'` | 6.0.0 |
| icon | 设置图标 | ReactNode | - |  |
| disabled | 是否禁用标签 | boolean | false | 6.0.0 |
| href | 点击跳转的地址，指定此属性`tag`组件会渲染成 `<a>` 标签 | string | - | 6.0.0 |
| styles | 语义化结构 style | [Record<SemanticDOM, CSSProperties>] | - |  |
| target | 相当于 a 标签的 target 属性，href 存在时生效 | string | - | 6.0.0 |
| onClose | 关闭时的回调（可通过 `e.preventDefault()` 来阻止默认行为） | (e: MouseEvent) => void | - |  |

### Tag.CheckableTag

| 参数     | 说明                 | 类型              | 默认值 | 版本   |
| -------- | -------------------- | ----------------- | ------ | ------ |
| checked  | 设置标签的选中状态   | boolean           | false  |        |
| icon     | 设置图标             | ReactNode         | -      | 5.27.0 |
| onChange | 点击标签时触发的回调 | (checked) => void | -      |        |

### Tag.CheckableTagGroup

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classNames | 语义化结构 class | [Record<SemanticDOM, string>] | - |  |
| defaultValue | 初始选中值 | `string \| number \| Array<string \| number> \| null` | - |  |
| disabled | 禁用选中 | `boolean` | - |  |
| multiple | 多选模式 | `boolean` | - |  |
| value | 选中值 | `string \| number \| Array<string \| number> \| null` | - |  |
| options | 选项列表 | `Array<{ label: ReactNode; value: string \| number } \| string \| number>` | - |  |
| onChange | 点击标签时触发的回调 | `(value: string \| number \| Array<string \| number> \| null) => void` | - |  |
