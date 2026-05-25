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

// ─── 商品卡片相关 ─────────────────────────────────────────────
export { 商品图标签单 } from './components/商品图标签-单'
export type { 商品图标签单Props } from './components/商品图标签-单'
