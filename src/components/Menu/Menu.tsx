import React from 'react'
import { Icon } from '../Icon'
import { light } from '@/tokens/colors'
import type { MenuProps } from './types'

// Figma 专属值 — 深色菜单背景，不在全局 token 中
const MENU_BG = 'rgba(0,0,0,0.8)'
const DIVIDER = 'rgba(255,255,255,0.2)'

export function Menu({ items, arrowRight = 18, className }: MenuProps) {
  return (
    <div className={`backdrop-blur-sm flex flex-col items-start ${className ?? ''}`} style={{ width: 130 }}>
      {/* 顶部三角箭头，右对齐指向触发按钮 */}
      <div
        className="flex items-center justify-end w-full"
        style={{ paddingRight: arrowRight }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: '7px solid transparent',
            borderRight: '7px solid transparent',
            borderBottom: `6px solid ${MENU_BG}`,
          }}
        />
      </div>

      {/* 菜单主体 */}
      <div
        className="flex flex-col rounded-xl"
        style={{ backgroundColor: MENU_BG, width: 130 }}
      >
        {items.map((item, i) => (
          <button
            key={i}
            onClick={item.onClick}
            className="flex items-center gap-1.5 w-full px-3 py-3"
            style={{
              background: 'none',
              border: 'none',
              borderTop: i > 0 ? `0.5px solid ${DIVIDER}` : 'none',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <Icon name={item.iconName} size={16} color={light.white} className="flex-shrink-0" />
            <span
              className="text-[14px] leading-[16px] whitespace-nowrap"
              style={{ color: light.white }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
