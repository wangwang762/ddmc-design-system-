import React, { useState } from 'react'
import { DocPage, DemoSection, DemoRow, ApiTable, RulesPanel} from '../DocLayout'
import { Icon } from '../../components/Icon'
import type { IconName, IconSize } from '../../components/Icon'
// @ts-ignore
import rulesRaw from '../../components/Icon/rules.md?raw'

const ALL_ICONS: IconName[] = [
  'Alarm clock','Bag 1','Bag 2','Bag 3','Balance','Bell','Book','Bookmark','Box 1','Box 2',
  'Browser','Building','Burger','Calendar','Call','Call missed','Call silent','Calling','Camera',
  'Cart','Cart2','Case','Category','Category2','Chart','Chart 1','Check 1','Check 2','Close',
  'Close 1','Close 2','Cloud','Cloud download','Cloud upload','Coffee','Coins','Collapse',
  'Color Palette','Comment','Compas','Component 1','Copy','Coupon 1','Coupon 2','Coupon 3',
  'Credit card','Danger','Delivery','Dislike','Dislike-filled','Document','Document 2',
  'Document 2 edit','Document 2 edit（阿拉伯）','Document 2（阿拉伯）','Document add',
  'Document delite','Document（阿拉伯）','Down','Down 2','Down Left','Down Right','Down circle',
  'Down left circle','Down right circle','Down square','Down square 2','Download 2',
  'Edit 1','Edit 2','Expand','Eye','Filter','Fire','Flag','Folder','Gamepad','Gift','Graph',
  'Headphones','Heart','Heartbeat','Hide','Home','Image','Info circle','Key','Laptop','Layers',
  'Left','Left 2','Left circle','Left square','Left square 2','Lightning','Link','Loading',
  'Location','Lock','Lock check','Lock open','Lock x','Login','Logout','Mail','Message circle',
  'Message square','Message topic','Microphone','Minus','More','More circle','More square',
  'Mouse','Music','Music plate','No sound (microphone)','Notice','Numcode','Oldschool gamepad',
  'Order','Paperclip','Pause','Play','Plus','Pluses','Question circle','RPoint','Receipt',
  'Receipt（阿拉伯）','Refresh','Refund','Rider','Right','Right 2','Right circle','Right square',
  'Right square 2','Rocket','Sale','Save','Scale','Scanner','Screen','Search','Send','Settings',
  'Share','Share2','Shield','Shield 1','Shield 2','Shield 3','Sorter','Spread','Star','Stop',
  'Swap','Swap 2','Time Circle','Time square','Timer','Toggle left','Toggle right','Top','Top2',
  'Trash can','Up','Up 2','Up Left','Up Right','Up circle','Up left circle','Up right circle',
  'Up square','Up square 2','User','Users','Video','Video2','Vip','Volume down','Volume off 3',
  'Volume off 4','Volume up','Wallet','Zoom in','Zoom out','circle-Check','circle-Close',
  'circle-Minus','circle-Plus','iPhone','like','like-filled','locate','widget',
  'Сalculator 1','Сalculator 2',
]

const SIZES: IconSize[] = [12, 16, 24, 32]

export function IconDoc() {
  const [size, setSize] = useState<IconSize>(24)
  const [q, setQ] = useState('')
  const filtered = ALL_ICONS.filter(n => n.toLowerCase().includes(q.toLowerCase()))

  return (
    <DocPage name="Icon" enName="Icon" description={`图标库，共 ${ALL_ICONS.length} 个图标，支持 12 / 16 / 24 / 32 px 四种尺寸，颜色继承 CSS currentColor。`}>
      <DemoSection title="所有图标">
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
          <input
            placeholder="搜索图标名称…"
            value={q}
            onChange={e => setQ(e.target.value)}
            style={{ flex: 1, padding: '6px 12px', borderRadius: 8, border: '1px solid #E6E6E6', fontSize: 13, outline: 'none' }}
          />
          <div style={{ display: 'flex', gap: 4 }}>
            {SIZES.map(s => (
              <button
                key={s}
                onClick={() => setSize(s)}
                style={{
                  padding: '4px 10px', borderRadius: 6, border: 'none', cursor: 'pointer',
                  fontSize: 12, background: size === s ? '#1A1A1A' : '#F5F5F5',
                  color: size === s ? '#fff' : '#666',
                }}
              >{s}px</button>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: 4 }}>
          {filtered.map(name => (
            <div
              key={name}
              title={name}
              onClick={() => navigator.clipboard?.writeText(name)}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                padding: '12px 4px', borderRadius: 8, cursor: 'pointer',
                background: '#FAFAFA', border: '1px solid #F0F0F0',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#F0F7FF')}
              onMouseLeave={e => (e.currentTarget.style.background = '#FAFAFA')}
            >
              <Icon name={name} size={size} color="#1A1A1A" />
              <span style={{ fontSize: 10, color: '#999', textAlign: 'center', lineHeight: 1.2, wordBreak: 'break-all' }}>
                {name}
              </span>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', color: '#999', padding: 40, fontSize: 14 }}>没有匹配的图标</div>
        )}
        <div style={{ marginTop: 12, fontSize: 12, color: '#999' }}>点击图标名称可复制到剪贴板 · 共 {filtered.length} 个</div>
      </DemoSection>

      <DemoSection title="多尺寸对比">
        <DemoRow label="同一图标 — 12 / 16 / 24 / 32 px">
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-end' }}>
            {SIZES.map(s => (
              <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <Icon name="Heart" size={s} color="#FF4444" />
                <span style={{ fontSize: 11, color: '#999' }}>{s}px</span>
              </div>
            ))}
          </div>
        </DemoRow>
      </DemoSection>

      <DemoSection title="颜色继承">
        <DemoRow label="通过父元素 color 控制图标颜色">
          <div style={{ display: 'flex', gap: 16 }}>
            {['#1A1A1A','#06C167','#FF4444','#FF8800','#4A90E2'].map(c => (
              <div key={c} style={{ color: c }}>
                <Icon name="Star" size={24} />
              </div>
            ))}
          </div>
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: 'name',      desc: '图标名称（必填）', type: 'IconName',    defaultVal: '—' },
        { prop: 'size',      desc: '图标尺寸 px',     type: '12 | 16 | 24 | 32', defaultVal: '24' },
        { prop: 'color',     desc: '填充颜色',         type: 'string',      defaultVal: 'currentColor' },
        { prop: 'className', desc: '自定义类名',       type: 'string',      defaultVal: '—' },
        { prop: 'style',     desc: '自定义样式',       type: 'CSSProperties', defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
