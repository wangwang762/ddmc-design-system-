// Figma component: Toast (轻提示)
// node: 8783:9938
//
// 5 种类型：基础（纯文字）/ 成功 / 错误 / 警告 / 加载（带 spin 动画）
// 居中悬浮，自动消失。加载态不自动消失，需外部设 visible=false

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import type { ToastProps } from './types'
import iconSuccessSvg from './assets/icon-success.svg'
import iconErrorSvg from './assets/icon-error.svg'
import iconWarningSvg from './assets/icon-warning.svg'
import iconLoadingSvg from './assets/icon-loading.svg'

const ICON_MAP = {
  成功: iconSuccessSvg,
  错误: iconErrorSvg,
  警告: iconWarningSvg,
  加载: iconLoadingSvg,
} as const

export function Toast({
  visible,
  content,
  类型 = '基础',
  duration,
  onHide,
}: ToastProps) {
  // 自动消失
  useEffect(() => {
    if (!visible) return
    const d = duration ?? (类型 === '加载' ? 0 : 2000)
    if (d === 0) return
    const timer = setTimeout(() => onHide?.(), d)
    return () => clearTimeout(timer)
  }, [visible, 类型, duration, onHide])

  if (!visible) return null

  const hasIcon = 类型 !== '基础'
  const padding = hasIcon ? 24 : 18

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      pointerEvents: 'none',
    }}>
      <div style={{
        backgroundColor: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        borderRadius: 12,
        padding,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: hasIcon ? 12 : 0,
        minWidth: 104,
        maxWidth: 240,
        pointerEvents: 'auto',
        animation: 'ddmc-toast-in 0.15s ease',
      }}>
        {hasIcon && (
          <img
            src={ICON_MAP[类型 as keyof typeof ICON_MAP]}
            alt=""
            style={{
              width: 24,
              height: 24,
              display: 'block',
              flexShrink: 0,
              ...(类型 === '加载' ? { animation: 'ddmc-spin 1s linear infinite' } : {}),
            }}
          />
        )}
        {content && (
          <p style={{
            margin: 0,
            fontSize: 14,
            lineHeight: '18px',
            color: '#FFFFFF',
            textAlign: 'center',
            fontFamily: 'PingFang SC, sans-serif',
            fontWeight: 400,
            wordBreak: 'break-word',
            width: '100%',
          }}>
            {content}
          </p>
        )}
      </div>
    </div>,
    document.body,
  )
}
