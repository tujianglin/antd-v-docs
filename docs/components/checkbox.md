---
outline: deep
---

# 复选框

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基本用法

<Code src="checkbox/basic.vue">基本用法</Code>

### 不可用

<Code src="checkbox/disabled.vue">不可用</Code>

### 受控的 Checkbox

<Code src="checkbox/controller.vue">受控的 Checkbox</Code>

### Checkbox 组

<Code src="checkbox/group.vue">Checkbox 组</Code>

### 全选

<Code src="checkbox/check-all.vue">全选</Code>

### 布局

<Code src="checkbox/layout.vue">布局</Code>

## API

#### Checkbox

| 参数           | 说明                                    | 类型                             | 默认值 | 版本 |
| -------------- | --------------------------------------- | -------------------------------- | ------ | ---- |
| autofocus      | 自动获取焦点                            | boolean                          | false  |      |
| checked(v-model)      | 指定当前是否选中                        | boolean                          | false  |      |
| disabled       | 失效状态                                | boolean                          | false  |      |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制 | boolean                          | false  |      |
| onChange       | 变化时的回调函数                        | (e: CheckboxChangeEvent) => void | -      |      |
| onBlur         | 失去焦点时的回调                        | function()                       | -      |      |
| onFocus        | 获得焦点时的回调                        | function()                       | -      |      |

#### Checkbox.Group

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| disabled | 整组失效 | boolean | false |  |
| name | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string | - |  |
| options | 指定可选项 | string\[] \| number\[] \| Option\[] | \[] |  |
| value(v-model) | 指定选中的选项 | (string \| number \| boolean)\[] | \[] |  |
| title | 选项的 title | `string` | - |  |
| class| 选项的类名 | `string` | - | 5.25.0 |
| style | 选项的样式 | `CSSProperties` | - |  |
| onChange | 变化时的回调函数 | `(checkedValue: T[]) => void` | - |  |

##### Option

```typescript
interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
```

### 方法

#### Checkbox

| 名称          | 描述                      | 版本   |
| ------------- | ------------------------- | ------ |
| blur()        | 移除焦点                  |        |
| focus()       | 获取焦点                  |        |
| nativeElement | 返回 Checkbox 的 DOM 节点 | 5.17.3 |
