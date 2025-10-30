---
outline: deep
---

# Dropdown 下拉菜单

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

- 用于收罗一组命令操作。
- Select 用于选择，而 Dropdown 是命令集合。

## 代码演示

### 基本

<demo vue="dropdown/basic.vue"></demo>

### 额外节点

<demo vue="dropdown/extra.vue" version="5.21.0"></demo>

### 弹出位置

<demo vue="dropdown/placement.vue"></demo>

### 箭头

<demo vue="dropdown/arrow.vue"></demo>

### 其他元素

<demo vue="dropdown/item.vue"></demo>

### 箭头指向

<demo vue="dropdown/arrow-center.vue"></demo>

### 触发方式

<demo vue="dropdown/trigger.vue"></demo>

### 触发事件

<demo vue="dropdown/event.vue"></demo>

### 带下拉框的按钮

<demo vue="dropdown/dropdown-button.vue"></demo>

### 扩展菜单

<demo vue="dropdown/custom-dropdown.vue"></demo>

### 多级菜单

<demo vue="dropdown/sub-menu.vue"></demo>

### 菜单隐藏方式

<demo vue="dropdown/overlay-open.vue"></demo>

### 右键菜单

<demo vue="dropdown/context-menu.vue"></demo>

### 加载中状态

<demo vue="dropdown/loading.vue"></demo>

### 菜单可选选择

<demo vue="dropdown/selectable.vue"></demo>

## API

### Dropdown

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| arrow | 下拉框箭头是否显示 | boolean \| `{ pointAtCenter: boolean }` | false |  |
| autoAdjustOverflow | 下拉框被遮挡时自动调整位置 | boolean | true | 5.2.0 |
| autofocus | 打开后自动聚焦下拉框 | boolean | false |  |
| disabled | 菜单是否禁用 | boolean | - |  |
| destroyOnHidden | 关闭后是否销毁 Dropdown | boolean | false | 5.25.0 |
| popupRender | 自定义弹出框内容 | (menus: VNode) => VNode | - | 5.25.0 |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) => HTMLElement | () => document.body |  |
| menu | 菜单配置项 | [MenuProps](/components/menu#api) | - |  |
| placement | 菜单弹出位置：`bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight` | string | `bottomLeft` |  |
| trigger | 触发下拉的行为，移动端不支持 hover | Array&lt;`click`\|`hover`\|`contextMenu`> | \[`hover`] |  |
| open | 菜单是否显示 | boolean | - |  |
| onOpenChange | 菜单显示状态改变时调用，点击菜单按钮导致的消失不会触发 | (open: boolean, info: { source: 'trigger' \| 'menu' }) => void | - | `info.source`: 5.11.0 |
