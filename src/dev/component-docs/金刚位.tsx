import React from 'react'
import { DocPage, DemoSection, DemoRow, MobileFrame, ApiTable, RulesPanel} from '../DocLayout'
import { 金刚位 } from '../../components/金刚位'
// @ts-ignore
import rulesRaw from '../../components/金刚位/rules.md?raw'

import 菜豆制品Img from '../../components/金刚位/assets/菜豆制品.png'
import 肉禽蛋Img   from '../../components/金刚位/assets/肉禽蛋.png'
import 水产海鲜Img from '../../components/金刚位/assets/水产海鲜.png'
import 水果鲜花Img from '../../components/金刚位/assets/水果鲜花.png'
import 速食冻品Img from '../../components/金刚位/assets/速食冻品.png'
import 粮油调味Img from '../../components/金刚位/assets/粮油调味.png'
import 熟食卤味Img from '../../components/金刚位/assets/熟食卤味.png'
import 个护清洁Img from '../../components/金刚位/assets/个护清洁.png'
import 快手菜Img   from '../../components/金刚位/assets/快手菜.png'
import 饮品烘焙Img from '../../components/金刚位/assets/饮品烘焙.png'

const DEMO_ITEMS = [
  { key: '1',  iconSrc: 菜豆制品Img, label: '蔬菜水果' },
  { key: '2',  iconSrc: 肉禽蛋Img,   label: '肉禽蛋奶', badge: '新' },
  { key: '3',  iconSrc: 水产海鲜Img, label: '水产海鲜' },
  { key: '4',  iconSrc: 水果鲜花Img, label: '水果鲜花' },
  { key: '5',  iconSrc: 速食冻品Img, label: '速食冻品' },
  { key: '6',  iconSrc: 粮油调味Img, label: '粮油调味', badge: '角标' },
  { key: '7',  iconSrc: 熟食卤味Img, label: '熟食卤味' },
  { key: '8',  iconSrc: 个护清洁Img, label: '个护清洁' },
  { key: '9',  iconSrc: 快手菜Img,   label: '快手菜' },
  { key: '10', iconSrc: 饮品烘焙Img, label: '饮品烘焙' },
]

export function 金刚位Doc() {
  return (
    <DocPage name="金刚位" enName="Icon Grid" description="首页图标入口宫格，支持每行 5 列，角标可选，内置 squircle 图标形状。">
      <DemoSection title="10 项（第 1 页）">
        <DemoRow>
          <MobileFrame>
            <金刚位 items={DEMO_ITEMS.slice(0, 10)} activePage={0} totalPages={2} />
          </MobileFrame>
        </DemoRow>
      </DemoSection>
      <DemoSection title="5 项">
        <DemoRow>
          <MobileFrame>
            <金刚位 items={DEMO_ITEMS.slice(0, 5)} />
          </MobileFrame>
        </DemoRow>
      </DemoSection>
      <DemoSection title="10 项（第 2 页）">
        <DemoRow>
          <MobileFrame>
            <金刚位 items={DEMO_ITEMS.slice(0, 10)} activePage={1} totalPages={2} />
          </MobileFrame>
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable title="金刚位 API" rows={[
        { prop: 'items',     desc: '图标列表',             type: '金刚位Item[]', defaultVal: '—' },
        { prop: '每行列数',  desc: '每行显示个数',         type: 'number',       defaultVal: '5' },
        { prop: 'activePage', desc: '分页指示器当前页',   type: 'number',       defaultVal: '0' },
        { prop: 'totalPages', desc: '总页数（≥2 才显示）', type: 'number',      defaultVal: '—' },
      ]} />
      <ApiTable title="金刚位Item" rows={[
        { prop: 'key',      desc: '唯一标识',             type: 'string',   defaultVal: '—' },
        { prop: 'iconSrc',  desc: '图标图片 URL',         type: 'string',   defaultVal: '—' },
        { prop: 'label',    desc: '标签文字',             type: 'string',   defaultVal: '—' },
        { prop: 'badge',    desc: '右上角角标文字',       type: 'string',   defaultVal: '—' },
        { prop: 'iconSize', desc: '图标尺寸 px',         type: '48 | 38',  defaultVal: '48' },
        { prop: 'onClick',  desc: '点击回调',             type: '() => void', defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
