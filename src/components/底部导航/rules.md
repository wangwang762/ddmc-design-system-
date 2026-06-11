# 底部导航 调用规则

> Figma node: 见 assets/

## 用这个组件的条件
应用主框架的底部 Tab Bar，所有一级页面共用。

## 不用这个组件的条件
- 二级及以下页面（商品详情、订单详情等）→ 不显示底部导航，用 `标题栏` 返回

## 变体选择

无布局变体。标准配置为 5-tab，中间为 AI 广告位（`displayType: '全图片'`）：

| displayType | 说明 |
|-------------|------|
| `标准` | icon(30×30) + label，普通 tab |
| `全图片` | 38×38 渐变圆，无 label，用于 AI/品牌广告位 |

## 关键 Props

- `activeTab`：必须与路由/页面状态同步，决定哪个 tab 高亮
- `badge`：购物车 tab 传购物车商品数量

## 示例

```tsx
<底部导航
  tabs={[
    { tab: '首页' },
    { tab: '分类' },
    { tab: '吃什么', displayType: '全图片' },
    { tab: '购物车', badge: cartCount },
    { tab: '我的' },
  ]}
  activeTab={currentTab}
  onTabChange={setCurrentTab}
/>
```

## 常见误用

- 二级页面（商品详情、订单详情等）也显示底部导航（二级页面应隐藏）
- Tab 图标不使用 `TabIcon*` 组件而手写 SVG

## 可替代组件

| 场景 | 替代组件 |
|------|---------|
| 二级页面返回导航 | `标题栏` |
