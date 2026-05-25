// Figma component: 底部加购bar
// node: 8284:16420
//
// 商品详情页底部操作栏。从上至下：
//   1. 操作栏 (54px): 左侧 0–3 图标 + 右侧 1–2 按钮
//   2. Home Indicator 区域 (34px，可选，默认显示)
//
// 左侧图标：购物车 / 收藏 / AI助手（渐变圆 + 文字角标）
// 右侧按钮：1个=全宽 Primary；2个=Secondary + Primary 各占一半
//
// 7 种布局变体（Figma）：左侧 0/1/2/3 图标 × 右侧 1/2 按钮

import React from 'react'
import { cn } from '@/utils/cn'
import { dark, light, accentRed, gradient } from '@/tokens/colors'
import type { 底部加购barProps, 加购图标Config } from './types'

// AI 圆形背景 & 文字符号复用 底部导航 的同名资源
import aiCircleSrc from '../底部导航/assets/ai-circle.svg'
import aiTextSrc   from '../底部导航/assets/ai-text.svg'

// 图标库 SVG（从 Figma icon library 导出，node 14809:17873 / 14809:17874）
import cartSrc from './assets/cart.svg'
import starSrc from './assets/star.svg'

// ── 购物车图标 (Cart2，Figma icon library 1:1) ───────────────
// 内部图形 22.11×19.919，left:1px top:1.5px，图片略微溢出内框（inset 负值）
const CartSvg = () => (
  <div style={{ position: 'relative', width: 24, height: 24, flexShrink: 0 }}>
    <div style={{ position: 'absolute', left: 1, top: 1.5, width: 22.11, height: 19.919 }}>
      <div style={{ position: 'absolute', inset: '-3.77% -2.09% 0 -3.39%' }}>
        <img src={cartSrc} alt="" aria-hidden style={{ display: 'block', width: '100%', height: '100%' }} />
      </div>
    </div>
  </div>
)

// ── 收藏图标 (Star，Figma icon library 1:1) ──────────────────
// 图标填满 inset 4.17%（≈1px 四边），有效区域 22×22 within 24×24
const StarSvg = () => (
  <div style={{ position: 'relative', width: 24, height: 24, flexShrink: 0 }}>
    <div style={{ position: 'absolute', inset: '4.17%' }}>
      <img src={starSrc} alt="" aria-hidden style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%' }} />
    </div>
  </div>
)

// ── AI助手图标 (24×24，渐变圆 + AI符号 + 可选文字角标) ────────
// 尺寸来自 Figma node 14782:17688，像素坐标 1:1
// ai-circle.svg / ai-text.svg 与 底部导航 同源，这里按 24×24 容器重新定位
const AiIcon = ({ showBadge = true }: { showBadge?: boolean }) => (
  <div style={{ position: 'relative', width: 24, height: 24, flexShrink: 0 }}>
    {/* 渐变圆背景 — 22×22 at (1, 1) */}
    <img
      src={aiCircleSrc}
      alt="" aria-hidden
      style={{ position: 'absolute', top: 1, left: 1, width: 22, height: 22, display: 'block' }}
    />
    {/* AI 符号 — Figma 导出像素坐标 1:1 */}
    <img
      src={aiTextSrc}
      alt="" aria-hidden
      style={{
        position: 'absolute',
        top: 5.93, left: 5.43,
        width: 12.834, height: 10.398,
        display: 'block',
      }}
    />
    {/* "AI助手" 气泡角标 */}
    {showBadge && (
      <span
        style={{
          position: 'absolute',
          top: -8,
          left: 9,
          padding: '2px 3px',
          background: accentRed.primary,
          // Figma: rounded-tl-[7px] rounded-tr-[7px] rounded-br-[7px] rounded-bl-[2px]
          borderRadius: '7px 7px 7px 2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'PingFang SC, sans-serif',
          fontSize: 9,
          fontWeight: 500,
          lineHeight: '10px',
          color: light.white,
          whiteSpace: 'nowrap',
        }}
      >
        AI助手
      </span>
    )}
  </div>
)

