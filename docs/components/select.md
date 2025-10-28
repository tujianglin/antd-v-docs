---
outline: deep
---

# Select

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 [Radio](/components/radio) 是更好的选择。
- 如果你在寻找一个可输可选的输入框，那你可能需要 [AutoComplete](/components/auto-complete)。

## 代码演示

### 基本使用
<Code src="select/basic.vue">基本使用</Code>

### 带搜索框
<Code src="select/search.vue">带搜索框</Code>

### 自定义搜索
<Code src="select/search-filter-option.vue">自定义搜索</Code>

### 多选
<Code src="select/multiple.vue">多选</Code>

### 三种大小
<Code src="select/size.vue">三种大小</Code>

### 自定义下拉选项
<Code src="select/option-render.vue">自定义下拉选项</Code>

### 带排序的搜索
<Code src="select/search-sort.vue">带排序的搜索</Code>

### 标签
<Code src="select/tags.vue">标签</Code>

### 分组
<Code src="select/optgroup.vue">分组</Code>

### 联动
<Code src="select/coordinate.vue">联动</Code>

### 搜索框
<Code src="select/search-box.vue">搜索框</Code>

### 获得选项的文本
<Code src="select/label-in-value.vue">获得选项的文本</Code>

### 自动分词
<Code src="select/automatic-tokenization.vue">自动分词</Code>

### 搜索用户
<Code src="select/select-users.vue">搜索用户</Code>

### 前后缀
<Code src="select/suffix.vue" version="5.22.0">前后缀</Code>

### 扩展菜单
<Code src="select/custom-dropdown-menu.vue">扩展菜单</Code>

### 隐藏已选择选项
<Code src="select/hide-selected.vue">隐藏已选择选项</Code>

### 形态变体
<Code src="select/variant.vue" version="5.13.0">形态变体</Code>

### 自定义选择标签
<Code src="select/custom-tag-render.vue">自定义选择标签</Code>

### 自定义选中 label
<Code src="select/custom-label-render.vue">自定义选中 label</Code>

### 响应式 maxTagCount
<Code src="select/responsive.vue">响应式 maxTagCount</Code>

### 大数据
<Code src="select/big-data.vue">大数据</Code>

### 自定义状态
<Code src="select/status.vue">自定义状态</Code>

### 弹出位置
<Code src="select/placement.vue">弹出位置</Code>

### 最大选中数量
<Code src="select/maxCount.vue" version="5.13.0">最大选中数量</Code>


## API

