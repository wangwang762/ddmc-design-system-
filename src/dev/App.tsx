import React, { useState } from 'react'
import { 商品卡片 } from '../components/商品卡片'
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

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-2">
    <span className="text-[11px] text-[#808080]">{label}</span>
    <div className="flex flex-wrap items-center gap-3">{children}</div>
  </div>
)

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginBottom: '32px' }}>
    <h2 style={{ fontSize: '13px', color: '#4D4D4D', marginBottom: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
      {title}
    </h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {children}
    </div>
  </section>
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
  // 底部导航状态
  const [activeTab4, setActiveTab4] = useState<TabBarTab>('首页')
  const [activeTab5, setActiveTab5] = useState<TabBarTab>('吃什么')

  return (
    <div style={{ padding: '40px', backgroundColor: '#F5F5F5', minHeight: '100vh', fontFamily: 'PingFang SC, sans-serif' }}>
      <h1 style={{ fontSize: '20px', fontWeight: 600, color: '#1A1A1A', marginBottom: '32px' }}>
        Button Components
      </h1>

      {/* ── 按钮 Primary ─────────────────────────────── */}
      <Section title="按钮 / Primary">
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
      <Section title="按钮 / Secondary">
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
      <Section title="Button / 购物车">
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

      {/* ── 徽标 ──────────────────────────────────── */}
      <Section title="徽标 (Badge)">
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
      <Section title="标签 (Tag)">
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

      {/* ── 加减号 ─────────────────────────────────── */}
      <Section title="加减号 (Quantity Stepper)">
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
      <Section title="选择按钮 (Radio Button)">
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
      <Section title="开关 (Switch)">
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
      <Section title="步进器 (Stepper)">
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
      {/* ── 弹窗 ─────────────────────────────────────── */}
      <Section title="弹窗 (Dialog)">
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

      {/* ── 商品卡片 ─────────────────────────────────── */}
      <Section title="商品卡片 (Product Card)">
        <Row label="单列商卡">
          <div style={{ width: 390, backgroundColor: '#fff' }}>
            <商品卡片
              布局="单列"
              图片="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200"
              标题="气泡水500ml 整箱装"
              价格="38.76"
              单位="/份"
              标题前标签={[{ 文字: '疯抢', 颜色: 'red' }]}
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

      {/* ── 弹窗实例 ──────────────────────────────────── */}
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
      {/* ── 底部导航 ─────────────────────────────────── */}
      <Section title="底部导航 (Tab Bar)">
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
    </div>
  )
}
