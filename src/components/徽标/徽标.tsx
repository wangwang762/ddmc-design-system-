// Figma component: 徽标 (Badge)
// node: 3787:17741
//
// Standalone badge — position absolutely over parent elements.
// 类型:
//   红点    → plain dot (8px / 6px)
//   数字    → count pill — single digit (square) / multi-digit (auto width) / >99 (···)
//   更多    → ··· three-dot indicator
//   左下直角 → text label, left-bottom corner is square (for card status overlays)

import React from 'react'
import { cn } from '@/utils/cn'
import { accentRed, light } from '@/tokens/colors'
import type { 徽标Props } from './types'

// ── Shared styles ─────────────────────────────────────────────
const BASE_BG = accentRed.primary   // #FF3133
const BASE_TEXT = light.white       // #FFFFFF
const FONT = 'PingFang SC, sans-serif'

// Three white dots for 更多 type
const EllipsisDots = ({ size }: { size: number }) => {
  const dotSize = size <= 12 ? 2 : 3
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: dotSize }}>
      {[0, 1, 2].map(i => (
        <span key={i} style={{ width: dotSize, height: dotSize, borderRadius: '50%', background: BASE_TEXT, flexShrink: 0 }} />
      ))}
    </span>
  )
}

export const 徽标: React.FC<徽标Props> = ({
  尺寸 = '大',
  类型 = '数字',
  count,
  label = '标签',
  描边 = false,
  className,
}) => {
  const isLarge = 尺寸 === '大'
  const border = 描边 ? `1px solid ${light.white}` : undefined

  // ── 红点 ──────────────────────────────────────────────────
  if (类型 === '红点') {
    const size = isLarge ? 8 : 6
    return (
      <span
        className={cn('inline-block rounded-full flex-shrink-0', className)}
        style={{ width: size, height: size, background: BASE_BG, border, boxSizing: 'border-box' }}
      />
    )
  }

  // ── Shared pill config ────────────────────────────────────
  const height    = isLarge ? 16 : 12
  const fontSize  = isLarge ? 11 : 10
  const lineH     = isLarge ? '14px' : '12px'
  const px        = isLarge ? 5.5 : 3.5

  // ── 更多 ──────────────────────────────────────────────────
  if (类型 === '更多') {
    return (
      <span
        className={cn('inline-flex items-center justify-center flex-shrink-0', className)}
        style={{
          height, background: BASE_BG, border,
          borderRadius: 8, paddingLeft: px, paddingRight: px,
          boxSizing: 'border-box',
        }}
      >
        <EllipsisDots size={height} />
      </span>
    )
  }

  // ── 左下直角 ──────────────────────────────────────────────
  // Left-bottom corner is square; used as card status overlay (e.g. "上新啦")
  if (类型 === '左下直角') {
    const h = isLarge ? 16 : 14
    const plPx = isLarge ? 3.5 : 2.5
    const prPx = isLarge ? 5.5 : 4
    const r = 8
    return (
      <span
        className={cn('inline-flex items-center justify-center whitespace-nowrap flex-shrink-0', className)}
        style={{
          height: h,
          background: BASE_BG,
          border,
          // tl + tr + br rounded, bl = 0 (left-bottom square)
          borderRadius: `${r}px ${r}px ${r}px 0`,
          paddingLeft: plPx,
          paddingRight: prPx,
          fontFamily: FONT,
          fontSize,
          fontWeight: 500,
          lineHeight: lineH,
          color: BASE_TEXT,
          boxSizing: 'border-box',
        }}
      >
        {label}
      </span>
    )
  }

  // ── 数字 ──────────────────────────────────────────────────
  const display = count === undefined ? '' : count > 99 ? '···' : String(count)
  const isOverflow = count !== undefined && count > 99

  if (isOverflow) {
    // Use 更多 style for overflow
    return (
      <span
        className={cn('inline-flex items-center justify-center flex-shrink-0', className)}
        style={{
          height, background: BASE_BG, border,
          borderRadius: 8, paddingLeft: px, paddingRight: px,
          boxSizing: 'border-box',
        }}
      >
        <EllipsisDots size={height} />
      </span>
    )
  }

  // Single digit → square (width = height), multi-digit → auto width pill
  const isSingle = display.length <= 1
  return (
    <span
      className={cn('inline-flex items-center justify-center whitespace-nowrap flex-shrink-0', className)}
      style={{
        height,
        width: isSingle ? height : undefined,
        minWidth: isSingle ? undefined : height,
        background: BASE_BG,
        border,
        borderRadius: 8,
        paddingLeft: isSingle ? 0 : px,
        paddingRight: isSingle ? 0 : px,
        fontFamily: FONT,
        fontSize,
        fontWeight: 500,
        lineHeight: lineH,
        color: BASE_TEXT,
        boxSizing: 'border-box',
      }}
    >
      {display}
    </span>
  )
}
