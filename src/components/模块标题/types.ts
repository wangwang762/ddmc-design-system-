// Figma component: 模块标题 (Section Title)
// node: 10145:19273
//
// 各功能区块的艺术标题，每个变体对应一套独立的 SVG 字形图片。
// 目前实现：今日疯抢（其余变体可按需扩展）

export type 模块标题变体 =
  | '今日疯抢'

export interface 模块标题Props {
  变体: 模块标题变体
  className?: string
  style?: React.CSSProperties
}
