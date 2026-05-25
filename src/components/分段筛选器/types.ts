import type { CSSProperties } from 'react'

export type 分段排序状态 = '默认' | '升序' | '降序'

export interface 分段筛选器Item {
  key: string
  label: string
  sortable?: boolean
}

export interface 分段筛选器Props {
  items: 分段筛选器Item[]
  activeKey: string
  sortOrder?: 分段排序状态
  onChange: (key: string, sortOrder: 分段排序状态) => void
  style?: CSSProperties
  className?: string
}
