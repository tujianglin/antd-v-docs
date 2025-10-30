---
outline: deep
---

# Statistic 统计数值

## 何时使用

- 当需要突出某个或某组数字时。
- 当需要展示带描述的统计类数据时使用。

## 代码演示

### 基本

<demo vue="statistic/basic.vue"></demo>

### 单位

<demo vue="statistic/unit.vue"></demo>

### 在卡片中使用

<demo vue="statistic/card.vue" background="grey"></demo>

### 计时器

<demo vue="statistic/timer.vue" version="5.25.0"></demo>

## API

#### Statistic

| 参数             | 说明               | 类型             | 默认值 | 版本  |
| ---------------- | ------------------ | ---------------- | ------ | ----- |
| decimalSeparator | 设置小数点         | string           | `.`    |       |
| formatter        | 自定义数值展示     | (value) => VNode | -      |       |
| groupSeparator   | 设置千分位标识符   | string           | `,`    |       |
| loading          | 数值是否加载中     | boolean          | false  | 4.8.0 |
| precision        | 数值精度           | number           | -      |       |
| prefix           | 设置数值的前缀     | VNode            | -      |       |
| suffix           | 设置数值的后缀     | VNode            | -      |       |
| title            | 数值的标题         | VNode            | -      |       |
| value            | 数值内容           | string \| number | -      |       |
| valueStyle       | 设置数值区域的样式 | CSSProperties    | -      |       |

#### Statistic.Countdown <

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| format | 格式化倒计时展示，参考 [dayjs](https://day.js.org/) | string | `HH:mm:ss` |  |
| prefix | 设置数值的前缀 | VNode | - |  |
| suffix | 设置数值的后缀 | VNode | - |  |
| title | 数值的标题 | VNode | - |  |
| value | 数值内容 | number | - |  |
| valueStyle | 设置数值区域的样式 | CSSProperties | - |  |
| onFinish | 倒计时完成时触发 | () => void | - |  |
| onChange | 倒计时时间变化时触发 | (value: number) => void | - |  |

#### Statistic.Timer

| 参数       | 说明                                                | 类型                    | 默认值     | 版本 |
| ---------- | --------------------------------------------------- | ----------------------- | ---------- | ---- |
| type       | 计时类型，正计时或者倒计时                          | `countdown` `countup`   | -          |      |
| format     | 格式化倒计时展示，参考 [dayjs](https://day.js.org/) | string                  | `HH:mm:ss` |      |
| prefix     | 设置数值的前缀                                      | VNode                   | -          |      |
| suffix     | 设置数值的后缀                                      | VNode                   | -          |      |
| title      | 数值的标题                                          | VNode                   | -          |      |
| value      | 数值内容                                            | number                  | -          |      |
| valueStyle | 设置数值区域的样式                                  | CSSProperties           | -          |      |
| onFinish   | 倒计时完成时触发, 指定为 `countup` 此属性不生效     | () => void              | -          |      |
| onChange   | 倒计时时间变化时触发                                | (value: number) => void | -          |      |
