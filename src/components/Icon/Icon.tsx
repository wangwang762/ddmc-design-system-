import React from 'react'
import type { IconName, IconSize } from './types'

// Vite 5: eager-load all icon SVGs as raw strings at build time
const SVG_MAP = import.meta.glob(
  '/src/icons-new/**/*.svg',
  { as: 'raw', eager: true }
) as Record<string, string>

export type IconProps = {
  name: IconName
  size?: IconSize
  /** 颜色，默认继承父元素 CSS color（currentColor） */
  color?: string
  style?: React.CSSProperties
  className?: string
}

export function Icon({ name, size = 24, color = 'currentColor', style, className }: IconProps) {
  const key = `/src/icons-new/${name}/${size}.svg`
  const raw = SVG_MAP[key]

  if (!raw) {
    if (import.meta.env.DEV) {
      console.warn(`[Icon] 未找到: name="${name}" size=${size}`)
    }
    // 占位，保持尺寸不坍塌
    return <span style={{ display: 'inline-block', width: size, height: size, flexShrink: 0 }} />
  }

  // 将 SVG 内所有具体 hex 颜色替换为指定 color
  // fill="none" / stroke="none" 不受影响（正则只匹配 # 开头的十六进制）
  const colored = raw
    .replace(/stroke="#[0-9A-Fa-f]{3,8}"/g, `stroke="${color}"`)
    .replace(/fill="#[0-9A-Fa-f]{3,8}"/g, `fill="${color}"`)

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        flexShrink: 0,
        lineHeight: 0,
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: colored }}
    />
  )
}
