// Figma component: 弹窗 (Dialog)
// node: 3873:17915
//
// Card: w=320px, bg=white, r=12px, overflow=hidden
// Content: pt=32px, px=24px, gap=8px (title+body) or gap=16px (with input)
// Card gap=32px between content area and action row
// Action divider: border-top 0.5px dark.black4 (#F5F5F5) on each button
// Vertical divider (2-button horizontal): 1px × 56px dark.black4
// Overlay: rgba(0,0,0,0.5)

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { cn } from '@/utils/cn'
import { dark, light, accentGreen, accentRed } from '@/tokens/colors'
import type { 弹窗Props, 弹窗按钮Config, 弹窗按钮种类 } from './types'

// ── Button kind → style ───────────────────────────────────────
const BTN_STYLE: Record<弹窗按钮种类, { color: string; fontWeight: number }> = {
  primary:   { color: accentGreen.primary, fontWeight: 600 },
  secondary: { color: dark.black90,        fontWeight: 400 },
  danger:    { color: accentRed.primary,   fontWeight: 600 },
}

const FONT = 'PingFang SC, sans-serif'
const DIVIDER = `0.5px solid ${dark.black4}`

// ── Sub-components ────────────────────────────────────────────
function ActionBtn({
  btn,
  style,
}: {
  btn: 弹窗按钮Config
  style?: React.CSSProperties
}) {
  const kind = btn.kind ?? 'primary'
  const { color, fontWeight } = BTN_STYLE[kind]
  return (
    <button
      type="button"
      onClick={btn.onClick}
      style={{
        background: 'transparent',
        border: 'none',
        borderTop: DIVIDER,
        padding: '12px 24px',
        fontFamily: FONT,
        fontSize: 16,
        lineHeight: '24px',
        fontWeight,
        color,
        textAlign: 'center',
        cursor: 'pointer',
        ...style,
      }}
    >
      {btn.label}
    </button>
  )
}

// ── Main component ────────────────────────────────────────────
export const 弹窗: React.FC<弹窗Props> = ({
  visible,
  title,
  description,
  inputPlaceholder = '请输入',
  inputValue,
  onInputChange,
  actions = [],
  stackActions = false,
  scrollable = false,
  onMaskClick,
  className,
}) => {
  // Lock body scroll
  useEffect(() => {
    if (!visible) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [visible])

  // Escape key
  useEffect(() => {
    if (!visible || !onMaskClick) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onMaskClick() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [visible, onMaskClick])

  if (!visible) return null

  const hasTitle = !!title
  const hasInput = onInputChange !== undefined
  const useHorizontal = actions.length === 2 && !stackActions

  // ── Action area ──
  const renderActions = () => {
    if (actions.length === 0) return null

    if (useHorizontal) {
      const [left, right] = actions
      return (
        <div style={{ display: 'flex', width: 320, overflow: 'hidden' }}>
          <ActionBtn
            btn={left}
            style={{ flex: 1, minWidth: 0, alignSelf: 'stretch' }}
          />
          {/* Vertical divider */}
          <div style={{ width: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: DIVIDER }}>
            <div style={{ width: 1, height: 56, backgroundColor: dark.black4 }} />
          </div>
          <ActionBtn
            btn={right}
            style={{ flex: 1, minWidth: 0, alignSelf: 'stretch' }}
          />
        </div>
      )
    }

    return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {actions.map((btn, i) => (
          <ActionBtn key={i} btn={btn} style={{ width: '100%' }} />
        ))}
      </div>
    )
  }

  const dialog = (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
      onClick={onMaskClick}
    >
      <div
        role="dialog"
        aria-modal
        className={cn(className)}
        style={{
          width: 320,
          backgroundColor: light.white,
          borderRadius: 12,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
          alignItems: 'center',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Content */}
        <div style={{
          width: '100%',
          paddingTop: 32,
          paddingLeft: 24,
          paddingRight: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: hasInput ? 16 : 8,
          alignItems: 'center',
        }}>
          {/* Text section */}
          <div style={{
            width: 272,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            alignItems: 'center',
          }}>
            {hasTitle && (
              <p style={{
                margin: 0,
                width: '100%',
                fontFamily: FONT,
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '18px',
                color: dark.black90,
                textAlign: 'center',
              }}>
                {title}
              </p>
            )}
            {description !== undefined && (
              <div style={scrollable ? { width: '100%', maxHeight: 240, overflowY: 'auto' } : { width: '100%' }}>
                <p style={{
                  margin: 0,
                  fontFamily: FONT,
                  fontWeight: hasTitle ? 400 : 500,
                  fontSize: 16,
                  lineHeight: '22px',
                  color: dark.black90,
                  textAlign: 'center',
                }}>
                  {description}
                </p>
              </div>
            )}
          </div>

          {/* Input (输入类) */}
          {hasInput && (
            <div style={{
              width: 272,
              backgroundColor: dark.black4,
              borderRadius: 6,
              padding: 12,
            }}>
              <input
                value={inputValue ?? ''}
                onChange={e => onInputChange(e.target.value)}
                placeholder={inputPlaceholder}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontFamily: FONT,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '22px',
                  color: dark.black70,
                }}
              />
            </div>
          )}
        </div>

        {/* Actions */}
        {renderActions()}
      </div>
    </div>
  )

  return ReactDOM.createPortal(dialog, document.body)
}
