import React from 'react'
import { DocPage, DemoSection, DemoRow, MobileFrame, ApiTable, RulesPanel} from '../DocLayout'
import { 叮咚特色 } from '../../components/叮咚特色'
// @ts-ignore
import rulesRaw from '../../components/叮咚特色/rules.md?raw'
import tabImg1 from '../pages/首页/assets/tab-img-1.png'
import tabImg2 from '../pages/首页/assets/tab-img-2.png'
import tabImg3 from '../pages/首页/assets/tab-img-3.png'
import tabImg4 from '../pages/首页/assets/tab-img-4.png'

const TILES = [
  { label: '有机蔬菜',   img: tabImg1 },
  { label: '活鲜水产',   img: tabImg2 },
  { label: '自营肉类',   img: tabImg3 },
  { label: '黑猪鲜猪肉', img: tabImg4 },
]

export function 叮咚特色Doc() {
  return (
    <DocPage name="叮咚特色" enName="Dingdong Feature" description="首页叮咚特色品质之爱模块，固定布局：顶部活动入口横幅 + 瓷片列表。">
      <DemoSection title="完整模块">
        <DemoRow>
          <MobileFrame>
            <叮咚特色
              活动文字="天天赢免单"
              瓷片列表={TILES}
              onActivityClick={() => {}}
              onTileClick={(label) => console.log(label)}
            />
          </MobileFrame>
        </DemoRow>
      </DemoSection>
      <RulesPanel markdown={rulesRaw} />


      <ApiTable rows={[
        { prop: '活动文字',      desc: '顶部活动入口文字',  type: 'string',                  defaultVal: "'天天赢免单'" },
        { prop: '瓷片列表',      desc: '品质瓷片配置',      type: '品质之爱瓷片[]',          defaultVal: '—' },
        { prop: 'onActivityClick', desc: '点击活动入口',   type: '() => void',              defaultVal: '—' },
        { prop: 'onTileClick',   desc: '点击单个瓷片',      type: '(label: string) => void', defaultVal: '—' },
      ]} />
      <ApiTable title="品质之爱瓷片" rows={[
        { prop: 'label', desc: '瓷片标题（宋体显示）', type: 'string', defaultVal: '—' },
        { prop: 'img',   desc: '商品图片 URL',         type: 'string', defaultVal: '—' },
      ]} />
    </DocPage>
  )
}
