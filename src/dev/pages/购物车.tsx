/**
 * 购物车页 UI Kit 预览
 * Figma: 21895-86322（初始） / 21895-88010（上滑后）
 */
import React, { useState } from 'react'
import { 底部导航 } from '../../components/底部导航'
import type { TabBarTab } from '../../components/底部导航'
import { 加减号 } from '../../components/加减号'
import { 购物车按钮 } from '../../components/购物车按钮'

import imgYuanqi      from './购物车/assets/product-yuanqi.png'
import imgHaoxian     from './购物车/assets/product-haoxian.png'
import imgXiaocong    from './购物车/assets/product-xiaocong.png'
import imgExpired     from './购物车/assets/product-expired.png'
import imgVip         from './购物车/assets/vip-badge.svg'
import imgGcTag       from './购物车/assets/greencard-tag.svg'
import imgCoudanTitle from './购物车/assets/凑单助手-text.png'

const F    = 'PingFang SC, sans-serif'
const RED  = '#FF3133'
const GREEN = '#00B740'
const DARK  = '#1A1A1A'
const GRAY  = '#808080'
const DARK2 = '#4D4D4D'

// ── 选择圆 ────────────────────────────────────────────────────
function RadioCircle({ selected, size = 20 }: { selected: boolean; size?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      background: selected ? GREEN : '#fff',
      border: `1.5px solid ${selected ? GREEN : '#CCCCCC'}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {selected && (
        <svg width={size * 0.55} height={size * 0.4} viewBox="0 0 11 8" fill="none">
          <path d="M1.5 4L4 6.5L9.5 1.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  )
}

// ── 状态栏 ────────────────────────────────────────────────────
function StatusBar() {
  return (
    <div style={{ height: 59, display: 'flex', alignItems: 'stretch' }}>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif', fontSize: 17, fontWeight: 600, color: DARK, letterSpacing: -0.41 }}>9:41</span>
      </div>
      <div style={{ flexShrink: 0, paddingTop: 10, display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ width: 125, height: 37, background: '#000', borderRadius: 100 }} />
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none"><rect x="0" y="9" width="3" height="3" rx="1" fill={DARK}/><rect x="4.5" y="6" width="3" height="6" rx="1" fill={DARK}/><rect x="9" y="3" width="3" height="9" rx="1" fill={DARK}/><rect x="13.5" y="0" width="3" height="12" rx="1" fill={DARK}/></svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><circle cx="8" cy="10.5" r="1.5" fill={DARK}/><path d="M4.636 7.136a4.95 4.95 0 0 1 6.728 0" stroke={DARK} strokeWidth="1.5" strokeLinecap="round"/><path d="M1.757 4.257a8.485 8.485 0 0 1 12.486 0" stroke={DARK} strokeWidth="1.5" strokeLinecap="round"/></svg>
        <svg width="28" height="13" viewBox="0 0 28 13" fill="none"><rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={DARK} strokeOpacity="0.35"/><rect x="2" y="2" width="20" height="9" rx="2" fill={DARK}/><path d="M25 4.5L25 8.5" stroke={DARK} strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round"/></svg>
      </div>
    </div>
  )
}

// ── 导航行 ────────────────────────────────────────────────────
function NavRow() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '0 9px' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 18 }}>
        <span style={{ fontSize: 18, fontWeight: 600, color: DARK, fontFamily: F, lineHeight: '22px' }}>购物车</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <span style={{ fontSize: 14, color: DARK2, fontFamily: F, lineHeight: '16px' }}>我常买</span>
          <div style={{
            background: RED, border: '0.5px solid rgba(255,255,255,0.93)',
            borderRadius: '7px 12px 12px 0',
            height: 14, display: 'flex', alignItems: 'center', padding: '0 3px',
          }}>
            <span style={{ fontSize: 10, fontWeight: 500, color: '#fff', fontFamily: F, lineHeight: '12px' }}>2件8折</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
        <span style={{ fontSize: 14, color: DARK2, fontFamily: F, lineHeight: '16px' }}>优惠券(3)</span>
        <span style={{ fontSize: 14, color: DARK2, fontFamily: F, lineHeight: '16px' }}>管理</span>
      </div>
    </div>
  )
}

// ── 绿卡横幅 ──────────────────────────────────────────────────
function GreenCardBanner() {
  return (
    <div style={{
      background: 'linear-gradient(96.5deg, #D9F6E7 0%, #C7F8DB 100%)',
      borderRadius: 12, padding: 9,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 3, left: 281, width: 51, height: 30, overflow: 'hidden' }}>
        <img src={imgVip} alt="" style={{ width: '100%', height: '100%' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 3L9 9M9 3L3 9" stroke="#218F47" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <img src={imgGcTag} alt="" style={{ width: 20, height: 15 }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <span style={{ fontSize: 12, color: DARK, fontFamily: F, lineHeight: '14px' }}>开通绿卡会员，本单预计多省</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: RED, fontFamily: 'DdmcSans, PingFang SC, sans-serif', lineHeight: '16px' }}>10.26</span>
          <span style={{ fontSize: 12, color: DARK, fontFamily: F, lineHeight: '14px' }}>元</span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0, position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 12, color: '#218F47', fontFamily: F, lineHeight: '14px' }}>去看看</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M4.5 3L7.5 6L4.5 9" stroke="#218F47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}

// ── 换购商品小卡 ──────────────────────────────────────────────
function 换购卡() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', borderRadius: 9, flexShrink: 0 }}>
      <div style={{ position: 'relative', width: 85, height: 85 }}>
        <div style={{ position: 'absolute', inset: 0, background: '#fff', borderRadius: 9 }} />
        <img src={imgHaoxian} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 9 }} />
        <div style={{ position: 'absolute', inset: 0, background: '#f8f8f8', mixBlendMode: 'multiply', borderRadius: 9 }} />
        <div style={{
          position: 'absolute', top: 0, right: 0,
          background: '#fff6f6', border: '0.5px solid #f9c4c5', borderRadius: 3,
          height: 14, display: 'flex', alignItems: 'center', padding: '0 3px',
        }}>
          <span style={{ fontSize: 10, color: RED, fontFamily: F, lineHeight: '12px' }}>7折</span>
        </div>
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 20,
          background: 'linear-gradient(to bottom, rgba(248,248,248,0.45), #fff)',
          borderRadius: '0 0 9px 9px',
        }} />
        <span style={{
          position: 'absolute', bottom: 2, left: 2, right: 2,
          fontSize: 10, color: DARK, fontFamily: F, lineHeight: '12px',
        }}>海鲜捞汁（升级版本）500ml</span>
      </div>
      <div style={{ width: 85, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: RED, fontFamily: 'DdmcSans, PingFang SC, sans-serif', lineHeight: '16px' }}>¥19.9</div>
          <div style={{ fontSize: 11, color: GRAY, fontFamily: F, lineHeight: '14px', textDecoration: 'line-through' }}>￥20.89</div>
        </div>
        <购物车按钮 尺寸="22px" 按钮状态="默认" />
      </div>
    </div>
  )
}

// ── 购物车商品行 ──────────────────────────────────────────────
interface CartItemProps {
  selected: boolean
  showDelivery?: boolean
  qty: number
  onToggle: () => void
  onDecrement: () => void
  onIncrement: () => void
}
function CartItem({ selected, showDelivery, qty, onToggle, onDecrement, onIncrement }: CartItemProps) {
  return (
    <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start', padding: 9 }}>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexShrink: 0 }}>
        <div onClick={onToggle} style={{ cursor: 'pointer' }}>
          <RadioCircle selected={selected} />
        </div>
        <div style={{ position: 'relative', width: 75, height: 75, flexShrink: 0 }}>
          <div style={{ position: 'absolute', inset: 0, background: '#fff', borderRadius: 9 }} />
          <img src={imgYuanqi} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', borderRadius: 9 }} />
          <div style={{ position: 'absolute', inset: 0, background: '#f8f8f8', mixBlendMode: 'multiply', borderRadius: 9 }} />
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 0, height: 75, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontSize: 14, color: DARK, fontFamily: F, lineHeight: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            元气森林气泡水乳酸菌味 1瓶
          </span>
          {showDelivery && (
            <span style={{ fontSize: 11, color: GREEN, fontFamily: F, lineHeight: '14px' }}>明日送达</span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: RED, fontFamily: 'DdmcSans, PingFang SC, sans-serif', lineHeight: '18px' }}>¥8.9</span>
            <span style={{ fontSize: 11, color: GRAY, fontFamily: F, lineHeight: '14px', paddingTop: 1 }}>/份</span>
            <span style={{ fontSize: 12, color: GRAY, fontFamily: F, lineHeight: '14px', textDecoration: 'line-through', paddingTop: 1 }}>￥12.8</span>
          </div>
          <加减号 count={qty} onDecrement={onDecrement} onIncrement={onIncrement} 加号可点击 />
        </div>
      </div>
    </div>
  )
}

// ── 赠品行 ────────────────────────────────────────────────────
function GiftRow({ selected, highlight }: { selected: boolean; highlight?: boolean }) {
  return (
    <div style={{
      display: 'flex', gap: 9, alignItems: 'center', padding: 9, overflow: 'hidden',
      background: highlight ? '#FEF8E4' : '#fff',
      borderRadius: highlight ? '0 0 12px 12px' : undefined,
    }}>
      {/* 选择器 */}
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexShrink: 0 }}>
        <RadioCircle selected={selected} size={24} />
        {/* 小图 40×40 */}
        <div style={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
          <div style={{ position: 'absolute', inset: 0, background: '#fff', borderRadius: 9 }} />
          <img src={imgXiaocong} alt="" style={{ position: 'absolute', inset: '1.67%', width: 'calc(100% - 3.34%)', height: 'calc(100% - 3.34%)', objectFit: 'cover', borderRadius: 6 }} />
          <div style={{ position: 'absolute', inset: 0, background: '#f8f8f8', mixBlendMode: 'multiply', borderRadius: 9 }} />
        </div>
      </div>
      {/* 标签 + 名称 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 3, flex: 1, minWidth: 0, paddingRight: 10 }}>
        <div style={{
          background: '#FFF4CB', border: '0.5px solid #FFE796', borderRadius: 3,
          height: 16, display: 'flex', alignItems: 'center', padding: '0 3px', flexShrink: 0,
        }}>
          <span style={{ fontSize: 10, color: '#955931', fontFamily: F, lineHeight: '12px' }}>限量赠品</span>
        </div>
        <span style={{ fontSize: 14, color: DARK, fontFamily: F, lineHeight: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          小葱20g(送葱规则请查看详情)
        </span>
      </div>
    </div>
  )
}

// ── 失效商品行（带相似推荐卡）────────────────────────────────
function ExpiredItemWithSimilar() {
  return (
    <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start', paddingLeft: 39, paddingRight: 0, paddingTop: 9, paddingBottom: 9 }}>
      {/* 失效商品图 */}
      <div style={{ position: 'relative', width: 75, height: 75, flexShrink: 0 }}>
        <div style={{ position: 'absolute', inset: 0, background: '#fff', borderRadius: 9 }} />
        <img src={imgExpired} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 9 }} />
        <div style={{ position: 'absolute', inset: 0, background: '#f8f8f8', mixBlendMode: 'multiply', borderRadius: 9 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.75)', borderRadius: 9 }} />
        {/* 补货中 badge */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0,0,0,0.5)', borderRadius: 12,
          padding: '3px 6px',
        }}>
          <span style={{ fontSize: 12, color: '#fff', fontFamily: F, lineHeight: '14px', whiteSpace: 'nowrap' }}>补货中</span>
        </div>
      </div>
      {/* 相似推荐卡 */}
      <div style={{ flex: 1, minWidth: 0, background: '#f8f8f8', borderRadius: 12, display: 'flex', alignItems: 'flex-start', height: 75 }}>
        {/* X 按钮 */}
        <div style={{ padding: '6px 3px 3px 6px', flexShrink: 0 }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 3L9 9M9 3L3 9" stroke={GRAY} strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
        {/* 3个相似商品 */}
        <div style={{ flex: 1, minWidth: 0, display: 'flex', gap: 9, alignItems: 'flex-start', padding: '6px 0 3px 0' }}>
          {[88, 8.9, 8.99].map((price, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, flexShrink: 0 }}>
              <div style={{ position: 'relative', width: 50, height: 50 }}>
                <div style={{ position: 'absolute', inset: 0, background: '#fff', borderRadius: 9 }} />
                <img src={imgYuanqi} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', borderRadius: 9 }} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: RED, fontFamily: 'DdmcSans, PingFang SC, sans-serif', lineHeight: '14px' }}>¥{price}</span>
            </div>
          ))}
        </div>
        {/* 更多相似 */}
        <div style={{ width: 24, height: 75, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, flexShrink: 0, paddingRight: 6 }}>
          <span style={{ fontSize: 11, color: GRAY, fontFamily: F, lineHeight: '14px', writingMode: 'vertical-rl', letterSpacing: 1 }}>更多相似</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5.5" stroke={GRAY} strokeWidth="0.8"/>
            <path d="M4.5 3L7.5 6L4.5 9" stroke={GRAY} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

// ── 失效商品行（带找相似按钮）────────────────────────────────
function ExpiredItemWithButton() {
  return (
    <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start', paddingLeft: 39, paddingRight: 9, paddingTop: 9, paddingBottom: 9 }}>
      {/* 失效商品图 */}
      <div style={{ position: 'relative', width: 75, height: 75, flexShrink: 0 }}>
        <div style={{ position: 'absolute', inset: 0, background: '#fff', borderRadius: 9 }} />
        <img src={imgExpired} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 9 }} />
        <div style={{ position: 'absolute', inset: 0, background: '#f8f8f8', mixBlendMode: 'multiply', borderRadius: 9 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.75)', borderRadius: 9 }} />
        {/* 冰鲜温层标签 */}
        <div style={{
          position: 'absolute', top: 2, left: 2,
          background: '#4DA8D8', borderRadius: '0 3px 3px 0',
          padding: '1px 4px',
        }}>
          <span style={{ fontSize: 9, color: '#fff', fontFamily: F, lineHeight: '12px' }}>冰鲜</span>
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0,0,0,0.5)', borderRadius: 12, padding: '3px 6px' }}>
          <span style={{ fontSize: 12, color: '#fff', fontFamily: F, lineHeight: '14px', whiteSpace: 'nowrap' }}>补货中</span>
        </div>
      </div>
      {/* 商品信息 + 找相似按钮 */}
      <div style={{ flex: 1, minWidth: 0, height: 75, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 14, color: '#B3B3B3', fontFamily: F, lineHeight: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          元气森林气泡水乳酸菌味 1瓶
        </span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#FF9899', fontFamily: 'DdmcSans, PingFang SC, sans-serif', lineHeight: '18px' }}>¥8.9</span>
            <span style={{ fontSize: 11, color: '#B3B3B3', fontFamily: F, lineHeight: '14px' }}>/份</span>
            <span style={{ fontSize: 12, color: '#B3B3B3', fontFamily: F, lineHeight: '14px', textDecoration: 'line-through' }}>￥12.8</span>
          </div>
          {/* 找相似按钮 */}
          <div style={{
            border: '0.5px solid #CCCCCC', borderRadius: 100,
            display: 'flex', alignItems: 'center', gap: 2,
            padding: '6px 6px 6px 9px',
          }}>
            <span style={{ fontSize: 11, color: DARK, fontFamily: F, lineHeight: '14px' }}>找相似</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.5 3L7.5 6L4.5 9" stroke={DARK} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 主组件 ────────────────────────────────────────────────────
export function 购物车({ onNavigate }: { onNavigate?: (tab: string) => void } = {}) {
  const [activeTab, setActiveTab] = useState<TabBarTab>('购物车')
  const [selected, setSelected] = useState([false, true, true, true])
  const [qtys, setQtys] = useState([1, 1, 1, 1])
  const [allSelected, setAllSelected] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleItem = (i: number) => setSelected(s => s.map((v, idx) => idx === i ? !v : v))
  const toggleAll  = () => setAllSelected(v => !v)
  const setQty = (i: number, delta: number) => setQtys(q => q.map((v, idx) => idx === i ? Math.max(1, v + delta) : v))

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrolled(e.currentTarget.scrollTop > 80)
  }

  const 底部导航Tabs = [
    { tab: '首页'   as TabBarTab },
    { tab: '分类'   as TabBarTab },
    { tab: '吃什么' as TabBarTab, displayType: '全图片' as const },
    { tab: '购物车' as TabBarTab },
    { tab: '我的'   as TabBarTab },
  ]

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#f5f5f5', overflow: 'hidden', fontFamily: F, position: 'relative' }}>

      {/* ── 顶部渐变背景 ── */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 285, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', inset: 0, background: '#f5f5f5' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 390 281' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='url(%23g1)' opacity='0.6'/><defs><radialGradient id='g1' gradientUnits='userSpaceOnUse' cx='107' cy='21' r='180'><stop stop-color='%23E1FCEC'/><stop offset='1' stop-color='%23ffffff'/></radialGradient></defs></svg>")` }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 390 281' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='url(%23g2)' opacity='0.6'/><defs><radialGradient id='g2' gradientUnits='userSpaceOnUse' cx='342' cy='10' r='160'><stop stop-color='%23FFE4E9'/><stop offset='1' stop-color='rgba(255,255,255,0)'/></radialGradient></defs></svg>")` }} />
        <div style={{ position: 'absolute', top: '51.5%', left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(245,245,245,0), #f5f5f5 15%)' }} />
      </div>

      {/* ── 滚动内容 ── */}
      <div
        style={{ flex: 1, overflowY: 'auto', position: 'relative', zIndex: 1 }}
        className="scrollbar-none"
        onScroll={handleScroll}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, padding: '0 9px', paddingBottom: 9 }}>

          {/* 状态栏 */}
          <StatusBar />

          {/* 配送地址 + 导航行 + 绿卡横幅 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <span style={{ fontSize: 12, color: DARK2, fontFamily: F, lineHeight: '14px' }}>配送至：鑫智汇科技产业园2号楼6楼</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                <path d="M4.5 3L7.5 6L4.5 9" stroke={DARK2} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <NavRow />
          </div>
          <GreenCardBanner />

          {/* 换购卡片 */}
          <div style={{ background: '#fff', borderRadius: 12, display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '0 0 0 9px', display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1, borderBottom: '0.5px solid #ebebeb', padding: '9px 9px 9px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, flex: 1, minWidth: 0 }}>
                  <div style={{ background: RED, borderRadius: 3, height: 16, display: 'flex', alignItems: 'center', padding: '0 3px', flexShrink: 0 }}>
                    <span style={{ fontSize: 10, fontWeight: 500, color: '#fff', fontFamily: F, lineHeight: '12px' }}>全场换购</span>
                  </div>
                  <span style={{ fontSize: 12, color: DARK, fontFamily: F, lineHeight: '14px', flex: 1, minWidth: 0 }}>满49元享最低7.5折换购，还差49元</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>
                  <span style={{ fontSize: 12, color: GREEN, fontFamily: F, lineHeight: '14px' }}>去凑单</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4.5 3L7.5 6L4.5 9" stroke={GREEN} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 9, padding: 9, overflowX: 'auto', borderRadius: '0 0 12px 12px' }} className="scrollbar-none">
              <换购卡 /><换购卡 /><换购卡 /><换购卡 />
            </div>
          </div>

          {/* 购物车商品列表 */}
          <div style={{ background: '#fff', borderRadius: 12 }}>
            {[
              { showDelivery: true,  selected: selected[0], qty: qtys[0] },
              { showDelivery: false, selected: selected[1], qty: qtys[1] },
              { showDelivery: false, selected: selected[2], qty: qtys[2] },
              { showDelivery: true,  selected: selected[3], qty: qtys[3] },
            ].map((item, i) => (
              <CartItem
                key={i}
                selected={item.selected}
                showDelivery={item.showDelivery}
                qty={item.qty}
                onToggle={() => toggleItem(i)}
                onDecrement={() => setQty(i, -1)}
                onIncrement={() => setQty(i, 1)}
              />
            ))}
          </div>

          {/* 赠品葱 */}
          <div style={{ background: '#fff', borderRadius: 12, overflow: 'hidden' }}>
            <GiftRow selected={false} />
            <GiftRow selected={true} highlight />
          </div>

          {/* 失效商品 */}
          <div style={{ background: '#fff', borderRadius: 12, paddingTop: 9 }}>
            {/* 标题行 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 9px 9px' }}>
              <span style={{ fontSize: 14, color: DARK, fontFamily: F, lineHeight: '16px' }}>失效商品6件</span>
              <span style={{ fontSize: 14, color: RED, fontFamily: F, lineHeight: '16px' }}>清空失效商品</span>
            </div>
            {/* 带相似推荐的失效行 × 2 */}
            <ExpiredItemWithSimilar />
            <ExpiredItemWithSimilar />
            {/* 带找相似按钮的失效行 */}
            <ExpiredItemWithButton />
            {/* 查看全部 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '9px 9px 9px 39px' }}>
              <span style={{ fontSize: 12, color: DARK2, fontFamily: F, lineHeight: '14px' }}>查看全部</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke={DARK2} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* ── 上滑固定头部 ── */}
      {scrolled && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
          background: '#fff',
          boxShadow: '0 1px 0 rgba(0,0,0,0.06)',
          display: 'flex', flexDirection: 'column', gap: 9, paddingBottom: 9,
        }}>
          <StatusBar />
          <NavRow />
          <div style={{ padding: '0 9px' }}>
            <GreenCardBanner />
          </div>
        </div>
      )}

      {/* ── 底部固定区 ── */}
      <div style={{ flexShrink: 0, zIndex: 2 }}>
        {/* 凑单助手 */}
        <div style={{
          background: 'rgba(255,243,243,0.96)', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '6px 9px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={imgCoudanTitle} alt="凑单助手" style={{ width: 48, height: 12, flexShrink: 0 }} />
            <span style={{ fontSize: 10, color: '#ffc1c2', fontFamily: F, margin: '0 4px' }}>｜</span>
            <span style={{ fontSize: 12, color: DARK, fontFamily: F, lineHeight: '14px' }}>已减5元，再买</span>
            <span style={{ fontSize: 12, color: RED, fontFamily: F, lineHeight: '14px' }}>2</span>
            <span style={{ fontSize: 12, color: DARK, fontFamily: F, lineHeight: '14px' }}>件指定商品立享</span>
            <span style={{ fontSize: 12, color: RED, fontFamily: F, lineHeight: '14px' }}>8.5折</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>
            <span style={{ fontSize: 12, color: RED, fontFamily: F, lineHeight: '14px' }}>去凑单</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.5 3L7.5 6L4.5 9" stroke={RED} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* 结算栏 */}
        <div style={{ background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 9px 6px 18px' }}>
          <div onClick={toggleAll} style={{ display: 'flex', alignItems: 'center', gap: 3, cursor: 'pointer' }}>
            <RadioCircle selected={allSelected} />
            <span style={{ fontSize: 12, color: DARK, fontFamily: F, lineHeight: '14px' }}>全选</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <span style={{ fontSize: 12, color: DARK, fontFamily: F, lineHeight: '14px' }}>合计:</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: RED, fontFamily: 'DdmcSans, PingFang SC, sans-serif', lineHeight: '14px' }}>¥</span>
                <span style={{ fontSize: 18, fontWeight: 700, color: RED, fontFamily: 'DdmcSans, PingFang SC, sans-serif', lineHeight: '20px' }}>39</span>
                <span style={{ fontSize: 12, color: RED, fontFamily: F, lineHeight: '14px' }}>已减¥3</span>
                <div style={{ background: '#fff5f5', borderRadius: 30, width: 18, height: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="7" height="4" viewBox="0 0 7 4" fill="none">
                    <path d="M1 1L3.5 3.5L6 1" stroke={RED} strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: DARK, fontFamily: F, lineHeight: '14px' }}>配送费¥0</span>
                <span style={{ fontSize: 12, color: GRAY, fontFamily: F, lineHeight: '14px', textDecoration: 'line-through' }}>￥5</span>
              </div>
            </div>
            <div style={{
              width: 105, background: 'linear-gradient(to right, #ff5758, #ef3d3e)',
              borderRadius: 100, display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '12px 14px',
            }}>
              <span style={{ fontSize: 16, color: '#fff', fontFamily: F, lineHeight: '18px', whiteSpace: 'nowrap' }}>去结算(10)</span>
            </div>
          </div>
        </div>

        <底部导航
          tabs={底部导航Tabs}
          activeTab={activeTab}
          onTabChange={(tab) => { setActiveTab(tab); onNavigate?.(tab) }}
        />
      </div>

    </div>
  )
}
