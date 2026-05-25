// Figma component: 加减号
// node: 14475:13875

export interface 加减号Props {
  /** 当前数量 */
  count: number
  /** 减号点击 */
  onDecrement: () => void
  /** 加号点击 */
  onIncrement: () => void
  /** Figma variant: 加减号（加号不可点击）— 加号 disabled */
  加号可点击?: boolean
  className?: string
}
