import React, { useState } from 'react'
import { DocPage, DemoSection, DemoRow, ApiTable, RulesPanel} from '../DocLayout'
import { Toast } from '../../components/Toast'
import { 按钮 } from '../../components/按钮'
import type { Toast类型 } from '../../components/Toast'
// @ts-ignore
import rulesRaw from '../../components/Toast/rules.md?raw'

export function ToastDoc() {
  const [type, setType] = useState<Toast类型>('基础')
  const [visible, setVisible] = useState(false)
  const contentMap: Record<Toast类型, string> = {
    基础: '提前加购成功，商品到货后可在购物车直接下单',
    成功: '操作成功',
    错误: '操作失败，请重试',
    警告: '库存不足',
    加载: '加载中...',
  }
  const show = (t: Toast类型) => { setType(t); setVisible(true) }
  return (
    <DocPage name="Toast" enName="Toast" description="轻量非打断的操作反馈，自动消失。支持基础/成功/错误/警告/加载 5 种类型。">
      <DemoSection title="5 种类型" desc="点击按钮触发对应 Toast">
        <DemoRow>
          {(['基础', '成功', '错误', '警告', '加载'] as Toast类型[]).map(t => (
            <按钮 key={t} 尺寸="Small" 类型="Secondary" onClick={() => show(t)}>{t}</按钮>
          ))}
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: 'visible',  desc: '是否显示',                                        type: 'boolean',   defaultVal: '—' },
        { prop: '类型',     desc: 'Toast 样式类型',                                  type: "'基础' | '成功' | '错误' | '警告' | '加载'", defaultVal: "'基础'" },
        { prop: 'content',  desc: '文案内容',                                        type: 'string',    defaultVal: '—' },
        { prop: 'duration', desc: '自动关闭时延(ms)，0=不关闭。加载态默认0，其余2000', type: 'number',  defaultVal: '2000' },
        { prop: 'onHide',   desc: 'Toast 消失后回调，用于重置 visible',              type: '() => void', defaultVal: '—' },
      ]} />

      <Toast visible={visible} 类型={type} content={contentMap[type]} duration={type === '加载' ? 3000 : 2000} onHide={() => setVisible(false)} />
    </DocPage>
  )
}
