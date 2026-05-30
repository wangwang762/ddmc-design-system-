/**
 * 首页 UI Kit 预览
 * Figma: https://www.figma.com/design/AJikPirZmrpaP59L6Gqhnn/DDMC-APP-UI-Kits?node-id=19356-26329
 *
 * ✅ 复用组件：定位 / 叮咚特色品质之爱 / 金刚位 / 商品卡片(双列) / 底部导航
 * 🔧 内联区块（待拆）：搜索栏 / Banner / 今日疯抢
 */
import React, { useState, useRef, useEffect } from 'react'

// ── 已有组件 ────────────────────────────────────────────
import { 金刚位 } from '../../components/金刚位'
import type { 金刚位Item } from '../../components/金刚位'
import { 商品卡片 } from '../../components/商品卡片'
import { 底部导航 } from '../../components/底部导航'
import type { TabBarTab } from '../../components/底部导航'
import { 定位 } from '../../components/定位'
import { 叮咚特色 } from '../../components/叮咚特色'
import { 状态栏 } from '../../components/状态栏'
import { 今日疯抢 } from '../../components/今日疯抢'
import type { 疯抢商品 } from '../../components/今日疯抢'

// ── Hero assets ─────────────────────────────────────────
import heroBg      from './首页/assets/hero-bg.png'
import bannerImg   from './首页/assets/Mask group.png'
import searchBg    from './首页/assets/search-bg.svg'
import iconScanner from './首页/assets/icon-scanner.svg'
import iconMapPin    from './首页/assets/icon-map-pin.svg'
import iconDelivery  from './首页/assets/icon-delivery.svg'
import tabImg1     from './首页/assets/tab-img-1.png'
import tabImg2     from './首页/assets/tab-img-2.png'
import tabImg3     from './首页/assets/tab-img-3.png'
import tabImg4     from './首页/assets/tab-img-4.png'
import tabImg5     from './首页/assets/tab-img-5.png'

// ── 商品图库 ─────────────────────────────────────────────
import 茼蒿Img       from '../../../商品图/信息流商品图/1.png'
import 生蚝Img       from '../../../商品图/信息流商品图/4.png'
import 白馒头Img     from '../../../商品图/自有品牌/良芯匠人/01.png'
import 菠菜卷Img     from '../../../商品图/自有品牌/良芯匠人/02.png'
import 沙拉Img       from '../../../商品图/自有品牌/叮咚好食光/01.png'
import 麻酱凉皮Img   from '../../../商品图/自有品牌/叮咚好食光/02.png'
import 鸡肉三明治Img from '../../../商品图/自有品牌/叮咚好食光/03.png'
import 蛋饺Img       from '../../../商品图/自有品牌/蔡长青/01.png'
import 奶酪条Img     from '../../../商品图/宝妈严选/01.png'
import 玉兔抱月Img   from '../../../商品图/宝妈严选/04.png'
import 车厘子Img     from '../../../商品图/紫/车厘子01.png'

// ── 金刚位 assets（首页第一屏，5×3：前2行标准，第3行小图标）────────────────
import 菜豆制品Img from '../../components/金刚位/assets/菜豆制品.png'
import 肉禽蛋Img   from '../../components/金刚位/assets/肉禽蛋.png'
import 水产海鲜Img from '../../components/金刚位/assets/水产海鲜.png'
import 水果鲜花Img from '../../components/金刚位/assets/水果鲜花.png'
import 速食冻品Img from '../../components/金刚位/assets/速食冻品.png'
import 粮油调味Img from '../../components/金刚位/assets/粮油调味.png'
import 熟食卤味Img from '../../components/金刚位/assets/熟食卤味.png'
import 个护清洁Img from '../../components/金刚位/assets/个护清洁.png'
import 快手菜Img   from '../../components/金刚位/assets/快手菜.png'
import 饮品烘焙Img from '../../components/金刚位/assets/饮品烘焙.png'
// 第三行小图标（iconSize: 38）
import 一日五餐Img from '../../components/金刚位/assets/一日五餐.png'
import 滋补好物Img from '../../components/金刚位/assets/滋补好物.png'
import 宝妈严选Img from '../../components/金刚位/assets/宝妈严选.png'
import 一周一花Img from '../../components/金刚位/assets/一周一花.png'
import 日日鲜Img   from '../../components/金刚位/assets/日日鲜.png'

