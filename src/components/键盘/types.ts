import type { CSSProperties } from 'react'

export type 键盘模式 = '字母大写' | '字母小写' | '符号'

export interface 键盘Props {
  模式?: 键盘模式
  style?: CSSProperties
  className?: string
}
