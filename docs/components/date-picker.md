---
outline: deep
---

# DatePicker 日期选择器

## 何时使用

当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## 代码演示


### 基本
<demo vue="date-picker/basic.vue"></demo>

### 范围选择器
<demo vue="date-picker/range-picker.vue"></demo>

### 多选
<demo vue="date-picker/multiple.vue" version="5.14.0"></demo>

### 选择确认
<demo vue="date-picker/needConfirm.vue" version="5.14.0"></demo>

### 切换不同的选择器
<demo vue="date-picker/switchable.vue"></demo>

### 日期格式
<demo vue="date-picker/format.vue"></demo>

### 日期时间选择
<demo vue="date-picker/time.vue"></demo>

### 格式对齐
<demo vue="date-picker/mask.vue" version="5.14.0"></demo>

### 日期限定范围
<demo vue="date-picker/date-range.vue" version="5.14.0"></demo>

### 禁用
<demo vue="date-picker/disabled.vue"></demo>

### 不可选择日期和时间
<demo vue="date-picker/disabled-date.vue"></demo>

### 允许留空
<demo vue="date-picker/allow-empty.vue"></demo>

### 选择不超过一定的范围
<demo vue="date-picker/select-in-range.vue"></demo>

### 预设范围
<demo vue="date-picker/preset-ranges.vue"></demo>

### 额外的页脚
<demo vue="date-picker/extra-footer.vue"></demo>

### 三种大小
<demo vue="date-picker/size.vue"></demo>

### 定制单元格
<demo vue="date-picker/cell-render.vue"></demo>

### 定制面板
<demo vue="date-picker/components.vue" version="5.14.0"></demo>

### 外部使用面板
<demo vue="date-picker/external-panel.vue"></demo>

### 自定义状态
<demo vue="date-picker/status.vue"></demo>

### 形态变体
<demo vue="date-picker/variant.vue" version="5.13.0"></demo>

### 弹出位置
<demo vue="date-picker/placement.vue"></demo>

### 前后缀
<demo vue="date-picker/suffix.vue"></demo>


## API

日期类组件包括以下五种形式。

- DatePicker
- DatePicker\[picker="month"]
- DatePicker\[picker="week"]
- DatePicker\[picker="year"]
- DatePicker\[picker="quarter"] (4.1.0 新增)
- RangePicker

<!-- prettier-ignore -->
:::warning
在搭配 Next.js 的 App Router 使用时，注意在引入 dayjs 的 locale 文件时加上 `'use client'`。这是由于 Ant Design 的组件都是客户端组件，在 RSC 中引入 dayjs 的 locale 文件将不会在客户端生效。
:::

### 共同的 API

