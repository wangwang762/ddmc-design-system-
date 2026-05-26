import type { CSSProperties } from 'react'

export interface 金刚位Item {
  key: string
  /** 图标图片 URL（48×48，squircle 形状会自动裁切） */
  iconSrc: string
  label: string
  /** 右上角红色角标文字，如 "新" "角标" */
  badge?: string
  onClick?: () => void
}

export interface 金刚位Props {
  items: 金刚位Item[]
  /** 每行展示列数，默认 5 */
  每行列数?: number
  /** 底部分页指示器：当前页（0-indexed） */
  activePage?: number
  /** 底部分页指示器：总页数（≥2 时才显示） */
  totalPages?: number
  style?: CSSProperties
  className?: string
}
