// Figma component: 分段筛选器 (Segmented Control)
// 搜索结果页排序筛选条，等宽分段，支持可排序项的升序/降序切换

import React from 'react'
import { dark, light, accentGreen } from '@/tokens/colors'
import type { 分段筛选器Props, 分段筛选器Item, 分段排序状态 } from './types'

const FONT = 'PingFang SC, sans-serif'

function SortArrows({ upColor, downColor }: { upColor: string; downColor: string }) {
  return (
    <div
      style={{
        width: 16,
        height: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        flexShrink: 0,
      }}
    >
      <svg width="4" height="3" viewBox="0 0 4 3" fill="none">
        <path d="M2 0L4 3H0L2 0Z" fill={upColor} />
      </svg>
      <svg width="4" height="3" viewBox="0 0 4 3" fill="none">
        <path d="M2 3L0 0H4L2 3Z" fill={downColor} />
      </svg>
    </div>
  )
}

export function 分段筛选器({
  items,
  activeKey,
  sortOrder = '默认',
  onChange,
  className,
  style,
}: 分段筛选器Props) {
  const handleClick = (item: 分段筛选器Item) => {
    if (item.key !== activeKey) {
      onChange(item.key, '默认')
      return
    }
    if (!item.sortable) return
    const next: 分段排序状态 =
      sortOrder === '默认' ? '升序' : sortOrder === '升序' ? '降序' : '默认'
    onChange(item.key, next)
  }

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'stretch',
        backgroundColor: light.white,
        borderBottom: `0.5px solid ${dark.black10}`,
        ...style,
      }}
    >
      {items.map(item => {
        const isActive = item.key === activeKey

        let upColor: string = dark.black30
        let downColor: string = dark.black30
        if (isActive && item.sortable) {
          if (sortOrder === '默认') {
            upColor = accentGreen.primary
            downColor = accentGreen.primary
          } else if (sortOrder === '升序') {
            upColor = accentGreen.primary
          } else {
            downColor = accentGreen.primary
          }
        }

        return (
          <div
            key={item.key}
            onClick={() => handleClick(item)}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3,
              paddingTop: 12,
              paddingBottom: 14,
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontFamily: FONT,
                fontSize: 14,
                fontWeight: isActive ? 500 : 400,
                lineHeight: '16px',
                color: isActive ? accentGreen.primary : dark.black90,
                whiteSpace: 'nowrap',
              }}
            >
              {item.label}
            </span>
            {item.sortable && <SortArrows upColor={upColor} downColor={downColor} />}
          </div>
        )
      })}
    </div>
  )
}
