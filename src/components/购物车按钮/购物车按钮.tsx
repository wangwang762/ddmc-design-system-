// Figma component: Button/购物车
// node: 4553:38967
//
// All states use Super Squircle shape (exact paths from Figma SVG export):
//   默认    → green fill squircle
//   缺货加购 → white fill squircle + green stroke 0.5px (inset path)
//   不可选中 → gray fill squircle

import React from 'react'
import { cn } from '@/utils/cn'
import {
  SQUIRCLE_26, SQUIRCLE_22, SQUIRCLE_18,
  SQUIRCLE_26_INSET, SQUIRCLE_22_INSET, SQUIRCLE_18_INSET,
} from '@/utils/squircle'
import { accentGreen, accentRed, dark, light } from '@/tokens/colors'
import type { 购物车按钮Props, 购物车尺寸, 购物车状态 } from './types'

// 缺货加购描边 — Figma 导出值，不在通用色板中
const STROKE_OOS = '#DCDCDC'

// ── Size config ───────────────────────────────────────────────
const sizeMap: Record<购物车尺寸, { px: number; path: string; insetPath: string; iconPx: number }> = {
  '26px': { px: 26, path: SQUIRCLE_26, insetPath: SQUIRCLE_26_INSET, iconPx: 16 },
  '22px': { px: 22, path: SQUIRCLE_22, insetPath: SQUIRCLE_22_INSET, iconPx: 14 },
  '18px': { px: 18, path: SQUIRCLE_18, insetPath: SQUIRCLE_18_INSET, iconPx: 11 },
}

// ── Cart SVG — paths from Figma icon library ─────────────────
const CartIcon = ({ size, color }: { size: number; color: string }) => (
  <svg
    width={size} height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{ position: 'relative', flexShrink: 0 }}
  >
    <path
      d="M4.074 6.579H19.05c1.396 0 2.527 1.131 2.527 2.527 0 .274-.044.545-.131.804l-1.195 3.561c-.518 1.544-1.965 2.585-3.594 2.585H8.768c-1.877 0-3.47-1.373-3.749-3.228L3.93 5.572C3.745 4.335 2.682 3.42 1.431 3.42H1.08"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
    <path
      fillRule="evenodd" clipRule="evenodd"
      d="M6.934 21.665a1.43 1.43 0 1 1 0-2.86 1.43 1.43 0 0 1 0 2.86Z"
      fill={color}
    />
    <path
      fillRule="evenodd" clipRule="evenodd"
      d="M17.615 21.665a1.43 1.43 0 1 1 0-2.86 1.43 1.43 0 0 1 0 2.86Z"
      fill={color}
    />
  </svg>
)

// ── Background per state ──────────────────────────────────────
const BgLayer = ({
  状态,
  px,
  path,
  insetPath,
}: {
  状态: 购物车状态
  px: number
  path: string
  insetPath: string
}) => {
  if (状态 === '缺货加购') {
    return (
      <svg
        width={px} height={px}
        viewBox={`0 0 ${px} ${px}`}
        style={{ position: 'absolute', inset: 0 }}
        aria-hidden
      >
        <path d={insetPath} fill={light.white} stroke={STROKE_OOS} strokeWidth="0.5" />
      </svg>
    )
  }
  return (
    <svg
      width={px} height={px}
      viewBox={`0 0 ${px} ${px}`}
      style={{ position: 'absolute', inset: 0 }}
      aria-hidden
    >
      <path d={path} fill={状态 === '默认' ? accentGreen.primary : dark.black20} />
    </svg>
  )
}

// ── Icon color per state ──────────────────────────────────────
const iconColorMap: Record<购物车状态, string> = {
  '默认':    light.white,
  '缺货加购': dark.black70,
  '不可选中': light.white,
}

export const 购物车按钮: React.FC<购物车按钮Props> = ({
  尺寸: size    = '26px',
  按钮状态: state = '默认',
  badge,
  onClick,
  className,
}) => {
  const { px, path, insetPath, iconPx } = sizeMap[size]
  const isDisabled = state === '不可选中'

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      className={cn(
        'relative inline-flex items-center justify-center flex-shrink-0',
        isDisabled && 'cursor-not-allowed',
        className,
      )}
      style={{ width: px, height: px, overflow: 'visible' }}
    >
      {/* Shape background */}
      <BgLayer 状态={state} px={px} path={path} insetPath={insetPath} />

      {/* Cart icon */}
      <CartIcon size={iconPx} color={iconColorMap[state]} />

      {/* 红点徽标 — outside clip scope */}
      {badge !== undefined && badge > 0 && (
        <span
          style={{
            position: 'absolute',
            top: -3,
            right: -3,
            minWidth: 12,
            height: 12,
            padding: '0 3.5px',
            background: accentRed.primary,
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'PingFang SC, sans-serif',
            fontSize: 10,
            fontWeight: 500,
            lineHeight: '12px',
            color: light.white,
            whiteSpace: 'nowrap',
          }}
        >
          {badge > 99 ? '99+' : badge}
        </span>
      )}
    </button>
  )
}
