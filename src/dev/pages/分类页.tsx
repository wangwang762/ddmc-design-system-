/**
 * 分类页 UI Kit 预览
 * Figma: https://www.figma.com/design/AJikPirZmrpaP59L6Gqhnn/DDMC-APP-UI-Kits?node-id=19364-84030
 *
 * 布局：顶部绿色渐变区（状态栏+搜索+一级分类）→ 左侧二级导航 + 右侧内容（三级标签+排序+商品列表）→ 底部导航
 */
import React, { useState, useRef } from 'react'
import { 商品卡片 } from '../../components/商品卡片'
import type { 营销标签 } from '../../components/商品卡片'
import { 底部导航 } from '../../components/底部导航'
import type { TabBarTab } from '../../components/底部导航'

// ── 一级分类图标：normal ──────────────────────────────────────
import n蔬菜豆制品 from './分类页/assets/normal/蔬菜豆制品.png'
import n肉禽蛋     from './分类页/assets/normal/肉禽蛋.png'
import n水产海鲜   from './分类页/assets/normal/水产海鲜.png'
import n水果鲜花   from './分类页/assets/normal/水果鲜花.png'
import n乳品烘焙   from './分类页/assets/normal/乳品烘焙.png'
import n熟食卤味   from './分类页/assets/normal/熟食卤味.png'
import n快手菜     from './分类页/assets/normal/快手菜.png'
import n速食冻品   from './分类页/assets/normal/速食冻品.png'
import n粮油调味   from './分类页/assets/normal/粮油调味.png'
import n酒水饮料   from './分类页/assets/normal/酒水饮料.png'
import n火锅到家   from './分类页/assets/normal/火锅到家.png'
import n个护清洁   from './分类页/assets/normal/个护清洁.png'

// ── 一级分类图标：selected ────────────────────────────────────
import s蔬菜豆制品 from './分类页/assets/selected/蔬菜豆制品.png'
import s肉禽蛋     from './分类页/assets/selected/肉禽蛋.png'
import s水产海鲜   from './分类页/assets/selected/水产海鲜.png'
import s水果鲜花   from './分类页/assets/selected/水果鲜花.png'
import s乳品烘焙   from './分类页/assets/selected/乳品烘焙.png'
import s熟食卤味   from './分类页/assets/selected/熟食卤味.png'
import s快手菜     from './分类页/assets/selected/快手菜.png'
import s速食冻品   from './分类页/assets/selected/速食冻品.png'
import s粮油调味   from './分类页/assets/selected/粮油调味.png'
import s酒水饮料   from './分类页/assets/selected/酒水饮料.png'
import s火锅到家   from './分类页/assets/selected/火锅到家.png'
import s个护清洁   from './分类页/assets/selected/个护清洁.png'
import iconSearch   from './分类页/assets/icon-search.svg'
import arrowSelected    from './分类页/assets/arrow-selected.svg'
import iconSpreadLines  from './分类页/assets/icon-spread-lines.svg'
import iconSpreadDot    from './分类页/assets/icon-spread-dot.svg'
import allBtnOverlay    from './分类页/assets/all-btn-overlay.svg'

// ── 商品图库 ─────────────────────────────────────────────────
import 茼蒿Img       from '../../../商品图/信息流商品图/1.png'
import 生蚝Img       from '../../../商品图/信息流商品图/4.png'
import 白馒头Img     from '../../../商品图/自有品牌/良芯匠人/01.png'
import 菠菜卷Img     from '../../../商品图/自有品牌/良芯匠人/02.png'
import 沙拉Img       from '../../../商品图/自有品牌/叮咚好食光/01.png'
import 麻酱凉皮Img   from '../../../商品图/自有品牌/叮咚好食光/02.png'
import 鸡肉三明治Img from '../../../商品图/自有品牌/叮咚好食光/03.png'
import 蛋饺Img       from '../../../商品图/自有品牌/蔡长青/01.png'

const FONT = 'PingFang SC, sans-serif'

