// Figma component: 加减号
// node: 14475:13875  Size: 69×22px
//
// Both buttons use Super Squircle shape (exact SVG path from Figma).
// Minus: white fill + green border, green minus icon
// Plus active: green fill, WHITE plus icon
// Plus disabled: gray fill, WHITE plus icon  ← key fix

import React from 'react'
import { cn } from '@/utils/cn'
import { SQUIRCLE_22 } from '@/utils/squircle'
import { accentGreen, dark, light } from '@/tokens/colors'
import type { 加减号Props } from './types'

// ── Minus button background (squircle outline) ───────────────
const MinusBg = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" overflow="visible" style={{ position: 'absolute', inset: 0 }} aria-hidden>
    <path d={SQUIRCLE_22} fill={light.white} stroke={accentGreen.primary} strokeWidth="1" />
  </svg>
)

// ── Plus button background (squircle solid fill) ─────────────
const PlusBg = ({ disabled }: { disabled: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" style={{ position: 'absolute', inset: 0 }} aria-hidden>
    <path d={SQUIRCLE_22} fill={disabled ? dark.black20 : accentGreen.primary} />
  </svg>
)

export const 加减号: React.FC<加减号Props> = ({
  count,
  onDecrement,
  onIncrement,
  加号可点击: plusEnabled = true,
  className,
}) => {
  return (
    <div
      className={cn('inline-flex items-center', className)}
      style={{ width: 69, height: 22 }}
    >
      {/* ── 减号按钮 ──────────────────────────────────────── */}
      <button
        type="button"
        onClick={onDecrement}
        style={{ position: 'relative', width: 22, height: 22, flexShrink: 0,
                 display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <MinusBg />
        {/* Minus icon */}
        <svg width="10" height="2" viewBox="0 0 10 2" fill="none" style={{ position: 'relative' }}>
          <path d="M1 1H9" stroke={accentGreen.primary} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* ── 数字 ──────────────────────────────────────────── */}
      <span
        style={{
          flex: 1,
          textAlign: 'center',
          fontFamily: 'PingFang SC, sans-serif',
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '16px',
          color: dark.black90,
          userSelect: 'none',
        }}
      >
        {count}
      </span>

      {/* ── 加号按钮 ──────────────────────────────────────── */}
      <button
        type="button"
        disabled={!plusEnabled}
        onClick={plusEnabled ? onIncrement : undefined}
        style={{ position: 'relative', width: 22, height: 22, flexShrink: 0,
                 display: 'flex', alignItems: 'center', justifyContent: 'center',
                 cursor: plusEnabled ? 'pointer' : 'not-allowed' }}
      >
        <PlusBg disabled={!plusEnabled} />
        {/* Plus icon — always WHITE regardless of disabled state */}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ position: 'relative' }}>
          <path d="M5 1V9M1 5H9" stroke={light.white} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}
