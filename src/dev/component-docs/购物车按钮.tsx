import React from 'react'
import { DocPage, DemoSection, DemoRow, ApiTable, RulesPanel} from '../DocLayout'
import { 购物车按钮 } from '../../components/购物车按钮'
// @ts-ignore
import rulesRaw from '../../components/购物车按钮/rules.md?raw'

export function 购物车按钮Doc() {
  return (
    <DocPage name="购物车按钮" enName="Cart Button" description="商品卡片右下角的首次加购入口，支持三种尺寸和三种状态，可叠加数字徽标。">
      <DemoSection title="三种尺寸 × 三种状态">
        <DemoRow label="26px">
          <购物车按钮 尺寸="26px" 按钮状态="默认" badge={1} />
          <购物车按钮 尺寸="26px" 按钮状态="缺货加购" badge={1} />
          <购物车按钮 尺寸="26px" 按钮状态="不可选中" />
        </DemoRow>
        <DemoRow label="22px">
          <购物车按钮 尺寸="22px" 按钮状态="默认" badge={1} />
          <购物车按钮 尺寸="22px" 按钮状态="缺货加购" badge={1} />
          <购物车按钮 尺寸="22px" 按钮状态="不可选中" />
        </DemoRow>
        <DemoRow label="18px">
          <购物车按钮 尺寸="18px" 按钮状态="默认" badge={1} />
          <购物车按钮 尺寸="18px" 按钮状态="缺货加购" badge={1} />
          <购物车按钮 尺寸="18px" 按钮状态="不可选中" />
        </DemoRow>
      </DemoSection>

      <DemoSection title="Badge 数字">
        <DemoRow>
          <购物车按钮 尺寸="26px" 按钮状态="默认" badge={5} />
          <购物车按钮 尺寸="26px" 按钮状态="默认" badge={99} />
          <购物车按钮 尺寸="26px" 按钮状态="默认" badge={100} />
          <购物车按钮 尺寸="26px" 按钮状态="默认" />
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: '尺寸',     desc: '图标尺寸',   type: "'26px' | '22px' | '18px'",           defaultVal: "'26px'" },
        { prop: '按钮状态', desc: '交互状态',   type: "'默认' | '不可选中' | '缺货加购'",    defaultVal: "'默认'" },
        { prop: 'badge',    desc: '数字徽标，不传则不显示', type: 'number',                  defaultVal: '—' },
        { prop: 'onClick',  desc: '点击回调',   type: 'MouseEventHandler',                   defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
