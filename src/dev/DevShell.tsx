import React, { useState, useEffect, useRef } from 'react'
import { App } from './App'
import { 首页 } from './pages/首页'
import { 分类页 } from './pages/分类页'
import { 购物车 } from './pages/购物车'
import { 我的 } from './pages/我的'

// ── Nav data ─────────────────────────────────────────────

type NavItem = {
  id: string
  label: string
  type: 'page' | 'component'
  pageKey?: string
  sectionId?: string
}

type NavGroup = {
  groupLabel: string
  items: NavItem[]
}

const NAV_GROUPS: NavGroup[] = [
  {
    groupLabel: '页面预览',
    items: [
      { id: 'page-home',     label: '首页',   type: 'page', pageKey: 'home' },
      { id: 'page-category', label: '分类页', type: 'page', pageKey: 'category' },
      { id: 'page-cart',     label: '购物车', type: 'page', pageKey: 'cart' },
      { id: 'page-mine',     label: '我的',   type: 'page', pageKey: 'mine' },
    ],
  },
  {
    groupLabel: '基础操作',
    items: [
      { id: 'btn-primary',   label: '按钮 Primary',   type: 'component', sectionId: 'sec-btn-primary' },
      { id: 'btn-secondary', label: '按钮 Secondary',  type: 'component', sectionId: 'sec-btn-secondary' },
      { id: 'cart-btn',      label: '购物车按钮',       type: 'component', sectionId: 'sec-cart-btn' },
      { id: 'qty',           label: '加减号',           type: 'component', sectionId: 'sec-qty' },
      { id: 'radio',         label: '选择按钮',         type: 'component', sectionId: 'sec-radio' },
      { id: 'switch',        label: '开关',             type: 'component', sectionId: 'sec-switch' },
      { id: 'stepper',       label: '步进器',           type: 'component', sectionId: 'sec-stepper' },
    ],
  },
  {
    groupLabel: '信息展示',
    items: [
      { id: 'badge',     label: '徽标',      type: 'component', sectionId: 'sec-badge' },
      { id: 'tag',       label: '标签',      type: 'component', sectionId: 'sec-tag' },
      { id: 'title-tag', label: '标题前标签', type: 'component', sectionId: 'sec-title-tag' },
      { id: 'mkt-tag',   label: '营销标签',  type: 'component', sectionId: 'sec-mkt-tag' },
      { id: 'toast',     label: 'Toast',       type: 'component', sectionId: 'sec-toast' },
      { id: 'dialog',    label: '弹窗',        type: 'component', sectionId: 'sec-dialog' },
      { id: 'location',  label: '定位',        type: 'component', sectionId: 'sec-location' },
      { id: 'quality',   label: '叮咚特色品质之爱', type: 'component', sectionId: 'sec-quality' },
    ],
  },
  {
    groupLabel: '导航',
    items: [
      { id: 'tabbar',   label: '底部导航',    type: 'component', sectionId: 'sec-tabbar' },
      { id: 'titlebar', label: '标题栏',      type: 'component', sectionId: 'sec-titlebar' },
      { id: 'tabs',     label: '选项卡',      type: 'component', sectionId: 'sec-tabs' },
      { id: 'segment',  label: '分段筛选器',  type: 'component', sectionId: 'sec-segment' },
    ],
  },
  {
    groupLabel: '复杂组件',
    items: [
      { id: 'product-card', label: '商品卡片', type: 'component', sectionId: 'sec-product-card' },
      { id: 'cell',         label: 'Cell',     type: 'component', sectionId: 'sec-cell' },
      { id: 'jinggang',     label: '金刚位',   type: 'component', sectionId: 'sec-jinggang' },
    ],
  },
]

// ── DevShell ─────────────────────────────────────────────

