import React from 'react'
import { DocPage, DemoSection, DemoRow, MobileFrame, ApiTable, RulesPanel} from '../DocLayout'
import { TitleBar } from '../../components/标题栏'
// @ts-ignore
import rulesRaw from '../../components/标题栏/rules.md?raw'

export function 标题栏Doc() {
  return (
    <DocPage name="标题栏" enName="Title Bar" description="二级及以下页面顶部导航栏，左侧支持返回/close/用户信息/无四种操作，右侧支持图标按钮或文案按钮。">
      <DemoSection title="变体">
        <DemoRow label="返回 + 标题 + 购物车 + 分享">
          <MobileFrame><TitleBar 标题="商品详情" show购物车 购物车Badge={3} show分享 onBack={() => {}} /></MobileFrame>
        </DemoRow>
        <DemoRow label="返回 + 标题（无右侧图标）">
          <MobileFrame><TitleBar 标题="收货地址" onBack={() => {}} /></MobileFrame>
        </DemoRow>
        <DemoRow label="close + 标题 + 右侧文案">
          <MobileFrame><TitleBar 左操作="close" 标题="选择规格" 右侧文案="明细" onBack={() => {}} /></MobileFrame>
        </DemoRow>
        <DemoRow label="用户信息 + 标题 + 小程序">
          <MobileFrame><TitleBar 左操作="用户信息" 用户名="叮咚用户" 标题="叮咚买菜" show小程序 /></MobileFrame>
        </DemoRow>
        <DemoRow label="无左操作 + 标题">
          <MobileFrame><TitleBar 左操作="无" 标题="首页" show购物车 购物车Badge={99} /></MobileFrame>
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: '左操作',    desc: '左侧操作区类型',              type: "'返回' | 'close' | '用户信息' | '无'", defaultVal: "'返回'" },
        { prop: 'onBack',    desc: '返回/close 点击回调',         type: '() => void',                          defaultVal: '—' },
        { prop: '标题',      desc: '标题文字',                    type: 'string',                              defaultVal: '—' },
        { prop: '右侧文案',  desc: '右侧文案按钮（与图标互斥）',  type: 'string',                              defaultVal: '—' },
        { prop: 'show购物车', desc: '显示购物车图标',             type: 'boolean',                             defaultVal: 'false' },
        { prop: '购物车Badge', desc: '购物车数字徽标',            type: 'number',                              defaultVal: '—' },
        { prop: 'show分享',  desc: '显示分享图标',                type: 'boolean',                             defaultVal: 'false' },
        { prop: 'show小程序', desc: '显示小程序按钮（独占右侧）', type: 'boolean',                             defaultVal: 'false' },
        { prop: '用户名',    desc: '用户信息模式的名称',          type: 'string',                              defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
