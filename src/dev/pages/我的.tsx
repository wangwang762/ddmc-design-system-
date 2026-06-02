/**
 * 「我的」页面 — 过期会员态
 * Figma: AJikPirZmrpaP59L6Gqhnn, node 12321:43156
 */
import React, { useState } from 'react'
import { 底部导航 } from '../../components/底部导航'
import { 徽标 } from '../../components/徽标'
import type { TabBarTab } from '../../components/底部导航'

// ── Assets ───────────────────────────────────────────────
// ── profile/
import avatarImg         from './我的/assets/profile/avatar.png'
import iconGender        from './我的/assets/profile/icon-gender.svg'
import iconGreencard     from './我的/assets/profile/icon-greencard.svg'
import iconSettings      from './我的/assets/profile/icon-settings.svg'
import iconBell          from './我的/assets/profile/icon-bell.svg'
import iconAccount       from './我的/assets/profile/icon-account.svg'
// ── member-card/
import memberCardBgNew   from './我的/assets/member-card/bg.png'
import speechBubble      from './我的/assets/member-card/speech-bubble.svg'
import greenCardLogo     from './我的/assets/member-card/绿卡会员logo.svg'
import subcardFreeDelivery from './我的/assets/member-card/subcard-free-delivery.png'
import subcardDeliveryImg  from './我的/assets/member-card/subcard-delivery.png'
import productLettuce    from './我的/assets/member-card/product-lettuce.png'
import productEggs       from './我的/assets/member-card/product-eggs.png'
import productFreeVeg    from './我的/assets/member-card/product-free-veg.png'
// ── order/
import iconOrderWallet   from './我的/assets/order/待支付.svg'
import iconOrderDelivery from './我的/assets/order/待发货.svg'
import iconOrderComment  from './我的/assets/order/待评价.svg'
import iconOrderRefund   from './我的/assets/order/售后退款.svg'
import iconOrderList     from './我的/assets/order/我的订单.svg'
import iconOrderThumb    from './我的/assets/order/product-thumb.png'
// ── ad/
import iconFish          from './我的/assets/ad/叮咚鱼塘.svg'
import iconAdWelfare     from './我的/assets/ad/福利中心.png'
import iconAdGreencard   from './我的/assets/ad/免费领绿卡.svg'
import iconAdInvite      from './我的/assets/ad/邀友领好礼.png'
import iconGarden        from './我的/assets/ad/叮咚果园.svg'
// ── service/
import iconSvcStar       from './我的/assets/service/商品收藏.svg'
import iconSvcRecipe     from './我的/assets/service/菜谱.svg'
import iconSvcLocation   from './我的/assets/service/收货地址.svg'
import iconSvcHeadphones from './我的/assets/service/客服与帮助.svg'
import iconSvcReceipt    from './我的/assets/service/开具发票.svg'
import iconSvcFeedback   from './我的/assets/service/意见反馈.svg'
import iconSvcBuilding   from './我的/assets/service/企业采购.svg'
import iconSvcWechat     from './我的/assets/service/微信公众号.svg'
import iconSvcRider      from './我的/assets/service/人才招募.svg'
import iconSvcScanner    from './我的/assets/service/扫一扫.svg'

// ── Design tokens ────────────────────────────────────────
const F     = 'PingFang SC, sans-serif'
const F_NUM = 'DdmcSans, PingFang SC, sans-serif'
const GREEN = '#00B740'
const RED   = '#FF3133'
const DARK  = '#1A1A1A'
const DARK2 = '#4D4D4D'
const GRAY  = '#808080'
const BG    = '#f5f6fa'

// ── Bottom nav ───────────────────────────────────────────
const tabs = [
  { tab: '首页'   as TabBarTab },
  { tab: '分类'   as TabBarTab },
  { tab: '吃什么' as TabBarTab, displayType: '全图片' as const },
  { tab: '购物车' as TabBarTab },
  { tab: '我的'   as TabBarTab },
]

