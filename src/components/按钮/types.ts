// Figma component: 按钮 (Button)
// node: 8284:16216  page: Components

export type 尺寸 = 'XLarge' | 'Large' | 'Medium' | 'Small'
export type 类型 = 'Primary' | 'Secondary'
export type 颜色 = '绿色'

export interface 按钮Props {
  /** Figma variant: 尺寸 */
  尺寸?: 尺寸
  /** Figma variant: 类型 */
  类型?: 类型
  /** Figma variant: 颜色 */
  颜色?: 颜色
  /** Figma variant: 自适应 — true=内容宽度 false=撑满父容器 */
  自适应?: boolean
  /** Button label text */
  children?: React.ReactNode
  /** Left icon (pass an SVG element) */
  iconLeft?: React.ReactNode
  /** Right icon (pass an SVG element) */
  iconRight?: React.ReactNode
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}
