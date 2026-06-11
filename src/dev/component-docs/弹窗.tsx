import React, { useState } from 'react'
import { DocPage, DemoSection, DemoRow, ApiTable, RulesPanel} from '../DocLayout'
import { 弹窗 } from '../../components/弹窗'
import { 按钮 } from '../../components/按钮'
// @ts-ignore
import rulesRaw from '../../components/弹窗/rules.md?raw'

export function 弹窗Doc() {
  const [反馈, set反馈] = useState(false)
  const [确认, set确认] = useState(false)
  const [警示, set警示] = useState(false)
  const [多按钮, set多按钮] = useState(false)
  const [输入, set输入] = useState(false)
  const [长文字, set长文字] = useState(false)
  const [inputVal, setInputVal] = useState('')
  return (
    <DocPage name="弹窗" enName="Dialog" description="需要用户确认或输入的全屏遮罩对话框，支持反馈类、确认类、输入类三种结构。">
      <DemoSection title="变体" desc="点击按钮打开对应弹窗">
        <DemoRow label="反馈类 — 仅正文 + 单按钮">
          <按钮 尺寸="Small" 类型="Secondary" onClick={() => set反馈(true)}>打开</按钮>
        </DemoRow>
        <DemoRow label="确认类 — 双按钮">
          <按钮 尺寸="Small" 类型="Secondary" onClick={() => set确认(true)}>打开</按钮>
        </DemoRow>
        <DemoRow label="确认类 — 带警示按钮">
          <按钮 尺寸="Small" 类型="Secondary" onClick={() => set警示(true)}>打开</按钮>
        </DemoRow>
        <DemoRow label="确认类 — 3个按钮（垂直）">
          <按钮 尺寸="Small" 类型="Secondary" onClick={() => set多按钮(true)}>打开</按钮>
        </DemoRow>
        <DemoRow label="输入类">
          <按钮 尺寸="Small" 类型="Secondary" onClick={() => set输入(true)}>打开</按钮>
        </DemoRow>
        <DemoRow label="确认类 — 文字过长强制垂直">
          <按钮 尺寸="Small" 类型="Secondary" onClick={() => set长文字(true)}>打开</按钮>
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: 'visible',          desc: '是否显示',                    type: 'boolean',          defaultVal: '—' },
        { prop: 'title',            desc: '标题文字',                    type: 'string',           defaultVal: '—' },
        { prop: 'description',      desc: '正文内容',                    type: 'ReactNode',        defaultVal: '—' },
        { prop: 'actions',          desc: '操作按钮列表',                type: '弹窗按钮Config[]', defaultVal: '—' },
        { prop: 'stackActions',     desc: '强制双按钮垂直排列',          type: 'boolean',          defaultVal: 'false' },
        { prop: 'inputPlaceholder', desc: '传入后渲染输入类布局',        type: 'string',           defaultVal: '—' },
        { prop: 'inputValue',       desc: '输入框受控值',                type: 'string',           defaultVal: '—' },
        { prop: 'onInputChange',    desc: '输入框变更回调',              type: '(v: string) => void', defaultVal: '—' },
        { prop: 'scrollable',       desc: '正文区可滚动',                type: 'boolean',          defaultVal: 'false' },
        { prop: 'onMaskClick',      desc: '点击遮罩回调',                type: '() => void',       defaultVal: '—' },
      ]} />

      {/* 弹窗实例 */}
      <弹窗 visible={反馈} description="告知当前状态、信息和解决方法，描述文案尽可能控制在三行内。" actions={[{ label: '知道了', kind: 'primary', onClick: () => set反馈(false) }]} onMaskClick={() => set反馈(false)} />
      <弹窗 visible={确认} title="对话框标题" description="告知当前状态、信息和解决方法，描述文案尽可能控制在三行内。" actions={[{ label: '取消', kind: 'secondary', onClick: () => set确认(false) }, { label: '按钮最多字数', kind: 'primary', onClick: () => set确认(false) }]} onMaskClick={() => set确认(false)} />
      <弹窗 visible={警示} title="对话框标题" actions={[{ label: '取消', kind: 'secondary', onClick: () => set警示(false) }, { label: '警示操作', kind: 'danger', onClick: () => set警示(false) }]} onMaskClick={() => set警示(false)} />
      <弹窗 visible={多按钮} title="对话框标题" description="告知当前状态、信息和解决方法，描述文案尽可能控制在三行内。" actions={[{ label: '按钮文案文字内容较长', kind: 'primary', onClick: () => set多按钮(false) }, { label: '单行按钮最多十五个字符文案', kind: 'primary', onClick: () => set多按钮(false) }, { label: '取消', kind: 'secondary', onClick: () => set多按钮(false) }]} onMaskClick={() => set多按钮(false)} />
      <弹窗 visible={输入} title="带输入框对话框" description="告知当前状态、信息和解决方法。" inputPlaceholder="输入文案" inputValue={inputVal} onInputChange={setInputVal} actions={[{ label: '取消', kind: 'secondary', onClick: () => { set输入(false); setInputVal('') } }, { label: '确定', kind: 'primary', onClick: () => set输入(false) }]} onMaskClick={() => set输入(false)} />
      <弹窗 visible={长文字} title="对话框标题" description="告知当前状态、信息和解决方法，描述文案尽可能控制在三行内。" stackActions actions={[{ label: '文字较长的主操作按钮文案', kind: 'primary', onClick: () => set长文字(false) }, { label: '取消', kind: 'secondary', onClick: () => set长文字(false) }]} onMaskClick={() => set长文字(false)} />
    </DocPage>
  )
}
