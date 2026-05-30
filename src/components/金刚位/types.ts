import type { CSSProperties } from 'react'

export interface 金刚位Item {
  key: string
  /** 图标图片 URL（squircle 形状会自动裁切） */
  iconSrc: string
  label: string
  /** 右上角红色角标文字，如 "新" "角标" */
  badge?: string
  /** 图标尺寸：48（默认，行1-2）或 38（行3小图标） */
  iconSize?: 48 | 38
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