// ── StatusBar (59px, dynamic island — 同购物车) ──────────
function StatusBar() {
  return (
    <div style={{ height: 59, display: 'flex', alignItems: 'stretch', position: 'relative', zIndex: 1 }}>
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

// ── 会员时长角标（过期态 = 灰色）— 内联 SVG，Retina 清晰 ──
function MemberYearsBadge() {
  return (
    <svg width="48" height="18" viewBox="0 0 48 18" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flexShrink: 0 }}>
      <defs>
        {/* shield: translate(0, 0.5) → add 0.5 to y */}
        <linearGradient id="shieldGrad" x1="7.72" y1="1.05" x2="18.76" y2="15.95" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8E8E8"/><stop offset="1" stopColor="#C6C5C5"/>
        </linearGradient>
        {/* pill: translate(22, 3) → add 22 to x, 3 to y */}
        <linearGradient id="pillGray" x1="19.38" y1="-1.33" x2="42.39" y2="23.1" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8E8E8"/><stop offset="1" stopColor="#C6C5C5"/>
        </linearGradient>
        {/* vmark: translate(6.38, 8.22) → add 6.38 to x, 8.22 to y */}
        <linearGradient id="vmarkGrad" x1="7.17" y1="8.22" x2="10.48" y2="13.74" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A4A4A4"/><stop offset="1" stopColor="#8C8C8C"/>
        </linearGradient>
      </defs>

      {/* Shield shape: viewBox 20.9657×15.4484 → placed at (0, 0.5) */}
      <g transform="translate(0, 0.5)">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M20.8439 4.02794C20.7252 3.89008 20.3363 3.86921 20.0146 3.92613C19.0241 4.11078 17.4131 4.53762 15.53 5.53865C14.2532 3.62757 12.7758 1.85749 11.1227 0.258413C10.7691 -0.0861378 10.2041 -0.0861378 9.85054 0.258413C8.19848 1.8586 6.72096 3.62854 5.44267 5.53865C3.56201 4.53762 1.94848 4.10572 0.958658 3.92613C0.641408 3.86921 0.248018 3.89514 0.12429 4.02794C0.0164251 4.15441 -0.0305279 4.34412 0.0208666 4.84495C0.119214 5.71825 0.294336 7.11071 0.603338 8.93951C0.951678 11.0099 1.37616 13.06 1.64519 14.2912C1.79259 14.9654 2.39061 15.4467 3.08296 15.4484H17.8757C18.5691 15.4496 19.1687 14.967 19.3135 14.2912C19.5812 13.0638 20.0114 11.0137 20.3541 8.93824C20.6586 7.10439 20.8388 5.71698 20.9365 4.84369C21.0019 4.34665 20.9518 4.15188 20.8439 4.02794Z"
          fill="url(#shieldGrad)"/>
      </g>

      {/* Pill background: viewBox 25.6767×13 → placed at (22, 3) */}
      <g transform="translate(22, 3)">
        <path d="M1.47451 2.21292C1.60554 1.42674 1.67105 1.03364 1.86722 0.738653C2.04014 0.478625 2.28308 0.272816 2.568 0.145C2.89123 0 3.28974 0 4.08678 0H20.38C22.234 0 23.161 0 23.8692 0.36081C24.4921 0.678187 24.9985 1.18461 25.3159 1.8075C25.6767 2.51563 25.6767 3.44262 25.6767 5.29661V7.70339C25.6767 9.55738 25.6767 10.4844 25.3159 11.1925C24.9985 11.8154 24.4921 12.3218 23.8692 12.6392C23.161 13 22.234 13 20.3801 13H2.80288C1.72732 13 1.18954 13 0.80699 12.7806C0.471291 12.588 0.213678 12.2839 0.0789286 11.9211C-0.0746249 11.5077 0.0137857 10.9772 0.190607 9.91632L1.47451 2.21292Z"
          fill="url(#pillGray)"/>
      </g>

      {/* V-mark inside shield: viewBox 8.20789×5.49461 → placed at (6.38, 8.22) */}
      <g transform="translate(6.38, 8.22)">
        <path d="M4.03796 5.49145C5.53284 3.44196 6.71301 2.04949 8.20789 0H5.70225C4.94085 1.04783 4.17945 2.1317 3.40409 3.17953L2.538 0.00252946H0V0.634894H0.803912L2.19981 5.49461L4.03796 5.49145Z"
          fill="url(#vmarkGrad)"/>
      </g>

      {/* Text "18年" centered at (35.5, 13): DdmcSans bold 11/10px gray */}
      <text fontFamily="DdmcSans, PingFang SC, sans-serif" fontWeight="700" fill="#808080" textAnchor="middle">
        <tspan x="33.5" y="13" fontSize="11">18</tspan>
        <tspan fontSize="10">年</tspan>
      </text>
    </svg>
  )
}

