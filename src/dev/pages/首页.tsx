/**
 * 首页 UI Kit 预览
 * Figma: https://www.figma.com/design/AJikPirZmrpaP59L6Gqhnn/DDMC-APP-UI-Kits?node-id=19356-26329
 *
 * ✅ 复用组件：定位 / 叮咚特色品质之爱 / 金刚位 / 商品卡片(双列) / 底部导航
 * 🔧 内联区块（待拆）：搜索栏 / Banner / 今日疯抢
 */
import React, { useState } from 'react'

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
import searchBg    from './首页/assets/search-bg.svg'
import iconScanner from './首页/assets/icon-scanner.svg'
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

const 底部导航Tabs = [
  { tab: '首页' as TabBarTab },
  { tab: '分类' as TabBarTab },
  { tab: '吃什么' as TabBarTab, displayType: '全图片' as const },
  { tab: '购物车' as TabBarTab, badge: 3 },
  { tab: '我的' as TabBarTab },
]

// ─────────────────────────────────────────────────────────
// 内联子区块
// ─────────────────────────────────────────────────────────

/** 搜索栏 — 扫码图标 + placeholder文字 + 搜索按钮 */
function 搜索栏区块() {
  return (
    <div style={{ padding: '0 9px', marginTop: 9 }}>
      <div style={{ position: 'relative', height: 32 }}>
        <img src={searchBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
          paddingLeft: 11, paddingRight: 4, gap: 6,
        }}>
          <img src={iconScanner} alt="" style={{ width: 20, height: 20, flexShrink: 0 }} />
          {/* 竖分割线 */}
          <div style={{ width: 1, height: 18, backgroundColor: 'rgba(0,0,0,0.1)', flexShrink: 0 }} />
          <span style={{ flex: 1, fontSize: 14, lineHeight: '16px', color: '#4D4D4D', fontFamily: 'PingFang SC, sans-serif' }}>
            有机鸡蛋
          </span>
          <div style={{
            backgroundColor: '#2F2D30', borderRadius: 31.2,
            width: 50, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <span style={{ fontSize: 14, lineHeight: '16px', color: '#fff', fontFamily: 'PingFang SC, sans-serif' }}>
              搜索
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Banner 轮播（暂用渐变占位） */
function Banner区块() {
  return (
    <div style={{ padding: '0 9px', marginTop: 9 }}>
      <div style={{
        height: 83, borderRadius: 9, overflow: 'hidden',
        background: 'linear-gradient(135deg, #FF6F31 0%, #FF3133 50%, #FF5F5F 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ fontSize: 16, color: '#fff', fontFamily: 'PingFang SC, sans-serif', fontWeight: 500, opacity: 0.6 }}>
          广告横幅 Banner
        </span>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────
// 主页面
// ─────────────────────────────────────────────────────────
export function 首页() {
  const [activeTab, setActiveTab] = useState<TabBarTab>('首页')

  // 瀑布流：左右两列
  const 左列 = 瀑布流商品.filter((_, i) => i % 2 === 0)
  const 右列 = 瀑布流商品.filter((_, i) => i % 2 === 1)

  return (
    <div style={{
      width: 390, margin: '0 auto',
      backgroundColor: '#F5F5F5',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'PingFang SC, sans-serif',
      overflow: 'hidden',
    }}>
      {/* ── 可滚动内容区 ───────────────────────────────── */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>

        {/* ══════════════════════════════════════════════
            Hero + 叮咚特色 + 金刚位
            hero 图 + 渐变遮罩用 z-index:-1 绝对定位沉底，
            普通流内容（叮咚特色、白色面板）自然浮在上层。
            isolation:isolate 确保 z-index:-1 不穿透到父容器外。
            ══════════════════════════════════════════════ */}
        <div style={{ position: 'relative', isolation: 'isolate' }}>

          {/* Hero 背景图：objectFit cover 保持原始比例，不拉伸 */}
          <img
            src={heroBg}
            alt=""
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%',
              height: 290,
              objectFit: 'cover',
              objectPosition: 'center top',
              zIndex: -1,
            }}
          />
          {/* 暗色渐变遮罩：提升定位 / 搜索文字可读性 */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%',
            height: 290,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 28%, rgba(0,0,0,0) 55%)',
            zIndex: -1,
          }} />

          {/* ✅ 状态栏 */}
          <状态栏 />

          {/* ✅ 定位组件 */}
          <定位 地址="张建创业工坊" 站点="唐镇站" />

          {/* 搜索栏 */}
          <搜索栏区块 />

          {/* ✅ 叮咚特色品质之爱（在底图上，无白底） */}
          <叮咚特色 瓷片列表={品质之爱瓷片数据} />

          {/* ─── 白色渐变面板：仅包裹金刚位 ──────────────────
              接在叮咚特色下方，压住底图；
              marginTop:9 → 叮咚特色瓷片底部与白色面板之间留 9px 背景露出（Figma 量值）
              顶部白色向下渐变到 #F5F5F5，与灰底无缝衔接。
              ─────────────────────────────────────────────── */}
          <div style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #F5F5F5 100%)',
            borderRadius: '12px 12px 0 0',
            marginTop: 9,
          }}>
            {/* ✅ 金刚位（5×3：前2行标准 48px，第3行小 38px） */}
            <金刚位
              items={金刚位数据}
              每行列数={5}
              activePage={0}
              totalPages={2}
              style={{ backgroundColor: 'transparent', borderRadius: 0 }}
            />
          </div>

        </div>

        {/* ── 灰色内容区（Banner + 今日疯抢 + 信息流）── */}
        <div style={{ backgroundColor: '#F5F5F5' }}>
          <Banner区块 />

          {/* ✅ 今日疯抢 */}
          <div style={{ marginTop: 9 }}>
            <今日疯抢 场次="14点场" 商品列表={疯抢商品数据} />
          </div>
        </div>

        {/* ── 信息流 瀑布流 ────────────────────────────── */}
        <div style={{ backgroundColor: '#F5F5F5', padding: '9px 9px 16px' }}>
          {/* 双列瀑布流 ✅ 复用 商品卡片(双列) */}
          <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {左列.map(p => (
                <商品卡片
                  key={p.id}
                  布局="双列"
                  图片={p.img}
                  标题={p.title}
                  价格={p.price}
                  单位={p.单位}
                  利益点={p.利益点}
                  营销标签={p.营销}
                />
              ))}
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {右列.map(p => (
                <商品卡片
                  key={p.id}
                  布局="双列"
                  图片={p.img}
                  标题={p.title}
                  价格={p.price}
                  单位={p.单位}
                  利益点={p.利益点}
                  营销标签={p.营销}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── 底部导航 ✅ 始终固定在底部，无需 fixed ─── */}
      <底部导航
        tabs={底部导航Tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  )
}
