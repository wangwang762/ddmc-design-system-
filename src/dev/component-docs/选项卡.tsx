import React, { useState } from 'react'
import { DocPage, DemoSection, DemoRow, MobileFrame, ApiTable, RulesPanel} from '../DocLayout'
import { 选项卡 } from '../../components/选项卡'
// @ts-ignore
import rulesRaw from '../../components/选项卡/rules.md?raw'

export function 选项卡Doc() {
  const [t2, setT2] = useState('tab1')
  const [t3, setT3] = useState('tab1')
  const [t4, setT4] = useState('tab2')
  const [t5, setT5] = useState('tab3')
  const [ts, setTs] = useState('tab1')
  const [tv, setTv] = useState('tab1')
  return (
    <DocPage name="选项卡" enName="Tabs" description="页面内容区 Tab 切换，支持横向固定列（2~5列）、横向滚动、竖向三种模式。">
      <DemoSection title="横向 — 固定列">
        <DemoRow label="二列">
          <MobileFrame><选项卡 列数="二列" tabs={[{ key: 'tab1', label: '标签页一' }, { key: 'tab2', label: '标签页二' }]} activeKey={t2} onChange={setT2} /></MobileFrame>
        </DemoRow>
        <DemoRow label="三列">
          <MobileFrame><选项卡 列数="三列" tabs={[{ key: 'tab1', label: '标签页一' }, { key: 'tab2', label: '标签页二' }, { key: 'tab3', label: '标签页三' }]} activeKey={t3} onChange={setT3} /></MobileFrame>
        </DemoRow>
        <DemoRow label="四列">
          <MobileFrame><选项卡 列数="四列" tabs={[{ key: 'tab1', label: '综合' }, { key: 'tab2', label: '销量' }, { key: 'tab3', label: '价格' }, { key: 'tab4', label: '评价' }]} activeKey={t4} onChange={setT4} /></MobileFrame>
        </DemoRow>
        <DemoRow label="五列">
          <MobileFrame><选项卡 列数="五列" tabs={[{ key: 'tab1', label: '推荐' }, { key: 'tab2', label: '热销' }, { key: 'tab3', label: '新品' }, { key: 'tab4', label: '价格' }, { key: 'tab5', label: '评价' }]} activeKey={t5} onChange={setT5} /></MobileFrame>
        </DemoRow>
      </DemoSection>
      <DemoSection title="横向 — 滚动">
        <DemoRow>
          <MobileFrame><选项卡 列数="滚动" tabs={['一','二','三','四','五','六','七'].map((l,i) => ({ key: `tab${i+1}`, label: `标签页${l}` }))} activeKey={ts} onChange={setTs} /></MobileFrame>
        </DemoRow>
      </DemoSection>
      <DemoSection title="竖向">
        <DemoRow>
          <MobileFrame bg="#F5F5F5">
            <选项卡 方向="竖向" tabs={[1,2,3,4,5].map(i => ({ key: `tab${i}`, label: `标签页${i}`, content: <div style={{ padding: 16, color: '#1A1A1A', fontSize: 14 }}>标签{i}内容区</div> }))} activeKey={tv} onChange={setTv} />
          </MobileFrame>
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: '方向',    desc: '排列方向',       type: "'横向' | '竖向'",                      defaultVal: "'横向'" },
        { prop: '列数',    desc: '横向时的列数',   type: "'二列' | '三列' | '四列' | '五列' | '滚动'", defaultVal: "'三列'" },
        { prop: 'tabs',    desc: 'Tab 配置数组',   type: '选项卡Item[]',                         defaultVal: '—' },
        { prop: 'activeKey', desc: '当前选中 key', type: 'string',                               defaultVal: '—' },
        { prop: 'onChange',  desc: '切换回调',     type: '(key: string) => void',                defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
