---
outline: deep
---

# Button

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 Ant Design 中我们提供了五种按钮。

- 🔵 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- ⚪️ 默认按钮：用于没有主次之分的一组行动点。
- 😶 虚线按钮：常用于添加操作。
- 🔤 文本按钮：用于最次级的行动点。
- 🔗 链接按钮：一般用于链接，即导航至某位置。

以及四种状态属性与上面配合使用。

- ⚠️ 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 👻 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 🚫 禁用：行动点不可用的时候，一般需要文案解释。
- 🔃 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## 代码演示

### 语法糖

<Code src="button/basic.vue">语法糖</Code>

### 颜色与变体

<Code src="button/color-variant.vue" version="5.21.0">颜色与变体</Code>

### 按钮图标

<Code src="button/icon.vue">按钮图标</Code>

### 按钮图标位置

<Code src="button/icon-position.vue" version="5.17.0">按钮图标位置</Code>

### 按钮尺寸

<Code src="button/size.vue">按钮尺寸</Code>

### 不可用状态

<Code src="button/disabled.vue">不可用状态</Code>

### 加载中状态

<Code src="button/loading.vue">加载中状态</Code>

### 多个按钮组合

<Code src="button/multiple.vue">多个按钮组合</Code>

### 幽灵按钮

<Code src="button/ghost.vue">幽灵按钮</Code>

### 危险按钮

<Code src="button/danger.vue">危险按钮</Code>

### Block 按钮

<Code src="button/block.vue">Block 按钮</Code>

### 移除两个汉字之间的空格

<Code src="button/chinese-space.vue" version="5.17.0">移除两个汉字之间的空格</Code>

## API


通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`。

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoInsertSpace | 我们默认提供两个汉字之间的空格，可以设置 `autoInsertSpace` 为 `false` 关闭 | boolean | `true` |  |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |  |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | [Record<SemanticDOM, string> \| (info: { props })=> Record<SemanticDOM, string>](#semantic-dom) |  |  |
| color | 设置按钮的颜色 | `default` \| `primary` \| `danger` \| [PresetColors](#presetcolors) |  |  |
| danger | 语法糖，设置危险按钮。当设置 `color` 时会以后者为准 | boolean | false |  |
| disabled | 设置按钮失效状态 | boolean | false |  |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false |  |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |  |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#type) | `submit` \| `reset` \| `button` | `button` |  |
| icon | 设置按钮的图标组件 | VNode | - |  |
| iconPlacement | 设置按钮图标组件的位置 | `start` \| `end` | `start` | - |
| loading | 设置按钮载入状态 | boolean \| `{ delay: number, icon: VNode }` | false | icon: 5.23.0 |
| shape | 设置按钮形状 | `default` \| `circle` \| `round` | `default` |  |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | `middle` |  |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | [Record<SemanticDOM, CSSProperties> \| (info: { props })=> Record<SemanticDOM, CSSProperties>](#semantic-dom) | - |  |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |  |
| type | 语法糖，设置按钮类型。当设置 `variant` 与 `color` 时以后者为准 | `primary` \| `dashed` \| `link` \| `text` \| `default` | `default` |  |
| onClick | 点击按钮时的回调 | (event: MouseEvent) => void | - |  |
| variant | 设置按钮的变体 | `outlined` \| `dashed` \| `solid` \| `filled` \| `text` \| `link` | - |  |

支持原生 button 的其他所有属性。
