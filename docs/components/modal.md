---
outline: deep
---

# Modal 对话框

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用 [`App.useApp`](/components/app) 封装的语法糖方法。

## 代码演示

### 基本

<demo vue="modal/basic.vue"></demo>

### 异步关闭

<demo vue="modal/async.vue"></demo>

### 自定义页脚

<demo vue="modal/footer.vue"></demo>

### 加载中

<demo vue="modal/loading.vue" version="5.18.0"></demo>

### 自定义页脚渲染函数

<demo vue="modal/footer-render.vue" version="5.9.0"></demo>

### 使用 hooks 获得上下文

<demo vue="modal/hooks.vue"></demo>

### 手动更新和移除

<demo vue="modal/manual.vue"></demo>

### 自定义位置

<demo vue="modal/position.vue"></demo>

<!-- ### 自定义页脚按钮属性 -->

<!-- <demo vue="modal/button-props.vue"></demo> -->

<!-- ### 自定义渲染对话框 -->

<!-- <demo vue="modal/modal-render.vue"></demo> -->

<!-- ### 自定义模态的宽度 -->

<!-- <demo vue="modal/width.vue"></demo> -->

### 静态方法

<demo vue="modal/static-info.vue"></demo>

### 静态确认对话框

<demo vue="modal/confirm.vue"></demo>

<!-- ### 自定义内部模块 class -->

<!-- <demo vue="modal/classNames.vue"></demo> -->

### 销毁确认对话框

