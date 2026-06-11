export interface 状态栏Props {
  /** 显示的时间文字，默认 "9:41" */
  time?: string
  /**
   * 图标 / 文字颜色主题
   * - `'light'`（默认）：白色，适用于深色 / 彩色背景
   * - `'dark'`：深色，适用于白色 / 浅色背景
   */
  theme?: 'light' | 'dark'
  className?: string
}
