// Figma component: TitleBar (标题栏)
// node: 4030:60946
//
// 高度 42px（px-9 + 24px 内容）三列布局：左(125px) | 中(flex-1) | 右(125px)
// 注意：右侧文案 与 图标入口不可同时存在

import React from 'react'
import { dark, light } from '@/tokens/colors'
import type { TitleBarProps } from './types'
import iconBack from './assets/icon-back.svg'
import iconClose from './assets/icon-close.svg'
import iconShare from './assets/icon-share.svg'
import iconCart from './assets/icon-cart.svg'
import miniprogramBtn from './assets/miniprogram-btn.svg'

const FONT = 'PingFang SC, sans-serif'

// ── Icons（像素级匹配 Figma 资源）──────────────────────────────────────────────

function BackIcon() {
  return (
    <div style={{ position: 'relative', width: 24, height: 24, flexShrink: 0 }}>
      <img src={iconBack} alt="" style={{ position: 'absolute', width: 6, height: 14, left: 9, top: 5, display: 'block' }} />
    </div>
  )
}

function CloseIcon() {
  return (
    <div style={{ position: 'relative', width: 24, height: 24, flexShrink: 0 }}>
      <img src={iconClose} alt="" style={{ position: 'absolute', width: 14, height: 14, left: 5, top: 5, display: 'block' }} />
    </div>
  )
}

function CartIcon() {
  return (
    <div style={{ position: 'relative', width: 24, height: 24, flexShrink: 0 }}>
      <img src={iconCart} alt="" style={{ position: 'absolute', width: 22, height: 20, left: 1, top: 1.5, display: 'block' }} />
    </div>
  )
}

function ShareIcon() {
  return (
    <div style={{ position: 'relative', width: 24, height: 24, flexShrink: 0 }}>
      <img src={iconShare} alt="" style={{ position: 'absolute', width: 19, height: 19, left: 2.5, top: 2.5, display: 'block' }} />
    </div>
  )
}

// 小程序：整体图片资源，87×32
function MiniProgramButton({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} style={{ cursor: onClick ? 'pointer' : undefined, flexShrink: 0, lineHeight: 0 }}>
      <img src={miniprogramBtn} alt="打开小程序" style={{ width: 87, height: 32, display: 'block' }} />
    </div>
  )
}

// ── Badge 圆点（购物车数量）─────────────────────────────────────────────────────

function CartBadge({ count }: { count: number }) {
  const label = count > 99 ? '99+' : String(count)
  const isWide = count > 9
  return (
    <div
      style={{
        position: 'absolute',
        top: -4,
        right: -4,
        minWidth: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#FF3133',
        border: '1px solid white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: isWide ? 3 : 0,
        paddingRight: isWide ? 3 : 0,
      }}
    >
      <span style={{ fontFamily: FONT, fontSize: 9, color: 'white', fontWeight: 600, lineHeight: '10px' }}>
        {label}
      </span>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────

export function TitleBar({
  左操作 = '返回',
  onBack,
  头像Src,
  用户名,
  标题样式 = '文字',
  标题,
  标题图片Src,
  右侧文案,
  onRightTextClick,
  show购物车 = false,
  购物车Badge,
  on购物车Click,
  show分享 = false,
  on分享Click,
  show小程序 = false,
  on小程序Click,
  className,
  style,
}: TitleBarProps) {
  const renderLeft = () => {
    if (左操作 === '无') return null

    if (左操作 === '用户信息') {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
          {头像Src
            ? <img src={头像Src} alt="" style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
            : <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#353535', flexShrink: 0 }} />
          }
          {用户名 && (
            <span style={{ fontFamily: FONT, fontSize: 14, lineHeight: '16px', color: dark.black90, whiteSpace: 'nowrap' }}>
              {用户名}
            </span>
          )}
        </div>
      )
    }

    const icon = 左操作 === 'close' ? <CloseIcon /> : <BackIcon />
    return (
      <div
        onClick={onBack}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: onBack ? 'pointer' : undefined, flexShrink: 0 }}
      >
        {icon}
      </div>
    )
  }

  const renderTitle = () => {
    if (标题样式 === '图片' && 标题图片Src) {
      return <img src={标题图片Src} alt="" style={{ maxHeight: 24, maxWidth: 120, objectFit: 'contain' }} />
    }
    return (
      <span
        style={{
          fontFamily: FONT,
          fontSize: 16,
          fontWeight: 500,
          lineHeight: '18px',
          color: dark.black90,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {标题}
      </span>
    )
  }

  const renderRight = () => {
    if (show小程序) {
      return <MiniProgramButton onClick={on小程序Click} />
    }

    if (右侧文案) {
      return (
        <span
          onClick={onRightTextClick}
          style={{
            fontFamily: FONT,
            fontSize: 16,
            lineHeight: '18px',
            color: dark.black90,
            whiteSpace: 'nowrap',
            cursor: onRightTextClick ? 'pointer' : undefined,
          }}
        >
          {右侧文案}
        </span>
      )
    }

    const icons: React.ReactNode[] = []
    if (show分享) {
      icons.push(
        <div key="share" onClick={on分享Click} style={{ cursor: on分享Click ? 'pointer' : undefined, flexShrink: 0 }}>
          <ShareIcon />
        </div>
      )
    }
    if (show购物车) {
      icons.push(
        <div key="cart" onClick={on购物车Click} style={{ position: 'relative', cursor: on购物车Click ? 'pointer' : undefined, flexShrink: 0 }}>
          <CartIcon />
          {购物车Badge != null && 购物车Badge > 0 && <CartBadge count={购物车Badge} />}
        </div>
      )
    }
    return icons.length > 0
      ? <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>{icons}</div>
      : null
  }

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: light.white,
        width: '100%',
        ...style,
      }}
    >
      {/* 左 */}
      <div
        style={{
          width: 125,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 9,
          paddingRight: 9,
          paddingTop: 9,
          paddingBottom: 9,
        }}
      >
        {renderLeft()}
      </div>

      {/* 中：标题 */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {renderTitle()}
      </div>

      {/* 右 */}
      <div
        style={{
          width: 125,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingLeft: 9,
          paddingRight: 9,
          paddingTop: 9,
          paddingBottom: 9,
          gap: 18,
        }}
      >
        {renderRight()}
      </div>
    </div>
  )
}
