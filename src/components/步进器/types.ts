// Figma component: 步进器 (Stepper)
// node: 10:56427  page: Components

export type 步进器类型 = '大' | '小'
export type 步进器状态 = '默认' | '无法修改' | '无法减少' | '无法增加'

export interface 步进器Props {
  /** Figma variant: 类型 — 大=free-floating, 小=segmented border */
  类型?: 步进器类型
  /** Figma variant: 状态 */
  状态?: 步进器状态
  count?: number
  onDecrement?: () => void
  onIncrement?: () => void
  className?: string
}
