import React, { useState } from 'react'
import { DocPage, DemoSection, DemoRow, ApiTable, RulesPanel} from '../DocLayout'
import { 选择按钮 } from '../../components/选择按钮'
// @ts-ignore
import rulesRaw from '../../components/选择按钮/rules.md?raw'

export function 选择按钮Doc() {
  const [默认状态, set默认状态] = useState<'未选中' | '选中'>('未选中')
  const [绿卡状态, set绿卡状态] = useState<'未选中' | '选中'>('未选中')
  return (
    <DocPage name="选择按钮" enName="Radio Button" description="互斥单选场景（收货地址、配送时段、商品规格等），支持默认和绿卡会员两种主题。">
      <DemoSection title="三种状态">
        <DemoRow label="默认主题">
          <选择按钮 状态="未选中" 类型="默认" />
          <选择按钮 状态="选中"   类型="默认" />
          <选择按钮 状态="不可选" 类型="默认" />
        </DemoRow>
        <DemoRow label="绿卡主题">
          <选择按钮 状态="未选中" 类型="绿卡" />
          <选择按钮 状态="选中"   类型="绿卡" />
          <选择按钮 状态="不可选" 类型="绿卡" />
        </DemoRow>
      </DemoSection>

      <DemoSection title="交互">
        <DemoRow label="默认（点击切换）">
          <选择按钮 状态={默认状态} 类型="默认" onClick={() => set默认状态(s => s === '选中' ? '未选中' : '选中')} />
        </DemoRow>
        <DemoRow label="绿卡（点击切换）">
          <选择按钮 状态={绿卡状态} 类型="绿卡" onClick={() => set绿卡状态(s => s === '选中' ? '未选中' : '选中')} />
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: '状态', desc: '选中状态',    type: "'未选中' | '选中' | '不可选'", defaultVal: "'未选中'" },
        { prop: '类型', desc: '视觉主题',    type: "'默认' | '绿卡'",             defaultVal: "'默认'" },
        { prop: 'onClick', desc: '点击回调', type: '() => void',                  defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
