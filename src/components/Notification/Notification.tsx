import React from 'react'
import { Icon } from '../Icon'
import { dark, light, accentRed } from '@/tokens/colors'
import type { NotificationProps } from './types'

// Figma 专属值 — 重要+标签 的 pill 底色，不在全局 token 中
const TAG_IMPORTANT_BG = '#FFE9EA'

export function Notification({
  重要度 = '默认',
  左侧 = '默认',
  文案,
  iconName = 'Notice',
  标签文字 = '温馨提示',
  可关闭 = false,
  onClose,
  className,
}: NotificationProps) {
  let bgColor: string
  if (重要度 === '重要') {
    bgColor = accentRed.opacity5        // #FFF5F5
  } else if (重要度 === '一般') {
    bgColor = dark.black4               // #F5F5F5
  } else {
    bgColor = 左侧 === '标签' ? light.white : 'rgba(255,255,255,0.8)'
  }

  const useBlur = 重要度 === '默认' && 左侧 !== '标签'

  return (
    <div
      className={`flex items-center gap-3 px-3 py-1.5 rounded-xl ${useBlur ? 'backdrop-blur-sm' : ''} ${className ?? ''}`}
      style={{ backgroundColor: bgColor, minHeight: 30 }}
    >
      <div className="flex flex-1 min-w-0 items-center gap-1.5">
        {左侧 === 'icon' && (
          <Icon name={iconName} size={16} color={dark.black90} className="flex-shrink-0" />
        )}
        {左侧 === '标签' && (
          <span
            className="flex-shrink-0 px-[3px] py-px rounded-[3px] text-[10px] leading-[12px] whitespace-nowrap"
            style={{
              backgroundColor: 重要度 === '重要' ? TAG_IMPORTANT_BG : dark.black50,
              color: 重要度 === '重要' ? accentRed.primary : light.white,
            }}
          >
            {标签文字}
          </span>
        )}
        <span
          className="flex-1 truncate text-[12px] leading-[14px]"
          style={{ color: dark.black90 }}
        >
          {文案}
        </span>
      </div>

      {可关闭 && (
        <button
          onClick={onClose}
          className="flex-shrink-0 flex items-center justify-center"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <Icon name="Close" size={16} color={dark.black50} />
        </button>
      )}
    </div>
  )
}
