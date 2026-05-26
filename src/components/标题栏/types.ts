import type { CSSProperties } from 'react'

// 左侧操作区：互斥，只能选一种
export type TitleBar左操作 = '返回' | 'close' | '用户信息' | '无'

// 标题展示方式
export type TitleBar标题样式 = '文字' | '图片'

export interface TitleBarProps {
  // ── 左侧 ──────────────────────────────────────────────
  左操作?: TitleBar左操作   // 默认: '返回'
  onBack?: () => void       // 返回 / close 点击回调
  头像Src?: string           // 用户信息模式：头像图片
  用户名?: string             // 用户信息模式：名称文字

  // ── 标题 ──────────────────────────────────────────────
  标题样式?: TitleBar标题样式  // 默认: '文字'
  标题?: string
  标题图片Src?: string

  // ── 右侧（文案 与 图标入口不可同时存在）───────────────
  右侧文案?: string
  onRightTextClick?: () => void

  show购物车?: boolean
  购物车Badge?: number
  on购物车Click?: () => void

  show分享?: boolean
  on分享Click?: () => void

  // 小程序打开按钮（87×32），出现时独占右侧
  show小程序?: boolean
  on小程序Click?: () => void

  style?: CSSProperties
  className?: string
}
