// Figma component: Toast (轻提示)
// node: 8783:9938
//
// 5 种类型：基础（纯文字）/ 成功 / 错误 / 警告 / 加载
// 居中浮于页面，自动消失（加载态除外）

/**
 * Toast 显示类型：
 * - 基础：纯文字，padding 18px
 * - 成功/错误/警告/加载：顶部 24px 图标 + 文字，padding 24px，gap 12px
 */
export type Toast类型 = '基础' | '成功' | '错误' | '警告' | '加载'

export interface ToastProps {
  /** 是否显示 */
  visible: boolean
  /** 显示文案（加载态可不传） */
  content?: string
  /** 显示类型，默认 '基础' */
  类型?: Toast类型
  /**
   * 自动关闭时延（ms）
   * 默认：基础/成功/错误/警告 = 2000ms；加载 = 0（不自动关闭）
   * 传 0 则永不自动关闭
   */
  duration?: number
  /** Toast 消失时回调，用于重置 visible */
  onHide?: () => void
}
