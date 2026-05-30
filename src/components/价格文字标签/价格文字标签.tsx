// Figma component: 价格文字标签
// node: 10145:67460
//
// 三种风格：
//   粉底价格 — #FFEFEF 底 + DdmcSans 12px 红色价格，右侧可带划线原价
//   粉底文字 — #FFEFEF 底 + 11px 红色文字（尝鲜/促销场景）
//   红底文字 — #FF3133 底 + 11px 白色文字（补贴/强调场景）

import React from 'react'
import type { 价格文字标签Props } from './types'

const FONT = 'PingFang SC, sans-serif'
// Figma 专属值 — 与色板无精确对应
const PINK_BG = '#FFEFEF'

export function 价格文字标签({ 风格, 价格, 原价, 文字, className }: 价格文字标签Props) {
  // ── 粉底价格 ──────────────────────────────────────────────────────
  if (风格 === '粉底价格') {
    return (
      <div
        className={className}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 3,
          flexShrink: 0,
        }}
      >
        {/* 价格胶囊 */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          height: 16,
          paddingLeft: 3,
          paddingRight: 3,
          backgroundColor: PINK_BG,
          borderRadius: 10,
          flexShrink: 0,
          lineHeight: 0,
        }}>
          <span style={{
            fontFamily: 'DdmcSans, sans-serif',
            fontWeight: 700,
            fontSize: 12,
            lineHeight: '14px',
            color: '#FF3133',
          }}>
            ¥{价格}
          </span>
        </div>

        {/* 划线原价（可选）*/}
        {原价 && (
          <span style={{
            fontFamily: FONT,
            fontWeight: 400,
            fontSize: 11,
            lineHeight: '14px',
            color: '#808080',
            textDecoration: 'line-through',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            ¥{原价}
          </span>
        )}
      </div>
    )
  }

  // ── 粉底文字 / 红底文字 ────────────────────────────────────────────
  const isRed = 风格 === '红底文字'
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 16,
        paddingLeft: 4,
        paddingRight: 4,
        backgroundColor: isRed ? '#FF3133' : PINK_BG,
        borderRadius: 8,
        flexShrink: 0,
      }}
    >
      <span style={{
        fontFamily: FONT,
        fontWeight: 500,
        fontSize: 11,
        lineHeight: '14px',
        color: isRed ? '#FFFFFF' : '#FF3133',
        whiteSpace: 'nowrap',
      }}>
        {文字}
      </span>
    </div>
  )
}
