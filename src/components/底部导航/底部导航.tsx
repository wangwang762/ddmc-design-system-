// Figma component: Tab Bar / 底部导航
// node: 3908:19561  (Property 1=Default)
//
// Container: 82px total — 44px tab row + 38px home indicator area
// Background: #F7F7F7, border-top 0.5px dark.black10 (#E6E6E6)
// Tab item: 44px tall flex-col, icon 30×30, label 11px/14px PingFang SC
// Home indicator: 134×5px black pill, bottom 8px, centered
//
// 默认布局：5-tab，中间为 AI 广告位（displayType='全图片'）
//   ['首页', '分类', '吃什么(全图片)', '购物车', '我的']
//
// activeTab 应与路由/页面状态绑定，组件根据该值渲染各 tab 的选中/未选中图标。
//
// Architecture:
//   1. TabIcon* — individual icon components (30×30, default/selected states)
//   2. TabItem  — single tab button, uses icon + label + optional badge
//   3. 底部导航  — container, renders tab items + home indicator

import React from 'react'
import { cn } from '@/utils/cn'
import { accentGreen, accentRed, dark } from '@/tokens/colors'
import type { TabBarProps, TabBarTab, TabDisplayType } from './types'

// ── Asset imports ─────────────────────────────────────────────
import homeDefaultSrc     from './assets/home-default.svg'
import homeSelBgSrc       from './assets/home-sel-bg.svg'
import homeSelIconSrc     from './assets/home-sel-icon.svg'
import cateDefaultSrc     from './assets/cate-default.svg'
import cateSelBgSrc       from './assets/cate-sel-bg.svg'
import cateSelIconSrc     from './assets/cate-sel-icon.svg'
import eatDefaultSrc      from './assets/eat-default.svg'
import eatSel1Src         from './assets/eat-sel-1.svg'
import eatSel2Src         from './assets/eat-sel-2.svg'
import eatSelUnionSrc     from './assets/eat-sel-union.svg'
import rankDefaultSrc     from './assets/rank-default.svg'
import rankSelectedSrc    from './assets/rank-selected.svg'
import cartDefaultSrc     from './assets/cart-default.svg'
import cartSelSubSrc      from './assets/cart-sel-sub.svg'
import cartSelBodySrc     from './assets/cart-sel-body.svg'
import mineDefaultSrc     from './assets/mine-default.svg'
import mineSelInterSrc    from './assets/mine-sel-inter.svg'
import mineSelGroupSrc    from './assets/mine-sel-group.svg'
import mineSelUnionSrc    from './assets/mine-sel-union.svg'
// AI广告位 assets
import aiCircleSrc        from './assets/ai-circle.svg'
import aiTextSrc          from './assets/ai-text.svg'

// ── Internal helper ───────────────────────────────────────────
// Wrapper div handles positioning; img fills it at 100%×100%.
// inset: CSS shorthand 'top right bottom left' or 'tb lr' in %, e.g. "15% 16% 14% 16%"
const LayerImg = ({ src, inset }: { src: string; inset: string }) => (
  <div style={{ position: 'absolute', inset }}>
    <img src={src} alt="" aria-hidden style={{ display: 'block', width: '100%', height: '100%' }} />
  </div>
)

// ─────────────────────────────────────────────────────────────────
// ── 1. 图标组件 (Tab icon components, 30×30px each)
// ─────────────────────────────────────────────────────────────────

// 首页 icon
// default: house outline (inset 15.74% sides)
// selected: gradient bg shape + house outline layered on top
export const TabIcon首页: React.FC<{ selected?: boolean }> = ({ selected = false }) => (
  <div style={{ position: 'relative', width: 30, height: 30, overflow: 'hidden', flexShrink: 0 }}>
    {selected ? (
      <>
        {/* gradient bg — Figma: 矩形备份 inset[23.33%_19.17%_15.5%_28.33%] */}
        <LayerImg src={homeSelBgSrc}   inset="23.33% 19.17% 15.5% 28.33%" />
        {/* house outline — same inset as default */}
        <LayerImg src={homeSelIconSrc} inset="15.74% 15.83% 14.17% 15.83%" />
      </>
    ) : (
      <LayerImg src={homeDefaultSrc} inset="15.74% 15.83% 14.17% 15.83%" />
    )}
  </div>
)

