// Figma component: 标签 (Tag)
// node: 3617:16873
//
// Variants: 颜色(绿/红/蓝/标准) × 尺寸(28/24/18/14) × 类型(基本/实心/空心实线/空心虚线) × 圆角(T/F)

import React from 'react'
import { cn } from '@/utils/cn'
import { accentGreen, accentRed, accentBlue, dark, light } from '@/tokens/colors'
import type { 标签Props, 标签颜色, 标签类型 } from './types'

// ── Color tokens ──────────────────────────────────────────────
const colorTokens: Record<标签颜色, { primary: string; bg: string }> = {
  '绿色': { primary: accentGreen.primary,  bg: accentGreen.opacity9 },
  '红色': { primary: accentRed.primary,    bg: accentRed.opacity5   },
  '蓝色': { primary: accentBlue.primary,   bg: accentBlue.opacity5  },
  '标准': { primary: dark.black90,          bg: dark.black4          },
}

// ── Size tokens (from Figma) ──────────────────────────────────
const sizeTokens = {
  '28': { fontSize: 14, lineHeight: '16px', px: 12, py: 6,  radius: 6 },
  '24': { fontSize: 12, lineHeight: '14px', px: 9,  py: 5,  radius: 3 },
  '18': { fontSize: 11, lineHeight: '14px', px: 6,  py: 2,  radius: 3 },
  '14': { fontSize: 10, lineHeight: '12px', px: 3,  py: 1,  radius: 3 },
}

// ── Style per type ────────────────────────────────────────────
function getStyles(类型: 标签类型, primary: string, bg: string) {
  switch (类型) {
    case '基本':
      return { background: bg, border: 'none', color: primary }
    case '实心':
      return { background: primary, border: 'none', color: light.white }
    case '空心(实线)':
      return { background: 'transparent', border: `0.5px solid ${primary}`, color: primary }
    case '空心(虚线)':
      return { background: 'transparent', border: `0.5px dashed ${primary}`, color: primary }
  }
}

export const 标签: React.FC<标签Props> = ({
  颜色 = '绿色',
  尺寸 = '24',
  类型 = '基本',
  圆角 = false,
  children,
  className,
}) => {
  const { primary, bg } = colorTokens[颜色]
  const { fontSize, lineHeight, px, py, radius } = sizeTokens[尺寸]
  const { background, border, color } = getStyles(类型, primary, bg)

  // 圆角=true: pill shape + 2px extra horizontal padding (Figma spec)
  const paddingX = 圆角 ? px + 2 : px
  const borderRadius = 圆角 ? 100 : radius

  return (
    <span
      className={cn('inline-flex items-center gap-[2px] whitespace-nowrap', className)}
      style={{
        background,
        border,
        borderRadius,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: py,
        paddingBottom: py,
        fontFamily: 'PingFang SC, sans-serif',
        fontSize,
        fontWeight: 400,
        lineHeight,
        color,
      }}
    >
      {children}
    </span>
  )
}
