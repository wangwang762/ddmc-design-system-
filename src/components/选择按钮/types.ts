// Figma component: 选择按钮
// node: 3460:14424  page: Components

export type 选择按钮状态 = '未选中' | '选中' | '不可选'
export type 选择按钮类型 = '默认' | '绿卡'

export interface 选择按钮Props {
  /** Figma variant: 状态 */
  状态?: 选择按钮状态
  /** Figma variant: 类型 — 默认=普通单选, 绿卡=会员金色主题 */
  类型?: 选择按钮类型
  onClick?: () => void
  className?: string
}
