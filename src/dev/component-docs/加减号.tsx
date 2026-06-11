import React, { useState } from 'react'
import { DocPage, DemoSection, DemoRow, ApiTable, RulesPanel} from '../DocLayout'
import { 加减号 } from '../../components/加减号'
// @ts-ignore
import rulesRaw from '../../components/加减号/rules.md?raw'

export function 加减号Doc() {
  const [count1, setCount1] = useState(1)
  const [count2, setCount2] = useState(99)
  return (
    <DocPage name="加减号" enName="Quantity Stepper" description="购物车内已加购商品的数量调整控件，加号可单独禁用（达到库存上限时使用）。">
      <DemoSection title="交互">
        <DemoRow label="正常">
          <加减号 count={count1} onDecrement={() => setCount1(q => Math.max(1, q - 1))} onIncrement={() => setCount1(q => q + 1)} />
        </DemoRow>
        <DemoRow label="加号不可点击（达到上限）">
          <加减号 count={count2} onDecrement={() => setCount2(q => Math.max(1, q - 1))} onIncrement={() => setCount2(q => q + 1)} 加号可点击={false} />
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: 'count',      desc: '当前数量',           type: 'number',    defaultVal: '—' },
        { prop: 'onDecrement', desc: '减号点击回调',      type: '() => void', defaultVal: '—' },
        { prop: 'onIncrement', desc: '加号点击回调',      type: '() => void', defaultVal: '—' },
        { prop: '加号可点击', desc: 'false=加号禁用',     type: 'boolean',    defaultVal: 'true' },
      ]} />
    </DocPage>
  )
}
