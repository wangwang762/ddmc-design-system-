import React from 'react'
import { DocPage, DemoSection, DemoRow, MobileFrame, ApiTable, RulesPanel } from '../DocLayout'
import { 键盘 } from '../../components/键盘'
// @ts-ignore
import rulesRaw from '../../components/键盘/rules.md?raw'

export function 键盘Doc() {
  return (
    <DocPage name="键盘" enName="Keyboard" description="iOS 系统全键盘，仅用于 mockup 展示。三种模式：字母大写 / 字母小写 / 符号，含 Home Indicator。">
      <DemoSection title="字母大写">
        <DemoRow>
          <MobileFrame><键盘 模式="字母大写" /></MobileFrame>
        </DemoRow>
      </DemoSection>
      <DemoSection title="字母小写">
        <DemoRow>
          <MobileFrame><键盘 模式="字母小写" /></MobileFrame>
        </DemoRow>
      </DemoSection>
      <DemoSection title="符号">
        <DemoRow>
          <MobileFrame><键盘 模式="符号" /></MobileFrame>
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />
      <ApiTable rows={[
        { prop: '模式', desc: '键盘变体', type: "'字母大写' | '字母小写' | '符号'", defaultVal: "'字母大写'" },
      ]} />
    </DocPage>
  )
}
