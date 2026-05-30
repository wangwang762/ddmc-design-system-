// Figma component: 叮咚特色品质之爱
// node: 22716:25478 (前景图 bar) + 22716:25520 (心智tab)

export interface 品质之爱瓷片 {
  /** 瓷片标题（宋体显示） */
  label: string
  /** 商品图片 URL */
  img: string
}

export interface 叮咚特色Props {
  /** 活动入口文字，默认"天天赢免单" */
  活动文字?: string
  /** 瓷片列表 */
  瓷片列表: 品质之爱瓷片[]
  /** 点击活动入口 */
  onActivityClick?: () => void
  /** 点击单个瓷片 */
  onTileClick?: (label: string) => void
}
