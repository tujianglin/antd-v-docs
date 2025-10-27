# Code 组件使用说明

## 功能特性

`Code` 组件是一个全局的 VitePress 组件，用于在文档中显示组件预览和源代码。它类似于 dumi 的预览功能。

### 主要功能

1. **组件预览** - 动态加载并显示 Vue 组件
2. **代码展示** - 显示组件的源代码
3. **代码折叠** - 可以切换显示/隐藏源代码
4. **代码复制** - 一键复制完整源代码

## 使用方法

在 markdown 文档中直接使用 `<Code />` 组件：

```markdown
<Code src="button/basic.vue" />
```

### 属性说明

- `src` (必需) - 组件文件的相对路径（相对于 `docs/demo/` 目录）
- `title` (可选) - 标题描述

## 示例

### 基础用法

```markdown
<Code src="button/basic.vue" />
```

### 带标题

```markdown
<Code src="button/icon.vue" title="按钮图标" />
```

## 文件结构

```
docs/
  .vitepress/
    components/
      Code.vue          # Code 组件
    theme/
      index.ts          # 主题配置（注册组件）
  demo/
    button/
      basic.vue         # 示例组件
      icon.vue          # 示例组件
  components/
    button.md           # 文档（使用 Code 组件）
```

## 自定义样式

组件的样式已经自适应 VitePress 的主题变量：

- `var(--vp-c-bg)` - 背景色
- `var(--vp-c-text-1)` - 文字颜色
- `var(--vp-c-divider)` - 边框颜色
- `var(--vp-c-brand)` - 品牌色

如果需要自定义样式，可以修改 `Code.vue` 中的 `<style scoped>` 部分。

