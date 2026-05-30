// Figma component: 叮咚特色品质之爱
// nodes: 前景图 22716:7803 + 心智tab 22716:7843
//
// 布局：
//   标题行（24px）：叮咚买菜 logo + 品质之爱 | 声音icon + 活动入口
//   瓷片区（85px）：横向可滚动的心智瓷片（serif标题 + 商品图）

import React from 'react'
import type { 叮咚特色Props } from './types'
import logoText  from './assets/logo-text.svg'
import iconNotice from './assets/icon-notice.svg'

export function 叮咚特色({ 活动文字 = '天天赢免单', 瓷片列表, onActivityClick, onTileClick }: 叮咚特色Props) {
  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {/* ── 标题行 ── */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 9px', height: 24,
      }}>
        {/* 左侧：叮咚买菜 品质之爱 logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logoText}
            alt="叮咚买菜 品质之爱"
            style={{ width: 175, height: 26, flexShrink: 0 }}
          />
        </div>

        {/* 右侧：声音图标 + 活动入口 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
          <img src={iconNotice} alt="" style={{ width: 18, height: 16, display: 'block' }} />
          <button
            onClick={onActivityClick}
            style={{
              background: 'linear-gradient(90deg, rgba(255,49,51,0.9) 0%, rgba(236,18,18,0.9) 100%)',
              borderRadius: 10.22, border: 'none', cursor: 'pointer',
              height: 18, padding: '0 8px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
              display: 'flex', alignItems: 'center',
            }}
          >
            <span style={{
              fontSize: 11, color: '#fff', lineHeight: 1,
              fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap',
            }}>
              {活动文字}
            </span>
          </button>
        </div>
      </div>

      {/* ── 瓷片区 ── */}
      <div style={{
        display: 'flex', gap: 6, alignItems: 'center',
        padding: '9px 9px 0', overflowX: 'auto',
        scrollbarWidth: 'none',
      }}>
        {瓷片列表.map(tile => (
          <button
            key={tile.label}
            onClick={() => onTileClick?.(tile.label)}
            style={{
              flexShrink: 0, width: 74, height: 85,
              background: 'linear-gradient(180deg, #F5F5F5 0%, #FDFDFD 100%)',
              borderRadius: 9, border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: 3, padding: '3px 0',
              isolation: 'isolate',
            }}
          >
            <span style={{
              fontSize: 12, lineHeight: '14px', color: '#1A1A1A', textAlign: 'center',
              fontFamily: '"Source Han Serif CN", "Noto Serif CJK SC", serif',
              fontWeight: 700, width: 60, display: 'block',
            }}>
              {tile.label}
            </span>
            <div style={{ width: 50, height: 50, borderRadius: 4, overflow: 'hidden', flexShrink: 0 }}>
              <img
                src={tile.img}
                alt={tile.label}
                style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'darken' }}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
