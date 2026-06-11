// Figma component: Notification
// node: 4131:63108
//
// 变体结构：
//   重要度=默认  — 白色半透明底 rgba(255,255,255,0.8) + backdrop-blur
//                  特例: 重要度=默认 且 左侧=标签 → 纯白底 #FFFFFF
//   重要度=一般  — 浅灰底 #F5F5F5（用于外部容器已是白色的场景）
//   重要度=重要  — 浅红底 #FFF5F5
//
//   左侧=默认    — 仅文案
//   左侧=icon    — Icon(16px) + 文案
//   左侧=标签    — pill 标签 + 文案

import type { IconName } from '../Icon/types'

export type Notification重要度 = '默认' | '一般' | '重要'
export type Notification左侧 = '默认' | 'icon' | '标签'

export interface NotificationProps {
  /** 背景色方案，默认 '默认' */
  重要度?: Notification重要度
  /** 左侧修饰，默认 '默认' */
  左侧?: Notification左侧
  /** 提示文案（单行，禁止换行） */
  文案: string
  /** 左侧图标名称（左侧=icon 时生效），默认 'Notice' */
  iconName?: IconName
  /** 左侧 pill 标签文字（左侧=标签 时生效），默认 '温馨提示' */
  标签文字?: string
  /** 是否显示关闭按钮，默认 false */
  可关闭?: boolean
  onClose?: () => void
  className?: string
}