// ─────────────────────────────────────────────────────────
// 数据
// ─────────────────────────────────────────────────────────
// 首页金刚位：5×3（前2行标准 48px，第3行小 38px）
const 金刚位数据: 金刚位Item[] = [
  { key: '菜豆制品', iconSrc: 菜豆制品Img, label: '菜豆制品' },
  { key: '肉禽蛋',   iconSrc: 肉禽蛋Img,   label: '肉禽蛋'   },
  { key: '水产海鲜', iconSrc: 水产海鲜Img, label: '水产海鲜' },
  { key: '水果鲜花', iconSrc: 水果鲜花Img, label: '水果鲜花', badge: '新' },
  { key: '速食冻品', iconSrc: 速食冻品Img, label: '速食冻品' },
  { key: '粮油调味', iconSrc: 粮油调味Img, label: '粮油调味' },
  { key: '熟食卤味', iconSrc: 熟食卤味Img, label: '熟食卤味' },
  { key: '个护清洁', iconSrc: 个护清洁Img, label: '个护清洁' },
  { key: '快手菜',   iconSrc: 快手菜Img,   label: '快手菜'   },
  { key: '饮品烘焙', iconSrc: 饮品烘焙Img, label: '饮品烘焙' },
  // 第三行：小图标（iconSize: 38）
  { key: '一日五餐', iconSrc: 一日五餐Img, label: '一日五餐', iconSize: 38 },
  { key: '滋补好物', iconSrc: 滋补好物Img, label: '滋补好物', iconSize: 38 },
  { key: '宝妈严选', iconSrc: 宝妈严选Img, label: '宝妈严选', iconSize: 38 },
  { key: '一周一花', iconSrc: 一周一花Img, label: '一周一花', iconSize: 38 },
  { key: '日日鲜',   iconSrc: 日日鲜Img,   label: '日日鲜',   iconSize: 38 },
]

const 瀑布流商品 = [
  { id: 1, title: '叮咚自产 鲜嫩茼蒿 300g',     price: '5.90',  单位: '/把', 利益点: '叮咚基地｜当日采摘｜现摘现送', img: 茼蒿Img,     营销: [{ 类型: '绿色底' as const, 文字: '今日达' }] },
  { id: 2, title: '乳山 鲜活带壳生蚝 6只',       price: '29.90', 单位: '/盒', 利益点: '乳山产地｜全批次检测',         img: 生蚝Img,     营销: [{ 类型: '近N天低价' as const, 文字: '近14天低价' }] },
  { id: 3, title: '良芯匠人 软糯白馒头 6只',     price: '12.80', 单位: '/袋', 利益点: '反复揉搓｜传统工艺',           img: 白馒头Img,   营销: [{ 类型: '省' as const, 文字: '省2.0元' }] },
  { id: 4, title: '好食光 手工麻酱凉皮 280g',    price: '9.90',  单位: '/份', 利益点: '现做即食｜麻酱足料',           img: 麻酱凉皮Img, 营销: [{ 类型: '粉红底' as const, 文字: '限时抢' }] },
  { id: 5, title: '和润 手撕鲜制奶酪条 5支',     price: '19.90', 单位: '/盒', 利益点: '天然牛乳｜无添加',             img: 奶酪条Img,   营销: [{ 类型: '绿色底' as const, 文字: '明日送达' }] },
  { id: 6, title: '智利进口 特大车厘子 500g',    price: '38.80', 单位: '/盒', 利益点: '智利进口｜粒粒饱满',           img: 车厘子Img,   营销: [{ 类型: '折' as const, 文字: '8折' }] },
]

const 疯抢商品数据: 疯抢商品[] = [
  { img: 菠菜卷Img,     price: '7.8',  originalPrice: '16.9' },
  { img: 沙拉Img,       price: '12.8', originalPrice: '22.0' },
  { img: 鸡肉三明治Img, price: '15.8', originalPrice: '28.0' },
  { img: 玉兔抱月Img,   price: '9.9',  originalPrice: '18.8' },
  { img: 蛋饺Img,       price: '6.5',  originalPrice: '14.9' },
]

const 品质之爱瓷片数据 = [
  { label: '寻味中国', img: tabImg1 },
  { label: '有机汇',   img: tabImg2 },
  { label: '澳洲直达', img: tabImg3 },
  { label: '配料干净', img: tabImg4 },
  { label: '减脂',     img: tabImg5 },
]

