---
outline: deep
---

# Switch

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 `checkbox` 的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基本

<Code src="switch/basic.vue">基本</Code>

### 不可用

<Code src="switch/disabled.vue">不可用</Code>

### 文字和图标

<Code src="switch/text.vue">文字和图标</Code>

### 两种大小

<Code src="switch/size.vue">两种大小</Code>

### 加载中

<Code src="switch/loading.vue">加载中</Code>

## API

| 参数              | 说明                                | 类型                                   | 默认值    | 版本 |
| ----------------- | ----------------------------------- | -------------------------------------- | --------- | ---- |
| autofocus         | 组件自动获取焦点                    | boolean                                | false     |      |
| value(v-model)    | 指定当前是否选中                    | boolean \| any                         | false     |      |
| unCheckedValue    | 指定当前是开值                      | boolean \| any                         | false     |      |
| checkedValue      | 指定当前是关值                      | boolean \| any                         | true     |      |
| checkedChildren   | 选中时的内容                        | VNode                                  | -         |      |
| class             | Switch 器类名                       | string                                 | -         |      |
| disabled          | 是否禁用                            | boolean                                | false     |      |
| loading           | 加载中的开关                        | boolean                                | false     |      |
| size              | 开关大小，可选值：`default` `small` | string                                 | `default` |      |
| unCheckedChildren | 非选中时的内容                      | VNode                                  | -         |      |
| onChange          | 变化时的回调函数                    | function(value: boolean, event: Event) | -         |      |
| onClick           | 点击时的回调函数                    | function(value: boolean, event: Event) | -         |      |

## 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
