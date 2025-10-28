---
outline: deep
---

# ColorPicker

## 何时使用

当用户需要自定义颜色选择的时候使用。

## 代码演示

### 基本使用

<Code src="color-picker/base.vue">基本使用</Code>

### 触发器尺寸大小

<Code src="color-picker/size.vue">触发器尺寸大小</Code>

### 受控模式

<Code src="color-picker/controlled.vue">受控模式</Code>

### 渐变色

<Code src="color-picker/line-gradient.vue" version="5.20.0">渐变色</Code>

### 渲染触发器文本

<Code src="color-picker/text-render.vue">渲染触发器文本</Code>

### 禁用

<Code src="color-picker/disabled.vue">禁用</Code>

### 禁用透明度

<Code src="color-picker/disabled-alpha.vue">禁用透明度</Code>

### 清除颜色

<Code src="color-picker/allowClear.vue">清除颜色</Code>

### 自定义触发器

<Code src="color-picker/trigger.vue">自定义触发器</Code>

### 自定义触发事件

<Code src="color-picker/trigger-event.vue">自定义触发事件</Code>

### 颜色编码

<Code src="color-picker/format.vue">颜色编码</Code>

### 预设颜色

<Code src="color-picker/presets.vue">预设颜色</Code>

### 预设渐变色

<Code src="color-picker/presets-line-gradient.vue" debug>预设渐变色</Code>

### 自定义面板

<Code src="color-picker/panel-render.vue">自定义面板</Code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| allowClear | 允许清除选择的颜色 | boolean | false |  |
| arrow | 配置弹出的箭头 | `boolean \| { pointAtCenter: boolean }` | true |  |
| disabled | 禁用颜色选择器 | boolean | - |  |
| disabledAlpha | 禁用透明度 | boolean | - | 5.8.0 |
| disabledFormat | 禁用选择颜色格式 | boolean | - |  |
| destroyOnHidden | 关闭后是否销毁弹窗 | `boolean` | false | 5.25.0 |
| format | 颜色格式 | `rgb` \| `hex` \| `hsb` | - |  |
| mode | 选择器模式，用于配置单色与渐变 | `'single' \| 'gradient' \| ('single' \| 'gradient')[]` | `single` | 5.20.0 |
| open | 是否显示弹出窗口 | boolean | - |  |
| presets | 预设的颜色 | [PresetColorType](#presetcolortype) | - |  |
| placement | 弹出窗口的位置 | 同 `Tooltips` 组件的 placement 参数设计 | `bottomLeft` |  |
| panelRender | 自定义渲染面板 | `(panel: VNode, extra: { components: { Picker: FC; Presets: FC } }) => VNode` | - | 5.7.0 |
| showText | 显示颜色文本 | boolean \| `(color: Color) => VNode` | - | 5.7.0 |
| size | 设置触发器大小 | `large` \| `middle` \| `small` | `middle` | 5.7.0 |
| trigger | 颜色选择器的触发模式 | `hover` \| `click` | `click` |  |
| value(v-model) | 颜色的值 | [ColorType](#colortype) | - |  |
| onChange | 颜色变化的回调 | `(value: Color, css: string) => void` | - |  |
| onChangeComplete | 颜色选择完成的回调，通过 `onChangeComplete` 对 `value` 受控时拖拽不会改变展示颜色 | `(value: Color) => void` | - | 5.7.0 |
| onFormatChange | 颜色格式变化的回调 | `(format: 'hex' \| 'rgb' \| 'hsb') => void` | - |  |
| onOpenChange | 当 `open` 被改变时的回调 | `(open: boolean) => void` | - |  |
| onClear | 清除的回调 | `() => void` | - | 5.6.0 |

#### ColorType

```typescript
type ColorType =
  | string
  | Color
  | {
      color: string;
      percent: number;
    }[];
```

#### PresetColorType

```typescript
type PresetColorType = {
  label: VNode;
  defaultOpen?: boolean;
  key?: string | number;
  colors: ColorType[];
};
```

### Color

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 版本 |
| :-- | :-- | :-- | :-- |
| toCssString | 转换成 CSS 支持的格式 | `() => string` | 5.20.0 |
| toHex | 转换成 `hex` 格式字符，返回格式如：`1677ff` | `() => string` | - |
| toHexString | 转换成 `hex` 格式颜色字符串，返回格式如：`#1677ff` | `() => string` | - |
| toHsb | 转换成 `hsb` 对象  | `() => ({ h: number, s: number, b: number, a number })` | - |
| toHsbString | 转换成 `hsb` 格式颜色字符串，返回格式如：`hsb(215, 91%, 100%)` | `() => string` | - |
| toRgb | 转换成 `rgb` 对象  | `() => ({ r: number, g: number, b: number, a number })` | - |
| toRgbString | 转换成 `rgb` 格式颜色字符串，返回格式如：`rgb(22, 119, 255)` | `() => string` | - |
