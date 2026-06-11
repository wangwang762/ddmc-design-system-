# DDMC Design System

**DDMC Design System — 1:1 Figma component library**（`package.json`）

叮咚买菜（DDMC）移动端 React 组件库。每个导出组件与 Figma 组件节点一一对应；组件目录名、导出符号、演示文案均使用中文，与 App UI Kit 一致。

## 快速开始

```bash
npm install
npm run dev      # Vite 开发预览（Dev Playground）
npm run build    # 产出 dist/ 供 @ddmc/design-system 消费
```

消费方入口：

```tsx
import { 按钮, 商品卡片, Icon } from '@ddmc/design-system'
import '@ddmc/design-system/styles'
```

## 设计源与文档

| 资源 | 说明 |
|------|------|
| [DESIGN.md](./DESIGN.md) | 产品目的、术语、token、信息架构——设计/实现的单一事实来源 |
| [CLAUDE.md](./CLAUDE.md) | AI 与贡献者：Figma 流程、组件索引、各组件 Props 决策表 |
| Figma 设计系统文件 | `An7YbG0EWIpL2ha3r1Wd0B`（`CLAUDE.md`） |
| Figma App UI Kits | 页面预览引用，如首页 `AJikPirZmrpaP59L6Gqhnn`（见 `src/dev/pages/首页.tsx` 文件头） |

## 仓库结构（关键路径）

```
src/
  index.ts              # 库公共 API（排除 src/dev）
  tokens/colors.ts      # 颜色 token（与 Figma Style > Colors 对齐）
  styles/globals.css    # 全局字体、line-clamp、Toast 动画
  components/           # 中文命名的 Figma 映射组件
  icons-new/            # ~199 个图标，12/16/24/32px
  dev/                  # 本地 Playground（不进入 npm 包）
    DevShell.tsx        # 侧栏：页面预览 + 组件分区
    App.tsx             # 组件变体演示
    pages/              # 首页、分类、购物车、我的等整页预览
tailwind.config.js      # 与 colors.ts 同步的 Tailwind 扩展
vite.config.ts          # serve=Playground；build=ES/CJS 库
```

## 当前能力概览

- **已发布组件**（`src/index.ts`）：按钮、购物车按钮、加减号、徽标、标签、选择按钮、开关、步进器、弹窗、底部导航、标题前标签、商品图标签、商品卡片、Cell、选项卡、分段筛选器、标题栏、金刚位、Toast、定位、叮咚特色、状态栏、疯抢价标签、价格文字标签、今日疯抢、模块标题、Icon
- **Playground 页面**：首页、分类页、购物车、我的、商品详情、家庭账号管理、拉黑管理
- **图标**：`<Icon name="…" size={12\|16\|24\|32} />`，名称见 `src/components/Icon/types.ts` 的 `IconName`

更细的视觉 token、业务术语与页面信息架构见 **[DESIGN.md](./DESIGN.md)**。
