import React, { useState } from 'react'
import { DocPage, DemoSection, DemoRow, MobileFrame, ApiTable, RulesPanel} from '../DocLayout'
import { GroupedRow, 活动条 } from '../../components/Cell'
// @ts-ignore
import rulesRaw from '../../components/Cell/rules.md?raw'

export function CellDoc() {
  const [sw, setSw] = useState(false)
  const [radio, setRadio] = useState<'选中' | '未选中'>('未选中')

  return (
    <DocPage name="Cell" enName="Cell / List Row" description="列表行通用组件，覆盖设置项、信息行、满减活动条三类场景，右侧附件支持文字/箭头/按钮/开关/单选按钮。">
      <DemoSection title="默认附件（文字 + 箭头）">
        <DemoRow>
          <MobileFrame bg="#F5F5F5">
            <div style={{ borderRadius: 12, overflow: 'hidden' }}>
              <GroupedRow 主标题="收货地址" 右副信息="上海市浦东新区" showArrow onClick={() => {}} />
              <GroupedRow 主标题="联系方式" 右副信息="138****8888" showArrow onClick={() => {}} />
              <GroupedRow 主标题="备注" 右副信息="请放门口" showArrow onClick={() => {}} />
            </div>
          </MobileFrame>
        </DemoRow>
      </DemoSection>

      <DemoSection title="附带头像 / 副标题">
        <DemoRow>
          <MobileFrame bg="#F5F5F5">
            <div style={{ borderRadius: 12, overflow: 'hidden' }}>
              <GroupedRow showAvatar avatarSrc="https://via.placeholder.com/40" 主标题="叮咚用户" 副标题="188****1234" showArrow onClick={() => {}} />
              <GroupedRow 主标题="账号与安全" 副标题="已实名认证" showArrow onClick={() => {}} />
            </div>
          </MobileFrame>
        </DemoRow>
      </DemoSection>

      <DemoSection title="开关附件">
        <DemoRow>
          <MobileFrame bg="#F5F5F5">
            <div style={{ borderRadius: 12, overflow: 'hidden' }}>
              <GroupedRow 类型="开关" 主标题="消息推送" showInfo 副标题="开启后可接收优惠信息" 开关Active={sw} on开关Change={setSw} />
            </div>
          </MobileFrame>
        </DemoRow>
      </DemoSection>

      <DemoSection title="单选按钮附件">
        <DemoRow>
          <MobileFrame bg="#F5F5F5">
            <div style={{ borderRadius: 12, overflow: 'hidden' }}>
              <GroupedRow 类型="单选按钮" 主标题="明日 08:00 — 12:00" 单选状态={radio === '选中' ? '选中' : '未选中'} on单选Click={() => setRadio(radio === '选中' ? '未选中' : '选中')} />
              <GroupedRow 类型="单选按钮" 主标题="明日 12:00 — 18:00" 单选状态="未选中" on单选Click={() => {}} />
              <GroupedRow 类型="单选按钮" 主标题="明日 18:00 — 22:00" 单选状态="不可选" on单选Click={() => {}} />
            </div>
          </MobileFrame>
        </DemoRow>
      </DemoSection>

      <DemoSection title="按钮附件">
        <DemoRow>
          <MobileFrame bg="#F5F5F5">
            <div style={{ borderRadius: 12, overflow: 'hidden' }}>
              <GroupedRow 类型="按钮" 主标题="邀请好友" 按钮文案="立即邀请" onButtonClick={() => alert('邀请')} />
            </div>
          </MobileFrame>
        </DemoRow>
      </DemoSection>

      <DemoSection title="活动条">
        <DemoRow label="小 — 标签左侧">
          <MobileFrame><活动条 尺寸="小" 左侧类型="标签" 标签文字="满减" 活动文字="满39元减3元，再满68元减6元" 去凑单文字="去凑单" onCtaClick={() => {}} /></MobileFrame>
        </DemoRow>
        <DemoRow label="大 — 图片左侧">
          <MobileFrame><活动条 尺寸="大" 左侧类型="图片" 图片Src="https://via.placeholder.com/32" 活动文字="满39元减3元，再满68元减6元" 去凑单文字="去凑单" onCtaClick={() => {}} /></MobileFrame>
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable title="GroupedRow API" rows={[
        { prop: '主标题',    desc: '主文字（必填）',         type: 'string',                                  defaultVal: '—' },
        { prop: '类型',      desc: '右侧附件类型',           type: "'默认' | '按钮' | '开关' | '单选按钮'",   defaultVal: "'默认'" },
        { prop: '右副信息',  desc: '右侧灰色文字',           type: 'string',                                  defaultVal: '—' },
        { prop: 'showArrow', desc: '显示右箭头',             type: 'boolean',                                 defaultVal: 'false' },
        { prop: 'showAvatar', desc: '显示头像',              type: 'boolean',                                 defaultVal: 'false' },
        { prop: '副标题',    desc: '主标题下方说明文字',     type: 'string',                                  defaultVal: '—' },
        { prop: '开关Active', desc: '开关状态（类型=开关）', type: 'boolean',                                 defaultVal: 'false' },
        { prop: '单选状态',  desc: '单选状态（类型=单选按钮）', type: "'选中' | '未选中' | '不可选'",         defaultVal: "'未选中'" },
        { prop: 'onClick',   desc: '行点击回调',             type: '() => void',                             defaultVal: '—' },
      ]} />
      <ApiTable title="活动条 API" rows={[
        { prop: '尺寸',      desc: '行高规格',       type: "'小' | '大'",        defaultVal: "'小'" },
        { prop: '左侧类型',  desc: '左侧装饰类型',   type: "'标签' | '图片'",    defaultVal: "'标签'" },
        { prop: '标签文字',  desc: '标签文字',        type: 'string',            defaultVal: '—' },
        { prop: '活动文字',  desc: '满减说明文案',   type: 'string',             defaultVal: '—' },
        { prop: '去凑单文字', desc: 'CTA 文字',      type: 'string',             defaultVal: '—' },
        { prop: 'onCtaClick', desc: '点击去凑单',    type: '() => void',         defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