<demo vue="modal/confirm-router.vue"></demo>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | - |  |
| classNames | 配置弹窗内置模块的 className | [Record<SemanticDOM, string>] | - |  |
| styles | 配置弹窗内置模块的 style | [Record<SemanticDOM, CSSProperties>] | - | 5.10.0 |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](/components/button) | - |  |
| cancelText | 取消按钮文字 | ReactNode | `取消` |  |
| centered | 垂直居中展示 Modal | boolean | false |  |
| closable | 是否显示右上角的关闭按钮 | boolean \| [ClosableType](#closabletype) | true | - |
| closeIcon | 自定义关闭图标。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | ReactNode | &lt;CloseOutlined /> |  |
| confirmLoading | 确定按钮 loading | boolean | false |  |
| destroyOnHidden | 关闭时销毁 Modal 里的子元素 | boolean | false | 5.25.0 |
| focusTriggerAfterClose | 对话框关闭后是否需要聚焦触发元素 | boolean | true | 4.9.0 |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | ReactNode \| (originNode: ReactNode, extra: { OkBtn: VNode, CancelBtn: VNode }) => ReactNode | (确定取消按钮) | renderFunction: 5.9.0 |
| forceRender | 强制渲染 Modal | boolean | false |  |
| getContainer | 指定 Modal 挂载的节点，但依旧为全屏展示，`false` 为挂载在当前位置 | HTMLElement \| () => HTMLElement \| Selectors \| false | document.body |  |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
| mask | 遮罩效果 | boolean \| `{enabled: boolean, blur: boolean}` | true |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
| modalRender | 自定义渲染对话框 | (node: ReactNode) => ReactNode | - | 4.7.0 |
| okButtonProps | ok 按钮 props | [ButtonProps](/components/button) | - |  |
| okText | 确认按钮文字 | ReactNode | `确定` |  |
| okType | 确认按钮类型 | string | `primary` |  |
| style | 可用于设置浮层的样式，调整浮层位置等 | CSSProperties | - |  |
| loading | 显示骨架屏 | boolean |  | 5.18.0 |
| title | 标题 | ReactNode | - |  |
| open | 对话框是否可见 | boolean | - |  |
| width | 宽度 | string \| number \| [Breakpoint](/components/grid) | 520 | Breakpoint: 5.23.0 |
| wrapClassName | 对话框外层容器的类名 | string | - |  |
| zIndex | 设置 Modal 的 `z-index` | number | 1000 |  |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |  |
| onOk | 点击确定回调 | function(e) | - |  |
| afterOpenChange | 打开和关闭 Modal 时动画结束后的回调 | (open: boolean) => void | - | 5.4.0 |

#### 注意

- 静态使用 `Modal.xxx()` 时，请使用 hooks 语法, 静态有 `bug`
- `<Modal />` 默认关闭后状态不会自动清空，如果希望每次打开都是新内容，请设置 `destroyOnHidden`。
- `<Modal />` 和 Form 一起配合使用时，设置 `destroyOnHidden` 也不会在 Modal 关闭时销毁表单字段数据，需要设置 `<Form preserve={false} />`。
- `Modal.method()` RTL 模式仅支持 hooks 用法。

### Modal.method()

包括：

- `Modal.info`
- `Modal.success`
- `Modal.error`
- `Modal.warning`
- `Modal.confirm`

以上均为一个函数，参数为 object，具体属性如下：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | - | 4.9.0 |
| autoFocusButton | 指定自动获得焦点的按钮 | null \| `ok` \| `cancel` | `ok` |  |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](/components/button) | - |  |
| cancelText | 设置 Modal.confirm 取消按钮文字 | string | `取消` |  |
| centered | 垂直居中展示 Modal | boolean | false |  |
| className | 容器类名 | string | - |  |
| closable | 是否显示右上角的关闭按钮 | boolean \| [ClosableType](#closabletype) | false | - |
| closeIcon | 自定义关闭图标 | ReactNode | undefined | 4.9.0 |
| content | 内容 | ReactNode | - |  |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer: null` | ReactNode \| (originNode: ReactNode, extra: { OkBtn: VNode, CancelBtn: VNode }) => ReactNode | - | renderFunction: 5.9.0 |
| getContainer | 指定 Modal 挂载的 HTML 节点，false 为挂载在当前 dom | HTMLElement \| () => HTMLElement \| Selectors \| false | document.body |  |
| icon | 自定义图标 | ReactNode | &lt;ExclamationCircleFilled /> |  |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
| mask | 遮罩效果 | boolean \| `{enabled: boolean, blur: boolean}` | true |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | false |  |
| okButtonProps | ok 按钮 props | [ButtonProps](/components/button) | - |  |
| okText | 确认按钮文字 | string | `确定` |  |
| okType | 确认按钮类型 | string | `primary` |  |
| style | 可用于设置浮层的样式，调整浮层位置等 | CSSProperties | - |  |
| title | 标题 | ReactNode | - |  |
| width | 宽度 | string \| number | 416 |  |
| wrapClassName | 对话框外层容器的类名 | string | - | 4.18.0 |
| zIndex | 设置 Modal 的 `z-index` | number | 1000 |  |
| onCancel | 点击取消回调，参数为关闭函数，若返回 promise 时 resolve 为正常关闭, reject 为不关闭 | function(close) | - |  |
| onOk | 点击确定回调，参数为关闭函数，若返回 promise 时 resolve 为正常关闭, reject 为不关闭 | function(close) | - |  |

以上函数调用后，会返回一个引用，可以通过该引用更新和关闭弹窗。

### ClosableType

| 参数       | 说明                   | 类型      | 默认值    | 版本 |
| ---------- | ---------------------- | --------- | --------- | ---- |
| afterClose | Modal 完全关闭后的回调 | function  | -         | -    |
| closeIcon  | 自定义关闭图标         | ReactNode | undefined | -    |
| disabled   | 关闭图标是否禁用       | boolean   | false     | -    |
| onClose    | 弹窗关闭即时调用       | Function  | undefined | -    |

### Modal.useModal()

当你需要使用 Context 时，可以通过 `Modal.useModal` 创建一个 `contextHolder` 插入子节点中。通过 hooks 创建的临时 Modal 将会得到 `contextHolder` 所在位置的所有上下文。创建的 `modal` 对象拥有与 [`Modal.method`](#modalmethod) 相同的创建通知方法。

```jsx
const [modal, contextHolder] = Modal.useModal();

return <div>{contextHolder}</div>;
```

`modal.confirm` 返回方法：

- `destroy`：销毁当前窗口
- `update`：更新当前窗口
- `then`：Promise 链式调用，支持 `await` 操作。该方法为 Hooks 仅有

```tsx
//点击 `onOk` 时返回 `true`，点击 `onCancel` 时返回 `false`
const confirmed = await modal.confirm({ ... });
```