// ─────────────────────────────────────────────────────────
// 加购飞行动画
// ─────────────────────────────────────────────────────────

type FlyItem = {
  id: number; img: string
  startX: number; startY: number; startW: number; startH: number
  endX: number; endY: number
}

function FlyingItem({ img, startX, startY, startW, startH, endX, endY, onComplete }: FlyItem & { onComplete: () => void }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const duration = 680
    const t0 = performance.now()
    let raf: number

    // 图片中心的起点
    const cx0 = startX + startW / 2
    const cy0 = startY + startH / 2
    const targetSize = 22  // 落点时的尺寸 px

    const tick = (now: number) => {
      const t = Math.min((now - t0) / duration, 1)
      // 缓动：先快后慢（ease-out）
      const ease = 1 - Math.pow(1 - t, 2)

      // 中心坐标：X 线性，Y 线性 + 抛物弧
      const cx = cx0 + (endX - cx0) * ease
      const arc = -Math.sin(Math.PI * t) * Math.min(Math.abs(endY - cy0) * 0.35, 90)
      const cy = cy0 + (endY - cy0) * ease + arc

      // 尺寸从原图大小缩到 targetSize
      const w = startW + (targetSize - startW) * ease
      const h = startH + (targetSize - startH) * ease

      // borderRadius：8px → 50%，用快速曲线在前 30% 时间内基本变成圆
      const rEase = 1 - Math.pow(1 - Math.min(t / 0.3, 1), 2)
      const radius = 8 + (50 - 8) * rEase

      el.style.left         = `${cx - w / 2}px`
      el.style.top          = `${cy - h / 2}px`
      el.style.width        = `${w}px`
      el.style.height       = `${h}px`
      el.style.borderRadius = `${radius}%`
      el.style.opacity      = t > 0.8 ? String(1 - (t - 0.8) / 0.2) : '1'

      if (t < 1) { raf = requestAnimationFrame(tick) } else { onComplete() }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div ref={ref} style={{
      position: 'fixed',
      left: startX, top: startY,
      width: startW, height: startH,
      borderRadius: 8, overflow: 'hidden', transition: 'none',
      pointerEvents: 'none', zIndex: 9999,
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    }}>
      <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  )
}

/** 包裹商品卡片，点击加购时读取图片的真实位置和尺寸 */
function CardWithFly({
  product,
  onAddToCart,
}: {
  product: typeof 瀑布流商品[number]
  onAddToCart: (img: string, rect: DOMRect) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const handleCartClick = () => {
    const imgEl = ref.current?.querySelector<HTMLImageElement>(`img[alt="${product.title}"]`)
    if (!imgEl) return
    onAddToCart(product.img, imgEl.getBoundingClientRect())
  }
  return (
    <div ref={ref}>
      <商品卡片
        布局="双列"
        图片={product.img}
        标题={product.title}
        价格={product.price}
        单位={product.单位}
        利益点={product.利益点}
        营销标签={product.营销}
        onCartClick={handleCartClick}
      />
    </div>
  )
}

// ─────────────────────────────────────────────────────────
// 内联子区块
// ─────────────────────────────────────────────────────────


/** 滚动后状态栏使用的深色图标版（白色背景上） */
function 暗色状态栏() {
  const FONT = 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
  return (
    <div style={{ height: 59, display: 'flex', alignItems: 'stretch', position: 'relative' }}>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ fontFamily: FONT, fontSize: 17, fontWeight: 600, color: '#1A1A1A', letterSpacing: -0.41, lineHeight: '22px' }}>9:41</span>
      </div>
      <div style={{ flexShrink: 0, paddingTop: 10, display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ width: 125, height: 37, backgroundColor: '#000', borderRadius: 100 }} />
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0" y="9" width="3" height="3" rx="1" fill="#1A1A1A"/>
          <rect x="4.5" y="6" width="3" height="6" rx="1" fill="#1A1A1A"/>
          <rect x="9" y="3" width="3" height="9" rx="1" fill="#1A1A1A"/>
          <rect x="13.5" y="0" width="3" height="12" rx="1" fill="#1A1A1A"/>
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <circle cx="8" cy="10.5" r="1.5" fill="#1A1A1A"/>
          <path d="M4.636 7.136a4.95 4.95 0 0 1 6.728 0" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M1.757 4.257a8.485 8.485 0 0 1 12.486 0" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
        <svg width="28" height="13" viewBox="0 0 28 13" fill="none">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="#1A1A1A" strokeOpacity="0.35"/>
          <rect x="2" y="2" width="20" height="9" rx="2" fill="#1A1A1A"/>
          <path d="M25 4.5L25 8.5" stroke="#1A1A1A" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  )
}

