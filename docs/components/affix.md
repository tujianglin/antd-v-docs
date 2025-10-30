---
outline: deep
---

# Affix 固钉

## 何时使用

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

页面可视范围过小时，慎用此功能以免出现遮挡页面内容的情况。

## 代码演示

### 基本

<demo vue="affix/basic.vue"></demo>

<!-- ### 固定状态改变的回调

<demo vue="affix/on-change.vue"></demo>

### 滚动容器

<demo vue="affix/target.vue"></demo> -->

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number | - |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number | 0 |
| target | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |
| onChange | 固定状态改变时触发的回调函数 | (affixed?: boolean) => void | - |
