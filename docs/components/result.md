---
outline: deep
---

# Result 结果

## 何时使用

当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 代码演示

### Success

<demo vue="result/success.vue"></demo>

### Info

<demo vue="result/info.vue"></demo>

### Warning

<demo vue="result/warning.vue"></demo>

### 403

<demo vue="result/403.vue"></demo>

### 404

<demo vue="result/404.vue"></demo>

### 500

<demo vue="result/500.vue"></demo>

### Error

<demo vue="result/error.vue"></demo>

### 自定义 icon

<demo vue="result/customIcon.vue"></demo>

## API

| 参数     | 说明                       | 类型                                                                   | 默认值 |
| -------- | -------------------------- | ---------------------------------------------------------------------- | ------ |
| extra    | 操作区                     | VNode                                                                  | -      |
| icon     | 自定义 icon                | VNode                                                                  | -      |
| status   | 结果的状态，决定图标和颜色 | `success` \| `error` \| `info` \| `warning` \| `404` \| `403` \| `500` | `info` |
| subTitle | subTitle 文字              | VNode                                                                  | -      |
| title    | title 文字                 | VNode                                                                  | -      |
