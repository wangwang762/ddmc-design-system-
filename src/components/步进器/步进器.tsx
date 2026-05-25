// Figma component: 步进器 (Stepper)
// node: 10:56427
//
// 类型=大: free-floating — [minus 20px] gap-3 [count box 46×26 r-6 bg=#F7F7F7] gap-3 [plus 20px]
// 类型=小: segmented — three 24×23px cells with 0.5px #EBEBEB border, merged via mr-[-0.5px]
//
// Icon paths (exact Figma SVG exports):
//   大 minus: 20×20 viewBox, horizontal bar
//   大 plus:  20×20 viewBox, cross
//   小 minus: 12×12 viewBox, horizontal bar
//   小 plus:  12×12 viewBox, cross
//
// Active fill: #1A1A1A  Disabled fill: #808080

import React from 'react'
import { cn } from '@/utils/cn'
import { dark } from '@/tokens/colors'
import type { 步进器Props, 步进器状态 } from './types'

// 步进器专属颜色 — Figma 导出值，与通用色板相近但不完全一致
const BOX_BG     = '#F7F7F7'   // 大型计数框背景（接近 dark.black4 #F5F5F5）
const CELL_BORDER = '#EBEBEB'  // 小型边框色（接近 dark.black10 #E6E6E6）

// ── Icon paths (Figma asset exports) ─────────────────────────────
// Icon fill uses dark.black90 (active) and dark.black50 (disabled) from design tokens
const MINUS_PATH_20 ='M5.93753 10C5.93753 9.68934 6.18937 9.4375 6.50003 9.4375L13.5 9.4375C13.8107 9.4375 14.0625 9.68934 14.0625 10C14.0625 10.3107 13.8107 10.5625 13.5 10.5625L6.50003 10.5625C6.18937 10.5625 5.93753 10.3107 5.93753 10Z'
const PLUS_PATH_20  = 'M10 5.9375C10.3107 5.9375 10.5625 6.18934 10.5625 6.5V9.4375L13.5 9.4375C13.8107 9.4375 14.0625 9.68934 14.0625 10C14.0625 10.3107 13.8107 10.5625 13.5 10.5625H10.5625V13.5C10.5625 13.8107 10.3107 14.0625 10 14.0625C9.68937 14.0625 9.43753 13.8107 9.43753 13.5L9.43753 10.5625H6.50003C6.18937 10.5625 5.93753 10.3107 5.93753 10C5.93753 9.68934 6.18937 9.4375 6.50003 9.4375H9.43753V6.5C9.43753 6.18934 9.68937 5.9375 10 5.9375Z'
const MINUS_PATH_12 = 'M2.5 6.5C2.22386 6.5 2 6.27614 2 6V6C2 5.72386 2.22386 5.5 2.5 5.5H9.5C9.77614 5.5 10 5.72386 10 6V6C10 6.27614 9.77614 6.5 9.5 6.5H2.5Z'
const PLUS_PATH_12  = 'M6 2C5.72386 2 5.5 2.22386 5.5 2.5V5.5H2.5C2.22386 5.5 2 5.72386 2 6C2 6.27614 2.22386 6.5 2.5 6.5H5.5V9.5C5.5 9.77614 5.72386 10 6 10C6.27614 10 6.5 9.77614 6.5 9.5V6.5H9.5C9.77614 6.5 10 6.27614 10 6C10 5.72386 9.77614 5.5 9.5 5.5H6.5V2.5C6.5 2.22386 6.27614 2 6 2Z'

// ── Helper: resolve disabled states ──────────────────────────────
function isMinusDisabled(状态: 步进器状态) {
  return 状态 === '无法修改' || 状态 === '无法减少'
}
function isPlusDisabled(状态: 步进器状态) {
  return 状态 === '无法修改' || 状态 === '无法增加'
}