以下 API 为 DatePicker、 RangePicker 共享的 API。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 自定义清除按钮 | boolean \| `{ clearIcon?: VNode }` | true | 5.8.0: 支持对象类型 |
| autofocus | 自动获取焦点 | boolean | false |  |
| classs | 选择器 class | string | - |  |
| dateRender | 自定义日期单元格的内容，5.4.0 起用 `cellRender` 代替 | `function(currentDate: dayjs, today: dayjs) => VNode` | - | < 5.4.0 |
| cellRender | 自定义单元格的内容 | `(current: dayjs, info: { originNode: VNode,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => VNode` | - | 5.4.0 |
| components | 自定义面板 | Record<Panel \| 'input'> | - | 5.14.0 |
| disabled | 禁用 | boolean | false |  |
| disabledDate | 不可选择的日期 | `(currentDate: dayjs, info: { from?: dayjs, type: Picker }) => boolean` | - | `info`: 5.14.0 |
| format | 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。示例：[自定义格式](#date-picker-demo-format) | [formatType](#formattype) | [@rc-component/picker](https://github.com/react-component/picker/blob/f512f18ed59d6791280d1c3d7d37abbb9867eb0b/src/utils/uiUtil.ts#L155-L177) |  |
| order | 多选、范围时是否自动排序 | boolean | true | 5.14.0 |
| preserveInvalidOnBlur | 失去焦点是否要清空输入框内无效内容 | boolean | false | 5.14.0 |
| getPopupContainer | 定义浮层的容器，默认为 body 上新建 div | `function(trigger)` | - |  |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | false |  |
| locale | 国际化配置 | object | [默认配置](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |  |
| minDate | 最小日期，同样会限制面板的切换范围 | dayjs | - | 5.14.0 |
| maxDate | 最大日期，同样会限制面板的切换范围 | dayjs | - | 5.14.0 |
| mode | 日期面板的状态 | `time` \| `date` \| `month` \| `year` \| `decade` | - |  |
| needConfirm | 是否需要确认按钮，为 `false` 时失去焦点即代表选择。当设置 `multiple` 时默认为 `false` | boolean | - | 5.14.0 |
| nextIcon | 自定义下一个图标 | VNode | - | 4.17.0 |
| open(v-model) | 控制弹层是否展开 | boolean | - |  |
| panelRender | 自定义渲染面板 | `(panelNode) => VNode` | - | 4.5.0 |
| picker | 设置选择器类型 | `date` \| `week` \| `month` \| `quarter` \| `year` | `date` | `quarter`: 4.1.0 |
| placeholder | 输入框提示文字 | string \| \[string, string] | - |  |
| placement | 选择框弹出的位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |  |
| prefix | 自定义前缀 | VNode | - | 5.22.0 |
| prevIcon | 自定义上一个图标 | VNode | - | 4.17.0 |
| presets | 预设时间范围快捷选择, 自 `5.8.0` 起 value 支持函数返回值 | { label: VNode, value: Dayjs \| (() => Dayjs) }\[] | - |  |
| size | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | `large` \| `middle` \| `small` | - |  |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| style | 自定义输入框样式 | CSSProperties | {} |  |
| suffixIcon | 自定义的选择框后缀图标 | VNode | - |  |
| superNextIcon | 自定义 `>>` 切换图标 | VNode | - | 4.17.0 |
| superPrevIcon | 自定义 `<<` 切换图标 | VNode | - | 4.17.0 |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| onOpenChange | 弹出日历和关闭日历的回调 | `function(open)` | - |  |
| onPanelChange | 日历面板切换的回调 | `function(value, mode)` | - |  |

### 共同的方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |

### DatePicker

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| disabledTime | 不可选择的时间 | `function(date)` | - |  |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | [formatType](#formattype) | `YYYY-MM-DD` |  |
| multiple | 是否为多选，不支持 `showTime` | boolean | false | 5.14.0 |
| pickerValue | 面板日期，可以用于受控切换面板所在日期。配合 `onPanelChange` 使用。 | [dayjs](https://day.js.org/) | - | 5.14.0 |
| renderExtraFooter | 在面板中添加额外的页脚 | `(mode) => VNode` | - |  |
| showNow | 显示当前日期时间的快捷选择 | boolean | - |  |
| showTime | 增加时间选择功能 | Object \| boolean | TimePicker Options |  |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒，[例子](#date-picker-demo-disabled-date) | [dayjs](https://day.js.org/) | dayjs() |  |
| showWeek | DatePicker 下展示当前周 | boolean | false | 5.14.0 |
| value(v-model) | 日期 | [dayjs](https://day.js.org/) | - |  |
| onChange | 时间发生变化的回调 | `function(date: dayjs, dateString: string)` | - |  |
| onOk | 点击确定按钮的回调 | function() | - |  |
| onPanelChange | 日期面板变化时的回调 | `function(value, mode)` | - |  |

### DatePicker\[picker=year]

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | [formatType](#formattype) | `YYYY` |  |
| multiple | 是否为多选 | boolean | false | 5.14.0 |
| renderExtraFooter | 在面板中添加额外的页脚 | `() => VNode` | - |  |
| value(v-model) | 日期 | [dayjs](https://day.js.org/) | - |  |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | `function(date: dayjs, dateString: string)` | - |  |

### DatePicker\[picker=quarter]

`4.1.0` 新增。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | [formatType](#formattype) | `YYYY-\QQ` |  |
| multiple | 是否为多选 | boolean | false | 5.14.0 |
| renderExtraFooter | 在面板中添加额外的页脚 | `() => VNode` | - |  |
| value(v-model) | 日期 | [dayjs](https://day.js.org/) | - |  |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | `function(date: dayjs, dateString: string)` | - |  |

### DatePicker\[picker=month]

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | [formatType](#formattype) | `YYYY-MM` |  |
| multiple | 是否为多选 | boolean | false | 5.14.0 |
| renderExtraFooter | 在面板中添加额外的页脚 | `() => VNode` | - |  |
| value(v-model) | 日期 | [dayjs](https://day.js.org/) | - |  |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | `function(date: dayjs, dateString: string)` | - |  |

### DatePicker\[picker=week]

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | [formatType](#formattype) | `YYYY-wo` |  |
| multiple | 是否为多选 | boolean | false | 5.14.0 |
| renderExtraFooter | 在面板中添加额外的页脚 | `(mode) => VNode` | - |  |
| value(v-model) | 日期 | [dayjs](https://day.js.org/) | - |  |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | `function(date: dayjs, dateString: string)` | - |  |
| showWeek | DatePicker 下展示当前周 | boolean | true | 5.14.0 |

### RangePicker

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowEmpty | 允许起始项部分为空 | \[boolean, boolean] | \[false, false] |  |
| cellRender | 自定义单元格的内容。 | `(current: dayjs, info: { originNode: VNode,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => VNode` | - | 5.4.0 |
| dateRender | 自定义日期单元格的内容，5.4.0 起用 `cellRender` 代替 | `function(currentDate: dayjs, today: dayjs) => VNode` | - | < 5.4.0 |
| disabled | 禁用起始项 | \[boolean, boolean] | - |  |
| disabledTime | 不可选择的时间 | `function(date: dayjs, partial:`start`\|`end`, info: { from?: dayjs })` | - | `info.from`: 5.17.0 |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | [formatType](#formattype) | `YYYY-MM-DD HH:mm:ss` |  |
| id | 设置输入框 `id` 属性。 | `{ start?: string, end?: string }` | - | 5.14.0 |
| pickerValue | 面板日期，可以用于受控切换面板所在日期。配合 `onPanelChange` 使用。 | [dayjs](https://day.js.org/)[] | - | 5.14.0 |
| presets | 预设时间范围快捷选择，自 `5.8.0` 起 value 支持函数返回值 | `{ label: VNode, value: (Dayjs \| (() => Dayjs))\[] }\[] ` | - |  |
| renderExtraFooter | 在面板中添加额外的页脚 | `() => VNode` | - |  |
| separator | 设置分隔符 | VNode | `<SwapRightOutlined />` |  |
| showTime | 增加时间选择功能 | Object\|boolean | TimePicker Options |  |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒，[例子](#date-picker-demo-disabled-date) | [dayjs](https://day.js.org/)\[] | \[dayjs(), dayjs()] |  |
| value(v-model) | 日期 | [dayjs](https://day.js.org/)\[] | - |  |
| onCalendarChange | 待选日期发生变化的回调。`info` 参数自 4.4.0 添加 | function(dates: \[dayjs, dayjs], dateStrings: \[string, string], info: { range:`start`\|`end` }) | - |  |
| onChange | 日期范围发生变化的回调 | `function(dates: \[dayjs, dayjs], dateStrings: \[string, string])` | - |  |
| onFocus | 聚焦时回调 | ` function(event, { range: 'start' \| 'end' })` | - | `range`: 5.14.0 |
| onBlur | 失焦时回调 | ` function(event, { range: 'start' \| 'end' })` | - | `range`: 5.14.0 |

#### formatType

```typescript
import type { Dayjs } from 'dayjs';

type Generic = string;
type GenericFn = (value: Dayjs) => string;

export type FormatType =
  | Generic
  | GenericFn
  | Array<Generic | GenericFn>
  | {
      format: string;
      type?: 'mask';
    };
```

## FAQ

### 如何修改周的起始日？

请使用正确的（[#5605](https://github.com/ant-design/ant-design/issues/5605)），或者修改 dayjs 的 `locale` 配置：<https://codesandbox.io/s/dayjs-day-of-week-x9tuj2?file=/demo.tsx>

```js
import dayjs from 'dayjs';

import 'dayjs/locale/zh-cn';

import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);
dayjs.updateLocale('zh-cn', {
  weekStart: 0,
});
```
