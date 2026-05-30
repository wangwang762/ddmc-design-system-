import React, { useState } from 'react'
import 菜豆制品Img from '../components/金刚位/assets/菜豆制品.png'
import 肉禽蛋Img from '../components/金刚位/assets/肉禽蛋.png'
import 水产海鲜Img from '../components/金刚位/assets/水产海鲜.png'
import 水果鲜花Img from '../components/金刚位/assets/水果鲜花.png'
import 饮品烘焙Img from '../components/金刚位/assets/饮品烘焙.png'
import 熟食卤味Img from '../components/金刚位/assets/熟食卤味.png'
import 快手菜Img from '../components/金刚位/assets/快手菜.png'
import 速食冻品Img from '../components/金刚位/assets/速食冻品.png'
import 粮油调味Img from '../components/金刚位/assets/粮油调味.png'
import 酒水饮料Img from '../components/金刚位/assets/酒水饮料.png'
import 火锅到家Img from '../components/金刚位/assets/火锅到家.png'
import 个护清洁Img from '../components/金刚位/assets/个护清洁.png'
import 一日五餐Img from '../components/金刚位/assets/一日五餐.png'
import 滋补好物Img from '../components/金刚位/assets/滋补好物.png'
import 宝妈严选Img from '../components/金刚位/assets/宝妈严选.png'
import 一周一花Img from '../components/金刚位/assets/一周一花.png'
import 日日鲜Img from '../components/金刚位/assets/日日鲜.png'
import 营养早餐Img from '../components/金刚位/assets/营养早餐.png'
import { 商品卡片 } from '../components/商品卡片'
import { 标题前标签 } from '../components/标题前标签'
import { 按钮 } from '../components/按钮'
import { 购物车按钮 } from '../components/购物车按钮'
import { 加减号 } from '../components/加减号'
import { 标签 } from '../components/标签'
import { 徽标 } from '../components/徽标'
import { 选择按钮 } from '../components/选择按钮'
import { 开关 } from '../components/开关'
import { 步进器 } from '../components/步进器'
import { 弹窗 } from '../components/弹窗'
import { 底部导航, TabIcon首页, TabIcon分类, TabIcon吃什么, TabIcon榜单, TabIcon购物车, TabIcon我的, TabIconAI } from '../components/底部导航'
import type { TabBarTab } from '../components/底部导航'
import { GroupedRow, 活动条 } from '../components/Cell'
import { 选项卡 } from '../components/选项卡'
import { 分段筛选器 } from '../components/分段筛选器'
import type { 分段排序状态 } from '../components/分段筛选器'
import { TitleBar } from '../components/标题栏'
import { 金刚位 } from '../components/金刚位'
import { Toast } from '../components/Toast'
import type { Toast类型 } from '../components/Toast'
import { 定位 } from '../components/定位'
import { 叮咚特色 } from '../components/叮咚特色'
import tabImg1 from './pages/首页/assets/tab-img-1.png'
import tabImg2 from './pages/首页/assets/tab-img-2.png'
import tabImg3 from './pages/首页/assets/tab-img-3.png'
import tabImg4 from './pages/首页/assets/tab-img-4.png'
import tabImg5 from './pages/首页/assets/tab-img-5.png'

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-2">
    <span className="text-[11px] text-[#808080]">{label}</span>
    <div className="flex flex-wrap items-center gap-3">{children}</div>
  </div>
)

