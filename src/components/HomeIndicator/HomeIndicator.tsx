import React from 'react'

// Figma node: 248:73392  375×34px  Light/Dark variants
export interface HomeIndicatorProps {
  /** Light = 黑色横条（浅色页面），Dark = 白色横条（深色页面） */
  mode?: 'Light' | 'Dark'
  className?: string
}

export function HomeIndicator({ mode = 'Light', className }: HomeIndicatorProps) {
  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: 34,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 8,
      }}
    >
      <div style={{
        width: 134,
        height: 5,
        borderRadius: 100,
        background: mode === 'Dark' ? '#fff' : '#000',
      }} />
    </div>
  )
}
