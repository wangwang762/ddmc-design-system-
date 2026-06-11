# DESIGN.md — DDMC Design System

> 本文档内容均来自本仓库源码与配置，**不编造**产品名、文案或 token。若某信息未出现在仓库中，则不在设计稿中出现。

---

## 1. 产品目的

| 字段 | 仓库中的定义 |
|------|----------------|
| 包名 | `ddmc-design-system` |
| 描述 | `DDMC Design System - 1:1 Figma component library` |
| 品牌 / 产品 | **叮咚买菜**（`CLAUDE.md`：叮咚买菜移动端组件库） |
| 交付形态 | React 18+ 组件库（`peerDependencies`: react, react-dom），构建为 ES + CJS（`vite.config.ts` → `dist/`） |
| 设计对齐 | 每个组件 **1:1 对应 Figma 节点**；颜色 token 来自 Figma Style > Colors（`src/tokens/colors.ts` 注释：`node 10:30648`） |
| 主 Figma 文件 | `An7YbG0EWIpL2ha3r1Wd0B`（`CLAUDE.md`） |

### 目标（从代码结构推断，非营销文案）

1. **可安装的 UI 组件库**：业务 App 通过 `@ddmc/design-system` 引用，禁止用原生 `<button>` 等替代已封装组件（`CLAUDE.md`）。
2. **Figma → Code 可追溯**：组件目录、`types.ts` 注释、导出 API 保留 Figma 变体名（如 `尺寸`、`类型`、`布局`）。
3. **本地验证**：`npm run dev` 启动 Dev Playground（`index.html` title: `DDMC Design System - Dev Playground`），整页与分区演示并存。
4. **图标统一**：`src/icons-new/` + `<Icon>`，禁止内联 SVG / 第三方图标库（`CLAUDE.md` Icon 规范）。

---

## 2. 什么最重要（权重）

仓库的**第一重心**不是营销落地页，而是：

1. **可复用组件 + Figma 变体** — `src/index.ts` 导出列表与 `src/dev/App.tsx` 分区演示是核心资产。
2. **生鲜电商 App 的页面骨架** — `src/dev/pages/` 用真实组件拼出 **首页、分类、购物车、我的** 等；首页文件头标明复用：`定位` / `叮咚特色品质之爱` / `金刚位` / `商品卡片(双列)` / `底部导航`，内联待拆：`搜索栏` / `Banner` / `今日疯抢`。
3. **购物流程控件** — `购物车按钮`、`加减号`、`商品卡片` 营销标签、`疯抢价标签`、`今日疯抢` 体现「浏览 → 加购 → 疯抢/促销」形态，应优先于通用 Dashboard 式区块。

设计新页面时：**先匹配组件库与 Playground 已有页面**，再补缺口；不要套无关的 SaaS 模板（hero/pricing/FAQ 等在本仓库中不存在）。

---

## 3. 产品的原生形状（信息架构）

本库服务的 UI 是 **移动端生鲜电商 App**，不是文档站或后台。数据与组件 API 体现的结构：

```
状态栏
  ↓
标题栏 / 定位（地址、站点，如演示「叮咚生鲜仓」「浦东站」）
  ↓
首页式纵向流：搜索 → Banner → 金刚位(品类网格) → 叮咚特色 → 今日疯抢(横向) → 商品瀑布流(双列商卡)
  ↓
底部导航（5 tab，中间常为「吃什么」全图片 AI 位）
```

| 结构 | 代码中的名称 / 类型 |
|------|---------------------|
| 底 Tab | `TabBarTab`: `'首页' \| '分类' \| '吃什么' \| '榜单' \| '购物车' \| '我的'`（`底部导航/types.ts`） |
| 品类入口 | `金刚位Item`：菜豆制品、肉禽蛋、水产海鲜、水果鲜花、速食冻品…（`首页.tsx` 数据） |
| 商品单元 | `商品卡片` + `布局`: 单列 / 单列定高 / 双列 / 双列定高 / 三列 / 泳道 / 新人专区商卡 |
| 标题前缀 | `标题前标签类型`: 疯抢、预售、新品、趋势、宝妈严选、叮咚心选、美麒麟 |
| 列表行 | `GroupedRow`、`活动条`（Cell） |
| 筛选 | `分段筛选器`、`选项卡` |
| 会员 / 设置 | 家庭账号、拉黑管理（`dev/pages`）；绿卡色 `#EFD573`（页面内注释为 Figma 专属值） |
| 品牌模块 | `叮咚特色`（品质之爱瓷片）、自有品牌路径：`叮咚好食光`、`良芯匠人`、`蔡长青` 等（`商品图/` 目录名） |

