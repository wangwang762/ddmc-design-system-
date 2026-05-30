// Figma component: 标题前标签 (Title Prefix Tag)
// node: 2190:4487
//
// 商品标题前的彩色业务标签，颜色与文字业务锁定，不可分离。
// 小(商卡): 10px / 1.5px 3px；大(商详): 12px / 2px 4px

import React from 'react'
import type { 标题前标签Props, 标题前标签类型 } from './types'

const FONT = 'PingFang SC, sans-serif'

// Figma 专属值 — 与色板无精确对应，定义为局部常量
const FRENZY_RED    = '#FC5455'  // 疯抢
const PRESALE_GREEN = '#00B740'  // 预售 (= accentGreen.primary)
const TREND_ORANGE  = '#FF8A00'  // 趋势
const BABY_PINK     = '#FE6999'  // 宝妈严选
const SELECT_GOLD   = '#C9A856'  // 叮咚心选
const BRAND_DARKRED = '#EA333E'  // 美麒麟
const NEW_FROM      = '#9DFF4C'  // 新品渐变起点
const NEW_TO        = '#CBF529'  // 新品渐变终点

type 类型配置 = {
  background: string
  isGradient?: boolean
  textColor: string
}

const CONFIG: Record<标题前标签类型, 类型配置> = {
  '疯抢':   { background: FRENZY_RED,                                        textColor: '#FFFFFF' },
  '预售':   { background: PRESALE_GREEN,                                     textColor: '#FFFFFF' },
  '新品':   { background: `linear-gradient(90deg, ${NEW_FROM}, ${NEW_TO})`,  textColor: '#1A1A1A', isGradient: true },
  '趋势':   { background: TREND_ORANGE,                                      textColor: '#FFFFFF' },
  '宝妈严选': { background: BABY_PINK,                                       textColor: '#FFFFFF' },
  '叮咚心选': { background: SELECT_GOLD,                                     textColor: '#FFFFFF' },
  '美麒麟': { background: BRAND_DARKRED,                                     textColor: '#FFFFFF' },
}

const SIZE_STYLE = {
  '小': { padding: '1.5px 3px', fontSize: 10, lineHeight: '11px' },
  '大': { padding: '2px 4px',   fontSize: 12, lineHeight: '14px' },
} as const

export function 标题前标签({ 类型, 尺寸 = '小' }: 标题前标签Props) {
  const { background, isGradient, textColor } = CONFIG[类型]
  const { padding, fontSize, lineHeight } = SIZE_STYLE[尺寸]

  return (
    <span
      style={{
        display: 'inline-block',
        ...(isGradient
          ? { backgroundImage: background }
          : { backgroundColor: background }),
        borderRadius: 3,
        padding,
        fontSize,
        lineHeight,
        color: textColor,
        fontWeight: 500,
        fontFamily: FONT,
        whiteSpace: 'nowrap',
        flexShrink: 0,
        verticalAlign: 'middle',
        position: 'relative',
        top: -1,
      }}
    >
      {类型}
    </span>
  )
}
