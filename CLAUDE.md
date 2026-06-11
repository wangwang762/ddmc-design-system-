# DDMC Design System — AI 使用指南

叮咚买菜移动端组件库。每个组件 1:1 对应 Figma 节点，文件名与组件名均使用中文。

Figma 文件：`An7YbG0EWIpL2ha3r1Wd0B`

---

## 组件使用流程（必须遵守）

收到页面/组件需求时，**按以下顺序执行**：

1. 在下方组件索引中找到候选组件
2. 读取该组件的 `rules.md`（路径见索引），了解使用决策规则
3. 按规则选变体，再动手写代码
4. 如果现有组件无法覆盖需求，询问用户是否新建组件

---

## 视觉规范

颜色、字体、间距、阴影的完整规范见 `DESIGN.md`，生成任何 UI 前必须先读取。

---

## 全局规则

- 所有组件从 `@ddmc/design-system` 导入
- **颜色必须引用 token**：从 `@/tokens/colors` 导入，不得硬编码 hex 值
  - 例外：Figma 专属值（如 `#DCDCDC` 缺货描边、`#EFD573` 绿卡金色）在组件顶部定义为局部常量并注释说明
- **图标必须用 `<Icon>` 组件**，禁止内联 SVG 或引入第三方图标库
- 禁止用 HTML 原生 `<button>` 替代组件
- Squircle 形状已内置，禁止用 `border-radius` 模拟

---

## 组件索引

使用前必须读对应的 rules.md。

### 交互控件

| 组件 | 一句话场景 | rules.md |
|------|-----------|----------|
| `<按钮>` | 页面/弹窗的主次操作按钮 | `src/components/按钮/rules.md` |
| `<购物车按钮>` | 商品卡片右下角首次加购入口 | `src/components/购物车按钮/rules.md` |
| `<加减号>` | 购物车内已加购商品数量调整 | `src/components/加减号/rules.md` |
| `<步进器>` | 独立于购物车的通用数量输入 | `src/components/步进器/rules.md` |
| `<选择按钮>` | 互斥单选（地址、配送时段、规格） | `src/components/选择按钮/rules.md` |
| `<开关>` | 开关类设置项 | `src/components/开关/rules.md` |

### 反馈与提示

| 组件 | 一句话场景 | rules.md |
|------|-----------|----------|
| `<弹窗>` | 需要用户确认/输入的全屏遮罩对话框 | `src/components/弹窗/rules.md` |
| `<Toast>` | 轻量非打断操作反馈，自动消失 | `src/components/Toast/rules.md` |
| `<NoticeBar>` | 页面顶部通知条（系统/活动/续费提醒） | `src/components/NoticeBar/rules.md` |
| `<Notification>` | 页面内单行提示条（默认/一般/重要，支持icon/标签） | `src/components/Notification/rules.md` |
| `<Menu>` | 标题栏右上角更多按钮触发的弹出操作菜单 | `src/components/Menu/rules.md` |
| `<徽标>` | 叠加在图标/头像上的角标提示 | `src/components/徽标/rules.md` |

### 标签类

| 组件 | 一句话场景 | rules.md |
|------|-----------|----------|
| `<标签>` | 商品/菜谱卡片的行内文字标签 | `src/components/标签/rules.md` |
| `<标题前标签>` | 商品标题前的彩色业务标签（疯抢/预售等） | `src/components/标题前标签/rules.md` |
| `<商品图标签-单>` | 叠加在商品图片上的颜色底角标 | `src/components/商品图标签-单/rules.md` |
| `<疯抢价标签>` | 今日疯抢场次专属价格标签 | `src/components/疯抢价标签/rules.md` |
| `<价格文字标签>` | 尝鲜价/补贴价等特殊价格文字标签 | `src/components/价格文字标签/rules.md` |

### 商品展示

| 组件 | 一句话场景 | rules.md |
|------|-----------|----------|
| `<商品卡片>` | 可购买商品展示（单列/双列/三列/泳道等） | `src/components/商品卡片/rules.md` |
| `<今日疯抢>` | 首页今日疯抢完整模块 | `src/components/今日疯抢/rules.md` |

### 导航与布局

| 组件 | 一句话场景 | rules.md |
|------|-----------|----------|
| `<底部导航>` | 应用主框架底部 Tab Bar | `src/components/底部导航/rules.md` |
| `<标题栏>` | 二级及以下页面顶部导航栏 | `src/components/标题栏/rules.md` |
| `<定位>` | 首页顶部地址栏 | `src/components/定位/rules.md` |
| `<选项卡>` | 页面内容区 Tab 切换 | `src/components/选项卡/rules.md` |
| `<分段筛选器>` | 列表页顶部多维度筛选/排序条 | `src/components/分段筛选器/rules.md` |
| `<Cell>` | 列表行（设置项/信息行/满减活动条） | `src/components/Cell/rules.md` |

### 首页模块

| 组件 | 一句话场景 | rules.md |
|------|-----------|----------|
| `<金刚位>` | 首页图标入口宫格 | `src/components/金刚位/rules.md` |
| `<叮咚特色>` | 首页叮咚特色品质之爱模块 | `src/components/叮咚特色/rules.md` |
| `<模块标题>` | 首页功能区块艺术字标题 | `src/components/模块标题/rules.md` |

### 基础工具

| 组件 | 一句话场景 | rules.md |
|------|-----------|----------|
| `<Icon>` | 所有图标（199个，12/16/24/32px） | `src/components/Icon/rules.md` |
| `<状态栏>` | 页面顶部 iOS 状态栏（仅用于 mockup） | `src/components/状态栏/rules.md` |
