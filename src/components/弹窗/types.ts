// Figma component: 弹窗 (Dialog)
// node: 3873:17915  page: Components
//
// 结构变体:
//   反馈类 — 纯文字 + 单个操作按钮
//   确认类 — 标题(+正文) + 双/多按钮
//   输入类 — 标题(+正文) + 输入框 + 双按钮

import type { ReactNode } from 'react'

export type 弹窗按钮种类 = 'primary' | 'secondary' | 'danger'

export interface 弹窗按钮Config {
  label: string
  /** default: 'primary' */
  kind?: 弹窗按钮种类
  onClick?: () => void
}

export interface 弹窗Props {
  visible: boolean

  /** 标题行 — PingFang Medium 500, 16px/18px。无标题时 description 自动用 22px 行高 */
  title?: string

  /** 正文内容 — 有标题时 Regular 400/22px，无标题时 Medium 500/22px */
  description?: ReactNode

  /** 输入框 placeholder（传入后渲染输入类布局） */
  inputPlaceholder?: string
  inputValue?: string
  onInputChange?: (value: string) => void

  /**
   * 操作按钮列表。渲染规则：
   *   1 个 → 全宽居中
   *   2 个 + !stackActions → 左右平分（带竖向分割线）
   *   2 个 + stackActions → 垂直堆叠（文字过长时使用）
   *   3+ 个 → 垂直堆叠
   */
  actions?: 弹窗按钮Config[]

  /** 强制 2 个按钮垂直排列（双按钮文字过长 场景） */
  stackActions?: boolean

  /** 开启描述区可滚动（带说明文本最大高度 场景） */
  scrollable?: boolean

  /** 点击背景遮罩关闭 */
  onMaskClick?: () => void

  className?: string
}
