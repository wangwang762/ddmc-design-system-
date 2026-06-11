import React from 'react'
import { DocPage, DemoSection, DemoRow, MobileFrame, ApiTable, RulesPanel} from '../DocLayout'
import { 商品卡片 } from '../../components/商品卡片'
// @ts-ignore
import rulesRaw from '../../components/商品卡片/rules.md?raw'
import 茼蒿Img   from '../assets/商品图/信息流商品图/1.png'
import 生蚝Img   from '../assets/商品图/信息流商品图/4.png'
import 白馒头Img from '../assets/商品图/自有品牌/良芯匠人/01.png'
import 西兰花Img from '../assets/商品图/绿/西兰花.png'

const BASE = {
  图片: 茼蒿Img,
  标题: '叮咚自营有机蔬菜礼盒装新鲜现摘',
  价格: '38.76',
  单位: '/份',
  利益点: '无农残｜有机认证｜当日现摘',
  营销标签: [
    { 类型: '绿色底' as const, 文字: '明日送达' },
    { 类型: '省' as const, 文字: '省1.8元' },
  ],
  下单数: '2.1万人已下单',
}

export function 商品卡片Doc() {
  return (
    <DocPage name="商品卡片" enName="Product Card" description="可购买商品展示，5 种布局共用同一套 props，通过 `布局` prop 切换渲染形态。">
      <DemoSection title="单列">
        <DemoRow>
          <MobileFrame>
            <div style={{ padding: 12 }}>
              <商品卡片 {...BASE} 布局="单列" 星级 榜单横幅="新鲜水果榜第1名" onCartClick={() => {}} />
            </div>
          </MobileFrame>
        </DemoRow>
      </DemoSection>

      <DemoSection title="双列">
        <DemoRow>
          <MobileFrame>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: 12 }}>
              <商品卡片 {...BASE} 布局="双列" 星级 onCartClick={() => {}} />
              <商品卡片 {...BASE} 布局="双列" 标题前标签={['疯抢']} 购物车badge={2} onCartClick={() => {}} />
            </div>
          </MobileFrame>
        </DemoRow>
      </DemoSection>

      <DemoSection title="三列">
        <DemoRow>
          <MobileFrame>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, padding: 12 }}>
              <商品卡片 {...BASE} 布局="三列" onCartClick={() => {}} />
              <商品卡片 {...BASE} 布局="三列" onCartClick={() => {}} />
              <商品卡片 {...BASE} 布局="三列" onCartClick={() => {}} />
            </div>
          </MobileFrame>
        </DemoRow>
      </DemoSection>

      <DemoSection title="泳道">
        <DemoRow>
          <MobileFrame>
            <div style={{ display: 'flex', gap: 8, padding: 12, overflowX: 'auto' }}>
              <商品卡片 {...BASE} 布局="泳道" 原价="45.00" onCartClick={() => {}} />
              <商品卡片 {...BASE} 布局="泳道" 原价="45.00" onCartClick={() => {}} />
              <商品卡片 {...BASE} 布局="泳道" 原价="45.00" onCartClick={() => {}} />
            </div>
          </MobileFrame>
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: '布局',         desc: '卡片布局类型（必填）',                   type: "'单列' | '单列定高' | '双列' | '双列定高' | '三列' | '泳道' | '新人专区商卡'", defaultVal: '—' },
        { prop: '图片',         desc: '商品图片 URL（必填）',                   type: 'string',    defaultVal: '—' },
        { prop: '标题',         desc: '商品标题（必填）',                       type: 'string',    defaultVal: '—' },
        { prop: '价格',         desc: '现价字符串，如 "38.76"',                 type: 'string',    defaultVal: '—' },
        { prop: '单位',         desc: '计量单位',                               type: 'string',    defaultVal: "'/份'" },
        { prop: '标题前标签',   desc: '标题前彩色标签，最多 2 个',              type: '标题前标签类型[]', defaultVal: '—' },
        { prop: '星级',         desc: '显示五星品质徽标',                       type: 'boolean',   defaultVal: 'false' },
        { prop: '利益点',       desc: '利益点文案，如 "无农残｜有机认证"',      type: 'string',    defaultVal: '—' },
        { prop: '营销标签',     desc: '配送/促销/满减等营销标签列表',           type: '营销标签[]', defaultVal: '—' },
        { prop: '下单数',       desc: '"N万人已下单"文案（金色字）',            type: 'string',    defaultVal: '—' },
        { prop: '榜单横幅',     desc: '榜单横幅文案（单列/双列）',             type: 'string',    defaultVal: '—' },
        { prop: '原价',         desc: '划线原价（泳道/新人专区专用）',         type: 'string',    defaultVal: '—' },
        { prop: '购物车badge',  desc: '购物车数字角标',                        type: 'number',    defaultVal: '—' },
        { prop: 'onCartClick',  desc: '点击购物车按钮',                        type: '() => void', defaultVal: '—' },
        { prop: 'onClick',      desc: '点击卡片整体',                          type: '() => void', defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