const Section = ({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) => (
  <section id={id} style={{ marginBottom: '32px' }}>
    <h2 style={{ fontSize: '13px', color: '#4D4D4D', marginBottom: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
      {title}
    </h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {children}
    </div>
  </section>
)

const GroupHeader = ({ title }: { title: string }) => (
  <div style={{
    fontSize: 11,
    fontWeight: 700,
    color: '#808080',
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    marginBottom: 20,
    marginTop: 8,
    paddingBottom: 10,
    borderBottom: '1px solid #DCDCDC',
  }}>
    {title}
  </div>
)

export const App: React.FC = () => {
  const [qty, setQty] = useState(1)
  const [qty2, setQty2] = useState(99)
  const [radio默认, setRadio默认] = useState<'未选中' | '选中'>('未选中')
  const [radio绿卡, setRadio绿卡] = useState<'未选中' | '选中'>('未选中')
  const [switch大, setSwitch大] = useState(false)
  const [switch中, setSwitch中] = useState(false)
  const [switch小, setSwitch小] = useState(true)
  const [stepper大Count, setStepper大Count] = useState(10)
  const [stepper小Count, setStepper小Count] = useState(10)
  // 弹窗状态
  const [dialog反馈, setDialog反馈] = useState(false)
  const [dialog确认, setDialog确认] = useState(false)
  const [dialog警示, setDialog警示] = useState(false)
  const [dialog多按钮, setDialog多按钮] = useState(false)
  const [dialog输入, setDialog输入] = useState(false)
  const [dialog长文字, setDialog长文字] = useState(false)
  const [dialogInput, setDialogInput] = useState('')
  // Toast 状态
  const [toast类型, setToast类型] = useState<Toast类型>('基础')
  const [toastVisible, setToastVisible] = useState(false)
  const toastContentMap: Record<Toast类型, string> = {
    基础: '提前加购成功，商品到货后可在购物车直接下单',
    成功: '操作成功',
    错误: '操作失败，请重试',
    警告: '库存不足',
    加载: '加载中...',
  }
  const showToast = (t: Toast类型) => { setToast类型(t); setToastVisible(true) }
  // 底部导航状态
  const [activeTab4, setActiveTab4] = useState<TabBarTab>('首页')
  const [activeTab5, setActiveTab5] = useState<TabBarTab>('吃什么')
  // 分段筛选器状态
  const [seg活动key, setSeg活动key] = useState('综合')
  const [seg排序, setSeg排序] = useState<分段排序状态>('默认')
  // 选项卡状态
  const [tab二列, setTab二列] = useState('tab1')
  const [tab三列, setTab三列] = useState('tab1')
  const [tab四列, setTab四列] = useState('tab2')
  const [tab五列, setTab五列] = useState('tab3')
  const [tab滚动, setTab滚动] = useState('tab1')
  const [tab竖向, setTab竖向] = useState('tab1')

  return (
    <div style={{ padding: '40px', backgroundColor: '#F5F5F5', minHeight: '100vh', fontFamily: 'PingFang SC, sans-serif' }}>

      {/* ════════════════ 基础操作 ════════════════ */}
      <GroupHeader title="基础操作" />

      {/* ── 按钮 Primary ─────────────────────────────── */}
      <Section title="按钮 / Primary" id="sec-btn-primary">
        <Row label="XLarge">
          <按钮 尺寸="XLarge" 类型="Primary">按钮文案</按钮>
        </Row>
        <Row label="Large">
          <按钮 尺寸="Large" 类型="Primary">按钮文案</按钮>
        </Row>
        <Row label="Medium">
          <按钮 尺寸="Medium" 类型="Primary">按钮文案</按钮>
        </Row>
        <Row label="Small">
          <按钮 尺寸="Small" 类型="Primary">按钮文案</按钮>
        </Row>
        <Row label="Disabled">
          <按钮 尺寸="XLarge" 类型="Primary" disabled>按钮文案</按钮>
        </Row>
        <Row label="自适应=False (w-full, 300px container)">
          <div style={{ width: '300px' }}>
            <按钮 尺寸="XLarge" 类型="Primary" 自适应={false}>按钮文案</按钮>
          </div>
        </Row>
      </Section>

      {/* ── 按钮 Secondary ─────────────────────────── */}
      <Section title="按钮 / Secondary" id="sec-btn-secondary">
        <Row label="XLarge">
          <按钮 尺寸="XLarge" 类型="Secondary">按钮文案</按钮>
        </Row>
        <Row label="Large">
          <按钮 尺寸="Large" 类型="Secondary">按钮文案</按钮>
        </Row>
        <Row label="Medium">
          <按钮 尺寸="Medium" 类型="Secondary">按钮文案</按钮>
        </Row>
        <Row label="Small">
          <按钮 尺寸="Small" 类型="Secondary">按钮文案</按钮>
        </Row>
        <Row label="Disabled">
          <按钮 尺寸="XLarge" 类型="Secondary" disabled>按钮文案</按钮>
        </Row>
      </Section>

      {/* ── 购物车按钮 ─────────────────────────────── */}
      <Section title="Button / 购物车" id="sec-cart-btn">
        <Row label="26px — 三种状态">
          <购物车按钮 尺寸="26px" 按钮状态="默认" badge={1} />
          <购物车按钮 尺寸="26px" 按钮状态="缺货加购" badge={1} />
          <购物车按钮 尺寸="26px" 按钮状态="不可选中" />
        </Row>
        <Row label="22px — 三种状态">
          <购物车按钮 尺寸="22px" 按钮状态="默认" badge={1} />
          <购物车按钮 尺寸="22px" 按钮状态="缺货加购" badge={1} />
          <购物车按钮 尺寸="22px" 按钮状态="不可选中" />
        </Row>
        <Row label="18px — 三种状态">
          <购物车按钮 尺寸="18px" 按钮状态="默认" badge={1} />
          <购物车按钮 尺寸="18px" 按钮状态="缺货加购" badge={1} />
          <购物车按钮 尺寸="18px" 按钮状态="不可选中" />
        </Row>
        <Row label="Badge 数字">
          <购物车按钮 尺寸="26px" 按钮状态="默认" badge={5} />
          <购物车按钮 尺寸="26px" 按钮状态="默认" badge={99} />
          <购物车按钮 尺寸="26px" 按钮状态="默认" badge={100} />
          <购物车按钮 尺寸="26px" 按钮状态="默认" />
        </Row>
      </Section>

      {/* ── 加减号 ─────────────────────────────────── */}
      <Section title="加减号 (Quantity Stepper)" id="sec-qty">
        <Row label="加减号 (interactive)">
          <加减号
            count={qty}
            onDecrement={() => setQty(q => Math.max(1, q - 1))}
            onIncrement={() => setQty(q => q + 1)}
          />
        </Row>
        <Row label="加减号（加号不可点击）">
          <加减号
            count={qty2}
            onDecrement={() => setQty2(q => Math.max(1, q - 1))}
            onIncrement={() => setQty2(q => q + 1)}
            加号可点击={false}
          />
        </Row>
      </Section>

      {/* ── 选择按钮 ────────────────────────────────── */}
      <Section title="选择按钮 (Radio Button)" id="sec-radio">
        <Row label="默认 — 三种状态">
          <选择按钮 状态="未选中" 类型="默认" />
          <选择按钮 状态="选中" 类型="默认" />
          <选择按钮 状态="不可选" 类型="默认" />
        </Row>
        <Row label="绿卡 — 三种状态">
          <选择按钮 状态="未选中" 类型="绿卡" />
          <选择按钮 状态="选中" 类型="绿卡" />
          <选择按钮 状态="不可选" 类型="绿卡" />
        </Row>
        <Row label="交互 (默认)">
          <选择按钮
            状态={radio默认}
            类型="默认"
            onClick={() => setRadio默认(s => s === '选中' ? '未选中' : '选中')}
          />
        </Row>
        <Row label="交互 (绿卡)">
          <选择按钮
            状态={radio绿卡}
            类型="绿卡"
            onClick={() => setRadio绿卡(s => s === '选中' ? '未选中' : '选中')}
          />
        </Row>
      </Section>

      {/* ── 开关 ────────────────────────────────────── */}
      <Section title="开关 (Switch)" id="sec-switch">
        <Row label="静态 — off / on (三种尺寸)">
          <开关 尺寸="大" active={false} />
          <开关 尺寸="大" active={true} />
          <开关 尺寸="中" active={false} />
          <开关 尺寸="中" active={true} />
          <开关 尺寸="小" active={false} />
          <开关 尺寸="小" active={true} />
        </Row>
        <Row label="交互">
          <开关 尺寸="大" active={switch大} onChange={setSwitch大} />
          <开关 尺寸="中" active={switch中} onChange={setSwitch中} />
          <开关 尺寸="小" active={switch小} onChange={setSwitch小} />
        </Row>
      </Section>

      {/* ── 步进器 ──────────────────────────────────── */}
      <Section title="步进器 (Stepper)" id="sec-stepper">
        <Row label="大 — 四种状态">
          <步进器 类型="大" 状态="默认" count={10} />
          <步进器 类型="大" 状态="无法修改" count={1} />
          <步进器 类型="大" 状态="无法减少" count={1} />
          <步进器 类型="大" 状态="无法增加" count={1} />
        </Row>
        <Row label="小 — 四种状态">
          <步进器 类型="小" 状态="默认" count={10} />
          <步进器 类型="小" 状态="无法修改" count={1} />
          <步进器 类型="小" 状态="无法减少" count={1} />
          <步进器 类型="小" 状态="无法增加" count={1} />
        </Row>
        <Row label="大 (交互)">
          <步进器
            类型="大"
            count={stepper大Count}
            onDecrement={() => setStepper大Count(c => Math.max(1, c - 1))}
            onIncrement={() => setStepper大Count(c => c + 1)}
            状态={stepper大Count <= 1 ? '无法减少' : '默认'}
          />
        </Row>
        <Row label="小 (交互)">
          <步进器
            类型="小"
            count={stepper小Count}
            onDecrement={() => setStepper小Count(c => Math.max(1, c - 1))}
            onIncrement={() => setStepper小Count(c => c + 1)}
            状态={stepper小Count <= 1 ? '无法减少' : '默认'}
          />
        </Row>
      </Section>

      {/* ════════════════ 信息展示 ════════════════ */}
      <GroupHeader title="信息展示" />

      {/* ── 徽标 ──────────────────────────────────── */}
      <Section title="徽标 (Badge)" id="sec-badge">
        <Row label="红点 — 大/小（无描边/有描边）">
          <徽标 类型="红点" 尺寸="大" />
          <徽标 类型="红点" 尺寸="大" 描边 />
          <徽标 类型="红点" 尺寸="小" />
          <徽标 类型="红点" 尺寸="小" 描边 />
        </Row>
        <Row label="数字 — 个位 / 多位 / 更多(>99)">
          <徽标 类型="数字" 尺寸="大" count={1} />
          <徽标 类型="数字" 尺寸="大" count={9} />
          <徽标 类型="数字" 尺寸="大" count={99} />
          <徽标 类型="数字" 尺寸="大" count={100} />
          <徽标 类型="数字" 尺寸="小" count={5} />
          <徽标 类型="数字" 尺寸="小" count={99} />
          <徽标 类型="数字" 尺寸="小" count={100} />
        </Row>
        <Row label="更多 — 大/小">
          <徽标 类型="更多" 尺寸="大" />
          <徽标 类型="更多" 尺寸="小" />
        </Row>
        <Row label="左下直角 — 卡片状态标签">
          <徽标 类型="左下直角" 尺寸="大" label="上新啦" />
          <徽标 类型="左下直角" 尺寸="大" label="爆款" />
          <徽标 类型="左下直角" 尺寸="小" label="上新啦" />
        </Row>
        <Row label="描边 — 叠加在深色背景时使用">
          <div style={{ background: '#1A1A1A', padding: 8, borderRadius: 4, display: 'flex', gap: 8, alignItems: 'center' }}>
            <徽标 类型="数字" 尺寸="大" count={5} 描边 />
            <徽标 类型="数字" 尺寸="大" count={99} 描边 />
            <徽标 类型="红点" 尺寸="大" 描边 />
          </div>
        </Row>
      </Section>

      {/* ── 标签 ──────────────────────────────────── */}
      <Section title="标签 (Tag)" id="sec-tag">
        <Row label="基本 — 四色">
          <标签 颜色="绿色" 类型="基本">新鲜</标签>
          <标签 颜色="红色" 类型="基本">促销</标签>
          <标签 颜色="蓝色" 类型="基本">预售</标签>
          <标签 颜色="标准" 类型="基本">自营</标签>
        </Row>
        <Row label="实心 — 四色">
          <标签 颜色="绿色" 类型="实心">新鲜</标签>
          <标签 颜色="红色" 类型="实心">促销</标签>
          <标签 颜色="蓝色" 类型="实心">预售</标签>
          <标签 颜色="标准" 类型="实心">自营</标签>
        </Row>
        <Row label="空心(实线) — 四色">
          <标签 颜色="绿色" 类型="空心(实线)">新鲜</标签>
          <标签 颜色="红色" 类型="空心(实线)">促销</标签>
          <标签 颜色="蓝色" 类型="空心(实线)">预售</标签>
          <标签 颜色="标准" 类型="空心(实线)">自营</标签>
        </Row>
        <Row label="空心(虚线) — 四色">
          <标签 颜色="绿色" 类型="空心(虚线)">新鲜</标签>
          <标签 颜色="红色" 类型="空心(虚线)">促销</标签>
          <标签 颜色="蓝色" 类型="空心(虚线)">预售</标签>
          <标签 颜色="标准" 类型="空心(虚线)">自营</标签>
        </Row>
        <Row label="尺寸 — 28 / 24 / 18 / 14">
          <标签 颜色="绿色" 类型="实心" 尺寸="28">标签</标签>
          <标签 颜色="绿色" 类型="实心" 尺寸="24">标签</标签>
          <标签 颜色="绿色" 类型="实心" 尺寸="18">标签</标签>
          <标签 颜色="绿色" 类型="实心" 尺寸="14">标签</标签>
        </Row>
        <Row label="圆角 — false / true">
          <标签 颜色="绿色" 类型="实心" 圆角={false}>新鲜</标签>
          <标签 颜色="绿色" 类型="实心" 圆角={true}>新鲜</标签>
          <标签 颜色="红色" 类型="基本" 圆角={false}>促销</标签>
          <标签 颜色="红色" 类型="基本" 圆角={true}>促销</标签>
        </Row>
      </Section>

      {/* ── 标题前标签 ──────────────────────────────────── */}
      <Section title="标题前标签 (Title Prefix Tag)" id="sec-title-tag">
        <Row label="小尺寸（商品卡片）">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <标题前标签 类型="疯抢" />
            <标题前标签 类型="预售" />
            <标题前标签 类型="新品" />
            <标题前标签 类型="趋势" />
            <标题前标签 类型="宝妈严选" />
            <标题前标签 类型="叮咚心选" />
            <标题前标签 类型="美麒麟" />
          </div>
        </Row>
        <Row label="大尺寸（商品详情页）">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <标题前标签 类型="疯抢" 尺寸="大" />
            <标题前标签 类型="预售" 尺寸="大" />
            <标题前标签 类型="新品" 尺寸="大" />
            <标题前标签 类型="趋势" 尺寸="大" />
            <标题前标签 类型="宝妈严选" 尺寸="大" />
            <标题前标签 类型="叮咚心选" 尺寸="大" />
            <标题前标签 类型="美麒麟" 尺寸="大" />
          </div>
        </Row>
        <Row label="标题行内使用示例">
          <div style={{ width: 200, fontFamily: 'PingFang SC, sans-serif', fontSize: 14, lineHeight: '16px', color: '#1a1a1a', fontWeight: 500 }}>
            <p style={{ margin: '0 0 8px' }}><标题前标签 类型="疯抢" /> 新鲜脆嫩本地小油菜500g</p>
            <p style={{ margin: '0 0 8px' }}><标题前标签 类型="新品" /> 冷鲜猪里脊肉500g</p>
            <p style={{ margin: '0 0 8px' }}><标题前标签 类型="宝妈严选" /> 有机宝宝菠菜200g</p>
          </div>
        </Row>
      </Section>

      {/* ── 营销标签 ─────────────────────────────────── */}
      <Section title="营销标签 (Marketing Tag)" id="sec-mkt-tag">
        <Row label="单色底标签">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
            <商品卡片
              布局="单列"
              图片="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200"
              标题="营销标签展示用商品"
              价格="28.00"
              营销标签={[
                { 类型: '绿色底', 文字: '明日送达' },
                { 类型: '粉红底', 文字: '限时抢' },
              ]}
            />
          </div>
        </Row>
        <Row label="更多类型">
          <div style={{ width: 390, backgroundColor: '#fff' }}>
            <商品卡片
              布局="单列"
              图片="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200"
              标题="营销标签全类型展示"
              价格="58.00"
              营销标签={[
                { 类型: '橙色底', 文字: '买过' },
                { 类型: '蓝色底', 文字: '最快明日送达' },
              ]}
            />
          </div>
        </Row>
        <Row label="分段标签（省/折）">
          <div style={{ width: 390, backgroundColor: '#fff' }}>
            <商品卡片
              布局="单列"
              图片="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200"
              标题="满减满折展示"
              价格="38.76"
              营销标签={[
                { 类型: '省', 文字: '组合装省1.8元' },
                { 类型: '折', 文字: '6.58折' },
              ]}
            />
          </div>
        </Row>
        <Row label="特殊标签（绿卡/低价/疯抢）">
          <div style={{ width: 390, backgroundColor: '#fff' }}>
            <商品卡片
              布局="单列"
              图片="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200"
              标题="绿卡返现 近N天低价 疯抢专享价"
              价格="99.00"
              营销标签={[
                { 类型: '绿卡返现', 文字: '返0.3元' },
                { 类型: '近N天低价', 文字: '近14天低价' },
                { 类型: '疯抢专享价' },
              ]}
            />
          </div>
        </Row>
      </Section>

      {/* ── Toast ───────────────────────────────────────── */}
      <Section title="Toast (轻提示)" id="sec-toast">
        <Row label="5 种类型">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {(['基础', '成功', '错误', '警告', '加载'] as Toast类型[]).map(t => (
              <按钮 key={t} 尺寸="Small" 类型="Secondary" onClick={() => showToast(t)}>{t}</按钮>
            ))}
          </div>
        </Row>
      </Section>

      {/* ── 弹窗 ─────────────────────────────────────── */}
      <Section title="弹窗 (Dialog)" id="sec-dialog">
        <Row label="反馈类 — 仅正文（多行标题）">
          <按钮 尺寸="Small" 类型="Secondary" onClick={() => setDialog反馈(true)}>打开</按钮>
        </Row>
        <Row label="确认类 — 双按钮">
          <按钮 尺寸="Small" 类型="Secondary" onClick={() => setDialog确认(true)}>打开</按钮>
        </Row>
        <Row label="确认类 — 带警示按钮">
          <按钮 尺寸="Small" 类型="Secondary" onClick={() => setDialog警示(true)}>打开</按钮>
        </Row>
        <Row label="确认类 — 多按钮（垂直）">
          <按钮 尺寸="Small" 类型="Secondary" onClick={() => setDialog多按钮(true)}>打开</按钮>
        </Row>
        <Row label="输入类">
          <按钮 尺寸="Small" 类型="Secondary" onClick={() => setDialog输入(true)}>打开</按钮>
        </Row>
        <Row label="确认类 — 双按钮文字过长（垂直）">
          <按钮 尺寸="Small" 类型="Secondary" onClick={() => setDialog长文字(true)}>打开</按钮>
        </Row>
      </Section>

      {/* ── 定位组件 ───────────────────────────────────── */}
      <Section title="定位 (Location Bar)" id="sec-location">
        <Row label="默认">
          <div style={{ width: 390, background: 'linear-gradient(180deg, rgba(11,11,11,0.5) 0%, rgba(0,0,0,0.3) 100%)', borderRadius: 8, padding: '4px 0' }}>
            <定位 />
          </div>
        </Row>
        <Row label="自定义地址/站点">
          <div style={{ width: 390, background: 'linear-gradient(180deg, rgba(11,11,11,0.5) 0%, rgba(0,0,0,0.3) 100%)', borderRadius: 8, padding: '4px 0' }}>
            <定位 地址="叮咚生鲜仓" 站点="浦东站" />
          </div>
        </Row>
      </Section>

      {/* ── 叮咚特色品质之爱 ────────────────────────────── */}
      <Section title="叮咚特色品质之爱" id="sec-quality">
        <Row label="完整展示（叠在深色背景上，与首页 Hero 一致）">
          <div style={{ width: 390, borderRadius: 8, overflow: 'hidden', paddingBottom: 9, background: 'linear-gradient(180deg, #3a4a3a 0%, #6a7a5a 100%)' }}>
            <叮咚特色
              瓷片列表={[
                { label: '寻味中国', img: tabImg1 },
                { label: '有机汇',   img: tabImg2 },
                { label: '澳洲直达', img: tabImg3 },
                { label: '配料干净', img: tabImg4 },
                { label: '减脂',     img: tabImg5 },
              ]}
            />
          </div>
        </Row>
      </Section>

      {/* ════════════════ 导航 ════════════════ */}
      <GroupHeader title="导航" />

      {/* ── 底部导航 ─────────────────────────────────── */}
      <Section title="底部导航 (Tab Bar)" id="sec-tabbar">
        <Row label="图标组件 — 默认 / 选中">
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            {([TabIcon首页, TabIcon分类, TabIcon吃什么, TabIcon榜单, TabIcon购物车, TabIcon我的] as React.FC<{ selected?: boolean }>[]).map((Icon, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <Icon selected={false} />
                <Icon selected={true} />
              </div>
            ))}
          </div>
        </Row>
        <Row label="全图片 icon — TabIconAI (AI广告位)">
          <TabIconAI />
        </Row>
        <Row label="5-tab 含全图片广告位（交互）">
          <div style={{ width: 390, border: '1px solid #E6E6E6', borderRadius: 4 }}>
            <底部导航
              tabs={[
                { tab: '首页' },
                { tab: '分类' },
                { tab: '吃什么', displayType: '全图片' },
                { tab: '购物车', badge: 3 },
                { tab: '我的' },
              ]}
              activeTab={activeTab5}
              onTabChange={setActiveTab5}
            />
          </div>
        </Row>
        <Row label="4-tab（交互）">
          <div style={{ width: 390, border: '1px solid #E6E6E6', borderRadius: 4 }}>
            <底部导航
              tabs={[
                { tab: '首页' },
                { tab: '分类' },
                { tab: '购物车', badge: 3 },
                { tab: '我的' },
              ]}
              activeTab={activeTab4}
              onTabChange={setActiveTab4}
            />
          </div>
        </Row>
        <Row label="5-tab（交互）">
          <div style={{ width: 390, border: '1px solid #E6E6E6', borderRadius: 4 }}>
            <底部导航
              tabs={[
                { tab: '首页' },
                { tab: '分类' },
                { tab: '吃什么' },
                { tab: '购物车', badge: 12 },
                { tab: '我的' },
              ]}
              activeTab={activeTab5}
              onTabChange={setActiveTab5}
            />
          </div>
        </Row>
        <Row label="6-tab 全标签">
          <div style={{ width: 390, border: '1px solid #E6E6E6', borderRadius: 4 }}>
            <底部导航
              tabs={[
                { tab: '首页' },
                { tab: '分类' },
                { tab: '吃什么' },
                { tab: '榜单' },
                { tab: '购物车', badge: 1 },
                { tab: '我的' },
              ]}
              activeTab="榜单"
              onTabChange={() => {}}
            />
          </div>
        </Row>
        <Row label="无 Home Indicator">
          <div style={{ width: 390, border: '1px solid #E6E6E6', borderRadius: 4 }}>
            <底部导航
              tabs={[{ tab: '首页' }, { tab: '分类' }, { tab: '购物车' }, { tab: '我的' }]}
              activeTab="首页"
              onTabChange={() => {}}
              showHomeIndicator={false}
            />
          </div>
        </Row>
      </Section>

      {/* ── 标题栏 ───────────────────────────────────────── */}
      <Section title="标题栏 (TitleBar)" id="sec-titlebar">
        <Row label="返回 + 标题 + 购物车 + 分享">
          <div style={{ width: 390, border: '1px solid #E6E6E6' }}>
            <TitleBar 标题="商品详情" show购物车 购物车Badge={3} show分享 onBack={() => {}} />
          </div>
        </Row>
        <Row label="返回 + 标题（无右侧图标）">
          <div style={{ width: 390, border: '1px solid #E6E6E6' }}>
            <TitleBar 标题="收货地址" onBack={() => {}} />
          </div>
        </Row>
        <Row label="close + 标题 + 右侧文案">
          <div style={{ width: 390, border: '1px solid #E6E6E6' }}>
            <TitleBar 左操作="close" 标题="选择规格" 右侧文案="明细" onBack={() => {}} />
          </div>
        </Row>
        <Row label="用户信息 + 标题 + 小程序">
          <div style={{ width: 390, border: '1px solid #E6E6E6' }}>
            <TitleBar 左操作="用户信息" 用户名="叮咚用户" 标题="叮咚买菜" show小程序 />
          </div>
        </Row>
        <Row label="无左操作 + 标题">
          <div style={{ width: 390, border: '1px solid #E6E6E6' }}>
            <TitleBar 左操作="无" 标题="首页" show购物车 购物车Badge={99} />
          </div>
        </Row>
      </Section>

      {/* ── 选项卡 ─────────────────────────────────────── */}
      <Section title="选项卡 / Tabs" id="sec-tabs">
        <Row label="横向 — 二列">
          <div style={{ width: 390, backgroundColor: '#fff' }}>
            <选项卡
              列数="二列"
              tabs={[
                { key: 'tab1', label: '标签页一' },
                { key: 'tab2', label: '标签页二' },
              ]}
              activeKey={tab二列}
              onChange={setTab二列}
            />
          </div>
        </Row>
        <Row label="横向 — 三列">
          <div style={{ width: 390, backgroundColor: '#fff' }}>
            <选项卡
              列数="三列"
              tabs={[
                { key: 'tab1', label: '标签页一' },
                { key: 'tab2', label: '标签页二' },
                { key: 'tab3', label: '标签页三' },
              ]}
              activeKey={tab三列}
              onChange={setTab三列}
            />
          </div>
        </Row>
        <Row label="横向 — 四列">
          <div style={{ width: 390, backgroundColor: '#fff' }}>
            <选项卡
              列数="四列"
              tabs={[
                { key: 'tab1', label: '综合' },
                { key: 'tab2', label: '销量' },
                { key: 'tab3', label: '价格' },
                { key: 'tab4', label: '评价' },
              ]}
              activeKey={tab四列}
              onChange={setTab四列}
            />
          </div>
        </Row>
        <Row label="横向 — 五列">
          <div style={{ width: 390, backgroundColor: '#fff' }}>
            <选项卡
              列数="五列"
              tabs={[
                { key: 'tab1', label: '推荐' },
                { key: 'tab2', label: '热销' },
                { key: 'tab3', label: '新品' },
                { key: 'tab4', label: '价格' },
                { key: 'tab5', label: '评价' },
              ]}
              activeKey={tab五列}
              onChange={setTab五列}
            />
          </div>
        </Row>
        <Row label="横向 — 滚动 (overflow scroll)">
          <div style={{ width: 390, backgroundColor: '#fff' }}>
            <选项卡
              列数="滚动"
              tabs={[
                { key: 'tab1', label: '标签页一' },
                { key: 'tab2', label: '标签页二' },
                { key: 'tab3', label: '标签页三' },
                { key: 'tab4', label: '标签页四' },
                { key: 'tab5', label: '标签页五' },
                { key: 'tab6', label: '标签页六' },
                { key: 'tab7', label: '标签页七' },
              ]}
              activeKey={tab滚动}
              onChange={setTab滚动}
            />
          </div>
        </Row>
        <Row label="竖向 (with content)">
          <div style={{ width: 390, backgroundColor: '#fff' }}>
            <选项卡
              方向="竖向"
              tabs={[
                { key: 'tab1', label: '标签页一', content: <div style={{ padding: 16, color: '#1A1A1A', fontSize: 14 }}>标签一内容区</div> },
                { key: 'tab2', label: '标签页二', content: <div style={{ padding: 16, color: '#1A1A1A', fontSize: 14 }}>标签二内容区</div> },
                { key: 'tab3', label: '标签页三', content: <div style={{ padding: 16, color: '#1A1A1A', fontSize: 14 }}>标签三内容区</div> },
                { key: 'tab4', label: '标签页四', content: <div style={{ padding: 16, color: '#1A1A1A', fontSize: 14 }}>标签四内容区</div> },
                { key: 'tab5', label: '标签页五', content: <div style={{ padding: 16, color: '#1A1A1A', fontSize: 14 }}>标签五内容区</div> },
              ]}
              activeKey={tab竖向}
              onChange={setTab竖向}
            />
          </div>
        </Row>
      </Section>

      {/* ── 分段筛选器 ────────────────────────────────────── */}
      <Section title="分段筛选器 / Segmented Control" id="sec-segment">
        <Row label="三列（综合/销量/价格↕）— 交互">
          <div style={{ width: 390 }}>
            <分段筛选器
              items={[
                { key: '综合', label: '综合' },
                { key: '销量', label: '销量' },
                { key: '价格', label: '价格', sortable: true },
              ]}
              activeKey={seg活动key}
              sortOrder={seg排序}
              onChange={(key, order) => { setSeg活动key(key); setSeg排序(order) }}
            />
          </div>
        </Row>
        <Row label="静态 — 综合 active">
          <div style={{ width: 390 }}>
            <分段筛选器
              items={[{ key: '综合', label: '综合' }, { key: '销量', label: '销量' }, { key: '价格', label: '价格', sortable: true }]}
              activeKey="综合"
              sortOrder="默认"
              onChange={() => {}}
            />
          </div>
        </Row>
        <Row label="静态 — 销量 active">
          <div style={{ width: 390 }}>
            <分段筛选器
              items={[{ key: '综合', label: '综合' }, { key: '销量', label: '销量' }, { key: '价格', label: '价格', sortable: true }]}
              activeKey="销量"
              sortOrder="默认"
              onChange={() => {}}
            />
          </div>
        </Row>
        <Row label="静态 — 价格 active 默认/升序/降序">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 390 }}>
            <分段筛选器
              items={[{ key: '综合', label: '综合' }, { key: '销量', label: '销量' }, { key: '价格', label: '价格', sortable: true }]}
              activeKey="价格"
              sortOrder="默认"
              onChange={() => {}}
            />
            <分段筛选器
              items={[{ key: '综合', label: '综合' }, { key: '销量', label: '销量' }, { key: '价格', label: '价格', sortable: true }]}
              activeKey="价格"
              sortOrder="升序"
              onChange={() => {}}
            />
            <分段筛选器
              items={[{ key: '综合', label: '综合' }, { key: '销量', label: '销量' }, { key: '价格', label: '价格', sortable: true }]}
              activeKey="价格"
              sortOrder="降序"
              onChange={() => {}}
            />
          </div>
        </Row>
      </Section>

      {/* ════════════════ 复杂组件 ════════════════ */}
      <GroupHeader title="复杂组件" />

      {/* ── 商品卡片 ─────────────────────────────────── */}
      <Section title="商品卡片 (Product Card)" id="sec-product-card">
        <Row label="单列商卡">
          <div style={{ width: 390, backgroundColor: '#fff' }}>
            <商品卡片
              布局="单列"
              图片="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200"
              标题="气泡水500ml 整箱装"
              价格="38.76"
              单位="/份"
              标题前标签={['疯抢']}
              星级
              利益点="利益点｜利益点｜利益点"
              营销标签={[
                { 类型: '绿色底', 文字: '明日送达' },
                { 类型: '粉红底', 文字: '特惠' },
                { 类型: '省', 文字: '省1.8元' },
              ]}
              下单数="2.1万人已下单"
              榜单横幅="新鲜水果榜第1名"
              购物车badge={3}
            />
          </div>
        </Row>
        <Row label="双列商卡">
          <div style={{ width: 390, display: 'flex', gap: 11, backgroundColor: '#f5f5f5', padding: '9px 12px', alignItems: 'flex-start' }}>
            <商品卡片
              布局="双列"
              图片="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300"
              标题="气泡水500ml 整箱装"
              价格="38.76"
              单位="/份"
              星级
              利益点="利益点｜利益点｜利益点"
              营销标签={[
                { 类型: '绿色底', 文字: '明日送达' },
                { 类型: '省', 文字: '省1.8元' },
              ]}
              下单数="2.1万人已下单"
              榜单横幅="新鲜水果榜第1名"
              购物车badge={5}
              className="flex-1 min-w-0"
            />
            <商品卡片
              布局="双列"
              图片="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=300"
              标题="有机苹果 5斤装"
              价格="29.90"
              单位="/箱"
              营销标签={[{ 类型: '粉红底', 文字: '限时抢' }]}
              className="flex-1 min-w-0"
            />
          </div>
        </Row>
        <Row label="三列商卡">
          <div style={{ width: 390, display: 'flex', gap: 8, backgroundColor: '#f5f5f5', padding: '9px 12px' }}>
            <商品卡片
              布局="三列"
              图片="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200"
              标题="气泡水500ml"
              价格="38.76"
              单位="/份"
              营销标签={[{ 类型: '绿色底', 文字: '明日送达' }]}
              购物车badge={2}
              className="flex-1 min-w-0"
            />
            <商品卡片
              布局="三列"
              图片="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=200"
              标题="有机苹果5斤装"
              价格="29.90"
              单位="/箱"
              营销标签={[{ 类型: '粉红底', 文字: '特惠' }]}
              className="flex-1 min-w-0"
            />
            <商品卡片
              布局="三列"
              图片="https://images.unsplash.com/photo-1542838132-92c53300491e?w=200"
              标题="精品猕猴桃"
              价格="18.80"
              单位="/份"
              营销标签={[]}
              className="flex-1 min-w-0"
            />
          </div>
        </Row>
        <Row label="泳道商卡（横向滚动）">
          <div style={{ width: 390, overflowX: 'auto', backgroundColor: '#f5f5f5', padding: '9px 12px' }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <商品卡片
                布局="泳道"
                图片="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200"
                标题="气泡水500ml整箱"
                价格="10.99"
                原价="40.76"
                单位="/份"
                营销标签={[{ 类型: '绿色底', 文字: '明日送达' }]}
                购物车badge={2}
              />
              <商品卡片
                布局="泳道"
                图片="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=200"
                标题="有机苹果5斤装"
                价格="19.90"
                原价="35.00"
                单位="/箱"
                营销标签={[{ 类型: '粉红底', 文字: '特惠' }]}
              />
              <商品卡片
                布局="泳道"
                图片="https://images.unsplash.com/photo-1542838132-92c53300491e?w=200"
                标题="精品猕猴桃"
                价格="8.80"
                原价="25.00"
                单位="/份"
                营销标签={[{ 类型: '省', 文字: '省16.2元' }]}
              />
              <商品卡片
                布局="泳道"
                图片="https://images.unsplash.com/photo-1557800636-894a64c1696f?w=200"
                标题="新鲜草莓1斤"
                价格="12.50"
                原价="20.00"
                单位="/盒"
                营销标签={[]}
              />
            </div>
          </div>
        </Row>
        <Row label="新人专区商卡（横向滚动）">
          <div style={{ width: 390, overflowX: 'auto', backgroundColor: '#f5f5f5', padding: '9px 12px' }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <商品卡片
                布局="新人专区商卡"
                图片="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200"
                标题="气泡水500ml"
                价格="10.99"
                原价="40.76"
                单位="/份"
                购物车badge={1}
              />
              <商品卡片
                布局="新人专区商卡"
                图片="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=200"
                标题="有机苹果5斤"
                价格="19.90"
                原价="35.00"
                单位="/箱"
              />
              <商品卡片
                布局="新人专区商卡"
                图片="https://images.unsplash.com/photo-1542838132-92c53300491e?w=200"
                标题="精品猕猴桃"
                价格="8.80"
                原价="25.00"
                单位="/份"
              />
              <商品卡片
                布局="新人专区商卡"
                图片="https://images.unsplash.com/photo-1557800636-894a64c1696f?w=200"
                标题="新鲜草莓1斤"
                价格="12.50"
                原价="20.00"
                单位="/盒"
              />
            </div>
          </div>
        </Row>
      </Section>

      {/* ── Cell ─────────────────────────────────────── */}
      <Section title="Cell (Grouped Row + 活动条)" id="sec-cell">
        <Row label="默认 — 标题 + 箭头">
          <div style={{ width: 390, border: '1px solid #E6E6E6', borderRadius: 4, overflow: 'hidden' }}>
            <GroupedRow 主标题="收货地址" 右标题="上海市浦东新区" />
            <GroupedRow 主标题="联系电话" 右标题="138 0000 0000" 右说明文案="已验证" />
            <GroupedRow 主标题="发票信息" showArrow={false} />
          </div>
        </Row>
        <Row label="默认 — 头像 + info圆 + 副标题 + 说明文案">
          <div style={{ width: 390, border: '1px solid #E6E6E6', borderRadius: 4, overflow: 'hidden' }}>
            <GroupedRow
              showAvatar
              主标题="叮咚配送"
              showInfo
              副标题="次日达"
              说明文案="每日8:00 - 22:00提供服务"
              右副信息="预计"
              右标题="明天9:00"
            />
          </div>
        </Row>
        <Row label="按钮附件">
          <div style={{ width: 390, border: '1px solid #E6E6E6', borderRadius: 4, overflow: 'hidden' }}>
            <GroupedRow 主标题="领取优惠券" 说明文案="满49元可用，有效期至12月31日" 类型="按钮" 按钮文案="立即领取" />
          </div>
        </Row>
        <Row label="开关附件">
          <div style={{ width: 390, border: '1px solid #E6E6E6', borderRadius: 4, overflow: 'hidden' }}>
            <GroupedRow 主标题="新订单通知" 说明文案="开启后将收到配送员到达提醒" 类型="开关" 开关Active />
            <GroupedRow 主标题="免打扰模式" 类型="开关" />
          </div>
        </Row>
        <Row label="单选按钮附件">
          <div style={{ width: 390, border: '1px solid #E6E6E6', borderRadius: 4, overflow: 'hidden' }}>
            <GroupedRow 主标题="今天 9:00 - 10:00" 说明文案="最快送达" 类型="单选按钮" 单选状态="选中" />
            <GroupedRow 主标题="今天 12:00 - 13:00" 类型="单选按钮" 单选状态="未选中" />
            <GroupedRow 主标题="今天 18:00 - 19:00" 类型="单选按钮" 单选状态="不可选" />
          </div>
        </Row>
        <Row label="活动条 — 小+标签">
          <div style={{ width: 390, border: '1px solid #E6E6E6', borderRadius: 4, overflow: 'hidden' }}>
            <活动条 尺寸="小" 标签文字="活动" 活动文字="满49元享最低7.5折换购，还差49元" />
            <活动条 尺寸="小" 标签文字="满减" 活动文字="满49元享最低7.5折换购，还差49元仍然还差49元还差49元" />
          </div>
        </Row>
        <Row label="活动条 — 大+标签">
          <div style={{ width: 390, border: '1px solid #E6E6E6', borderRadius: 4, overflow: 'hidden' }}>
            <活动条 尺寸="大" 标签文字="活动标签" 活动文字="仅需99元，可任选3件可任选3件" />
            <活动条 尺寸="大" 标签文字="活动标签" 活动文字="仅需99元，可任选3件可任选3件仅需99元，可任选3件可任选3件仅需99元，可任选3件" />
          </div>
        </Row>
      </Section>

      {/* ── 金刚位 ───────────────────────────────────────── */}
      <Section title="金刚位 (Grid Navigation)" id="sec-jinggang">
        <Row label="5列 × 2行（标准）">
          <div style={{ width: 390 }}>
            <金刚位
              items={[
                { key: '1', iconSrc: 菜豆制品Img, label: '菜豆制品' },
                { key: '2', iconSrc: 肉禽蛋Img, label: '肉禽蛋' },
                { key: '3', iconSrc: 水产海鲜Img, label: '水产海鲜', badge: '角标' },
                { key: '4', iconSrc: 水果鲜花Img, label: '水果鲜花' },
                { key: '5', iconSrc: 饮品烘焙Img, label: '饮品烘焙' },
                { key: '6', iconSrc: 熟食卤味Img, label: '熟食卤味' },
                { key: '7', iconSrc: 快手菜Img, label: '快手菜' },
                { key: '8', iconSrc: 速食冻品Img, label: '速食冻品' },
                { key: '9', iconSrc: 粮油调味Img, label: '粮油调味' },
                { key: '10', iconSrc: 酒水饮料Img, label: '酒水饮料' },
              ]}
              每行列数={5}
              activePage={0}
              totalPages={2}
            />
          </div>
        </Row>
        <Row label="5列 × 2行（第2页）">
          <div style={{ width: 390 }}>
            <金刚位
              items={[
                { key: '1', iconSrc: 火锅到家Img, label: '火锅到家' },
                { key: '2', iconSrc: 个护清洁Img, label: '个护清洁' },
                { key: '3', iconSrc: 一日五餐Img, label: '一日五餐' },
                { key: '4', iconSrc: 滋补好物Img, label: '滋补好物' },
                { key: '5', iconSrc: 宝妈严选Img, label: '宝妈严选' },
                { key: '6', iconSrc: 一周一花Img, label: '一周一花' },
                { key: '7', iconSrc: 日日鲜Img, label: '日日鲜' },
                { key: '8', iconSrc: 营养早餐Img, label: '营养早餐' },
              ]}
              每行列数={5}
              activePage={1}
              totalPages={2}
            />
          </div>
        </Row>
        <Row label="5列 × 3行">
          <div style={{ width: 390 }}>
            <金刚位
              items={[
                { key: '1', iconSrc: 菜豆制品Img, label: '菜豆制品' },
                { key: '2', iconSrc: 肉禽蛋Img, label: '肉禽蛋' },
                { key: '3', iconSrc: 水产海鲜Img, label: '水产海鲜', badge: '角标' },
                { key: '4', iconSrc: 水果鲜花Img, label: '水果鲜花' },
                { key: '5', iconSrc: 饮品烘焙Img, label: '饮品烘焙' },
                { key: '6', iconSrc: 熟食卤味Img, label: '熟食卤味' },
                { key: '7', iconSrc: 快手菜Img, label: '快手菜' },
                { key: '8', iconSrc: 速食冻品Img, label: '速食冻品' },
                { key: '9', iconSrc: 粮油调味Img, label: '粮油调味' },
                { key: '10', iconSrc: 酒水饮料Img, label: '酒水饮料', badge: '新' },
                { key: '11', iconSrc: 一日五餐Img, label: '一日五餐', iconSize: 38 },
                { key: '12', iconSrc: 滋补好物Img, label: '滋补好物', iconSize: 38 },
                { key: '13', iconSrc: 宝妈严选Img, label: '宝妈严选', iconSize: 38 },
                { key: '14', iconSrc: 一周一花Img, label: '一周一花', iconSize: 38 },
                { key: '15', iconSrc: 日日鲜Img, label: '日日鲜', iconSize: 38 },
              ]}
              每行列数={5}
              activePage={0}
              totalPages={3}
            />
          </div>
        </Row>
      </Section>

      {/* ── 弹窗实例（portal，放在文档末尾）── */}
      <弹窗
        visible={dialog反馈}
        description="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
        actions={[{ label: '知道了', kind: 'primary', onClick: () => setDialog反馈(false) }]}
        onMaskClick={() => setDialog反馈(false)}
      />
      <弹窗
        visible={dialog确认}
        title="对话框标题"
        description="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
        actions={[
          { label: '取消',     kind: 'secondary', onClick: () => setDialog确认(false) },
          { label: '按钮最多字数', kind: 'primary',   onClick: () => setDialog确认(false) },
        ]}
        onMaskClick={() => setDialog确认(false)}
      />
      <弹窗
        visible={dialog警示}
        title="对话框标题"
        actions={[
          { label: '取消',   kind: 'secondary', onClick: () => setDialog警示(false) },
          { label: '警示操作', kind: 'danger',    onClick: () => setDialog警示(false) },
        ]}
        onMaskClick={() => setDialog警示(false)}
      />
      <弹窗
        visible={dialog多按钮}
        title="对话框标题"
        description="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
        actions={[
          { label: '按钮文案文字内容较长',       kind: 'primary',   onClick: () => setDialog多按钮(false) },
          { label: '单行按钮最多十五个字符文案', kind: 'primary',   onClick: () => setDialog多按钮(false) },
          { label: '取消',                       kind: 'secondary', onClick: () => setDialog多按钮(false) },
        ]}
        onMaskClick={() => setDialog多按钮(false)}
      />
      <弹窗
        visible={dialog输入}
        title="带输入框对话框"
        description="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
        inputPlaceholder="输入文案"
        inputValue={dialogInput}
        onInputChange={setDialogInput}
        actions={[
          { label: '取消', kind: 'secondary', onClick: () => { setDialog输入(false); setDialogInput('') } },
          { label: '确定', kind: 'primary',   onClick: () => setDialog输入(false) },
        ]}
        onMaskClick={() => setDialog输入(false)}
      />
      <弹窗
        visible={dialog长文字}
        title="对话框标题"
        description="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
        stackActions
        actions={[
          { label: '文字较长的主操作按钮文案', kind: 'primary',   onClick: () => setDialog长文字(false) },
          { label: '取消',                     kind: 'secondary', onClick: () => setDialog长文字(false) },
        ]}
        onMaskClick={() => setDialog长文字(false)}
      />
      <Toast
        visible={toastVisible}
        类型={toast类型}
        content={toastContentMap[toast类型]}
        duration={toast类型 === '加载' ? 3000 : 2000}
        onHide={() => setToastVisible(false)}
      />
    </div>
  )
}
