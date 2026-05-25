// Figma component: Button/购物车
// node: 4553:38967

export type 购物车尺寸 = '26px' | '22px' | '18px'
export type 购物车状态 = '默认' | '不可选中' | '缺货加购'

export interface 购物车按钮Props {
  /** Figma variant: 尺寸 */
  尺寸?: 购物车尺寸
  /** Figma variant: 按钮状态 */
  按钮状态?: 购物车状态
  /** 徽标数字，不传则不显示红点 */
  badge?: number
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}
