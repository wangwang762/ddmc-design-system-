---
version: "1.1"
name: DDMC Design System
description: 叮咚买菜移动端设计系统。所有 UI 生成必须严格遵守本文件定义的视觉规范。
figma: An7YbG0EWIpL2ha3r1Wd0B

colors:
  # 品牌主色
  brand:         "#00B740"
  brand-pressed: "#00992B"
  brand-hover:   "#21CC46"
  brand-light:   "#F2FBF5"

  # 语义色
  danger:        "#FF3133"
  danger-light:  "#FFF5F5"
  warning:       "#FFB51C"
  info:          "#009BFF"
  info-light:    "#F2FAFF"

  # 中性色
  text-primary:   "#1A1A1A"
  text-secondary: "#4D4D4D"
  text-tertiary:  "#808080"
  text-disabled:  "#B3B3B3"
  border:         "#E6E6E6"
  border-strong:  "#CCCCCC"
  bg-page:        "#F5F5F5"
  bg-card:        "#FFFFFF"

  # 会员/绿卡
  member:        "#218F47"
  member-gold:   "#D29F24"
  member-gold-2: "#F0CB72"

  # 促销/营销
  promo-red:     "#FF3133"
  promo-orange:  "#FF7A00"
  promo-pink-bg: "#FFEFEF"
  rank-gold:     "#D0A874"

typography:
  family-ui:    "PingFang SC, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif"
  family-price: "DdmcSans"

  # PingFang SC — Standard（Regular，line-height ×1.2）
  standard:
    "24/28": { size: "24px", line-height: "28px", weight: "Regular", usage: "特别强调的页面标题，如搜索单页面标题" }
    "20/24": { size: "20px", line-height: "24px", weight: "Regular", usage: "页面标题、如分类页标题" }
    "16/18": { size: "16px", line-height: "18px", weight: "Regular", usage: "特别强调的模块标题，如新人专区、抽屉" }
    "14/16": { size: "14px", line-height: "16px", weight: "Regular", usage: "大按钮、常规商卡标题等重要信息" }
    "12/14": { size: "12px", line-height: "14px", weight: "Regular", usage: "标准按钮、金刚位、多列商卡标题、商详重要信息" }
    "11/14": { size: "11px", line-height: "14px", weight: "Regular", usage: "底部Tab、副标题等次要信息" }
    "10/12": { size: "10px", line-height: "12px", weight: "Regular", usage: "标签、价格单位、mini按钮" }
    "9/10":  { size: "9px",  line-height: "10px", weight: "Regular", usage: "金刚区 icon 角条" }

  # PingFang SC — Header（Medium，line-height ×1.2）
  header:
    "32/36": { size: "32px", line-height: "36px", weight: "Medium", usage: "标题" }
    "28/34": { size: "28px", line-height: "34px", weight: "Medium" }
    "24/28": { size: "24px", line-height: "28px", weight: "Medium", usage: "特别强调的页面标题" }
    "20/24": { size: "20px", line-height: "24px", weight: "Medium", usage: "页面标题、如分类页标题" }
    "18/22": { size: "18px", line-height: "22px", weight: "Medium", usage: "商详商品标题" }
    "16/18": { size: "16px", line-height: "18px", weight: "Medium", usage: "TitleBar、抽屉、需要突出的模块标题" }
    "14/16": { size: "14px", line-height: "16px", weight: "Medium", usage: "信息流商卡标题" }

  # PingFang SC — Paragraph（Regular，line-height ×1.4）
  paragraph:
    "24/34": { size: "24px", line-height: "34px", weight: "Regular" }
    "20/28": { size: "20px", line-height: "28px", weight: "Regular" }
    "18/26": { size: "18px", line-height: "26px", weight: "Regular" }
    "16/22": { size: "16px", line-height: "22px", weight: "Regular" }
    "14/18": { size: "14px", line-height: "18px", weight: "Regular" }
    "12/16": { size: "12px", line-height: "16px", weight: "Regular" }
    "11/16": { size: "11px", line-height: "16px", weight: "Regular" }
    "10/12": { size: "10px", line-height: "12px", weight: "Regular" }

  # PingFang SC — Strikethrough（Regular，用于划线原价）
  strikethrough:
    "12/14": { size: "12px", line-height: "14px", weight: "Regular", usage: "一般商卡划线价：双列、单列" }
    "10/10": { size: "10px", line-height: "10px", weight: "Regular", usage: "特殊商卡划线价：三列、多列" }

  # DdmcSans — 价格数字专用字体
  price:
    "36/44": { size: "36px", line-height: "44px", weight: "Bold" }
    "28/36": { size: "28px", line-height: "36px", weight: "Bold" }
    "24/28": { size: "24px", line-height: "28px", weight: "Bold" }
    "20/20": { size: "20px", line-height: "20px", weight: "Bold" }
    "16/18": { size: "16px", line-height: "18px", weight: "Bold" }
    "14/16": { size: "14px", line-height: "16px", weight: "Bold" }
    "12/14": { size: "12px", line-height: "14px", weight: "Bold" }
    "12/14-medium": { size: "12px", line-height: "14px", weight: "Medium" }
    "10/12": { size: "10px", line-height: "12px", weight: "Bold" }

