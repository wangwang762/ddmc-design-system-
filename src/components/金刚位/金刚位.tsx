// Figma component: 金刚位 (Grid Navigation)
// node: 1826:3646
//
// 首页入口导航格：squircle 图标 + 文字标签，多行排列，底部分页指示器
// iconSrc 由业务方提供（预渲染的 squircle 图标图片，透明背景）

import React from 'react'
import { dark, light, accentGreen } from '@/tokens/colors'
import type { 金刚位Props, 金刚位Item } from './types'

const FONT = 'PingFang SC, sans-serif'

// 48×48 squircle clip path（等比缩放自 Figma Super Squircle）
const SQUIRCLE_48 =
  'M24 0C7.721 0 0 7.721 0 24C0 40.279 7.721 48 24 48C40.279 48 48 40.279 48 24C48 7.721 40.279 0 24 0Z'

// ── 单个图标项 ─────────────────────────────────────────────────────────────────

function IconCell({ item }: { item: 金刚位Item }) {
  return (
    <div
      onClick={item.onClick}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        cursor: item.onClick ? 'pointer' : undefined,
      }}
    >
      {/* 图标 + 角标 */}
      <div style={{ position: 'relative', width: 48, height: 48, flexShrink: 0 }}>
        <img
          src={item.iconSrc}
          alt={item.label}
          style={{
            width: 48,
            height: 48,
            objectFit: 'cover',
            objectPosition: 'top center',
            display: 'block',
            // squircle 裁切：若图片本身已有透明 squircle 形状可省略
            clipPath: `path('${SQUIRCLE_48}')`,
          }}
        />
        {item.badge && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              backgroundColor: '#FF3133',
              // 角标形状：右上/左上/右下圆角，左下直角
              borderRadius: '7.5px 7.5px 7.5px 2px',
              border: '0.6px solid white',
              padding: '2.5px 3px',
              lineHeight: 0,
            }}
          >
            <span
              style={{
                fontFamily: FONT,
                fontSize: 9,
                fontWeight: 500,
                color: light.white,
                lineHeight: '10px',
                whiteSpace: 'nowrap',
              }}
            >
              {item.badge}
            </span>
          </div>
        )}
      </div>

      {/* 文字标签 */}
      <span
        style={{
          fontFamily: FONT,
          fontSize: 12,
          fontWeight: 400,
          lineHeight: '14px',
          color: '#4D4D4D',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '100%',
        }}
      >
        {item.label}
      </span>
    </div>
  )
}

// ── 分页指示器 ─────────────────────────────────────────────────────────────────
// 轨道：22px 灰色；滑块：12.5px 绿色，根据当前页偏移

function PageIndicator({
  activePage,
  totalPages,
}: {
  activePage: number
  totalPages: number
}) {
  const trackWidth = 22
  const pillWidth = 12.5
  const maxOffset = trackWidth - pillWidth
  const offset = totalPages <= 1 ? 0 : (activePage / (totalPages - 1)) * maxOffset

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 4,
      }}
    >
      <div style={{ position: 'relative', width: trackWidth, height: 5 }}>
        {/* 轨道 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 2.5,
            backgroundColor: dark.black10,
          }}
        />
        {/* 滑块 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: offset,
            width: pillWidth,
            height: 5,
            borderRadius: 2.5,
            backgroundColor: accentGreen.primary,
            transition: 'left 0.2s ease',
          }}
        />
      </div>
    </div>
  )
}

// ── 主组件 ────────────────────────────────────────────────────────────────────

export function 金刚位({
  items,
  每行列数 = 5,
  activePage,
  totalPages,
  className,
  style,
}: 金刚位Props) {
  // 按行数切分
  const rows: 金刚位Item[][] = []
  for (let i = 0; i < items.length; i += 每行列数) {
    rows.push(items.slice(i, i + 每行列数))
  }

  const showIndicator =
    activePage !== undefined && totalPages !== undefined && totalPages >= 2

  return (
    <div
      className={className}
      style={{
        backgroundColor: 'rgba(255,255,255,0.97)',
        borderRadius: 12,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 9,
        paddingRight: 9,
        display: 'flex',
        flexDirection: 'column',
        gap: 9,
        ...style,
      }}
    >
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          style={{ display: 'flex', alignItems: 'flex-start' }}
        >
          {row.map(item => (
            <IconCell key={item.key} item={item} />
          ))}
          {/* 末行若不满列数，补空占位保持对齐 */}
          {row.length < 每行列数 &&
            Array.from({ length: 每行列数 - row.length }).map((_, i) => (
              <div key={`pad-${i}`} style={{ flex: 1 }} />
            ))}
        </div>
      ))}

      {showIndicator && (
        <PageIndicator activePage={activePage!} totalPages={totalPages!} />
      )}
    </div>
  )
}
