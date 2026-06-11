// Figma component: Menu
// node: 10479:16891
//
// 深色半透明背景的弹出操作菜单，顶部带指向触发器的三角箭头。
// 每个菜单项由 16px 图标 + 文字组成，项间用半透明分割线分隔。

import type { IconName } from '../Icon/types'

export interface MenuItem {
  /** 16px 图标 */
  iconName: IconName
  /** 菜单项文字 */
  label: string
  onClick?: () => void
}

export interface MenuProps {
  /** 菜单项列表 */
  items: MenuItem[]
  /**
   * 箭头距容器右边的偏移，用于对齐触发按钮，默认 18px
   */
  arrowRight?: number
  className?: string
}
