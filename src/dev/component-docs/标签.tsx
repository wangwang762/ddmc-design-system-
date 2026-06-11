import React from 'react'
import { DocPage, DemoSection, DemoRow, ApiTable, RulesPanel} from '../DocLayout'
import { 标签 } from '../../components/标签'
import { 标题前标签 } from '../../components/标题前标签'
// @ts-ignore
import rulesRaw from '../../components/标签/rules.md?raw'

export function 标签Doc() {
  return (
    <DocPage name="标签" enName="Tag" description="商品/菜谱卡片的行内文字标签，支持 4 色 × 4 类型 × 4 尺寸 × 圆角/直角组合。">
      <DemoSection title="类型 × 颜色">
        <DemoRow label="基本">
          <标签 颜色="绿色" 类型="基本">新鲜</标签>
          <标签 颜色="红色" 类型="基本">促销</标签>
          <标签 颜色="蓝色" 类型="基本">预售</标签>
          <标签 颜色="标准" 类型="基本">自营</标签>
        </DemoRow>
        <DemoRow label="实心">
          <标签 颜色="绿色" 类型="实心">新鲜</标签>
          <标签 颜色="红色" 类型="实心">促销</标签>
          <标签 颜色="蓝色" 类型="实心">预售</标签>
          <标签 颜色="标准" 类型="实心">自营</标签>
        </DemoRow>
        <DemoRow label="空心(实线)">
          <标签 颜色="绿色" 类型="空心(实线)">新鲜</标签>
          <标签 颜色="红色" 类型="空心(实线)">促销</标签>
          <标签 颜色="蓝色" 类型="空心(实线)">预售</标签>
          <标签 颜色="标准" 类型="空心(实线)">自营</标签>
        </DemoRow>
        <DemoRow label="空心(虚线)">
          <标签 颜色="绿色" 类型="空心(虚线)">新鲜</标签>
          <标签 颜色="红色" 类型="空心(虚线)">促销</标签>
          <标签 颜色="蓝色" 类型="空心(虚线)">预售</标签>
          <标签 颜色="标准" 类型="空心(虚线)">自营</标签>
        </DemoRow>
      </DemoSection>

      <DemoSection title="尺寸 × 圆角">
        <DemoRow label="尺寸 28 / 24 / 18 / 14">
          <标签 颜色="绿色" 类型="实心" 尺寸="28">标签</标签>
          <标签 颜色="绿色" 类型="实心" 尺寸="24">标签</标签>
          <标签 颜色="绿色" 类型="实心" 尺寸="18">标签</标签>
          <标签 颜色="绿色" 类型="实心" 尺寸="14">标签</标签>
        </DemoRow>
        <DemoRow label="圆角 false / true">
          <标签 颜色="绿色" 类型="实心" 圆角={false}>新鲜</标签>
          <标签 颜色="绿色" 类型="实心" 圆角={true}>新鲜</标签>
          <标签 颜色="红色" 类型="基本" 圆角={false}>促销</标签>
          <标签 颜色="红色" 类型="基本" 圆角={true}>促销</标签>
        </DemoRow>
      </DemoSection>

      <DemoSection title="标题前标签" desc="商品标题前的彩色业务标签，颜色与文字业务锁定不可分离">
        <DemoRow label="小尺寸（商品卡片）">
          <标题前标签 类型="疯抢" /><标题前标签 类型="预售" /><标题前标签 类型="新品" />
          <标题前标签 类型="趋势" /><标题前标签 类型="宝妈严选" /><标题前标签 类型="叮咚心选" /><标题前标签 类型="美麒麟" />
        </DemoRow>
        <DemoRow label="大尺寸（商品详情页）">
          <标题前标签 类型="疯抢" 尺寸="大" /><标题前标签 类型="预售" 尺寸="大" /><标题前标签 类型="新品" 尺寸="大" />
          <标题前标签 类型="宝妈严选" 尺寸="大" /><标题前标签 类型="叮咚心选" 尺寸="大" /><标题前标签 类型="美麒麟" 尺寸="大" />
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable title="标签 API" rows={[
        { prop: '颜色',   desc: '语义颜色',                     type: "'绿色' | '红色' | '蓝色' | '标准'",          defaultVal: "'绿色'" },
        { prop: '类型',   desc: '填充/描边样式',               type: "'基本' | '实心' | '空心(实线)' | '空心(虚线)'", defaultVal: "'基本'" },
        { prop: '尺寸',   desc: '对应行高 px',                 type: "'28' | '24' | '18' | '14'",                  defaultVal: "'24'" },
        { prop: '圆角',   desc: 'true=胶囊形，false=直角',     type: 'boolean',                                     defaultVal: 'false' },
        { prop: 'children', desc: '标签文字',                  type: 'ReactNode',                                   defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