// ── 一级分类数据 ──────────────────────────────────────────────
const 一级分类列表 = [
  { label: '蔬菜豆制品', normal: n蔬菜豆制品, selected: s蔬菜豆制品 },
  { label: '肉禽蛋',     normal: n肉禽蛋,     selected: s肉禽蛋 },
  { label: '水产海鲜',   normal: n水产海鲜,   selected: s水产海鲜 },
  { label: '水果鲜花',   normal: n水果鲜花,   selected: s水果鲜花 },
  { label: '乳品烘焙',   normal: n乳品烘焙,   selected: s乳品烘焙 },
  { label: '熟食卤味',   normal: n熟食卤味,   selected: s熟食卤味 },
  { label: '快手菜',     normal: n快手菜,     selected: s快手菜 },
  { label: '速食冻品',   normal: n速食冻品,   selected: s速食冻品 },
  { label: '粮油调味',   normal: n粮油调味,   selected: s粮油调味 },
  { label: '酒水饮料',   normal: n酒水饮料,   selected: s酒水饮料 },
  { label: '火锅到家',   normal: n火锅到家,   selected: s火锅到家 },
  { label: '个护清洁',   normal: n个护清洁,   selected: s个护清洁 },
]

// ── 二级分类（以"水产海鲜"为例）───────────────────────────────
const 二级分类列表 = [
  '推荐', '新品', '活鲜', '虾蟹', '贝类', '鱼类',
  '海产干货', '腌制熏制', '高端海鲜', '刺身', '进口', '冷冻水产',
]

// ── 三级分类 ─────────────────────────────────────────────────
const 三级分类列表 = ['崇明好菜', '绿叶蔬菜', '土豆/培根', '番茄/培根']

// ── 商品数据 ─────────────────────────────────────────────────
interface 商品数据Item {
  img: string
  title: string
  price: string
  unit: string
  benefit?: string
  tags?: 营销标签[]
  orderCount?: string
  star?: boolean
}

const 商品列表数据: 商品数据Item[] = [
  {
    img: 茼蒿Img,
    title: '上海崇明本地茼蒿 200g',
    price: '6.90',
    unit: '/份',
    benefit: '新鲜采摘｜无农残认证｜产地直发',
    tags: [{ 类型: '绿色底', 文字: '当日达' }],
  },
  {
    img: 生蚝Img,
    title: '大连鲜活生蚝 6颗/盒',
    price: '29.90',
    unit: '/盒',
    benefit: '野生捕捞｜鲜活直达｜高蛋白低脂',
    tags: [{ 类型: '绿色底', 文字: '明日达' }, { 类型: '省', 文字: '省3元' }],
    orderCount: '2.1万人已下单',
  },
  {
    img: 白馒头Img,
    title: '良芯匠人鲜嫩白馒头 4个装',
    price: '8.80',
    unit: '/袋',
    benefit: '无添加｜松软可口｜现做现发',
    tags: [{ 类型: '粉红底', 文字: '特惠' }],
    star: true,
  },
  {
    img: 菠菜卷Img,
    title: '良芯匠人菠菜花卷 4个装',
    price: '12.80',
    unit: '/袋',
    benefit: '天然菠菜汁｜无添加色素',
    tags: [{ 类型: '省', 文字: '省1.2元' }],
  },
  {
    img: 沙拉Img,
    title: '叮咚好食光轻食沙拉 350g',
    price: '19.90',
    unit: '/份',
    benefit: '低卡健康｜营养均衡｜即食方便',
    tags: [{ 类型: '绿色底', 文字: '当日达' }],
    orderCount: '5600人已下单',
  },
  {
    img: 麻酱凉皮Img,
    title: '叮咚好食光麻酱凉皮 250g',
    price: '14.90',
    unit: '/份',
    benefit: '手工制作｜酱香浓郁｜开袋即食',
    tags: [{ 类型: '绿色底', 文字: '当日达' }],
  },
  {
    img: 鸡肉三明治Img,
    title: '叮咚好食光鸡肉三明治',
    price: '16.80',
    unit: '/个',
    benefit: '全麦面包｜鲜嫩鸡胸｜健康轻食',
    tags: [{ 类型: '近N天低价', 文字: '近14天低价' }],
    star: true,
  },
  {
    img: 蛋饺Img,
    title: '蔡长青手工蛋饺 约500g',
    price: '38.80',
    unit: '/袋',
    benefit: '现包现发｜猪肉馅心｜弹嫩蛋皮',
    tags: [{ 类型: '绿色底', 文字: '当日达' }],
    orderCount: '8900人已下单',
  },
]

