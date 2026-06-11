import React from 'react'
import { DocPage, DemoSection, DemoRow, ApiTable, RulesPanel} from '../DocLayout'
import { Menu } from '../../components/Menu'
// @ts-ignore
import rulesRaw from '../../components/Menu/rules.md?raw'

export function MenuDoc() {
  return (
    <DocPage name="Menu" enName="Context Menu" description="标题栏右上角「更多」按钮触发的弹出操作菜单，固定宽度 130px，深色半透明背景，顶部三角箭头指向触发器。">
      <DemoSection title="示例">
        <DemoRow label="标准（分享 / 添加到小组件 / 规则）">
          <Menu items={[{ iconName: 'Share2', label: '分享' }, { iconName: 'widget', label: '添加到小组件' }, { iconName: 'Info circle', label: '规则' }]} />
        </DemoRow>
        <DemoRow label="两项">
          <Menu items={[{ iconName: 'Share2', label: '分享' }, { iconName: 'Info circle', label: '规则' }]} />
        </DemoRow>
        <DemoRow label="自定义图标">
          <Menu items={[{ iconName: 'Edit 1', label: '编辑' }, { iconName: 'Bookmark', label: '收藏' }, { iconName: 'Trash can', label: '删除' }]} />
        </DemoRow>
        <DemoRow label="实际使用场景（绝对定位于右上角）">
          <div style={{ position: 'relative', width: 390, height: 140, background: 'linear-gradient(135deg,#1a2a1a,#2d4a2d)', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 8, right: 8 }}>
              <Menu items={[{ iconName: 'Share2', label: '分享' }, { iconName: 'Info circle', label: '规则' }]} arrowRight={10} />
            </div>
          </div>
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: 'items',      desc: '菜单项列表',                       type: 'MenuItem[]',  defaultVal: '—' },
        { prop: 'arrowRight', desc: '箭头距右边距离(px)，对齐触发按钮', type: 'number',     defaultVal: '18' },
      ]} />
      <ApiTable title="MenuItem" rows={[
        { prop: 'iconName', desc: '16px 图标名称', type: 'IconName',    defaultVal: '—' },
        { prop: 'label',    desc: '菜单项文字',    type: 'string',      defaultVal: '—' },
        { prop: 'onClick',  desc: '点击回调',      type: '() => void',  defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
