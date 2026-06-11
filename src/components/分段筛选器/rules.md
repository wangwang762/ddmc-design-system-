# 分段筛选器 调用规则

> Figma node: 分段筛选器

## 用这个组件的条件
列表页顶部的多维度筛选条（综合、价格、销量等），支持排序切换。

## 不用这个组件的条件
- Tab 页签切换（非筛选/排序场景）→ 用 `选项卡`
- 单一维度筛选 → 不需要此组件

## 变体选择

无布局变体。通过 `items` 配置筛选项，`sortable: true` 的项支持升序/降序切换。

**sortOrder 状态：**

| 状态 | 说明 |
|------|------|
| `默认` | 未排序，仅高亮选中项 |
| `升序` | 当前项升序，显示向上箭头 |
| `降序` | 当前项降序，显示向下箭头 |

## 示例

```tsx
<分段筛选器
  items={[
    { key: 'default', label: '综合' },
    { key: 'price', label: '价格', sortable: true },
    { key: 'sales', label: '销量', sortable: true },
  ]}
  activeKey={activeKey}
  sortOrder={sortOrder}
  onChange={(key, order) => {
    setActiveKey(key)
    setSortOrder(order)
  }}
/>
```

## 常见误用

- 无排序需求的纯 Tab 切换用分段筛选器（视觉上过重，应用 `选项卡`）
- 只有一个筛选维度时使用（单维度直接用文字+箭头即可）

## 可替代组件

| 场景 | 替代组件 |
|------|---------|
| 纯 Tab 页签切换 | `选项卡` |