export function DevShell() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentView, setCurrentView] = useState<'home' | 'category' | 'cart' | 'mine' | 'components'>('home')
  const [selectedId, setSelectedId] = useState<string>('page-home')
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(null)
  const [openGroups, setOpenGroups] = useState<Set<string>>(
    new Set(NAV_GROUPS.map(g => g.groupLabel))
  )
  const contentRef = useRef<HTMLDivElement>(null)

  const TAB_TO_VIEW: Record<string, { view: typeof currentView; id: string }> = {
    '首页':   { view: 'home',       id: 'page-home' },
    '分类':   { view: 'category',   id: 'page-category' },
    '购物车': { view: 'cart',       id: 'page-cart' },
    '我的':   { view: 'mine',       id: 'page-mine' },
  }

  const handleNavigate = (tab: string) => {
    const target = TAB_TO_VIEW[tab]
    if (!target) return
    setCurrentView(target.view)
    setSelectedId(target.id)
    contentRef.current?.scrollTo({ top: 0 })
  }

  const handleItemClick = (item: NavItem) => {
    setSelectedId(item.id)
    if (item.type === 'page') {
      setCurrentView(
        item.pageKey === 'category' ? 'category' :
        item.pageKey === 'cart' ? 'cart' :
        item.pageKey === 'mine' ? 'mine' :
        'home'
      )
      contentRef.current?.scrollTo({ top: 0 })
    } else {
      if (currentView !== 'components') {
        setCurrentView('components')
        setPendingScrollId(item.sectionId!)
      } else {
        scrollToSection(item.sectionId!)
      }
    }
  }

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el && contentRef.current) {
      const containerTop = contentRef.current.getBoundingClientRect().top
      const elTop = el.getBoundingClientRect().top
      const offset = elTop - containerTop + contentRef.current.scrollTop - 16
      contentRef.current.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (pendingScrollId && currentView === 'components') {
      // wait a tick for App to mount
      const raf = requestAnimationFrame(() => {
        scrollToSection(pendingScrollId)
        setPendingScrollId(null)
      })
      return () => cancelAnimationFrame(raf)
    }
  }, [pendingScrollId, currentView])

  const toggleGroup = (groupLabel: string) => {
    setOpenGroups(prev => {
      const next = new Set(prev)
      next.has(groupLabel) ? next.delete(groupLabel) : next.add(groupLabel)
      return next
    })
  }

  const SIDEBAR_W = 220

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', fontFamily: 'PingFang SC, sans-serif' }}>

      {/* ── Sidebar ── */}
      <div style={{
        width: sidebarOpen ? SIDEBAR_W : 0,
        minWidth: sidebarOpen ? SIDEBAR_W : 0,
        transition: 'width 0.22s ease, min-width 0.22s ease',
        overflow: 'hidden',
        background: '#1A1A1A',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
      }}>
        {/* Logo */}
        <div style={{ padding: '18px 16px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#00B740', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>
            DDMC Design
          </div>
          <div style={{ fontSize: 11, color: '#4D4D4D', marginTop: 2, whiteSpace: 'nowrap' }}>
            组件库 &amp; 页面预览
          </div>
        </div>

        {/* Nav list */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
          {NAV_GROUPS.map(group => {
            const isOpen = openGroups.has(group.groupLabel)
            return (
              <div key={group.groupLabel}>
                {/* Group header */}
                <button
                  onClick={() => toggleGroup(group.groupLabel)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 16px 4px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#4D4D4D',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span>{group.groupLabel}</span>
                  <span style={{
                    transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
                    transition: 'transform 0.18s ease',
                    fontSize: 10,
                    color: '#4D4D4D',
                  }}>▾</span>
                </button>

                {/* Items */}
                <div style={{
                  maxHeight: isOpen ? '600px' : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.22s ease',
                }}>
                  {group.items.map(item => {
                    const isSelected = selectedId === item.id
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '7px 16px 7px 24px',
                          background: isSelected ? 'rgba(0,183,64,0.12)' : 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: isSelected ? '#00B740' : '#9A9A9A',
                          fontSize: 13,
                          fontWeight: isSelected ? 500 : 400,
                          textAlign: 'left',
                          whiteSpace: 'nowrap',
                          transition: 'background 0.12s, color 0.12s',
                        }}
                        onMouseEnter={e => {
                          if (!isSelected) (e.currentTarget as HTMLButtonElement).style.color = '#D0D0D0'
                        }}
                        onMouseLeave={e => {
                          if (!isSelected) (e.currentTarget as HTMLButtonElement).style.color = '#9A9A9A'
                        }}
                      >
                        {/* Active indicator */}
                        <span style={{
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: isSelected ? '#00B740' : 'transparent',
                          flexShrink: 0,
                          transition: 'background 0.12s',
                        }} />
                        {item.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Collapse toggle ── */}
      <button
        onClick={() => setSidebarOpen(v => !v)}
        style={{
          position: 'fixed',
          left: sidebarOpen ? SIDEBAR_W - 1 : 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1001,
          transition: 'left 0.22s ease',
          width: 16,
          height: 40,
          background: '#2A2A2A',
          border: '1px solid rgba(255,255,255,0.08)',
          borderLeft: sidebarOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
          borderRadius: sidebarOpen ? '0 4px 4px 0' : '0 4px 4px 0',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#4D4D4D',
          fontSize: 10,
          padding: 0,
        }}
        title={sidebarOpen ? '收起' : '展开'}
      >
        {sidebarOpen ? '‹' : '›'}
      </button>

      {/* ── Canvas ── */}
      <div style={{
        flex: 1,
        height: '100vh',
        overflowY: 'auto',
        background: '#DCDCDC',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '20px 0',
      }}>
        {/* 390×844 手机帧 */}
        <div style={{
          width: 390,
          height: 844,
          overflow: 'hidden',
          background: '#fff',
          boxShadow: '0 4px 32px rgba(0,0,0,0.18)',
          flexShrink: 0,
        }}>
          <div
            ref={contentRef}
            className="scrollbar-none"
            style={{ width: '100%', height: '100%', overflowY: 'auto' }}
          >
            {currentView === 'home'     ? <首页     onNavigate={handleNavigate} /> :
             currentView === 'category' ? <分类页   onNavigate={handleNavigate} /> :
             currentView === 'cart'     ? <购物车   onNavigate={handleNavigate} /> :
             currentView === 'mine'     ? <我的     onNavigate={handleNavigate} /> :
             <App />}
          </div>
        </div>
      </div>
    </div>
  )
}
