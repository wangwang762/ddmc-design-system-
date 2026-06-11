import React from 'react'
import { DocPage, DemoSection, DemoRow, ApiTable, RulesPanel } from '../DocLayout'
import { 按钮 } from '../../components/按钮'
// @ts-ignore
import rulesRaw from '../../components/按钮/rules.md?raw'

export function 按钮Doc() {
  return (
    <DocPage name="按钮" enName="Button" description="页面与弹窗中的主次操作按钮，支持 Primary / Secondary 两种类型和 XLarge / Large / Medium / Small 四档尺寸。">
      <DemoSection title="Primary">
        <DemoRow label="XLarge"><按钮 尺寸="XLarge" 类型="Primary">按钮文案</按钮></DemoRow>
        <DemoRow label="Large"><按钮 尺寸="Large" 类型="Primary">按钮文案</按钮></DemoRow>
        <DemoRow label="Medium"><按钮 尺寸="Medium" 类型="Primary">按钮文案</按钮></DemoRow>
        <DemoRow label="Small"><按钮 尺寸="Small" 类型="Primary">按钮文案</按钮></DemoRow>
        <DemoRow label="Disabled"><按钮 尺寸="XLarge" 类型="Primary" disabled>按钮文案</按钮></DemoRow>
        <DemoRow label="自适应=false（撑满父容器）">
          <div style={{ width: 300 }}><按钮 尺寸="XLarge" 类型="Primary" 自适应={false}>按钮文案</按钮></div>
        </DemoRow>
      </DemoSection>

      <DemoSection title="Secondary">
        <DemoRow label="XLarge"><按钮 尺寸="XLarge" 类型="Secondary">按钮文案</按钮></DemoRow>
        <DemoRow label="Large"><按钮 尺寸="Large" 类型="Secondary">按钮文案</按钮></DemoRow>
        <DemoRow label="Medium"><按钮 尺寸="Medium" 类型="Secondary">按钮文案</按钮></DemoRow>
        <DemoRow label="Small"><按钮 尺寸="Small" 类型="Secondary">按钮文案</按钮></DemoRow>
        <DemoRow label="Disabled"><按钮 尺寸="XLarge" 类型="Secondary" disabled>按钮文案</按钮></DemoRow>
      </DemoSection>

      <RulesPanel markdown={rulesRaw} />

      <ApiTable rows={[
        { prop: '尺寸',   desc: '按钮尺寸',                type: "'XLarge' | 'Large' | 'Medium' | 'Small'", defaultVal: "'Large'" },
        { prop: '类型',   desc: '视觉类型',                type: "'Primary' | 'Secondary'",                  defaultVal: "'Primary'" },
        { prop: '自适应', desc: 'true=内容宽，false=撑满', type: 'boolean',                                  defaultVal: 'true' },
        { prop: 'disabled', desc: '禁用状态',              type: 'boolean',                                  defaultVal: 'false' },
        { prop: 'iconLeft / iconRight', desc: '左/右图标', type: 'ReactNode',                                defaultVal: '—' },
        { prop: 'children', desc: '按钮文字',              type: 'ReactNode',                                defaultVal: '—' },
        { prop: 'onClick', desc: '点击回调',               type: 'MouseEventHandler',                        defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
