---
outline: deep
---

# Segmented 分段控制器

## 何时使用

- 用于展示多个选项并允许用户选择其中单个选项；
- 当切换选中选项时，关联区域的内容会发生变化。

## 代码演示

### 基本

<demo vue="segmented/basic.vue"></demo>

### 垂直方向

<demo vue="segmented/vertical.vue" version="5.21.0"></demo>

### Block 分段选择器<

<demo vue="segmented/block.vue"></demo>

### 胶囊形状

<demo vue="segmented/shape.vue" version="5.24.0"></demo>

### 不可用

<demo vue="segmented/disabled.vue"></demo>

### 自定义渲染

<demo vue="segmented/custom.vue"></demo>

### 动态数据

<demo vue="segmented/dynamic.vue"></demo>

### 三种大小

<demo vue="segmented/size.vue"></demo>

### 设置图标

<demo vue="segmented/with-icon.vue"></demo>

### 配合 name 使用

<demo vue="segmented/with-name.vue" version="5.23.0"></demo>

## API

### Segmented

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| block | 将宽度调整为父元素宽度的选项 | boolean | false |  |
| disabled | 是否禁用 | boolean | false |  |
| onChange | 选项变化时的回调函数 | function(value: string \| number) |  |  |
| options | 数据化配置选项内容 | string\[] \| number\[] \| SegmentedItemType\[] | [] |  |
| orientation | 排列方向 | `horizontal` \| `vertical` | `horizontal` |  |
| size | 控件尺寸 | `large` \| `middle` \| `small` | `middle` |  |
| vertical | 排列方向，与 `orientation` 同时存在，以 `orientation` 优先 | boolean | `false` | 5.21.0 |
| value(v-model) | 当前选中的值 | string \| number |  |  |
| shape | 形状 | `default` \| `round` | `default` | 5.24.0 |
| name | Segmented 下所有 `input[type="radio"]` 的 `name` 属性。若未设置，则将回退到随机生成的名称 | string |  | 5.23.0 |

### SegmentedItemType

| 属性      | 描述             | 类型                                         | 默认值 | 版本 |
| --------- | ---------------- | -------------------------------------------- | ------ | ---- |
| className | 自定义类名       | string                                       | -      |      |
| disabled  | 分段项的禁用状态 | boolean                                      | false  |      |
| icon      | 分段项的显示图标 | ReactNode                                    | -      |      |
| label     | 分段项的显示文本 | ReactNode                                    | -      |      |
| tooltip   | 分段项的工具提示 | string \| [TooltipProps](/components/tooltip) | -      |      |
| value     | 分段项的值       | string \| number                             | -      |      |
