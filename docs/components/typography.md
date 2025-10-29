---
outline: deep
---

# Typography

## 何时使用

- 当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。
- 当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。

## 代码演示

### 基本

<demo vue="typography/basic.vue"></demo>

### 标题组件

<demo vue="typography/title.vue"></demo>

### 文本与超链接组件

<demo vue="typography/text.vue"></demo>

### 可编辑

<demo vue="typography/editable.vue"></demo>

### 可复制

<demo vue="typography/copyable.vue"></demo>

### 省略号

<demo vue="typography/ellipsis.vue"></demo>

### 受控省略展开/收起

<demo vue="typography/ellipsis-controlled.vue" version="5.16.0"></demo>

## API

### Typography.Text

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| code | 添加代码样式 | boolean | false |  |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| [copyable](#copyable) | false |  |
| delete | 添加删除线样式 | boolean | false |  |
| disabled | 禁用文本 | boolean | false |  |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| [editable](#editable) | false |  |
| ellipsis | 自动溢出省略，为对象时不能设置省略行数、是否可展开、onExpand 展开事件。不同于 Typography.Paragraph，Text 组件自身不带 100% 宽度样式，因而默认情况下初次缩略后宽度便不再变化。如果需要自适应宽度，请手动配置宽度样式 | boolean \| [Omit<ellipsis, 'expandable' \| 'rows' \| 'onExpand'>](#ellipsis) | false |  |
| keyboard | 添加键盘样式 | boolean | false | 4.3.0 |
| mark | 添加标记样式 | boolean | false |  |
| onClick | 点击 Text 时的回调 | (event) => void | - |  |
| strong | 是否加粗 | boolean | false |  |
| italic | 是否斜体 | boolean | false | 4.16.0 |
| type | 文本类型 | `secondary` \| `success` \| `warning` \| `danger` | - | success: 4.6.0 |
| underline | 添加下划线样式 | boolean | false |  |

### Typography.Title

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| code | 添加代码样式 | boolean | false |  |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| [copyable](#copyable) | false |  |
| delete | 添加删除线样式 | boolean | false |  |
| disabled | 禁用文本 | boolean | false |  |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| [editable](#editable) | false |  |
| ellipsis | 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等 | boolean \| [ellipsis](#ellipsis) | false |  |
| level | 重要程度，相当于 `h1`、`h2`、`h3`、`h4`、`h5` | number: 1, 2, 3, 4, 5 | 1 | 5: 4.6.0 |
| mark | 添加标记样式 | boolean | false |  |
| onClick | 点击 Title 时的回调 | (event) => void | - |  |
| italic | 是否斜体 | boolean | false | 4.16.0 |
| type | 文本类型 | `secondary` \| `success` \| `warning` \| `danger` | - | success: 4.6.0 |
| underline | 添加下划线样式 | boolean | false |  |

### Typography.Paragraph

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| code | 添加代码样式 | boolean | false |  |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| [copyable](#copyable) | false |  |
| delete | 添加删除线样式 | boolean | false |  |
| disabled | 禁用文本 | boolean | false |  |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| [editable](#editable) | false |  |
| ellipsis | 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等 | boolean \| [ellipsis](#ellipsis) | false |  |
| mark | 添加标记样式 | boolean | false |  |
| onClick | 点击 Paragraph 时的回调 | (event) => void | - |  |
| strong | 是否加粗 | boolean | false |  |
| italic | 是否斜体 | boolean | false | 4.16.0 |
| type | 文本类型 | `secondary` \| `success` \| `warning` \| `danger` | - | success: 4.6.0 |
| underline | 添加下划线样式 | boolean | false |  |

### copyable

```ts
{
  text: string | (() => string | Promise<string>),
  onCopy: function(event),
  icon: VNode,
  tooltips: false | [VNode, VNode],
  format: 'text/plain' | 'text/html',
  tabIndex: number,
}
```

| 参数     | 说明                                      | 类型                        | 默认值                | 版本   |
| -------- | ----------------------------------------- | --------------------------- | --------------------- | ------ |
| format   | 剪切板数据的 Mime Type                    | 'text/plain' \| 'text/html' | -                     | 4.21.0 |
| icon     | 自定义拷贝图标：\[默认图标, 拷贝后的图标] | \[VNode, VNode]             | -                     | 4.6.0  |
| text     | 拷贝到剪切板里的文本                      | string                      | -                     |        |
| tooltips | 自定义提示文案，为 false 时隐藏文案       | \[VNode, VNode]             | \[`复制`, `复制成功`] | 4.4.0  |
| onCopy   | 拷贝成功的回调函数                        | function                    | -                     |        |
| tabIndex | 自定义复制按钮的 tabIndex                 | number                      | 0                     | 5.17.0 |

### editable

```ts
{
  icon: VNode,
  tooltip: VNode,
  editing: boolean,
  maxLength: number,
  autoSize: boolean | { minRows: number, maxRows: number },
  text: string,
  onChange: function(string),
  onCancel: function,
  onStart: function,
  onEnd: function,
  triggerType: ('icon' | 'text')[],
  enterIcon: VNode,
  tabIndex: number,
}
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoSize | 自动 resize 文本域 | boolean \| `{ minRows: number, maxRows: number }` | - | 4.4.0 |
| editing | 控制是否是编辑中状态 | boolean | false |  |
| icon | 自定义编辑图标 | VNode | &lt;EditOutlined /> | 4.6.0 |
| maxLength | 编辑中文本域最大长度 | number | - | 4.4.0 |
| tooltip | 自定义提示文本，为 false 时关闭 | VNode | `编辑` | 4.6.0 |
| text | 显式地指定编辑文案，为空时将隐式地使用 children | string | - | 4.24.0 |
| onChange | 文本域编辑时触发 | function(value: string) | - |  |
| onCancel | 按 ESC 退出编辑状态时触发 | function | - |  |
| onStart | 进入编辑中状态时触发 | function | - |  |
| onEnd | 按 ENTER 结束编辑状态时触发 | function | - | 4.14.0 |
| triggerType | 编辑模式触发器类型，图标、文本或者两者都设置（不设置图标作为触发器时它会隐藏） | Array&lt;`icon`\|`text`> | \[`icon`] |  |
| enterIcon | 在编辑段中自定义“enter”图标（传递“null”将删除图标） | VNode | `<EnterOutlined />` | 4.17.0 |
| tabIndex | 自定义编辑按钮的 tabIndex | number | 0 | 5.17.0 |

### ellipsis

```ts
interface EllipsisConfig {
  rows: number;
  /** `5.16.0` 新增 `collapsible` */
  expandable: boolean | 'collapsible';
  suffix: string;
  /** `5.16.0` 新增渲染函数 */
  symbol: VNode | ((expanded: boolean) => VNode);
  tooltip: VNode | TooltipProps;
  /** `5.16.0` 新增 */
  defaultExpanded: boolean;
  /** `5.16.0` 新增 */
  expanded: boolean;
  /** `5.16.0` 新增 `info` */
  onExpand: (event: MouseEvent, info: { expanded: boolean }) => void;
  onEllipsis: (ellipsis: boolean) => void;
}
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| expandable | 是否可展开 | boolean \| 'collapsible' | - | `collapsible`: 5.16.0 |
| rows | 最多显示的行数 | number | - |  |
| suffix | 自定义省略内容后缀 | string | - |  |
| symbol | 自定义展开描述文案 | VNode \| ((expanded: boolean) => VNode) | `展开` `收起` |  |
| tooltip | 省略时，展示提示信息 | VNode \| [TooltipProps](/components/tooltip-cn/#api) | - | 4.11.0 |
| defaultExpanded | 默认展开或收起 | boolean |  | 5.16.0 |
| expanded | 展开或收起 | boolean |  | 5.16.0 |
| onEllipsis | 触发省略时的回调 | function(ellipsis) | - | 4.2.0 |
| onExpand | 点击展开或收起时的回调 | function(event, { expanded: boolean }) | - | `info`: 5.16.0 |
