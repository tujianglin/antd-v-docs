---
outline: deep
---

# Calendar 日历

## 何时使用

当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。

## 代码演示

### 基本

<demo vue="calendar/basic.vue"></demo>

### 通知事项日历

<demo vue="calendar/notice-calendar.vue"></demo>

### 卡片模式

<demo vue="calendar/card.vue"></demo>

### 选择功能

<demo vue="calendar/select.vue"></demo>

### 周数

<demo vue="calendar/week.vue" version="5.23.0"></demo>

### 自定义头部

<demo vue="calendar/customize-header.vue"></demo>

## API

**注意**：Calendar 部分 locale 是从 value 中读取，所以请先正确设置 dayjs 的 locale。

```jsx
// 默认语言为 en-US，所以如果需要使用其他语言，推荐在入口文件全局设置 locale
// import dayjs from 'dayjs';
// import 'dayjs/locale/zh-cn';
// dayjs.locale('zh-cn');

<Calendar cellRender={cellRender} onPanelChange={onPanelChange} onSelect={onSelect} />
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| cellRender | 自定义单元格的内容 | function(current: dayjs, info: { prefixCls: string, originNode: VNode, today: dayjs, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => VNode | - | 5.4.0 |
| dateFullCellRender | 自定义渲染日期单元格，返回内容覆盖单元格，>= 5.4.0 请用 `fullCellRender` | function(date: Dayjs): VNode | - | < 5.4.0 |
| fullCellRender | 自定义单元格的内容 | function(current: dayjs, info: { prefixCls: string, originNode: VNode, today: dayjs, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => VNode | - | 5.4.0 |
| defaultValue | 默认展示的日期 | [dayjs](https://day.js.org/) | - |  |
| disabledDate | 不可选择的日期，参数为当前 `value`，注意使用时[不要直接修改](https://github.com/ant-design/ant-design/issues/30987) | (currentDate: Dayjs) => boolean | - |  |
| fullscreen | 是否全屏显示 | boolean | true |  |
| showWeek | 是否显示周数列 | boolean | false | 5.23.0 |
| headerRender | 自定义头部内容 | function(object:{value: Dayjs, type: 'year' \| 'month', onChange: f(), onTypeChange: f()}) | - |  |
| locale | 国际化配置 | object | [(默认配置)](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |  |
| mode | 初始模式 | `month` \| `year` | `month` |  |
| validRange | 设置可以显示的日期 | \[[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | - |  |
| value | 展示日期 | [dayjs](https://day.js.org/) | - |  |
| onChange | 日期变化回调 | function(date: Dayjs) | - |  |
| onPanelChange | 日期面板变化回调 | function(date: Dayjs, mode: string) | - |  |
| onSelect | 选择日期回调，包含来源信息 | function(date: Dayjs, info: { source: 'year' \| 'month' \| 'date' \| 'customize' }) | - | `info`: 5.6.0 |

## FAQ

### 如何仅获取来自面板点击的日期？

`onSelect` 事件提供额外的来源信息，你可以通过 `info.source` 来判断来源：

```tsx
<Calendar
  onSelect={(date, { source }) => {
    if (source === 'date') {
      console.log('Panel Select:', source);
    }
  }}
/>
```
