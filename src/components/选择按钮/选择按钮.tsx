// Figma component: 选择按钮 (Radio Button)
// node: 3460:14424
//
// 24×24px container, 18×18px circle (inset 3px each side).
// Exact SVG paths from Figma asset exports.
//
// 状态:
//   未选中 → empty circle
//   选中   → filled circle + white checkmark
//   不可选  → gray circle, disabled
// 类型:
//   默认  → green filled when selected (#00B740)
//   绿卡  → gold filled when selected (#EFD573)

import React from 'react'
import { cn } from '@/utils/cn'
import { accentGreen, dark, light } from '@/tokens/colors'
import type { 选择按钮Props, 选择按钮类型 } from './types'

// 绿卡金色 — Figma 专属值，不在通用色板中
const GOLD_FILL    = '#EFD573'
const GOLD_UNSEL   = '#FFF1BF'
// 禁用态 — Figma 导出值（接近 dark.black4/black10 但不完全一致）
const DISABLED_FILL   = '#F4F4F5'
const DISABLED_STROKE = '#EAEAEB'

// ── Color map per 类型 ────────────────────────────────────────
const colorMap: Record<选择按钮类型, {
  unselectedFill: string; unselectedStroke: string
  selectedFill: string
}> = {
  '默认': { unselectedFill: light.white,    unselectedStroke: dark.black20, selectedFill: accentGreen.primary },
  '绿卡': { unselectedFill: GOLD_UNSEL,     unselectedStroke: GOLD_FILL,    selectedFill: GOLD_FILL           },
}

// ── Checkmark SVG path (Figma export, L-shape rotated 45°) ───
const Checkmark = ({ color = light.white }: { color?: string }) => (
  <svg
    viewBox="0 0 10 14"
    fill="none"
    style={{ position: 'absolute', width: 10, height: 14,
             top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    aria-hidden
  >
    <path
      d="M2 7.5L5 11L9 3"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const 选择按钮: React.FC<选择按钮Props> = ({
  状态 = '未选中',
  类型 = '默认',
  onClick,
  className,
}) => {
  const { unselectedFill, unselectedStroke, selectedFill } = colorMap[类型]
  const isDisabled = 状态 === '不可选'
  const isSelected = 状态 === '选中'

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={cn('relative flex-shrink-0', isDisabled && 'cursor-not-allowed', className)}
      style={{ width: 24, height: 24, background: 'transparent', border: 'none', padding: 0 }}
      aria-checked={isSelected}
      role="radio"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        {isDisabled ? (
          // 不可选: gray fill, gray stroke
          <circle cx="12" cy="12" r="8.25" fill={DISABLED_FILL} stroke={DISABLED_STROKE} strokeWidth="1.5" />
        ) : isSelected ? (
          // 选中: solid fill, no stroke
          <circle cx="12" cy="12" r="9" fill={selectedFill} />
        ) : (
          // 未选中: white/tinted fill, colored stroke
          <circle cx="12" cy="12" r="8.25" fill={unselectedFill} stroke={unselectedStroke} strokeWidth="1.5" />
        )}
      </svg>
      {isSelected && <Checkmark color={light.white} />}
    </button>
  )
}