### Select props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 自定义清除按钮 | boolean \| `{ clearIcon?: VNode }` | false | 5.8.0: 支持对象类型 |
| autofocus | 默认获取焦点 | boolean | false |  |
| classNames | 语义化结构 class | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.25.0 |
| defaultActiveFirstOption | 是否默认高亮第一个选项 | boolean | true |  |
| disabled | 是否禁用 | boolean | false |  |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 | boolean \| number | true | 5.5.0 |
| popupRender | 自定义下拉框内容 | (originNode: VNode) => VNode | - |  |
| fieldNames | 自定义节点 label、value、options、groupLabel 的字段 | object | { label: `label`, value: `value`, options: `options`, groupLabel: `label` } | 4.17.0（`groupLabel` 在 5.6.0 新增） |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0) | function(triggerNode) | () => document.body |  |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 `string` 变为 { value: string, label: VNode } 的格式 | boolean | false |  |
| listHeight | 设置弹窗滚动高度 | number | 256 |  |
| loading | 加载中状态 | boolean | false |  |
| maxCount | 指定可选中的最多 items 数量，仅在 `mode` 为 `multiple` 或 `tags` 时生效 | number | - | 5.13.0 |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number \| `responsive` | - | responsive: 4.10 |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | VNode \| function(omittedValues) | - |  |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | - |  |
| menuItemSelectedIcon | 自定义多选时当前选中的条目图标 | VNode | - |  |
| mode | 设置 Select 的模式为多选或标签 | `multiple` \| `tags` | - |  |
| notFoundContent | 当下拉列表为空时显示的内容 | VNode | `Not Found` |  |
| open(v-model) | 是否展开下拉菜单 | boolean | - |  |
| optionLabelProp | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 `value`。[示例](https://codesandbox.io/s/antd-reproduction-template-tk678) | string | `children` |  |
| options | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 | `{ label, value }\[]` | - |  |
| optionRender | 自定义渲染下拉选项 | (option: FlattenOptionData\<BaseOptionType\> , info: { index: number }) => VNode | - | 5.11.0 |
| placeholder | 选择框默认文本 | string | - |  |
| placement | 选择框弹出的位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |  |
| prefix | 自定义前缀 | VNode | - | 5.22.0 |
| removeIcon | 自定义的多选框清除图标 | VNode | - |  |
| showSearch | 配置是否可搜索 | boolean \| [Object](#showsearch) | 单选为 false，多选为 true |  |
| size | 选择框大小 | `large` \| `middle` \| `small` | `middle` |  |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| suffixIcon | 自定义的选择框后缀图标。以防止图标被用于其他交互，替换的图标默认不会响应展开、收缩事件，可以通过添加 `pointer-events: none` 样式透传。 | VNode | `<DownOutlined />` |  |
| styles | 语义化结构 style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.25.0 |
| tagRender | 自定义 tag 内容 render，仅在 `mode` 为 `multiple` 或 `tags` 时生效 | (props) => VNode | - |  |
| labelRender | 自定义当前选中的 label 内容 render （LabelInValueType的定义见 [LabelInValueType](https://github.com/react-component/select/blob/b39c28aa2a94e7754ebc570f200ab5fd33bd31e7/src/Select.tsx#L70)） | (props: LabelInValueType) => VNode | - | 5.15.0 |
| tokenSeparators | 自动分词的分隔符，仅在 `mode="tags"` 时生效 | string\[] | - |  |
| value(v-model) | 指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新） | string \| string\[] \| <br />number \| number\[] \| <br />LabeledValue \| LabeledValue\[] | - |  |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true | 4.1.0 |
| onActive | 键盘和鼠标交互时触发 | function(value: string \| number \| LabeledValue) | - |  |
| onBlur | 失去焦点时回调 | function | - |  |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function(value, option:Option \| Array&lt;Option>) | - |  |
| onClear | 清除内容时回调 | function | - | 4.6.0 |
| onDeselect | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 `multiple` 或 `tags` 模式下生效 | function(value: string \| number \| LabeledValue) | - |  |
| onOpenChange | 展开下拉菜单的回调 | (open: boolean) => void | - |  |
| onFocus | 获得焦点时回调 | (event: FocusEvent) => void | - |  |
| onInputKeyDown | 按键按下时回调 | (event: KeyboardEvent) => void | - |  |
| onPopupScroll | 下拉列表滚动时的回调 | (event: UIEvent) => void | - |  |
| onSelect | 被选中时调用，参数为选中项的 value (或 key) 值 | function(value: string \| number \| LabeledValue, option: Option) | - |  |

> 注意，如果发现下拉菜单跟随页面滚动，或者需要在其他弹层中触发 Select，请尝试使用 `getPopupContainer={triggerNode => triggerNode.parentElement}` 将下拉弹层渲染节点固定在触发器的父元素中。

### showSearch

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效 | boolean | true |  |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false。[示例](#select-demo-search) | boolean \| function(inputValue, option) | true |  |
| filterSort | 搜索时对筛选结果项的排序函数, 类似[Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)里的 compareFunction | (optionA: Option, optionB: Option, info: { searchValue: string }) => number | - | `searchValue`: 5.19.0 |
| optionFilterProp | 搜索时过滤对应的 `option` 属性，如设置为 `children` 表示对内嵌内容进行搜索。若通过 `options` 属性配置选项内容，建议设置 `optionFilterProp="label"` 来对内容进行搜索。 | string | `value` |  |
| searchValue | 控制搜索文本 | string | - |  |
| onSearch | 文本框值变化时回调 | function(value: string) | - |  |

### Select Methods

| 名称    | 说明     | 版本 |
| ------- | -------- | ---- |
| blur()  | 取消焦点 |      |
| focus() | 获取焦点 |      |

### Option props

| 参数      | 说明                     | 类型             | 默认值 | 版本 |
| --------- | ------------------------ | ---------------- | ------ | ---- |
| className | Option 器类名            | string           | -      |      |
| disabled  | 是否禁用                 | boolean          | false  |      |
| title     | 选项上的原生 title 提示  | string           | -      |      |
| value     | 默认根据此属性值进行筛选 | string \| number | -      |      |

### OptGroup props

| 参数      | 说明                    | 类型            | 默认值 | 版本 |
| --------- | ----------------------- | --------------- | ------ | ---- |
| key       | Key                     | string          | -      |      |
| label     | 组名                    | VNode | -      |      |
| className | Option 器类名           | string          | -      |      |
| title     | 选项上的原生 title 提示 | string          | -      |      |
