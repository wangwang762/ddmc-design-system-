# HomeIndicator 调用规则

> Figma node: `248:73392`

## 用这个组件的条件
在 mockup / 设计稿截图中，需要还原 iOS 底部横条时使用。所有全屏页面底部都应包含。

## 不用这个组件的条件
- 真实 App 内无需手动添加，系统自动渲染
- 非全屏页面（如弹窗、半屏 sheet）→ 不用此组件

## 变体选择

| 场景 | mode |
|------|------|
| 白色/浅色背景页面 | `Light`（黑色横条） |
| 深色/黑色背景页面 | `Dark`（白色横条） |

## 示例

```tsx
// 浅色页面底部
<HomeIndicator mode="Light" />

// 深色页面底部
<HomeIndicator mode="Dark" />
```

## 常见误用

- 与 `键盘` 同时手动添加（`键盘` 组件内已内置 Home Indicator，重复叠加）
- 浅色页面用 `Dark` 模式（白色横条在白色背景上不可见）
- 在真实 App 代码中渲染（系统级，仅用于 mockup）

## 可替代组件

无。Home Indicator 仅用于 mockup 展示，无业务替代场景。
