// Figma component: 模块标题 (Section Title)
// node: 10145:19273
//
// 各功能区块的艺术标题（渐变字形 SVG 图片组合）。
// 今日疯抢变体：60×22px 容器，4 个字形图片 + 1 个火焰装饰。

import React from 'react'
import type { 模块标题Props } from './types'

import charJin   from './assets/frenzy-char-jin.svg'
import charRi    from './assets/frenzy-char-ri.svg'
import charFeng  from './assets/frenzy-char-feng.svg'
import charQiang from './assets/frenzy-char-qiang.svg'
import flame     from './assets/frenzy-flame.svg'

// ── 今日疯抢 ────────────────────────────────────────────────────
// 容器 60×22px；字形绝对定位，坐标 1:1 对应 Figma 量值。

function 今日疯抢标题() {
  return (
    <div style={{ position: 'relative', width: 60, height: 22, flexShrink: 0 }}>
      {/* 今 */}
      <img
        src={charJin}
        alt=""
        style={{
          position: 'absolute',
          left: 0,
          top: 4,
          width: 13.885,
          height: 13.931,
        }}
      />
      {/* 日 */}
      <img
        src={charRi}
        alt=""
        style={{
          position: 'absolute',
          left: 16.55,
          top: 4.31,
          width: 11.344,
          height: 13.625,
        }}
      />
      {/* 疯 */}
      <img
        src={charFeng}
        alt=""
        style={{
          position: 'absolute',
          left: 30.56,
          top: 4,
          width: 13.901,
          height: 13.931,
        }}
      />
      {/* 抢 */}
      <img
        src={charQiang}
        alt=""
        style={{
          position: 'absolute',
          left: 45.87,
          top: 4,
          width: 13.962,
          height: 13.931,
        }}
      />
      {/* 火焰装饰（疯抢之间的小闪电/火焰） */}
      <img
        src={flame}
        alt=""
        style={{
          position: 'absolute',
          left: 35.93,
          top: 8.53,
          width: 6.787,
          height: 9.032,
          transform: 'rotate(-11.31deg)',
          transformOrigin: 'center',
        }}
      />
    </div>
  )
}

// ── 主组件 ────────────────────────────────────────────────────────

export function 模块标题({ 变体, className, style }: 模块标题Props) {
  return (
    <div className={className} style={style}>
      {变体 === '今日疯抢' && <今日疯抢标题 />}
    </div>
  )
}
