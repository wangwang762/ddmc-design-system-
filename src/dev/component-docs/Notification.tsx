import React from 'react'
import { DocPage, DemoSection, DemoRow, MobileFrame, ApiTable, RulesPanel} from '../DocLayout'
import { Notification } from '../../components/Notification'
// @ts-ignore
import rulesRaw from '../../components/Notification/rules.md?raw'

export function NotificationDoc() {
  return (
    <DocPage name="Notification" enName="Notification" description="页面内单行提示条，不打断操作。三种重要度决定背景色，三种左侧修饰决定样式。">
      <DemoSection title="重要度 × 左侧修饰">
        <DemoRow label="默认 — 白色半透明（叠在图片/渐变上）">
          <div style={{ background: 'linear-gradient(135deg,#4a9a5a,#2d7a4a)', padding: 12, borderRadius: 8 }}>
            <Notification 文案="提示文案，禁止换行" />
          </div>
          <div style={{ background: 'linear-gradient(135deg,#4a9a5a,#2d7a4a)', padding: 12, borderRadius: 8 }}>
            <Notification 左侧="icon" iconName="Notice" 文案="提示文案，禁止换行" />
          </div>
          <div style={{ background: '#fff', padding: 12, borderRadius: 8, border: '1px solid #E6E6E6' }}>
            <Notification 左侧="标签" 标签文字="温馨提示" 文案="提示文案，禁止换行" />
          </div>
        </DemoRow>
        <DemoRow label="一般 — 灰底（容器已是白色时使用）">
          <Notification 重要度="一般" 文案="提示文案，禁止换行" />
          <Notification 重要度="一般" 左侧="icon" iconName="Notice" 文案="提示文案，禁止换行" />
          <Notification 重要度="一般" 左侧="标签" 标签文字="温馨提示" 文案="提示文案，禁止换行" />
        </DemoRow>
        <DemoRow label="重要 — 浅红底">
          <Notification 重要度="重要" 文案="提示文案，禁止换行" />
          <Notification 重要度="重要" 左侧="icon" iconName="Danger" 文案="提示文案，禁止换行" />
          <Notification 重要度="重要" 左侧="标签" 标签文字="温馨提示" 文案="提示文案，禁止换行" />
        </DemoRow>
        <DemoRow label="可关闭">
          <Notification 重要度="一般" 文案="点击右侧关闭此提示" 可关闭 />
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: '重要度',    desc: '背景色方案',             type: "'默认' | '一般' | '重要'",    defaultVal: "'默认'" },
        { prop: '左侧',      desc: '左侧修饰元素',           type: "'默认' | 'icon' | '标签'",    defaultVal: "'默认'" },
        { prop: '文案',      desc: '提示文字（单行）',       type: 'string',                      defaultVal: '—' },
        { prop: 'iconName',  desc: '图标名称（左侧=icon时）', type: 'IconName',                   defaultVal: "'Notice'" },
        { prop: '标签文字',  desc: 'pill 标签文案（左侧=标签时）', type: 'string',                defaultVal: "'温馨提示'" },
        { prop: '可关闭',    desc: '是否显示关闭按钮',       type: 'boolean',                     defaultVal: 'false' },
        { prop: 'onClose',   desc: '关闭回调',               type: '() => void',                  defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
