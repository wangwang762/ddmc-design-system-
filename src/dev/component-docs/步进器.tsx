import React, { useState } from 'react'
import { DocPage, DemoSection, DemoRow, ApiTable, RulesPanel} from '../DocLayout'
import { 步进器 } from '../../components/步进器'
// @ts-ignore
import rulesRaw from '../../components/步进器/rules.md?raw'

export function 步进器Doc() {
  const [大count, set大count] = useState(10)
  const [小count, set小count] = useState(10)
  return (
    <DocPage name="步进器" enName="Stepper" description="独立于购物车的通用数量输入控件，支持大/小两种尺寸和四种交互状态。">
      <DemoSection title="四种状态">
        <DemoRow label="大">
          <步进器 类型="大" 状态="默认"    count={10} />
          <步进器 类型="大" 状态="无法修改" count={1} />
          <步进器 类型="大" 状态="无法减少" count={1} />
          <步进器 类型="大" 状态="无法增加" count={1} />
        </DemoRow>
        <DemoRow label="小">
          <步进器 类型="小" 状态="默认"    count={10} />
          <步进器 类型="小" 状态="无法修改" count={1} />
          <步进器 类型="小" 状态="无法减少" count={1} />
          <步进器 类型="小" 状态="无法增加" count={1} />
        </DemoRow>
      </DemoSection>

      <DemoSection title="交互">
        <DemoRow label="大">
          <步进器 类型="大" count={大count} onDecrement={() => set大count(c => Math.max(1, c - 1))} onIncrement={() => set大count(c => c + 1)} 状态={大count <= 1 ? '无法减少' : '默认'} />
        </DemoRow>
        <DemoRow label="小">
          <步进器 类型="小" count={小count} onDecrement={() => set小count(c => Math.max(1, c - 1))} onIncrement={() => set小count(c => c + 1)} 状态={小count <= 1 ? '无法减少' : '默认'} />
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: '类型',      desc: '外观尺寸',           type: "'大' | '小'",                               defaultVal: "'大'" },
        { prop: '状态',      desc: '交互状态',           type: "'默认' | '无法修改' | '无法减少' | '无法增加'", defaultVal: "'默认'" },
        { prop: 'count',     desc: '当前数量',           type: 'number',                                    defaultVal: '—' },
        { prop: 'onDecrement', desc: '减号点击回调',     type: '() => void',                                defaultVal: '—' },
        { prop: 'onIncrement', desc: '加号点击回调',     type: '() => void',                                defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
