// DDMC Design System
// Each export maps 1:1 to a Figma component node

// Styles (consumer must import this in their entry file)
import './styles/globals.css'

// ─── Tokens ──────────────────────────────────────────────────
export {
  dark, light,
  accentGreen, accentBlue, accentOrange,
  accentGreen2, accentRed, accentYellow,
  accentGold, accentGoldMember,
  special, gradient, memberGradient,
  colors,
} from './tokens/colors'

// ─── 按钮 ─────────────────────────────────────────────────────
export { 按钮 } from './components/按钮'
export type { 按钮Props, 尺寸, 类型, 颜色 } from './components/按钮'

// ─── 购物车按钮 ───────────────────────────────────────────────
export { 购物车按钮 } from './components/购物车按钮'
export type { 购物车按钮Props, 购物车尺寸, 购物车状态 } from './components/购物车按钮'

// ─── 加减号 ───────────────────────────────────────────────────
export { 加减号 } from './components/加减号'
export type { 加减号Props } from './components/加减号'

// ─── 徽标 ─────────────────────────────────────────────────────
export { 徽标 } from './components/徽标'
export type { 徽标Props, 徽标尺寸, 徽标类型 } from './components/徽标'

// ─── 标签 ─────────────────────────────────────────────────────
export { 标签 } from './components/标签'
export type { 标签Props, 标签颜色, 标签尺寸, 标签类型 } from './components/标签'

// ─── 选择按钮 ─────────────────────────────────────────────────
export { 选择按钮 } from './components/选择按钮'
export type { 选择按钮Props, 选择按钮状态, 选择按钮类型 } from './components/选择按钮'

// ─── 开关 ─────────────────────────────────────────────────────
export { 开关 } from './components/开关'
export type { 开关Props, 开关尺寸 } from './components/开关'

// ─── 步进器 ───────────────────────────────────────────────────
export { 步进器 } from './components/步进器'
export type { 步进器Props, 步进器类型, 步进器状态 } from './components/步进器'

// ─── 弹窗 ─────────────────────────────────────────────────────
export { 弹窗 } from './components/弹窗'
export type { 弹窗Props, 弹窗按钮Config, 弹窗按钮种类 } from './components/弹窗'

// ─── 底部导航 ──────────────────────────────────────────────────
export { 底部导航, TabIcon首页, TabIcon分类, TabIcon吃什么, TabIcon榜单, TabIcon购物车, TabIcon我的, TabIconAI } from './components/底部导航'
export type { TabBarProps, TabBarTab, TabBarItem, TabDisplayType } from './components/底部导航'

// ─── 标题前标签 ────────────────────────────────────────────────
export { 标题前标签 } from './components/标题前标签'
export type { 标题前标签Props, 标题前标签类型 } from './components/标题前标签'

// ─── 商品卡片相关 ─────────────────────────────────────────────
export { 商品图标签单 } from './components/商品图标签-单'
export type { 商品图标签单Props } from './components/商品图标签-单'

// ─── 商品卡片 ──────────────────────────────────────────────────
export { 商品卡片 } from './components/商品卡片'
export type { 商品卡片Props, 商品卡片布局, 营销标签, 营销标签类型 } from './components/商品卡片'

// ─── Cell ──────────────────────────────────────────────────────
export { GroupedRow, 活动条 } from './components/Cell'
export type { GroupedRowProps, 活动条Props, Cell类型, 活动条尺寸, 活动条左侧类型 } from './components/Cell'

// ─── 选项卡 ───────────────────────────────────────────────────
export { 选项卡 } from './components/选项卡'
export type { 选项卡Props, 选项卡Item, 选项卡方向, 横向列数 } from './components/选项卡'

// ─── 分段筛选器 ────────────────────────────────────────────────
export { 分段筛选器 } from './components/分段筛选器'
export type { 分段筛选器Props, 分段筛选器Item, 分段排序状态 } from './components/分段筛选器'

// ─── 标题栏 ────────────────────────────────────────────────────
export { TitleBar } from './components/标题栏'
export type { TitleBarProps, TitleBar左操作, TitleBar标题样式 } from './components/标题栏'

// ─── 金刚位 ────────────────────────────────────────────────────
export { 金刚位 } from './components/金刚位'
export type { 金刚位Props, 金刚位Item } from './components/金刚位'

// ─── Toast ─────────────────────────────────────────────────────
export { Toast } from './components/Toast'
export type { ToastProps, Toast类型 } from './components/Toast'

// ─── 定位 ──────────────────────────────────────────────────────
export { 定位 } from './components/定位'
export type { 定位Props } from './components/定位'

// ─── 叮咚特色品质之爱 ──────────────────────────────────────────
export { 叮咚特色 } from './components/叮咚特色'
export type { 叮咚特色Props, 品质之爱瓷片 } from './components/叮咚特色'

// ─── 状态栏 ────────────────────────────────────────────────────
export { 状态栏 } from './components/状态栏'
export type { 状态栏Props } from './components/状态栏'

// ─── 疯抢价标签 ────────────────────────────────────────────────
export { 疯抢价标签 } from './components/疯抢价标签'
export type { 疯抢价标签Props } from './components/疯抢价标签'

// ─── 价格文字标签 ───────────────────────────────────────────────
export { 价格文字标签 } from './components/价格文字标签'
export type { 价格文字标签Props, 价格文字标签风格 } from './components/价格文字标签'

// ─── 今日疯抢 ──────────────────────────────────────────────────
export { 今日疯抢 } from './components/今日疯抢'
export type { 今日疯抢Props, 疯抢商品 } from './components/今日疯抢'

// ─── 模块标题 ──────────────────────────────────────────────────
export { 模块标题 } from './components/模块标题'
export type { 模块标题Props, 模块标题变体 } from './components/模块标题'

// ─── Icon ──────────────────────────────────────────────────────
export { Icon } from './components/Icon'
export type { IconProps, IconName, IconSize } from './components/Icon'

// ─── Menu ──────────────────────────────────────────────────────
export { Menu } from './components/Menu'
export type { MenuProps, MenuItem } from './components/Menu'

// ─── Notification ──────────────────────────────────────────────
export { Notification } from './components/Notification'
export type { NotificationProps, Notification重要度, Notification左侧 } from './components/Notification'

// ─── NoticeBar ─────────────────────────────────────────────────
export { NoticeBar } from './components/NoticeBar'
export type { NoticeBarProps, NoticeBar类型 } from './components/NoticeBar'

// ─── iOS 系统组件 ───────────────────────────────────────────────
export { 键盘 } from './components/键盘'
export type { 键盘Props, 键盘模式 } from './components/键盘'

export { HomeIndicator } from './components/HomeIndicator'
export type { HomeIndicatorProps } from './components/HomeIndicator'
