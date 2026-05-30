// 今日疯抢 特色专区
// 结构：背景渐变 → 标题行（标题 + 场次 + 倒计时 | 副标题 + 箭头）→ 横向滚动商品列表

import React from 'react'
import type { 今日疯抢Props, 疯抢商品 } from './types'
import { 疯抢价标签 } from '../疯抢价标签'
import { 价格文字标签 } from '../价格文字标签'
import { 模块标题 } from '../模块标题'
import flipCardImg from './assets/image 118.svg'
import btnFlipImg  from './assets/btn-flip.png'

const FONT = 'PingFang SC, sans-serif'

// ── 倒计时数字框 ────────────────────────────────────────────

function CountDigit({ value }: { value: string }) {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #FF7A7A 6%, #FF3133 100%)',
      borderRadius: 3,
      width: 17,
      height: 15,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      <span style={{
        fontSize: 11,
        fontWeight: 500,
        color: '#fff',
        fontFamily: 'DdmcSans, sans-serif',
        lineHeight: '12px',
        letterSpacing: 0,
      }}>
        {value}
      </span>
    </div>
  )
}

// ── 翻牌卡（第一项）──────────────────────────────────────────

function FlipCard({
  翻牌次数 = 3,
  onFlipClick,
}: {
  余额?: string
  翻牌次数?: number
  onFlipClick?: () => void
}) {
  return (
    <div style={{ flexShrink: 0, width: 80, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* 卡片切图：固定 64px 高，与右侧商品图对齐 */}
      <div style={{ width: 68, height: 64, borderRadius: 8, overflow: 'hidden', flexShrink: 0 }}>
        <img src={flipCardImg} alt="翻牌卡" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      {/* 去翻牌按钮：marginTop:5 与右侧价格标签对齐 */}
      <button
        onClick={onFlipClick}
        style={{
          marginTop: 5,
          position: 'relative',
          width: 51,
          height: 16,
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          background: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={btnFlipImg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: 8 }} />
        <span style={{ position: 'relative', fontSize: 11, color: '#fff', fontFamily: 'PingFang SC, sans-serif', lineHeight: '14px', whiteSpace: 'nowrap' }}>
          去翻牌
        </span>
      </button>

      {/* 今日N次翻牌：marginTop:3 与右侧划线原价对齐 */}
      <span style={{ fontSize: 11, color: '#FF3133', fontFamily: FONT, marginTop: 3, lineHeight: '14px', whiteSpace: 'nowrap' }}>
        今日{翻牌次数}次翻牌
      </span>
    </div>
  )
}

// ── 单个商品项 ───────────────────────────────────────────────

function 商品Item({ item }: { item: 疯抢商品 }) {
  const hasBrand = !!(item.brand || item.brandImg)
  const imgSize = hasBrand ? 52 : 64

  const 类型 = item.价格标签类型 ?? '疯抢'

  return (
    <div
      onClick={item.onClick}
      style={{
        flexShrink: 0,
        width: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: item.onClick ? 'pointer' : undefined,
      }}
    >
      {/* 品牌 */}
      {hasBrand && (
        <div style={{ height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}>
          {item.brandImg ? (
            <img
              src={item.brandImg}
              alt={item.brand}
              style={{ height: 16, maxWidth: 68, objectFit: 'contain' }}
            />
          ) : (
            <span style={{
              fontSize: 9,
              color: '#808080',
              fontFamily: FONT,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: 68,
              textAlign: 'center',
            }}>
              {item.brand}
            </span>
          )}
        </div>
      )}

      {/* 商品图 */}
      <div style={{ width: imgSize, height: imgSize, borderRadius: 8, overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={item.img}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* 价格标签：display:flex 消除 inline-flex 的基线留白，保证与 FlipCard 按钮垂直对齐 */}
      <div style={{ marginTop: 5, display: 'flex' }}>
        {类型 === '疯抢' && (
          <疯抢价标签 价格={item.price} />
        )}
        {类型 === '促销文字' && (
          <价格文字标签 风格="粉底文字" 文字={item.价格文字 ?? `¥${item.price}`} />
        )}
        {类型 === '补贴文字' && (
          <价格文字标签 风格="红底文字" 文字={item.价格文字 ?? `¥${item.price}`} />
        )}
      </div>

      {/* 划线原价 */}
      {item.originalPrice && (
        <span style={{ fontSize: 10, color: '#C0C0C0', fontFamily: FONT, textDecoration: 'line-through', lineHeight: 1, marginTop: 3 }}>
          ¥{item.originalPrice}
        </span>
      )}
    </div>
  )
}

// ── 主组件 ────────────────────────────────────────────────────

export function 今日疯抢({
  场次 = '14点场',
  倒计时小时 = 4,
  倒计时分钟 = 45,
  倒计时秒 = 26,
  副标题 = '金秋甜柚 低至¥2.8/个',
  翻牌余额 = '0.2',
  今日翻牌次数 = 3,
  商品列表 = [],
  onMoreClick,
  onFlipClick,
  className,
  style,
}: 今日疯抢Props) {
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div
      className={className}
      style={{
        margin: '0 9px',
        borderRadius: 9,
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #FFD8D8 6%, rgba(255,255,255,0) 27%),linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)',
        ...style,
      }}
    >
      {/* ── 标题行 ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '6px 9px 8px',
      }}>
        {/* 左侧：标题 + 场次 + 倒计时 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <模块标题 变体="今日疯抢" />
          <span style={{ fontSize: 12, fontWeight: 500, color: '#FF3133', fontFamily: FONT, lineHeight: 1 }}>
            {场次}
          </span>
          {/* 倒计时 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CountDigit value={pad(倒计时小时)} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#1A1A1A', lineHeight: 1 }}>:</span>
            <CountDigit value={pad(倒计时分钟)} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#1A1A1A', lineHeight: 1 }}>:</span>
            <CountDigit value={pad(倒计时秒)} />
          </div>
        </div>

        {/* 右侧：副标题 + 箭头 */}
        <button
          onClick={onMoreClick}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 12, color: '#808080', fontFamily: FONT, lineHeight: 1 }}>
            {副标题}
          </span>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path d="M1 1L5 5L1 9" stroke="#999" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* ── 横向滚动商品列 ── */}
      <div style={{
        display: 'flex',
        gap: 8,
        overflowX: 'auto',
        padding: '0 9px 12px',
        scrollbarWidth: 'none',
        alignItems: 'flex-start',
      }}>
        {/* 翻牌卡 */}
        <FlipCard 余额={翻牌余额} 翻牌次数={今日翻牌次数} onFlipClick={onFlipClick} />

        {/* 商品列表 */}
        {商品列表.map((item, i) => (
          <商品Item key={item.img ?? i} item={item} />
        ))}
      </div>
    </div>
  )
}
