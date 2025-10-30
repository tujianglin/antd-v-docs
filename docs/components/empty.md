---
outline: deep
---

# Empty 空状态

## 何时使用

- 当目前没有数据时，用于显式的用户提示。
- 初始化场景时的引导创建流程。

## 代码演示

### 基本

<demo vue="empty/basic.vue"></demo>

### 选择图片

<demo vue="empty/simple.vue"></demo>

### 自定义

<demo vue="empty/customize.vue"></demo>

### 全局化配置

<demo vue="empty/config-provider.vue"></demo>

### 无描述

<demo vue="empty/description.vue"></demo>

## API

```jsx
<Empty>
  <Button>创建</Button>
</Empty>
```

| 参数        | 说明                                           | 类型          | 默认值                          | 版本 |
| ----------- | ---------------------------------------------- | ------------- | ------------------------------- | ---- |
| description | 自定义描述内容                                 | VNode     | -                               |      |
| image       | 设置显示图片，为 string 时表示自定义图片地址。 | VNode     | `Empty.PRESENTED_IMAGE_DEFAULT` |      |
| imageStyle  | 图片样式                                       | CSSProperties | -                               |      |


```jsx

## 内置图片

- Empty.PRESENTED_IMAGE_SIMPLE

  <div class="site-empty-buildIn-img site-empty-buildIn-simple"><div>

- Empty.PRESENTED_IMAGE_DEFAULT

  <div class="site-empty-buildIn-img site-empty-buildIn-default"></div>

<style>
  .site-empty-buildIn-img {
    background-repeat: no-repeat;
    background-size: contain;
  }
  .site-empty-buildIn-simple {
    width: 55px;
    height: 35px;
    background-image: url("https://user-images.githubusercontent.com/507615/54591679-b0ceb580-4a65-11e9-925c-ad15b4eae93d.png");
  }
  .site-empty-buildIn-default {
    width: 121px;
    height: 116px;
    background-image: url("https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png");
  }
</style>
```
