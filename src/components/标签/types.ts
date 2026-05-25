// Figma component: 标签 (Tag)
// node: 3617:16873  page: Components

export type 标签颜色 = '绿色' | '红色' | '蓝色' | '标准'
export type 标签尺寸 = '28' | '24' | '18' | '14'
export type 标签类型 = '基本' | '实心' | '空心(实线)' | '空心(虚线)'

export interface 标签Props {
  /** Figma variant: 颜色 — 语义色 */
  颜色?: 标签颜色
  /** Figma variant: 尺寸 — 对应行高 28/24/18/14px */
  尺寸?: 标签尺寸
  /** Figma variant: 类型 — 基本=浅底色, 实心=主色填充, 空心(实线/虚线)=透明+边框 */
  类型?: 标签类型
  /** Figma variant: 圆角 — true=胶囊形, false=直角 */
  圆角?: boolean
  /** 标签文字 */
  children: React.ReactNode
  className?: string
}