/** 滚动后的紧凑搜索栏 */
function 紧凑搜索栏() {
  return (
    <div style={{
      height: 42,
      background: '#FDFEFD',
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      gap: 8,
    }}>
      {/* 左：绿色描边 pill，配送 icon + 时间文字 */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 4,
        border: '1px solid rgba(36,191,84,0.45)',
        borderRadius: 20,
        padding: '0 7px',
        height: 26,
        flexShrink: 0,
      }}>
        <img src={iconDelivery} alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
        <span style={{
          fontSize: 11, color: '#24BF54', lineHeight: '13px',
          fontFamily: 'PingFang SC, sans-serif', whiteSpace: 'nowrap',
        }}>
          可约09:30配送
        </span>
      </div>
      {/* 搜索框 */}
      <div style={{
        flex: 1, height: 28,
        background: '#F2F2F2', borderRadius: 14,
        display: 'flex', alignItems: 'center', padding: '0 8px', gap: 4,
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="6" cy="6" r="4.5" stroke="#ADADAD" strokeWidth="1.3"/>
          <line x1="9.5" y1="9.5" x2="12" y2="12" stroke="#ADADAD" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        <span style={{ fontSize: 12, color: '#C0C0C0', flex: 1, fontFamily: 'PingFang SC, sans-serif', lineHeight: '14px' }}>
          母亲节鲜花
        </span>
      </div>
      {/* 搜索按钮 */}
      <div style={{
        background: '#24BF54', borderRadius: 14,
        height: 28, padding: '0 12px',
        display: 'flex', alignItems: 'center', flexShrink: 0,
      }}>
        <span style={{ fontSize: 13, color: '#fff', fontWeight: 500, fontFamily: 'PingFang SC, sans-serif' }}>
          搜索
        </span>
      </div>
    </div>
  )
}

/** Banner 轮播 */
function Banner区块() {
  return (
    <div style={{ padding: '0 9px', marginTop: 12 }}>
      <div style={{ borderRadius: 9, overflow: 'hidden' }}>
        <img src={bannerImg} alt="Banner" style={{ width: '100%', display: 'block' }} />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────
// 主页面
// ─────────────────────────────────────────────────────────
export function 首页() {
  const [activeTab, setActiveTab] = useState<TabBarTab>('首页')
  const [scrolled, setScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(3)
  const [flyItems, setFlyItems] = useState<FlyItem[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)
  const 搜索栏Ref = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const flyId = useRef(0)

  const handleAddToCart = (img: string, imgRect: DOMRect) => {
    if (!navRef.current) return
    const navRect = navRef.current.getBoundingClientRect()
    const endX = navRect.left + navRect.width * (3.5 / 5)
    const endY = navRect.top + navRect.height * 0.35
    const id = ++flyId.current
    setFlyItems(prev => [...prev, {
      id, img,
      startX: imgRect.left, startY: imgRect.top,
      startW: imgRect.width, startH: imgRect.height,
      endX, endY,
    }])
    setTimeout(() => {
      setCartCount(c => c + 1)
      setFlyItems(prev => prev.filter(f => f.id !== id))
    }, 700)
  }

  // 当搜索栏滚出屏幕顶部时，触发白色吸顶标题栏
  const handleScroll = () => {
    if (!scrollRef.current || !搜索栏Ref.current) return
    const containerTop = scrollRef.current.getBoundingClientRect().top
    const 搜索栏Bottom = 搜索栏Ref.current.getBoundingClientRect().bottom
    setScrolled(搜索栏Bottom <= containerTop)
  }

  // 瀑布流：左右两列
  const 左列 = 瀑布流商品.filter((_, i) => i % 2 === 0)
  const 右列 = 瀑布流商品.filter((_, i) => i % 2 === 1)

  const 底部导航Tabs = [
    { tab: '首页' as TabBarTab },
    { tab: '分类' as TabBarTab },
    { tab: '吃什么' as TabBarTab, displayType: '全图片' as const },
    { tab: '购物车' as TabBarTab, badge: cartCount },
    { tab: '我的' as TabBarTab },
  ]

  return (
    <div
      style={{
        width: 390,
        backgroundColor: '#F5F5F5',
        height: 844,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'PingFang SC, sans-serif',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* 飞行动画元素（fixed，渲染在最顶层） */}
      {flyItems.map(item => (
        <FlyingItem key={item.id} {...item} onComplete={() => {}} />
      ))}

      {/* ── 白色吸顶标题栏（手机框绝对定位，不占滚动布局）
          金刚位触顶时 fade in，不是从屏外滑入                  ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50,
        background: '#FDFEFD',
        opacity: scrolled ? 1 : 0,
        transition: 'opacity 0.25s ease',
        pointerEvents: scrolled ? 'auto' : 'none',
        boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.08)' : 'none',
      }}>
        <暗色状态栏 />
        <紧凑搜索栏 />
      </div>

      {/* ── 可滚动内容区 ── */}
      <div ref={scrollRef} onScroll={handleScroll} className="scrollbar-none"
        style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>

        {/* Hero 区（position:relative + isolation:isolate 保证 hero bg 不穿透） */}
        <div style={{ position: 'relative', isolation: 'isolate' }}>

          {/* Hero 背景图 + 渐变遮罩 */}
          <img src={heroBg} alt=""
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 290,
              objectFit: 'cover', objectPosition: 'center top', zIndex: -1, pointerEvents: 'none' }}
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 290,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 28%, rgba(0,0,0,0) 55%)',
            zIndex: -1, pointerEvents: 'none' }}
          />

          {/* 状态栏（白色图标，随内容滚动；被白色标题栏覆盖后不可见） */}
          <状态栏 />

          {/* 定位 + 搜索：随页面内容一起向上滚走 */}
          <定位 地址="张建创业工坊" 站点="唐镇站" />
          <div ref={搜索栏Ref} style={{ padding: '0 9px', marginTop: 9, marginBottom: 9 }}>
            <div style={{ position: 'relative', height: 32 }}>
              <img src={searchBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', paddingLeft: 11, paddingRight: 4, gap: 6 }}>
                <img src={iconScanner} alt="" style={{ width: 20, height: 20, flexShrink: 0 }} />
                <div style={{ width: 1, height: 18, backgroundColor: 'rgba(0,0,0,0.1)', flexShrink: 0 }} />
                <span style={{ flex: 1, fontSize: 14, lineHeight: '16px', color: '#4D4D4D', fontFamily: 'PingFang SC, sans-serif' }}>有机鸡蛋</span>
                <div style={{ backgroundColor: '#2F2D30', borderRadius: 31.2, width: 50, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 14, color: '#fff', fontFamily: 'PingFang SC, sans-serif' }}>搜索</span>
                </div>
              </div>
            </div>
          </div>

          {/* 叮咚特色 */}
          <div style={{ marginTop: 9 }}>
            <叮咚特色 瓷片列表={品质之爱瓷片数据} />
          </div>

          {/* 金刚位白色面板 */}
          <div style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F5F5F5 100%)', borderRadius: '12px 12px 0 0', marginTop: 9 }}>
            <金刚位
              items={金刚位数据}
              每行列数={5}
              activePage={0}
              totalPages={2}
              style={{ backgroundColor: 'transparent', borderRadius: 0, paddingBottom: 0 }}
            />
          </div>

        </div>

        {/* ── 灰色内容区（Banner + 今日疯抢）── */}
        <div style={{ backgroundColor: '#F5F5F5' }}>
          <Banner区块 />
          <div style={{ marginTop: 9 }}>
            <今日疯抢 场次="14点场" 商品列表={疯抢商品数据} />
          </div>
        </div>

        {/* ── 信息流 瀑布流 ── */}
        <div style={{ backgroundColor: '#F5F5F5', padding: '9px 9px 16px' }}>
          <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {左列.map(p => (
                <CardWithFly key={p.id} product={p} onAddToCart={handleAddToCart} />
              ))}
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {右列.map(p => (
                <CardWithFly key={p.id} product={p} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── 底部导航（ref 用于定位购物车 tab 坐标）── */}
      <div ref={navRef}>
        <底部导航
          tabs={底部导航Tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  )
}
