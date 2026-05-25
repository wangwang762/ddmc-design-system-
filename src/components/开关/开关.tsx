// Figma component: 开关 (Switch)
// node: 3815:17862
//
// Three sizes, toggled by `active` prop.
// Track: #E8E8EA (off) → #00B740 (on)
// Thumb: white circle, box-shadow 2dp+24dp
//
// Thumb positions (left edge from track left):
//   大 56×32: off=4px  on=28px  (translateX=24px)
//   中 48×24: off=2px  on=26px  (translateX=24px)
//   小 32×16: off=1px  on=17px  (translateX=16px)

import React from 'react'
import { cn } from '@/utils/cn'
import { accentGreen, light } from '@/tokens/colors'
import type { 开关Props, 开关尺寸 } from './types'

// Switch off background — Figma iOS系统灰，不在通用色板中
const TRACK_OFF = '#E8E8EA'

const sizeMap: Record<开关尺寸, {
  width: number; height: number
  thumbSize: number; thumbOff: number; translateX: number
}> = {
  '大': { width: 56, height: 32, thumbSize: 24, thumbOff: 4,  translateX: 24 },
  '中': { width: 48, height: 24, thumbSize: 20, thumbOff: 2,  translateX: 24 },
  '小': { width: 32, height: 16, thumbSize: 14, thumbOff: 1,  translateX: 16 },
}

const THUMB_SHADOW = '0px 2px 4px 0px rgba(0,0,0,0.08), 0px 4px 24px 0px rgba(0,0,0,0.08)'

export const 开关: React.FC<开关Props> = ({
  尺寸 = '大',
  active = false,
  onChange,
  className,
}) => {
  const { width, height, thumbSize, thumbOff, translateX } = sizeMap[尺寸]

  return (
    <button
      type="button"
      role="switch"
      aria-checked={active}
      onClick={() => onChange?.(!active)}
      className={cn('relative flex-shrink-0', className)}
      style={{ width, height, background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
    >
      {/* Track */}
      <div
        style={{
          position: 'absolute', inset: 0, borderRadius: 100,
          backgroundColor: active ? accentGreen.primary : TRACK_OFF,
          transition: 'background-color 200ms ease',
        }}
      />
      {/* Thumb */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: thumbOff,
          width: thumbSize,
          height: thumbSize,
          borderRadius: '50%',
          backgroundColor: light.white,
          boxShadow: THUMB_SHADOW,
          transform: `translateY(-50%) translateX(${active ? translateX : 0}px)`,
          transition: 'transform 200ms ease',
        }}
      />
    </button>
  )
}