Playground 侧栏分组（`DevShell.tsx`）：**页面预览** → **基础操作** → **信息展示** → **导航** → **复杂组件**。

---

## 4. 术语与文案（仅使用仓库出现的标签）

### 4.1 导航与页面

- Tab：**首页、分类、吃什么、榜单、购物车、我的**
- Playground 页面：**首页、分类页、购物车、我的、家庭账号管理、拉黑管理**（及商品详情路由）
- 演示用户/站点：**叮咚用户**、**叮咚买菜**、**叮咚配送**、**叮咚生鲜仓**（`App.tsx` / 页面演示）

### 4.2 营销与标签（商品卡片 `营销标签类型`）

`绿色底` | `粉红底` | `橙色底` | `蓝色底` | `省` | `折` | `绿卡返现` | `近N天低价` | `疯抢专享价`

示例文案（来自 `首页.tsx` 商品数据，可复用）：**今日达**、**近14天低价**、**省2.0元**、**限时抢**、**明日送达**、**8折**；利益点格式如 **叮咚基地｜当日采摘｜现摘现送**。

### 4.3 通用标签组件（`标签`）

- 颜色：`绿色` | `红色` | `蓝色` | `标准`
- 类型：`基本` | `实心` | `空心(实线)` | `空心(虚线)`
- 尺寸：`28` | `24` | `18` | `14`（px 行高）

### 4.4 按钮与弹窗

- 按钮尺寸：`XLarge` | `Large` | `Medium` | `Small`；类型：`Primary` | `Secondary`
- 弹窗按钮 kind：`primary` | `secondary` | `danger`；结构：反馈类 / 确认类 / 输入类（`CLAUDE.md`）
- 演示操作文案：**去结算**、**知道了**、**取消**、**确认** 等（组件文档与 `App.tsx`）

### 4.5 我的页等业务入口（`我的.tsx`）

**叮咚鱼塘**、**叮咚果园** 等（资产文件名与 label 一致）。

### 4.6 禁止凭空添加

仓库未出现的功能名、Slogan、价格、品类、Tab 名 **不得** 写入设计稿或新页面，除非先加入源码数据或 Figma。

---

## 5. 视觉身份（Token）

### 5.1 颜色 — 单一事实来源

**源码**：`src/tokens/colors.ts`  
**Tailwind 镜像**：`tailwind.config.js`（注释要求与 `colors.ts` 保持同步）

| 语义 | Token / 别名 | 主色值（仓库内） |
|------|----------------|------------------|
| 主品牌绿 | `accentGreen.primary` / `brand` | `#00B740` |
| 正文黑 | `dark.black90` | `#1A1A1A` |
| 危险 / 促销红 | `accentRed.primary` / `danger` | `#FF3133` |
| 信息蓝 | `accentBlue.primary` / `info` | `#009BFF` |
| 警示黄 | `accentYellow.primary` / `warning` | `#FFB51C` |
| 绿卡 / 会员价 | `accentGreen2.primary` / `member` | `#218F47` |
| 榜单金 | `accentGold` 系列 | 如 `#D0A874` |
| 会员金 | `accentGoldMember` | `#D29F24` … `#FFECBE` |
| 中性背景 | `dark.black4` | `#F5F5F5` |
| 页面白 | `light.white` | `#FFFFFF` |

**渐变**（按钮 Primary、会员等）：`gradient.green02` `['#24D64E', '#2DBA59']` 等 — 见 `colors.ts` 的 `gradient`、`memberGradient`。

**Figma 专属局部常量**（允许在组件顶注释，不进入全局 token）：如缺货描边 `#DCDCDC`、单选「绿卡」金色 `#EFD573`（`CLAUDE.md` / 各组件文件）。

组件内 **禁止** 随意硬编码 hex；应 `import { accentGreen, dark, … } from '@/tokens/colors'`（或 `@ddmc/design-system` 导出）。

### 5.2 字体

- 栈：`PingFang SC`, `-apple-system`, `BlinkMacSystemFont`, `Helvetica Neue`, `Segoe UI`, sans-serif（`globals.css`、`tailwind.config.js`）
- 字号阶梯（Tailwind `fontSize`）：`10/14` → `xs`，`12/18` → `sm`，`14/22` → `base`，`16/24` → `md`，… 至 `32/44` → `4xl`

### 5.3 间距与圆角

