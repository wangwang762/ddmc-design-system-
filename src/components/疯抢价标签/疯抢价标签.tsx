// Figma component: 清仓抢购价格标签
// node: 10145:21485
//
// 16px 高度价格胶囊：左侧 ¥价格（DdmcSans Bold 10+14px），右侧红色"抢"角标
// 整体宽度随价格位数自适应，角标固定 31px（chevron 左尖角设计）

import React from 'react'
import type { 疯抢价标签Props } from './types'

// Figma 专属值 — 角标渐变色与 Figma 资源一致
const BADGE_GRAD = 'linear-gradient(90deg, #FF8080 0%, #FF3133 100%)'

export function 疯抢价标签({ 价格, className }: 疯抢价标签Props) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 16,
        backgroundColor: '#FFF0F0',
        borderRadius: 8,
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* ── 价格区 ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 4,
        paddingRight: 2,
        flexShrink: 0,
        lineHeight: 0,
      }}>
        <span style={{
          fontFamily: 'DdmcSans, sans-serif',
          fontWeight: 700,
          fontSize: 10,
          lineHeight: '12px',
          color: '#FF3133',
        }}>
          ¥
        </span>
        <span style={{
          fontFamily: 'DdmcSans, sans-serif',
          fontWeight: 700,
          fontSize: 14,
          lineHeight: '16px',
          color: '#FF3133',
        }}>
          {价格}
        </span>
      </div>

      {/* ── 抢 角标（左尖 chevron，纯 CSS 还原 Figma 形状）── */}
      <div style={{
        width: 31,
        height: 16,
        flexShrink: 0,
        background: BADGE_GRAD,
        // 左侧带尖角，指向左边中心点
        clipPath: 'polygon(5px 0, 100% 0, 100% 100%, 5px 100%, 0 50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 4,
      }}>
        <span style={{
          fontFamily: 'PingFang SC, sans-serif',
          fontWeight: 500,
          fontSize: 11,
          lineHeight: '14px',
          color: '#FFFFFF',
          whiteSpace: 'nowrap',
        }}>
          抢
        </span>
      </div>
    </div>
  )
}
