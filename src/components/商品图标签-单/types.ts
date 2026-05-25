// Figma component: 商品图标签-单
// Figma variants are mapped 1:1 to props — no renaming, no merging

export type 类型 =
  | '粉红底'
  | '橙色底'
  | '黄色底'
  | '绿色底'
  | '白底红字'
  | '白底灰字'

export interface 商品图标签单Props {
  /** Figma variant: 类型 */
  类型: 类型
  /** Label text */
  children: React.ReactNode
  className?: string
}
