// Figma component: 地址栏 (定位组件)
// node: 22716:7743
//
// 首页顶部地址栏：左侧地址+站点+箭头，右侧福利中心+消息图标

import React from 'react'
import type { 定位Props } from './types'
import iconMapPin    from './assets/icon-map-pin.svg'
import iconMessage   from './assets/icon-message.svg'
import welfareOuter1 from './assets/welfare-outer1.svg'
import welfareOuter2 from './assets/welfare-outer2.svg'
import welfareInner  from './assets/welfare-inner.svg'

export function 定位({
  地址 = '张建创业工坊',
  站点 = '唐镇站',
  onAddressClick,
  onMessageClick,
}: 定位Props) {
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 9px',
      height: 24,
    }}>
      {/* ── 左侧：地址 ── */}
      <button
        onClick={onAddressClick}
        style={{
          display: 'flex', alignItems: 'center', gap: 3,
          background: 'none', border: 'none', padding: 0, cursor: 'pointer',
        }}
      >
        <img src={iconMapPin} alt="" style={{ width: 15, height: 15, flexShrink: 0 }} />
        <span style={{
          fontSize: 15, fontWeight: 500, lineHeight: '16px', color: '#fff',
          fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap',
        }}>
          {地址}
        </span>
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 3,
          padding: '1px 3px', flexShrink: 0,
          display: 'flex', alignItems: 'flex-start',
        }}>
          <span style={{
            display: 'block',
            fontSize: 13, lineHeight: '14px', color: '#fff',
            fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap',
          }}>
            {站点}
          </span>
        </div>
        {/* 向下箭头 */}
        <svg width="7" height="4" viewBox="0 0 7 4" fill="none" style={{ flexShrink: 0 }}>
          <path d="M0.5 0.5L3.5 3.5L6.5 0.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── 右侧：图标区 ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* 福利中心 icon */}
        <div style={{ position: 'relative', width: 24, height: 24, flexShrink: 0 }}>
          {/* 第1层：外层渐变圆形（粉色底） */}
          <img
            src={welfareOuter1}
            alt=""
            style={{ position: 'absolute', top: 0, left: 0, width: 24, height: 22.56 }}
          />
          {/* 第2层：白色遮罩圆（切掉底部文字区域） */}
          <img
            src={welfareOuter2}
            alt=""
            style={{ position: 'absolute', top: 0, left: 0, width: 24, height: 21.09 }}
          />
          {/* 第3层：蔬菜内容图标 */}
          <img
            src={welfareInner}
            alt=""
            style={{ position: 'absolute', top: 2.88, left: 3, width: 19.11, height: 19.12 }}
          />
          {/* 免费菜文字 */}
          <span style={{
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
            top: 14.5, fontSize: 6.5, color: '#3F292A',
            fontFamily: '"Source Han Serif CN", "Noto Serif CJK SC", serif',
            fontWeight: 700, letterSpacing: -0.5, whiteSpace: 'nowrap',
          }}>
            免费菜
          </span>
        </div>

        {/* 消息 icon */}
        <button
          onClick={onMessageClick}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', flexShrink: 0 }}
        >
          <img src={iconMessage} alt="消息" style={{ width: 24, height: 24, display: 'block' }} />
        </button>
      </div>
    </div>
  )
}
