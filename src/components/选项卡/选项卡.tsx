// Figma component: 选项卡 (Tabs)
// node: 8284:16424
//
// 横向: 底部1px绿色下划线 active indicator, 容器底部有0.5px分隔线
// 横向列数: 二列(px-60), 三/四/五列(justify-between), 滚动(pl-18 gap-24 overflow-x-auto)
// 竖向: 左侧124px面板 + 右侧content区; active=白底绿字, inactive=#F3F3F3底黑字

import React, { CSSProperties } from 'react'
import { dark, light, accentGreen } from '@/tokens/colors'
import type { 选项卡Props, 选项卡Item } from './types'

const FONT = 'PingFang SC, sans-serif'

// ── Single horizontal tab item ─────────────────────────────────────────────────
function HorizTab({
  tab,
  isActive,
  onClick,
}: {
  tab: 选项卡Item
  isActive: boolean
  onClick: () => void
}) {
  if (isActive) {
    return (
      <div
        onClick={onClick}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 12,
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        {/* text row; mb-1 to overlap container bottom border */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            paddingBottom: 14,
            marginBottom: -1,
          }}
        >
          <span
            style={{
              fontFamily: FONT,
              fontSize: 14,
              fontWeight: 500,
              lineHeight: '16px',
              color: accentGreen.primary,
              whiteSpace: 'nowrap',
            }}
          >
            {tab.label}
          </span>
        </div>
        {/* active underline — 1px green, overlaps container border by 1px */}
        <div style={{ height: 1, backgroundColor: accentGreen.primary, width: '100%' }} />
      </div>
    )
  }

  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 12,
        paddingBottom: 14,
        cursor: 'pointer',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: FONT,
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '16px',
          color: dark.black90,
          whiteSpace: 'nowrap',
        }}
      >
        {tab.label}
      </span>
    </div>
  )
}

// ── Horizontal tab bar ─────────────────────────────────────────────────────────
function HorizTabBar({
  tabs,
  activeKey,
  列数,
  onChange,
  className,
  style,
}: Pick<选项卡Props, 'tabs' | 'activeKey' | '列数' | 'onChange' | 'className' | 'style'>) {
  const isScrollable = 列数 === '滚动'

  const containerStyle: CSSProperties = isScrollable
    ? {
        display: 'flex',
        alignItems: 'flex-end',
        overflowX: 'auto',
        overflowY: 'hidden',
        paddingLeft: 18,
        backgroundColor: light.white,
        borderBottom: `0.5px solid ${dark.black10}`,
        scrollbarWidth: 'none',
        WebkitOverflowScrolling: 'touch',
        ...style,
      }
    : {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingLeft: 列数 === '二列' ? 60 : 0,
        paddingRight: 列数 === '二列' ? 60 : 0,
        backgroundColor: light.white,
        borderBottom: `0.5px solid ${dark.black10}`,
        ...style,
      }

  const items = tabs.map(tab => (
    <HorizTab
      key={tab.key}
      tab={tab}
      isActive={tab.key === activeKey}
      onClick={() => onChange?.(tab.key)}
    />
  ))

  if (isScrollable) {
    return (
      <div className={`scrollbar-none${className ? ` ${className}` : ''}`} style={containerStyle}>
        <div
          style={{
            display: 'flex',
            gap: 24,
            alignItems: 'flex-end',
            flexShrink: 0,
          }}
        >
          {items}
        </div>
      </div>
    )
  }

  return <div className={className} style={containerStyle}>{items}</div>
}

// ── Vertical tab ───────────────────────────────────────────────────────────────
function VertTabBar({
  tabs,
  activeKey,
  onChange,
  className,
  style,
}: Pick<选项卡Props, 'tabs' | 'activeKey' | 'onChange' | 'className' | 'style'>) {
  return (
    <div className={className} style={{ display: 'flex', width: '100%', ...style }}>
      {/* Left panel: 124px */}
      <div style={{ width: 124, flexShrink: 0 }}>
        {tabs.map(tab => {
          const isActive = tab.key === activeKey
          return (
            <div
              key={tab.key}
              onClick={() => onChange?.(tab.key)}
              style={{
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isActive ? light.white : '#F3F3F3',
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
                {tab.label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Right content area */}
      <div
        style={{
          flex: 1,
          backgroundColor: light.white,
          minWidth: 0,
          minHeight: tabs.length * 48,
        }}
      >
        {tabs.find(t => t.key === activeKey)?.content}
      </div>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────
export function 选项卡({
  方向 = '横向',
  列数 = '二列',
  tabs,
  activeKey,
  onChange,
  className,
  style,
}: 选项卡Props) {
  if (方向 === '竖向') {
    return (
      <VertTabBar
        tabs={tabs}
        activeKey={activeKey}
        onChange={onChange}
        className={className}
        style={style}
      />
    )
  }

  return (
    <HorizTabBar
      tabs={tabs}
      activeKey={activeKey}
      列数={列数}
      onChange={onChange}
      className={className}
      style={style}
    />
  )
}