shadows:
  # 默认不使用，仅在需要突出层级时按需引入
  level-1: "0 2px 8px rgba(0,0,0,0.08)"
  level-2: "0 6px 24px rgba(0,0,0,0.10)"
  level-3: "0 10px 40px rgba(0,0,0,0.12)"
  level-4: "0 24px 128px rgba(0,0,0,0.14)"

spacing:
  # 3px 基准间距系统（主要值）
  9:  "9px"
  12: "12px"
  18: "18px"
  24: "24px"
  36: "36px"
  72: "72px"
  # 补充精细值
  2:  "2px"
  4:  "4px"
  6:  "6px"
  8:  "8px"
  16: "16px"

rounded:
  none: "0"
  sm:   "2px"
  base: "4px"
  md:   "6px"
  lg:   "8px"
  xl:   "12px"
  2xl:  "16px"
  3xl:  "24px"
  full: "9999px"

canvas:
  width:            "390px"
  bg:               "#F5F5F5"
  safe-area-top:    "44px"
  safe-area-bottom: "34px"
  horizontal-padding: "16px"
---

# DDMC Design System — 视觉规范

叮咚买菜移动端，面向 iOS 390px 视口设计。所有 AI 生成 UI 必须遵守本文件中的颜色、字体、间距、阴影和组件规范。

---

## 颜色使用原则

**主品牌绿 `#00B740`** 是叮咚唯一的主色，用于：主按钮、选中状态、价格高亮、品牌标识。不得用其他绿色替代。

**红色 `#FF3133`** 用于：促销价格、紧迫提示、危险操作确认。不得用于正常信息展示。

**中性色层级**：
- 主要文字 → `#1A1A1A`
- 次要文字 → `#4D4D4D`
- 辅助文字 → `#808080`
- 禁用/占位 → `#B3B3B3`
- 分割线/描边 → `#E6E6E6`
- 页面背景 → `#F5F5F5`
- 卡片背景 → `#FFFFFF`

**会员绿卡色 `#218F47`** 仅用于绿卡专属场景。不得用于普通场景。

**禁止硬编码**：所有颜色从 `@/tokens/colors` 导入，不得写 hex 值。例外：`#DCDCDC`（缺货描边）、`#EFD573`（绿卡金色）在组件顶部定义为局部常量并注释说明。

---

## 字体规范

### PingFang SC（UI 文字）

四种文字样式，选择时以**使用场景**为准：

