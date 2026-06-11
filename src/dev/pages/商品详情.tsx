/**
 * 商品详情页 — 组件调用测试
 * 测试目标：验证现有组件库能否直接组合搭建页面
 *
 * 覆盖组件：
 *   状态栏 / TitleBar / 标签 / 标题前标签 / 徽标
 *   选择按钮 / 步进器 / 按钮 / 加减号
 *   Toast / 弹窗 / 底部导航
 */
import React, { useState } from 'react'
import { 状态栏 }     from '../../components/状态栏'
import { TitleBar }   from '../../components/标题栏'
import { 标签 }       from '../../components/标签'
import { 标题前标签 } from '../../components/标题前标签'
import { 徽标 }       from '../../components/徽标'
import { 选择按钮 }   from '../../components/选择按钮'
import { 步进器 }     from '../../components/步进器'
import { 按钮 }       from '../../components/按钮'
import { Toast }      from '../../components/Toast'
import { 弹窗 }       from '../../components/弹窗'
import { 底部导航 }   from '../../components/底部导航'
import type { TabBarTab } from '../../components/底部导航'

// ── 规格选项 ────────────────────────────────────────────
const SPECS = ['500g', '1kg', '2kg']
const TABS: TabBarTab[] = ['首页', '分类', '吃什么', '购物车', '我的']

export function 商品详情({ onNavigate }: { onNavigate?: (tab: string) => void } = {}) {
  const [selectedSpec, setSelectedSpec] = useState(0)
  const [qty, setQty]                   = useState(1)
  const [cartCount, setCartCount]       = useState(2)
  const [toastVisible, setToastVisible] = useState(false)
  const [dialogVisible, setDialogVisible] = useState(false)
  const [activeTab, setActiveTab]       = useState<TabBarTab>('首页')

  const maxQty = 10
  const price  = [9.9, 18.8, 35.6][selectedSpec]

  function handleAddCart() {
    setCartCount(c => c + qty)
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 2000)
  }

  function handleTabChange(tab: TabBarTab) {
    setActiveTab(tab)
    onNavigate?.(tab)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#F5F5F5', fontFamily: 'PingFang SC, sans-serif' }}>

      {/* ── 顶部固定区 ── */}
      <div style={{ flexShrink: 0 }}>
        <状态栏 />
        <TitleBar
          title="商品详情"
          左操作="back"
          右侧图标={['cart']}
          购物车数量={cartCount}
        />
      </div>

      {/* ── 可滚动内容 ── */}
      <div style={{ flex: 1, overflowY: 'auto' }}>

        {/* 商品主图 */}
        <div style={{ width: '100%', height: 390, background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <span style={{ fontSize: 64 }}>🥦</span>

          {/* 图片角标徽标 */}
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <徽标 类型="左下直角" 尺寸="大" label="上新啦" />
          </div>
        </div>

        {/* 商品信息卡 */}
        <div style={{ background: '#fff', padding: '14px 16px 12px', marginBottom: 8 }}>

          {/* 价格行 */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 10 }}>
            <span style={{ fontSize: 12, color: '#FF3133', fontWeight: 500 }}>¥</span>
            <span style={{ fontSize: 26, fontWeight: 700, color: '#FF3133', lineHeight: 1 }}>{price.toFixed(1)}</span>
            <span style={{ fontSize: 12, color: '#9A9A9A', textDecoration: 'line-through', marginLeft: 2 }}>¥{(price * 1.5).toFixed(1)}</span>

            {/* 营销标签 */}
            <标签 类型="实心" 颜色="红色" 尺寸={18}>限时</标签>
            <标签 类型="基本" 颜色="绿色" 尺寸={18}>自营</标签>
          </div>

          {/* 商品名称 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <标题前标签 类型="自营">自营</标题前标签>
            <span style={{ fontSize: 16, fontWeight: 500, color: '#1A1A1A', lineHeight: 1.4 }}>
              有机西兰花 农场直采 新鲜配送
            </span>
          </div>

          {/* 副标题 */}
          <p style={{ fontSize: 12, color: '#9A9A9A', margin: 0, lineHeight: 1.6 }}>
            产地直供 · 当日采摘 · 冷链配送
          </p>
        </div>

        {/* 规格选择 */}
        <div style={{ background: '#fff', padding: '14px 16px', marginBottom: 8 }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: '#1A1A1A', margin: '0 0 10px' }}>规格</p>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            {SPECS.map((spec, i) => (
              <div key={spec} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}
                onClick={() => setSelectedSpec(i)}>
                <选择按钮
                  状态={selectedSpec === i ? '选中' : '未选中'}
                  类型="默认"
                  onClick={() => setSelectedSpec(i)}
                />
                <span style={{ fontSize: 14, color: selectedSpec === i ? '#00B740' : '#1A1A1A' }}>{spec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 数量选择 */}
        <div style={{ background: '#fff', padding: '14px 16px', marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: '#1A1A1A' }}>数量</span>
          <步进器
            类型="大"
            count={qty}
            状态={qty <= 1 ? '无法减少' : qty >= maxQty ? '无法增加' : '默认'}
            onDecrement={() => setQty(q => Math.max(1, q - 1))}
            onIncrement={() => setQty(q => Math.min(maxQty, q + 1))}
          />
        </div>

        {/* 配送信息 */}
        <div style={{ background: '#fff', padding: '14px 16px', marginBottom: 8 }}>
          <p style={{ fontSize: 13, fontWeight: 500, color: '#1A1A1A', margin: '0 0 10px' }}>配送</p>
          {[
            { label: '配送方式', value: '极速达 · 最快30分钟' },
            { label: '送达时间', value: '今天 14:00 - 15:00' },
            { label: '配送费',   value: '满59元免配送费' },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 13 }}>
              <span style={{ color: '#9A9A9A' }}>{label}</span>
              <span style={{ color: '#1A1A1A' }}>{value}</span>
            </div>
          ))}
        </div>

        {/* 操作按钮区（弹窗触发演示） */}
        <div style={{ background: '#fff', padding: 16, marginBottom: 8, display: 'flex', gap: 12 }}>
          <按钮 尺寸="Large" 类型="Secondary" 自适应={false}
            onClick={() => setDialogVisible(true)}>
            加入收藏
          </按钮>
          <按钮 尺寸="Large" 类型="Primary" 自适应={false}
            onClick={handleAddCart}>
            加入购物车
          </按钮>
        </div>

        {/* 底部 padding（留给导航栏） */}
        <div style={{ height: 80 }} />
      </div>

      {/* ── 底部导航 ── */}
      <div style={{ flexShrink: 0 }}>
        <底部导航
          activeTab={activeTab}
          onTabChange={handleTabChange}
          购物车数量={cartCount}
        />
      </div>

      {/* ── 全局浮层 ── */}
      <Toast visible={toastVisible} 类型="success" message={`已加入购物车（共 ${cartCount} 件）`} />

      <弹窗
        visible={dialogVisible}
        title="加入收藏"
        description="该商品已加入你的收藏夹，可在「我的 → 商品收藏」中查看。"
        actions={[
          { label: '去看看', kind: 'primary', onClick: () => { setDialogVisible(false); handleTabChange('我的') } },
          { label: '继续购物', kind: 'secondary', onClick: () => setDialogVisible(false) },
        ]}
        onMaskClick={() => setDialogVisible(false)}
      />
    </div>
  )
}
