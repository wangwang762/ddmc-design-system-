// Figma component: 开关 (Switch)
// node: 3815:17862  page: Components

export type 开关尺寸 = '大' | '中' | '小'

export interface 开关Props {
  /** Figma variant: 尺寸 */
  尺寸?: 开关尺寸
  /** Figma variant: Active */
  active?: boolean
  onChange?: (active: boolean) => void
  className?: string
}
