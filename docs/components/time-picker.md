---
outline: deep
---

# TimePicker

## 何时使用

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

## 代码演示

### 基本

<Code src="time-picker/basic.vue">基本</Code>

### 受控组件

<Code src="time-picker/value.vue">受控组件</Code>

### 三种大小

<Code src="time-picker/size.vue">三种大小</Code>

### 选择确认

<Code src="time-picker/need-confirm.vue" version="5.14.0">选择确认</Code>

### 禁用

<Code src="time-picker/disabled.vue">禁用</Code>

### 选择时分

<Code src="time-picker/hide-column.vue">选择时分</Code>

### 步长选项

<Code src="time-picker/interval-options.vue">步长选项</Code>

### 附加内容

<Code src="time-picker/addon.vue">附加内容</Code>

### 12 小时制

<Code src="time-picker/12hours.vue">12 小时制</Code>

### 滚动即改变

<Code src="time-picker/change-on-scroll.vue" version="5.14.0">滚动即改变</Code>

### 范围选择器

<Code src="time-picker/range-picker.vue">范围选择器</Code>

### 形态变体

<Code src="time-picker/variant.vue" version="5.13.0">形态变体</Code>

### 自定义状态

<Code src="time-picker/status.vue">自定义状态</Code>

### 前后缀

<Code src="time-picker/suffix.vue">前后缀</Code>

## API

---

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 自定义清除按钮 | boolean \| `{ clearIcon?: VNode }` | true | 5.8.0: 支持对象类型 |
| autofocus | 自动获取焦点 | boolean | false |  |
| cellRender | 自定义单元格的内容 | (current: number, info: { originNode: VNode, today: dayjs, range?: 'start' \| 'end', subType: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => VNode | - | 5.4.0 |
| changeOnScroll | 在滚动时改变选择值 | boolean | false | 5.14.0 |
| class | 选择器类名 | string | - |  |
| disabled | 禁用全部操作 | boolean | false |  |
| disabledTime | 不可选择的时间 | [DisabledTime](#disabledtime) | - | 4.19.0 |
| format | 展示的时间格式 | string | `HH:mm:ss` |  |
| getPopupContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | - |  |
| hideDisabledOptions | 隐藏禁止选择的选项 | boolean | false |  |
| hourStep | 小时选项间隔 | number | 1 |  |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | false |  |
| minuteStep | 分钟选项间隔 | number | 1 |  |
| needConfirm | 是否需要确认按钮，为 `false` 时失去焦点即代表选择 | boolean | - | 5.14.0 |
| open | 面板是否打开 | boolean | false |  |
| placeholder | 没有值的时候显示的内容 | string \| \[string, string] | `请选择时间` |  |
| placement | 选择框弹出的位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |  |
| prefix | 自定义前缀 | VNode | - | 5.22.0 |
| renderExtraFooter | 选择框底部显示自定义的内容 | () => VNode | - |  |
| secondStep | 秒选项间隔 | number | 1 |  |
| showNow | 面板是否显示“此刻”按钮 | boolean | - | 4.4.0 |
| size | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | `large` \| `middle` \| `small` | - |  |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| suffixIcon | 自定义的选择框后缀图标 | VNode | - |  |
| use12Hours | 使用 12 小时制，为 true 时 `format` 默认为 `h:mm:ss a` | boolean | false |  |
| value(v-model) | 当前时间 | [dayjs](http://day.js.org/) | - |  |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| onCalendarChange | 待选日期发生变化的回调。`info` 参数自 4.4.0 添加 | function(dates: \[dayjs, dayjs], dateStrings: \[string, string], info: { range:`start`\|`end` }) | - |  |
| onChange | 时间发生变化的回调 | function(time: dayjs, timeString: string): void | - |  |
| onOpenChange | 面板打开/关闭时的回调 | (open: boolean) => void | - |  |

#### DisabledTime

```ts
type DisabledTime = (now: Dayjs) => {
  disabledHours?: () => number[];
  disabledMinutes?: (selectedHour: number) => number[];
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[];
  disabledMilliseconds?: (selectedHour: number, selectedMinute: number, selectedSecond: number) => number[];
};
```

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |

## RangePicker

属性与 DatePicker 的 [RangePicker](/components/date-picker#rangepicker) 相同。还包含以下属性：

| 参数         | 说明                 | 类型                                    | 默认值 | 版本   |
| ------------ | -------------------- | --------------------------------------- | ------ | ------ |
| disabledTime | 不可选择的时间       | [RangeDisabledTime](#rangedisabledtime) | -      | 4.19.0 |
| order        | 始末时间是否自动排序 | boolean                                 | true   | 4.1.0  |

### RangeDisabledTime

```ts
type RangeDisabledTime = (
  now: Dayjs,
  type = 'start' | 'end',
) => {
  disabledHours?: () => number[];
  disabledMinutes?: (selectedHour: number) => number[];
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[];
};
```