// ── 暗色状态栏（浅色背景使用深色图标）────────────────────────
function 暗色状态栏() {
  const DARK = '#1A1A1A'
  return (
    <div style={{ height: 59, display: 'flex', alignItems: 'stretch', position: 'relative' }}>
      {/* 左：时间 */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif', fontSize: 17, fontWeight: 600, color: DARK, letterSpacing: -0.41, lineHeight: '22px' }}>
          9:41
        </span>
      </div>
      {/* 中：Dynamic Island */}
      <div style={{ flexShrink: 0, paddingTop: 10, display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ width: 125, height: 37, backgroundColor: '#000', borderRadius: 100 }} />
      </div>
      {/* 右：信号+WiFi+电池 */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
        {/* 信号 */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0"    y="9" width="3" height="3"  rx="1" fill={DARK}/>
          <rect x="4.5"  y="6" width="3" height="6"  rx="1" fill={DARK}/>
          <rect x="9"    y="3" width="3" height="9"  rx="1" fill={DARK}/>
          <rect x="13.5" y="0" width="3" height="12" rx="1" fill={DARK}/>
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <circle cx="8" cy="10.5" r="1.5" fill={DARK}/>
          <path d="M4.636 7.136a4.95 4.95 0 0 1 6.728 0" stroke={DARK} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M1.757 4.257a8.485 8.485 0 0 1 12.486 0" stroke={DARK} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        {/* 电池 */}
        <svg width="28" height="13" viewBox="0 0 28 13" fill="none">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={DARK} strokeOpacity="0.35"/>
          <rect x="2"   y="2"   width="20" height="9"  rx="2"   fill={DARK}/>
          <path d="M25 4.5L25 8.5" stroke={DARK} strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  )
}

// ── 主组件 ────────────────────────────────────────────────────
export function 分类页({ onNavigate }: { onNavigate?: (tab: string) => void } = {}) {
  const [selected一级, setSelected一级] = useState(2) // 水产海鲜
  const [selected二级, setSelected二级] = useState(1) // 新品
  const [selected三级, setSelected三级] = useState(0) // 崇明好菜
  const [activeTab, setActiveTab] = useState<TabBarTab>('分类')
  const [tabScrollX, setTabScrollX] = useState(0)
  const tabScrollRef = useRef<HTMLDivElement>(null)

  // 小箭头水平中心 = paddingLeft(7) + 选中tab索引 * tab宽(61) + 半tab宽(30.5) - 横向滚动量
  const 箭头CenterX = Math.max(10, Math.min(380, 7 + selected一级 * 61 + 30.5 - tabScrollX))

  const 底部导航Tabs = [
    { tab: '首页'   as TabBarTab },
    { tab: '分类'   as TabBarTab },
    { tab: '吃什么' as TabBarTab, displayType: '全图片' as const },
    { tab: '购物车' as TabBarTab },
    { tab: '我的'   as TabBarTab },
  ]

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', background: '#fff', overflow: 'hidden' }}>

      {/* 小箭头：标签底(171) + 3px间距 = top:174，底边(180)紧贴面板顶 */}
      <img
        src={arrowSelected}
        alt=""
        style={{
          position: 'absolute',
          top: 174,
          left: 箭头CenterX - 10,
          width: 20, height: 6,
          zIndex: 10,
          transition: 'left 0.15s ease',
          pointerEvents: 'none',
          display: 'block',
        }}
      />

      {/* ── 顶部绿色渐变背景 ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 180,
        background: 'linear-gradient(153deg, #E1FCEC 0%, #FFE9ED 102%)',
        zIndex: 0,
      }} />

      {/* ── 顶部区域（不随内容滚动）── */}
      <div style={{ position: 'relative', zIndex: 2, flexShrink: 0 }}>

        {/* 状态栏（深色图标） */}
        <暗色状态栏 />

        {/* 搜索栏 */}
        <div style={{ height: 42, padding: '5px 9px', boxSizing: 'border-box' }}>
          <div style={{
            height: 32, background: '#fff', borderRadius: 32,
            display: 'flex', alignItems: 'center', gap: 6, padding: '0 9px',
          }}>
            <img src={iconSearch} alt="" style={{ width: 16, height: 16, flexShrink: 0 }} />
            <span style={{ fontSize: 14, color: '#808080', fontFamily: FONT, lineHeight: '16px' }}>
              请输入商品名称
            </span>
          </div>
        </div>

        {/* 一级分类横向滚动 */}
        <div style={{ position: 'relative', height: 70 }}>
          <div
            ref={tabScrollRef}
            onScroll={e => setTabScrollX((e.currentTarget as HTMLDivElement).scrollLeft)}
            style={{
              display: 'flex', overflowX: 'auto', scrollbarWidth: 'none',
              paddingLeft: 7, paddingRight: 44, height: 70,
              paddingTop: 3, boxSizing: 'border-box',
            }}
          >
            {一级分类列表.map((item, i) => {
              const isSelected = i === selected一级
              return (
                <button
                  key={item.label}
                  onClick={() => setSelected一级(i)}
                  style={{
                    flexShrink: 0, width: 61, height: 67,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'flex-end',
                    gap: 4, paddingBottom: 0,
                    border: 'none', background: 'none', cursor: 'pointer', padding: 0,
                  }}
                >
                  {/* 图标区：固定高 45px 容器，图标底部对齐 — 选中 45px 撑满，未选中 39px 留 6px 上空 */}
                  <div style={{
                    width: 61, height: 45, flexShrink: 0,
                    display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                  }}>
                    <img
                      src={isSelected ? item.selected : item.normal}
                      alt=""
                      style={{
                        width: isSelected ? 45 : 39,
                        height: isSelected ? 45 : 39,
                        objectFit: 'contain',
                        display: 'block',
                        transition: 'width 0.15s, height 0.15s',
                      }}
                    />
                  </div>
                  {/* 文字标签：固定高 16px 容器，选中绿色 pill */}
                  <div style={{
                    height: 16, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '0 4px', borderRadius: 30,
                    background: isSelected ? '#00B740' : 'transparent',
                  }}>
                    <span style={{
                      fontSize: 11, fontWeight: 500, lineHeight: '14px',
                      fontFamily: FONT, whiteSpace: 'nowrap',
                      color: isSelected ? '#fff' : '#1A1A1A',
                    }}>
                      {item.label}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* 全部按钮（固定在右侧）：切图背景 + 竖排文字 + Spread 图标 */}
          <div style={{ position: 'absolute', right: 0, top: 0, height: 70, width: 33 }}>
            {/* 切图背景：铺满容器 */}
            <img src={allBtnOverlay} alt="" style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
            }} />
            {/* 文字 + 图标（相对定位居中偏右） */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              paddingTop: 10, zIndex: 1,
            }}>
              <span style={{ fontSize: 12, color: '#00B740', fontFamily: FONT, lineHeight: '14px', fontWeight: 500 }}>全</span>
              <span style={{ fontSize: 12, color: '#00B740', fontFamily: FONT, lineHeight: '14px', fontWeight: 500 }}>部</span>
              <div style={{ position: 'relative', width: 14, height: 12, marginTop: 4 }}>
                <img src={iconSpreadLines} alt="" style={{ position: 'absolute', width: 11, height: 9, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
                <img src={iconSpreadDot}   alt="" style={{ position: 'absolute', width: 4, height: 2, left: 'calc(50% + 4.5px)', top: 'calc(50% + 5px)', transform: 'translate(-50%, -50%)' }} />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 间距层：透明，让渐变露出，箭头就在这里可见；高度=箭头高6+间距3=9 */}
      <div style={{ height: 9, flexShrink: 0, zIndex: 1, position: 'relative' }} />

      {/* ── 主内容区（左侧二级导航 + 右侧内容独立滚动）── */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', position: 'relative', zIndex: 1, background: '#fff' }}>

        {/* 二级导航 */}
        <div style={{
          width: 85, flexShrink: 0, background: '#FAFAFA',
          overflowY: 'auto', scrollbarWidth: 'none',
        }}>
          {二级分类列表.map((item, i) => {
            const isSel = i === selected二级
            return (
              <button
                key={item}
                onClick={() => setSelected二级(i)}
                style={{
                  width: '100%', height: 48, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', border: 'none', cursor: 'pointer',
                  background: isSel ? '#fff' : 'transparent',
                  position: 'relative',
                  boxShadow: isSel ? '-1px 5px 14px -14px rgba(0,0,0,0.38)' : 'none',
                }}
              >
                {/* 左侧绿色竖条 */}
                {isSel && (
                  <div style={{
                    position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                    width: 3, height: 24, background: '#00B740',
                    borderRadius: '0 2px 2px 0',
                  }} />
                )}
                <span style={{
                  fontSize: 12, lineHeight: '14px', fontFamily: FONT,
                  textAlign: 'center', padding: '0 5px',
                  color: isSel ? '#00B740' : '#1A1A1A',
                  fontWeight: isSel ? 500 : 400,
                }}>
                  {item}
                </span>
              </button>
            )
          })}
        </div>

        {/* 右侧内容列 */}
        <div style={{
          flex: 1, background: '#fff',
          overflowY: 'auto', scrollbarWidth: 'none',
          display: 'flex', flexDirection: 'column',
        }}>

          {/* 三级分类标签（sticky）*/}
          <div style={{
            position: 'sticky', top: 0, zIndex: 5, background: '#fff',
            height: 40, display: 'flex', alignItems: 'center',
            borderRadius: '12px 0 0 0', flexShrink: 0,
          }}>
            <div style={{
              flex: 1, display: 'flex', gap: 6,
              padding: '0 0 0 9px', overflowX: 'auto', scrollbarWidth: 'none',
              alignItems: 'center',
            }}>
              {三级分类列表.map((tag, i) => {
                const isActive = i === selected三级
                return (
                  <button
                    key={tag}
                    onClick={() => setSelected三级(i)}
                    style={{
                      flexShrink: 0, height: 22, padding: '0 8px', borderRadius: 3, border: 'none',
                      cursor: 'pointer', display: 'flex', alignItems: 'center',
                      background: isActive ? '#F2FBF5' : '#F5F5F5',
                    }}
                  >
                    <span style={{
                      fontSize: 11, lineHeight: '14px', fontFamily: FONT, whiteSpace: 'nowrap',
                      color: isActive ? '#00B740' : '#1A1A1A',
                    }}>
                      {tag}
                    </span>
                  </button>
                )
              })}
            </div>
            {/* 展开箭头 */}
            <div style={{
              flexShrink: 0, width: 33, height: 40, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path d="M1 1L6 6L11 1" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* 排序栏（sticky，贴在三级分类下方）*/}
          <div style={{
            position: 'sticky', top: 40, zIndex: 4, background: '#fff',
            height: 32, display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', padding: '0 9px',
            borderBottom: '0.5px solid #F5F5F5', flexShrink: 0,
          }}>
            <span style={{ fontSize: 12, color: '#4D4D4D', fontFamily: FONT, lineHeight: '14px' }}>
              崇明好菜
            </span>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <button style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '9px 0' }}>
                <span style={{ fontSize: 12, color: '#4D4D4D', fontFamily: FONT, lineHeight: '14px' }}>
                  销量
                </span>
              </button>
              <button style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '9px 0', display: 'flex', alignItems: 'center', gap: 3 }}>
                <span style={{ fontSize: 12, color: '#4D4D4D', fontFamily: FONT, lineHeight: '14px' }}>
                  价格
                </span>
                {/* 排序三角图标 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <svg width="4" height="3" viewBox="0 0 4 3">
                    <path d="M0 3L2 0L4 3H0Z" fill="#B3B3B3"/>
                  </svg>
                  <svg width="4" height="3" viewBox="0 0 4 3">
                    <path d="M0 0L2 3L4 0H0Z" fill="#00B740"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* 商品列表 */}
          <div>
            {商品列表数据.map((p, i) => (
              <商品卡片
                key={i}
                布局="单列"
                图片={p.img}
                标题={p.title}
                价格={p.price}
                单位={p.unit}
                星级={p.star}
                利益点={p.benefit}
                营销标签={p.tags}
                下单数={p.orderCount}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── 底部导航 ── */}
      <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
        <底部导航
          tabs={底部导航Tabs}
          activeTab={activeTab}
          onTabChange={(tab) => { setActiveTab(tab); onNavigate?.(tab) }}
        />
      </div>
    </div>
  )
}