| 样式 | 字重 | 行高 | 使用场景 |
|------|------|------|---------|
| Standard | Regular | ×1.2 | 按钮、标签、商卡标题等单行 UI 文字 |
| Header | Medium | ×1.2 | 页面标题、模块标题、需要加粗强调的标题 |
| Paragraph | Regular | ×1.4 | 多行描述性文字、详情文案 |
| Strikethrough | Regular | ×1.2 | 划线原价（配合 text-decoration: line-through） |

**常用尺寸 + 场景速查：**

| 尺寸 | Standard 场景 | Header 场景 |
|------|-------------|------------|
| 16px | 特别强调模块标题、抽屉 | TitleBar 标题、需突出的模块标题 |
| 14px | 大按钮、常规商卡标题 | 信息流商卡标题 |
| 12px | 金刚位、多列商卡、商详重要信息 | — |
| 11px | 底部 Tab、副标题 | — |
| 10px | 标签、价格单位 | — |

### DdmcSans（价格数字专用）

专用于价格数字展示，整数部分大号、小数部分小号，**由组件内部处理，不需要手动拆分**。

| 尺寸 | 字重 | 使用场景 |
|------|------|---------|
| 36px Bold | Bold | 大卡片主价格 |
| 28px Bold | Bold | 单列商卡价格 |
| 24px Bold | Bold | 双列商卡价格 |
| 20px Bold | Bold | 中等商卡 |
| 16px Bold | Bold | 三列商卡、小尺寸 |
| 14px Bold | Bold | 紧凑商卡 |

---

## 阴影规范

**默认不使用阴影。** 叮咚的 UI 层级通过背景色和边框区分，只有当需要额外强调某个元素的层级关系时才引入阴影。克制使用，不要为了"好看"加阴影。

需要阴影时，按浮层深度选等级：

| 等级 | CSS 值 | 使用场景 |
|------|--------|---------|
| Level 1 | `0 2px 8px rgba(0,0,0,0.08)` | 轻微浮起，如需突出的卡片 |
| Level 2 | `0 6px 24px rgba(0,0,0,0.10)` | 下拉菜单、浮动操作条 |
| Level 3 | `0 10px 40px rgba(0,0,0,0.12)` | 底部面板、侧滑抽屉 |
| Level 4 | `0 24px 128px rgba(0,0,0,0.14)` | 全屏弹窗、大型浮层 |

---

## 间距规范

**基准单位 3px**，主要间距值为 3 的倍数：9 / 12 / 18 / 24 / 36 / 72px。

| 使用场景 | 间距 |
|---------|------|
| 元素内紧凑内边距 | 9px |
| 卡片内元素间距 | 12px |
| 卡片内边距 | 18px |
| 页面水平边距 / 模块内边距 | 24px |
| 模块间距 | 36px |
| 大段落/区块间距 | 72px |

---

## 圆角规范

| 元素 | 圆角 |
|------|------|
| 小标签、角标 | `4px` |
| 输入框、卡片 | `8px` |
| 弹窗、底部面板 | `16px` |
| 按钮（大尺寸） | `9999px`（胶囊形） |
| 购物车按钮、加减号 | **Squircle**（SVG path，禁止 border-radius 模拟） |

---

## Squircle 形状

购物车按钮和加减号使用 Figma 导出的精确超椭圆路径，已内置于组件。**禁止用 `border-radius` 模拟。**

---

## 图标规范

- 199 个图标，统一使用 `<Icon>` 组件（`src/components/Icon`）
- 尺寸：12 / 16 / 24 / 32px
- **禁止内联 SVG，禁止第三方图标库**
- 颜色通过 CSS `color` 继承，不硬编码

---

## 移动端画布规范

- 设计宽度：**390px**（iPhone 14 逻辑像素）
- 页面背景：`#F5F5F5`
- 顶部安全区：44px（状态栏）
- 底部安全区：34px（Home Indicator）
- 页面水平内边距：16px（实际为 24px，但按 16px 实现）

---

## 组件调用

27 个基础组件，选择规则见各组件 `rules.md`，索引见 `CLAUDE.md`。所有组件从 `@ddmc/design-system` 导入。