// ── Main component ────────────────────────────────────────
export function 我的({ onNavigate }: { onNavigate?: (tab: string) => void } = {}) {
  const [activeTab, setActiveTab] = useState<TabBarTab>('我的')

  const 订单类型 = [
    { icon: iconOrderWallet,   w: 21.5, h: 20.75, label: '待支付'   },
    { icon: iconOrderDelivery, w: 21.5, h: 21.5,  label: '待发货',  badge: 5 },
    { icon: iconOrderComment,  w: 24,   h: 24,    label: '待评价'   },
    { icon: iconOrderRefund,   w: 24.5, h: 24,    label: '售后/退款' },
    { icon: iconOrderList,     w: 24,   h: 24,    label: '我的订单' },
  ]

  const svcRows = [
    [
      { icon: iconSvcStar,       w: 22,   h: 22,   label: '商品收藏'  },
      { icon: iconSvcRecipe,     w: 24,   h: 24,   label: '菜谱'      },
      { icon: iconSvcLocation,   w: 17.5, h: 20.5, label: '收货地址'  },
      { icon: iconSvcHeadphones, w: 19.5, h: 19.5, label: '客服与帮助' },
      { icon: iconSvcReceipt,    w: 19.5, h: 19.75,label: '开具发票'  },
    ],
    [
      { icon: iconSvcFeedback, w: 19.9, h: 20.5, label: '意见反馈'  },
      { icon: iconSvcBuilding, w: 24,   h: 24,   label: '企业采购'  },
      { icon: iconSvcWechat,   w: 20.9, h: 19.1, label: '微信公众号' },
      { icon: iconSvcRider,    w: 19.5, h: 21.5, label: '人才招募'  },
      { icon: iconSvcScanner,  w: 21.5, h: 19.5, label: '扫一扫'    },
    ],
  ]

  const adIcons = [
    { img: iconFish,        w: 40,   h: 32,   label: '叮咚鱼塘'  },
    { img: iconAdWelfare,   w: 40,   h: 40,   label: '福利中心'  },
    { img: iconAdGreencard, w: 29.8, h: 22,   label: '免费领绿卡' },
    { img: iconAdInvite,    w: 40,   h: 40,   label: '邀友领红包' },
    { img: iconGarden,      w: 36,   h: 40,   label: '叮咚果园'  },
  ]

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: BG, overflow: 'hidden' }}>
      <div className="scrollbar-none" style={{ flex: 1, overflowY: 'auto' }}>

        {/* ── 顶部通栏：状态栏 + 头像区，共享径向渐变背景 ── */}
        <div style={{ position: 'relative', background: '#fff' }}>
          {/* 渐变背景覆盖 ~290px（含后续会员卡区域） */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 290,
            pointerEvents: 'none',
            background: `
              radial-gradient(ellipse 300px 220px at 100% 0%, rgba(255,228,233,1) 0%, rgba(255,255,255,0) 60%),
              radial-gradient(ellipse 300px 220px at 0%   0%, rgba(225,252,236,1) 0%, rgba(255,255,255,1) 60%)
            `,
          }} />

          {/* 状态栏 59px */}
          <StatusBar />

          {/* 头像区域：left=15px, gap=9px */}
          <div style={{
            padding: '8px 15px 12px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            position: 'relative',
          }}>
            {/* 左：头像 + 信息 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              {/* 头像 48px + 性别角标 14px */}
              <div style={{ position: 'relative', flexShrink: 0, marginRight: 0 }}>
                <img src={avatarImg} alt="头像"
                  style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', display: 'block' }} />
                <img src={iconGender} alt=""
                  style={{ position: 'absolute', bottom: 0, right: -2, width: 14, height: 14, display: 'block' }} />
              </div>

              {/* 昵称行 + 账号行，高度撑满 48px */}
              <div style={{
                display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between', height: 48,
                paddingTop: 3, paddingBottom: 3,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontFamily: F, fontSize: 18, fontWeight: 500, color: DARK, lineHeight: '22px', whiteSpace: 'nowrap' }}>豆芽儿</span>
                  <MemberYearsBadge />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <img src={iconAccount} alt="" style={{ width: 13, height: 13, display: 'block' }} />
                  <span style={{ fontFamily: F, fontSize: 12, color: GRAY, lineHeight: '14px' }}>130****8876</span>
                </div>
              </div>
            </div>

            {/* 右：设置（22px）+ 通知（22px + badge） */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 15 }}>
              <img src={iconSettings} alt="设置"
                style={{ width: 22, height: 22, display: 'block', opacity: 0.9, cursor: 'pointer' }} />
              <div style={{ position: 'relative', cursor: 'pointer', marginTop: 3 }}>
                <img src={iconBell} alt="通知"
                  style={{ width: 22, height: 22, display: 'block', opacity: 0.9 }} />
                <div style={{
                  position: 'absolute', top: 0, right: -7,
                  background: RED, borderRadius: 8,
                  minWidth: 16, height: 16,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '0 4px', border: '1px solid #fff',
                }}>
                  <span style={{ fontFamily: F, fontSize: 11, fontWeight: 500, color: '#fff', lineHeight: '14px' }}>1</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 会员栏 180px（speech bubble 上飘，用外层 wrapper 承载） ── */}
        <div style={{ margin: '9px 9px 0', position: 'relative' }}>
          {/* Speech bubble 84×19px，位于卡片右上角上方 -13px */}
          <div style={{ position: 'absolute', top: -13, right: 0, width: 84, height: 19.438, zIndex: 2, pointerEvents: 'none' }}>
            <img src={speechBubble} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
            <span style={{
              position: 'absolute', top: 2, left: 0, right: 0,
              fontFamily: F, fontSize: 10, fontWeight: 500, color: '#fff',
              lineHeight: '12px', textAlign: 'center',
            }}>送20元无门槛券</span>
          </div>

          {/* 卡片主体 180px */}
          <div style={{ height: 180, borderRadius: 12, overflow: 'hidden', position: 'relative' }}>

            {/* 背景切图（整张，拉伸填满） */}
            <img src={memberCardBgNew} alt=""
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', pointerEvents: 'none', objectFit: 'fill' }} />

            {/* VIP 顶部信息行：flex 行，垂直居中于前 49px */}
            <div style={{
              position: 'absolute', top: 5, left: 5, right: 9,
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <img src={greenCardLogo} alt="绿卡会员"
                style={{ width: 77, height: 30, display: 'block', flexShrink: 0 }} />
              <span style={{ flex: 1, fontFamily: F, fontSize: 12, fontWeight: 500, color: '#FFE3A0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                已过期3天，累计已省¥8000.09
              </span>
              <div style={{
                height: 24, borderRadius: 15, flexShrink: 0,
                background: 'linear-gradient(93deg, rgb(255,236,190) 0%, rgb(241,206,124) 100%)',
                display: 'flex', alignItems: 'center',
                paddingLeft: 9, paddingRight: 6, gap: 2,
                cursor: 'pointer',
              }}>
                <span style={{ fontFamily: F, fontSize: 12, fontWeight: 500, color: '#55331D', whiteSpace: 'nowrap' }}>立即开通</span>
                <svg width="5" height="8" viewBox="0 0 5 8" fill="none">
                  <path d="M1 1l3 3-3 3" stroke="#55331D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* 三张子卡：fill container (left=3, right=3, top=49, bottom=9) */}
            <div style={{
              position: 'absolute',
              top: 49, left: 9, right: 9, bottom: 9,
              display: 'flex', gap: 6,
            }}>
              {/* 子卡1：绿卡会员日 flex=2 */}
              <div style={{
                flex: 2, minWidth: 0, height: '100%', borderRadius: 12,
                background: 'linear-gradient(180deg, rgba(254,255,228,0) 82%, rgba(205,255,207,0.8) 100%), #fff',
                overflow: 'hidden', position: 'relative',
              }}>
                {/* 标题行：底对齐 */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, padding: '9px 3px 0 9px', flexWrap: 'nowrap' }}>
                  <span style={{ fontFamily: F, fontSize: 14, fontWeight: 600, color: DARK, whiteSpace: 'nowrap' }}>绿卡会员日</span>
                  <div style={{ background: '#FFF4CB', borderRadius: 3, height: 16, display: 'flex', alignItems: 'center', padding: '0 3px', flexShrink: 0 }}>
                    <span style={{ fontFamily: F, fontSize: 11, color: '#955931', lineHeight: '16px' }}>低价爆品</span>
                  </div>
                </div>
                {/* 两个商品 */}
                <div style={{ display: 'flex', paddingTop: 3 }}>
                  {/* 商品1 */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <div style={{ width: 60, height: 60, borderRadius: 12, overflow: 'hidden', background: '#f5f5f5' }}>
                      <img src={productLettuce} alt="" style={{ width: 60, height: 60, objectFit: 'cover', display: 'block' }} />
                    </div>
                    <div>
                      <span style={{ fontFamily: F_NUM, fontSize: 14, fontWeight: 700, color: '#218F47' }}>5</span>
                      <span style={{ fontFamily: F, fontSize: 13, color: '#218F47' }}>折</span>
                    </div>
                  </div>
                  {/* 商品2 */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <div style={{ width: 60, height: 60, borderRadius: 12, overflow: 'hidden' }}>
                      <img src={productEggs} alt="" style={{ width: 60, height: 60, objectFit: 'cover', display: 'block' }} />
                    </div>
                    <div>
                      <span style={{ fontFamily: F, fontSize: 13, color: '#218F47' }}>满</span>
                      <span style={{ fontFamily: F_NUM, fontSize: 14, fontWeight: 700, color: '#218F47' }}>69</span>
                      <span style={{ fontFamily: F, fontSize: 13, color: '#218F47' }}>减</span>
                      <span style={{ fontFamily: F_NUM, fontSize: 14, fontWeight: 700, color: '#218F47' }}>30</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 子卡2：免费领菜 flex=1 */}
              <div style={{
                flex: 1, minWidth: 0, height: '100%', borderRadius: 12,
                background: 'linear-gradient(180deg, rgba(254,255,228,0) 82%, rgba(205,255,207,0.8) 100%), #fff',
                overflow: 'hidden',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                paddingTop: 9,
              }}>
                <span style={{ fontFamily: F, fontSize: 14, fontWeight: 600, color: DARK, marginBottom: 3 }}>免费领菜</span>
                <div style={{ width: 60, height: 60, borderRadius: 12, overflow: 'hidden', marginBottom: 3 }}>
                  <img src={productFreeVeg} alt="" style={{ width: 60, height: 60, objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
                  <span style={{ fontFamily: F_NUM, fontSize: 14, fontWeight: 700, color: '#218F47' }}>¥0</span>
                  <span style={{ fontFamily: F, fontSize: 11, color: GRAY, textDecoration: 'line-through', lineHeight: '14px' }}>¥9.8</span>
                </div>
              </div>

              {/* 子卡3：免配送费 */}
              <div style={{
                flex: 1, minWidth: 0, height: '100%', borderRadius: 12,
                overflow: 'hidden', position: 'relative',
              }}>
                <img src={subcardDeliveryImg} alt=""
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'fill', display: 'block' }} />
                <span style={{
                  position: 'absolute', top: 9, left: 0, right: 0,
                  fontFamily: F, fontSize: 14, fontWeight: 600, color: DARK,
                  textAlign: 'center',
                }}>免配送费</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 权益栏 ── */}
        <div style={{ margin: '9px 9px 0', background: '#fff', borderRadius: 12 }}>
          <div style={{ display: 'flex', paddingTop: 9, paddingBottom: 15 }}>
            {/* 优惠券 */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ marginTop: 6, position: 'relative', display: 'inline-flex', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: F_NUM, fontSize: 20, fontWeight: 700, color: DARK, lineHeight: '20px' }}>0</span>
                {0 > 0 && (
                  <div style={{ position: 'absolute', top: -2, right: -8 }}><徽标 类型="红点" 尺寸="小" /></div>
                )}
              </div>
              <span style={{ fontFamily: F, fontSize: 12, color: DARK, lineHeight: '16px' }}>优惠券</span>
            </div>

            {/* 福利·积分 */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, paddingTop: 6 }}>
              <span style={{ fontFamily: F_NUM, fontSize: 20, fontWeight: 700, color: DARK, lineHeight: '20px' }}>0</span>
              <span style={{ fontFamily: F, fontSize: 12, color: DARK, lineHeight: '16px' }}>福利·积分</span>
            </div>

            {/* 余额·充值 */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6, paddingTop: 6 }}>
              <span style={{
                fontFamily: F_NUM, fontSize: 20, fontWeight: 700, color: DARK, lineHeight: '20px',
                width: '100%', textAlign: 'center',
              }}>0.00</span>
              <span style={{
                fontFamily: F, fontSize: 12, color: DARK, lineHeight: '16px',
                width: '100%', textAlign: 'center',
              }}>余额·充值(元)</span>
            </div>
          </div>
        </div>

        {/* ── 订单栏 ── */}
        <div style={{ margin: '9px 9px 0', background: '#fff', borderRadius: 12, overflow: 'hidden' }}>
          {/* 5 订单类型：24px icon 在 40px 触控区内 */}
          <div style={{ display: 'flex', paddingTop: 9, paddingBottom: 3 }}>
            {订单类型.map((item, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                {/* 40×40 touch area with badge support */}
                <div style={{ width: 40, height: 40, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={item.icon} alt={item.label}
                    style={{ width: item.w, height: item.h, objectFit: 'contain', display: 'block' }} />
                  {'badge' in item && item.badge != null && (
                    <div style={{
                      position: 'absolute', top: 2, right: 2,
                      background: RED, borderRadius: 8,
                      minWidth: 16, height: 16,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: '0 4px', border: '1px solid #fff',
                    }}>
                      <span style={{ fontFamily: F, fontSize: 11, fontWeight: 500, color: '#fff', lineHeight: '14px' }}>{item.badge}</span>
                    </div>
                  )}
                </div>
                <span style={{ fontFamily: F, fontSize: 12, color: DARK, lineHeight: '16px', textAlign: 'center' }}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* 订单跟踪卡片：bg #fafafc，p=6，gap=6，rounded-9 */}
          <div style={{ margin: '0 3px 3px', background: '#fafafc', borderRadius: 9, display: 'flex', alignItems: 'center', gap: 6, padding: 6 }}>
            <img src={iconOrderThumb} alt="商品"
              style={{ width: 44, height: 44, borderRadius: 6, objectFit: 'cover', flexShrink: 0, display: 'block' }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, width: 0 }}>
              <span style={{ fontFamily: F, fontSize: 12, fontWeight: 500, color: DARK, lineHeight: '14px' }}>分拣中</span>
              <span style={{ fontFamily: F, fontSize: 11, color: DARK2, lineHeight: '14px' }}>
                您的商品正在分拣打包，预计14:30-15:00送达
              </span>
            </div>
          </div>
        </div>

        {/* ── 广告位 ── */}
        <div style={{ margin: '9px 9px 0', background: '#fff', borderRadius: 12, paddingTop: 9 }}>
          <div style={{ display: 'flex' }}>
            {adIcons.map((item, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                {/* 40×40 icon 容器 */}
                <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={item.img} alt={item.label}
                    style={{ width: item.w, height: item.h, objectFit: 'contain', display: 'block' }} />
                </div>
                <span style={{ fontFamily: F, fontSize: 12, color: DARK, lineHeight: '16px', textAlign: 'center' }}>{item.label}</span>
              </div>
            ))}
          </div>
          {/* 导航点：18×3px，左半 GREEN，右半 #E8F9EE */}
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8, paddingBottom: 8 }}>
            <div style={{ width: 18, height: 3, borderRadius: 1.5, overflow: 'hidden', display: 'flex' }}>
              <div style={{ width: 9, background: GREEN }} />
              <div style={{ width: 9, background: '#E8F9EE' }} />
            </div>
          </div>
        </div>


        {/* ── 服务栏 ── */}
        <div style={{ margin: '9px 9px 0', background: '#fff', borderRadius: 12, padding: '9px 1px 15px' }}>
          {svcRows.map((row, ri) => (
            <div key={ri} style={{ display: 'flex', marginBottom: ri < svcRows.length - 1 ? 12 : 0 }}>
              {row.map((item, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                  <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={item.icon} alt={item.label}
                      style={{ width: item.w, height: item.h, objectFit: 'contain', display: 'block' }} />
                  </div>
                  <span style={{
                    fontFamily: F, fontSize: 12, color: DARK,
                    lineHeight: '16px', textAlign: 'center', width: 71,
                  }}>{item.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ height: 20 }} />
      </div>

      <底部导航
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(tab) => { setActiveTab(tab); onNavigate?.(tab) }}
      />
    </div>
  )
}
