// Figma component: 徽标 (Badge)
// node: 3787:17741  page: Components

export type 徽标尺寸 = '大' | '小'
export type 徽标类型 = '红点' | '数字' | '更多' | '左下直角'

export interface 徽标Props {
  /** 大=16px高, 小=12px高（红点大=8px 小=6px） */
  尺寸?: 徽标尺寸
  /** 红点=纯点 | 数字=显示count | 更多=···三点 | 左下直角=文字标签+特殊圆角 */
  类型?: 徽标类型
  /** 数字类型: 显示的数值，>99 自动显示 ··· */
  count?: number
  /** 左下直角类型: 自定义标签文字（如"上新啦"） */
  label?: string
  /** 是否显示 1px 白色描边（叠加在深色背景上时使用） */
  描边?: boolean
  className?: string
}
