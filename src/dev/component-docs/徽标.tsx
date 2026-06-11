import React from 'react'
import { DocPage, DemoSection, DemoRow, ApiTable, RulesPanel} from '../DocLayout'
import { 徽标 } from '../../components/徽标'
// @ts-ignore
import rulesRaw from '../../components/徽标/rules.md?raw'

export function 徽标Doc() {
  return (
    <DocPage name="徽标" enName="Badge" description="叠加在图标或头像上的角标提示，支持红点、数字、更多、左下直角四种类型。">
      <DemoSection title="类型 × 尺寸">
        <DemoRow label="红点 — 大/小（无描边/有描边）">
          <徽标 类型="红点" 尺寸="大" />
          <徽标 类型="红点" 尺寸="大" 描边 />
          <徽标 类型="红点" 尺寸="小" />
          <徽标 类型="红点" 尺寸="小" 描边 />
        </DemoRow>
        <DemoRow label="数字 — 个位 / 多位 / 超出(>99)">
          <徽标 类型="数字" 尺寸="大" count={1} />
          <徽标 类型="数字" 尺寸="大" count={9} />
          <徽标 类型="数字" 尺寸="大" count={99} />
          <徽标 类型="数字" 尺寸="大" count={100} />
          <徽标 类型="数字" 尺寸="小" count={5} />
          <徽标 类型="数字" 尺寸="小" count={99} />
          <徽标 类型="数字" 尺寸="小" count={100} />
        </DemoRow>
        <DemoRow label="更多 — 大/小">
          <徽标 类型="更多" 尺寸="大" />
          <徽标 类型="更多" 尺寸="小" />
        </DemoRow>
        <DemoRow label="左下直角 — 卡片状态标签">
          <徽标 类型="左下直角" 尺寸="大" label="上新啦" />
          <徽标 类型="左下直角" 尺寸="大" label="爆款" />
          <徽标 类型="左下直角" 尺寸="小" label="上新啦" />
        </DemoRow>
      </DemoSection>

      <DemoSection title="描边 — 叠加在深色背景时使用" bg="#1A1A1A">
        <DemoRow>
          <徽标 类型="数字" 尺寸="大" count={5}  描边 />
          <徽标 类型="数字" 尺寸="大" count={99} 描边 />
          <徽标 类型="红点" 尺寸="大" 描边 />
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: '类型',  desc: '徽标形态',                            type: "'红点' | '数字' | '更多' | '左下直角'", defaultVal: "'红点'" },
        { prop: '尺寸',  desc: '大=16px，小=12px（红点大=8px 小=6px）', type: "'大' | '小'",                        defaultVal: "'大'" },
        { prop: 'count', desc: '数字类型显示值，>99 自动显示 ···',    type: 'number',                               defaultVal: '—' },
        { prop: 'label', desc: '左下直角类型的文字',                  type: 'string',                               defaultVal: '—' },
        { prop: '描边',  desc: '叠在深色背景上时启用白色描边',        type: 'boolean',                              defaultVal: 'false' },
      ]} />
    </DocPage>
  )
}
