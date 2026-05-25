// Figma component: 底部加购bar
// node: 8284:16420

export type 加购按钮Kind = 'primary' | 'secondary'

export interface 加购按钮Config {
  label: string
  /** 'primary' = 绿色渐变，'secondary' = 白色+灰色描边。默认 'primary' */
  kind?: 加购按钮Kind
  onClick?: () => void
  disabled?: boolean
}

export type 加购图标Type = '购物车' | '收藏' | 'AI助手'

export interface 加购图标Config {
  type: 加购图标Type
  /** 数字角标（购物车类型可用）。>0 显示数字，>99 显示 '99+' */
  badge?: number
  /** AI助手图标的 "AI助手" 文字角标是否显示，默认 true */
  aiBadge?: boolean
  onClick?: () => void
}

export interface 底部加购barProps {
  /** 左侧图标，0–3 个。支持：购物车、收藏、AI助手 */
  icons?: 加购图标Config[]
  /** 右侧操作按钮，1–2 个。1个=单全宽主按钮；2个=次要+主要各占一半 */
  actions: 加购按钮Config[]
  /** iOS Home Indicator。默认 true */
  showHomeIndicator?: boolean
  className?: string
}
