// Figma component: NoticeBar（通知条）
// node: 8284:16421
//
// 变体结构：
//   类型=一般  — 深灰底 #3C3C3C，白色文字，可带 icon 或图片
//   类型=重要  — 黄色底 #FFFBE6，橙色文字，可带 icon
//   类型=绿卡  — 浅灰底 #F5F5F5，绿卡 logo + 续费文案 + CTA
//   类型=红包  — 浅灰底 #F5F5F5，红包图片 + 续费文案 + CTA
//   类型=倒计时 — 深灰底，红包图片 + 文案 + 倒计时（橙色）+ CTA

export type NoticeBar类型 = '一般' | '重要' | '绿卡' | '红包' | '倒计时'

export interface NoticeBarProps {
  /** 通知类型，控制背景色和文字色，默认 '一般' */
  类型?: NoticeBar类型
  /** 通知文案（最多14个汉字） */
  文案: string
  /** 左侧图标名称（使用 Icon 组件，适用于 类型=一般/重要 的 icon 样式） */
  iconName?: string
  /** 左侧图片 URL（适用于 类型=一般 的图片样式，以及 绿卡/红包 的 logo） */
  iconSrc?: string
  /** 倒计时文字，如 "00:30:00.0"（仅 类型=倒计时 时显示，橙色） */
  倒计时?: string
  /** 右侧 CTA 按钮文案，如 "去续费"、"去下单" */
  按钮文案?: string
  /** CTA 按钮点击回调 */
  onButtonClick?: () => void
  /** 是否显示关闭按钮，默认 true */
  可关闭?: boolean
  /** 关闭回调 */
  onClose?: () => void
  className?: string
}