// ── 大型 icons ────────────────────────────────────────────────────
const MinusIcon大 = ({ disabled }: { disabled: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden style={{ display: 'block', flexShrink: 0 }}>
    <path fillRule="evenodd" clipRule="evenodd" d={MINUS_PATH_20} fill={disabled ? dark.black50 : dark.black90} />
  </svg>
)

const PlusIcon大 = ({ disabled }: { disabled: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden style={{ display: 'block', flexShrink: 0 }}>
    <path fillRule="evenodd" clipRule="evenodd" d={PLUS_PATH_20} fill={disabled ? dark.black50 : dark.black90} />
  </svg>
)

// ── 小型 icons ────────────────────────────────────────────────────
const MinusIcon小 = ({ disabled }: { disabled: boolean }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden style={{ display: 'block' }}>
    <path d={MINUS_PATH_12} fill={disabled ? dark.black50 : dark.black90} />
  </svg>
)

const PlusIcon小 = ({ disabled }: { disabled: boolean }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden style={{ display: 'block' }}>
    <path fillRule="evenodd" clipRule="evenodd" d={PLUS_PATH_12} fill={disabled ? dark.black50 : dark.black90} />
  </svg>
)

// ── Component ─────────────────────────────────────────────────────
export const 步进器: React.FC<步进器Props> = ({
  类型 = '大',
  状态 = '默认',
  count = 1,
  onDecrement,
  onIncrement,
  className,
}) => {
  const minusDis = isMinusDisabled(状态)
  const plusDis  = isPlusDisabled(状态)

  if (类型 === '大') {
    return (
      <div
        className={cn('flex items-center', className)}
        style={{ gap: 3 }}
      >
        <button
          type="button"
          disabled={minusDis}
          onClick={onDecrement}
          style={{ background: 'transparent', border: 'none', padding: 0, cursor: minusDis ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-label="减少"
        >
          <MinusIcon大 disabled={minusDis} />
        </button>

        <div
          style={{
            width: 46, height: 26,
            backgroundColor: BOX_BG,
            borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'PingFang SC, sans-serif',
              fontWeight: 500,
              fontSize: 14,
              lineHeight: '16px',
              color: dark.black90,
              textAlign: 'center',
            }}
          >
            {count}
          </span>
        </div>

        <button
          type="button"
          disabled={plusDis}
          onClick={onIncrement}
          style={{ background: 'transparent', border: 'none', padding: 0, cursor: plusDis ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-label="增加"
        >
          <PlusIcon大 disabled={plusDis} />
        </button>
      </div>
    )
  }

  // 类型=小: segmented cells
  const cellStyle: React.CSSProperties = {
    width: 24, height: 23,
    border: `0.5px solid ${CELL_BORDER}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginRight: -0.5,
    background: 'transparent',
    padding: 0,
    cursor: 'pointer',
    flexShrink: 0,
  }

  return (
    <div className={cn('flex items-center', className)} style={{ position: 'relative' }}>
      <button
        type="button"
        disabled={minusDis}
        onClick={onDecrement}
        style={{ ...cellStyle, borderRadius: '12px 0 0 12px', cursor: minusDis ? 'not-allowed' : 'pointer' }}
        aria-label="减少"
      >
        <MinusIcon小 disabled={minusDis} />
      </button>

      <div
        style={{
          ...cellStyle,
          cursor: 'default',
          borderRadius: 0,
          padding: '2px 10px',
        }}
      >
        <span
          style={{
            fontFamily: 'PingFang SC, sans-serif',
            fontWeight: 500,
            fontSize: 14,
            lineHeight: '16px',
            color: dark.black90,
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {count}
        </span>
      </div>

      <button
        type="button"
        disabled={plusDis}
        onClick={onIncrement}
        style={{ ...cellStyle, borderRadius: '0 12px 12px 0', marginRight: 0, cursor: plusDis ? 'not-allowed' : 'pointer' }}
        aria-label="增加"
      >
        <PlusIcon小 disabled={plusDis} />
      </button>
    </div>
  )
}
