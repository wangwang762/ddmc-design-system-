# 金刚位 调用规则

> Figma node: 金刚位

## 用这个组件的条件
首页/活动页的图标入口宫格，每项由 squircle 图标 + 文字标签组成，支持分页。

## 不用这个组件的条件
- 普通列表导航 → 不用此组件
- 底部 Tab → 用 `底部导航`

## 变体选择

无布局变体，通过 `每行列数` 和 `iconSize` 控制密度：

| 行数/密度 | 每行列数 | iconSize |
|---------|---------|---------|
| 第 1-2 行（标准） | 5（默认） | `48` |
| 第 3 行（小图标，更多入口） | 5 | `38` |

## 关键 Props

- `badge`：图标右上角红色角标文字（如 "新"），有促销/新功能时传
- `activePage` + `totalPages`：≥2 页时显示底部分页指示器

## 示例

```tsx
<金刚位
  items={[
    { key: 'fresh', iconSrc: '/icons/fresh.png', label: '新鲜蔬果', badge: '新' },
    { key: 'meat', iconSrc: '/icons/meat.png', label: '肉禽蛋品' },
    { key: 'dairy', iconSrc: '/icons/dairy.png', label: '乳品冷饮' },
    { key: 'grain', iconSrc: '/icons/grain.png', label: '粮油调味' },
    { key: 'more', iconSrc: '/icons/more.png', label: '更多', iconSize: 38 },
  ]}
  每行列数={5}
  activePage={0}
  totalPages={2}
/>
```

## 常见误用

- 用金刚位做普通文字链接列表（金刚位专为 squircle 图标+文字的宫格入口设计）
- 每行超过 5 个图标（Figma 规范固定每行 5 列）

## 可替代组件

| 场景 | 替代组件 |
|------|---------|
| 底部 Tab 导航 | `底部导航` |
