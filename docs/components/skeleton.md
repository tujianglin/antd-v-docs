---
outline: deep
---

# Skeleton 骨架屏

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只在第一次加载数据的时候使用。
- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

## 代码演示

<!-- prettier-ignore -->
### 基本

<demo vue="skeleton/basic.vue"></demo>

### 复杂的组合

<demo vue="skeleton/complex.vue"></demo>

### 动画效果

<demo vue="skeleton/active.vue"></demo>

### 按钮/头像/输入框/图像/自定义节点

<demo vue="skeleton/element.vue"></demo>

<!-- ### 包含子组件 -->

<!-- <demo vue="skeleton/children.vue"></demo> -->

<!-- ### 列表 -->

<!-- <demo vue="skeleton/list.vue"></demo> -->

## API

### Skeleton

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| avatar | 是否显示头像占位图 | boolean \| [SkeletonAvatar](#skeletonavatar) | false |
| loading | 为 true 时，显示占位图。反之则直接展示子组件 | boolean | - |
| paragraph | 是否显示段落占位图 | boolean \| [SkeletonParagraphProps](#skeletonparagraphprops) | true |
| round | 为 true 时，段落和标题显示圆角 | boolean | false |
| title | 是否显示标题占位图 | boolean \| [SkeletonTitleProps](#skeletontitleprops) | true |

#### SkeletonTitleProps

| 属性  | 说明                 | 类型             | 默认值 |
| ----- | -------------------- | ---------------- | ------ |
| width | 设置标题占位图的宽度 | number \| string | -      |

#### SkeletonParagraphProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rows | 设置段落占位图的行数 | number | - |
| width | 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度 | number \| string \| Array&lt;number \| string> | - |

### Skeleton.Avatar

| 属性  | 说明                 | 类型                                      | 默认值    |
| ----- | -------------------- | ----------------------------------------- | --------- |
| shape | 指定头像的形状       | `circle` \| `square`                      | `circle`  |
| size  | 设置头像占位图的大小 | number \| `large` \| `small` \| `default` | `default` |

### Skeleton.Button

| 属性  | 说明                           | 类型                                         | 默认值 | 版本   |
| ----- | ------------------------------ | -------------------------------------------- | ------ | ------ |
| block | 将按钮宽度调整为其父宽度的选项 | boolean                                      | false  | 4.17.0 |
| shape | 指定按钮的形状                 | `circle` \| `round` \| `square` \| `default` | -      |        |
| size  | 设置按钮的大小                 | `large` \| `small` \| `default`              | -      |        |

### Skeleton.Input

| 属性 | 说明             | 类型                            | 默认值 |
| ---- | ---------------- | ------------------------------- | ------ |
| size | 设置输入框的大小 | `large` \| `small` \| `default` | -      |
