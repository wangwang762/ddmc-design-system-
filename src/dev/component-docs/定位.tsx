import React from 'react'
import { DocPage, DemoSection, DemoRow, ApiTable, RulesPanel} from '../DocLayout'
import { 定位 } from '../../components/定位'
// @ts-ignore
import rulesRaw from '../../components/定位/rules.md?raw'

const GreenBg: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{
    background: 'linear-gradient(180deg, #06C167 0%, #04A856 100%)',
    borderRadius: 12,
    padding: '12px 0',
    width: 390,
  }}>
    {children}
  </div>
)

export function 定位Doc() {
  return (
    <DocPage name="定位" enName="Address Bar" description="首页顶部地址栏，显示当前收货地址与站点名称，右侧含消息图标入口。组件设计为叠于首页绿色渐变背景之上，文字为白色。">
      <DemoSection title="变体">
        <DemoRow label="有地址">
          <GreenBg>
            <定位
              地址="上海市浦东新区陆家嘴环路1000号"
              站点="叮咚买菜·陆家嘴店"
              onAddressClick={() => {}}
              onMessageClick={() => {}}
            />
          </GreenBg>
        </DemoRow>
        <DemoRow label="地址较短">
          <GreenBg>
            <定位
              地址="浦东新区"
              站点="张江店"
              onAddressClick={() => {}}
              onMessageClick={() => {}}
            />
          </GreenBg>
        </DemoRow>
        <DemoRow label="无地址（未选择）">
          <GreenBg>
            <定位
              onAddressClick={() => {}}
              onMessageClick={() => {}}
            />
          </GreenBg>
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: '地址',          desc: '收货地址文字',     type: 'string',        defaultVal: '—' },
        { prop: '站点',          desc: '站点名称',         type: 'string',        defaultVal: '—' },
        { prop: 'onAddressClick', desc: '点击地址区域',   type: '() => void',    defaultVal: '—' },
        { prop: 'onMessageClick', desc: '点击消息图标',   type: '() => void',    defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
