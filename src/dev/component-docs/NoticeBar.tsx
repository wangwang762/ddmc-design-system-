import React from 'react'
import { DocPage, DemoSection, DemoRow, MobileFrame, ApiTable, RulesPanel} from '../DocLayout'
import { NoticeBar } from '../../components/NoticeBar'
// @ts-ignore
import rulesRaw from '../../components/NoticeBar/rules.md?raw'

export function NoticeBarDoc() {
  return (
    <DocPage name="NoticeBar" enName="Notice Bar" description="页面顶部通知条，支持系统公告、活动、绿卡续费、红包、倒计时 5 种类型，可带 CTA 按钮与关闭按钮。">
      <DemoSection title="5 种类型">
        <DemoRow label="一般 — 纯文字">
          <MobileFrame><NoticeBar 类型="一般" 文案="您有一笔订单正在配送中，请保持手机畅通" 可关闭={false} /></MobileFrame>
        </DemoRow>
        <DemoRow label="一般 — 带 icon">
          <MobileFrame><NoticeBar 类型="一般" 文案="系统升级通知，请及时更新" iconName="Notice" 可关闭={false} /></MobileFrame>
        </DemoRow>
        <DemoRow label="重要">
          <MobileFrame><NoticeBar 类型="重要" 文案="您的绿卡即将到期，请及时续费" iconName="Bell" 可关闭={false} /></MobileFrame>
        </DemoRow>
        <DemoRow label="绿卡 — 带 CTA">
          <MobileFrame><NoticeBar 类型="绿卡" 文案="绿卡已到期，续费享专属权益" 按钮文案="去续费" 可关闭={false} /></MobileFrame>
        </DemoRow>
        <DemoRow label="红包 — 带 CTA">
          <MobileFrame><NoticeBar 类型="红包" 文案="您有红包未使用，下单立享优惠" 按钮文案="去下单" 可关闭={false} /></MobileFrame>
        </DemoRow>
        <DemoRow label="倒计时">
          <MobileFrame><NoticeBar 类型="倒计时" 文案="疯抢活动" 倒计时="00:29:44.0" 按钮文案="去抢购" 可关闭={false} /></MobileFrame>
        </DemoRow>
        <DemoRow label="可关闭">
          <MobileFrame><NoticeBar 类型="一般" 文案="点击右侧 × 可关闭此通知条" /></MobileFrame>
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: '类型',      desc: '通知类型，控制背景色和样式',     type: "'一般' | '重要' | '绿卡' | '红包' | '倒计时'", defaultVal: "'一般'" },
        { prop: '文案',      desc: '通知文字（最多14个汉字）',       type: 'string',                                       defaultVal: '—' },
        { prop: 'iconName',  desc: '左侧图标（一般/重要 icon样式）', type: 'IconName',                                     defaultVal: '—' },
        { prop: 'iconSrc',   desc: '左侧图片 URL',                   type: 'string',                                       defaultVal: '—' },
        { prop: '倒计时',    desc: '倒计时文字，如 "00:30:00.0"',    type: 'string',                                       defaultVal: '—' },
        { prop: '按钮文案',  desc: '右侧 CTA 按钮文案',              type: 'string',                                       defaultVal: '—' },
        { prop: 'onButtonClick', desc: 'CTA 点击回调',              type: '() => void',                                   defaultVal: '—' },
        { prop: '可关闭',    desc: '是否显示关闭按钮',               type: 'boolean',                                      defaultVal: 'true' },
        { prop: 'onClose',   desc: '关闭回调',                       type: '() => void',                                   defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
