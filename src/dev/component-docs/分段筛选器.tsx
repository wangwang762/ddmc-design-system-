import React, { useState } from 'react'
import { DocPage, DemoSection, DemoRow, MobileFrame, ApiTable, RulesPanel} from '../DocLayout'
import { 分段筛选器 } from '../../components/分段筛选器'
// @ts-ignore
import rulesRaw from '../../components/分段筛选器/rules.md?raw'

export function 分段筛选器Doc() {
  const [activeKey, setActiveKey] = useState('recommend')
  const [sortOrder, setSortOrder] = useState<'默认' | '升序' | '降序'>('默认')
  const [activeKey2, setActiveKey2] = useState('all')
  const [sortOrder2, setSortOrder2] = useState<'默认' | '升序' | '降序'>('默认')

  return (
    <DocPage name="分段筛选器" enName="Segment Filter" description="列表页顶部多维度筛选/排序条，支持普通选项与可双向排序选项混排。">
      <DemoSection title="基础用法">
        <DemoRow label="含排序项">
          <MobileFrame>
            <分段筛选器
              items={[
                { key: 'recommend', label: '综合' },
                { key: 'sales',     label: '销量', sortable: true },
                { key: 'price',     label: '价格', sortable: true },
                { key: 'review',    label: '评价' },
              ]}
              activeKey={activeKey}
              sortOrder={sortOrder}
              onChange={(key, order) => { setActiveKey(key); setSortOrder(order) }}
            />
          </MobileFrame>
        </DemoRow>
        <DemoRow label="纯筛选（无排序）">
          <MobileFrame>
            <分段筛选器
              items={[
                { key: 'all',    label: '全部' },
                { key: 'veg',    label: '蔬菜水果' },
                { key: 'meat',   label: '肉禽蛋奶' },
                { key: 'aqua',   label: '水产海鲜' },
                { key: 'grain',  label: '粮油调味' },
              ]}
              activeKey={activeKey2}
              sortOrder={sortOrder2}
              onChange={(key, order) => { setActiveKey2(key); setSortOrder2(order) }}
            />
          </MobileFrame>
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable title="分段筛选器 API" rows={[
        { prop: 'items',     desc: '筛选项列表',          type: '分段筛选器Item[]',                   defaultVal: '—' },
        { prop: 'activeKey', desc: '当前选中 key',        type: 'string',                             defaultVal: '—' },
        { prop: 'sortOrder', desc: '当前排序状态',        type: "'默认' | '升序' | '降序'",            defaultVal: "'默认'" },
        { prop: 'onChange',  desc: '切换/排序回调',       type: '(key: string, order: 分段排序状态) => void', defaultVal: '—' },
      ]} />
      <ApiTable title="分段筛选器Item" rows={[
        { prop: 'key',      desc: '唯一标识',           type: 'string',  defaultVal: '—' },
        { prop: 'label',    desc: '显示文字',           type: 'string',  defaultVal: '—' },
        { prop: 'sortable', desc: '是否显示排序箭头',  type: 'boolean', defaultVal: 'false' },
      ]} />
    </DocPage>
  )
}
