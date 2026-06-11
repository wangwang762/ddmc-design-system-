import React from 'react'
import { Icon } from '../Icon'
import type { NoticeBarProps } from './types'

// Figma 专属值（不在全局 token 中）
const DARK_BG = '#3C3C3C'       // 一般/倒计时 深灰底
const LIGHT_BG = '#F5F5F5'      // 绿卡/红包 浅灰底
const IMPORTANT_BG = '#FFFBE6'  // 重要 黄色底
const IMPORTANT_TEXT = '#FFB51C' // 重要 橙色文字
const COUNTDOWN_COLOR = '#FF7A00' // 倒计时橙色

export function NoticeBar({
  类型 = '一般',
  文案,
  iconName,
  iconSrc,
  倒计时,
  按钮文案,
  onButtonClick,
  可关闭 = true,
  onClose,
  className,
}: NoticeBarProps) {
  const isDark = 类型 === '一般' || 类型 === '倒计时'
  const isImportant = 类型 === '重要'
  const isLight = 类型 === '绿卡' || 类型 === '红包'

  const bgColor = isDark ? DARK_BG : isImportant ? IMPORTANT_BG : LIGHT_BG
  const textColor = isDark ? '#FFFFFF' : isImportant ? IMPORTANT_TEXT : '#1A1A1A'

  return (
    <div
      className={`flex items-center w-full rounded-lg px-3 ${className ?? ''}`}
      style={{
        backgroundColor: bgColor,
        minHeight: 40,
        gap: 8,
      }}
    >
      {/* 左侧图标区 */}
      {iconSrc && (
        <img
          src={iconSrc}
          alt=""
          className="flex-shrink-0"
          style={{ width: 类型 === '绿卡' || 类型 === '红包' ? 30 : 18, height: 类型 === '绿卡' || 类型 === '红包' ? 30 : 18, borderRadius: '50%', objectFit: 'cover' }}
        />
      )}
      {iconName && !iconSrc && (
        <Icon
          name={iconName as any}
          size={16}
          color={textColor}
          className="flex-shrink-0"
        />
      )}

      {/* 文案区 */}
      <span
        className="flex-1 text-xs truncate"
        style={{ color: textColor, fontSize: 12, lineHeight: '18px' }}
      >
        {文案}
        {倒计时 && (
          <span style={{ color: COUNTDOWN_COLOR, marginLeft: 4 }}>
            {倒计时}后结束
          </span>
        )}
      </span>

      {/* CTA 按钮 */}
      {按钮文案 && (
        <button
          onClick={onButtonClick}
          className="flex-shrink-0 rounded-full px-3 text-white font-medium"
          style={{
            backgroundColor: '#00B740',
            fontSize: 12,
            height: 28,
            border: 'none',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          {按钮文案}
        </button>
      )}

      {/* 关闭按钮 */}
      {可关闭 && (
        <button
          onClick={onClose}
          className="flex-shrink-0 flex items-center justify-center"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <Icon name="Close" size={16} color={isDark ? 'rgba(255,255,255,0.6)' : '#B3B3B3'} />
        </button>
      )}
    </div>
  )
}
