---
outline: deep
---

# InputNumber

## 何时使用

当需要获取标准数值时。

## 代码演示

### 基本

<Code src="input-number/basic.vue">基本</Code>

### 三种大小

<Code src="input-number/size.vue">三种大小</Code>

### 前置/后置标签

<Code src="input-number/addon.vue">前置/后置标签</Code>

### 不可用

<Code src="input-number/disabled.vue">不可用</Code>

### 高精度小数

<Code src="input-number/digit.vue">高精度小数</Code>

### 格式化展示

<Code src="input-number/formatter.vue">格式化展示</Code>

### 键盘行为

<Code src="input-number/keyboard.vue">键盘行为</Code>

### 鼠标滚轮

<Code src="input-number/change-on-wheel.vue" version="5.14.0">鼠标滚轮</Code>

### 形态变体

<Code src="input-number/variant.vue" version="5.13.0">形态变体</Code>

### 超出边界

<Code src="input-number/out-of-range.vue">超出边界</Code>

### 前缀/后缀

<Code src="input-number/presuffix.vue">前缀/后缀</Code>

### 自定义状态

<Code src="input-number/status.vue">自定义状态</Code>

### 聚焦

<Code src="input-number/focus.vue" version="5.22.0">聚焦</Code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| addonAfter | 带标签的 input，设置后置标签 | VNode | - | 4.17.0 |
| addonBefore | 带标签的 input，设置前置标签 | VNode | - | 4.17.0 |
| autofocus | 自动获取焦点 | boolean | false | - |
| changeOnBlur | 是否在失去焦点时，触发 `onChange` 事件（例如值超出范围时，重新限制回范围并触发事件） | boolean | true | 5.11.0 |
| changeOnWheel | 允许鼠标滚轮改变数值 | boolean | - | 5.14.0 |
| controls | 是否显示增减按钮，也可设置自定义箭头图标 | boolean \| `{ upIcon?: VNode; downIcon?: VNode; }` | - | 4.19.0 |
| decimalSeparator | 小数点 | string | - | - |
| placeholder | 占位符 | string | - |  |
| disabled | 禁用 | boolean | false | - |
| formatter | 指定输入框展示值的格式 | function(value: number \| string, info: { userTyping: boolean, input: string }): string | - | info: 4.17.0 |
| keyboard | 是否启用键盘快捷行为 | boolean | true | 4.12.0 |
| max | 最大值 | number | [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) | - |
| min | 最小值 | number | [Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) | - |
| parser | 指定从 `formatter` 里转换回数字的方式，和 `formatter` 搭配使用 | function(string): number | - | - |
| precision | 数值精度，配置 `formatter` 时会以 `formatter` 为准 | number | - | - |
| readOnly | 只读 | boolean | false | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| prefix | 带有前缀图标的 input | VNode | - | 4.17.0 |
| suffix | 带有后缀图标的 input | VNode | - | 5.20.0 |
| size | 输入框大小 | `large` \| `middle` \| `small` | - | - |
| step | 每次改变步数，可以为小数 | number \| string | 1 | - |
| stringMode | 字符值模式，开启后支持高精度小数。同时 `onChange` 将返回 string 类型 | boolean | false | 4.13.0 |
| value(v-model) | 当前值 | number | - | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| onChange | 变化回调 | `function(value: number \| string \| null)` | - | - |
| onPressEnter | 按下回车的回调 | function(e) | - | - |
| onStep | 点击上下箭头的回调 | `(value: number, info: { offset: number, type: 'up' \| 'down' }) => void` | - | 4.7.0 |

## Ref

| 名称 | 说明 | 参数 | 版本 |
| --- | --- | --- | --- |
| blur() | 移除焦点 | - |  |
| focus() | 获取焦点 | (option?: { preventScroll?: boolean, cursor?: 'start' \| 'end' \| 'all' }) | cursor - 5.22.0 |
| nativeElement | 获取原生 DOM 元素 | - | 5.17.3 |
