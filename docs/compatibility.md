# 与 ant-design-vue 兼容性处理

## 1. CSS-in-JS 上下文冲突

本项目和 `ant-design-vue@4.x` 都使用了各自的 CSS-in-JS 实现：

- **本项目**：自定义的 `vc-cssinjs` 实现
- **ant-design-vue**：内部也有自己的 `cssinjs` 依赖

当 `ant-design-vue` 组件嵌套自定义组件时：

```vue
<Space>  <!-- ant-design-vue 的组件 -->
  <Button />  <!-- 自定义组件 -->
</Space>
```

**最重要的解决方案**：在使用 `ant-design-vue` 组件时，通过 `ConfigProvider` 重定义 `prefixCls`，避免样式冲突。

## 使用指南

### 1. 统一使用 ConfigProvider

在应用的**最外层**使用 `ant-design-vue` 的 `ConfigProvider` 并设置唯一的前缀：

```vue
<!-- App.vue 或 main.ts -->
<template>
  <ConfigProvider prefix-cls="antdv">
    <RouterView />
  </ConfigProvider>
</template>
```
