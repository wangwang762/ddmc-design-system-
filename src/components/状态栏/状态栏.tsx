// Figma component: StatusBar
// node: 19359:28308
//
// iOS Dynamic Island 状态栏。白色元素，叠在深色背景上使用。
// 高度 59px：Dynamic Island pill 从顶部 10px 处起，时间和信号图标垂直居中。

import React from 'react'
import type { 状态栏Props } from './types'

const FONT = 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'

function SignalIcon({ c }: { c: string }) {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0"    y="9" width="3" height="3"  rx="1" fill={c}/>
      <rect x="4.5"  y="6" width="3" height="6"  rx="1" fill={c}/>
      <rect x="9"    y="3" width="3" height="9"  rx="1" fill={c}/>
      <rect x="13.5" y="0" width="3" height="12" rx="1" fill={c}/>
    </svg>
  )
}

function WifiIcon({ c }: { c: string }) {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="10.5" r="1.5" fill={c}/>
      <path d="M4.636 7.136a4.95 4.95 0 0 1 6.728 0" stroke={c} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M1.757 4.257a8.485 8.485 0 0 1 12.486 0" stroke={c} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

function BatteryIcon({ c }: { c: string }) {
  return (
    <svg width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.35"/>
      <rect x="2"   y="2"   width="20" height="9"  rx="2"   fill={c}/>
      <path d="M25 4.5L25 8.5" stroke={c} strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function 状态栏({ time = '9:41', theme = 'light', className }: 状态栏Props) {
  const c = theme === 'dark' ? '#1A1A1A' : '#ffffff'
  return (
    <div
      className={className}
      style={{
        height: 59,
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
      }}
    >
      {/* 左侧：时间 */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{
          fontFamily: FONT,
          fontSize: 17,
          fontWeight: 600,
          color: c,
          letterSpacing: -0.41,
          lineHeight: '22px',
        }}>
          {time}
        </span>
      </div>

      {/* 中间：Dynamic Island pill，距顶 10px */}
      <div style={{
        flexShrink: 0,
        paddingTop: 10,
        display: 'flex',
        alignItems: 'flex-start',
      }}>
        <div style={{
          width: 125,
          height: 37,
          backgroundColor: '#000',
          borderRadius: 100,
        }} />
      </div>

      {/* 右侧：信号 + WiFi + 电池 */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
      }}>
        <SignalIcon c={c} />
        <WifiIcon c={c} />
        <BatteryIcon c={c} />
      </div>
    </div>
  )
}
