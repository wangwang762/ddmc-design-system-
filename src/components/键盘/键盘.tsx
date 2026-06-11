import React from 'react'
import type { 键盘Props } from './types'

// ── Figma specs ──────────────────────────────────────────────
// node: 248:72583  Alphabetic Keyboard  375×291px
// Background: rgba(209,213,219,0.9) backdrop-blur(54px)
const KB_BG = 'rgba(209,213,219,0.9)'
const KEY_WHITE = '#FFFFFF'
const KEY_GRAY = '#ADB3BC'
const KEY_SHADOW = '0px 1px 0px rgba(0,0,0,0.3)'
const KEY_RADIUS = 4.6
const KEY_H = 42

// ── Key data ─────────────────────────────────────────────────
const U1 = ['Q','W','E','R','T','Y','U','I','O','P']
const U2 = ['A','S','D','F','G','H','J','K','L']
const U3 = ['Z','X','C','V','B','N','M']
const L1 = ['q','w','e','r','t','y','u','i','o','p']
const L2 = ['a','s','d','f','g','h','j','k','l']
const L3 = ['z','x','c','v','b','n','m']
const S1 = ['1','2','3','4','5','6','7','8','9','0']
const S2 = ['-','/',':', ';','(',')',  '$','&','@', '"']
const S3 = ['.', ',', '?', '!', "'"]

// ── SVG icons ────────────────────────────────────────────────
function ShiftIcon({ active }: { active: boolean }) {
  return (
    <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
      <path
        d="M9.5 0.5L18.5 9.5H13.5V15.5H5.5V9.5H0.5L9.5 0.5Z"
        fill={active ? '#000' : 'none'}
        stroke={active ? 'none' : '#000'}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DeleteIcon() {
  return (
    <svg width="24" height="17" viewBox="0 0 24 17" fill="none">
      <path d="M8.5 1H23V16H8.5L1 8.5L8.5 1Z" stroke="#000" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M12 5.5L18.5 11.5M18.5 5.5L12 11.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function EmojiIcon() {
  return (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
      <circle cx="13.5" cy="13.5" r="12" stroke="#000" strokeWidth="1.5" />
      <circle cx="9.5" cy="11.5" r="1.5" fill="#000" />
      <circle cx="17.5" cy="11.5" r="1.5" fill="#000" />
      <path d="M8.5 16.5C9.5 20 17.5 20 18.5 16.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function DictationIcon() {
  return (
    <svg width="15" height="25" viewBox="0 0 15 25" fill="none">
      <rect x="3.5" y="0.5" width="8" height="13" rx="4" stroke="#000" strokeWidth="1.3" />
      <path d="M1 13.5C1 17.642 4 21 7.5 21C11 21 14 17.642 14 13.5" stroke="#000" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="7.5" y1="21" x2="7.5" y2="24.5" stroke="#000" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="4.5" y1="24.5" x2="10.5" y2="24.5" stroke="#000" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

// ── Sub-components ────────────────────────────────────────────
function LetterKey({ label, lowercase }: { label: string; lowercase?: boolean }) {
  return (
    <div style={{
      flex: 1, minWidth: 0, height: KEY_H,
      background: KEY_WHITE, borderRadius: KEY_RADIUS, boxShadow: KEY_SHADOW,
      display: 'flex', alignItems: lowercase ? 'flex-end' : 'center',
      justifyContent: 'center',
      paddingBottom: lowercase ? 6 : 0,
    }}>
      <span style={{
        fontFamily: "-apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif",
        fontSize: lowercase ? 26 : 22,
        color: '#000',
        letterSpacing: lowercase ? 0.364 : 0.35,
        lineHeight: 1,
        userSelect: 'none',
      }}>{label}</span>
    </div>
  )
}

function FnKey({ label, width, grow }: { label: React.ReactNode; width?: number; grow?: boolean }) {
  return (
    <div style={{
      height: KEY_H,
      width: grow ? undefined : width,
      flex: grow ? 1 : undefined,
      flexShrink: 0,
      background: KEY_GRAY, borderRadius: KEY_RADIUS, boxShadow: KEY_SHADOW,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {typeof label === 'string' ? (
        <span style={{
          fontFamily: "-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif",
          fontSize: label.length <= 3 ? 13 : 16,
          color: '#000',
          letterSpacing: label.length > 3 ? -0.32 : -0.078,
          userSelect: 'none',
        }}>{label}</span>
      ) : label}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────
export function 键盘({ 模式 = '字母大写', style, className }: 键盘Props) {
  const isUpper = 模式 === '字母大写'
  const isLower = 模式 === '字母小写'
  const isSymbol = 模式 === '符号'

  const row1 = isSymbol ? S1 : isUpper ? U1 : L1
  const row2 = isSymbol ? S2 : isUpper ? U2 : L2
  const row3 = isSymbol ? S3 : isUpper ? U3 : L3
  const lowercase = isLower

  const row: React.CSSProperties = { display: 'flex', gap: 5, padding: '0 5px' }

  return (
    <div
      className={className}
      style={{
        width: '100%',
        background: KB_BG,
        backdropFilter: 'blur(54px)',
        WebkitBackdropFilter: 'blur(54px)',
        position: 'relative',
        paddingBottom: 34,
        ...style,
      }}
    >
      {/* Row 1 */}
      <div style={{ ...row, paddingTop: 8 }}>
        {row1.map(k => <LetterKey key={k} label={k} lowercase={lowercase} />)}
      </div>

      {/* Row 2 */}
      <div style={{ ...row, paddingTop: 12, paddingLeft: isSymbol ? 5 : 24, paddingRight: isSymbol ? 5 : 24 }}>
        {row2.map(k => <LetterKey key={k} label={k} lowercase={lowercase && !isSymbol} />)}
      </div>

      {/* Row 3: fn + letters + fn */}
      <div style={{ ...row, paddingTop: 14 }}>
        {/* Left fn key */}
        {isSymbol ? (
          <FnKey label="#+=" width={42} />
        ) : (
          <div style={{
            height: KEY_H, width: 42, flexShrink: 0,
            background: KEY_GRAY, borderRadius: KEY_RADIUS, boxShadow: KEY_SHADOW,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ShiftIcon active={isUpper} />
          </div>
        )}
        {/* Center letter keys with 14px margin from fn keys */}
        <div style={{ flex: 1, display: 'flex', gap: 5, marginLeft: 9, marginRight: 9 }}>
          {row3.map(k => <LetterKey key={k} label={k} lowercase={lowercase} />)}
        </div>
        {/* Delete key */}
        <div style={{
          height: KEY_H, width: 42, flexShrink: 0,
          background: KEY_GRAY, borderRadius: KEY_RADIUS, boxShadow: KEY_SHADOW,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <DeleteIcon />
        </div>
      </div>

      {/* Function row: mode toggle + space + return */}
      <div style={{ display: 'flex', gap: 6, padding: '14px 5px 0' }}>
        <FnKey label={isSymbol ? 'ABC' : '123'} width={85.5} />
        <FnKey label="space" grow />
        <FnKey label="return" width={85.5} />
      </div>

      {/* Emoji & Dictation */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '17px 24px 0',
      }}>
        <EmojiIcon />
        <DictationIcon />
      </div>

      {/* Home Indicator */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 34,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        paddingBottom: 8,
      }}>
        <div style={{ width: 134, height: 5, borderRadius: 100, background: '#000' }} />
      </div>
    </div>
  )
}