// ── 单个图标按钮 ───────────────────────────────────────────────
const IconButton = ({ config }: { config: 加购图标Config }) => {
  const inner = (() => {
    if (config.type === '购物车') {
      return (
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <CartSvg />
          {config.badge !== undefined && config.badge > 0 && (
            <span
              style={{
                position: 'absolute',
                top: -3, right: -3,
                minWidth: 12, height: 12,
                padding: '0 3px',
                background: accentRed.primary,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'PingFang SC, sans-serif',
                fontSize: 9,
                fontWeight: 500,
                lineHeight: '10px',
                color: light.white,
                whiteSpace: 'nowrap',
              }}
            >
              {config.badge > 99 ? '99+' : config.badge}
            </span>
          )}
        </div>
      )
    }
    if (config.type === '收藏') return <StarSvg />
    if (config.type === 'AI助手') return <AiIcon showBadge={config.aiBadge !== false} />
    return null
  })()

  if (!config.onClick) {
    return <div style={{ flexShrink: 0 }}>{inner}</div>
  }
  return (
    <button
      type="button"
      onClick={config.onClick}
      style={{
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {inner}
    </button>
  )
}

// ─────────────────────────────────────────────────────────────────
// ── 底部加购bar 主组件
// ─────────────────────────────────────────────────────────────────

export const 底部加购bar: React.FC<底部加购barProps> = ({
  icons = [],
  actions,
  showHomeIndicator = true,
  className,
}) => {
  const hasIcons = icons.length > 0

  return (
    <div className={cn(className)} style={{ background: light.white, width: '100%' }}>
      {/* 操作栏 — 54px */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 54,
          paddingTop: 6,
          paddingBottom: 6,
          // 有图标时左边距 15px，无图标时 9px（Figma 1:1）
          paddingLeft: hasIcons ? 15 : 9,
          paddingRight: 9,
          borderTop: `0.5px solid ${dark.black4}`,
          boxSizing: 'border-box',
        }}
      >
        {/* 图标区 + 按钮区的内部行，gap 24px（Figma: gap-[24px]） */}
        <div style={{ display: 'flex', flex: '1 0 0', alignItems: 'center', gap: 24, minWidth: 0 }}>
          {/* 左侧图标区（最多 3 个，gap 15px） */}
          {hasIcons && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 15, flexShrink: 0 }}>
              {icons.slice(0, 3).map((icon, i) => (
                <IconButton key={i} config={icon} />
              ))}
            </div>
          )}

          {/* 右侧按钮区（flex:1，最多 2 个，gap 9px） */}
          <div style={{ flex: '1 0 0', minWidth: 0, display: 'flex', gap: 9 }}>
            {actions.slice(0, 2).map((action, i) => {
              const isPrimary = action.kind !== 'secondary'
              return (
                <button
                  key={i}
                  type="button"
                  disabled={action.disabled}
                  onClick={action.onClick}
                  style={{
                    flex: '1 0 0',
                    minWidth: 0,
                    height: 42,
                    borderRadius: 100,
                    border: isPrimary ? 'none' : `0.5px solid ${dark.black20}`,
                    background: isPrimary
                      ? `linear-gradient(to right, ${gradient.green02[0]}, ${gradient.green02[1]})`
                      : light.white,
                    color: isPrimary ? light.white : dark.black90,
                    fontFamily: 'PingFang SC, sans-serif',
                    fontSize: 16,
                    fontWeight: 500,
                    lineHeight: '18px',
                    cursor: action.disabled ? 'not-allowed' : 'pointer',
                    opacity: action.disabled ? 0.4 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    whiteSpace: 'nowrap',
                    padding: '12px 24px',
                    boxSizing: 'border-box',
                  }}
                >
                  {action.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* iOS Home Indicator — 34px，黑色药丸居中 */}
      {showHomeIndicator && (
        <div style={{ position: 'relative', height: 34 }}>
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
        </div>
      )}
    </div>
  )
}