// 分类 icon
// default: 2×2 grid + circle + magnifier
// selected: rounded-rect gradient bg + same grid icon
export const TabIcon分类: React.FC<{ selected?: boolean }> = ({ selected = false }) => (
  <div style={{ position: 'relative', width: 30, height: 30, overflow: 'hidden', flexShrink: 0 }}>
    {selected ? (
      <>
        {/* rounded-rect gradient — Figma: 矩形 inset[30%_16.67%_15%_28.33%] */}
        <LayerImg src={cateSelBgSrc}   inset="30% 16.67% 15% 28.33%" />
        {/* grid+magnifier icon on top */}
        <LayerImg src={cateSelIconSrc} inset="16.07% 13.85% 12.36% 14.47%" />
      </>
    ) : (
      <LayerImg src={cateDefaultSrc} inset="16.07% 13.85% 12.36% 14.47%" />
    )}
  </div>
)

// 吃什么 icon
// default: cooking pot Union (no overflow:hidden — slight SVG overflow by design)
// selected: 3-layer — bottom gradient + top gradient + pot outline
export const TabIcon吃什么: React.FC<{ selected?: boolean }> = ({ selected = false }) => (
  <div style={{ position: 'relative', width: 30, height: 30, flexShrink: 0 }}>
    {selected ? (
      <>
        {/* bottom gradient shape — Figma: 形状结合 inset[53.33%_13.33%_16.67%_26.67%] */}
        <LayerImg src={eatSel1Src}     inset="53.33% 13.33% 16.67% 26.67%" />
        {/* top gradient shape — Figma: 形状结合 inset[23.33%_16.67%_51.67%_33.33%] */}
        <LayerImg src={eatSel2Src}     inset="23.33% 16.67% 51.67% 33.33%" />
        {/* pot outline on top — Figma: Union inset[13.33%_10%] */}
        <LayerImg src={eatSelUnionSrc} inset="13.33% 10%" />
      </>
    ) : (
      /* Figma: inset[12.92%_9.58%] */
      <LayerImg src={eatDefaultSrc}  inset="12.92% 9.58%" />
    )}
  </div>
)

// 榜单 icon
// Figma uses absolute px positioning: top:5.09 left:2.95 w:24.1 h:21.8
// selected adds green gradient trophy-body shape on top of same outline
export const TabIcon榜单: React.FC<{ selected?: boolean }> = ({ selected = false }) => (
  <div style={{ position: 'relative', width: 30, height: 30, overflow: 'hidden', flexShrink: 0 }}>
    <img
      src={selected ? rankSelectedSrc : rankDefaultSrc}
      alt="" aria-hidden
      style={{
        position: 'absolute',
        top: 5.09, left: 2.95,
        width: 24.1, height: 21.8,
        display: 'block',
      }}
    />
  </div>
)

// 购物车 icon
// default: cart outline
// selected: green gradient cart-body (Subtract) + cart outline (body) layered
export const TabIcon购物车: React.FC<{ selected?: boolean }> = ({ selected = false }) => (
  <div style={{ position: 'relative', width: 30, height: 30, overflow: 'hidden', flexShrink: 0 }}>
    {selected ? (
      <>
        {/* gradient cart body — Figma: Subtract inset[36.67%_13.33%_26.67%_29.16%] */}
        <LayerImg src={cartSelSubSrc}  inset="36.67% 13.33% 26.67% 29.16%" />
        {/* cart outline on top — Figma: inset[16.67%_11.37%_15.33%_10%] */}
        <LayerImg src={cartSelBodySrc} inset="16.67% 11.37% 15.33% 10%" />
      </>
    ) : (
      <LayerImg src={cartDefaultSrc}  inset="16.67% 11.36% 15.33% 10%" />
    )}
  </div>
)

// 我的 icon
// default: person silhouette
// selected: 3-layer — lower-body gradient (Intersect) + head gradient (编组) + person outline
export const TabIcon我的: React.FC<{ selected?: boolean }> = ({ selected = false }) => (
  <div style={{ position: 'relative', width: 30, height: 30, overflow: 'hidden', flexShrink: 0 }}>
    {selected ? (
      <>
        {/* lower-body gradient — Figma: Intersect inset[58.53%_23.37%_16.67%_31.67%] */}
        <LayerImg src={mineSelInterSrc} inset="58.53% 23.37% 16.67% 31.67%" />
        {/* head gradient — Figma: 编组 inset[16.67%_31.12%_46.12%_31.67%] */}
        <LayerImg src={mineSelGroupSrc} inset="16.67% 31.12% 46.12% 31.67%" />
        {/* person outline on top — Figma: Union inset[15%_21.67%_15.54%_21.67%] */}
        <LayerImg src={mineSelUnionSrc} inset="15% 21.67% 15.54% 21.67%" />
      </>
    ) : (
      <LayerImg src={mineDefaultSrc}  inset="15% 21.67% 15.54% 21.67%" />
    )}
  </div>
)

