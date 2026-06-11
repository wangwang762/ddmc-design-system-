import React, { useState, Component } from 'react'

class DocErrorBoundary extends Component<{ children: React.ReactNode }, { error: Error | null }> {
  state = { error: null }
  static getDerivedStateFromError(error: Error) { return { error } }
  render() {
    if (this.state.error) {
      const err = this.state.error as Error
      return (
        <div style={{ padding: 40, fontFamily: 'SF Mono, Menlo, monospace', fontSize: 13 }}>
          <div style={{ color: '#D32F2F', fontWeight: 700, marginBottom: 12 }}>运行时错误</div>
          <pre style={{ background: '#FFF3F3', border: '1px solid #FFCDD2', borderRadius: 8, padding: 16, whiteSpace: 'pre-wrap', wordBreak: 'break-all', color: '#B71C1C' }}>
            {err.message}{'\n\n'}{err.stack}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}
import { 首页 } from './pages/首页'
import { 分类页 } from './pages/分类页'
import { 购物车 } from './pages/购物车'
import { 我的 } from './pages/我的'
import { 商品详情 } from './pages/商品详情'

import { 按钮Doc } from './component-docs/按钮'
import { 购物车按钮Doc } from './component-docs/购物车按钮'
import { 加减号Doc } from './component-docs/加减号'
import { 步进器Doc } from './component-docs/步进器'
import { 选择按钮Doc } from './component-docs/选择按钮'
import { 开关Doc } from './component-docs/开关'
import { 弹窗Doc } from './component-docs/弹窗'
import { ToastDoc } from './component-docs/Toast'
import { 徽标Doc } from './component-docs/徽标'
import { 标签Doc } from './component-docs/标签'
import { NoticeBarDoc } from './component-docs/NoticeBar'
import { NotificationDoc } from './component-docs/Notification'
import { MenuDoc } from './component-docs/Menu'
import { 底部导航Doc } from './component-docs/底部导航'
import { 标题栏Doc } from './component-docs/标题栏'
import { 选项卡Doc } from './component-docs/选项卡'
import { 分段筛选器Doc } from './component-docs/分段筛选器'
import { CellDoc } from './component-docs/Cell'
import { 定位Doc } from './component-docs/定位'
import { 金刚位Doc } from './component-docs/金刚位'
import { 叮咚特色Doc } from './component-docs/叮咚特色'
import { 商品卡片Doc } from './component-docs/商品卡片'
import { IconDoc } from './component-docs/Icon'
import { 键盘Doc } from './component-docs/键盘'
import { HomeIndicatorDoc } from './component-docs/HomeIndicator'

// ── Constants ────────────────────────────────────────────────

const GREEN = '#06C167'
const SIDEBAR_W = 224

// ── Types ────────────────────────────────────────────────────

type NavItem =
  | { id: string; label: string; type: 'page'; pageKey: string }
  | { id: string; label: string; type: 'doc';  docKey: string }

type NavGroup = { groupLabel: string; items: NavItem[] }

// ── Nav data ─────────────────────────────────────────────────

const NAV_GROUPS: NavGroup[] = [
  {
    groupLabel: '页面预览',
    items: [
      { id: 'page-home',     label: '首页',         type: 'page', pageKey: 'home' },
      { id: 'page-category', label: '分类页',       type: 'page', pageKey: 'category' },
      { id: 'page-cart',     label: '购物车',       type: 'page', pageKey: 'cart' },
      { id: 'page-mine',     label: '我的',         type: 'page', pageKey: 'mine' },
    ],
  },
  {
    groupLabel: '交互控件',
    items: [
      { id: 'doc-btn',      label: '按钮',       type: 'doc', docKey: '按钮' },
      { id: 'doc-cartbtn',  label: '购物车按钮', type: 'doc', docKey: '购物车按钮' },
      { id: 'doc-qty',      label: '加减号',     type: 'doc', docKey: '加减号' },
      { id: 'doc-stepper',  label: '步进器',     type: 'doc', docKey: '步进器' },
      { id: 'doc-radio',    label: '选择按钮',   type: 'doc', docKey: '选择按钮' },
      { id: 'doc-switch',   label: '开关',       type: 'doc', docKey: '开关' },
    ],
  },
  {
    groupLabel: '反馈与提示',
    items: [
      { id: 'doc-dialog',       label: '弹窗',         type: 'doc', docKey: '弹窗' },
      { id: 'doc-toast',        label: 'Toast',        type: 'doc', docKey: 'Toast' },
      { id: 'doc-badge',        label: '徽标',         type: 'doc', docKey: '徽标' },
      { id: 'doc-notification', label: 'Notification', type: 'doc', docKey: 'Notification' },
      { id: 'doc-noticebar',    label: 'NoticeBar',    type: 'doc', docKey: 'NoticeBar' },
      { id: 'doc-menu',         label: 'Menu',         type: 'doc', docKey: 'Menu' },
    ],
  },
  {
    groupLabel: '标签类',
    items: [
      { id: 'doc-tag', label: '标签 & 标题前标签', type: 'doc', docKey: '标签' },
    ],
  },
  {
    groupLabel: '导航与布局',
    items: [
      { id: 'doc-tabbar',   label: '底部导航',   type: 'doc', docKey: '底部导航' },
      { id: 'doc-titlebar', label: '标题栏',     type: 'doc', docKey: '标题栏' },
      { id: 'doc-location', label: '定位',       type: 'doc', docKey: '定位' },
      { id: 'doc-tabs',     label: '选项卡',     type: 'doc', docKey: '选项卡' },
      { id: 'doc-segment',  label: '分段筛选器', type: 'doc', docKey: '分段筛选器' },
      { id: 'doc-cell',     label: 'Cell',       type: 'doc', docKey: 'Cell' },
    ],
  },
  {
    groupLabel: '商品展示',
    items: [
      { id: 'doc-product',  label: '商品卡片', type: 'doc', docKey: '商品卡片' },
      { id: 'doc-jinggang', label: '金刚位',   type: 'doc', docKey: '金刚位' },
      { id: 'doc-ddmc',     label: '叮咚特色', type: 'doc', docKey: '叮咚特色' },
    ],
  },
  {
    groupLabel: '基础工具',
    items: [
      { id: 'doc-icon', label: 'Icon 图标', type: 'doc', docKey: 'Icon' },
    ],
  },
  {
    groupLabel: 'iOS 系统组件',
    items: [
      { id: 'doc-keyboard',       label: '键盘',           type: 'doc', docKey: '键盘' },
      { id: 'doc-home-indicator', label: 'Home Indicator', type: 'doc', docKey: 'HomeIndicator' },
    ],
  },
]

// ── Doc registry ─────────────────────────────────────────────

const DOC_MAP: Record<string, React.ComponentType> = {
  '按钮':       按钮Doc,
  '购物车按钮': 购物车按钮Doc,
  '加减号':     加减号Doc,
  '步进器':     步进器Doc,
  '选择按钮':   选择按钮Doc,
  '开关':       开关Doc,
  '弹窗':       弹窗Doc,
  'Toast':      ToastDoc,
  '徽标':       徽标Doc,
  '标签':       标签Doc,
  'NoticeBar':  NoticeBarDoc,
  'Notification': NotificationDoc,
  'Menu':       MenuDoc,
  '底部导航':   底部导航Doc,
  '标题栏':     标题栏Doc,
  '选项卡':     选项卡Doc,
  '分段筛选器': 分段筛选器Doc,
  'Cell':       CellDoc,
  '定位':       定位Doc,
  '金刚位':     金刚位Doc,
  '叮咚特色':   叮咚特色Doc,
  '商品卡片':   商品卡片Doc,
  'Icon':          IconDoc,
  '键盘':          键盘Doc,
  'HomeIndicator': HomeIndicatorDoc,
}

// ── PageView ─────────────────────────────────────────────────

function PageView({ pageKey, onNavigate }: { pageKey: string; onNavigate: (tab: string) => void }) {
  if (pageKey === 'category') return <分类页 onNavigate={onNavigate} />
  if (pageKey === 'cart')     return <购物车 onNavigate={onNavigate} />
  if (pageKey === 'mine')     return <我的 onNavigate={onNavigate} />
  if (pageKey === 'detail')   return <商品详情 onNavigate={onNavigate} />
  return <首页 onNavigate={onNavigate} />
}

// ── DevShell ─────────────────────────────────────────────────

export function DevShell() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedId, setSelectedId] = useState<string>('page-home')
  const [currentItem, setCurrentItem] = useState<NavItem>(NAV_GROUPS[0].items[0])
  const [openGroups, setOpenGroups] = useState<Set<string>>(
    new Set(NAV_GROUPS.map(g => g.groupLabel))
  )

  const TAB_TO_ID: Record<string, string> = {
    '首页': 'page-home', '分类': 'page-category',
    '购物车': 'page-cart', '我的': 'page-mine',
  }

  const handleNavigate = (tab: string) => {
    const id = TAB_TO_ID[tab]
    if (!id) return
    const item = NAV_GROUPS[0].items.find(i => i.id === id)
    if (item) { setSelectedId(id); setCurrentItem(item) }
  }

  const handleItemClick = (item: NavItem) => {
    setSelectedId(item.id)
    setCurrentItem(item)
  }

  const toggleGroup = (label: string) => {
    setOpenGroups(prev => {
      const next = new Set(prev)
      next.has(label) ? next.delete(label) : next.add(label)
      return next
    })
  }

  const isPage = currentItem.type === 'page'

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', fontFamily: 'PingFang SC, -apple-system, sans-serif' }}>

      {/* ── Sidebar ── */}
      <aside style={{
        width: sidebarOpen ? SIDEBAR_W : 0,
        minWidth: sidebarOpen ? SIDEBAR_W : 0,
        transition: 'width 0.22s cubic-bezier(.4,0,.2,1), min-width 0.22s cubic-bezier(.4,0,.2,1)',
        overflow: 'hidden',
        background: '#fff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        borderRight: '1px solid #EBEBEB',
      }}>
        {/* Logo */}
        <div style={{
          padding: '20px 20px 16px',
          borderBottom: '1px solid #F0F0F0',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: `linear-gradient(135deg, ${GREEN} 0%, #04A856 100%)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14, fontWeight: 800, color: '#fff',
              flexShrink: 0,
            }}>D</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#111', whiteSpace: 'nowrap', lineHeight: 1.2 }}>
                DDMC Design
              </div>
              <div style={{ fontSize: 10, color: '#ABABAB', marginTop: 1, whiteSpace: 'nowrap' }}>
                组件库 · 页面预览
              </div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, overflowY: 'auto', padding: '12px 0 20px' }}>
          {NAV_GROUPS.map(group => {
            const isOpen = openGroups.has(group.groupLabel)
            return (
              <div key={group.groupLabel} style={{ marginBottom: 4 }}>
                {/* Group label */}
                <button
                  onClick={() => toggleGroup(group.groupLabel)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '6px 20px 4px',
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: '#BBBBBB',
                    fontSize: 10, fontWeight: 600,
                    letterSpacing: '0.9px', textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span>{group.groupLabel}</span>
                  <span style={{
                    transform: isOpen ? 'rotate(0)' : 'rotate(-90deg)',
                    transition: 'transform 0.18s',
                    fontSize: 9,
                  }}>▾</span>
                </button>

                {/* Items */}
                <div style={{
                  maxHeight: isOpen ? '800px' : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.22s cubic-bezier(.4,0,.2,1)',
                }}>
                  {group.items.map(item => {
                    const active = selectedId === item.id
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item)}
                        style={{
                          width: '100%',
                          display: 'flex', alignItems: 'center',
                          padding: '7px 20px 7px 28px',
                          background: active ? '#F0FBF5' : 'none',
                          border: 'none',
                          borderLeft: active ? `2px solid ${GREEN}` : '2px solid transparent',
                          cursor: 'pointer',
                          color: active ? GREEN : '#555',
                          fontSize: 13,
                          fontWeight: active ? 500 : 400,
                          textAlign: 'left',
                          whiteSpace: 'nowrap',
                          transition: 'all 0.12s',
                          letterSpacing: 0.1,
                        }}
                        onMouseEnter={e => {
                          if (!active) (e.currentTarget as HTMLElement).style.color = '#111'
                        }}
                        onMouseLeave={e => {
                          if (!active) (e.currentTarget as HTMLElement).style.color = '#555'
                        }}
                      >
                        {item.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </nav>
      </aside>

      {/* ── Collapse toggle ── */}
      <button
        onClick={() => setSidebarOpen(v => !v)}
        style={{
          position: 'fixed',
          left: sidebarOpen ? SIDEBAR_W - 1 : 0,
          top: '50%', transform: 'translateY(-50%)',
          zIndex: 1001,
          transition: 'left 0.22s cubic-bezier(.4,0,.2,1)',
          width: 16, height: 44,
          background: '#fff',
          border: '1px solid #EBEBEB',
          borderLeft: 'none',
          borderRadius: '0 6px 6px 0',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#BBBBBB',
          fontSize: 10, padding: 0,
        }}
        title={sidebarOpen ? '收起' : '展开'}
      >
        {sidebarOpen ? '‹' : '›'}
      </button>

      {/* ── Right panel ── */}
      {isPage ? (
        /* Page preview — phone frame on checkered canvas */
        <div style={{
          flex: 1, height: '100vh', overflowY: 'auto',
          background: '#E8E8E8',
          backgroundImage: 'radial-gradient(circle, #ccc 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
          padding: '32px 0 40px',
        }}>
          <div style={{
            width: 390, height: 844,
            background: '#fff',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.08)',
            flexShrink: 0,
            position: 'relative',
          }}>
            <div id="ddmc-portal-root" style={{
              position: 'absolute', inset: 0, zIndex: 999,
              pointerEvents: 'none', overflow: 'hidden',
            }} />
            <div className="scrollbar-none" style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
              <PageView pageKey={(currentItem as any).pageKey} onNavigate={handleNavigate} />
            </div>
          </div>
        </div>
      ) : (
        /* Component doc page — full width */
        <div style={{ flex: 1, height: '100vh', overflowY: 'auto' }}>
          <DocErrorBoundary key={(currentItem as any).docKey}>
            {(() => {
              const docKey = (currentItem as any).docKey as string
              const DocComponent = DOC_MAP[docKey]
              return DocComponent ? <DocComponent /> : (
                <div style={{ padding: 48, color: '#999', fontSize: 14 }}>未找到文档：{docKey}</div>
              )
            })()}
          </DocErrorBoundary>
        </div>
      )}
    </div>
  )
}
