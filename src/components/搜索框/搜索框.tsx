import React from 'react'
import { dark, light, accentGreen, accentRed } from '../../tokens/colors'
import type { 搜索框Props } from './types'
import backSvg from './assets/back.svg'
import searchSvg from './assets/search.svg'
import clearSvg from './assets/clear.svg'
import cartSvg from './assets/cart.svg'
import downSvg from './assets/down.svg'
import tagCloseSvg from './assets/tag-close.svg'

// 分类九宫格图标 — 3 个描边方块 + 1 个旋转 45° 描边方块
function 分类图标() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="7" height="7" rx="2.5" stroke="#1A1A1A" strokeWidth="1.5"/>
      <rect x="4" y="14" width="7" height="7" rx="2.5" stroke="#1A1A1A" strokeWidth="1.5"/>
      <rect x="14" y="4" width="7" height="7" rx="2.5" stroke="#1A1A1A" strokeWidth="1.5"/>
      <rect x="14.26" y="14.35" width="6.5" height="6.5" rx="2.5" stroke="#1A1A1A" strokeWidth="1.5"
        transform="rotate(45 17.51 17.60)"/>
    </svg>
  )
}

// 购物车图标 + badge（两处右侧 icon 共用）
function 购物车图标({ badge, onClick }: { badge?: number; onClick?: () => void }) {
  return (
    <div
      style={{ position: 'relative', width: 24, height: 24, flexShrink: 0, cursor: onClick ? 'pointer' : undefined, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      onClick={onClick}
    >
      <img src={cartSvg} alt="购物车" style={{ width: 24, height: 21, display: 'block' }} />
      {!!badge && badge > 0 && (
        <div style={{
          position: 'absolute', top: -3, right: -6,
          backgroundColor: accentRed.primary,
          border: `1px solid ${light.white}`,
          borderRadius: 8,
          minWidth: 12, height: 12,
          padding: '0 3.5px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxSizing: 'border-box',
        }}>
          <span style={{
            fontSize: 10, lineHeight: '12px', color: light.white,
            fontFamily: 'PingFang SC, sans-serif', fontWeight: 500, whiteSpace: 'nowrap',
          }}>
            {badge > 99 ? '99+' : badge}
          </span>
        </div>
      )}
    </div>
  )
}

// ─── 主组件 ──────────────────────────────────────────────────

export function 搜索框({
  状态 = '通栏',
  右侧 = '-',
  placeholder = '快手菜',
  value = '',
  showBack,
  地址文字 = '上海市',
  cartBadge,
  avatarSrc,
  avatarLabel = '主页',
  onBack,
  onSearchClick,
  onChange,
  onSearch,
  onClear,
  onTagClose,
  onCancel,
  onCartClick,
  onCategoryClick,
  onAddressClick,
  onAvatarClick,
  className,
}: 搜索框Props) {
  // showBack: 除地址状态外默认显示
  const _showBack = showBack !== undefined ? showBack : 状态 !== '地址'

  // 默认+icon 变体：外层透明 + 白色搜索框
  const isTransparentVariant = 状态 === '默认' && 右侧 === 'icon'
  const pillBg = isTransparentVariant ? light.white : '#F5F5F5'
  // 搜索后的 chip 比文字高，pill 上下内边距减少以保持总高 42px
  const pillPaddingY = 状态 === '搜索后' ? 4 : 8
  // 通栏 / 默认+icon 的搜索内容居中显示
  const pillCentered = 状态 === '通栏' || isTransparentVariant

  // ── 左侧 ─────────────────────────────────────────────────────
  const renderLeft = () => {
    if (状态 === '地址') {
      return (
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0, cursor: onAddressClick ? 'pointer' : undefined }}
          onClick={onAddressClick}
        >
          <span style={{
            fontSize: 14, lineHeight: '16px', color: dark.black90,
            fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap',
          }}>
            {地址文字}
          </span>
          <img src={downSvg} alt="" style={{ width: 9, height: 4 }} />
        </div>
      )
    }
    if (_showBack) {
      return (
        <div
          style={{ width: 24, height: 24, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: onBack ? 'pointer' : undefined }}
          onClick={onBack}
        >
          <img src={backSvg} alt="返回" style={{ width: 6, height: 13 }} />
        </div>
      )
    }
    return null
  }

  // ── 搜索框内容 ───────────────────────────────────────────────
  const renderPillContent = () => {
    // 输入中：真实 input，绿色光标，右侧清除按钮
    if (状态 === '输入中') {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1, minWidth: 0 }}>
          <img src={searchSvg} alt="" style={{ width: 16, height: 16, flexShrink: 0 }} />
          <input
            value={value}
            onChange={e => onChange?.(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && onSearch?.()}
            autoFocus
            style={{
              flex: 1, minWidth: 0,
              border: 'none', outline: 'none', background: 'transparent', padding: 0,
              fontSize: 14, lineHeight: '16px', color: dark.black90,
              fontFamily: 'PingFang SC, sans-serif',
              caretColor: accentGreen.primary,
            }}
          />
          {!!value && (
            <div style={{ width: 14, height: 14, flexShrink: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={onClear}>
              {/* clear.svg 是圆形+号，Figma 对其父容器加了 rotate(45deg) 使其变成 × */}
              <img src={clearSvg} alt="清空" style={{ width: 14, height: 14, transform: 'rotate(45deg)' }} />
            </div>
          )}
        </div>
      )
    }

    // 搜索后：关键词 chip（灰底圆角 + 删除×）
    if (状态 === '搜索后') {
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <img src={searchSvg} alt="" style={{ width: 16, height: 16, flexShrink: 0 }} />
          <div style={{
            backgroundColor: '#808080',
            borderRadius: 16,
            padding: '5px 9px',
            display: 'flex', alignItems: 'center',
            flexShrink: 0,
          }}>
            <span style={{
              fontSize: 12, lineHeight: '14px', color: light.white,
              fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap',
            }}>
              {value}
            </span>
            <div
              style={{ width: 14, height: 14, flexShrink: 0, cursor: 'pointer' }}
              onClick={e => { e.stopPropagation(); onTagClose?.() }}
            >
              <img src={tagCloseSvg} alt="删除" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      )
    }

    // 通栏 / 默认 / 地址 — 静态 placeholder
    return (
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        ...(pillCentered ? { justifyContent: 'center', flex: 1 } : {}),
      }}>
        <img src={searchSvg} alt="" style={{ width: 16, height: 16, flexShrink: 0 }} />
        <span style={{
          fontSize: 14, lineHeight: '16px', color: dark.black50,
          fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap',
        }}>
          {placeholder}
        </span>
      </div>
    )
  }

  // ── 右侧 ─────────────────────────────────────────────────────
  const renderRight = () => {
    if (右侧 === 'icon') {
      return <购物车图标 badge={cartBadge} onClick={onCartClick} />
    }
    if (右侧 === 'icon+icon') {
      return (
        <div style={{ display: 'flex', gap: 15, alignItems: 'center', flexShrink: 0 }}>
          <购物车图标 badge={cartBadge} onClick={onCartClick} />
          <div style={{ cursor: onCategoryClick ? 'pointer' : undefined }} onClick={onCategoryClick}>
            <分类图标 />
          </div>
        </div>
      )
    }
    if (右侧 === '文字') {
      return (
        <span
          style={{
            fontSize: 16, lineHeight: '18px', color: dark.black90,
            fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap',
            flexShrink: 0, cursor: onCancel ? 'pointer' : undefined,
          }}
          onClick={onCancel}
        >
          取消
        </span>
      )
    }
    if (右侧 === '个人信息') {
      return (
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0, cursor: onAvatarClick ? 'pointer' : undefined }}
          onClick={onAvatarClick}
        >
          {avatarSrc
            ? <img src={avatarSrc} alt="头像" style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover', display: 'block', flexShrink: 0 }} />
            : <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#C4C4C4', flexShrink: 0 }} />
          }
          {avatarLabel && (
            <span style={{ fontSize: 12, lineHeight: '14px', color: dark.black90, fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap' }}>
              {avatarLabel}
            </span>
          )}
        </div>
      )
    }
    return null
  }

  // ── 渲染 ─────────────────────────────────────────────────────
  const isClickablePill = (状态 === '通栏' || 状态 === '默认' || 状态 === '地址') && !!onSearchClick

  return (
    <div
      className={className}
      style={{
        backgroundColor: isTransparentVariant ? 'transparent' : light.white,
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        height: 42,
        paddingLeft: 9, paddingRight: 9,
        paddingTop: 3, paddingBottom: 3,
      }}
    >
      {renderLeft()}

      <div
        style={{
          backgroundColor: pillBg,
          flex: 1, minWidth: 0,
          borderRadius: 32,
          paddingLeft: 9, paddingRight: 9,
          paddingTop: pillPaddingY, paddingBottom: pillPaddingY,
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          ...(pillCentered ? { justifyContent: 'center' } : {}),
          cursor: isClickablePill ? 'pointer' : undefined,
        }}
        onClick={isClickablePill ? onSearchClick : undefined}
      >
        {renderPillContent()}
      </div>

      {renderRight()}
    </div>
  )
}
