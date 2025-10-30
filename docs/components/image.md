---
outline: deep
---

# Image 图片

## 何时使用

- 需要展示图片时使用。
- 加载显示大图或加载失败时容错处理。

## 代码演示

### 基本用法

<demo vue="image/basic.vue"></demo>

### 容错处理

<demo vue="image/fallback.vue"></demo>

### 渐进加载

<demo vue="image/placeholder.vue"></demo>

### 多张图片预览

<demo vue="image/preview-group.vue"></demo>

### 相册模式

<demo vue="image/preview-group-visible.vue"></demo>

### 自定义预览图片

<demo vue="image/previewSrc.vue"></demo>

### 受控的预览

<demo vue="image/controlled-preview.vue"></demo>

### 自定义预览内容

<demo vue="image/imageRender.vue"></demo>

### 预览遮罩

<demo vue="image/mask.vue"></demo>

### 嵌套

<demo vue="image/nested.vue"></demo>

## API

### Image

| 参数        | 说明                               | 类型                                   | 默认值 | 版本 |
| ----------- | ---------------------------------- | -------------------------------------- | ------ | ---- |
| alt         | 图像描述                           | string                                 | -      |      |
| classNames  | 自定义语义化结构类名               | [Record<SemanticDOM, string>]          | -      |      |
| fallback    | 加载失败容错地址                   | string                                 | -      |      |
| height      | 图像高度                           | string \| number                       | -      |      |
| placeholder | 加载占位，为 `true` 时使用默认占位 | VNode                                  | -      |      |
| preview     | 预览参数，为 `false` 时禁用        | boolean \| [PreviewType](#previewtype) | true   |      |
| src         | 图片地址                           | string                                 | -      |      |
| styles      | 自定义语义化结构样式               | [Record<SemanticDOM, string>]          | -      |      |
| width       | 图像宽度                           | string \| number                       | -      |      |
| onError     | 加载错误回调                       | (event: Event) => void                 | -      |      |

其他属性见 [&lt;img>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes)

### PreviewType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| actionsRender | 自定义工具栏渲染 | (originalNode: VNode, info: ToolbarRenderInfoType) => VNode | - |  |
| classNames | 自定义语义化结构类名 | [Record<SemanticDOM, string>] | - |  |
| closeIcon | 自定义关闭 Icon | VNode | - |  |
| cover | 自定义预览遮罩 | VNode \| [CoverConfig](#coverconfig) | - | CoverConfig v6.0 开始支持 |
| getContainer | 指定预览挂载的节点，但依旧为全屏展示，false 为挂载在当前位置 | string \| HTMLElement \| (() => HTMLElement) \| false | - |  |
| imageRender | 自定义预览内容 | (originalNode: VNode, info: { transform: [TransformType](#transformtype), image: [ImgInfo](#imginfo) }) => VNode | - |  |
| mask | 预览遮罩效果 | boolean \| `{ enabled?: boolean, blur?: boolean }` | true | - |
| maxScale | 最大缩放倍数 | number | 50 |  |
| minScale | 最小缩放倍数 | number | 1 |  |
| movable | 是否可移动 | boolean | true |  |
| open | 是否显示预览 | boolean | - |  |
| rootClassName | 预览图的根 DOM 类名，会同时作用在图片和预览层最外侧 | string | - |  |
| scaleStep | `1 + scaleStep` 为缩放放大的每步倍数 | number | 0.5 |  |
| src | 自定义预览 src | string | - |  |
| styles | 自定义语义化结构样式 | [Record<SemanticDOM, string>] | - |  |
| onOpenChange | 预览打开状态变化的回调 | (visible: boolean) => void | - |  |
| onTransform | 预览图 transform 变化的回调 | { transform: [TransformType](#transformtype), action: [TransformAction](#transformaction) } | - |  |

### PreviewGroup

| 参数     | 说明                        | 类型                                                    | 默认值 | 版本 |
| -------- | --------------------------- | ------------------------------------------------------- | ------ | ---- |
| fallback | 加载失败容错地址            | string                                                  | -      |      |
| items    | 预览数组                    | string[] \| { src: string, crossOrigin: string, ... }[] | -      |      |
| preview  | 预览参数，为 `false` 时禁用 | boolean \| [PreviewGroupType](#previewgrouptype)        | true   |      |

### PreviewGroupType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| actionsRender | 自定义工具栏渲染 | (originalNode: VNode, info: ToolbarRenderInfoType) => VNode | - |  |
| classNames | 自定义预览类名对象 | [Record<SemanticDOM, string>] | - |  |
| closeIcon | 自定义关闭 Icon | VNode | - |  |
| countRender | 自定义预览计数内容 | (current: number, total: number) => VNode | - |  |
| current | 当前预览图的 index | number | - |  |
| getContainer | 指定预览挂载的节点，但依旧为全屏展示，false 为挂载在当前位置 | string \| HTMLElement \| (() => HTMLElement) \| false | - |  |
| imageRender | 自定义预览内容 | (originalNode: VNode, info: { transform: [TransformType](#transformtype), image: [ImgInfo](#imginfo), current: number }) => VNode | - |  |
| mask | 预览遮罩效果 | boolean \| `{ enabled?: boolean, blur?: boolean }` | true | - |
| minScale | 最小缩放倍数 | number | 1 |  |
| maxScale | 最大放大倍数 | number | 50 |  |
| movable | 是否可移动 | boolean | true |  |
| open | 是否显示预览 | boolean | - |  |
| styles | 自定义语义化结构样式 | [Record<SemanticDOM, string>] | - |  |
| scaleStep | `1 + scaleStep` 为缩放放大的每步倍数 | number | 0.5 |  |
| onOpenChange | 预览打开状态变化回调，额外携带当前预览图索引 | (visible: boolean, info: { current: number }) => void | - |  |
| onChange | 切换预览图的回调 | (current: number, prevCurrent: number) => void | - |  |
| onTransform | 预览图 transform 变化的回调 | { transform: [TransformType](#transformtype), action: [TransformAction](#transformaction) } | - |  |

## Interface

### TransformType

```typescript
{
  x: number;
  y: number;
  rotate: number;
  scale: number;
  flipX: boolean;
  flipY: boolean;
}
```

### TransformAction

```typescript
type TransformAction =
  | 'flipY'
  | 'flipX'
  | 'rotateLeft'
  | 'rotateRight'
  | 'zoomIn'
  | 'zoomOut'
  | 'close'
  | 'prev'
  | 'next'
  | 'wheel'
  | 'doubleClick'
  | 'move'
  | 'dragRebound'
  | 'reset';
```

### ToolbarRenderInfoType

```typescript
{
  icons: {
    flipYIcon: VNode;
    flipXIcon: VNode;
    rotateLeftIcon: VNode;
    rotateRightIcon: VNode;
    zoomOutIcon: VNode;
    zoomInIcon: VNode;
  };
  actions: {
    onActive?: (index: number) => void; // 5.21.0 之后支持
    onFlipY: () => void;
    onFlipX: () => void;
    onRotateLeft: () => void;
    onRotateRight: () => void;
    onZoomOut: () => void;
    onZoomIn: () => void;
    onReset: () => void; // 5.17.3 之后支持
    onClose: () => void;
  };
  transform: TransformType,
  current: number;
  total: number;
  image: ImgInfo
}
```

### ImgInfo

```typescript
{
  url: string;
  alt: string;
  width: string | number;
  height: string | number;
}
```

### CoverConfig

```typescript
type CoverConfig = {
  coverNode?: VNode; // 自定义遮罩元素
  placement?: 'top' | 'bottom' | 'center'; // 设置预览遮罩显示的位置
};
```
