---
outline: deep
---

# Pagination 分页

## 何时使用

- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。

## 代码演示

### 基本

<demo vue="pagination/basic.vue"></demo>

### 方向

<demo vue="pagination/align.vue" version="5.19.0"></demo>

### 更多

<demo vue="pagination/more.vue"></demo>

### 改变

<demo vue="pagination/changer.vue"></demo>

### 跳转

<demo vue="pagination/jump.vue"></demo>

### 迷你

<demo vue="pagination/mini.vue"></demo>

### 简洁

<demo vue="pagination/simple.vue"></demo>

### 总数

<demo vue="pagination/total.vue"></demo>

### 全部展示

<demo vue="pagination/all.vue"></demo>

### 上一步和下一步

<demo vue="pagination/itemRender.vue"></demo>

## API

```jsx
<Pagination onChange={onChange} total={50} />
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 对齐方式 | start \| center \| end | - | 5.19.0 |
| current(v-model) | 当前页数 | number | - |  |
| disabled | 禁用分页 | boolean | - |  |
| hideOnSinglePage | 只有一页时是否隐藏分页器 | boolean | false |  |
| itemRender | 用于自定义页码的结构，可用于优化 SEO | (page, type: 'page' \| 'prev' \| 'next', originalElement) => VNode | - |  |
| pageSize(v-model) | 每页条数 | number | - |  |
| pageSizeOptions | 指定每页可以显示多少条 | number\[] | \[`10`, `20`, `50`, `100`] |  |
| responsive | 当 size 未指定时，根据屏幕宽度自动调整尺寸 | boolean | - |  |
| showLessItems | 是否显示较少页面内容 | boolean | false |  |
| showQuickJumper | 是否可以快速跳转至某页 | boolean \| `{ goButton: VNode }` | false |  |
| showSizeChanger | 是否展示 `pageSize` 切换器，当 `total` 大于 50 时默认为 true | boolean \| [SelectProps](/components/select#api) | - | SelectProps: 5.21.0 |
| showTitle | 是否显示原生 tooltip 页码提示 | boolean | true |  |
| showTotal | 用于显示数据总量和当前数据顺序 | function(total, range) | - |  |
| simple | 当添加该属性时，显示为简单分页 | boolean \| `{ readOnly?: boolean }` | - |  |
| size | 当为 `small` 时，是小尺寸分页 | `default` \| `small` | `default` |  |
| total | 数据总数 | number | 0 |  |
| onChange | 页码或 `pageSize` 改变的回调，参数是改变后的页码及每页条数 | function(page, pageSize) | - |  |
| onShowSizeChange | pageSize 变化的回调 | function(current, size) | - |  |