- Spacing：以 `2px` 为步进（`0.5`=2px … `20`=80px），见 `tailwind.config.js` `theme.extend.spacing`
- `borderRadius`：`sm` 2px → `xl` 12px（弹窗卡片 `12px` 与 Figma 一致）
- **Squircle**：iOS 风格圆角由 `src/utils/squircle.ts`（Figma 导出 path）实现，**不用** `border-radius` 模拟购物车按钮等（`CLAUDE.md`）

### 5.4 动效

- Toast：`ddmc-spin`、`ddmc-toast-in`（`globals.css`）
- 开关：200ms ease（`CLAUDE.md`）

### 5.5 图标

- 路径：`src/icons-new/{Name}/{12|16|24|32}.svg`
- API：`<Icon name={IconName} size={12|16|24|32} color? />`
- `IconName` 联合类型约 **199** 项（`src/components/Icon/types.ts`）

---

## 6. 组件模式（实现约定）

| 模式 | 说明 |
|------|------|
| 文件布局 | `components/<中文名>/`：`*.tsx`、`types.ts`、`index.ts`；Figma node 写在 `types.ts` 或文件头注释 |
| 导出 | 中文符号名（`按钮`、`商品卡片`）+ 英文类型名并存 |
| 样式 | Tailwind 工具类 + token；`clsx` + `tailwind-merge` |
| 弹窗 | `ReactDOM.createPortal` → `document.body`，遮罩 320px 卡片（`CLAUDE.md`） |
| 徽标 | 父级 `position: relative`，角标绝对定位 |
| Dev 别名 | `@` → `src`（`vite.config.ts`） |

### 组件索引（与 `CLAUDE.md` / `src/index.ts` 一致）

基础操作：`按钮`、`购物车按钮`、`加减号`、`选择按钮`、`开关`、`步进器`  
信息： `徽标`、`标签`、`标题前标签`、`Toast`、`弹窗`、`定位`、`叮咚特色`  
导航： `底部导航`、`标题栏`、`选项卡`、`分段筛选器`  
商品： `商品卡片`、`商品图标签单`、`疯抢价标签`、`价格文字标签`、`今日疯抢`、`模块标题`  
布局/列表： `Cell`（`GroupedRow`、`活动条`）、`金刚位`、`状态栏`、`Icon`

---

## 7. 关键文件清单

| 文件 | 作用 |
|------|------|
| `package.json` | 包名、脚本、`@ddmc/design-system` 导出路径 |
| `src/index.ts` | 库公共 API 全集 |
| `src/tokens/colors.ts` | 颜色 token（Figma 映射） |
| `tailwind.config.js` | 开发时 Tailwind 与语义别名 `brand`/`danger`/… |
| `src/styles/globals.css` | 消费方需引入的全局样式 |
| `CLAUDE.md` | 组件选用决策表、页面需求四步流程、Figma 节点 ID |
| `src/dev/DevShell.tsx` | Playground 导航与页面/组件切换 |
| `src/dev/App.tsx` | 各组件变体演示与示例文案 |
| `src/dev/pages/*.tsx` | 整页 UI Kit 预览（含 Figma URL 注释） |
| `src/components/Icon/types.ts` | 合法图标名列表 |
| `src/utils/squircle.ts` | Super Squircle SVG 路径 |
| `vite.config.ts` | dev vs library 双模式构建 |
| `tsconfig.build.json` | 构建排除 `src/dev` |

---

## 8. 设计前检查清单

1. 读 `CLAUDE.md` 对应组件的 **尺寸 / 类型 / 状态** 表，再选 Props。
2. 打开 `npm run dev`，在 DevShell 找到同类 **页面预览** 或 **组件** 分区。
3. 颜色、字号只从 **第五节 token** 取；图标只从 **`IconName`** 取。
4. 文案从 **`dev/pages` 数据**、`types.ts` 枚举、`App.tsx` 演示复制，不发明新营销句。
5. 新 UI 先 **复用** → **扩展变体（需用户确认）** → **新建组件（需用户确认）**（`CLAUDE.md` 流程）。
6. 页面级需求先拉 Figma：`get_design_context` + `get_screenshot`（`CLAUDE.md` 第一步）。

---

## 9. 与 Figma 的双文件关系

| 用途 | 文件 Key（仓库注释） |
|------|----------------------|
| 设计系统组件 / 颜色 | `An7YbG0EWIpL2ha3r1Wd0B` |
| App 整页 UI Kit 示例 | `AJikPirZmrpaP59L6Gqhnn`（如首页 node `19356-26329`） |

实现页面时以 **UI Kit 截屏 + 本库已有组件** 为准；组件级以 **设计系统文件节点 ID** 为准（各 `types.ts` 头部）。
