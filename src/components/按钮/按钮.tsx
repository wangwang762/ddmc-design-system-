// Figma component: 按钮
// Styles inlined 1:1 from Figma — no token abstraction

import React from 'react'
import { cn } from '@/utils/cn'
import type { 按钮Props, 尺寸 } from './types'

// ── Size specs (直接来自 Figma，像素值 1:1) ───────────────────
const sizeMap: Record<尺寸, {
  wrap:  string
  text:  string
  icon:  string
}> = {
  XLarge: {
    wrap: 'h-[42px] px-[24px] py-[12px] gap-[6px]',
    text: 'text-[16px] leading-[18px] font-medium',
    icon: 'size-[16px] shrink-0',
  },
  Large: {
    wrap: 'h-[30px] px-[12px] py-[6px] gap-[3px]',
    text: 'text-[14px] leading-[16px] font-medium',
    icon: 'size-[16px] shrink-0',
  },
  Medium: {
    wrap: 'h-[24px] px-[9px] py-[5px] gap-[3px]',
    text: 'text-[12px] leading-[14px] font-medium',
    icon: 'size-[12px] shrink-0',
  },
  Small: {
    wrap: 'h-[20px] px-[9px] py-[4px]',
    text: 'text-[10px] leading-[12px] font-normal',
    icon: 'size-[12px] shrink-0',
  },
}

// ── Type styles (来自 Figma variant 截图) ────────────────────
// Primary: gradient #24D64E → #2DBA59, text white
// Secondary: border 0.5px #00B740, text #00B740
const typeBase = {
  Primary:
    'bg-gradient-to-r from-[#24D64E] to-[#2DBA59] text-white ' +
    'active:from-[#1EB843] active:to-[#23A64B]',
  Secondary:
    'border-[0.5px] border-[#00B740] text-[#00B740] bg-transparent ' +
    'active:bg-[rgba(0,183,64,0.09)]',
}

export const 按钮: React.FC<按钮Props> = ({
  尺寸: size   = 'Large',
  类型: type   = 'Primary',
  自适应: adaptive = true,
  children,
  iconLeft,
  iconRight,
  disabled = false,
  onClick,
  className,
}) => {
  const s = sizeMap[size]

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        // layout
        'inline-flex items-center justify-center',
        'rounded-[100px]',
        'whitespace-nowrap select-none',
        'transition-opacity duration-100',
        // size
        s.wrap,
        // type
        typeBase[type],
        // adaptive
        !adaptive && 'w-full',
        // disabled — Figma: opacity-40, no interaction
        disabled && 'opacity-40 cursor-not-allowed pointer-events-none',
        className,
      )}
    >
      {iconLeft && (
        <span className={cn(s.icon, 'flex items-center justify-center')}>
          {iconLeft}
        </span>
      )}

      {children && (
        <span className={cn(s.text, 'font-[\'PingFang_SC\',sans-serif]')}>
          {children}
        </span>
      )}

      {iconRight && (
        <span className={cn(s.icon, 'flex items-center justify-center')}>
          {iconRight}
        </span>
      )}
    </button>
  )
}
