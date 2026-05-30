// Figma component: 地址栏 (定位组件)
// node: 22716:7743

export interface 定位Props {
  /** 收货地址名称 */
  地址?: string
  /** 站点名称 */
  站点?: string
  /** 点击地址区域 */
  onAddressClick?: () => void
  /** 点击消息图标 */
  onMessageClick?: () => void
}
