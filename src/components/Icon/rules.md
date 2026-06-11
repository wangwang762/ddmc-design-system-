# Icon 调用规则

> 图标库路径: `src/icons-new/`，共 199 个图标

## 用这个组件的条件
**所有需要图标的场景必须使用 `<Icon>` 组件，无例外。**

## 不用这个组件的条件（禁止）
- 禁止内联 SVG（`<svg><path .../></svg>`）
- 禁止引入 react-icons、heroicons 等第三方图标库
- 禁止 `import xxxIcon from './icon.svg'` 绕过组件

例外（使用前必须先查 `types.ts` 的 `IconName` 确认图标不存在）：
- 图标库中确实没有匹配图标
- 需要多色/渐变等复杂效果

## 变体选择

无变体，通过 `name` 和 `size` 选择：

| 使用场景 | size |
|---------|------|
| 导航栏、底部 Tab、主要操作图标 | `24` |
| 列表行内、标签旁 | `16` |
| 极小空间 | `12` |
| 大图标展示 | `32` |

## 关键 Props

- `color`：不传则继承父元素 CSS `color`，推荐用继承方式而非硬编码颜色

## 常用图标名

| 场景 | IconName |
|------|---------|
| 购物车 | `Cart` / `Cart2` |
| 搜索 | `Search` |
| 定位 | `Location` / `locate` |
| 消息/通知 | `Bell` / `Notice` |
| 返回 | `Left` |
| 关闭 | `Close` |
| 更多 | `More` |
| 订单 | `Order` |
| 用户 | `User` |
| 收藏 | `Heart` / `like` |

## 示例

```tsx
import { Icon } from '../../components/Icon'

// 基础用法（继承颜色）
<Icon name="Cart" size={24} />

// 指定颜色
<Icon name="Search" size={16} color="#00B740" />

// 继承父元素颜色
<span style={{ color: '#9A9A9A' }}>
  <Icon name="Location" size={16} />
</span>
```

## 常见误用

- 内联 SVG（`<svg><path/></svg>`）：维护困难，无法批量换色，禁止使用
- 引入 react-icons/heroicons 等第三方图标库（风格与设计系统不一致）
- `<img src="xxx.svg">` 绕过 Icon 组件（无法继承 CSS color）

## 可替代组件

无。所有图标场景必须使用 `<Icon>`，不存在合法替代方案。
