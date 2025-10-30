---
outline: deep
---

# App 包裹组件

## 何时使用

- 提供可消费 React context 的 `message.xxx`、`Modal.xxx`、`notification.xxx` 的静态方法，可以简化 useMessage 等方法需要手动植入 `contextHolder` 的问题。
- 提供基于 `.ant-app` 的默认重置样式，解决原生元素没有 antd 规范样式的问题。

## 代码演示

### 基本用法

<demo vue="app/basic.vue"></demo>

### Hooks 配置

<demo vue="app/config.vue"></demo>

注意：App.useApp 必须在 App 之下方可使用。

### 与 ConfigProvider 先后顺序

App 组件只能在 `ConfigProvider` 之下才能使用 Design Token， 如果需要使用其样式重置能力，则 ConfigProvider 与 App 组件必须成对出现。

```tsx
<ConfigProvider theme={{ ... }}>
  <App>
    ...
  </App>
</ConfigProvider>
```

### 内嵌使用场景（如无必要，尽量不做嵌套）

```tsx
<App>
  <Space>
    ...
    <App>...</App>
  </Space>
</App>
```

## API

### App

| 参数         | 说明                                       | 类型                                           | 默认值 | 版本   |
| ------------ | ------------------------------------------ | ---------------------------------------------- | ------ | ------ |
| component    | 设置渲染元素，为 `false` 则不创建 DOM 节点 | ComponentType \| false                         | div    | 5.11.0 |
| message      | App 内 Message 的全局配置                  | [MessageConfig](/components/message)           | -      | 5.3.0  |
| notification | App 内 Notification 的全局配置             | [NotificationConfig](/components/notification) | -      | 5.3.0  |
