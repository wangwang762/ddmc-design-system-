import React from 'react'
import { dark, light, accentGreen, accentRed } from '../../tokens/colors'
import type { GroupedRowProps, 活动条Props } from './types'
import { 开关 } from '../开关'
import { 选择按钮 } from '../选择按钮'
import { 按钮 } from '../按钮'

// ─── 内部图标 ─────────────────────────────────────────────────

function InfoCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6" stroke="#B3B3B3" strokeWidth="1"/>
      <circle cx="8" cy="5.5" r="0.75" fill="#B3B3B3"/>
      <rect x="7.4" y="7.2" width="1.2" height="3.3" rx="0.6" fill="#B3B3B3"/>
    </svg>
  )
}

function ChevronRight({ size = 16, color = '#B3B3B3' }: { size?: 12 | 16; color?: string }) {
  if (size === 12) {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 2.5L8 6L4.5 9.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 3.5L10.5 8L6.5 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ─── GroupedRow ───────────────────────────────────────────────

export function GroupedRow({
  showAvatar = false,
  avatarSrc,
  主标题,
  showInfo = false,
  副标题,
  说明文案,
  类型 = '默认',
  右副信息,
  右标题,
  右说明文案,
  showArrow = true,
  按钮文案 = '按钮文案',
  onButtonClick,
  开关Active = false,
  on开关Change,
  单选状态 = '未选中',
  单选类型 = '默认',
  on单选Click,
  onClick,
  className,
}: GroupedRowProps) {
  const renderTrailing = () => {
    if (类型 === '按钮') {
      return (
        <div onClick={e => { e.stopPropagation(); onButtonClick?.() }}>
          <按钮 尺寸="Medium" 类型="Primary">{按钮文案}</按钮>
        </div>
      )
    }
    if (类型 === '开关') {
      return (
        <div onClick={e => e.stopPropagation()}>
          <开关 尺寸="中" active={开关Active} onChange={on开关Change} />
        </div>
      )
    }
    if (类型 === '单选按钮') {
      return (
        <div onClick={e => { e.stopPropagation(); on单选Click?.() }}>
          <选择按钮 状态={单选状态} 类型={单选类型} />
        </div>
      )
    }
    // 默认：文字 + 箭头
    return (
      <div style={{ display: 'flex', gap: 3, alignItems: 'center', flexShrink: 0 }}>
        {(右副信息 || 右标题 || 右说明文案) && (
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end',
            fontSize: 12, lineHeight: '14px', fontFamily: 'PingFang SC, sans-serif',
          }}>
            {(右副信息 || 右标题) && (
              <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                {右副信息 && <span style={{ color: dark.black50 }}>{右副信息}</span>}
                {右标题 && <span style={{ color: dark.black90, whiteSpace: 'nowrap' }}>{右标题}</span>}
              </div>
            )}
            {右说明文案 && <span style={{ color: dark.black50, whiteSpace: 'nowrap' }}>{右说明文案}</span>}
          </div>
        )}
        {showArrow && <ChevronRight size={16} />}
      </div>
    )
  }

  return (
    <div
      className={className}
      style={{
        backgroundColor: light.white,
        borderBottom: `0.5px solid ${dark.black10}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 9px',
        cursor: onClick ? 'pointer' : undefined,
      }}
      onClick={onClick}
    >
      {/* 左侧 */}
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexShrink: 0 }}>
        {showAvatar && (
          avatarSrc
            ? <img src={avatarSrc} alt="" style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
            : <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#353535', flexShrink: 0 }} />
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <span style={{ fontSize: 14, lineHeight: '16px', color: dark.black90, fontFamily: 'PingFang SC, sans-serif' }}>
              {主标题}
            </span>
            {showInfo && <InfoCircle />}
            {副标题 && (
              <span style={{ fontSize: 12, lineHeight: '14px', color: dark.black50, fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap' }}>
                {副标题}
              </span>
            )}
          </div>
          {说明文案 && (
            <span style={{ fontSize: 12, lineHeight: '14px', color: dark.black50, fontFamily: 'PingFang SC, sans-serif' }}>
              {说明文案}
            </span>
          )}
        </div>
      </div>

      {/* 右侧附件 */}
      {renderTrailing()}
    </div>
  )
}

// ─── 活动条 ───────────────────────────────────────────────────

export function 活动条({
  尺寸 = '小',
  左侧类型 = '标签',
  标签文字 = '活动标签',
  图片Src,
  活动文字,
  去凑单文字 = '去凑单',
  onCtaClick,
  onClick,
  className,
}: 活动条Props) {
  const is小 = 尺寸 === '小'

  const renderLeftBadge = () => {
    if (左侧类型 === '图片' && 图片Src) {
      return (
        <div style={{ width: 18, height: 18, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <img src={图片Src} alt="" style={{ width: 18, height: 17, display: 'block' }} />
        </div>
      )
    }
    if (is小) {
      return (
        <div style={{ backgroundColor: accentRed.primary, borderRadius: 3, padding: '1px 3px', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: 10, lineHeight: '11px', color: light.white, fontFamily: 'PingFang SC, sans-serif', fontWeight: 500, whiteSpace: 'nowrap' }}>
            {标签文字}
          </span>
        </div>
      )
    }
    return (
      <div style={{ backgroundColor: accentRed.primary, borderRadius: 3, padding: '2px 4px', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: 12, lineHeight: '14px', color: light.white, fontFamily: 'PingFang SC, sans-serif', fontWeight: 500, whiteSpace: 'nowrap' }}>
          {标签文字}
        </span>
      </div>
    )
  }

  if (is小) {
    return (
      <div
        className={className}
        style={{
          backgroundColor: light.white,
          display: 'flex', alignItems: 'center', gap: 9,
          paddingTop: 9, paddingBottom: 9, paddingLeft: 9, paddingRight: 9,
          cursor: onClick ? 'pointer' : undefined,
        }}
        onClick={onClick}
      >
        <div style={{ display: 'flex', gap: 3, alignItems: 'center', flex: 1, minWidth: 0 }}>
          {renderLeftBadge()}
          <span style={{ fontSize: 12, lineHeight: '14px', color: dark.black90, fontFamily: 'PingFang SC, sans-serif' }}>
            {活动文字}
          </span>
        </div>
        <div
          style={{ display: 'flex', gap: 3, alignItems: 'center', flexShrink: 0, cursor: onCtaClick ? 'pointer' : undefined }}
          onClick={e => { e.stopPropagation(); onCtaClick?.() }}
        >
          <span style={{ fontSize: 12, lineHeight: '14px', color: accentGreen.primary, fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap' }}>
            {去凑单文字}
          </span>
          <ChevronRight size={12} color={accentGreen.primary} />
        </div>
      </div>
    )
  }

  // 大尺寸
  return (
    <div
      className={className}
      style={{
        backgroundColor: light.white,
        display: 'flex', alignItems: 'center', gap: 6,
        paddingTop: 9, paddingBottom: 9, paddingLeft: 9, paddingRight: 9,
        cursor: onClick ? 'pointer' : undefined,
      }}
      onClick={onClick}
    >
      {renderLeftBadge()}
      <span style={{ fontSize: 14, lineHeight: '18px', color: dark.black90, fontFamily: 'PingFang SC, sans-serif', flex: 1, minWidth: 0 }}>
        {活动文字}
      </span>
      <ChevronRight size={12} color={dark.black30} />
    </div>
  )
}
