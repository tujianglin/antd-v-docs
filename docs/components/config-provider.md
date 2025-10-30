---
outline: deep
---

# ConfigProvider 全局化配置

## 使用

### 内容安全策略（CSP）{#csp}

部分组件为了支持波纹效果，使用了动态样式。如果开启了 Content Security Policy (CSP)，你可以通过 `csp` 属性来进行配置：

```tsx
<ConfigProvider csp={{ nonce: 'YourNonceCode' }}>
  <Button>My Button</Button>
</ConfigProvider>
```

## 代码演示

### 国际化

<demo vue="config-provider/locale.vue"></demo>

### 方向

<demo vue="config-provider/direction.vue"></demo>

### 组件尺寸

<demo vue="config-provider/size.vue"></demo>

<!-- ### 主题 -->

<!-- <demo vue="config-provider/theme.vue"></demo> -->

<!-- ### 自定义波纹 -->

<!-- <demo vue="config-provider/wave.vue"></demo> -->

<!-- ### 静态方法 -->

<!-- <demo vue="config-provider/holderRender.vue"></demo> -->