// AI广告位 icon — 全图片 tab type
// Figma: 38×38 gradient circle (blue→teal→green) + white "Ai✦" text overlay
// No label below; tab is vertically centered in the 44px row.
// Layout: gradient circle (38×38) with text positioned at top:8.99 left:8.24
export const TabIconAI: React.FC = () => (
  <div style={{ position: 'relative', width: 38, height: 38, flexShrink: 0 }}>
    {/* Gradient circle background */}
    <img src={aiCircleSrc} alt="" aria-hidden style={{ display: 'block', width: '100%', height: '100%' }} />
    {/* White "Ai✦" text — Figma: ml:8.24 mt:8.99 w:20.994 h:17.012 */}
    <img
      src={aiTextSrc}
      alt=""
      aria-hidden
      style={{
        position: 'absolute',
        top: 8.99,
        left: 8.24,
        width: 20.994,
        height: 17.012,
        display: 'block',
      }}
    />
  </div>
)

// ── Icon dispatch map ─────────────────────────────────────────
const ICON_MAP: Record<TabBarTab, React.FC<{ selected?: boolean }>> = {
  '首页':  TabIcon首页,
  '分类':  TabIcon分类,
  '吃什么': TabIcon吃什么,
  '榜单':  TabIcon榜单,
  '购物车': TabIcon购物车,
  '我的':  TabIcon我的,
}

const LABELS: Record<TabBarTab, string> = {
  '首页': '首页', '分类': '分类', '吃什么': '吃什么',
  '榜单': '榜单', '购物车': '购物车', '我的': '我的',
}

// ─────────────────────────────────────────────────────────────────
// ── 2. Tab 单项组件
// ─────────────────────────────────────────────────────────────────

interface TabItemProps {
  tab: TabBarTab
  selected: boolean
  badge?: number
  displayType?: TabDisplayType
  onClick: () => void
}

const TabItem: React.FC<TabItemProps> = ({ tab, selected, badge, displayType = '标准', onClick }) => {
  // ── 全图片 type: 38×38 circle centered, no label ──────────
  if (displayType === '全图片') {
    return (
      <button
        type="button"
        onClick={onClick}
        style={{
          flex: '1 0 0',
          minWidth: 0,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
      >
        <TabIconAI />
      </button>
    )
  }

  // ── 标准 type: icon (30×30) + label (11px) ──────────────────
  const Icon = ICON_MAP[tab]
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        flex: '1 0 0',
        minWidth: 0,
        height: 44,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
    >
      {/* Icon + badge wrapper */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <Icon selected={selected} />
        {badge !== undefined && badge > 0 && (
          <span
            style={{
              position: 'absolute',
              top: -3,
              right: -3,
              minWidth: 12,
              height: 12,
              padding: '0 3px',
              background: accentRed.primary,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'PingFang SC, sans-serif',
              fontSize: 10,
              fontWeight: 500,
              lineHeight: '12px',
              color: '#FFFFFF',
              whiteSpace: 'nowrap',
            }}
          >
            {badge > 99 ? '99+' : badge}
          </span>
        )}
      </div>

      {/* Label */}
      <span
        style={{
          fontFamily: 'PingFang SC, sans-serif',
          fontSize: 11,
          fontWeight: 400,
          lineHeight: '14px',
          color: selected ? accentGreen.primary : dark.black70,
          whiteSpace: 'nowrap',
        }}
      >
        {LABELS[tab]}
      </span>
    </button>
  )
}

// ─────────────────────────────────────────────────────────────────
// ── 3. 底部导航 容器组件
// ─────────────────────────────────────────────────────────────────

export const 底部导航: React.FC<TabBarProps> = ({
  tabs,
  activeTab,
  onTabChange,
  showHomeIndicator = true,
  className,
}) => {
  return (
    <div
      className={cn(className)}
      style={{
        position: 'relative',
        width: '100%',
        height: 82,
        background: '#F7F7F7',
        borderTop: `0.5px solid ${dark.black10}`,
        flexShrink: 0,
      }}
    >
      {/* Tab row — 44px */}
      <div style={{ display: 'flex', height: 44 }}>
        {tabs.map(({ tab, badge, displayType }) => (
          <TabItem
            key={tab}
            tab={tab}
            selected={tab === activeTab}
            badge={badge}
            displayType={displayType}
            onClick={() => onTabChange(tab)}
          />
        ))}
      </div>

      {/* Home indicator — iOS style black pill */}
      {showHomeIndicator && (
        <div
          style={{
            position: 'absolute',
            bottom: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 134,
            height: 5,
            background: dark.black,
            borderRadius: 100,
          }}
        />
      )}
    </div>
  )
}
