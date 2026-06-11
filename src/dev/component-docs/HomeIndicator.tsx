import React from 'react'
import { DocPage, DemoSection, DemoRow, ApiTable, RulesPanel } from '../DocLayout'
import { HomeIndicator } from '../../components/HomeIndicator'
// @ts-ignore
import rulesRaw from '../../components/HomeIndicator/rules.md?raw'

export function HomeIndicatorDoc() {
  return (
    <DocPage name="Home Indicator" enName="Home Indicator" description="iOS 系统底部横条，仅用于 mockup 展示。浅色页面用 Light，深色页面用 Dark。">
      <DemoSection title="Light（浅色页面）" bg="#F5F5F5">
        <DemoRow>
          <div style={{ width: 375, background: '#fff', borderRadius: 8, border: '1px solid #E6E6E6' }}>
            <HomeIndicator mode="Light" />
          </div>
        </DemoRow>
      </DemoSection>
      <DemoSection title="Dark（深色页面）" bg="#333">
        <DemoRow>
          <div style={{ width: 375, background: '#1A1A1A', borderRadius: 8 }}>
            <HomeIndicator mode="Dark" />
          </div>
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />
      <ApiTable rows={[
        { prop: 'mode', desc: '横条颜色，匹配页面背景', type: "'Light' | 'Dark'", defaultVal: "'Light'" },
      ]} />
    </DocPage>
  )
}
