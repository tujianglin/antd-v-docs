---
outline: deep
---

# QRCode 二维码

## 何时使用

当需要将文本转换成为二维码时使用。

## 代码演示

### 基本使用

<demo vue="qrcode/base.vue"></demo>

### 带 Icon 的例子

<demo vue="qrcode/icon.vue"></demo>

### 不同的状态

<demo vue="qrcode/status.vue"></demo>

### 自定义状态渲染器

<demo vue="qrcode/customStatusRender.vue" version="5.20.0"></demo>

### 自定义渲染类型

<demo vue="qrcode/type.vue"></demo>

### 自定义尺寸

<demo vue="qrcode/customSize.vue"></demo>

### 自定义颜色

<demo vue="qrcode/customColor.vue"></demo>

### 下载二维码

<demo vue="qrcode/download.vue"></demo>

### 纠错比例

<demo vue="qrcode/errorlevel.vue"></demo>

### 高级用法

<demo vue="qrcode/Popover.vue"></demo>

## API

> 自 `antd@5.1.0` 版本开始提供该组件。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| value | 扫描后的文本 | string | - |
| type | 渲染类型 | `canvas \| svg ` | `canvas` | 5.6.0 |
| icon | 二维码中图片的地址（目前只支持图片地址） | string | - |
| size | 二维码大小 | number | 160 |
| iconSize | 二维码中图片的大小 | number \| `{ width: number; height: number }` | 40 | 5.19.0 |
| color | 二维码颜色 | string | `#000` |
| bgColor | 二维码背景颜色 | string | `transparent` | 5.5.0 |
| bordered | 是否有边框 | boolean | `true` |
| errorLevel | 二维码纠错等级 | `'L' \| 'M' \| 'Q' \| 'H' ` | `M` |
| status | 二维码状态 | `active \| expired \| loading \| scanned` | `active` | scanned: 5.13.0 |
| statusRender | 自定义状态渲染器 | (info: [StatusRenderInfo]) => VNode | - | 5.20.0 |
| onRefresh | 点击"点击刷新"的回调 | `() => void` | - |

### StatusRenderInfo

```typescript
type StatusRenderInfo = {
  status: QRStatus;
  locale: Locale['QRCode'];
  onRefresh?: () => void;
};
```
