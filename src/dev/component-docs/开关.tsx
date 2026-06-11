import React, { useState } from 'react'
import { DocPage, DemoSection, DemoRow, ApiTable, RulesPanel} from '../DocLayout'
import { 开关 } from '../../components/开关'
// @ts-ignore
import rulesRaw from '../../components/开关/rules.md?raw'

export function 开关Doc() {
  const [大, set大] = useState(false)
  const [中, set中] = useState(true)
  const [小, set小] = useState(false)
  return (
    <DocPage name="开关" enName="Switch" description="开关类设置项，支持大/中/小三种尺寸。">
      <DemoSection title="静态 — off / on">
        <DemoRow label="大">
          <开关 尺寸="大" active={false} />
          <开关 尺寸="大" active={true} />
        </DemoRow>
        <DemoRow label="中">
          <开关 尺寸="中" active={false} />
          <开关 尺寸="中" active={true} />
        </DemoRow>
        <DemoRow label="小">
          <开关 尺寸="小" active={false} />
          <开关 尺寸="小" active={true} />
        </DemoRow>
      </DemoSection>

      <DemoSection title="交互（点击切换）">
        <DemoRow>
          <开关 尺寸="大" active={大} onChange={set大} />
          <开关 尺寸="中" active={中} onChange={set中} />
          <开关 尺寸="小" active={小} onChange={set小} />
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: '尺寸',    desc: '开关尺寸',       type: "'大' | '中' | '小'", defaultVal: "'大'" },
        { prop: 'active',  desc: '是否开启',       type: 'boolean',            defaultVal: 'false' },
        { prop: 'onChange', desc: '状态变更回调',  type: '(active: boolean) => void', defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
