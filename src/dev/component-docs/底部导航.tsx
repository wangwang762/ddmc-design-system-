import React, { useState } from 'react'
import { DocPage, DemoSection, DemoRow, MobileFrame, ApiTable, RulesPanel} from '../DocLayout'
import { 底部导航, TabIcon首页, TabIcon分类, TabIcon吃什么, TabIcon榜单, TabIcon购物车, TabIcon我的, TabIconAI } from '../../components/底部导航'
import type { TabBarTab } from '../../components/底部导航'
// @ts-ignore
import rulesRaw from '../../components/底部导航/rules.md?raw'

export function 底部导航Doc() {
  const [active4, setActive4] = useState<TabBarTab>('首页')
  const [active5, setActive5] = useState<TabBarTab>('吃什么')
  return (
    <DocPage name="底部导航" enName="Tab Bar" description="应用主框架底部 Tab Bar，支持 4~6 个 Tab，中间位可设为「全图片」广告槽。">
      <DemoSection title="图标组件">
        <DemoRow label="所有 Tab 图标 — 未选中 / 选中">
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-end' }}>
            {[TabIcon首页, TabIcon分类, TabIcon吃什么, TabIcon榜单, TabIcon购物车, TabIcon我的].map((Ic, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <Ic selected={false} />
                <Ic selected={true} />
              </div>
            ))}
          </div>
        </DemoRow>
        <DemoRow label="全图片广告槽 — TabIconAI">
          <TabIconAI />
        </DemoRow>
      </DemoSection>

      <DemoSection title="Tab Bar 变体">
        <DemoRow label="5-tab 含全图片广告位（交互）">
          <MobileFrame>
            <底部导航 tabs={[{ tab: '首页' }, { tab: '分类' }, { tab: '吃什么', displayType: '全图片' }, { tab: '购物车', badge: 3 }, { tab: '我的' }]} activeTab={active5} onTabChange={setActive5} />
          </MobileFrame>
        </DemoRow>
        <DemoRow label="4-tab（交互）">
          <MobileFrame>
            <底部导航 tabs={[{ tab: '首页' }, { tab: '分类' }, { tab: '购物车', badge: 3 }, { tab: '我的' }]} activeTab={active4} onTabChange={setActive4} />
          </MobileFrame>
        </DemoRow>
        <DemoRow label="6-tab 全标签">
          <MobileFrame>
            <底部导航 tabs={[{ tab: '首页' }, { tab: '分类' }, { tab: '吃什么' }, { tab: '榜单' }, { tab: '购物车', badge: 1 }, { tab: '我的' }]} activeTab="榜单" onTabChange={() => {}} />
          </MobileFrame>
        </DemoRow>
        <DemoRow label="无 Home Indicator">
          <MobileFrame>
            <底部导航 tabs={[{ tab: '首页' }, { tab: '分类' }, { tab: '购物车' }, { tab: '我的' }]} activeTab="首页" onTabChange={() => {}} showHomeIndicator={false} />
          </MobileFrame>
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable title="底部导航 API" rows={[
        { prop: 'tabs',              desc: 'Tab 配置列表',                       type: 'TabBarItem[]',           defaultVal: '—' },
        { prop: 'activeTab',         desc: '当前选中 Tab，与路由同步',            type: 'TabBarTab',              defaultVal: '—' },
        { prop: 'onTabChange',       desc: 'Tab 切换回调',                       type: '(tab: TabBarTab) => void', defaultVal: '—' },
        { prop: 'showHomeIndicator', desc: '是否显示 iOS Home Indicator',        type: 'boolean',                defaultVal: 'true' },
      ]} />
      <ApiTable title="TabBarItem" rows={[
        { prop: 'tab',         desc: 'Tab 标识',                        type: 'TabBarTab',                  defaultVal: '—' },
        { prop: 'badge',       desc: '数字徽标',                        type: 'number',                     defaultVal: '—' },
        { prop: 'displayType', desc: '标准=图标+文字，全图片=大圆图',   type: "'标准' | '全图片'",           defaultVal: "'标准'" },
      ]} />
    </DocPage>
  )
}
