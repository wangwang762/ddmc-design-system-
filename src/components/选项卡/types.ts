import type { ReactNode, CSSProperties } from 'react'

export type 选项卡方向 = '横向' | '竖向'
export type 横向列数 = '二列' | '三列' | '四列' | '五列' | '滚动'

export interface 选项卡Item {
  key: string
  label: string
  content?: ReactNode
}

export interface 选项卡Props {
  方向?: 选项卡方向
  列数?: 横向列数
  tabs: 选项卡Item[]
  activeKey: string
  onChange?: (key: string) => void
  className?: string
  style?: CSSProperties
}
